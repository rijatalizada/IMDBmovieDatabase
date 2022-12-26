import React, { useState } from "react";
import axios from "axios";
import { MdDoneAll } from "react-icons/md";
import { BiError } from "react-icons/bi";

function ContactPage() {
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");
  const [isError, setError] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const date = new Date().getTime()
      const message = { subject, email, content, date };
      if(subject && email && content && date) {
        const res = await axios.post("http://localhost:3001/messages", message);
        const data = await res.data;
        if (data) {
          setIsSent(true);
          setError(false)
          setSubject('')
          setEmail('')
          setContent('')
        }
        return data;
      }
    } catch (e) {
      setIsSent(false);
      setError(true);
      console.log(e);
      throw new Error(e);
    }
  };

  return (
    <div className="container mx-auto py-10 px-5">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            htmlFor="subject"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Subject
          </label>
          <input
            id="subject"
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Email Address
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="content"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Content
          </label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Send Message
          </button>
        </div>
        <div>
          {isSent && (
            <div className="flex items-center text-[green] gap-3 mt-5 bg-gray-200 rounded-md px-3 py-1 text-lg font-semibold mr-2">
              <MdDoneAll className="" /> Your Message was sent successfully
            </div>
          )}
          {isError && (
            <div className="flex items-center text-[red] gap-3 mt-5 bg-gray-200 rounded-md px-3 py-1 text-lg font-semibold mr-2">
              <BiError className="" /> An error occurred while sending the
              message
            </div>
          )}
        </div>
      </form>
    </div>
  );
}

export default ContactPage;
