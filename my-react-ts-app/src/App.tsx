// import styled from "styled-components";
import RoutesPath from "./components/Router";
import GlobalStyle from "./assets/style/GlobalStyle";

function App() {
	return (
		<>
			<GlobalStyle />
			<RoutesPath />
		</>
	);
}

export default App;

// const MainStyle = styled.div`
// 	body {
// 		margin: 0;
// 		display: flex;
// 		flex-direction: column;
// 	}

// 	ul,
// 	li,
// 	h1,
// 	h2,
// 	hr,
// 	p {
// 		margin: 0;
// 		padding: 0;
// 	}

// 	a {
// 		text-decoration: none;
// 		color: black;
// 		cursor: pointer;
// 	}

// 	h1,
// 	h2,
// 	li {
// 		font-family: "roboto", sans-serif;
// 	}

// 	p {
// 		font-family: "Open Sans", sans-serif;
// 	}
// `;
