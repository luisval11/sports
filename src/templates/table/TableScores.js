import React, { useState } from "react";
import { Col, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import { RowNoScores } from "../../atoms/row/RowNoScores";
import { RowTable } from "../../atoms/row/RowTable";
import { AddScore } from "../forms/AddScore";

export const TableScores = () => {
	const [matches, setMatches] = useState([]);

	const addScore = (score) => {
		if (matches.length === 0) {
			setMatches((matches) => [...matches, score]);
		} else {
			let index = matches.length;
			const firstLowerEqualScoreIndex = matches.findIndex(
				(match) =>
					parseInt(match.homeTeamScore) + parseInt(match.awayTeamScore) <=
					parseInt(score.homeTeamScore) + parseInt(score.awayTeamScore)
			);
			console.log("firstLowerEqualScoreIndex", firstLowerEqualScoreIndex);
			if (firstLowerEqualScoreIndex !== -1) {
				index = firstLowerEqualScoreIndex;
			}
			console.log("index", index);
			setMatches((matches) => [
				...matches.slice(0, index),
				score,
				...matches.slice(index),
			]);
		}
	};

	return (
		<Row className="mr-0">
			<Col xs={12} md={4}>
				<AddScore handleAddScore={addScore} />
			</Col>
			<Col xs={12} md={8}>
				<ListGroup className="m-3 text-center">
					<ListGroupItem variant="info">List of scores</ListGroupItem>
					{matches.length > 0 ? (
						matches.map((match) => {
							return <RowTable key={match.guid} match={match} />;
						})
					) : (
						<RowNoScores />
					)}
				</ListGroup>
			</Col>
		</Row>
	);
};
