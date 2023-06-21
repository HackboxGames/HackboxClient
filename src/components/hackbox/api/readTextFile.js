export async function readTextFile() {

  const dialog = await import("@tauri-apps/api/dialog");
  const fs = await import("@tauri-apps/api/fs");
  const path = await import("@tauri-apps/api/path");

  return new Promise(async (resolve, reject) => {
    const selected = await dialog.open({
      directory: true,
      multiple: false
    });
    let configPath = await path.join(selected, "config.jet");
    let configExists = await fs.exists(configPath);
    if (!configExists) {
      reject(<tr>
        <td>ERROR</td>
        <td>Config file does not exist!</td>
      </tr>);
    }
    let contents = await fs.readTextFile(configPath);
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