import { useContext } from 'react';
import AuthContext from './AuthContext.js';

function useAuth() {
  return useContext(AuthContext);
}

export default useAuth; 

/*useAuth es un hook propio: en cualquier componente alcanza con const { user } = useAuth();.*/ 