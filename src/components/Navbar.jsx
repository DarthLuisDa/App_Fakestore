import { Link, useNavigate } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";

const Navbar = () => {
  const { user, logout } = useLogin();
  const navigate = useNavigate();
  const [cartCount, setCartCount] = useState(0); // Initialize cartCount state variable

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <nav className="bg-black p-4 w-full flex justify-center">
      <div className="container flex justify-between items-center text-white px-4">
        <h1 className="text-xl">FakeStore</h1>

        <Link to="/cart">
          Carrito <span className="bg-red-500 text-white rounded-md px-2">{cartCount}</span>
          
        </Link>

        {!user ? (
          <Link to="/login">Iniciar sesión</Link>
        ) : (
          <div className="flex gap-2 items-center">
            <span>{user.email}</span>
            <button
              className="text-red-500 underline p-2 rounded-md hover:text-red-600"
              onClick={handleLogout}
            >
              Cerrar sesión
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};



export default Navbar;
