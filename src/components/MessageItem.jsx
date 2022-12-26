import React from 'react';

const MessageItem = ({ subject, email, content, date }) => {
  return (
    <div className="max-w-xl mx-auto mt-12">
      <div className="bg-white rounded-lg shadow-md">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            {subject}
          </h3>
          <div className="mt-2 max-w-xl text-sm leading-5 text-gray-500">
            <p>
              Email: {email}
            </p>
            <p>
              Content: {content}
            </p>
          </div>
        </div>
        <div className="bg-gray-100 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          <span className="inline-flex text-sm rounded-md shadow-sm sm:ml-3 sm:w-auto">
            {new Date(date).toLocaleDateString()}
          </span>
        </div>
      </div>
    </div>
  );
}

export default MessageItem;
