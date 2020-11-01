import { Button, Flex, IconButton, FormControl, Input } from "@chakra-ui/core"
import React, { useEffect } from "react"
import { Navbar, Sidebar } from "../components"
import * as table from "../components/table"
import { Link, useHistory } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { getWacanas, deleteWacana, getOneWacana } from "../store/action"

function Wacana() {
    const wacanas = useSelector((state) => state.wacana.wacanas)
    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
        dispatch(getWacanas())
    }, [])

    function dltWacana(id) {
        dispatch(deleteWacana(id))
        dispatch(getWacanas())
    }

    function edtWacana(id) {
        dispatch(getOneWacana(id))
        history.push(`/edit-wacana/${id}`)
    }

    function attachWacana(id) {
        history.push(`/wacana/${id}`)
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
            <Flex flex="4" direction="column">
                <Navbar title="Management Wacana" />
                <Flex justify="space-between" mx="20">
                    <Link to="/add-wacana">
                        <Button variantColor="teal" size="md" mr="10">
                            Add Wacana
                        </Button>
                    </Link>
                    <Flex>
                        <FormControl>
                            <Input
                                id="search_wacana"
                                placeholder="Search wacana..."
                            />
                        </FormControl>
                        <Button variantColor="teal" size="md">
                            Search
                        </Button>
                    </Flex>
                </Flex>
                <Flex flex="7">
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
                                <table.Th>Kelas</table.Th>
                                <table.Th>Penulis</table.Th>
                                <table.Th>Action</table.Th>
                            </table.Tr>
                        </table.Thead>
                        <table.TBody>
                            {wacanas.length > 0
                                ? wacanas.map((wacana) => {
                                      return (
                                          <table.Tr key={wacana.id}>
                                              <table.Td>
                                                  {wacana.title}
                                              </table.Td>
                                              <table.Td>
                                                  {wacana.img_url}
                                              </table.Td>
                                              <table.Td>
                                                  {wacana.kelas}
                                              </table.Td>
                                              <table.Td>
                                                  {wacana.User.name}
                                              </table.Td>
                                              <table.Td>
                                                  <IconButton
                                                      mr="2"
                                                      aria-label="add questions"
                                                      icon="attachment"
                                                      onClick={() =>
                                                          attachWacana(
                                                              wacana.id
                                                          )
                                                      }
                                                  />
                                                  <IconButton
                                                      mr="2"
                                                      aria-label="update"
                                                      icon="edit"
                                                      onClick={() =>
                                                          edtWacana(wacana.id)
                                                      }
                                                  />
                                                  <IconButton
                                                      mr="2"
                                                      aria-label="delete"
                                                      icon="delete"
                                                      onClick={() =>
                                                          dltWacana(wacana.id)
                                                      }
                                                  />
                                              </table.Td>
                                          </table.Tr>
                                      )
                                  })
                                : ""}
                        </table.TBody>
                    </table.Table>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default Wacana
