import { h } from 'preact';
import Button from '../button';
import Col from '../col';
import Row from '../row';
import './style.css';

const ButtonRow = ({ title, buttons }) => (
	<div>
		<h3>{title}</h3>
		<Row>
			{buttons.map(([title, subtitle, pocket, image]) => 
				<Col key={pocket}><Button title={title} subtitle={subtitle} pocket={pocket} image={image} /></Col>
			)}
		</Row>
	</div>
);

export default ButtonRow;
