/* eslint-disable @typescript-eslint/no-redeclare */

enum PrimaryBlue {
  EH100 = `#5669FF`,
  EH200 = `#7887FF`,
  EH300 = `#9AA5FF`,
  EH400 = `#BBC3FF`,
  EH500 = `#DDE1FF`,
  EH600 = `#EEF0FF`,
}

enum SecondaryCyan {
  EH100 = `#00F8FF`,
  EH200 = `#33F9FF`,
  EH300 = `#66FBFF`,
  EH400 = `#99FCFF`,
  EH500 = `#CCFEFF`,
  EH600 = `#E6FEFF`,
}
enum DarkShade {
  EH100 = `#120D26`,
  EH200 = `#29253C`,
  EH300 = `#888693`,
  EH400 = `#B8B6BE`,
  EH500 = `#D0CFD4`,
  EH600 = `#E7E7E9`,
}

enum Accent {
  EH100 = `#F0635A`,
  EH200 = `#F59762`,
  EH300 = `#29D697`,
  EH400 = `#46CDFB`,
  EH500 = `#8C3EF1`,
  EH600 = `#FDC400`,
}

enum Background {
  EH100 = `#2D2D3A`,
  EH200 = `#393948`,
  EH300 = `#E5E5E5`,
}

const EventHubThemePalette = {
  PrimaryBlue,
  SecondaryCyan,
  DarkShade,
  Accent,
  Background
};

export type Color = PrimaryBlue | SecondaryCyan | DarkShade | Accent | Background;

export const Color = {
  ...EventHubThemePalette,
};
