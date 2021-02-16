import React from 'react';
import styled from 'styled-components';
import Nav from './Nav';
import Footer from './Footer';
import AOT from '../images/AOT.jpg';
import CodeGeass from '../images/CodeGeass.png';
import Cowboy from '../images/cowboybebop.png'

//Styling for home page;

const Landingheader = styled.div`
  border-top: 5px solid gray;
  font-size: 45px;
  color: black;
  padding: 15px;
`;

const Landingheaderarea = styled.div`
  border: 3px solid gray;
  padding: 1em;
  color: black;
  font-size: 25px;
  margin: 1em;
`;

const Landingareacontainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-radius: 5px;
`;
const AOTimage = styled.img`
  height: 50%;
  width: 50%;
`;

const CodeGeassimage = styled.img`

  
`;
const Cowboyimage = styled.img`

`;
const Landingarea = styled.div`
  align-items: center;
  justify-content: center;
  padding: 5%;
`;
const Landingareatwo = styled.div`
  justify-content: center;
  align-items: center;
  padding: 5%;


`;

const Landingareathree = styled.div`
  justify-content: center;
  align-items: center;
  padding: 5%;


`;

const Landingareaheaders = styled.div`
  font-size: 25px;
`;
//Styling ends

function Home(props) {
  return (
    <div>
      <Nav />
      <Landingheader></Landingheader>
      <Landingheaderarea>
        
      </Landingheaderarea>
      <Landingareacontainer>
        <Landingarea>
          <Landingareaheaders>
            <AOTimage src={AOT} />
            <br />
      
          </Landingareaheaders>
          <br />
      
        </Landingarea>
        <Landingareatwo>
          <Landingareaheaders>
            <CodeGeassimage src={CodeGeass} />
            <br />
     
          </Landingareaheaders>
          <br />

        </Landingareatwo>
        <Landingareathree>
          <Landingareaheaders>
            <Cowboyimage src={Cowboy} />
            <br />
         
          </Landingareaheaders>
          <br />
  
          <br />

        </Landingareathree>
      </Landingareacontainer>

      <Footer />
    </div>
  );
}
export default Home;

