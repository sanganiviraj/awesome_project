/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
import App from './App2';
import demo from './App3';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => demo);
