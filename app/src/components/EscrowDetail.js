import { VStack, Text } from "@chakra-ui/react";

export default function EscrowDetail({ title, detail }) {
    return (
        <VStack maxW="90%">
            <Text
                style={{margin: 0}}
                as='b'
            >{title}</Text>
            <Text
                style={{margin: 0}}
                noOfLines={1}
                overflowX="hidden"
                w="100%"
            >{detail}</Text>
        </VStack>
    )
}