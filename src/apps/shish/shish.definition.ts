import { Register } from '~app-toolkit/decorators';
import { appDefinition, AppDefinition } from '~app/app.definition';
import { AppAction, AppTag, GroupType } from '~app/app.interface';
import { Network } from '~types/network.interface';

export const SHISH_DEFINITION = appDefinition({
  id: 'shish',
  name: 'shish',
  description: 'test shish app',
  url: 'https://github.com/pshishkin/zapper-studio',

  groups: {
    grupipka: {
      id: 'grupipka',
      type: GroupType.TOKEN,
      label: 'Grupipkus',
    },

    notken: {
      id: 'notken',
      type: GroupType.POSITION,
      label: 'NoTken',
    },
  },

  tags: [AppTag.STAKING, AppTag.YIELD_AGGREGATOR],
  keywords: [],
  links: {},

  supportedNetworks: {
    [Network.ETHEREUM_MAINNET]: [AppAction.VIEW],
    [Network.POLYGON_MAINNET]: [AppAction.VIEW],
  },

  primaryColor: '#fff',
});

@Register.AppDefinition(SHISH_DEFINITION.id)
export class ShishAppDefinition extends AppDefinition {
  constructor() {
    super(SHISH_DEFINITION);
  }
}

export default SHISH_DEFINITION;
