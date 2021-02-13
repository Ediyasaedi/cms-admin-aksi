import { Box, Badge } from "@chakra-ui/core"
import React from "react"

function CardComponent(props) {
    return (
        <Stack isInline>
            <Image
                size="100px"
                objectFit="cover"
                src="https://bit.ly/sage-adebayo"
                alt="Segun Adebayo"
            />
            <Image
                size="150px"
                objectFit="cover"
                src="https://bit.ly/dan-abramov"
                alt="Dan Abramov"
            />
            <Image
                size="200px"
                src="https://bit.ly/dan-abramov"
                alt="Dan Abramov"
            />
        </Stack>
    )
}

export default CardComponent
