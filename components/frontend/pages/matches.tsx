import { EditIcon, InfoOutlineIcon, SunIcon, ViewIcon } from "@chakra-ui/icons";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

export default function Matches() {
  return (
    <Flex ml="60" mr="72" mt="4" direction="column">
      <Heading>Matches</Heading>
      <Flex mt="14" ml="14" direction="column" gridGap="4" w="96">
        <Flex alignItems="center" gridGap="8">
          <Box bg="pink.50" px="4" py="2" rounded="lg" border="1px" w="full">
            <Text>Lorem ipsum dolore</Text>
          </Box>
          <SunIcon />
        </Flex>
        <Flex alignItems="center" gridGap="8">
          <Box bg="pink.50" px="4" py="2" rounded="lg" border="1px" w="full">
            <Text>Lorem ipsum dolore</Text>
          </Box>
          <EditIcon />
        </Flex>
        <Flex alignItems="center" gridGap="8">
          <Box bg="pink.50" px="4" py="2" rounded="lg" border="1px" w="full">
            <Text>Lorem ipsum dolore</Text>
          </Box>
          <ViewIcon />
        </Flex>
        <Flex alignItems="center" gridGap="8">
          <Box bg="pink.50" px="4" py="2" rounded="lg" border="1px" w="full">
            <Text>Lorem ipsum dolore</Text>
          </Box>
          <InfoOutlineIcon />
        </Flex>
      </Flex>
    </Flex>
  );
}
