import {
    css,
    CSSObject,
    FlattenSimpleInterpolation,
    SimpleInterpolation,
} from 'styled-components';

export const sp = (
    first: CSSObject | TemplateStringsArray,
    ...interpolations: SimpleInterpolation[]
): FlattenSimpleInterpolation => css`
    @media (max-width: 560px) {
        ${css(first, ...interpolations)}
    }
`;

export const tab = (
    first: CSSObject | TemplateStringsArray,
    ...interpolations: SimpleInterpolation[]
): FlattenSimpleInterpolation => css`
    @media (min-width: 561px) and (max-width: 1024px) {
        ${css(first, ...interpolations)}
    }
`;

export const pc = (
    first: CSSObject | TemplateStringsArray,
    ...interpolations: SimpleInterpolation[]
): FlattenSimpleInterpolation => css`
    @media (min-width: 1025px) {
        ${css(first, ...interpolations)}
    }
`;

// usage
// const SampleDiv = styled.div`
//   ${sp`
//     display: flex;
//   `}
//   ${tab`
//     display: block;
//   `}
//   ${pc`
//     display: none;
//   `}
// `

export const PC =  '1025px'
export const SP = '560px'
export const TAB = {
  min: '561px',
  max: '1024px'
}

// 使いにくかったら以下に変更(タブ補完が効く)
// const SampleDiv = styled.div`
//     @media (max-width: SP) {
//       display: flex;
//     }
//     @media (min-width: TAB.min) and (max-width: TAB.max) {
//       display: block;
//     }
//     @media (min-width: PC) {
//       display: none;
//     }
// `