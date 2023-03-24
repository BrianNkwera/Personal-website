import { useTheme, useThemeUpdate } from "../hooks/ThemeContext";

function NavBar() {
  const darkTheme = useTheme();
  const toogleDarkTheme = useThemeUpdate();

  return (
    <nav className="navbar navbar-expand-sm navbar-dark py-4 bg-dark fixed-top">
      <div className="container d-flex justify-content-between">
        <div className="d-flex align-items-center">
          <a
            className="navbar-brand text-pink logo pt-3 fw-bolder"
            href="/"
          >
            Brian Nkwera
          </a>
        </div>
        <div id="main_nav">
          <button
            onClick={toogleDarkTheme}
            className="btn rounded-pill bg-secondary"
          >
            {!darkTheme ? (
              <>
                <span className="mx-2">Light</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 18.5a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13Z"
                    stroke="#F4816D"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="m19.14 19.14-.13-.13m0-14.02.13-.13-.13.13ZM4.86 19.14l.13-.13-.13.13ZM12 2.08V2v.08ZM12 22v-.08.08ZM2.08 12H2h.08ZM22 12h-.08.08ZM4.99 4.99l-.13-.13.13.13Z"
                    stroke="#F4816D"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </>
            ) : (
              <>
                <span className="mx-2">Dark </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M2.03 12.42c.36 5.15 4.73 9.34 9.96 9.57 3.69.16 6.99-1.56 8.97-4.27.82-1.11.38-1.85-.99-1.6-.67.12-1.36.17-2.08.14C13 16.06 9 11.97 8.98 7.14c-.01-1.3.26-2.53.75-3.65.54-1.24-.11-1.83-1.36-1.3C4.41 3.86 1.7 7.85 2.03 12.42Z"
                    stroke="#F4816D"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </>
            )}
          </button>
          <a
            className="btn text-decoration-none bg-pink text-light mx-2"
            href="tel:+255747637665"
          >
            Get in touch
          </a>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
