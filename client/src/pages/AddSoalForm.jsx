import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Text,
} from "@chakra-ui/core"
import React from "react"
import { Sidebar } from "../components"

export default function AddSoalForm() {
    return (
        <>
            <Flex w="100%" h="100vh">
                <Flex
                    flex="1"
                    bg="#56657F"
                    direction="column"
                    padding="2"
                    mr="3"
                >
                    <Sidebar />
                </Flex>
                <Flex flex="4" paddingY="8" paddingX="4">
                    <Flex flex="1" flexDirection="column" paddingX="2" w="80%">
                        <Heading mb="6">Add Your Soal Here!</Heading>
                        <form>
                            <FormControl w="80%" mb="4">
                                <FormLabel mb="1">Pertanyaan</FormLabel>
                                <Input
                                    name="title"
                                    type="text"
                                    placeholder="Put your title here"
                                />
                            </FormControl>
                            <FormControl w="80%" mb="4">
                                <FormLabel mb="1">Image Url</FormLabel>
                                <Input
                                    type="text"
                                    placeholder="Put your score here"
                                />
                            </FormControl>
                            <Flex w="80%">
                                <FormControl w="80%" mb="4" mr="2">
                                    <FormLabel mb="1">Pilihan A</FormLabel>
                                    <Input
                                        type="text"
                                        placeholder="Put your score here"
                                    />
                                </FormControl>
                                <FormControl w="80%" mb="4">
                                    <FormLabel mb="1">Pilihan B</FormLabel>
                                    <Input
                                        type="text"
                                        placeholder="Put your score here"
                                    />
                                </FormControl>
                            </Flex>
                            <Flex w="80%">
                                <FormControl w="80%" mb="4" mr="2">
                                    <FormLabel mb="1">Pilihan C</FormLabel>
                                    <Input
                                        type="text"
                                        placeholder="Put your score here"
                                    />
                                </FormControl>
                                <FormControl w="80%" mb="4">
                                    <FormLabel mb="1">Pilihan D</FormLabel>
                                    <Input
                                        type="text"
                                        placeholder="Put your score here"
                                    />
                                </FormControl>
                            </Flex>
                            <FormControl w="80%" mb="4">
                                <FormLabel mb="1">Kunci Jawaban</FormLabel>
                                <Input
                                    type="text"
                                    placeholder="Put your score here"
                                />
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
        </>
    )
}
