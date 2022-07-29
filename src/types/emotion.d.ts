import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    color: {
      primary: string;
      secondary: string;
      background: string;
      yellow: string;
      gray800: string;
      gray700: string;
      gray600: string;
      gray500: string;
      gray400: string;
      gray300: string;
      gray200: string;
      gray100: string;
      green200: string;
      green100: string;
    };
    fontSize: {
      h1: string;
      b1: string;
      b2: string;
      b3: string;
      c1: string;
      c2: string;
    };
    borderRadius: string;
  }
}