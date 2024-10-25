import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'angularRemote',
  exposes: {
    './Routes': 'apps/angularRemote/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
