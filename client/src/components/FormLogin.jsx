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
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import { postLogin } from "../store/action"

export default function FormLogin() {
    const [form, setForm] = useState({
        email: "",
        password: "",
    })
    const isAuthentication = useSelector((state) => state.auth)
    const dispatch = useDispatch()
    const history = useHistory()

    function handleOnChange(e) {
        let { name, value } = e.target
        let newForm = { ...form, [name]: value }
        setForm(newForm)
    }

    function handleOnSubmit(e) {
        e.preventDefault()
        dispatch(postLogin(form))
        helperPush()
    }

    async function helperPush() {
        try {
            if (await isAuthentication) {
                history.push("/")
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Flex flexDirection="column">
            <Heading mb="6">Login Dashboard Admin</Heading>
            <form onSubmit={(event) => handleOnSubmit(event)}>
                <FormControl w="80%" mb="4">
                    <FormLabel mb="1">Email</FormLabel>
                    <Input
                        name="email"
                        type="text"
                        value={form.email}
                        placeholder="Put your email here"
                        onChange={handleOnChange}
                    />
                </FormControl>
                <FormControl w="80%" mb="4">
                    <FormLabel mb="1">Password</FormLabel>
                    <Input
                        name="password"
                        type="password"
                        value={form.password}
                        placeholder="Put your password here"
                        onChange={handleOnChange}
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
