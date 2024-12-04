import React from 'react'
import Recommended from '../Recommend/Recommended'
import Card from '../Components/Card'

const Products:React.FC = () => {
  return (
    <section className='md:w-9/12  h-auto w-auto right-0  absolute bg-red-600'>
        <div>
        <Recommended/>
        {/* segment for card to be styled */}
        <div className='flex flex-wrap gap-4 justify-center p-4 '>
        <Card/><Card/><Card/><Card/>
        </div>
        </div>
    </section>
  )
}

export default Products