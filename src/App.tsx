import './App.css'
// import FacebookIcon from './assets/FacebookIcon';
// import InstagramIcon from './assets/InstagramIcon';
// import TwitterIcon from './assets/TwitterIcon';
import amalProfileImage from './assets/amal-01.jpeg';

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

      <div className="mission-container">
        <h3>mission</h3>
        <p>It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Don’t worry about sounding professional. Sound like you. There are over 1.5 billion websites out there, but your story is what’s going to separate this one from the rest.</p>
      </div>

      <div className="contact-container">
        <h3>contact</h3>
        <small>email@example.com <br /> (555) 555 - 5555 <br /> <a href="#">@instagram</a></small> 
        <img src={amalProfileImage} alt="Amal-profile-image" />
      </div>

      <div className="specialities-container">
        <h3>specialities</h3>

        <div className="specialities-item">
          <div className="specialities">
            <p>UX Research</p>
            <div className="plus-icon">
              <div className="plus-icon-1"></div>
              <div className="plus-icon-2"></div>
            </div>
          </div>
          <div className="specialities-detail">
            <small>
              It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference. 
            </small>
          </div>
        </div>

        <div className="specialities-item">
          <div className="specialities">
            <p>Strategic Planning</p>
            <div className="plus-icon">
              <div className="plus-icon-1"></div>
              <div className="plus-icon-2"></div>
            </div>
          </div>
          <div className="specialities-detail">
            <small>
              Don’t worry about sounding professional. Sounds like you. There are over 1.5 billion websites out there, but your story is what’s going to separate this one from the rest. If you read the words back and don’t hear your own voice in your head, that’s a good sign you still have more work to do.
            </small>
          </div>
        </div>

        <div className="specialities-item">
          <div className="specialities">
            <p>Writing & Editing</p>
            <div className="plus-icon">
              <div className="plus-icon-1"></div>
              <div className="plus-icon-2"></div>
            </div>
          </div>
          <div className="specialities-detail">
            <small>
              Be clear, be confident, and don’t overthink it. The beauty of your story is that it’s going to continue to evolve and your site can evolve with it. Your goal should be to make it feel right for right now. Later will take care of itself. It always does.
            </small>
          </div>
        </div>

        <div className="specialities-item">
          <div className="specialities">
            <p>Front-End Dev</p>
            <div className="plus-icon">
              <div className="plus-icon-1"></div>
              <div className="plus-icon-2"></div>
            </div>
          </div>
          <div className="specialities-detail">
            <small>
              It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference. 
            </small>
          </div>
        </div>

        <div className="specialities-item">
          <div className="specialities">
            <p>Analytics & Data</p>
            <div className="plus-icon">
              <div className="plus-icon-1"></div>
              <div className="plus-icon-2"></div>
            </div>
          </div>
          <div className="specialities-detail">
            <small>
              Don’t worry about sounding professional. Sounds like you. There are over 1.5 billion websites out there, but your story is what’s going to separate this one from the rest. If you read the words back and don’t hear your own voice in your head, that’s a good sign you still have more work to do.
            </small>
          </div>
        </div>

      </div>

      {/* <div className="speaking-events-container">
        <h3>speaking events</h3>
        <div className="speaking-events-circle">
          <p>6/29</p>
          <a href='#'>Cafe Speaker Series</a>
          <small>123 Demo Street</small>
          <small>New York, NY 12345</small>
        </div>
        <div className="speaking-events-circle">
          <p>7/14</p>
          <a href='#'>Emerging Tech Meet-up</a>
          <small>123 Demo Street</small>
          <small>New York, NY 12345</small>
        </div>
        <div className="speaking-events-circle">
          <p>7/29</p>
          <a href='#'>Artists in conversation</a>
          <small>123 Demo Street</small>
          <small>New York, NY 12345</small>
        </div>
      </div>

      <footer>
        <FacebookIcon />
        <InstagramIcon />
        <TwitterIcon />
      </footer> */}
    </>
  )
}

export default App
