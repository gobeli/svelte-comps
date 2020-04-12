import { theme } from './theme';

export const breakpoints = ['mobile', 'tablet', 'desktop'];

let $breakpoint;

theme.subscribe(t => ($breakpoint = t.breakpoint));

const mqMin = (value) => `
  @media (min-width: ${value}px)
`

const mqMax = (value) => `
  @media (max-width: ${value}px)
`

export const resolveResponsive = (value) => {
  const [ mobile, tablet, desktop ] = value;

  return `
    ${mqMin($breakpoint.mobile)} {
      ${mobile}
    }
    ${mqMin($breakpoint.tablet)} {
      ${tablet}
    }
    ${mqMin($breakpoint.desktop)} {
      ${desktop}
    }
  `;
}

/**
 * 
 * @returns {Boolean[]}  
 */
export const resolveResponsiveRange = ({above, below}) => {
  if (!above && !below) {
    return [false, false, false];
  }

  const startIndex = above ? breakpoints.indexOf(above) + 1 : 0;
  const endIndex = below
    ? breakpoints.indexOf(below) - 1
    : breakpoints.length - 1;

  const range = breakpoints.slice(startIndex, endIndex + 1);
  
  const includeMobile = range.indexOf('mobile') >= 0;
  const includeTablet = range.indexOf('tablet') >= 0;
  const includeDesktop = range.indexOf('desktop') >= 0;

  return [includeMobile, includeTablet, includeDesktop];
} 