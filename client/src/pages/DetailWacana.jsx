import {
    Flex,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Heading,
    IconButton,
    Button,
} from "@chakra-ui/core"
import React, { useEffect } from "react"
import { Sidebar } from "../components"
import * as table from "../components/table"
import { useHistory, useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import {
    getOneWacana,
    getArticles,
    deleteArticle,
    getOneArticle,
    getQuestions,
    deleteQuestion,
    getOneSoal,
} from "../store/action"

export default function DetailWacana() {
    const { id } = useParams()
    const dispatch = useDispatch()
    const history = useHistory()
    const wacana = useSelector((state) => state.wacana.wacana)
    const articles = useSelector((state) => state.article.articles)
    const questions = useSelector((state) => state.question.questions)

    useEffect(() => {
        dispatch(getOneWacana(id))
        dispatch(getArticles(id))
        dispatch(getQuestions(id))
    }, [])

    function addArtcle() {
        history.push(`/wacana/${id}/add-artikel`)
    }

    function addQuestionForm() {
        history.push(`/wacana/${id}/add-soal`)
    }

    function editArt(artid) {
        dispatch(getOneArticle(artid))
        history.push(`/edit-article/${id}/${artid}`)
    }

    function delArt(artid) {
        dispatch(deleteArticle({ articleid: artid, wacanaid: id }))
    }

    function editQuestion(qstid) {
        dispatch(getOneSoal(qstid))
        history.push(`/edit-soal/${id}/${qstid}`)
    }

    function delQuetion(qstid) {
        dispatch(deleteQuestion({ questionid: qstid, wacanaid: id }))
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
                <Heading mb="6">Wacana: {wacana?.title}</Heading>
                <Tabs variant="soft-rounded" variantColor="green">
                    <TabList>
                        <Tab>Tabel Artikel</Tab>
                        <Tab>Tabel Soal</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <Flex justifyContent="flex-end">
                                <Button
                                    variantColor="teal"
                                    size="md"
                                    onClick={addArtcle}
                                >
                                    Add Artikel
                                </Button>
                            </Flex>
                            <table.Table w="90%" mx="auto" mt="8">
                                <table.Thead>
                                    <table.Tr
                                        borderBottom="2px"
                                        borderTop="2px"
                                        py="1"
                                        mb="2"
                                    >
                                        {" "}
                                        <table.Th>Title</table.Th>
                                        <table.Th>Image Url</table.Th>
                                        <table.Th>Action</table.Th>
                                    </table.Tr>
                                </table.Thead>
                                <table.TBody>
                                    {articles.length > 0
                                        ? articles.map((art) => {
                                              return (
                                                  <table.Tr key={art.id}>
                                                      <table.Td>
                                                          {art.title}
                                                      </table.Td>
                                                      <table.Td>
                                                          {art.img_url}
                                                      </table.Td>
                                                      <table.Td>
                                                          <IconButton
                                                              mr="2"
                                                              aria-label="update"
                                                              icon="edit"
                                                              onClick={() =>
                                                                  editArt(
                                                                      art.id
                                                                  )
                                                              }
                                                          />
                                                          <IconButton
                                                              mr="2"
                                                              aria-label="delete"
                                                              icon="delete"
                                                              onClick={() =>
                                                                  delArt(art.id)
                                                              }
                                                          />
                                                      </table.Td>
                                                  </table.Tr>
                                              )
                                          })
                                        : ""}
                                </table.TBody>
                            </table.Table>
                        </TabPanel>
                        <TabPanel>
                            <Flex justifyContent="flex-end">
                                <Button
                                    variantColor="teal"
                                    size="md"
                                    onClick={addQuestionForm}
                                >
                                    Add Soal
                                </Button>
                            </Flex>
                            <table.Table w="90%" mx="auto" mt="8">
                                <table.Thead>
                                    <table.Tr
                                        borderBottom="2px"
                                        borderTop="2px"
                                        py="1"
                                        mb="2"
                                    >
                                        {" "}
                                        <table.Th>Pertanyaan</table.Th>
                                        <table.Th>Pilihan A</table.Th>
                                        <table.Th>Pilihan B</table.Th>
                                        <table.Th>Pilihan C</table.Th>
                                        <table.Th>Pilihan D</table.Th>
                                        <table.Th>Kunci Jawaban</table.Th>
                                        <table.Th>Action</table.Th>
                                    </table.Tr>
                                </table.Thead>
                                <table.TBody>
                                    {questions.length > 0
                                        ? questions.map((qstn) => {
                                              return (
                                                  <table.Tr>
                                                      <table.Td>
                                                          {qstn.soal}
                                                      </table.Td>
                                                      <table.Td>
                                                          {qstn.pilihan_a}
                                                      </table.Td>
                                                      <table.Td>
                                                          {qstn.pilihan_b}
                                                      </table.Td>
                                                      <table.Td>
                                                          {qstn.pilihan_c}
                                                      </table.Td>
                                                      <table.Td>
                                                          {qstn.pilihan_d}
                                                      </table.Td>
                                                      <table.Td>
                                                          {qstn.kunci_jawaban}
                                                      </table.Td>
                                                      <table.Td>
                                                          <IconButton
                                                              mr="2"
                                                              aria-label="update"
                                                              icon="edit"
                                                              onClick={() =>
                                                                  editQuestion(
                                                                      qstn.id
                                                                  )
                                                              }
                                                          />
                                                          <IconButton
                                                              mr="2"
                                                              aria-label="delete"
                                                              icon="delete"
                                                              onClick={() =>
                                                                  delQuetion(
                                                                      qstn.id
                                                                  )
                                                              }
                                                          />
                                                      </table.Td>
                                                  </table.Tr>
                                              )
                                          })
                                        : ""}
                                </table.TBody>
                            </table.Table>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Flex>
        </Flex>
    )
}
