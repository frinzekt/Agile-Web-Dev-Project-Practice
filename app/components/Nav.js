import Replacer from '../HTMLreplacer';

const classList = 'navbar navbar-light bg-light';
const nav = `<span class='navbar-brand mb-0 h1'>Navbar</span>`;
Replacer(nav, classList, '#nav');
