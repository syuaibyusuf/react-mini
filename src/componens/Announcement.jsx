import styled from "styled-components"
import { mobile } from "../responsive";
const Container = styled.div`
height:30px;
background-color: teal;
color:white;
display:flex;
justify-content:center;
align-items:center;
font-size:14px;
font-weight:500;
${mobile({width: "100%"})}

`;

const Announcement = () => {
  return (
    <Container>
      Diskon 30% di Pembelian pertama
    </Container>
  )
}

export default Announcement
