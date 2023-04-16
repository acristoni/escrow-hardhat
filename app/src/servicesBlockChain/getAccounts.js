import { ethers } from 'ethers';

async function getAccounts(setSigner, setAccount) {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    if (setAccount) {
        const accounts = await provider.send('eth_requestAccounts', []);
        setAccount(accounts[0]);
    }
    if (setSigner) {
        setSigner(provider.getSigner());
    }
}

export default getAccounts;