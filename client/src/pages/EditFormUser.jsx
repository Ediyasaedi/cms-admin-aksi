import React, { useState, useEffect } from "react"
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
import { useDispatch, useSelector } from "react-redux"
import { updatedUser } from "../store/action"
import { useHistory, useParams } from "react-router-dom"

function EditFormUser() {
    const dispatch = useDispatch()
    const history = useHistory()
    const { id } = useParams()
    const user = useSelector((state) => state.users.user)
    const [form, setForm] = useState({
        name: "",
        email: "",
        img_url: "",
        role: "",
        password: "",
    })

    useEffect(() => {
        setForm({
            name: user.name,
            email: user.email,
            img_url: user.img_url,
            role: user.role,
        })
    }, [user])

    function handleOnChange(e) {
        let { name, value } = e.target
        let newForm = { ...form, [name]: value }
        setForm(newForm)
    }

    function handleOnSubmit(e) {
        e.preventDefault()
        dispatch(updatedUser({ ...form, id }))
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
                    <Heading mb="6">Edit User with ID: {id}</Heading>
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
                            <FormLabel mb="1">Password</FormLabel>
                            <Input
                                type="text"
                                name="password"
                                value={form.password}
                                onChange={handleOnChange}
                                placeholder="Put new user password here"
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

export default EditFormUser
