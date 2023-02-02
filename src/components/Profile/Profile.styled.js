import styled from "styled-components";

export const ProfileWrap = styled.div`

width: 310px;
margin: 30px auto;
padding-left: auto;
padding right: auto;
background-color: lightgray;
cursor: pointer;
border: solid 4px;
box-shadow: 0px 0px 10px 8px rgb(0 0 0 / 20%);
border-radius: 8px
`;


export const ProfileDescription = styled.div`
border: 1px solid  rgb(1, 1, 1);
border-radius: 10px;
padding: 20px 50px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center
`;

export const ProfileAvatar = styled.img`
border: 1px solid  rgb(1, 1, 1);
border-radius: 50%;
width: 150px;
margin-bottom: 20px;
`;

export const ProfileName = styled.p`
margin: 0;
margin-bottom: 8px;
font-weight: 500;
font-size: 22px;

`;

export const ProfileTag = styled.p`
margin: 0;
margin-bottom: 8px;
font-size: 16px;
`;

export const ProfileLocation = styled.p`
margin: 0;
font-size: 16px;
`;

export const ProfileStats = styled.ul`
display: flex;
list-style-type: none;
margin: 15px;
padding: 10px 8px;
justify-content: space-between;
`;

export const ProfileStatsItem = styled.li`
font-weight: 500;
font-size: 15px;
display: flex;
flex-direction: column;
align-items: center;
`;

export const StatsItemTitle = styled.span`
color: red;
`;

export const StatsItemData = styled.span`
margin-top: 5px;
`;
