import {
  TransactionsTableRow,
TransactionsTableEl
} from "./TransactionHistory.styled"

export const TransactionHistoryItem = ({ data: { type, amount, currency } }) => {
    return <TransactionsTableRow>
        <TransactionsTableEl>{type}</TransactionsTableEl>
        <TransactionsTableEl>{amount}</TransactionsTableEl>
        <TransactionsTableEl>{currency}</TransactionsTableEl>
    </TransactionsTableRow>
}
