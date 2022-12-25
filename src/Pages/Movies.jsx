import React from 'react'
import useFetch from '../hooks/useFetch'

const url = "http://localhost:3001/data"

const Movies = () => {
    const {data, loading, error} = useFetch(url)
    console.log(data)

  return (
    <div>Movies</div>
  )
}

export default Movies