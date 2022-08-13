import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from "@material-ui/icons";
import styled from "styled-components"
import { mobile } from "../responsive";


const Container = styled.div`
display: flex;
${mobile({flexDirection: "column"})}
`;

const Left = styled.div`
flex: 1;
display: flex;
flex-direction: column;
padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
margin: 20px 0px;
`;

const SocialContainer = styled.div`
display: flex;
`;

const SocialIcon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
color: white;
background-color: #${props=>props.color};
display: flex;
align-items: center;
justify-content: center;
margin-right: 20px;
`;

const Center = styled.div`
flex: 1;
padding: 20px;
${mobile({display: "none"})}
`;

const Title = styled.h3`
margin-bottom:30px;
`;

const List = styled.ul`
margin: 0;
padding: 0;
list-style:none;
display: flex;
flex-wrap: wrap;
`;

const ListItem = styled.li`
width:50%;
margin-bottom:10px;
`;

const Right = styled.div`
flex: 1;
padding: 20px;
${mobile({backgroundColor: "#fff8f8"})}

`;

const ContactItem = styled.div`
margin-bottom: 20px;
display:flex;
align-items:center;
${mobile({marginBottom: "20px"})}

`;

const Payment =  styled.img`
width:50%;
`;

const Footer = () => {
  return (
   <Container>
    <Left>
        <Logo> OkSHop</Logo>
        <Desc>
            Ok shop blavak asjkka casjcaks ajhscb ahsc chh hcash cjashch
            sjhcks asjcjh jsdhjh hd dsds sdsdf fsdsd dsda asfasf asdf fsdf 
            asdasd asd.
        </Desc>
        <SocialContainer>
            <SocialIcon color="3B5999">
                <Facebook />
            </SocialIcon>

            <SocialIcon color="E4405F">
                <Instagram />
            </SocialIcon>

            <SocialIcon color="55ACEE">
                <Twitter />
            </SocialIcon>

            <SocialIcon color="E60023">
                <Pinterest />
            </SocialIcon>

        </SocialContainer>
    </Left>
    <Center>
        <Title>Useful Links</Title>
        <List>
        <ListItem>Home</ListItem>
        <ListItem>Cart</ListItem>
        <ListItem>Sepatu Pria</ListItem>
        <ListItem>Sepatu Wanita</ListItem>
        <ListItem>Aksesoris</ListItem>
        <ListItem>My Account</ListItem>
        <ListItem>Order Tracking</ListItem>
        <ListItem>WishList</ListItem>
        <ListItem>Wishlist</ListItem>
        <ListItem>Terms</ListItem>
        </List>
    </Center>

        <Right>
            <Title>Contact</Title>
            <ContactItem><Room style={{marginRight:"10px"}} />
                JL.Toa Daeng 3. Makassar, South Sulawesi
            </ContactItem>

            <ContactItem><Phone style={{marginRight:"10px"}} />
                +62 81243 197 675
            </ContactItem>

            <ContactItem><MailOutline style={{marginRight:"10px"}} />
                syuaibyusuf223@gmail.com
            </ContactItem>
            <Payment src="https://www.cardfellow.com/blog/wp-content/uploads/2020/04/universal-buy-button.png" />
        </Right>
   </Container>
  );
};

export default Footer
