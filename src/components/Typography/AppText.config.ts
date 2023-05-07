import { TextVariant } from '@EH/constants';
import React from 'react';

const FontWeight = {
  Light: 300,
  Normal: 400,
  Medium: 500,
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
    lineHeight: '64px',
  },
  [TextVariant.Heading3]: {
    fontWeight: FontWeight.Light,
    fontSize: '30px',
    lineHeight: '48px',
  },
  [TextVariant.Heading4]: {
    fontWeight: FontWeight.Medium,
    fontSize: '24px',
    lineHeight: '36px',
  },
  [TextVariant.Heading5]: {
    fontWeight: FontWeight.Medium,
    fontSize: '22px',
    lineHeight: '32px',
  },

  [TextVariant.Title1]: {
    fontWeight: FontWeight.Medium,
    fontSize: '18px',
    lineHeight: '40px',
  },
  [TextVariant.Title2]: {
    fontWeight: FontWeight.Medium,
    fontSize: '16px',
    lineHeight: '36px',
  },
  [TextVariant.Title3]: {
    fontWeight: FontWeight.Medium,
    fontSize: '15px',
    lineHeight: '32px',
  },

  [TextVariant.Body1Regular]: {
    fontWeight: FontWeight.Light,
    fontSize: '16px',
    lineHeight: '20px',
  },
  [TextVariant.Body2Regular]: {
    fontWeight: FontWeight.Light,
    fontSize: '15px',
    lineHeight: '28px',
  },
  [TextVariant.Body3Regular]: {
    fontWeight: FontWeight.Light,
    fontSize: '14px',
    lineHeight: '28px',
  },

  [TextVariant.Subtitle1]: {
    fontWeight: FontWeight.Light,
    fontSize: '13px',
    lineHeight: '28px',
  },
  [TextVariant.Subtitle2]: {
    fontWeight: FontWeight.Light,
    fontSize: '12px',
    lineHeight: '28px',
  },

  [TextVariant.Link]: {
    fontSize: '16px',
    fontWeight: FontWeight.Bold,
    lineHeight: '20px',
  },
};

function mapFontWeights(fontWeight: any) {
  switch (fontWeight) {
    case 100:
      return 'font-thin';
    case 200:
      return 'font-extralight';
    case 300:
      return 'font-light';
    case 400:
      return 'font-normal';
    case 500:
      return 'font-medium';
    case 600:
      return 'font-semibold';
    case 700:
      return 'font-bold';
    case 800:
      return 'font-extrabold';
    case 900:
      return 'font-black';
  }
}

export function getAppTextStyles(variant: TextVariant) {
    const variantStyle = AppTextStyles[variant];
  
    let textStyles = `text-${variantStyle.fontSize} ${mapFontWeights(variantStyle.fontWeight)}`;
  
    switch (variant) {
      case TextVariant.Body1Regular:
      case TextVariant.Body2Regular:
      case TextVariant.Body3Regular:
        textStyles += ' font-AirbnbCerealBlack';
        break;
    }
  
    return textStyles;
  }
  
