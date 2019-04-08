import { styled } from '../../config/theme';

export const ProductList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 1360px;
    margin: 70px auto;
`;

export const ProductImage = styled.div< { imageBlob: string } >`
    width: 100%;
    height: 200px;
    max-width: 60%;
    margin: 0 auto;
    flex-grow: 1;
    background: url(${props => props.imageBlob}) center no-repeat;
    background-size: contain;
`;

export const ProductTitle = styled.a`
    margin-top: 2rem;
    text-decoration: none;
    display: block;
    text-overflow: ellipsis;
    word-wrap: break-word;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2em;
    line-height: 1em;
    max-height: 2em;
    font-weight: 600;
    font-size: 0.9em;
    text-align: center;
`;

export const RetailerName = styled.span`
    color: black;
`;

export const RetailerContainer = styled.span`
    display: block;
    font-size: 0.8em;
    font-weight: 600;
    margin-top: 1rem;
    margin-bottom: 2rem;
    text-align: center;
`;

export const ProductCard = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    margin: 1px;
    background: white;
    padding: 40px 25px;

    &:hover {
        cursor: pointer;

        ${ProductTitle} {
            color: ${props => props.theme.colors.black};
        }
    }
`;

export const ProductPrice = styled.div`
    text-align: center;
    font-weight: 600;
    color: ${props => props.theme.colors.black}
`;

export const SearchBar = styled.div`
    background: ${props => props.theme.colors.orange};
    text-align: center;
    padding: 20px;
`;

export const SearchInputWrapper = styled.span`
    width: 80%;
    max-width: 600px;
    position: relative;
    display: inline-block;

    ::before {
        content: '';
        display: block;
        width: 10px;
        height: 10px;
        position: absolute;
        top: 10px;
        left: 6px;
        border: 1px solid white;
        border-radius: 100%;
    }

    ::after {
        content: '';
        display: block;
        width: 1px;
        height: 6px;
        position: absolute;
        top: 18px;
        left: 16px;
        transform: rotate(-45deg);
        background: white;
    }
`;

export const SearchInput = styled.input`
    background: transparent;
    width: 100%;
    border: 0;
    padding: 5px 25px;
    border-bottom: 1px solid ${props => props.theme.colors.orangeLite};
    outline: 0;
    font-size: 1.3em;
    color: ${props => props.theme.colors.white};

    :focus {
        border-bottom-color: ${props => props.theme.colors.white};
    }
`;

export const ClearInputButton = styled.button<{ show: boolean }>`
    position: absolute;
    right: -4px;
    top: 0;
    font-size: 2em;
    z-index: 1;
    color: ${props => props.theme.colors.white};
    display: ${props => props.show ? 'block' : 'none'};
    border: 0;
    background: transparent;
    outline: 0;
`;
