import React from "react"
import { Image, Badge, Button, Flex } from "@chakra-ui/core"
import {
    MdDashboard,
    MdList,
    MdSupervisorAccount,
    MdInfoOutline,
    MdArrowBack,
    MdGrade,
} from "react-icons/md"
import { Link } from "react-router-dom"

export default function Sidebar() {
    return (
        <React.Fragment>
            <Flex
                flex="1"
                justify="center"
                align="center"
                flexDirection="column"
                mb="5"
            >
                <Image alt="AKSI LOGO" />
                <Badge ml="1" variantColor="light">
                    Assesmen Kompetensi Siswa Indonesia
                </Badge>
            </Flex>
            <Flex flex="3" flexDirection="column" align="center" h="100vh">
                <Flex w="100%" flexDirection="row" cursor="pointer">
                    <Link to="/">
                        <Button
                            color="gray.200"
                            leftIcon={MdDashboard}
                            variantColor="#56657F"
                        >
                            Dashboard
                        </Button>
                    </Link>
                </Flex>
                <Flex w="100%" flexDirection="row" cursor="pointer">
                    <Link to="/wacana">
                        <Button
                            color="gray.200"
                            leftIcon={MdList}
                            variantColor="#56657F"
                        >
                            Management Wacanas
                        </Button>
                    </Link>
                </Flex>
                <Flex w="100%" flexDirection="row" cursor="pointer">
                    <Link to="/users">
                        <Button
                            color="gray.200"
                            leftIcon={MdSupervisorAccount}
                            variantColor="#56657F"
                        >
                            Management Users
                        </Button>
                    </Link>
                </Flex>
                <Flex w="100%" flexDirection="row" cursor="pointer">
                    <Link to="/leaderboard">
                        <Button
                            color="gray.200"
                            leftIcon={MdGrade}
                            variantColor="#56657F"
                        >
                            Leaderboard
                        </Button>
                    </Link>
                </Flex>
            </Flex>
            <Flex w="100%" flexDirection="row" cursor="pointer">
                <Link to="/about">
                    <Button
                        color="gray.200"
                        leftIcon={MdInfoOutline}
                        variantColor="#56657F"
                    >
                        About
                    </Button>
                </Link>
            </Flex>
            <Flex w="100%" flexDirection="row" cursor="pointer">
                <Link to="/login">
                    <Button
                        color="gray.200"
                        leftIcon={MdArrowBack}
                        variantColor="#56657F"
                    >
                        Logout
                    </Button>
                </Link>
            </Flex>
        </React.Fragment>
    )
}
