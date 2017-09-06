// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBCw5raMukOBHOfMtRAD8lYO3cCsL_udZw',
    authDomain: 'quotes-i-like.firebaseapp.com',
    databaseURL: 'https://quotes-i-like.firebaseio.com',
    projectId: 'quotes-i-like',
    storageBucket: 'quotes-i-like.appspot.com',
    messagingSenderId: '210925766672'
  }
};
