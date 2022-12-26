import React from 'react'
import { Person } from '../components/Person'
import people from '../json/people.json'

const Home = () => {
  return (
    <div className='container mx-auto h-full my-6'>
       <div className='flex justify-center items-center'>
        <div className={`grid grid-cols-3 gap-11 mt-10 items-start`}>
          {people.map((person) => {
            return <Person key={person.id} {...person} />
          })}
        </div>
       </div> 
    </div>
  )
}


export default Home