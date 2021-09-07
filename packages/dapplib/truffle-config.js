require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey knife olympic system index return still honey hover praise army genius'; 
let testAccounts = [
"0xf3127f5a63f3b04a3f34f292172805da4ed32c2186aad2e3531b0358ae858ec5",
"0x830ad7d202e380a18e2ea0ee04c856aa5c85305c0b57732ab556a129ca74a6bf",
"0xcb0919cd2b145f0b9a4a7e235c40e9fa6f6d186a9fe7031d122d5ec94d171f87",
"0xbd5de90a8952cdc42fbcb5f1f93df0a4b17b82ae96c90358406d66cb1ce301fe",
"0x700929583d2b2a12900104914399abbe3afff4f08c7b0e29f60bf06f05a3eccd",
"0xf5f062b1fa42d74567b010eb6ae8df82f0bd3e563b299fa3a7cf4f6e2cad9a93",
"0x797af46d0f4ce3f0e859e027749fe2fa189a1ce92c17b93cdaada0e90cf34bdf",
"0x49adb67e824228915042de50d12ddf05fdaa8b54fc806265128ce537f87737e9",
"0x345b529c9d7d83cd1d6c71eb573bc08f2eb1e623ceb6dbc3217489c35f9a4af9",
"0x8265568e6bea4ae67a04e666be10735ed35a26191bc90a940c17cdfc0dfd4b7a"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

