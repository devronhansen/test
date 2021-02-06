import {
  EditIcon,
  InfoOutlineIcon,
  SmallAddIcon,
  SunIcon,
  ViewIcon,
} from "@chakra-ui/icons";
import { Avatar, Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

export default function Profile() {
  const skills = ["PHP", "Docker", "Java"];

  function* generateNextColor(): Generator<string> {
    let colorIndex = 0;
    const colors = ["orange.300", "teal.200", "red.300"];

    while (true) {
      if (colorIndex > colors.length - 1) {
        colorIndex = 0;
      }

      yield colors[colorIndex];

      colorIndex++;
    }
  }

  const color = generateNextColor();

  return (
    <Flex ml="60" mr="72" mt="4" direction="column">
      <Flex alignItems="center" gridGap="4" mb="12">
        <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
        <Heading>Dan Abrahmov</Heading>
      </Flex>

      <Flex gridGap="64">
        <Flex w="36" direction="column" gridGap="4">
          <Flex justify="space-between" alignItems="center">
            <Text fontWeight="bold" fontSize="md">
              Skillset
            </Text>
            <SmallAddIcon />
          </Flex>
          {skills.map((skill, index) => (
            <Text
              textAlign="center"
              rounded="lg"
              key={index}
              bg={color.next().value}
              px="2"
              py="1"
              fontWeight="medium"
            >
              {skill}
            </Text>
          ))}
        </Flex>

        <Flex direction="column" gridGap="4" w="full">
          <Text fontWeight="bold" fontSize="lg">
            Tickets
          </Text>
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
    </Flex>
  );
}
