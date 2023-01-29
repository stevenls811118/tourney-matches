import Match from "./Match";


const MatchList = (props) => {

  const matchDataArray = props.matchData.map((i) => {
    return (
      <Match
        key={i.matchNumber}
        players={i.players} 
        winner={i.winner} 
        scoreDifference={i.scoreDifference} />
    )
  });

  return (
    <section className="PlayerList MatchList">
      <h1>Match list</h1>
      {matchDataArray}
    </section>
  );
};

export default MatchList;