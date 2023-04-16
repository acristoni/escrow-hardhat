import { useState }from "react"
import { Button } from "@chakra-ui/react"

export default function ButtonStandart({onClick, idButton, label}) {
    const [isLoading, setIsLoading] = useState(false)

    setTimeout(() => {
        setIsLoading(false)
    }, 3000);

    return <Button
        id={idButton}
        onClick={onClick}
        isLoading={isLoading}
        colorScheme='orange' 
        variant='solid'
    >{label}</Button>
}