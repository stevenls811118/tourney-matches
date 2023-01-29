import Player from "./Player";


const PlayerList = (props) => {

  const playerArray = props.playerData.map(i => {
    
    return (
      <Player 
        firstName={i.firstName} 
        lastName={i.lastName} 
        gamerTag={i.gamerTag} 
        wins={i.wins}/>
    )
  });
  
  return (
    <section className="PlayerList">
      <h1>Current participating players</h1>
      {playerArray}
    </section>
  );
};

export default PlayerList;