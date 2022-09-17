import { Link } from "react-router-dom";

export const HomePage = () => {

  return (
    <>
      <div className="w3-container w3-teal">
        <h1>Jank Hell</h1>
      </div>

      <article>
        <section className="w3-container w3-margin-top">
          This website is to showcase some of the capabilities of <a href="https://app.janksnag.com" target='_blank' rel="noreferrer">Janksnag</a>.
        </section>

        <section className="w3-container w3-margin-top">
          Janksnag helps eliminate <a href="https://developer.mozilla.org/en-US/docs/Glossary/Jank" target='_blank' rel="noreferrer">freeze and jank</a> from your web app.
        </section>

        <section className="w3-container w3-margin-top">
          The following pages are filled with janks. Visit these pages, experience jank for yourself, and see how Janksnag monitors and reports them.
        </section>

        <section className="w3-container w3-margin-top">
          <ul>
            <li><Link to='/freeze'>App Freeze</Link></li>
            <li><Link to='/janky-form'>A Janky form</Link></li>
            <li><Link to='/slow-interactions'>Slow click handlers</Link></li>
            <li><Link to='/3rd-party'>Janky 3rd party code</Link></li>
          </ul>
        </section>

        <section className="w3-container w3-margin-top">
          Use the "Go to Janksnag session" link in the left pane to view this session in Janksnag.
        </section>
      </article>
    </>
  );
};
