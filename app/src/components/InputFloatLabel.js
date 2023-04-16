import { useState } from "react"
import {
    ChakraProvider,
    FormControl,
    FormErrorMessage,
    FormHelperText,
    FormLabel,
    Input,
    extendTheme,
    Box
  } from "@chakra-ui/react";
  const activeLabelStyles = {
    transform: "scale(0.85) translateY(-24px)"
  };
  export const theme = extendTheme({
    components: {
      Form: {
        variants: {
          floating: {
            container: {
              _focusWithin: {
                label: {
                  ...activeLabelStyles
                }
              },
              "input:not(:placeholder-shown) + label, .chakra-select__wrapper + label, textarea:not(:placeholder-shown) ~ label": {
                ...activeLabelStyles
              },
              label: {
                top: 0,
                left: 0,
                zIndex: 2,
                position: "absolute",
                backgroundColor: "white",
                pointerEvents: "none",
                mx: 3,
                px: 1,
                my: 2,
                transformOrigin: "left top"
              }
            }
          }
        }
      }
    }
  });
  
  export default function InputFloatLabel({
    Label,
    HelperText,
    ErrorMessage,
    isRequired,
    isInvalid,
    inputId
  }) {
    const [value, setValue] = useState("")

    return (
      <ChakraProvider theme={theme}>
        <Box p={1} w="100%">
          <FormControl 
            variant="floating" 
            id="first-name" 
            isRequired={isRequired} 
            isInvalid={isInvalid}
        >
            <Input 
                placeholder=" " 
                value={value}
                onChange={e=>setValue(e.target.value)}
                id={inputId}
                type="text"
            />
            <FormLabel>{Label}</FormLabel>
            <FormHelperText>{HelperText}</FormHelperText>
            <FormErrorMessage>{ErrorMessage}</FormErrorMessage>
          </FormControl>
        </Box>
      </ChakraProvider>
    );
  }