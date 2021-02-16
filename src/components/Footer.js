import React from 'react';
import styled from 'styled-components';
 
const FooterStyle = styled.div`
  border-top: 5px solid gray;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px;
  padding: 10px;
  background: white;
`;

function Footer() {
  return (
    <FooterStyle>
        <h2> The motherfuckin' best anime list </h2>
        <br/>
        <h3>Sponsored by Basscoin® Moistpandacoin® Bmacscoin® 2021</h3>
    </FooterStyle>
  );
}

export default Footer;
