import {
  FriendItem,
  FriendOnline,
  FriendOffline,
  FriendName,
FriendAvatar
} from "./FriendList.styled"

export const FriendListItem = ({ data: { avatar, name, isOnline } }) => {
    return <FriendItem>
        {isOnline ? <FriendOnline /> : <FriendOffline />}
<FriendAvatar src={avatar} alt={name} width="48" />
  <FriendName>{name}</FriendName>
</FriendItem>
}


