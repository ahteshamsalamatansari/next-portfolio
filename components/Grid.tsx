import React from 'react'
import { BentoGrid } from './ui/BentoGrid'

const Grid = () => {
  return (
    <section id='about'>
        <BentoGrid>
            {[{title: 'Title 1' , description:'Description 1'}].map((item, i)=> (
                
            ))}
        </BentoGrid>
    </section>
  )
}

export default Grid