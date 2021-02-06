import { CheckIcon, CloseIcon } from "@chakra-ui/icons";
import { Button, Flex, Heading } from "@chakra-ui/react";
import { useState } from "react";
import { TicketStack } from "../components/TicketStack";

export default function Tickets() {
  const tickets = [
    {
      name: "CMP: Maps4News",
      epicName: "BOOKs CMP",
      skills: ["PHP", "Docker"],
      description: "Mapcreator bla kram",
    },
    {
      name: "Anderes Ticket",
      epicName: "BZ",
      skills: ["Vue", "Docker", "Stuff"],
      description: "Mapcreator bla kram",
    },
  ];

  const [ticket, setTicket] = useState(tickets[0]);

  return (
    <Flex align="center" direction="column" gridGap="10" marginTop="20">
      <Heading>Tickets</Heading>

      <TicketStack {...ticket} />

      <Flex gridGap="4">
        <Button
          border="2px"
          bg="red.300"
          py="0"
          px="4"
          onClick={() => setTicket(tickets[0])}
        >
          <CloseIcon w="3" h="3" />
        </Button>
        <Button
          border="2px"
          bg="green.200"
          py="0"
          px="4"
          onClick={() => setTicket(tickets[1])}
        >
          <CheckIcon w="3" h="3" />
        </Button>
      </Flex>
    </Flex>
  );
}
