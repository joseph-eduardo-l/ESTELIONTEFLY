import { Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { ActiveLink } from "./ActiveLink";

const Idiomas = () => {

  const { asPath } = useRouter();

  return (
    <Flex display="inline-flex">
      <ActiveLink url={asPath} locale2="es" title='ES' />
      <ActiveLink url={asPath} locale2="en" title='EN' />
    </Flex>
  );
};

export default Idiomas;
