import { injectGlobal } from 'emotion';

injectGlobal`
  article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section, select, input {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  body {
    line-height: 1;
  }

  ul, ol {
    list-style-type: none;
  }

  q {
    quotes: 'none';
    &:before, &:after {
      content: "''",
    }
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  input, select {
    appearance: none;
  }

  mark {
    background-color: transparent;
    color: inherit;
  }

  button {
    background: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`