import PropTypes from "prop-types";
import {
    StatisticsSection,
    StatList,
    StatListItem,
    StatSectionTitle,
    StatItemLabel,
StatItemData
} from "./Statistics.styled"

export const Statistics = ({ title, stats } ) => {
    return (
        <StatisticsSection>
            {title && <StatSectionTitle>{title}</StatSectionTitle>}

            <StatList>
                {stats.map(({ id, label, percentage }) => {
                    return <StatListItem style={{backgroundColor: randomColor()}} key={id}>
                        <StatItemLabel>{label}</StatItemLabel>
                        <StatItemData>{percentage}%</StatItemData>
                    </StatListItem>
                })}
    
  </StatList>
</StatisticsSection>
        )
}


Statistics.propTypes = {
    title:PropTypes.string, 
    stats:PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage:PropTypes.number.isRequired,
        }).isRequired
    ).isRequired
  };


 function randomColor () { 
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
 }