import styled from "styled-components"


const Container  = styled.div`
width: 100%;
height: 100vh;
background: linear-gradient(
    rgba(255,255,255, 0.5),
    rgba(255,255,255, 0.5)
 
), 
 url("https://koran-jakarta.com/images/article/7-rekomendasi-sneakers-casual-pria-berkualitas-220306070615.jpg") center;

 background-size: cover;
 display: flex;
 align-items: center;
 justify-content: center;
`;

const  Wrapper = styled.div`
width: 40%;
padding: 20px;
background-color:white;
`;

const  Title = styled.h1`
font-size: 24px;
font-weight: 300;
 `;

const  Form = styled.form`
display : flex;
flex-wrap : wrap;
`;

const  Input = styled.input`
flex : 1;
min-width:40%;
margin: 20px 10px 0px 0px;
padding:10px;
`;

const  Agreement = styled.span`
font-size: 12px;
margin: 20px;
`;

const  Button = styled.button`
width: 40%;
border: none;
padding: 15px 20px;
background-color: teal;
color: white;
cursor: pointer;
`;


const Register = () => {
  return (
        <Container>
                <Wrapper>
                    <Title>Create An Account</Title>
                    <Form>
                        <Input placeholder ="name" />
                        <Input placeholder ="last name" />
                        <Input placeholder="user name" />
                        <Input placeholder="email" />
                        <Input placeholder="password" />
                        <Input placeholder="confirm password" />
                        <Agreement>
                        Kami bekerja keras untuk melindungi Google dan pengguna kami
                         dari akses tanpa izin atau pengubahan, pengungkapan, maupun 
                         penghancuran tanpa izin atas informasi yang kami pegang.<b>PRIVACY POLICY </b> 
                        </Agreement>
                        <Button> Buat Akun </Button>
                    </Form>
                </Wrapper>
            
        </Container>
  )
}

export default Register