import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold">RentEase</Link>
          <div className="flex space-x-4">
            <Link to="/search" className="text-gray-700 hover:text-gray-900">Search</Link>
            <Link to="/roommates" className="text-gray-700 hover:text-gray-900">Find Roommates</Link>
            <Link to="/list-property" className="text-gray-700 hover:text-gray-900">List Property</Link>
            <Link to="/about" className="text-gray-700 hover:text-gray-900">About</Link>
            <Link to="/contact" className="text-gray-700 hover:text-gray-900">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;