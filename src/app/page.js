'use client'

import { useState } from 'react';
import { Button, Center, Text, Table, ScrollArea, Grid, Flex } from '@mantine/core';
import { readTextFile } from '@/components/hackbox/api/readTextFile';


export default function Hackbox() {
  let [data, setData] = useState("");
  return (
    <Flex direction="column">
      <ScrollArea offsetScrollbars>
        <Table>
          <thead>
            <tr>
              <th>Key</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>{data}</tbody>
        </Table>
      </ScrollArea>
      <Center>
        <Button id='read' color="accent" onClick={() => {
          readTextFile().then(setData).catch(setData);
        }}>Read</Button>
      </Center>
    </Flex>
  )
}
