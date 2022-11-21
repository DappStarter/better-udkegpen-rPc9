require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give close brown slab carpet rival museum hole guess lobster fortune gather'; 
let testAccounts = [
"0xb57eb0fb55cde2ebf99d40f47c3114213159a19b2033a24082e7ab8b3a6f82e3",
"0xbcd08801989e3f76051040e4663e39069c711b60ea8c122f47bea15e36a0b319",
"0x889440ce1467a0b4ba252ddc63988c98c7386672c9d71741d09b7457ad655d41",
"0x55078d6716b326768c1f3f4d523ce0d3fd923b6867ccc412d0e1915b943e7c6e",
"0x58ef1255b0486fcf283de5c3b12b454f5af4e57a6f39230f50a0d3dd9df7c0c2",
"0xd098ee8768a3105dfa560def15cbd41b84c2ef519e8d6180fa86e9a484daf580",
"0x6f86ac50e91193791ebfe9ddbe3c860edb6ed1eba0632c75a074ab84758d7491",
"0xcc8987f210fff031206331e47e69e745d467139f6e6ed0425fe2cc3166e49436",
"0x3ca6e3ab717d5dbb8be1678b0775d4f7050f10f1b2add288dc8d0b543af6c80d",
"0x120eb5251af840b2e5208abc0c74733b4c5b297f7a982fc89dd0dd51604792cd"
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

