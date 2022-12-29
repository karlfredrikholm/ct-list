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
  background: var(--main-color);
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
  border-bottom: 2px solid var(--main-color);
}

.inner-wrapper {
  display: flex;
  flex-direction: column;
  max-width: 800px;
  width: 80%;
  height: fit-content;

  @media (max-width: 800px) {
    width: 100%;
  }
}

.outer-wrapper {
  display: flex;
  justify-content: center;
  min-width: 100vw;
  min-height: 100vh;
  overflow-wrap: break-word;
  padding: 1px 0;
}

`
export default GlobalStyles;
