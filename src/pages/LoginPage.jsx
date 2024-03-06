// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { loginUserRequest } from '../store/auth/actions';

// export const LoginPage = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const dispatch = useDispatch();

//     const handleSubmit = (e) => {
//         console.log("asd");
//         e.preventDefault();
//         dispatch(loginUserRequest({ email, password }));
//     };

//     return (
//         <div>
//             <h2>Login</h2>
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <label>Email:</label>
//                     <input 
//                         type="email" 
//                         value={email} 
//                         onChange={(e) => setEmail(e.target.value)} 
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label>Password:</label>
//                     <input 
//                         type="password" 
//                         value={password} 
//                         onChange={(e) => setPassword(e.target.value)} 
//                         required
//                     />
//                 </div>
//                 <button type="submit">Login</button>
//             </form>
//         </div>
//     );
// };

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUserRequest } from '../store/auth/actions';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Prijavljivanje sa:', email, password);
    dispatch(loginUserRequest({ email, password }));
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;

