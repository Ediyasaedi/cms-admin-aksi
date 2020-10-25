import { Flex } from "@chakra-ui/core"
import React from "react"
import { FormLogin } from "../components"

export default function Login() {
    return (
        <Flex>
            <Flex flex="2" direction="column" h="100vh" px="2" py="6"></Flex>
            <Flex flex="1" justifyContent="center" align="center">
                <FormLogin />
            </Flex>
        </Flex>
    )
}
