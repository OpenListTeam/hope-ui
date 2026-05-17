import { Anchor, Center, HStack, Text } from "@hope-ui/solid";

import { IconGithub } from "@/icons/IconGithub";

export default function Footer() {
  return (
    <Center as="footer" flexDirection="column" h="$40">
      <Text mb="$3">
        Made in 🇫🇷 &nbsp;by <Anchor href="https://github.com/fabien-ml">Fabien MARIE-LOUISE</Anchor>
      </Text>
      <Text mb="$3">
        Maintained by{" "}
        <Anchor href="https://github.com/OpenListTeam">The OpenList Projects Contributors</Anchor>
      </Text>
      <HStack spacing="$3">
        <Anchor external href="https://github.com/OpenListTeam/hope-ui">
          <IconGithub boxSize="$5" color="$neutral11" />
        </Anchor>
      </HStack>
    </Center>
  );
}
