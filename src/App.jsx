import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { ChakraProvider } from "@chakra-ui/react";




function App() {
  return (
    <>
      <ChakraProvider>
        <NavBar />
      <ItemListContainer />
      <ItemDetailContainer />
      </ChakraProvider>
  
    
    </>
  );
}

export default App;
