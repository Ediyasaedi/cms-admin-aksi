import {
    Flex,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Heading,
    IconButton,
    Button,
} from "@chakra-ui/core"
import React from "react"
import { Sidebar } from "../components"
import * as table from "../components/table"
import { Link } from "react-router-dom"

export default function DetailWacana() {
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
                <Heading mb="6">Wacana: Memulai Kembali</Heading>
                <Tabs variant="soft-rounded" variantColor="green">
                    <TabList>
                        <Tab>Tabel Artikel</Tab>
                        <Tab>Tabel Soal</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <Flex justify="end">
                                <Link to="/wacana/2/add-artikel">
                                    <Button variantColor="teal" size="md">
                                        Add Artikel
                                    </Button>
                                </Link>
                            </Flex>
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
                                        <table.Th>Konten</table.Th>
                                        <table.Th>Action</table.Th>
                                    </table.Tr>
                                </table.Thead>
                                <table.TBody>
                                    <table.Tr>
                                        <table.Td>
                                            Artikel 1 Memulai Kembali
                                        </table.Td>
                                        <table.Td>
                                            http://bit.ly/fakeurl
                                        </table.Td>
                                        <table.Td>
                                            Open Detail:
                                            <IconButton
                                                mr="2"
                                                aria-label="update"
                                                icon="attachment"
                                            />
                                        </table.Td>
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
                        </TabPanel>
                        <TabPanel>
                            <Flex justify="end">
                                <Link to="/wacana/2/add-soal">
                                    <Button variantColor="teal" size="md">
                                        Add Soal
                                    </Button>
                                </Link>
                            </Flex>
                            <table.Table w="90%" mx="auto" mt="8">
                                <table.Thead>
                                    <table.Tr
                                        borderBottom="2px"
                                        borderTop="2px"
                                        py="1"
                                        mb="2"
                                    >
                                        {" "}
                                        <table.Th>Pertanyaan</table.Th>
                                        <table.Th>Pilihan A</table.Th>
                                        <table.Th>Pilihan B</table.Th>
                                        <table.Th>Pilihan C</table.Th>
                                        <table.Th>Pilihan D</table.Th>
                                        <table.Th>Kunci Jawaban</table.Th>
                                        <table.Th>Action</table.Th>
                                    </table.Tr>
                                </table.Thead>
                                <table.TBody>
                                    <table.Tr>
                                        <table.Td>
                                            Berapakah jumlah kaki ayam?
                                        </table.Td>
                                        <table.Td>Satu</table.Td>
                                        <table.Td>Dua</table.Td>
                                        <table.Td>Tiga</table.Td>
                                        <table.Td>Empat</table.Td>
                                        <table.Td>Dua</table.Td>
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
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Flex>
        </Flex>
    )
}
