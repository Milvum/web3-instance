import * as Web3 from 'web3';
import * as winston from 'winston';

const port = process.env.npm_config_web3_port || '8545';
const host = process.env.npm_config_web3_host || 'localhost';
const location = `http://${host}:${port}`;

const provider = new Web3.providers.HttpProvider(location);
const web3 = new Web3(provider);

if (!web3.isConnected()) {
  winston.debug(`Web3 is unable to connect to ${location}`);
}

export default web3;

export {
  web3 as instance,
  Web3,
};
