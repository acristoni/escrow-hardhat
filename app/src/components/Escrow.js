import { useState, useEffect } from "react"
import { Text } from "@chakra-ui/react"
import getAccounts from "../servicesBlockChain/getAccounts"
import Card from "./Card"
import handleApprove from '../servicesBlockChain/handleApprove'
import EscrowDetail from './EscrowDetail'
import ButtonStandart from "./ButtonStandart"

export default function Escrow({ escrow, setSection, section }) {
  const [signer, setSigner] = useState();

  useEffect(() => {
    getAccounts(setSigner);
  }, []);

  const handleApproveButton = (e) => {
    e.preventDefault();
    handleApprove(escrow, signer, setSection);
  }

  return (
    <Card className="existing-contract">
          <EscrowDetail title="Arbiter" detail={escrow.arbiter}/>
          <EscrowDetail title="Beneficiary" detail={escrow.beneficiary}/>
          <EscrowDetail title="Value" detail={escrow.value}/>
          {
            section === "Waiting" ? 
            <ButtonStandart 
              label="Approve"
              onClick={handleApproveButton}
              idButton={escrow.address}
            /> :
            <Text color="orange" as='b'>✓ It's been approved!</Text>
          }
    </Card>
  );
}
