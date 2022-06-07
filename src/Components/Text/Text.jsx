import styled from 'styled-components';

//Body Text
export const Text10 = styled.p`
    font-size: ${props => props.theme.smallText};
    line-height: ${props => props.theme.smallTextLineHeight};
    color: ${props => props.theme.text_gray};
    font-weight: ${props => props.fontWeight ? props.fontWeight : 500};
    font-family: ${props => props.fontFamily ? props.fontFamily : "inherit"};
`

export const Text14 = styled.p`
    font-size: ${props => props.theme.normalText};
    line-height: ${props => props.theme.normalTextLineHeight};
    color: ${props => props.theme.text_gray};
    font-weight: ${props => props.fontWeight ? props.fontWeight : 500};
    font-family: ${props => props.fontFamily ? props.fontFamily : "inherit"};
`

export const Text20 = styled.p`
    font-size: ${props => props.theme.mediumText};
    line-height: 23px;
    color: ${props => props.theme.text_gray};
    font-weight: ${props => props.fontWeight ? props.fontWeight : 400};
    font-family: ${props => props.fontFamily ? props.fontFamily : "inherit"};
`;

export const Text24 = styled.p`
    font-size: ${props => props.theme.largeText};
    line-height: 23px;
    color: ${props => props.theme.text_gray};
    font-weight: ${props => props.fontWeight ? props.fontWeight : 400};
    font-family: ${props => props.fontFamily ? props.fontFamily : "inherit"};
`

//Headings

export const Heading14 = styled.h5`
    font-size: ${props => props.theme.heading1};
    color: ${props => props.yellow ? props.yellow : props.theme.text_gray};
    line-height: 18px;
    font-weight: ${props => props.fontWeight ? props.fontWeight : 700};
`

export const Heading16 = styled.h5`
  font-size: ${props => props.theme.heading2};
  color: ${props => props.theme.text_gray};
  line-height: 20px;
  font-weight: ${props => props.fontWeight ? props.fontWeight : 700};
  font-family: ${props => props.fontFamily ? props.fontFamily : "inherit"};
`;

export const Heading22 = styled.h5`
  font-size: ${props => props.theme.heading3};
  color: ${props => props.theme.text_gray};
  line-height: 24px;
  font-weight: ${props => props.fontWeight ? props.fontWeight : 700};
  font-family: ${props => props.fontFamily ? props.fontFamily : "inherit"};
`;

export const Heading28 = styled.h5`
  font-size: ${props => props.theme.heading1};
  color: ${props => props.theme.text_gray};
  line-height: 32px;
  font-weight: ${props => props.fontWeight ? props.fontWeight : 700};
  font-family: ${props => props.fontFamily ? props.fontFamily : "inherit"};
`;

export const Heading35 = styled.h5`
  font-size: ${props => props.theme.heading1};
  color: ${props => props.theme.text_gray};
  line-height: 40px;
  font-weight: ${props => props.fontWeight ? props.fontWeight : 700};
  font-family: ${props => props.fontFamily ? props.fontFamily : "inherit"};
`;

//dedicated Texts

export const UserName = styled.h5`
  font-size: ${props => props.theme.heading1};
  color: ${props => props.theme.text_gray};
  line-height: 18px;
  font-weight: ${props => props.fontWeight ? props.fontWeight : 700};
  font-family: ${props => props.fontFamily ? props.fontFamily : "inherit"};
`;