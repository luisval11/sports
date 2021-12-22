import React from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";

export const RowTable = ({match}) => {

	return (
		<ListGroup>
			<ListGroupItem>{match.homeTeam} {match.homeTeamScore} - {match.awayTeam} {match.awayTeamScore}</ListGroupItem>
		</ListGroup>
	);
};
