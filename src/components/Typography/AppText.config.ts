import { TextVariant } from 'src/constants';
import React from 'react';

const FontWeight = {
  Light: 300,
  Regular: 400,
  Bold: 600,
};

export const AppTextStyles: Record<TextVariant, React.CSSProperties> = {
  //Headings
  [TextVariant.Heading1]: {
    fontWeight: FontWeight.Bold,
    fontSize: '50px',
    lineHeight: '72px',
  },
  [TextVariant.Heading2]: {
    fontWeight: FontWeight.Light,
    fontSize: '35px',
    lineHeight: 'auto',
  },
  [TextVariant.Heading3]: {
    fontWeight: FontWeight.Light,
    fontSize: '30px',
    lineHeight: 'auto',
  },
  [TextVariant.Heading4]: {
    fontWeight: FontWeight.Regular,
    fontSize: '24px',
    lineHeight: 'auto',
  },
  [TextVariant.Heading5]: {
    fontWeight: FontWeight.Regular,
    fontSize: '22px',
    lineHeight: '34px',
  },

  //Titles
  [TextVariant.Title1]: {
    fontWeight: FontWeight.Regular,
    fontSize: '18px',
    lineHeight: 'auto',
  },
  [TextVariant.Title2]: {
    fontWeight: FontWeight.Regular,
    fontSize: '16px',
    lineHeight: 'auto',
  },
  [TextVariant.Title3]: {
    fontWeight: FontWeight.Regular,
    fontSize: '15px',
    lineHeight: 'auto',
  },

  //Subtitle
  [TextVariant.Subtitle1]: {
    fontWeight: FontWeight.Light,
    fontSize: '13px',
    lineHeight: 'auto',
  },
  [TextVariant.Subtitle2]: {
    fontWeight: FontWeight.Light,
    fontSize: '12px',
    lineHeight: 'auto',
  },

  //Body
  [TextVariant.Body1Regular]: {
    fontWeight: FontWeight.Light,
    fontSize: '16px',
    lineHeight: '25px',
  },
  [TextVariant.Body2Regular]: {
    fontWeight: FontWeight.Regular,
    fontSize: '15px',
    lineHeight: 'auto',
  },
  [TextVariant.Body3Regular]: {
    fontWeight: FontWeight.Regular,
    fontSize: '14px',
    lineHeight: '23px',
  },

  //Button
  [TextVariant.ButtonText]: {
    fontWeight: FontWeight.Regular,
    fontSize: '16px',
    lineHeight: '25px',
  },

  // Labels
  [TextVariant.LabelText]: {
    fontWeight: FontWeight.Regular,
    fontSize: '15px',
    lineHeight: '24px',
  },

  //Link
  [TextVariant.LinkText]: {
    fontWeight: FontWeight.Regular,
    fontSize: '16px',
    lineHeight: '20px',
  },
};

function mapFontWeights(fontWeight: any) {
  switch (fontWeight) {
    case 300:
      return 'font-light';
    case 400:
      return 'font-normal';
    case 600:
      return 'font-semibold';
  }
}


