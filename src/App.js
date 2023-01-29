import './App.css';
import MatchList from './components/MatchList';
import PlayerList from './components/PlayerList';
import matchData from './data/matchData';
import playerData from './data/playerData';
import { addWinsToPlayers, preparePlayerData } from './helpers/playerHelpers';


function App() {

  const playerDataArray = preparePlayerData(playerData);
  const newPlayerDataArray = addWinsToPlayers(playerDataArray, matchData);

  return (
    <div className="App">
      <h1>
        Tourney Matches <span>Where Coding and Tournaments found their Match!</span>
      </h1>
      <PlayerList playerData={newPlayerDataArray} matchData={matchData} />
      <MatchList matchData={matchData} />
    </div>
  );
}

export default App;
