import React from 'react';


function ContactPage() {

  return (
    <div className="container mx-auto py-10 px-5">
      <form  className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label htmlFor="subject" className="block text-sm font-bold mb-2">
            Subject
          </label>
          <input 
            id="subject" 
            type="text" 
            className="shadow appearance-none border rounded w-full py-2 px-3 " 
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
            Email Address
          </label>
          <input 
            id="email" 
            type="email" 
            className="border rounded w-full py-2 px-3 text-gray-700 " 
          />
        </div>
        <div className="mb-6">
          <label htmlFor="content" className="block text-gray-700 text-sm font-bold mb-2">
            Content
          </label>
          <textarea 
            id="content" 
            className="border rounded w-full py-2 px-3" 
          />
        </div>
        <div className="flex items-center justify-between">
          <button 
            type="submit" 
            className="bg-blue-500 text-white font-bold py-2 px-4 "
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactPage;
