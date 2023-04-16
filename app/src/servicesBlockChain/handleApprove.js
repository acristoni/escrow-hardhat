import { ethers } from "ethers";
import approve from "./approve"
import abiEscrow from "../abi/abiEscrow"
import approveContract from "../servicesAPI/approveContract"

const handleApprove = async (contractData, signer, setSection) => {
 
    const escrowContract = new ethers.Contract(contractData.address, abiEscrow, signer)

    escrowContract.on('Approved', () => {
      approveContract(contractData, setSection);
      document.getElementById(escrowContract.address).className =
        'complete';
      document.getElementById(escrowContract.address).innerText =
        "✓ It's been approved!";
    });

    await approve(escrowContract, signer);
}

export default handleApprove