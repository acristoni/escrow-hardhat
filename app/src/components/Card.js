import { VStack } from "@chakra-ui/react"

export default function Card({ children, className }) {
    return(
        <VStack
            backgroundColor="white"
            border="none"
            rounded='lg'
            boxShadow="2xl"
            h="auto"
            pt={3}
            pb={6}
            px={3}
            w={["95%", "95%", "80%", "80%", "70%", "60%"]}
            justifyContent="start"
            className={className}
            style={{marginBottom: "30px"}}
        >
            {children}    
        </VStack>
    )
}