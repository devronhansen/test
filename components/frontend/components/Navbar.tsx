import { Flex, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";

export function Navbar() {
  const router = useRouter();

  function setBoldIfActive(path: string) {
    return router.pathname === path ? "bold" : "";
  }

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      paddingX="10rem"
      paddingY="2rem"
    >
      <Flex align="center" gridGap="1rem">
        <svg
          fill="black"
          width="1rem"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>

        <NextLink href="/tickets">
          <Link>
            <Text fontWeight={setBoldIfActive("/tickets")}>Tickets</Text>
          </Link>
        </NextLink>
        <NextLink href="/profile">
          <Link>
            <Text fontWeight={setBoldIfActive("/profile")}>Profil</Text>
          </Link>
        </NextLink>
        <NextLink href="/matches">
          <Link>
            <Text fontWeight={setBoldIfActive("/matches")}>Matches</Text>
          </Link>
        </NextLink>
      </Flex>
    </Flex>
  );
}
