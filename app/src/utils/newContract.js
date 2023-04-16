import deploy from '../utils/deploy';
import { ethers } from 'ethers';
import approve from './approve'
import postNewContract from '../services/postNewContract'

async function newContract(signer, setEscrows, escrows) {
    const beneficiary = document.getElementById('beneficiary').value;
    const arbiter = document.getElementById('arbiter').value;
    const value = ethers.BigNumber.from(document.getElementById('wei').value);
    const escrowContract = await deploy(signer, arbiter, beneficiary, value);

    const escrow = {
      address: escrowContract.address,
      arbiter,
      beneficiary,
      value: value.toString(),
    };
    postNewContract(escrow)
    setEscrows([...escrows, escrow]);
}

export default newContract;