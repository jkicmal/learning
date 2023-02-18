import { runCommand } from '../utils';

runCommand(
  `yarn run typeorm migration:run -d ./src/common/modules/database/data-sources/main.data-source.ts`,
);
