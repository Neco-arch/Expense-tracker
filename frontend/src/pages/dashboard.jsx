import '../global.css'
import Summarycard from '../components/summary_card/summarycard.jsx'
import TransactionTable from '../components/transaction_table/transactiontable.jsx'
import Navbar from '../components/navbar/navbar.jsx'

export default function Dashboard() {
    const username = "Sandro Tonali"
    return (
        <div className="Dashboard_wrapper">
            <div className="Sidebar">
                <Navbar dashboardpage={true}></Navbar>
            </div>
            <div className="MainPage">
                <h2 className="Owner">Welcome back</h2>
                <h2>{username}</h2>
                <div className="Overview">
                    <Summarycard title={'Income'} />
                    <Summarycard title={'Expenses'} />
                <div>
                </div>
            </div>
            <div className="Today_expense">
                <h2>Today's Expense</h2>
                    <TransactionTable tabletitle="Today Transaction"/>
                </div>
            </div>
        </div>
    )
}