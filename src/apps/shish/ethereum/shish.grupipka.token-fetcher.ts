import { Inject } from '@nestjs/common';

import { IAppToolkit, APP_TOOLKIT } from '~app-toolkit/app-toolkit.interface';
import { Register } from '~app-toolkit/decorators';
import { PositionFetcher } from '~position/position-fetcher.interface';
import { AppTokenPosition } from '~position/position.interface';
import { Network } from '~types/network.interface';

import { ShishContractFactory } from '../contracts';
import { SHISH_DEFINITION } from '../shish.definition';

const appId = SHISH_DEFINITION.id;
const groupId = SHISH_DEFINITION.groups.grupipka.id;
const network = Network.ETHEREUM_MAINNET;

@Register.TokenPositionFetcher({ appId, groupId, network })
export class EthereumShishGrupipkaTokenFetcher implements PositionFetcher<AppTokenPosition> {
  constructor(
    @Inject(APP_TOOLKIT) private readonly appToolkit: IAppToolkit,
    @Inject(ShishContractFactory) private readonly shishContractFactory: ShishContractFactory,
  ) {}

  async getPositions() {
    return [];
  }
}
