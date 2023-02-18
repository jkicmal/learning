import { runCommand } from '../utils';

const migrationName = process.argv[2];

runCommand(
  `yarn run typeorm migration:generate ./src/common/modules/database/migrations/${migrationName}`,
);
