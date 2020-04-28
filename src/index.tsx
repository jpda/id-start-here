import React from 'react';
import ReactDOM from 'react-dom';
import { FluentCustomizations } from '@uifabric/fluent-theme';
import { Customizer, mergeStyles, registerIcons, initializeIcons } from 'office-ui-fabric-react';
import * as serviceWorker from './serviceWorker';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBox, faTerminal, faHammer } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';

import App from './App';



// Inject some global styles
mergeStyles({
  selectors: {
    ':global(body), :global(html), :global(#root)': {
      margin: 0,
      padding: 0,
      height: '100vh'
    }
  }
});

library.add(faGithub, faYoutube);

registerIcons({
  icons: {
    'github': <FontAwesomeIcon icon={faGithub} />,
    'youtube': <FontAwesomeIcon icon={faYoutube} />,
    'container': <FontAwesomeIcon icon={faBox} />,
    'bash': <FontAwesomeIcon icon={faTerminal} />,
    'powershell': <FontAwesomeIcon icon={faTerminal} />,
    'terraform': <FontAwesomeIcon icon={faHammer} />
  }
});

// const aadTheme: ICustomizations = {
//   settings: {
//     theme: createTheme({
//       palette: {
//         themePrimary: '#4fabee',
//         themeLighterAlt: '#030709',
//         themeLighter: '#0d1b26',
//         themeLight: '#173347',
//         themeTertiary: '#2f678e',
//         themeSecondary: '#4596d1',
//         themeDarkAlt: '#5fb3ef',
//         themeDark: '#76bef1',
//         themeDarker: '#99cff5',
//         neutralLighterAlt: '#0b0b0b',
//         neutralLighter: '#151515',
//         neutralLight: '#252424',
//         neutralQuaternaryAlt: '#2f2e2e',
//         neutralQuaternary: '#373636',
//         neutralTertiaryAlt: '#595858',
//         neutralTertiary: '#c8c8c8',
//         neutralSecondary: '#d0d0d0',
//         neutralPrimaryAlt: '#dadada',
//         neutralPrimary: '#ffffff',
//         neutralDark: '#f4f4f4',
//         black: '#f8f8f8',
//         white: '#000000',
//       }
//     })
//   },
//   scopedSettings: {}
// }
initializeIcons();

ReactDOM.render(
  <Customizer {...FluentCustomizations}>
    <App />
  </Customizer>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

