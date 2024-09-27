import { Navigate } from "react-router-dom";
import { useUser } from "../context/userContext";

const PrivateRoute =  ({ children }) => {
  const { user } = useUser();
  const token = localStorage.getItem('token');
  
  if (!token) {
    // console.log("token yok ustaa");
    return <Navigate to="/" />;
  }



//  const validate = async () => {
//   try {
//     const response = await fetch(
//       `http://localhost:3001/validateToken/${user.id}`,
//       { 
//         method: 'GET',
//         headers: {
//           'Authorization' : `Bearer ${token}`,
//           'Content-Type' : 'application/json'
//         }
//       }
//     );
//   } catch (error) {
//     console.log("hataaaaaaaaaaaa")
//   }
//  }

//  validate();

  return children;
};

export {PrivateRoute};
