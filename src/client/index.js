import { h, render } from 'preact'
import 'whatwg-fetch'
import Main from './views/Main.jsx'
/** @jsx h */

render(<Main />, document.getElementById('app'))
