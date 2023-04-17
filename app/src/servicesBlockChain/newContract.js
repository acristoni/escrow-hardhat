import deploy from './deploy'
import { ethers } from 'ethers'
import postNewContract from '../servicesAPI/postNewContract'

async function newContract(signer, setEscrows, escrows, setSection) {
    const beneficiary = document.getElementById('beneficiary').value;
    const arbiter = document.getElementById('arbiter').value;
    const ethValue = document.getElementById('eth').value;
    const value = ethers.utils.parseUnits(ethValue,"ether")
    const escrowContract = await deploy(signer, arbiter, beneficiary, value);

    const escrow = {
      address: escrowContract.address,
      arbiter,
      beneficiary,
      value: value.toString(),
      approved: false
    };
    postNewContract(escrow, setSection)
    setEscrows([...escrows, escrow]);
}

export default newContract;