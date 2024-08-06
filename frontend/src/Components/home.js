import React ,{useEffect,useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { handleSuccess } from './utils';
import { ToastContainer } from 'react-toastify';

function Home() {
const [loggedInUser,setLoggedInUser]=useState('');
const navigate=useNavigate();

 
const [products, setProducts] = useState([]);

const fetchProducts = async () => {
  try {
    const url = "http://localhost:8080/product";
    const response = await fetch(url, {
      
      headers: {
        "Authorization": `${localStorage.getItem('token')}`,
      },
    });
    let data = '';
    // Check if the response is okay
    if (response.ok) {
      data = await response.json();
      console.log(data);
      setProducts(data); // Set the fetched data to state
    } else {
      console.error('Failed to fetch data', response.statusText);
    }

    console.log(data);
  } catch (e) {
    console.error('Error fetching products', e);
  }
};

useEffect(() => {
  setLoggedInUser(localStorage.getItem('loggedInUser'));
  fetchProducts();
}, []);
const handleLogout=(e)=>{
  localStorage.removeItem('token');
  localStorage.removeItem('loggedInUser');
  handleSuccess("User Logged out")
  setTimeout(()=>{
navigate('/login');
  },1000)
}


  return (
    <>
    <div>
      
      <p>Welcome to the home</p>
      <p>Welcome to the home</p>
      <p>Welcome to the home</p>
      <p>Welcome to the home</p>
       <div>
       {products.map((product) => (
            <div key={product.id}>
              <h2>{product.title}</h2>
              <p>{product.description}</p>
            </div>
          ))}
        
        </div>
    </div>
    <h1>{loggedInUser}</h1>
    <button onClick={handleLogout} >Logout</button>
    <ToastContainer/>
    </>
  );
}

export default Home;

