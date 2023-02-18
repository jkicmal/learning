import { exec } from 'child_process';

export const runCommand = (command: string) => {
  exec(command, (error, stdout, stderr) => {
    if (error !== null) console.error(stderr);
    console.log(stdout);
  });
};
