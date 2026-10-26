import { PlayIcon } from './Icons.jsx';
import './PlayerBar.css';

function PlayerBar() {
  return (
    <footer className="player-bar">
      <div className="player-bar__track">
        <div className="player-bar__cover" />
        <div>
          <p className="player-bar__title">Elegí una canción</p>
          <p className="player-bar__artist">Preview de 30 segundos</p>
        </div>
      </div>

      <button className="player-bar__play" type="button" disabled aria-label="Reproducir">
        <PlayIcon />
      </button>

      <p className="player-bar__note">Escuchás un preview de Deezer</p>
    </footer>
  );
}

export default PlayerBar;