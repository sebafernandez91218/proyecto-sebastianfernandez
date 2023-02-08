import React from 'react'
import { Button } from '@chakra-ui/react'

const CartWidget = () => {
  return (
    <div>
<Button size="lg" variant="outline" colorScheme='blue'>
    <span className='material-symbols-outlined'> shopping_cart</span>
    <span> 7 </span>
</Button>
    </div>
  )
}

export default CartWidget