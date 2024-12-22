import { Link } from 'react-router-dom';
import Button from '../shared/Button';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-primary">
          RentEase
        </Link>
        <div className="flex gap-4">
          <Button variant="outline" onClick={() => {}}>
            Login
          </Button>
          <Button variant="primary" onClick={() => {}}>
            List Property
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;