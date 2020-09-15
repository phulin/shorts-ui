import { h } from 'preact';
import style from './style.css';

const Row = (props) => (
	<div class={style.row} {...props} />
);

export default Row;
