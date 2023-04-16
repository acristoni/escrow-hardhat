import { useState, useEffect } from "react"
import { Text } from "@chakra-ui/react"
import getAccounts from "../servicesBlockChain/getAccounts"
import newContract from "../servicesBlockChain/newContract"
import InputFloatLabel from "./InputFloatLabel";
import Card from "./Card"
import ButtonStandart from "./ButtonStandart"

export default function NewContract({ setEscrows, escrows }) {
    const [signer, setSigner] = useState()

    useEffect(() => {
        getAccounts(setSigner);
    }, []);

    const handleDeployButton = (e) => {
        e.preventDefault();
        newContract(signer, setEscrows, escrows);
    }

    return (
        <Card className="contract">
            <Text as='b' fontSize="2xl"> New Contract </Text>
            <InputFloatLabel 
                inputId="arbiter"
                Label="Arbiter Address"
                isRequired
            />
            <InputFloatLabel 
                inputId="beneficiary"
                Label="Beneficiary Address"
                isRequired
            />
            <InputFloatLabel 
                inputId="wei"
                Label="Deposit Amount (in Wei)"
                isRequired
            />
            <ButtonStandart 
                label="Deploy"
                onClick={handleDeployButton}
                idButton="deploy"
            />
        </Card>
    )
}