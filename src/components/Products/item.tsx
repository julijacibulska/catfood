import React from 'react';
import { ProductImage, ProductCard, ProductTitle, ProductPrice, RetailerName, RetailerContainer } from './styled'
import { ProductData } from '../../types/struct';

export function Product({ productData }: { productData: ProductData }) {
    return (
        <ProductCard onClick={() => window.open(productData.url, "_blank")}>
            <ProductImage imageBlob={productData.image} />
            <ProductTitle target="_blank" rel="noopener noreferrer" title={productData.title} href={productData.url}>
                {productData.title}
            </ProductTitle>
            <RetailerContainer>by <RetailerName>{productData.retailer}</RetailerName></RetailerContainer>
            <ProductPrice>{productData.price}</ProductPrice>
        </ProductCard>
    );
}
