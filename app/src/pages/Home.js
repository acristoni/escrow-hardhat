import { useEffect, useState } from 'react';
import { VStack } from "@chakra-ui/react"
import Header from '../components/Header'
import NewContract from '../components/NewContract'
import ExistingContracts from '../components/ExistingContracts';

export default function Home() {
    const [escrows, setEscrows] = useState([]);
    const [section, setSection] = useState("NewContract")

    useEffect(()=>{
        const queryString = window.location.search;
        
        switch (queryString) {
            case "?newcontract":
                setSection("NewContract")
                break;
            case "?waiting":
                setSection("Waiting")
                break;
            case "?approved":
                setSection("Approved")
                break;
            default:
                setSection("NewContract")
                break;
        }
    },[])

    return (
        <VStack
            w="100vw"
            minH="100vh"
            backgroundColor='orange.50'
        >
            <Header/>
            <VStack
                w="100vw"
                py={6}
            >
                {
                    section === "NewContract" ?
                    <NewContract 
                        escrows={escrows}
                        setEscrows={setEscrows}
                    /> :
                    <ExistingContracts 
                        escrows={escrows}
                        section={section}
                    />
                }
            </VStack>
        </VStack>
    )
}