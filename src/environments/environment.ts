// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  paypalButton: 'F2TEZ9VFGFTWG',
  paypalAction: 'https://www.sandbox.paypal.com/cgi-bin/webscr',
  paypalReturn: 'https://localhost:4200/',
  paypalCancel: 'https://localhost:4200/',
  paypalNotification: 'https://legal-server.herokuapp.com/ipn',
  paypalButtonImg: 'https://www.sandbox.paypal.com/en_US/i/btn/btn_buynowCC_LG.gif',
  yearPack: { name: 'Year Pack', price: 399, days: 365 },
  fortyFivePack: { name: 'FortyFive Pack', price: 99, days: 45 },
  cardUrl:'http://localhost:8080/card'
};
