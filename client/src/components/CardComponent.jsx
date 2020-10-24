import { Box, Badge } from "@chakra-ui/core"
import React from "react"

function CardComponent(props) {
    return (
        <Box maxW="sm" borderWidth="1px" rounded="lg" overflow="hidden">
            <Box p="6">
                <Box d="flex" alignItems="baseline">
                    <Badge rounded="full" px="2" variantColor="teal">
                        Status
                    </Badge>
                    <Box
                        color="gray.500"
                        fontWeight="semibold"
                        letterSpacing="wide"
                        fontSize="xs"
                        textTransform="uppercase"
                        ml="2"
                    >
                        {props.status}
                    </Box>
                </Box>

                <Box
                    mt="1"
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                    isTruncated
                >
                    {props.title}
                </Box>
            </Box>
        </Box>
    )
}

export default CardComponent
