
import Item from "./Item"
import { Container } from "@chakra-ui/react"

const ItemList = ({ropa}) => {
  return (
    <>
   <Container maxW="container.sm" className="main-catalogue">
        {productos?.map((producto) => (
          <Item
            key={producto.id}
            id={producto.id}
            name={producto.nombre}
            descripcion={producto.descripcion}
            precio={producto.precio}
            stock={producto.stock}
            categoria={producto.categoria}
          />
        ))}
      </Container>
    </>
  );
 
};

export default ItemList