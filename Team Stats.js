// Create and extract information about your favorite sports team.
const team = {
  _players: [
    {firstName: 'Cristiano', lastName: 'Ronaldo', age: 34},
    {firstName: 'Lionel', lastName: 'Messi', age: 31},
    {firstName: 'Kylian', lastName: 'Mbappe', age: 20}
  ],
  _games: [
    {opponent: "Manchester United", teamPoints: 5, opponentPoints: 2},
    {opponent: "Juventus", teampoints: 3, opponentPoints: 7},
    {opponent: "FC Barcelona", teampoints: 4, opponentPoints: 4}
  ],
  
  get players() {
    return this._players;
  },
  
  get games() {
    return this._games;
  },
  
  addPlayer (firstName, lastName, age){
    let player = {
    firstName: firstName,
    lastName: lastName,
    age: age
    };
    
    this.players.push(player);
  },
  
  addGame (oppName, points, oppPoints){
   const game = {
      opponent: oppName,
      teamPoints: points,
      opponentPoints: oppPoints
    };
    
    this.games.push(game);
  }
  
};

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);

console.log(team.players);

team.addGame('Arsenal', 6, 5);
team.addGame('PSG', 3, 0);
team.addGame('Real Madrid', 2, 4);

console.log(team.games);
