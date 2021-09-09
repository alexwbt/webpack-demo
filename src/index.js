import "./index.scss"
import { render } from 'react-dom';
import styled from 'styled-components';
import WebpackLogo from './imgs/webpack-logo.png';

const Title = styled.span`
    text-align: center;
    font-weight: bold;
    font-size: 40px;
    color: white;
`;

const Container = styled.div`
    background-color: skyblue;
    justify-content: center;
    flex-direction: column;
    display: flex;
    height: 100vh;
    width: 100vw;
`;

const Image = styled.img`
    margin: 0 auto;
    width: 200px;
`;

const App = () => <Container>
    <Image src={WebpackLogo} />
    <Title>Hello world</Title>
</Container>;

render(<App />, document.getElementById('root'));
