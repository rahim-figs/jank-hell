import { Link } from "react-router-dom";

export const JankyFormDemo = () => {

  const makeSlowTask = () => {
    // Random number in range 100 - 400ms
    const randTaskLen = Math.round(Math.random() * (400 - 10)) + 10;
    const begin = window.performance.now();
    while (window.performance.now() < begin + randTaskLen);
  };

  const handleInputChange = () => makeSlowTask();

  return (
    <>
      <div className="w3-container w3-teal">
        <h1>A Janky form</h1>
      </div>

      <section className="w3-container w3-margin-top">
        Janky forms can frustrate your customers. Like this one down below. Try to interact with it.
      </section>

      <section className="w3-container w3-margin-top">
        <span className="w3-amber">
          Janksnag would report this the moment your customer experiences this.
        </span>
      </section>

      <section className="w3-container w3-margin-top">
        <form>
          <p>
            <label className="w3-text-grey">Name</label>
            <input className="w3-input w3-border" type="text" required={false} onChange={handleInputChange} />
          </p>

          <p>
            <label className="w3-text-grey">Email</label>
            <input className="w3-input w3-border" type="text" required={false} onChange={handleInputChange}/>
          </p>

          <p>
            <label className="w3-text-grey">Subject</label>
            <textarea className="w3-input w3-border" style={{ resize: 'none' }} spellCheck="false" onChange={handleInputChange}></textarea>
          </p>

          <p>
            <input className="w3-check" type="checkbox" defaultChecked onChange={handleInputChange} />
            <label className="w3-margin-left">Engineering</label>
          </p>

          <p>
            <input className="w3-check" type="checkbox" onChange={handleInputChange} />
            <label className="w3-margin-left">Product Management</label>
          </p>

          <p>
            <input className="w3-check" type="checkbox" onChange={handleInputChange} />
            <label className="w3-margin-left">Customer Support</label>
          </p>

          <p>
            <button type="button" className="w3-btn w3-padding w3-teal" style={{ width: '120px' }}>Send</button>
          </p>
        </form>
      </section>

      <hr/>

      <section className="w3-container w3-margin-top">
        <Link to='/slow-interactions'>Next &gt;</Link>
      </section>
    </>
  );
};
