
export const ErrorsDemo = () => {

  const causeScriptError = () => {
    const badCode = 'const s;';
    eval(badCode);
  };

  const causeUnhandledRejection = () => {
    const promise = new Promise((_resolve, reject) => {
      setTimeout(() => {
        reject('Cause unhandled rejection');
      }, 100)
    });

    promise.then(() => console.log('This wont get executed'));
  };

  return (
    <>
      <div className="w3-container w3-teal">
        <h1>Errors</h1>
      </div>

      <div>
        <section className="w3-container w3-margin-top">
          <button className="w3-button w3-red" onClick={causeScriptError}>Cause Error</button>
        </section>
        <section className="w3-container w3-margin-top">
          <button className="w3-button w3-red" onClick={causeUnhandledRejection}>Cause unhandled rejection</button>
        </section>
      </div>
    </>
  );
};
