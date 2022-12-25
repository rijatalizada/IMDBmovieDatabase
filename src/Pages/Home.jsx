import React from 'react'
import { Person } from '../components/Person'
import persons from '../persons.json'

const Home = () => {
  return (
    <div className='container mx-auto h-full'>
       <div className='flex justify-center items-center'>
        <div className={`grid grid-cols-3 gap-11 mt-10 items-start`}>
          {persons.map((person) => {
            return <Person key={person.id} {...person} />
          })}
        </div>
       </div> 
    </div>
  )
}


export default Home