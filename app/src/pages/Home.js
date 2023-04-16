import { useState } from 'react';
import { VStack } from "@chakra-ui/react"
import Header from '../components/Header'
import NewContract from '../components/NewContract'
import ExistingContracts from '../components/ExistingContracts';

export default function Home() {
    const [escrows, setEscrows] = useState([]);

    return (
        <VStack
            w="100vw"
            minH="100vh"
        >
            <Header/>
            <NewContract 
                escrows={escrows}
                setEscrows={setEscrows}
            />
            <ExistingContracts escrows={escrows}/>
        </VStack>
    )
}