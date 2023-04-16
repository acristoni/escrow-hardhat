import approve from "./approve"

const handleApprove = async (escrowContract, signer) => {
    escrowContract.on('Approved', () => {
      document.getElementById(escrowContract.address).className =
        'complete';
      document.getElementById(escrowContract.address).innerText =
        "✓ It's been approved!";
    });

    await approve(escrowContract, signer);
}

export default handleApprove