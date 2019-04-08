import React from 'react';
import { StyledHeader, Logo, Title } from './styled';

export default function Header() {
    return (
        <StyledHeader>
            <Logo alt="logo" src="https://image.flaticon.com/icons/png/512/57/57104.png" />
            <Title>Cat Food</Title>
        </StyledHeader>
    );
}
