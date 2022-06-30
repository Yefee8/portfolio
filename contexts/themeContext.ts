import {createContext} from 'react';
export const theme = require('../public/styles/theme.js')
const ThemeContext = createContext(theme)
export default ThemeContext
