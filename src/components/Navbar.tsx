import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-4 shadow-md bg-white sticky top-0 z-50">
      
      {/* Logo */}
      <h1 className="text-xl font-bold text-blue-600">
         <Link to="/" className="hover:text-blue-600">Dental Care</Link>
      </h1>

      {/* Links */}
      <div className="space-x-6">
        <a href="#home" className="hover:text-blue-600">Home</a>
        <a href="#services" className="hover:text-blue-600">Services</a>
        <a href="#about" className="hover:text-blue-600">About</a>
        <a href="#contact" className="hover:text-blue-600">Contact</a>
      </div>
    </nav>
  )
}

export default Navbar