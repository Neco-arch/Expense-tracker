import './summarycard.css'
import {
    BanknoteArrowDownIcon,
    BanknoteArrowUpIcon
} from "lucide-react";

export default function Summarycard({ title , amount  }) {
    return (
    <div className="Summary_card">
        <div className="Overview_number">
            <h2>Total {title}</h2>
            <h1>฿ {amount}</h1>
        </div>  
        <div>
            {title === 'Income' && (
                <BanknoteArrowUpIcon className='Bankicon'/>
            )}
            {title === 'Expenses' && (
                <BanknoteArrowDownIcon className='Bankicon'/>
            )}
        </div>
    </div>
    )
}