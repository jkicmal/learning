import { exec } from 'child_process';

const command = `yarn run typeorm migration:generate -d ./src/common/modules/database/data-sources/main.data-source.ts ./src/common/database/migrations/${process.argv[2]}`;

(() =>
  exec(command, (error, stdout, stderr) => {
    if (error !== null) {
      console.error(stderr);
    }
    console.log(stdout);
  }))();
