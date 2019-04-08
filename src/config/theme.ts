import * as styledComponents from "styled-components";
import { ThemeInterface } from "../types/theme";

const {
    default: styled,
    createGlobalStyle,
    css,
    keyframes,
    ThemeProvider
} = styledComponents as styledComponents.ThemedStyledComponentsModule<
    ThemeInterface
>;

export const theme: ThemeInterface = {
    colors: {
        black: '#1B1D1F',
        orangeLite: '#F7BE6C',
        orange: '#F4A534',
        gray: '#A9A8A8',
        bgGray: '#F6F6F6',
        white: '#FFFFFF'
    }
};

export { styled, css, keyframes, createGlobalStyle, ThemeProvider };
