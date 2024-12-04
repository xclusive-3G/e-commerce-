import React from 'react'
import Recommended from '../Recommend/Recommended'
import Card from '../Components/Card'

const Products:React.FC = () => {
  return (
    <section className='md:w-10/12  h-auto w-full right-0  absolute '>
        <div className='grid w-full justify-center '>
        <Recommended/>
        {/* segment for card to be styled */}
        <div className='grid gap-4 p-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 '>
        <Card/><Card/><Card/><Card/><Card/><Card/><Card/><Card/>
        </div>
        </div>        
    </section>
  )
}

export default Products