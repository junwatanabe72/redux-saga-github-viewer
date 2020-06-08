import { css } from 'styled-components';

export const media = {
  handheld1279: (...args) => css`
    @media (min-width: 1279px) {
      //ここにデバイス幅を指定
      ${css(...args)};
    }
  `,
  handheld575: (...args) => css`
    @media (min-width: 575px) {
      //375px未満
      ${css(...args)};
    }
  `,
};
//575:max-width
//header issue pull dismiss
//issuefunction issue bar button flex =>  column
