import { Button, Flex, IconButton, FormControl, Input } from "@chakra-ui/core"
import React from "react"
import { Navbar, Sidebar } from "../components"
import * as table from "../components/table"
import { Link } from "react-router-dom"

function Wacana() {
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
                <Navbar title="Management Wacana" />
                <Flex justify="space-between" mx="20">
                    <Link to="/add-wacana">
                        <Button variantColor="teal" size="md" mr="10">
                            Add Wacana
                        </Button>
                    </Link>
                    <Flex>
                        <FormControl>
                            <Input
                                id="search_wacana"
                                placeholder="Search wacana..."
                            />
                        </FormControl>
                        <Button variantColor="teal" size="md">
                            Search
                        </Button>
                    </Flex>
                </Flex>
                <Flex flex="7">
                    <table.Table w="90%" mx="auto" mt="8">
                        <table.Thead>
                            <table.Tr
                                borderBottom="2px"
                                borderTop="2px"
                                py="1"
                                mb="2"
                            >
                                {" "}
                                <table.Th>Title</table.Th>
                                <table.Th>Image Url</table.Th>
                                <table.Th>Kelas</table.Th>
                                <table.Th>Penulis</table.Th>
                                <table.Th>Action</table.Th>
                            </table.Tr>
                        </table.Thead>
                        <table.TBody>
                            <table.Tr>
                                <table.Td>Memulai Kembali</table.Td>
                                <table.Td>http://bit.ly/fakeurl</table.Td>
                                <table.Td>X (Sepuluh)</table.Td>
                                <table.Td>Rahajeng Ayu</table.Td>
                                <table.Td>
                                    <Link to="/wacana/2">
                                        <IconButton
                                            mr="2"
                                            aria-label="add questions"
                                            icon="attachment"
                                        />
                                    </Link>
                                    <IconButton
                                        mr="2"
                                        aria-label="update"
                                        icon="edit"
                                    />
                                    <IconButton
                                        mr="2"
                                        aria-label="delete"
                                        icon="delete"
                                    />
                                </table.Td>
                            </table.Tr>
                        </table.TBody>
                    </table.Table>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default Wacana
