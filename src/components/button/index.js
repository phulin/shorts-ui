import { h } from 'preact';
import cx from 'classnames';
import PropertiesContext from '../properties-context';
import style from './style.css';
import { useContext } from 'preact/hooks';

const handlePocket = (event) => {
	event.preventDefault();
	const target = event.currentTarget;
	const form = target.closest('form');
	const pocket = target.getAttribute('data-pocket')
	form.elements.pocket.value = pocket;
	form.submit();
}

const Button = ({ pocket, image, title, subtitle }) => {
	const ashProperties = useContext(PropertiesContext);
	const pockets = ashProperties?.cargoPocketsEmptied?.split(',')?.map((s) => parseInt(s.trim(), 10));
	const pocketInt = parseInt(pocket, 10);
	const pocketEmptied = ashProperties?._cargoPocketEmptied == 'true';
	return (
		<button
			onClick={handlePocket}
			data-pocket={pocketInt}
			title={`Pocket ${pocketInt}`}
			disabled={pocketEmptied || pockets?.includes(pocketInt)}
			class={cx(style.btn, pockets?.includes(pocketInt) && style['btn-grey'])}
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
