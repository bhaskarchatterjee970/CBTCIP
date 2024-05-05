import React from 'react';

function Contact(){
  return (
    <div id='Contact' className="container mx-auto py-8 flex-col rounded-xl mt-[450px] md:mt-0">
        <h2 className="text-[60px] mb-6 text-white text-center font-bold hover:text-cyan-300">Contact Me !</h2>
        <p className='text-3xl text-white text-center font-bold mb-10'>Please fill out the form below for discuss any work opportunities</p>
      <div className="max-w-lg mx-auto text-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        
        <form onSubmit={(e)=>{e.preventDefault()}}>
          <div className="mb-4">
            <label className="block text-white text-lg font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-white text-lg font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-6">
            <label className="block text-white text-lg font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              placeholder="Your Message"
              rows="6"
            ></textarea>
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
