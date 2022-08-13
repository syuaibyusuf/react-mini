import { Add, Remove } from "@material-ui/icons"
import styled from "styled-components"
import Announcement from "../componens/Announcement"
import Footer from "../componens/Footer"
import Navbar from "../componens/Navbar"
import Newsletter from "../componens/Newsletter"

const Container=styled.div``;
const Wrapper=styled.div`
padding: 50px;
display : flex;
`;
const ImgContainer=styled.div`
flex:1;
`;

const Image=styled.img`
width: 100%;
height: 90vh;
object-fit: cover;
`;

const InfoContainer=styled.div`
flex:1;
padding: 0px 50px;
`;

const Title=styled.h1`
font-weight:200;
`;

const Desc=styled.p`
margin: 10px 0px;
`;

const Price=styled.span`
font-weight: 200;
font-size: 20px;
`;

const FilterContainer = styled.div`
width:50%;
margin : 30px 0px;
display:flex;
justify-content: space-between;
`;

const Filter = styled.div`
display: flex;
align-items: center;
`;
const FilterTitle = styled.span`
font-size: 20px;
font-weight: 200;
`;
const FilterColor = styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${props=>props.color};
margin: 0px 5px;
cursor: pointer;
`;
const FilterSize = styled.select`
margin-left: 10px;
padding: 5px;
`;

const FilterSizeOption = styled.option``;
const AddContainer  = styled.div`
width: 50%;
display: flex;
align-item: center;
justify-content: space-between;
`;
const AmountContainer  = styled.div`
display: flex;
align-items: center;
font-weight:700;
`;

const Amount  = styled.span`
width: 30px;
height: 30px;
border-radius: 10px;
border: 1px solid teal;
display: flex;
align-items: center;
justify-content: center;
margin: 0px 5px;

`;

const Button  = styled.button`
padding :  15px;
border : 2px solid teal;
backgroudn-color: white;
cursor: pointer;
font-weight: 500;

&:hover{
    background-color: #f8f4f4;
}
`;

const Product = () => {
  return (
    <Container>
                <Announcement />
                <Navbar />
                <Wrapper>
                    <ImgContainer>
                        <Image src="https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//89/MTA-12053760/vans_vans_old_skool_sepatu_sneaker_pria_black-white_-vn000d3hy28-_full05_tnemdtr.jpg" />
                    </ImgContainer>
                    <InfoContainer>
                        <Title> Old SKool</Title>
                        <Desc>
                            asjda asjhda asjhdva ahsgas ashgca cahsgc cahsgcac ashcvs chasc cc scsadha shd dasd 
                            dasd dasd ash asjhf asjfh asjhfaj ahsjf ajshf shfg sjdfb asjhfjh asjhfjh
                            jfksjd sdjfs sdjhfg sdjhfg jhsa as asdkc vsdbdv vshdvb sdjvhs jsdhv sdjvh sdhv sdjhfg s
                            dsadda dasd ds ads d asda sfaf af affasf.
                        </Desc>
                        <Price>Rp. 730.000</Price>
                        <FilterContainer>
                            <Filter>
                                <FilterTitle>Color</FilterTitle>
                                <FilterColor color="black" />
                                <FilterColor color="darkblue" />
                                <FilterColor color="gray" />
                            </Filter>
                            <Filter>
                                <FilterTitle>Size</FilterTitle>
                                <FilterSize>
                                    <FilterSizeOption>37</FilterSizeOption>
                                    <FilterSizeOption>38</FilterSizeOption>
                                    <FilterSizeOption>39</FilterSizeOption>
                                    <FilterSizeOption>40</FilterSizeOption>
                                    <FilterSizeOption>41</FilterSizeOption>
                                    <FilterSizeOption>42</FilterSizeOption>
                                    <FilterSizeOption>43</FilterSizeOption>
                                    <FilterSizeOption>44</FilterSizeOption>
                                </FilterSize>
                            </Filter>

                        </FilterContainer>
                        <AddContainer>
                            <AmountContainer>
                                <Remove />
                                <Amount>1</Amount>
                                <Add />
                            </AmountContainer>
                            <Button>Add to cart</Button>
                        </AddContainer>
                    </InfoContainer>
                </Wrapper>
                <Newsletter />
                <Footer /> 
    </Container>
      
  )
}

export default Product
