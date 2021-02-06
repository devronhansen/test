import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

export interface Ticket {
  name: string;
  epicName: string;
  skills: string[];
  description: string;
}

export function Ticket({
  name,
  epicName,
  skills,
  description,
  position,
  right,
}: Ticket & { position?: "absolute"; right?: 2 | 4 }) {
  function* generateNextColor(): Generator<string> {
    let colorIndex = 0;
    const colors = ["teal.200", "orange.300", "red.300"];

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
    <Flex
      bg="pink.50"
      border="2px"
      px="2"
      py="4"
      rounded="md"
      direction="column"
      pr="10"
      position={position}
      top="0"
      right={right}
      w="52"
    >
      <Text fontWeight="bold" whiteSpace="nowrap">
        {name}
      </Text>
      <Box my="2">
        <Text
          fontSize="xs"
          rounded="lg"
          bg="cyan.300"
          display="inline-block"
          px="2"
          py="1"
          fontWeight="medium"
        >
          {epicName}
        </Text>
      </Box>
      <Text>Skills</Text>
      <Flex my="2" gridGap="2">
        {skills.map((skill, index) => (
          <Text
            fontSize="xx-small"
            rounded="lg"
            key={index}
            px="2"
            py="1"
            bg={color.next().value}
            fontWeight="medium"
          >
            {skill}
          </Text>
        ))}
      </Flex>
      <Text>Beschreibung</Text>
      <Text fontSize="xs">{description}</Text>
    </Flex>
  );
}
