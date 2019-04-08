import React, { Component } from 'react';
import { Product } from './item';
import { ProductList, SearchBar, SearchInputWrapper, SearchInput, ClearInputButton } from './styled';
import { ProductData } from '../../types/struct';

interface Props {
    items: ProductData[];
}

interface State {
    searchString: string;
}

export class Products extends Component<Props, State> {
    private searchInput: React.RefObject<HTMLInputElement>;

    constructor(props: Props) {
        super(props);

        this.searchInput = React.createRef<HTMLInputElement>();
        this.state = { searchString: '' };
    }

    onInput(e: React.FormEvent<HTMLInputElement>) {
        this.setState({
            searchString: e.currentTarget.value
        });
    }

    clearInput() {
        if (this.searchInput.current) {
            this.searchInput.current.value = '';
            this.searchInput.current.focus();
        }
        this.setState({ searchString: this.searchInput.current ? this.searchInput.current.value : '' });
    }

    getItems(): ProductData[] {
        if (this.state.searchString === '') {
            return this.props.items;
        }

        return this.props.items.filter(
            (item) => {
                const needles = this.state.searchString ? this.state.searchString.toLowerCase().split(' ') : [''];
                const haystack = item.title.toLowerCase();

                return needles.every(needle => haystack.includes(needle));
            }
        );
    }

    render() {
        return (
            <>
                <SearchBar>
                    <SearchInputWrapper>
                        <SearchInput ref={this.searchInput} placeholder="Enter keywords" onChange={this.onInput.bind(this)} />
                        <ClearInputButton show={!!(this.searchInput.current && this.searchInput.current.value.length)} onClick={this.clearInput.bind(this)}>&times;</ClearInputButton>
                    </SearchInputWrapper>
                </SearchBar>
                <ProductList>
                    {this.getItems().map((product: ProductData) =>
                        <Product key={product.url} productData={product} />
                    ) || <h2>No results for "{this.searchInput.current && this.searchInput.current.value}"</h2>}
                </ProductList>
            </>
        );
    };
}
