import { Instagram, Linkedin, Youtube, Twitter } from 'lucide-react'

const Footer = () =>  {
  return (
    <footer className="bg-[#020B1C] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 w-full">
          <div className="flex gap-16 ">
            <div>
            <img
              src="./images/logo-1.png" 
              alt="UNIVOC Logo"
              className="h-[35px] w-[140px] mb-0"
            />
            <p className='text-gray-300'>Skilling to Empower</p>
            </div>
            <div>
            <p className="text-gray-300">
              "empowering individuals with the skills to thrive in a changing world."
            </p>
            <p className="text-gray-300 ">
              "univoc skilling to empower bridges talent and opportunity, driving innovation and growth for a brighter future."
            </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-6">About us</h3>
            <h4 className="text-2xl font-bold">Careers</h4>
            <div className="space-y-2 text-gray-300">
              <p>Adressss</p>
              <p>hrd@theunivoc.com</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-6">Academics</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Programme
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-6">Innovation</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Student
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Faculty
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4 ">
            <h3 className="text-2xl font-bold mb-6">Other Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Jobs
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Become A Teacher
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Events
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex gap-6 border-b-2 border-white pb-4">
          <a href="#" className="text-gray-300 hover:text-white">
            <Twitter className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            <Instagram className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            <Youtube className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer;