import { createGlobalStyle } from "styled-components";

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
    hr,
    p {
        margin: 0;
        padding: 0;
    }

    a {
        text-decoration: none;
        cursor: pointer;
    }

    h1,
    h2,
    li {
        font-family: "roboto", sans-serif;
    }

    p {
        font-family: "Open Sans", sans-serif;
    }
`;

export default GlobalStyle;
