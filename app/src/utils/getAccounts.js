import { ethers } from 'ethers';

async function getAccounts(setAccount, setSigner) {
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    const accounts = await provider.send('eth_requestAccounts', []);
    setAccount(accounts[0]);
    setSigner(provider.getSigner());
}

export default getAccounts;