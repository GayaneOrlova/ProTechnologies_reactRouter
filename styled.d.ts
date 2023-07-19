import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      border: string,
      title: string,
    },

    borderStyles: {
      line: string,
    },

    font: {
      size: string,
      family: string,
    },
  }
}