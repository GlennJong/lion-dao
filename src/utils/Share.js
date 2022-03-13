import React from 'react';
import Web3 from 'web3';
import { ethers } from "ethers";
import dotenv from 'dotenv'
dotenv.config()
const faunadb = require('faunadb')
const q = faunadb.query
const web3 = new Web3(Web3.givenProvider);
const contractABI = require("../contract-abi.json");
const BAYC_contractABI = require("../BAYC-contract-abi.json");
const MAYC_contractABI = require("../MAYC-contract-abi.json");
const BAKC_contractABI = require("../BAKC-contract-abi.json");

const contractAddress = process.env.REACT_APP_CONTRACT_ADDRESS
const BAYC_contractAddress = process.env.REACT_APP_BAYC_CONTRACT_ADDRESS
const MAYC_contractAddress = process.env.REACT_APP_MAYC_CONTRACT_ADDRESS
const BAKC_contractAddress = process.env.REACT_APP_BAKC_CONTRACT_ADDRESS


export const shareNFT = async (chain) => {
  const client = new faunadb.Client({secret: process.env.REACT_APP_FAUNADB}) 
  
  function chainMap(chainID){
    if(chainID === "0x1") {
      return {
        name: "Mainnet",
        url: "https://etherscan.io/"
      }
    } else if(chainID === "0x3"){
      return {
        name: "Ropsten Test Network",
        url: "https://ropsten.etherscan.io/"
      }
    } else if(chainID === "0x4"){
      return {
        name: "Rinkeby Test Network",
        url: "https://rinkeby.etherscan.io/"
      }
    } else if(chainID === "0x5"){
      return {
        name: "Goerli Test Network",
        url: "https://goerli.etherscan.io/"
      }
    } else if(chainID === "0x2a"){
      return {
        name: "Kovan Test Network",
        url: "https://kovan.etherscan.io/"
      }
    }
  }

  if (chain !== process.env.REACT_APP_CHAIN_ID) {
    const result = chainMap(process.env.REACT_APP_CHAIN_ID);
    return {
      success: false,
      status: "Something went wrong: You should be using " + result.name,
    };
  }

  // Connect contract
  const NFTContract = new web3.eth.Contract(contractABI, contractAddress);
  const BAYCContract = new web3.eth.Contract(BAYC_contractABI, BAYC_contractAddress);
  const MAYCContract = new web3.eth.Contract(MAYC_contractABI, MAYC_contractAddress);
  const BAKCContract = new web3.eth.Contract(BAKC_contractABI, BAKC_contractAddress);

  const hasMint = await NFTContract.methods.hasMint(window.ethereum.selectedAddress).call();
  // var hasMint = 1

  if (parseInt(hasMint) > 0){
    var tokenId = []
    var shareId;

    // BAYC
    const BAYC_balance = await BAYCContract.methods.balanceOf(window.ethereum.selectedAddress).call()
    .then(async (BAYC_balance) => {
      const BAYC_tokenId = await BAYCContract.methods.tokenOfOwnerByIndex(window.ethereum.selectedAddress, Math.floor(Math.random() * BAYC_balance)).call();
      tokenId.push("BAYC-" + String(BAYC_tokenId).padStart(4, "0"));
    })
    .catch((err) => {
      console.log("No BAYC")
    });

    // MAYC
    const MAYC_balance = await MAYCContract.methods.balanceOf(window.ethereum.selectedAddress).call()
    .then(async (MAYC_balance) => {
      const MAYC_tokenId = await MAYCContract.methods.tokenOfOwnerByIndex(window.ethereum.selectedAddress, Math.floor(Math.random() * MAYC_balance)).call();
      tokenId.push("MAYC-" + String(MAYC_tokenId).padStart(5, "0"));
    })
    .catch((err) => {
      console.log("No MAYC")
    });
    
    // BAKC
    const BAKC_balance = await BAKCContract.methods.balanceOf(window.ethereum.selectedAddress).call()
    .then(async (BAKC_balance) => {
      const BAKC_tokenId = await BAKCContract.methods.tokenOfOwnerByIndex(window.ethereum.selectedAddress, Math.floor(Math.random() * BAKC_balance)).call();
      tokenId.push("BAKC-" + String(BAKC_tokenId).padStart(4, "0"));
    })
    .catch((err) => {
      console.log("No BAKC")
    });

    if (tokenId.length == 0){
      console.log("Normal card");
      return {
        success: true,
        status: "Share your Block Banana card on twitter.",
        cardUrl: "https://drive.google.com/uc?export=download&id=1IXWad_76Rqhwg8P2gErkjaacIagfPABM"
      };
    } else{
      shareId = tokenId[Math.floor(Math.random() * tokenId.length)]

      var imageURI = await client.query(q.Map(q.Paginate(q.Match(q.Index(String(shareId).substring(0, 4)), shareId)),
      q.Lambda("imageView", q.Get(q.Var("imageView")))))
      .then((response) => {
        console.log('success', response.data[0].data);
        return {
          statusCode: 200,
          body: response.data[0].data
        }
      }).catch((error) => {
        console.log('error', error)
        return {
          statusCode: 400,
          body: JSON.stringify(error)
        }
      })
      return {
        success: true,
        status: "Share your Block Banana card on twitter.",
        cardUrl: imageURI.body.imageDownload,
      };
    }
  }else{
    return {
      success: false,
      status: "Please mint Block Banana NFT first.",
    };
  }
};







