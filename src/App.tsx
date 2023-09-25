import './App.css'

function App() {
  //https://amal-fluid-demo.squarespace.com/

  return (
    <>
      <header>
        <nav>
          <div className="site-logo">
            <a href="#">Amal</a>
          </div>
          <div className="site-hamburger">
            <span className="line-one"></span>
            <span className="line-two"></span>
          </div>
          <div className="site-navlinks">
            <ul>
              <li><a href="#">Speaking events</a></li>
              <li><a href="#" className="abs-link">Contact Me</a></li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  )
}

export default App
