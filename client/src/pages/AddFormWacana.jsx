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

function AddFormWacana() {
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
                    <Heading mb="6">Add New Wacana Here!</Heading>
                    <form>
                        <FormControl w="80%" mb="4">
                            <FormLabel mb="1">Wacana Title</FormLabel>
                            <Input
                                name="title"
                                type="text"
                                placeholder="Put your title here"
                            />
                        </FormControl>
                        <FormControl w="80%" mb="4">
                            <FormLabel mb="1">Image Url</FormLabel>
                            <Input
                                name="score"
                                type="text"
                                placeholder="Put your score here"
                            />
                        </FormControl>
                        <FormControl w="80%" mb="4">
                            <FormLabel mb="1">Kelas</FormLabel>
                            <Input
                                name="timeLimit"
                                type="text"
                                placeholder="Put your time limit here"
                            />
                        </FormControl>
                        <FormControl w="80%" mb="4">
                            <FormLabel mb="1">Penulis</FormLabel>
                            <Select placeholder="Select penulis">
                                <option value="1">Mira Lesmana</option>
                                <option value="2">J.K Rowling</option>
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

export default AddFormWacana
