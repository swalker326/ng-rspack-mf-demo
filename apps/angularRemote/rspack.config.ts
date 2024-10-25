import { NgRspackModuleFederationPlugin } from '@ng-rspack/build';
import config from './module-federation.config';

export default {
  plugins: [new NgRspackModuleFederationPlugin(config, { dts: false })],
};
