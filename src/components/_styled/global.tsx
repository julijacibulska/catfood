import { createGlobalStyle } from "../../config/theme";

export const GlobalStyle = createGlobalStyle`
    html, body {
        margin: 0;
        padding: 0;
        background: ${props => props.theme.colors.bgGray};
    }

    *, ::before, ::after {
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
        color: ${props => props.theme.colors.gray}
    }

    ::placeholder {
        color: ${props => props.theme.colors.white};
    }
`;
