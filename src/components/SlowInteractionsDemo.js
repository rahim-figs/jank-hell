import { Link } from "react-router-dom";

export const SlowInteractionsDemo = () => {
  const causeFreeze = (time) => {
    console.log('In click handler for ', time > 0 ? 'Slow click handler' : 'Fast click handler');

    const begin = window.performance.now();
    while (window.performance.now() < begin + (time * 1000));

    openModal();
  };

  const openModal = () => document.getElementById('slow-interactions-modal').style.display='block';
  const closeModal = () => document.getElementById('slow-interactions-modal').style.display='none';

  return (
    <>
      <div className="w3-container w3-teal">
        <h1>Slow Click handlers</h1>
      </div>

      <div>
        <section className="w3-container w3-margin-top">
          <button className="w3-button w3-green" onClick={() => causeFreeze(0)}>Fast button</button>
        </section>
        <section className="w3-container w3-margin-top">
          <button className="w3-button w3-red" onClick={() => causeFreeze(0.5)}>Slow button</button>
        </section>

        <section className="w3-container w3-margin-top">
          The slow button experience is not that poor individually, however, such continued sluggish experience across the app can frustrate your customers.
        </section>

        <section className="w3-container w3-margin-top">
          <span className="w3-amber">
            Janksnag would report this the moment your customer experiences this.
          </span>
        </section>

        <hr/>

        <section className="w3-container w3-margin-top">
          <Link to='/3rd-party'>Next &gt;</Link>
        </section>
      </div>

      <div id="slow-interactions-modal" className="w3-modal">
        <div className="w3-modal-content">
          <div className="w3-container">
            <span onClick={closeModal}
            className="w3-button w3-display-topright">&times;</span>
            <p>Clicked!</p>
          </div>
        </div>
      </div>
    </>
  );
};
