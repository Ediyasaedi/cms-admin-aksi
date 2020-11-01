import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Text,
} from "@chakra-ui/core"
import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useParams } from "react-router-dom"
import { Sidebar } from "../components"
import { updatedQuestion } from "../store/action"

export default function EditSoalForm() {
    const { idwacana, idquestion } = useParams()
    const history = useHistory()
    const dispatch = useDispatch()
    const question = useSelector((state) => state.question.question)
    const [form, setForm] = useState({
        soal: "",
        img_url: "",
        pilihan_a: "",
        pilihan_b: "",
        pilihan_c: "",
        pilihan_d: "",
        kunci_jawaban: "",
    })

    useEffect(() => {
        setForm({
            soal: question.soal,
            img_url: question.img_url,
            pilihan_a: question.pilihan_a,
            pilihan_b: question.pilihan_b,
            pilihan_c: question.pilihan_c,
            pilihan_d: question.pilihan_d,
            kunci_jawaban: question.kunci_jawaban,
        })
    }, [question])

    function handleOnChange(e) {
        let { name, value } = e.target
        let newForm = {
            ...form,
            [name]: value,
        }
        setForm({ ...newForm, idquestion, WacanaId: idwacana })
    }

    function handleOnSubmit(e) {
        e.preventDefault()
        dispatch(updatedQuestion(form))
        history.push(`/wacana/${idwacana}`)
    }

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
                        <Heading mb="6">Update Your Soal Here!</Heading>
                        <form onSubmit={handleOnSubmit}>
                            <FormControl w="80%" mb="4">
                                <FormLabel mb="1">Pertanyaan</FormLabel>
                                <Input
                                    name="soal"
                                    type="text"
                                    placeholder="Put your question here"
                                    onChange={handleOnChange}
                                    value={form.soal}
                                />
                            </FormControl>
                            <FormControl w="80%" mb="4">
                                <FormLabel mb="1">Image Url</FormLabel>
                                <Input
                                    name="img_url"
                                    type="text"
                                    placeholder="Put img url here"
                                    onChange={handleOnChange}
                                    value={form.img_url}
                                />
                            </FormControl>
                            <Flex w="80%">
                                <FormControl w="80%" mb="4" mr="2">
                                    <FormLabel mb="1">Pilihan A</FormLabel>
                                    <Input
                                        name="pilihan_a"
                                        type="text"
                                        placeholder="Put option A here"
                                        onChange={handleOnChange}
                                        value={form.pilihan_a}
                                    />
                                </FormControl>
                                <FormControl w="80%" mb="4">
                                    <FormLabel mb="1">Pilihan B</FormLabel>
                                    <Input
                                        name="pilihan_b"
                                        type="text"
                                        placeholder="Put option B here"
                                        onChange={handleOnChange}
                                        value={form.pilihan_b}
                                    />
                                </FormControl>
                            </Flex>
                            <Flex w="80%">
                                <FormControl w="80%" mb="4" mr="2">
                                    <FormLabel mb="1">Pilihan C</FormLabel>
                                    <Input
                                        name="pilihan_c"
                                        type="text"
                                        placeholder="Put option C here"
                                        onChange={handleOnChange}
                                        value={form.pilihan_c}
                                    />
                                </FormControl>
                                <FormControl w="80%" mb="4">
                                    <FormLabel mb="1">Pilihan D</FormLabel>
                                    <Input
                                        name="pilihan_d"
                                        type="text"
                                        placeholder="Put option D here"
                                        onChange={handleOnChange}
                                        value={form.pilihan_d}
                                    />
                                </FormControl>
                            </Flex>
                            <FormControl w="80%" mb="4">
                                <FormLabel mb="1">Kunci Jawaban</FormLabel>
                                <Input
                                    name="kunci_jawaban"
                                    type="text"
                                    placeholder="Put answer of question here"
                                    onChange={handleOnChange}
                                    value={form.kunci_jawaban}
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
