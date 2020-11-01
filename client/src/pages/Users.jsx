import React, { useState, useEffect } from "react"
import { Navbar, Sidebar } from "../components"
import * as table from "../components/table"
import { Button, Flex, IconButton, FormControl, Input } from "@chakra-ui/core"
import { Link, useHistory } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { getUsers, deleteUser, getOneUser } from "../store/action"

function Users() {
    const dispatch = useDispatch()
    const history = useHistory()
    const siswaArr = useSelector((state) => state.users.siswas)
    const penulisArr = useSelector((state) => state.users.penulis)
    const [role, setRole] = useState("siswa")

    useEffect(() => {
        dispatch(getUsers(role))
    }, [role])

    function dltUser(id) {
        dispatch(deleteUser(id))
        dispatch(getUsers(role))
    }

    function edtUser(id) {
        dispatch(getOneUser(id))
        history.push(`/edit-user/${id}`)
    }

    function changeRole() {
        if (role === "siswa") {
            setRole("penulis")
        } else {
            setRole("siswa")
        }
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
                <Navbar title="Management Users" />
                <Flex justify="space-between" mx="20">
                    <Link to="/add-user">
                        <Button variantColor="teal" size="md" mr="10">
                            Add User
                        </Button>
                    </Link>
                    <Flex>
                        <FormControl>
                            <Input
                                id="search_wacana"
                                placeholder="Search user..."
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
                                <table.Th>Email</table.Th>
                                <table.Th>Nama</table.Th>
                                <table.Th>Image Url</table.Th>
                                <table.Th>
                                    <Button
                                        mr="2"
                                        size="sm"
                                        onClick={changeRole}
                                    >
                                        Change Role
                                    </Button>
                                </table.Th>
                                <table.Th>Action</table.Th>
                            </table.Tr>
                        </table.Thead>
                        <table.TBody>
                            {role === "siswa"
                                ? siswaArr.map((siswa) => {
                                      return (
                                          <table.Tr key={siswa.id}>
                                              <table.Td>{siswa.email}</table.Td>
                                              <table.Td>{siswa.name}</table.Td>
                                              <table.Td>
                                                  {siswa.img_url}
                                              </table.Td>
                                              <table.Td>{siswa.role}</table.Td>
                                              <table.Td>
                                                  <IconButton
                                                      mr="2"
                                                      aria-label="update"
                                                      icon="edit"
                                                      onClick={() =>
                                                          edtUser(siswa.id)
                                                      }
                                                  />
                                                  <IconButton
                                                      mr="2"
                                                      aria-label="delete"
                                                      icon="delete"
                                                      onClick={() =>
                                                          dltUser(siswa.id)
                                                      }
                                                  />
                                              </table.Td>
                                          </table.Tr>
                                      )
                                  })
                                : penulisArr.map((penulis) => {
                                      return (
                                          <table.Tr key={penulis.id}>
                                              <table.Td>
                                                  {penulis.email}
                                              </table.Td>
                                              <table.Td>
                                                  {penulis.name}
                                              </table.Td>
                                              <table.Td>
                                                  {penulis.img_url}
                                              </table.Td>
                                              <table.Td>
                                                  {penulis.role}
                                              </table.Td>
                                              <table.Td>
                                                  <IconButton
                                                      mr="2"
                                                      aria-label="update"
                                                      icon="edit"
                                                      onClick={() =>
                                                          edtUser(penulis.id)
                                                      }
                                                  />
                                                  <IconButton
                                                      mr="2"
                                                      aria-label="delete"
                                                      icon="delete"
                                                      onClick={() =>
                                                          dltUser(penulis.id)
                                                      }
                                                  />
                                              </table.Td>
                                          </table.Tr>
                                      )
                                  })}
                        </table.TBody>
                    </table.Table>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default Users
