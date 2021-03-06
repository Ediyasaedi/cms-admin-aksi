import React, { useState } from "react"
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
import { Sidebar } from "../components"
import { useDispatch } from "react-redux"
import { createdUser } from "../store/action"
import { useHistory } from "react-router-dom"

function AddFormUser() {
    const dispatch = useDispatch()
    const history = useHistory()
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        img_url: "",
        role: "",
    })

    function handleOnChange(e) {
        let { name, value } = e.target
        let newForm = { ...form, [name]: value }
        setForm(newForm)
    }

    function handleOnSubmit(e) {
        e.preventDefault()
        dispatch(createdUser(form))
        history.push("/users")
    }

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
                    <form onSubmit={handleOnSubmit}>
                        <FormControl w="80%" mb="4">
                            <FormLabel mb="1">Email</FormLabel>
                            <Input
                                type="text"
                                name="email"
                                value={form.email}
                                onChange={handleOnChange}
                                placeholder="Put user email here"
                            />
                        </FormControl>
                        <FormControl w="80%" mb="4">
                            <FormLabel mb="1">Pasword</FormLabel>
                            <Input
                                type="text"
                                name="password"
                                value={form.password}
                                onChange={handleOnChange}
                                placeholder="Put user password here"
                            />
                        </FormControl>
                        <FormControl w="80%" mb="4">
                            <FormLabel mb="1">Nama</FormLabel>
                            <Input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleOnChange}
                                placeholder="Put user name here"
                            />
                        </FormControl>
                        <FormControl w="80%" mb="4">
                            <FormLabel mb="1">Image Url</FormLabel>
                            <Input
                                name="img_url"
                                type="text"
                                value={form.img_url}
                                onChange={handleOnChange}
                                placeholder="Put image url user here"
                            />
                        </FormControl>
                        <FormControl w="80%" mb="4">
                            <FormLabel mb="1">Role</FormLabel>
                            <Select
                                placeholder="Select role"
                                name="role"
                                value={form.role}
                                onChange={handleOnChange}
                            >
                                <option value="penulis">Penulis</option>
                                <option value="siswa">Siswa</option>
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
