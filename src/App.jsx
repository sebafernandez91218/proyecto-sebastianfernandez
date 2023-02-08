import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import CartWidget from "./components/CartWidget";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <>
      <ChakraProvider>
        <CartWidget />
        <NavBar />
      </ChakraProvider>
      <ItemListContainer greeting = "Bienvenidos a Daniela Joyas"/>
    </>
  );
}

export default App;
