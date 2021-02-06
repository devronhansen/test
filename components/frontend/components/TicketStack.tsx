import { Box } from "@chakra-ui/react";
import { Ticket } from "./Ticket";

export function TicketStack(ticket: Ticket) {
  return (
    <Box position="relative">
      <Ticket {...ticket} position="absolute" right={2} />
      <Ticket {...ticket} position="absolute" right={4} />
      <Ticket {...ticket} />
    </Box>
  );
}
