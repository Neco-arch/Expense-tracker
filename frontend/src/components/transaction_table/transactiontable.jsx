
import { CircleDollarSign , Store , BanknoteArrowUp } from 'lucide-react'
import './transactiontable.css'

const mockdata = [
    {
        id : 1 ,
        type : 'Store' ,  // Store Paycheck Transaction
        description : "Buy coffee" ,
        date: "28 Sep" , 
        amount: 120 , 
    }
]


export default function TransactionTable({data = [1] }) {

    if (data.length === 0) {
        console.log("Hello")
        return (<div className="Table_expense no_expense">
            <h2>No transaction Today</h2>
        </div>)
    }

    return (
        <div className='Table_expense'>
            <table className='Table_show'>
            {mockdata.map((value) => (
                <Transactioncard description={value.description} type={value.type} amount={value.amount} key={value.id} date={value.date} />
            ))}
        </table>
        </div>
    )
}

function Transactioncard({description , type , amount , date}) {

    if (type === 'Store') {
        return (
        <tr className="table_row">
            <div className='Wrapper_description'>
            <Store className='logo_tran'/>
            <h2>{description}</h2>
            </div>
            <h2>{date}</h2>
            <h2>{amount}฿</h2>
        </tr>
        )
    }

    if (type === 'Paycheck') {
        return (
        <tr className="table_row" >
            <div>
                            <BanknoteArrowUp className='logo_tran'/>
            <h2>{description}</h2>
            </div>
            <h2>{date}</h2>
            <h2>{amount}฿</h2>
        </tr>
        )

    }

    if (type === 'Transaction') {
        return (
        <tr className="table_row">
            <div>
            <CircleDollarSign className='logo_tran'/>
            <h2>{description}</h2>
            </div>
            <h2>{date}</h2>
            <h2>{amount}฿</h2>
        </tr>
        )
    }
}