export const theme = {
  colors: {
    primaryBackground: '#233000',
    primaryGreen: '#5E6600',
    olive: '#9CAA00',
    lightOlive: '#EBF0E4',
    black: '#000000',
    secondaryBlack: '#233000',
    grey: '#4D4D4D',
    lightGrey: '#B0B0B0',
    white: '#fff',
    red: '#ef5050',
    gradient: 'rgba(35, 48, 0, 1)',
  },

  spacing: (value: number) => `${4 * value}px`,

  fonts: {
    regular: 'RobotoRegular, sans-serif',
    medium: 'RobotoMedium, sans-serif',
    bold: 'RobotoBold, sans-serif',
  },

  fontSizes: {
    xs: '12px',
    s: '14px',
    m: '16px',
    l: '18px',
    sl: '20px',
    ml: '24px',
    xl: '28px',
    xsl: '40px',
    xxl: '48px',
    xxml: '84px',
  },

  fontWeights: {
    regular: 400,
    medium: 500,
    bold: 700,
  },

  lineHeights: {
    normal: 1.2,
    medium: 1.33,
    big: 1.6,
    large: 1.5,
    upperCase: 1.8,
  },

  borders: {
    none: 'none',
    normal: '1px solid',
    medium: '2px dashed ',
    mSolid: '2px solid',
    large: '3px solid',
  },

  radii: {
    none: '0',
    small: '8px',
    medium: '30px',
    large: '35px',
    button: '12px',
    card: '24px',
    buttonCard: '35px',
    input: '14px',
    round: '50%',
  },

  transitions: {
    regular: '250ms cubic-bezier(0.4, 0, 0.2, 1)',
    color: 'transform ease-in-out 250ms',
  },
} as const;
