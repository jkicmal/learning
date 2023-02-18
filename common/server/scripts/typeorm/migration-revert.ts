import { runCommand } from '../utils';

runCommand(
  `yarn run typeorm migration:revert -d ./src/common/modules/database/data-sources/main.data-source.ts`,
);
