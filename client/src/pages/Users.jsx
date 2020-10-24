import React from "react"
import { Navbar, Sidebar } from "../components"
import * as table from "../components/table"
import { Button, Flex, IconButton, FormControl, Input } from "@chakra-ui/core"
import { Link } from "react-router-dom"

function Users() {
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
                <Navbar title="Management Users" />
                <Flex justify="space-between" mx="20">
                    <Link to="/add-user">
                        <Button variantColor="teal" size="md" mr="10">
                            Add User
                        </Button>
                    </Link>
                    <Flex>
                        <FormControl>
                            <Input
                                id="search_wacana"
                                placeholder="Search user..."
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
                                <table.Th>Email</table.Th>
                                <table.Th>Nama</table.Th>
                                <table.Th>Image Url</table.Th>
                                <table.Th>Role</table.Th>
                                <table.Th>Action</table.Th>
                            </table.Tr>
                        </table.Thead>
                        <table.TBody>
                            <table.Tr>
                                <table.Td>jhondoe@mail.com</table.Td>
                                <table.Td>Jhon Emmanuel Doe</table.Td>
                                <table.Td>http://bit.ly/fake-imgurl</table.Td>
                                <table.Td>Siswa</table.Td>
                                <table.Td>
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

export default Users
