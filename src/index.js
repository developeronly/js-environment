import numeral from 'numeral'; //Handy library for formatting numbers.
import './index.css';

const courseValue = numeral(1000).format('$0,0.00');
console.log(`This is how much might cost ${courseValue}`); // eslint-disable-line no-console
