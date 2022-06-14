import { Register } from '~app-toolkit/decorators';
import { AbstractApp } from '~app/app.dynamic-module';

import { ShishContractFactory } from './contracts';
import { EthereumShishGrupipkaTokenFetcher } from './ethereum/shish.grupipka.token-fetcher';
import { ShishAppDefinition, SHISH_DEFINITION } from './shish.definition';

@Register.AppModule({
  appId: SHISH_DEFINITION.id,
  providers: [EthereumShishGrupipkaTokenFetcher, ShishAppDefinition, ShishContractFactory],
})
export class ShishAppModule extends AbstractApp() {}
