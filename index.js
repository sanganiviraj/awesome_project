/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';

import demo from './src/App3';
import mainApp from './src/screen/mainApp';
import {name as appName} from './app.json';
import home2 from './src/screen/home2';

AppRegistry.registerComponent(appName, () => mainApp);
