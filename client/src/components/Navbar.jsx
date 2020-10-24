import { Flex, Heading } from "@chakra-ui/core"
import React from "react"

export default function Navbar(props) {
    return (
        <Flex flex="1" justify="center" align="center">
            <Heading>{props.title}</Heading>
        </Flex>
    )
}
