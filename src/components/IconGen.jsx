import React from 'react'
import Icon from '../img/shuffle.svg'
import { useContext } from 'react'
import { myContext } from '../context'

export default function IconGen() {
    const {fechdata} = useContext(myContext)
  return (
    <div className='iconback'>
      <button onClick={fechdata}>
       <img src={Icon} alt='imgicon'/>

      </button>
    </div>
  )
}
