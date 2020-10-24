import { Flex } from "@chakra-ui/core"
import React from "react"
import { CardComponents, Navbar, Sidebar } from "../components"

function Home() {
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
            <Flex flex="4" direction="column">
                <Navbar title="Dashboard" />
                <Flex flex="7">
                    <Flex flex="1" p="10" justify="center" align="center">
                        <CardComponents
                            title="Wacana"
                            status="10 Wacana * 94 Soal"
                        />
                    </Flex>
                    <Flex flex="1" p="10" justify="center" align="center">
                        <CardComponents
                            title="Users"
                            status="523 Siswa * 15 Penulis"
                        />
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default Home
