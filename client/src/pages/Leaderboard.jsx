import { Flex } from "@chakra-ui/core"
import React from "react"
import { Sidebar } from "../components"

export default function Leaderboard() {
    return (
        <Flex>
            <Flex
                flex="1"
                direction="column"
                bg="gray.700"
                h="100vh"
                px="2"
                py="6"
            >
                <Sidebar />
            </Flex>
            <Flex flex="4" direction="column" padding="10" w="80%">
                Leaderboard Here!
            </Flex>
        </Flex>
    )
}
