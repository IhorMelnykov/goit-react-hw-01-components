import PropTypes from "prop-types";
import {
  ProfileWrap,
  ProfileDescription,
  ProfileAvatar,
  ProfileName,
  ProfileTag,
  ProfileLocation,
  ProfileStats,
  ProfileStatsItem,
  StatsItemTitle,
  StatsItemData

} from "./Profile.styled"

export const Profile = ({ username, tag, location, avatar, stats }) => {
    return (
       <ProfileWrap>
  <ProfileDescription>
    <ProfileAvatar
      src={avatar}
      alt={username}
    />
          <ProfileName>{username}</ProfileName>
          <ProfileTag>@{tag}</ProfileTag>
    <ProfileLocation>{location}</ProfileLocation>
  </ProfileDescription>

  <ProfileStats>
    <ProfileStatsItem>
      <StatsItemTitle>Followers</StatsItemTitle>
      <StatsItemData>{stats.followers}</StatsItemData>
    </ProfileStatsItem>
    <ProfileStatsItem>
      <StatsItemTitle>Views</StatsItemTitle>
      <StatsItemData>{stats.views}</StatsItemData>
    </ProfileStatsItem>
    <ProfileStatsItem>
      <StatsItemTitle>Likes</StatsItemTitle>
      <StatsItemData>{stats.likes}</StatsItemData>
    </ProfileStatsItem>
  </ProfileStats>
</ProfileWrap>
    )
}


Profile.propTypes = {
  username:PropTypes.string.isRequired, 
  tag:PropTypes.string.isRequired, 
  location:PropTypes.string.isRequired, 
  avatar:PropTypes.string.isRequired,
  stats: PropTypes.exact ({ 
    followers:PropTypes.number.isRequired, 
    views:PropTypes.number.isRequired, 
    likes:PropTypes.number.isRequired
})
}