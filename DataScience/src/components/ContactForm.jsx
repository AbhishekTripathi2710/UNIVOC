'use client'

import { Mail, Phone } from 'lucide-react'

export default function ContactForm() {
  return (
    <div className="h-[600px] bg-gradient-to-br from-blue-500 to-blue-600 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute w-full h-full border border-white/10 rounded-full"
            style={{
              transform: `scale(${1 + i * 0.1})`,
              left: '30%',
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl  px-4 py-8 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-8 flex flex-col">
            <h2 className="text-4xl font-bold">Have More Questions?</h2>
            <p className="text-xl opacity-90">
              Reach out to us. Our support team is to assist you.
            </p>

            <div className="space-y-4 pb-12">
              <div className="flex items-center gap-3">
                <Mail className="w-6 h-6" />
                <a href="mailto:Hrd@Theunivoc.Com" className="hover:underline">
                  Hrd@Theunivoc.Com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-6 h-6" />
                <a href="tel:+91 84483 73884" className="hover:underline">
                  +91 84483 73884
                </a>
              </div>
            </div>

            <div className="">
              <img src='./images/mail.png' className='mt-[4rem]'></img>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-xl w-[400px] ml-[300px]">
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Full Name*"
                  className="w-full px-4 py-2 rounded border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Email Address*"
                  className="w-full px-4 py-2 rounded border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  required
                />
              </div>

              <div className="flex gap-4">
                <div className="w-20">
                  <select className="w-full px-4 py-2 rounded border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-white">
                    <option>IN</option>
                  </select>
                </div>
                <div className="flex-1">
                  <input
                    type="tel"
                    placeholder="Enter your mobile number*"
                    className="w-full px-4 py-2 rounded border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="State*"
                  className="w-full px-4 py-2 rounded border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  required
                />
                <input
                  type="text"
                  placeholder="City*"
                  className="w-full px-4 py-2 rounded border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <select className="w-full px-4 py-2 rounded border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-white">
                  <option value="">Select School Name</option>
                  <option value="school1">School 1</option>
                  <option value="school2">School 2</option>
                  <option value="school3">School 3</option>
                </select>
              </div>

              <div>
                <textarea
                  placeholder="Your Message*"
                  rows={3}
                  className="w-full px-4 py-2 rounded border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition-colors"
              >
                Contact Us
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

