import Summarycard from '../components/summary_card/summarycard.jsx'
import Navbar from '../components/navbar/navbar.jsx'
import TransactionTable from '../components/transaction_table/transactiontable.jsx'

export default function Dashboard() {
    return (
        <>
        <Navbar landingpage={true} />
        <h2>Welcome back owner</h2>
        <div className="Overview">
            <Summarycard title={'Income'} />
            <Summarycard title={'Expenses'} />
        </div>
        <div>
            <TransactionTable tabletitle="Transaction"/>
        </div>
        </>
    )
}