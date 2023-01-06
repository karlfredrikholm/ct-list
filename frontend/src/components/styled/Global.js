import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:root {
  --main-font: 'Jost', sans-serif;
  --sub-font: 'Playfair Display', serif;
  --main-color: #57232C;
  --text-color: #D9CAB3;
}

body {
  color: var(--text-color);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

a {
  text-decoration: none;
}

.active {
  border-bottom: .3rem solid var(--main-color);
  font-weight: 900 !important;
  letter-spacing: 0.2rem !important;
}

.inner-wrapper {
  background: var(--main-color);
  display: flex;
  flex-direction: column;
  width: 80%;
  max-width: 1000px;
  min-height: 100vh;

  @media (max-width: 1200px) {
    width: 100vw;
  }
}

.outer-wrapper {
  background: RosyBrown;
  display: flex;
  justify-content: center;
  min-width: 100vw;
  min-height: 100vh;
  overflow-wrap: break-word;
}

`
export default GlobalStyles;
