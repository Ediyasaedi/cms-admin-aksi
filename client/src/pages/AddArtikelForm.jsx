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
import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { useHistory, useParams } from "react-router-dom"
import { Sidebar } from "../components"
import { createdArticle } from "../store/action"

export default function AddArtikelForm() {
    const dispatch = useDispatch()
    const history = useHistory()
    const { id } = useParams()
    const [form, setForm] = useState({
        title: "",
        img_url: "",
        content: "",
    })

    function handleOnChange(e) {
        let { name, value } = e.target
        let newForm = {
            ...form,
            [name]: value,
        }
        setForm({ ...newForm, WacanaId: id })
    }

    function handleOnSubmit(e) {
        e.preventDefault()
        dispatch(createdArticle(form))
        history.push(`/wacana/${id}`)
    }

    return (
        <>
            <Flex w="100%" h="100vh">
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
                <Flex flex="4" paddingY="8" paddingX="4">
                    <Flex flex="1" flexDirection="column" paddingX="2" w="80%">
                        <Heading mb="6">Add Your Artikel Here!</Heading>
                        <form onSubmit={handleOnSubmit}>
                            <FormControl w="80%" mb="4">
                                <FormLabel mb="1">Artikel Title</FormLabel>
                                <Input
                                    name="title"
                                    type="text"
                                    value={form.title}
                                    onChange={handleOnChange}
                                    placeholder="Put your title here"
                                />
                            </FormControl>
                            <FormControl w="80%" mb="4">
                                <FormLabel mb="1">Image Url</FormLabel>
                                <Input
                                    name="img_url"
                                    type="text"
                                    value={form.img_url}
                                    onChange={handleOnChange}
                                    placeholder="Put your img url article here"
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
                            name="content"
                            value={form.content}
                            onChange={handleOnChange}
                        />
                    </Flex>
                </Flex>
            </Flex>
        </>
    )
}
