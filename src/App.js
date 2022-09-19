import { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import { ErrorsDemo } from './components/ErrorsDemo';
import { FreezeDemo } from './components/FreezeDemo';
import { HomePage } from './components/HomePage';
import { JankyFormDemo } from './components/JankyFormDemo';
import { SlowInteractionsDemo } from './components/SlowInteractionsDemo';
import { ThirdPartyDemo } from './components/ThirdPartyDemo';

function App() {
  const [session, setSession] = useState(null);
  const [sessionAttempt, setSessionAttempt] = useState(0);

  const getSessionInfo = () => {
    if (session || sessionAttempt >= 10) {
      return;
    }

    setTimeout(() => {
      const Janksnag = window.Janksnag;
      if (!Janksnag) {
        getSessionInfo();
      }

      const sessionId = Janksnag.getCurrentSession();
      if (sessionId) {
        setSession(sessionId);
      } else {
        setSessionAttempt(sessionAttempt + 1);
        getSessionInfo();
      }
    }, 1000);
  };

  getSessionInfo();

  return (
    <div>
      <div className="w3-sidebar w3-light-grey w3-bar-block" style={{ width: '20%' }}>
        <Link to='/' className="w3-bar-item"><h3>Jank Hell</h3></Link>
        <Link to='/freeze' className="w3-bar-item w3-button">App Freeze</Link>
        <Link to='/janky-form' className="w3-bar-item w3-button">A Janky form</Link>
        <Link to='/slow-interactions' className="w3-bar-item w3-button">Slow click handlers</Link>
        <Link to='/3rd-party' className="w3-bar-item w3-button">Janky 3rd party code</Link>

        <a className='w3-bar-item w3-margin-top' href="https://app.janksnag.com/sign-up" target='_blank' rel='noreferrer'>
          <button className="w3-button w3-lime w3-card">Sign up for Janksnag</button>
        </a>

        { session && (
          <a href={`https://demo.janksnag.com/demo/jank-hell/session/${session}`} target='_blank' rel='noreferrer' className='w3-bar-item w3-margin-top w3-text-blue'>
            Go to Janksnag session
          </a>
        )}
      </div>

      <div style={{ marginLeft: '20%' }}>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/freeze' element={<FreezeDemo />} />
          <Route path='/janky-form' element={<JankyFormDemo />} />
          <Route path='/slow-interactions' element={<SlowInteractionsDemo />} />
          <Route path='/3rd-party' element={<ThirdPartyDemo />} />
          <Route path='/errors' element={<ErrorsDemo />} />
        </Routes>
      </div>

      <div className='footer'>
        <div className=''>
          <span className='w3-margin-left'>Made with ❤️</span>
          <span className='w3-margin-left w3-large'>•</span>
          <a href='mailto:hello@janksnag.com' target='_blank' rel='noreferrer' className='w3-margin-left w3-margin-right'>hello@janksnag.com</a>
        </div>
      </div>
    </div>
  );
}

export default App;
