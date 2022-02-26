import {
  Box,
  Flex,
  Heading,
  Link,
  Image,
  HStack,
  Spacer,
  Center,
  Container,
} from '@chakra-ui/react';

import logo from '../../assets/images/logo2.png';

const MainHeader = () => {
  return (
    <Box as="header" height="4rem">
      <Container height={'100%'} maxW="60rem">
        <Flex height={'100%'}>
          <Link href="#" _hover={{ textDecoration: 'none' }}>
            <HStack
              justify={'center'}
              align={'center'}
              spacing={'8px'}
              height={'100%'}
            >
              {/* Logo */}
              <Image src={logo} alt="Hienhhcc logo" height={'60%'} />
              <Heading as="h1" fontSize={'1.5rem'}>
                Hien
              </Heading>
            </HStack>
          </Link>
          <Spacer />
          <Box as="nav">
            <HStack
              justify={'center'}
              align={'center'}
              spacing={'0.75rem'}
              height={'100%'}
            >
              <Link href="#">
                <Center textTransform={'uppercase'}>Trang chủ</Center>
              </Link>
              <Link href="#about">
                <Center textTransform={'uppercase'}>Giới thiệu</Center>
              </Link>
              <Link href="#portfolio">
                <Center textTransform={'uppercase'}>Dự án</Center>
              </Link>
              <Link href="#contact">
                <Center textTransform={'uppercase'}>Liên hệ</Center>
              </Link>
            </HStack>
          </Box>
          {/* Nav */}
        </Flex>
      </Container>
    </Box>
  );
};

export default MainHeader;
