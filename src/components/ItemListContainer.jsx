import {useState,useEffect} from 'react';
import data from "../data.json";
import ItemList from './ItemList';
import {useParams} from "react-router-dom"

const ItemListContainer = () => {
  const{categoria}= useParams();
  const catFilter = data.filter ((producto)=> producto.category
=== categoria);

  return (
    <div>
    <Center bg="#D6EAF8" h="100px" color="black">
      <Heading as="h2" size="2xl">
     Producto
      </Heading>
    </Center>
    {categoria ? <ItemList producto={catFilter} /> : <ItemList producto={Data} />}
  </div>
); 
};

export default ItemListContainer