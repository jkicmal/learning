import mainDataSource from './data-sources/main.data-source';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = mainDataSource;
      return dataSource.initialize();
    },
  },
];
