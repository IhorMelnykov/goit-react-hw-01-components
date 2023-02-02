import styled from "styled-components";

export const FriendItem = styled.li`
border: solid 2px;
width: 200px;
display: flex;
height: 50px;
gap: 10px;
align-items: center;
padding: 4px;
border-radius: 10px;
background-color: yellow;
padding: 10px 20px;

`;

export const FriendsList = styled.ul`
display: flex;
gap: 5px;
flex-direction: column;
list-style-type: none;
align-items: center;
justify-content: center;
margin-left: auto;
    margin-right: auto;
    padding: 30px 0;
`;

export const FriendOnline = styled.span`
background-color: green;
width: 15px;
height: 15px;
border-radius: 50%;
`;

export const FriendOffline = styled.span`
background-color: red;
width: 15px;
height: 15px;
border-radius: 50%;
`;


export const FriendName = styled.span`

font-size: 18px;
font-weight: 500;
`;

export const FriendAvatar = styled.img`
border: 1px solid  #dae9ec;
border-radius: 10px;
padding: 4px;
background-color: white;
`;
