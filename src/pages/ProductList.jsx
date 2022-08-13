import styled from "styled-components"
import Announcement from "../componens/Announcement";
import Footer from "../componens/Footer";
import Navbar from "../componens/Navbar";
import Newsletter from "../componens/Newsletter";
import Products from "../componens/Products";

const Container = styled.div``;

const Title = styled.h1`
margin: 20px;
`;

const FilterContainer = styled.div`
display: flex;
justify-content: space-between;
`;
const Filter = styled.div`
margin:20px;
`;

const FilterText = styled.span`
font-size: 20px;
font-weight: 600;
margin-right: 20px;
`;

const Select = styled.select`
padding: 10px;
margin-right: 20px;
`;

const Option = styled.option``;

const ProductList = () => {
  return (
  <Container>
        <Announcement />
        <Navbar />
        <Title>Sepatu</Title>

        <FilterContainer>
            <Filter>
                <FilterText>Filter Product: </FilterText>
                <Select>
                    <Option disabled selected>
                        Color
                    </Option>
                    <Option>White</Option>
                    <Option>Black</Option>
                    <Option>Green</Option>
                    <Option>Blue</Option>
                    <Option>Red</Option>
                    <Option>Yellow</Option>
                </Select>

                <Select>
                    <Option disabled selected>
                        Size
                    </Option>
                    <Option>XS</Option>
                    <Option>S</Option>
                    <Option>M</Option>
                    <Option>L</Option>
                    <Option>XL</Option>
                    <Option>XXL</Option>
                </Select>
            </Filter>

            <Filter>
                <FilterText>Sort Products : </FilterText>
                <Select>
                    <Option selected>
                        Newest
                    </Option>
                    <Option> Price (asc)</Option>
                    <Option> Price (desc)</Option>
                </Select>
            </Filter>
        </FilterContainer>

        <Products/>
        <Newsletter />
        <Footer />
  </Container>
  )
}

export default ProductList
