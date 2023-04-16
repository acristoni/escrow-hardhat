import { useState, useEffect } from "react"
import getAccounts from "../utils/getAccounts"
import Card from "./Card"
import handleApprove from '../utils/handleApprove'
import EscrowDetail from './EscrowDetail'
import ButtonStandart from "./ButtonStandart"

export default function Escrow({ escrow }) {
  const [signer, setSigner] = useState();

  useEffect(() => {
    getAccounts(setSigner);
  }, []);

  const handleApproveButton = (e) => {
    e.preventDefault();
    handleApprove(escrow, signer);
  }

  return (
    <Card className="existing-contract">
          <EscrowDetail title="Arbiter" detail={escrow.arbiter}/>
          <EscrowDetail title="Beneficiary" detail={escrow.beneficiary}/>
          <EscrowDetail title="Value" detail={escrow.value}/>
          <ButtonStandart 
              label="Approve"
              onClick={handleApproveButton}
              idButton={escrow.address}
          />
    </Card>
  );
}
