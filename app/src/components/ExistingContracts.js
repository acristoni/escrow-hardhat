import { useEffect, useState } from 'react';
import getAllContracts from "../services/getAllContract"
import Escrow from '../components/Escrow';
import Card from './Card';
import { Text } from "@chakra-ui/react"

export default function ExistingContracts({ escrows }) {
    const [contractsList, setContractsList] = useState([]) 
    useEffect(()=>{
        if (contractsList.length === 0) {
            const listAllContracts = async() => {
                const response = await getAllContracts()
                setContractsList(response)
            }
    
            listAllContracts()
        }
    },[])

    return (
        <Card className="existing-contracts">
            <Text as='b' fontSize="2xl"> Existing Contracts </Text>
            {
                contractsList && contractsList.length > 0 &&
                contractsList.map((escrow, index) => {
                    return <Escrow key={index} escrow={escrow} />;
            })}
        </Card>
    )
}