import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import {BsStarFill, BsStarHalf} from 'react-icons/bs'

const Movie = () => {
    const {id} = useParams()
    const {data, loading, error} = useFetch(`http://localhost:3001/movies/${id}`)

    if(loading) {
        return <div>Loading...</div>
    }

    const casts = [data.Star1,data.Star2, data.Star3, data.Star4]

    return (
      <div className="container mx-auto py-10">
      <div className="flex items-center justify-between mb-10">
        <h1 className="text-4xl font-bold">{data.Series_Title} <span className='text-sm'>({data.Certificate})</span> </h1>
        <div className="flex flex-col items-end ">
          <div className="font-bold text-xl flex items-center text-gray-600 ml-2 ">
            {data.IMDB_Rating > 5 ? <BsStarFill className='text-[#e0e03d]'/> : <BsStarHalf className='text-[#e0e03d]'/>}
            <p className='ml-3'>
              {data.IMDB_Rating}<span className='text-sm'>/10</span>
            </p>
          </div>
          <p className='text-xs mt-1'>
           {data.No_of_Votes}
          </p>
        </div>
      </div>
      <div className="flex items-center mb-6">
        <img src={data.Poster_Link} alt="The Shawshank Redemption poster" className="w-64 h-full mr-6" />
        <div>
          <p className="text-gray-600 mb-2">Released: {data.Released_Year}</p>
          <p className="text-gray-600 mb-2">Duration: {data.Runtime}</p>
          <div className="text-gray-600 mb-2">Genre: {data.Genre.split(', ').map((genre) => {
            return <div className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{genre}</div>
          })}</div>
          <p className="text-gray-600 mb-2">Director: {data.Director}</p>
          <p className="text-gray-600 mb-2">Stars: {casts.map((star, index) => <div className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{star}</div>)}</p>
        </div>
      </div>
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Overview</h2>
        <p class="text-gray-600">
          {data.Overview}
        </p>
      </div>

    </div>
    );
}

export default Movie
