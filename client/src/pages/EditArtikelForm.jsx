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
import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useParams } from "react-router-dom"
import { Sidebar } from "../components"
import { updatedArticle } from "../store/action"

export default function EditArtikelForm() {
    const dispatch = useDispatch()
    const history = useHistory()
    const article = useSelector((state) => state.article.article)
    const { idwacana, idarticle } = useParams()
    const [form, setForm] = useState({
        title: "",
        img_url: "",
        content: "",
    })

    useEffect(() => {
        setForm({
            title: article.title,
            img_url: article.img_url,
            content: article.content,
        })
    }, [article])

    function handleOnChange(e) {
        let { name, value } = e.target
        let newForm = {
            ...form,
            [name]: value,
        }
        setForm({ ...newForm, idart: idarticle, WacanaId: idwacana })
    }

    function handleOnSubmit(e) {
        e.preventDefault()
        dispatch(updatedArticle(form))
        history.push(`/wacana/${idwacana}`)
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
                        <Heading mb="6">
                            Detail and Update Artikel Here!
                        </Heading>
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
