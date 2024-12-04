import React from 'react'
import Recommended from '../Recommend/Recommended'

const Products:React.FC = () => {
  return (
    <section className='md:w-9/12 w-full h-screen right-0  absolute'>
        <div>
        <Recommended/>
        </div>
    </section>
  )
}

export default Products