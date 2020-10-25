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

export default function FormLogin() {
    return (
        <Flex flexDirection="column">
            <Heading mb="6">Login to Admin Dashboard</Heading>
            <form>
                <FormControl w="80%" mb="4">
                    <FormLabel mb="1">Email</FormLabel>
                    <Input
                        name="title"
                        type="text"
                        placeholder="Put your title here"
                    />
                </FormControl>
                <FormControl w="80%" mb="4">
                    <FormLabel mb="1">Password</FormLabel>
                    <Input
                        name="score"
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
                    <Text>Login</Text>
                </Button>
            </form>
        </Flex>
    )
}
