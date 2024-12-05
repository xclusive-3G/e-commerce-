import React from 'react'
import Input from '../../Components/Input'

const Price:React.FC = () => {
  return (
    <div>
        <h2 className='font-semibold text-xl'>Price</h2>
        <p>
        <label >
          <Input type='radio' name="price" className='mr-2' />
          <span>0-50</span>
        </label>
        </p><p>
        <label >
          <Input type='radio' name="price" className='mr-2'/>
          <span>51-100</span>
        </label>
        </p>
      </div>
  )
}

export default Price