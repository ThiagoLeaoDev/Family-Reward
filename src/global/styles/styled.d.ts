import 'styled-components'
import { lightTheme } from './theme'

//typeof copy characteristics from Theme
declare module 'styled-components' {
  type ThemeType = typeof lightTheme

  export interface DefaultTheme extends ThemeType { }
}
