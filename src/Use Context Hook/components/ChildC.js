import React from 'react'
import UserContext from '../context/UserContext';
import { useContext } from 'react';

const ChildC = () => {
  const userContext = useContext(UserContext);  

  return (
    <div>
        Hello {userContext.name} from Child C
    </div>
  )
}

export default ChildC