import { Form } from "react-bootstrap";
import LabelI from "../atoms/label/Label";

const Input = (props) => {
	return (
		<Form.Group
			controlId={props.index}
			key={props.index}
			className={props.className}
		>
			{props.label && <LabelI text={props.label} />}
			<Form.Control
				id={props.id}
				as={props.as}
				type={props.type}
				name={props.name}
				placeholder={props.placeholder}
				min={props.min}
				max={props.max}
				value={props.value}
				autoComplete={props.autoComplete}
				onChange={(event) => {
					props.handleInput && props.handleInput(event);
				}}
			/>
		</Form.Group>
	);
};
export default Input;
