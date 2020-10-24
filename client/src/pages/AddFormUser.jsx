import React from "react"
import {
    Button,
    Flex,
    FormControl,
    Select,
    FormLabel,
    Heading,
    Input,
    Text,
} from "@chakra-ui/core"
import { Navbar, Sidebar } from "../components"

function AddFormUser() {
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
                <Flex flex="1" flexDirection="column">
                    <Heading mb="6">Add New User Here!</Heading>
                    <form>
                        <FormControl w="80%" mb="4">
                            <FormLabel mb="1">Email</FormLabel>
                            <Input
                                type="text"
                                placeholder="Put your title here"
                            />
                        </FormControl>
                        <FormControl w="80%" mb="4">
                            <FormLabel mb="1">Nama</FormLabel>
                            <Input
                                type="text"
                                placeholder="Put your score here"
                            />
                        </FormControl>
                        <FormControl w="80%" mb="4">
                            <FormLabel mb="1">Image Url</FormLabel>
                            <Input
                                name="timeLimit"
                                type="text"
                                placeholder="Put your time limit here"
                            />
                        </FormControl>
                        <FormControl w="80%" mb="4">
                            <FormLabel mb="1">Role</FormLabel>
                            <Select placeholder="Select role">
                                <option value="1">Penulis</option>
                                <option value="2">Siswa</option>
                            </Select>
                        </FormControl>

                        <Button
                            mt="6"
                            variantColor="green"
                            variant="solid"
                            type="submit"
                        >
                            <Text>Submit</Text>
                        </Button>
                    </form>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default AddFormUser
