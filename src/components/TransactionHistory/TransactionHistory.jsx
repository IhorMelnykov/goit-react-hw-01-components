import PropTypes from "prop-types";
import { TransactionHistoryItem } from "./TransactionHistoryItem";
import {
  TransactionsTable,
  TransactionsTableHead,
  TransactionsTableBody,
  TransactionsTableRow,
TransactionsTableHeading
} from "./TransactionHistory.styled"

export const TransactionHistory = ({ items }) => {
    return (
        <TransactionsTable>
  <TransactionsTableHead>
    <TransactionsTableRow>
      <TransactionsTableHeading>Type</TransactionsTableHeading>
      <TransactionsTableHeading>Amount</TransactionsTableHeading>
      <TransactionsTableHeading>Currency</TransactionsTableHeading>
    </TransactionsTableRow>
  </TransactionsTableHead>

            <TransactionsTableBody>
                {items.map(item => <TransactionHistoryItem key={item.id} data={item} />)} 
  </TransactionsTableBody>
            </TransactionsTable>
            )
}


TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
    }).isRequired
    ).isRequired,
  };