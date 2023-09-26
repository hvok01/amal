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

      <main>
        <small>I'm a</small> <br />
        <h1> Designer & </h1> <br />
        <h1>Speaker</h1><br />
        <small>interested in the ethics of AI</small>
      </main>
    </>
  )
}

export default App
