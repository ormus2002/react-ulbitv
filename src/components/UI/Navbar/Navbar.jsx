import { Link } from "react-router-dom"
import MyButton from "../button/MyButton"
import { useContext } from "react"
import { AuthContext } from "../../../context"

export const Navbar = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext);

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem('auth');
  }

  return (
    <div className='navbar'>
      <MyButton onClick={logout}>
        Logout
      </MyButton>
      <div className='navbar__links'>
        <Link to='/about'>About</Link>
        <Link to='/posts'>Posts</Link>
      </div>
    </div>
  )
}