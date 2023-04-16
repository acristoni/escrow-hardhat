export default async function approve(escrowContract, signer) {
    const approveTxn = await escrowContract.connect(signer).approve();
    const response = await approveTxn.wait();
    return response
}