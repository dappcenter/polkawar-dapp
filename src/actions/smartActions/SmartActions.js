import airdropContract from './../../utils/airdropConnection';
import itemContract from './../../utils/itemConnection';
import characterContract from './../../utils/characterConnection';
import pwrContract from './../../utils/pwrConnection';
import constants from './../../utils/constants';
import axios from 'axios';
import imageBaseUrl from './../imageBaseUrl';

//Airdrop Functions

//READ is user joined airdrop
//RETURNS number
export const isJoinAirdrop = (address) => {
  return airdropContract.methods.isJoinAirdrop(address).call((err, response) => {
    return response;
  });
};

//Write getAirdrop
//RETURNS only execution function
export const getAirdrop = () => {
  let userProvidedSeed =
    'stable elegant thrive remind fitness carbon link lecture icon same license buyer final skirt holiday';

  return airdropContract.methods.getAirdrop(userProvidedSeed).send((err, response) => {
    console.log('Executed');
    return true;
  });
};

//READ get NFT item hash
//RETURNS Item json string
export const tokenURI = (tokenId) => {
  return itemContract.methods.tokenURI(tokenId).call(async (err, response) => {
    return response;
  });
};

//Character Functions

//WRITE create new character for user
//RETURNS Item json string
export const createItem = (address, characterClass) => {
  let level0Characters = {
    Archer: 'QmPcXjjpsVAAKhd7qk6xknaUj3k1S2ypWMXRRBa5GM77wZ',
    Magician: 'QmVHa4x8irQfGvHPDtSxCKgNZHcQKXV388hmCVZ7LvQ8wZ',
    Warrior: 'QmV4JekQLh65rBRQVR7A5u3SfaTHyrniVbxzbiihYwDqiR',
  };
  let characterURI = level0Characters[characterClass];
  console.log('Address' + address);
  console.log('URI' + characterURI);
  return characterContract.methods.createItem(address, characterURI).send({ from: address });
};

//READ get Owner Token ID
//RETURNS Item json string
export const tokenOfOwnerByIndex = (address, value) => {
  return characterContract.methods.tokenOfOwnerByIndex(address, value).call(async (err, response) => {
    return response;
  });
};

//READ get Character item
//RETURNS Character json string
export const tokenURICharacter = (tokenId) => {
  return itemContract.methods.tokenURI(tokenId).call(async (err, response) => {
    return response;
  });
};