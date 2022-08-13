import styled from 'styled-components';
import { popularProducs } from '../data';
import Product from './Product';
import React from 'react';

const Container = styled.div`
padding: 20px;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
`;

const Products = () => {
  return (
<Container>
    {popularProducs.map((item) => (
        <Product item={item} key={item.id} />
    ))}

</Container>
  );
};

export default Products