import React from 'react'
import useFetch from '../hooks/useFetch'
import MessageItem from '../components/MessageItem'

const Messages = () => {
  const url = 'http://localhost:3001/messages'
  const {data, loading, error} = useFetch(url)

  if(loading) {
    return <div>Loading</div>
  }

  return (
    <div className='container mx-auto pb-6'>
      {data.map((message) => {
        return <MessageItem key={message.id} {...message}/>
      })}
    </div>
  )
}

export default Messages