import jwtDecode from 'jwt-decode';
import store from '../redux/store';

export const isLoggedIn = () => {
  const token = localStorage.getItem('token');
  return isValidToken(token);
};

export const isValidToken = (token) => {
  if (!token) return false;
  let decoded = null;
  try {
    decoded = jwtDecode(token);
    const now = Date.now().valueOf() / 1000;
    if (decoded.exp && now >= decoded.exp) return false;
    return true;
  } catch (error) {
    return false;
  }
};

export const decodeToken = (token) => {
  if (isValidToken(token)) {
    try {
      let decoded = jwtDecode(token);

      return decoded;
    } catch (error) {
      return false;
    }
  }
  return false;
};
