import { NavLink, Link, useNavigate } from "react-router"

const HeaderBar = ({total}) => {

  const navigate = useNavigate()

  const goToHome = () => {
    navigate('/')
  }

  return (
    <header className="header">
      <div className="header-inner">
        <div className="logo">
          Shop<span>.</span>
        </div>

        <nav className="nav">
          {/*<span onClick={goToHome}>Home</span>*/}
          <NavLink to="/">Home</NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="#">Categories</NavLink>
        </nav>

        <div className="cart">
          <button className="cart-button">
            <span className="cart-icon">🛒</span>
            <span className="cart-text">Cart</span>
            <span className="cart-badge">
              {total}
            </span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default HeaderBar