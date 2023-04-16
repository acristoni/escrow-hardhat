import { ethers } from 'ethers';
import { useEffect, useState } from 'react';
import { VStack } from "@chakra-ui/react"
import deploy from '../deploy';
import Escrow from '../Escrow';
import Header from '../components/Header'

const provider = new ethers.providers.Web3Provider(window.ethereum);

export async function approve(escrowContract, signer) {
  const approveTxn = await escrowContract.connect(signer).approve();
  await approveTxn.wait();
}

export default function Home() {
    const [escrows, setEscrows] = useState([]);
  const [account, setAccount] = useState();
  const [signer, setSigner] = useState();

  useEffect(() => {
    async function getAccounts() {
      const accounts = await provider.send('eth_requestAccounts', []);

      setAccount(accounts[0]);
      setSigner(provider.getSigner());
    }

    getAccounts();
  }, [account]);

  async function newContract() {
    const beneficiary = document.getElementById('beneficiary').value;
    const arbiter = document.getElementById('arbiter').value;
    const value = ethers.BigNumber.from(document.getElementById('wei').value);
    const escrowContract = await deploy(signer, arbiter, beneficiary, value);


    const escrow = {
      address: escrowContract.address,
      arbiter,
      beneficiary,
      value: value.toString(),
      handleApprove: async () => {
        escrowContract.on('Approved', () => {
          document.getElementById(escrowContract.address).className =
            'complete';
          document.getElementById(escrowContract.address).innerText =
            "✓ It's been approved!";
        });

        await approve(escrowContract, signer);
      },
    };

    setEscrows([...escrows, escrow]);
  }
  return (
    <VStack
        w="100vw"
        minH="100vh"
    >
        <Header/>
        <div className="contract">
        <h1> New Contract </h1>
        <label>
            Arbiter Address
            <input type="text" id="arbiter" />
        </label>

        <label>
            Beneficiary Address
            <input type="text" id="beneficiary" />
        </label>

        <label>
            Deposit Amount (in Wei)
            <input type="text" id="wei" />
        </label>

        <div
            className="button"
            id="deploy"
            onClick={(e) => {
            e.preventDefault();

            newContract();
            }}
        >
            Deploy
        </div>
        </div>

        <div className="existing-contracts">
        <h1> Existing Contracts </h1>

        <div id="container">
            {escrows.map((escrow) => {
            return <Escrow key={escrow.address} {...escrow} />;
            })}
        </div>
        </div>
    </VStack>
  )
}