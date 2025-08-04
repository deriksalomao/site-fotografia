function copyright() {
 return new Date().getFullYear();
}

function Produto() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>TESTE! {copyright()}</h1>
      </header>
    </div>
  );
}

export default Produto;
