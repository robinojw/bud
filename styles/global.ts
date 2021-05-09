import styled, {createGlobalStyle} from 'styled-components';

export const backgroundColour = '#020f26';
export const foregroundColour = '#0A152B';
export const colourWhite = '#FFF';
export const colourGray = '#888888';
export const colourRed = '#FF5252';
export const colourGreen = '#8EDD5D';
export const colourBlue = '#2196f3';

export const textBold = "700 18px 'Roboto', sans-serif";
export const textReg = "400 18px 'Roboto', sans-serif";
export const textSm = "400 12px 'Roboto', sans-serif";
export const titleBold = "700 26px 'Roboto', sans-serif";

export const Global = createGlobalStyle`
  html {
    background: linear-gradient(${backgroundColour} 0%, #000 100%);
    overflow-x: hidden;
    min-height: 600px;
    width: 100%
  }

  body {
    color: ${colourWhite};
    font: ${textReg};
    margin: 0;
    width: 100%;
  }
`;

export const Wrapper = styled.div`
  animation: loadApp 1.4s cubic-bezier(.3,.1,.2,1);
  margin: 150px auto 0;
  max-width: 900px;
  padding: 0 30px;


  @keyframes loadApp {
    0% {
      transform: translateY(100px);
      opacity: 0;
    }
    100%{
      transform: translateY(0);
      opacity: 1;
    }
  }
`;
