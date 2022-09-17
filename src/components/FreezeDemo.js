import { useState } from "react";
import { Link } from "react-router-dom";

export const FreezeDemo = () => {
  const [freezeTime, setFreezeTime] = useState(0);

  const causeFreeze = (time) => {
    setFreezeTime(time);

    const begin = window.performance.now();
    while (window.performance.now() < begin + (time * 1000));

    openModal();
  };

  const openModal = () => document.getElementById('freeze-modal').style.display='block';
  const closeModal = () => document.getElementById('freeze-modal').style.display='none';

  return (
    <>
      <div className="w3-container w3-teal">
        <h1>App Freeze</h1>
      </div>

      <div>
        <section className="w3-container w3-margin-top">
          <button className="w3-button w3-red" onClick={() => causeFreeze(5)}>Cause 5s Freeze Now</button>
        </section>
        <section className="w3-container w3-margin-top">
          <button className="w3-button w3-red" onClick={() => causeFreeze(3)}>Cause 3s Freeze Now</button>
        </section>

        <section className="w3-container w3-margin-top">
          Clicking the above buttons would cause the app to freeze for few seconds. Freezes are caused mainly by bad code taking up a lot of time and blocking the main thread.
        </section>

        <section className="w3-container w3-margin-top">
          <span className="w3-amber">
            Janksnag would report this the moment your customer experiences this.
          </span>
        </section>

        <hr/>

        <section className="w3-container w3-margin-top">
          <Link to='/janky-form'>Next &gt;</Link>
        </section>
      </div>

      <div id="freeze-modal" className="w3-modal">
        <div className="w3-modal-content">
          <div className="w3-container">
            <span onClick={closeModal}
            className="w3-button w3-display-topright">&times;</span>
            <p>You just experienced a {freezeTime}s freeze.</p>
          </div>
        </div>
      </div>
    </>
  );
};
