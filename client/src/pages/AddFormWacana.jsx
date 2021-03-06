import React, { useEffect, useState } from "react"
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
import { useDispatch, useSelector } from "react-redux"
import { getUsers, createdWacana } from "../store/action"
import { useHistory } from "react-router-dom"

function AddFormWacana() {
    const penulisArr = useSelector((state) => state.users.penulis)
    const dispatch = useDispatch()
    const history = useHistory()
    const [form, setForm] = useState({
        title: "",
        img_url: "",
        kelas: 0,
        UserId: 0,
    })

    useEffect(() => {
        dispatch(getUsers("penulis"))
    }, [])

    function handleOnChange(e) {
        let { name, value } = e.target
        let newForm = {
            ...form,
            [name]: value,
        }
        setForm(newForm)
    }

    function handleOnSubmit(e) {
        e.preventDefault()
        dispatch(createdWacana(form))
        history.push("/wacana")
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
                    <Heading mb="6">Add New Wacana Here!</Heading>
                    <form onSubmit={handleOnSubmit}>
                        <FormControl w="80%" mb="4">
                            <FormLabel mb="1">Wacana Title</FormLabel>
                            <Input
                                name="title"
                                type="text"
                                value={form.title}
                                onChange={handleOnChange}
                                placeholder="Put title here"
                            />
                        </FormControl>
                        <FormControl w="80%" mb="4">
                            <FormLabel mb="1">Image Url</FormLabel>
                            <Input
                                name="img_url"
                                type="text"
                                value={form.img_url}
                                onChange={handleOnChange}
                                placeholder="Put img url here"
                            />
                        </FormControl>
                        <FormControl w="80%" mb="4">
                            <FormLabel mb="1">Kelas</FormLabel>
                            <Input
                                name="kelas"
                                type="number"
                                value={form.kelas}
                                onChange={handleOnChange}
                                placeholder="Put kelas here"
                            />
                        </FormControl>
                        <FormControl w="80%" mb="4">
                            <FormLabel mb="1">Penulis</FormLabel>
                            <Select
                                placeholder="Select penulis"
                                name="UserId"
                                value={form.UserId}
                                onChange={handleOnChange}
                            >
                                {penulisArr.length > 0
                                    ? penulisArr.map((penulis) => {
                                          return (
                                              <option
                                                  value={penulis.id}
                                                  key={penulis.id}
                                              >
                                                  {penulis.name}
                                              </option>
                                          )
                                      })
                                    : ""}
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
