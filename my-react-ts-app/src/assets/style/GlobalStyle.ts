import { createGlobalStyle } from "styled-components";
import { theme } from "./Theme";

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
	    display: flex;
	    flex-direction: column;
        margin-top: 6rem;
    }
    ul,
    li,
    h1,
    h2,
    h3,
    p,
    div, button {
        margin: 0;
        padding: 0;
    }

    a {
        text-decoration: none;
        cursor: pointer;
    }

    h1,
    h2,
    h3,
    li, button, label {
        font-family: "roboto", sans-serif;
        color: ${theme.colors.purple}
    }

    p {
        font-family: "Open Sans", sans-serif;
    }

    hr {
        color: ${theme.colors.green};
        width: 20%;
        margin: 2rem 0;
    }

    h2 {
        font-size: 2.5rem;
    }
`;

export default GlobalStyle;
