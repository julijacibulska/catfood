import { styled } from "../../config/theme";

export const StyledHeader = styled.header`
    height: 60px;
    background: ${props => props.theme.colors.white};
    padding-bottom: 10px;
    display: flex;
    align-items: center;
`;

export const Title = styled.span`
    color: ${props => props.theme.colors.black};
    font-weight: 600;
    font-size: 1.3em;
    border-left: 2px solid ${props => props.theme.colors.orange};
    padding: 0 15px;
    margin: 15px;
`;

export const Logo = styled.img`
    width: 20px;
    height: 20px;
    margin-left: 20px;
    margin-top: 2px;
`;
