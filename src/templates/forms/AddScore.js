import React, { useEffect, useState } from "react";
import { Card, Form } from "react-bootstrap";
import ButtonI from "../../atoms/button/Button";
import { ErrorForm } from "../../atoms/error/ErrorForm";
import { maxValueId, minValueId } from "../../helpers/consts";
import { useForm } from "../../hooks/useForm";
import Input from "../../molecules/Input";

export const AddScore = (props) => {
	const [formValues, handleInputChange] = useForm({
		homeTeam: "",
		homeTeamScore: "",
		awayTeam: "",
		awayTeamScore: "",
	});
	const [showError, setShowError] = useState(false);

	useEffect(() => {
		if (showError && !hasFormErrors(formValues)) {
			setShowError((state) => !state);
		}
	}, [formValues, showError])

	const handleSubmit = (e) => {
		e.preventDefault();
		if (hasFormErrors(formValues)) {
			setShowError(true);
		} else {
			setShowError(false);
			props.handleAddScore({
				...formValues,
				homeTeamScore: parseInt(formValues.homeTeamScore),
				awayTeamScore: parseInt(formValues.awayTeamScore),
				guid: getRandomArbitrary(),
				createdDate: Date.now(),
			});
		}
	};

	const getRandomArbitrary = () => {
		return Math.random() * (maxValueId - minValueId) + minValueId;
	};

	const hasFormErrors = (formValues) => {
		return formValues.homeTeam.trim() === '' || formValues.awayTeam.trim() === '' || formValues.homeTeam.trim() === formValues.awayTeam.trim()
			|| isNaN(parseInt(formValues.homeTeamScore)) || parseInt(formValues.homeTeamScore) < 0 
			|| isNaN(parseInt(formValues.awayTeamScore)) || parseInt(formValues.awayTeamScore) < 0
	}

	return (
		<>
			<Card className="m-3">
				<Card.Body>
					<Card.Title>Add score</Card.Title>
					<Form onSubmit={handleSubmit} className="mt-2">
						<Input
							className="mt-3"
							type="text"
							label="Home Team"
							name="homeTeam"
							placeholder="Spain"
							autoComplete="true"
							handleInput={handleInputChange}
						/>
						<Input
							className="mt-3"
							type="number"
							label="Home Team Score"
							name="homeTeamScore"
							min={0}
							max={100}
							placeholder={0}
							autoComplete="true"
							handleInput={handleInputChange}
						/>
						<Input
							className="mt-3"
							type="text"
							label="Away Team"
							name="awayTeam"
							placeholder="Switzerland"
							autoComplete="true"
							handleInput={handleInputChange}
						/>
						<Input
							className="mt-3"
							type="number"
							label="Away Team Score"
							name="awayTeamScore"
							min={0}
							max={100}
							placeholder={0}
							autoComplete="true"
							handleInput={handleInputChange}
						/>
						<div className="form__div">
							{showError && <ErrorForm />}
							<ButtonI
								variant="success"
								handleOnClick={handleSubmit}
								label="Add score"
							/>
						</div>
					</Form>
				</Card.Body>
			</Card>
		</>
	);
};
