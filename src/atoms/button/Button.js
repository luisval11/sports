import React from "react";
import { Button } from "react-bootstrap";

const ButtonI = (props) => {
	return (
		<Button className="mt-3" variant={props.variant} onClick={props.handleOnClick}>
			{props.label}
		</Button>
	);
};

export default ButtonI;
