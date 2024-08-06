 
import { Link } from 'react-router-dom';
 
import { handleError, handleSuccess } from '../Pages/utils';
 

function Signup() {
   const handleChange=()=>{

   }
   const handleSubmit=()=>{

   }
  return (
    <div className="containerLoginSignup">
    <div className='signup'>
     <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="name">
                <input type="text"
                name='name'
                onChange={handleChange}
                autoFocus
                placeholder='Enter name ..'/>
            </label>
        </div>
        <div>
            <label htmlFor="email">
                <input type="email"
                name='email'
                onChange={handleChange}
                placeholder='Enter your email  ..'/>
            </label>
        </div>
        <div>
            <label htmlFor="password">
                <input type="password"
                name='password'
                onChange={handleChange}
                placeholder='Enter your password  ..'/>
            </label>
        </div>
        <div>
        <button>
            Signup
        </button>
        </div>
        <span>Already Have acccount ?
          <Link style={{color:"black"}} to='/login'>Login</Link>   
        </span>
        </form> 
 
    </div>
    </div>
  )
}

export default Signup
