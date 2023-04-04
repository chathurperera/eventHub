import { TextVariant } from 'src/constants';
import React from 'react';

const FontWeight = {
  Light: 300,
  Regular: 400,
  Bold: 600,
};

export const AppTextStyles: Record<TextVariant,React.CSSProperties> = {
    //Headings
    [TextVariant.Heading1]: {
        fontWeight:FontWeight.Bold,
        fontSize:'50px',
        lineHeight:'72px'
    },
    [TextVariant.Heading2]: {
        fontWeight:FontWeight.Light,
        fontSize:'35px',
        lineHeight:'auto'
    },
    [TextVariant.Heading3]: {
        fontWeight:FontWeight.Light,
        fontSize:'30px',
        lineHeight:'auto'
    },
    [TextVariant.Heading4]: {
        fontWeight:FontWeight.Regular,
        fontSize:'24px',
        lineHeight:'auto'
    },
    [TextVariant.Heading5]: {
        fontWeight:FontWeight.Regular,
        fontSize:'22px',
        lineHeight:'34px'
    },
}
