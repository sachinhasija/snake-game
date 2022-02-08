import React from 'react';
import { CanvasComponent } from '../';
import { Container, Heading, Flex } from '@chakra-ui/react'

export default function ContainerComponent() {
    return (
        <Container maxW="100vw" w="100vw" h="100vh" py="20px" overflowY="scroll" bgImage={"https://images.pexels.com/photos/41951/solar-system-emergence-spitzer-telescope-telescope-41951.jpeg?cs=srgb&dl=pexels-pixabay-41951.jpg&fm=jpg"} backgroundSize="cover" >
            <Flex direction="column" alignItems="center">
                <Heading as='h1' size='2xl' color='gray.50' mb={10}>Snake game</Heading>
                <CanvasComponent height={800} width={800} />
            </Flex>
        </Container>
    );
}
