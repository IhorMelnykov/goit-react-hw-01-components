import styled from "styled-components";

export const StatisticsSection = styled.section`
border: solid 2px;
width: 400px;
border-radius: 5px;
text-align: center;
margin-left: auto;
margin-right: auto;
background-color: gray;
`;

export const StatList = styled.ul`
display: flex;
justify-content: space-between;
list-style-type: none;
padding: 0 20px;
`;

export const StatListItem = styled.li`
border: 1px solid;
border-radius: 5px;
display: flex;
width: calc((100% - 24px) / 5);
flex-direction: column;
gap: 10px;
`;

export const StatSectionTitle = styled.h2`
text-transform: uppercase;
font-weight: 500;
font-size: 18px;
`;
export const StatItemLabel = styled.span`
color: white;
font-size: 14px;
margin-top: 10px;
`;

export const StatItemData = styled.span`
color: white;
font-size: 18px;
margin-bottom: 10px;
`
