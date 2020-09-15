import { h } from 'preact';
import style from './style.css';

const Col = (props) => (
	<div class={style.col} {...props} />
);

export default Col;
