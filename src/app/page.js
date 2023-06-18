'use client'

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Button, Center, Text, Table } from '@mantine/core';

function read() {
  return new Promise(async (resolve, reject) => {
    const selected = await __TAURI__.dialog.open({
      directory: true,
      multiple: false
    });
    let configPath = await __TAURI__.path.join(selected, "config.jet");
    let configExists = await __TAURI__.fs.exists(configPath);
    if (!configExists) {
      reject(<tr>
        <td>ERROR</td>
        <td>Config file does not exist!</td>
      </tr>);
    }
    let contents = await __TAURI__.fs.readTextFile(configPath);
    let parsed = JSON.parse(contents);
    let keys = Object.keys(parsed);
    let rows = [];
    for (let i = 0; i < keys.length; i++) {
      let key = keys[i];
      let value = parsed[key];
      rows.push(<tr key={i}>
        <td>{key}</td>
        <td>{value}</td>
      </tr>);
    }
    resolve(rows);
  });
}

export default function Hackbox() {
  let [data, setData] = useState("");
  useEffect(() => {
    let readButton = document.getElementById("read");
    readButton.onclick = () => {
      read().then(setData).catch(setData);
    }
  }, []);
  return (
    <>
      <Center>
        <Table>
          <thead>
            <tr>
              <th>Key</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody style={{ color: "white" }}>{data}</tbody>
        </Table>
        <Button id='read'>Read</Button>
      </Center>
      <Center>
        <Link href='/games'>Games</Link>
      </Center>
    </>
  )
}
