import Game from './components/Game.js';

import './style/App.css';

function App() {
  return (
    <div>
      <header>
        <h1>Battleships</h1>
      </header>
      <section>
        <Game />
      </section>
    </div>
  );
}

export default App;
