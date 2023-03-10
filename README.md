<img src="https://anystack.sh/img/emblem.svg" width="50" height="50"
     alt="Anystack" >
     
# Electron applications license key demo

This is an example repository of an Electron application that implements the [Electron License SDK](https://github.com/anystack-sh/electron-license) by Anystack.
Add license and add auto-update support your private Electron application in just a matter of minutes with Anystack's plug-and-play licensing package.

* **License activation tracking**.
* Secure auto updates for users with a **valid license**.
* **Plug & Play** integration, it only takes a few lines of code.
* Easy **to customize** via config object.

You will need to register an API key at [Anystack](https://anystack.sh) and have a product ID to use this package.
Anystack will help you make an online living selling your software by setting yourself free from billing and logistics so you can focus on building software.

## Usage
Open `index.js` and set your API key and Product ID:

```js
api: {
  key: '<API-KEY>', // API key with ONLY(!) license:validate and license:activate scope.
  productId: '<PRODUCT-ID>', // Your Anystack product ID
},
```

```shell
yarn install
yarn start
```

If you want to learn more about the SDK, visit the [installation guide](http://anystack.sh/docs/integrations/electron).
