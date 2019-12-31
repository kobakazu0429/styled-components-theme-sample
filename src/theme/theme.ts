export type ThemeName = "sample";

interface ColorStops {
  position: number;
  color: string;
}

export interface Gradient {
  colorStops: ColorStops[];
  degree: number;
}

export interface Theme {
  color: {
    brand: {
      darkPrimary: string;
      lightPrimary: string;
      primary: string;
    };
    text: {
      primary: string;
      secondary: string;
    };
    accent: string;
    divider: string;
    gradient: Gradient;
  };
}

// https://www.materialpalette.com/teal/green
const sampleTheme: Theme = {
  color: {
    brand: {
      darkPrimary: "#00796B",
      lightPrimary: "#B2DFDB",
      primary: "#009688"
    },
    text: {
      primary: "#212121",
      secondary: "#757575"
    },
    accent: "#4CAF50",
    divider: "#BDBDBD",
    gradient: {
      colorStops: [
        {
          position: 0,
          color: "#0d93e0"
        },
        {
          position: 1,
          color: "#00c4c4"
        }
      ],
      degree: 76
    }
  }
};

// interface Themes {
//   [index: string]: Theme;
// }

export const themes = {
  sample: sampleTheme
};
