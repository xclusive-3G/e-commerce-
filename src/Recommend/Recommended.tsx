import React from 'react'
import Button from '../Components/Button'

const Recommended:React.FC = () => {
  return (
    <div>
      <Button value = "All Products"/>
      <Button value = "Men's clothing "/>
      <Button value = "Women's clothing "/>
      <Button value = "Jewelery"/>
      <Button value = "Electronics"/>
    </div>
  )
}

export default Recommended