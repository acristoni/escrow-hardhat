import { useEffect, useState } from 'react';
import getAllContracts from "../servicesAPI/getAllContract"
import Escrow from '../components/Escrow';
import Card from './Card';
import { Text } from "@chakra-ui/react"

export default function ExistingContracts({ setSection, section }) {
    const [contractsList, setContractsList] = useState([])

    useEffect(()=>{
        if (contractsList.length === 0) {
            const listAllContracts = async() => {
                const response = await getAllContracts()
                switch (section) {
                    case "Waiting":
                        const waitingContracts = response.filter(contract => contract.approved === false)
                        setContractsList(waitingContracts)
                        break;
                    case "Approved":
                        const approvedContracts = response.filter(contract => contract.approved === true)
                        setContractsList(approvedContracts)
                        break;
                    default:
                        setContractsList(response)
                        break;
                }
            }
            
            listAllContracts()
        }
    },[contractsList, section])

    return (
        <Card className="existing-contracts">
            <Text as='b' fontSize="2xl">{ 
                section === "Waiting" ? 
                'Waiting Contracts' : 
                'Approved Contracts'}
            </Text>
            {
                contractsList && contractsList.length > 0 &&
                contractsList.map((escrow, index) => {
                    return <Escrow 
                        key={index} 
                        escrow={escrow} 
                        setSection={setSection}
                        section={section}
                    />;
            })}
        </Card>
    )
}