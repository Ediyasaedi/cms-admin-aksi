import {
    Button,
    Flex,
    FormControl,
    FormHelperText,
    FormLabel,
    Heading,
    Input,
    Text,
} from "@chakra-ui/core"
import React from "react"
import { Sidebar } from "../components"

export default function AddArtikelForm() {
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
                        <Heading mb="6">Add Your Artikel Here!</Heading>
                        <form>
                            <FormControl w="80%" mb="4">
                                <FormLabel mb="1">Artikel Title</FormLabel>
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
                                <FormHelperText>
                                    <Text>
                                        This will be used for visualization
                                        content
                                    </Text>
                                </FormHelperText>
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
                    <Flex flex="2" boxShadow="xl">
                        <Input
                            as="textarea"
                            h="100%"
                            p="2"
                            placeholder="// Write your artikel content here"
                        />
                    </Flex>
                </Flex>
            </Flex>
        </>
    )
}
