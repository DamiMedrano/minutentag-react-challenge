/**
 * Given a list of teams, we need to expose the teams in different ways:
 * - Criteria 1: depending on the score, order the list from highest to lowest.
 * - Criteria 2: depending on the score, order the list from lowest to highest.
 * - Criteria 3: depending on the player's quantity, show ONLY the teams that has more than 3 players.
 *
 * What you need to implement is:
 * - 3 buttons. Each of them need to execute a criteria.
 * - The list of teams should be updated dynamically depending on the selected filter.
 * - Each team item should display: Team Name / Player’s quantity / Total Score of each team.
 */

import { useState } from "react";

const TEAMS = [
	{
		name: "Red",
		players: ["Robin", "Rey", "Roger", "Richard"],
		games: [
			{
				score: 10,
				city: "LA",
			},
			{
				score: 1,
				city: "NJ",
			},
			{
				score: 3,
				city: "NY",
			},
		],
	},
	{
		name: "Blue",
		players: ["Bob", "Ben"],
		games: [
			{
				score: 6,
				city: "CA",
			},
			{
				score: 3,
				city: "LA",
			},
		],
	},
	{
		name: "Yellow",
		players: ["Yesmin", "Yuliana", "Yosemite"],
		games: [
			{
				score: 2,
				city: "NY",
			},
			{
				score: 4,
				city: "LA",
			},
			{
				score: 7,
				city: "AK",
			},
		],
	},
];

export function TeamsList() {
	const [teams, setTeams] = useState(TEAMS);
  
	// Order teams by score (highest to lowest)
	function orderTeamByScoreHighestToLowest() {
	  const sortedTeams = [...teams].sort((a, b) =>
		b.games.reduce((acc, game) => acc + game.score, 0) -
		a.games.reduce((acc, game) => acc + game.score, 0)
	  );
	  setTeams(sortedTeams);
	}
  
	// Order teams by score (lowest to highest)
	function orderTeamByScoreLowestToHighest() {
	  const sortedTeams = [...teams].sort((a, b) =>
		a.games.reduce((acc, game) => acc + game.score, 0) -
		b.games.reduce((acc, game) => acc + game.score, 0)
	  );
	  setTeams(sortedTeams);
	}
  
	// Filtering teams with at least 3 players
	function teamsWithMoreThanThreePlayers() {
	  const filteredTeams = TEAMS.filter((team) => team.players.length > 3);
	  setTeams(filteredTeams);
	}
  
	return (
	  <div>
		<div>
			<h4>Filters</h4>
			<button onClick={() => setTeams(TEAMS)}>Initial list</button>
			<button onClick={teamsWithMoreThanThreePlayers}>Teams with at least 3 players</button>
		</div>
		<div>
			<h4>Sort</h4>
			<button onClick={orderTeamByScoreHighestToLowest}>Highest to Lowest Score</button>
			<button onClick={orderTeamByScoreLowestToHighest}>Lowest to Highest Score</button>
		</div>
		
		
		
		<div className="list-container">
			<ul>
				{teams.map((team, index) => (
					<li key={index}>
					{team.name} / {team.players.length} players /{" "}
					{team.games.reduce((acc, game) => acc + game.score, 0)} total score
					</li>
				))}
			</ul>
		</div>
		
	  </div>
	);
  }
