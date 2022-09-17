import { Link } from "react-router-dom";

export const ThirdPartyDemo = () => {

  return (
    <>
      <div className="w3-container w3-teal">
        <h1>Janky 3rd party code</h1>
      </div>

      <div>

        <section className="w3-container w3-margin-top">
          Web apps usually include some 3rd party frames like chat widgets, guiders, etc. If these are poorly written, it can affect the experience for your customers, even if they are not directly interacting with these frames.
        </section>

        <section className="w3-container w3-margin-top">
          <span className="w3-amber">
            Janksnag would flag these 3rd party frames which are causing janks.
          </span>
        </section>

        <section className="w3-container w3-margin-top">
          <iframe title="3rd party child frame" src="https://longtasks.glitch.me/demo-child.html" style={{ width: '100%', minHeight: '400px' }} />
        </section>

        <hr/>

        <section className="w3-container w3-margin-top">
          <Link to='/freeze'>Next &gt;</Link>
        </section>
      </div>
    </>
  );
};
