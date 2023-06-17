import logo from "../assets/images/logo.svg";

const Header = () => {
  return (
    <>
      <header className="header max-width">
        <div>
          <img src={logo} alt="" />

          <nav>
            <ul>
              <li>
                <button>Features</button>
              </li>
              <li>
                <button>Pricing</button>
              </li>
              <li>
                <button>Resources</button>
              </li>
            </ul>
          </nav>
        </div>
        <ul>
          <li>
            <button>Login</button>
          </li>
          <li>
            <button className="btn-cta rounded-full">Sign up</button>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Header;
