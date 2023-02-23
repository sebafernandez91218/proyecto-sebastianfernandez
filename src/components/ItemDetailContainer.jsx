import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import { Textarea } from "@chakra-ui/textarea";
import { Heading } from "@chakra-ui/react";
import { Stack } from "@chakra-ui/react";
import { Divider } from "@chakra-ui/react";

const ItemDetailContainer = () => {
  return (
    <>
      <Card maxW="sm">
        <CardBody>
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR8RGld5mo-hBkhNbKHFT8zQrlJiPA9VD5Cw&usqp=CAU"
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">Anillo diamante Eloise</Heading>
            <Text>
              This sofa is perfect for modern tropical spaces, baroque inspired
              spaces, earthy toned spaces and for people who love a chic design
              with a sprinkle of vintage design.
            </Text>
            <Text color="blue.600" fontSize="2xl">
              $450
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2">
            <Button variant="solid" colorScheme="blue">
              Detalles
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
      <Card maxW="sm">
        <CardBody>
          <Image
            src="data:image/jpeg;base64,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"
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">Pulsera Plata 925</Heading>
            <Text>
              This sofa is perfect for modern tropical spaces, baroque inspired
              spaces, earthy toned spaces and for people who love a chic design
              with a sprinkle of vintage design.
            </Text>
            <Text color="blue.600" fontSize="2xl">
              $450
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2">
            <Button variant="solid" colorScheme="blue">
              Detalles
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
      <Card maxW="sm">
        <CardBody>
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Cs0AEsjAR8i_MMOcgXfIUK2TqnA9HtKr3Q&usqp=CAU"
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">Cadena Plata Singapur 50mm</Heading>
            <Text>
              This sofa is perfect for modern tropical spaces, baroque inspired
              spaces, earthy toned spaces and for people who love a chic design
              with a sprinkle of vintage design.
            </Text>
            <Text color="blue.600" fontSize="2xl">
              $450
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2">
            <Button variant="solid" colorScheme="blue">
              Detalle
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
      <Card maxW="sm">
        <CardBody>
          <Image
            src="https://d2r9epyceweg5n.cloudfront.net/stores/083/700/products/dscn95601-157a74895414ce075b15530331669866-1024-1024.jpg"
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md"> Conjunto 3 piezas acero</Heading>
            <Text>
              This sofa is perfect for modern tropical spaces, baroque inspired
              spaces, earthy toned spaces and for people who love a chic design
              with a sprinkle of vintage design.
            </Text>
            <Text color="blue.600" fontSize="2xl">
              $450
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2">
            <Button variant="solid" colorScheme="blue">
              Detalles
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    
    </>
  );
};

export default ItemDetailContainer;
