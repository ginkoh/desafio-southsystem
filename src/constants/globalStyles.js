import { createGlobalStyle } from 'styled-components';

export const CenteredFlexBase = `
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const CenteredFlexRow = `
    ${CenteredFlexBase}
    flex-direction: row;
`;

export const CenteredFlexColumn = `
    ${CenteredFlexBase}
    flex-direction: column;
`;

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }
    html, body, #root {
        height: 100vh;
        box-sizing: border-box;
    }
    ul {
        list-style-type: none;
    }
    body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
`;