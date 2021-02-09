import { Flex, Image, Heading } from "@chakra-ui/core"
import React from "react"
import { FormLogin } from "../components"

export default function Login() {
    return (
        <Flex>
            <Flex
                flex="2"
                h="100vh"
                px="2"
                py="6"
                flexDirection="column"
                justifyContent="center"
            >
                <Flex
                    justifyContent="space-around"
                    align="center"
                    flexDirection="row"
                >
                    <Image
                        size="200px"
                        src="http://aksi.puspendik.kemdikbud.go.id/membacadigital/images/logo_kemdikbud.png"
                        alt="Logo Kemendikbud"
                    />
                    <Image
                        size="200px"
                        src="http://aksi.puspendik.kemdikbud.go.id/membacadigital/images/logo.png"
                        alt="Logo Aksi"
                    />
                </Flex>
            </Flex>
            <Flex flex="1" justifyContent="center" align="center">
                <FormLogin />
            </Flex>
        </Flex>
    )
}
