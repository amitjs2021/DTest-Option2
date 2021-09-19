/* Import browser dependencies for the HCard component and mount to DOM.
 * Set global Fetch options for cookies!
 */
import ReactDOM from 'react-dom';
import { getUniversalState } from 'react-html-document';

import HCard from './hcard';

const state = getUniversalState();

ReactDOM.render(
  React.createElement(
    HCard,
    state,
  ),
  document.getElementById('app')
);
