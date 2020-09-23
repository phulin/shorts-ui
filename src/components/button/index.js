import { h } from 'preact';
import cx from 'classnames';
import style from './style.css';

const handlePocket = (event) => {
	event.preventDefault();
	const target = event.currentTarget;
	const form = target.closest('form');
	const pocket = target.getAttribute('data-pocket')
	form.elements.pocket.value = pocket;
	form.submit();
}

const Button = ({ pocket, image, title, subtitle }) => {
	let pockets = [];
	if (typeof ashProperties !== 'undefined') {
		pockets = ashProperties.cargoPocketsEmptied.split(',').map((p) => parseInt(p, 10));
	}
	const pocketEmptied = ashProperties._cargoPocketEmptied == 'true';
	return (
		<button
			onClick={handlePocket}
			data-pocket={pocket}
			title={`Pocket ${pocket}`}
			disabled={pockets.includes(pocket)}
			class={cx(style.btn, !pocketEmptied && style['btn-hoverable'])}
		>
			<img src={image} />
			<div>
				{title}
				<br />
				{subtitle && subtitle.length > 0 ? <small>{subtitle}</small> : false}
			</div>
		</button>
	);
};

export default Button;
