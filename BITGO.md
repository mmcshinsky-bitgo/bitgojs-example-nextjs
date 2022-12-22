# BitGo Developer Information

This example loads in the full `bitgo` package. Due to the nature of many of the blockchain packages used for all blockchains offered in the `bitgo` package, browser resolutions are required and defined in the [webpack](./next.config.js) configuration file.

This example makes use of the BitGo SDK packages in a few key places:
* [next.config.js](./next.config.js) - Webpack configurations
* [services/bitgo.ts](./services/bitgo.ts) - Reusable instance of `bitgo`
* [pages/index.tsx](./pages/index.tsx) - Client-side usage
* [pages/api/me.ts](./pages/api/me.ts) - Server-side usage

## Modularization

To make use of fewer packages, smaller dependency sizes, and less browser resolutions, consider using the modular approach.

## Example:

```javascript
import { BitGoAPI } from '@bitgo/sdk-api';
import { Tbtc } from '@bitgo/sdk-coin-btc';

const bitgo = new BitGoAPI({ env: 'test'});
bitgo.register('tbtc', Tbtc.createInstance);
```