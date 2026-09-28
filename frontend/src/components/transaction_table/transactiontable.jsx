import {
  Table,
  TableHeader,
  Column,
  TableBody,
  Row,
  Cell,
} from "react-aria-components";

import './transactiontable.css'

const mockdata = [
    {
        id : 1 ,
        description : "Buy coffee" ,
        date: "28 Sep" , 
        amount: 120 , 
    }
]


export default function TransactionTable({data = [] , tabletitle }) {

    return (
        <Table aria-label={tabletitle}>
        <TableHeader>
            <Column hidden></Column>
            <Column hidden></Column>
        </TableHeader>
        <TableBody>
            {mockdata.map((transaction) => (
                <Row key={transaction.id} >
                    <Cell>{transaction.description}</Cell>
                    <Cell>฿ {transaction.amount}</Cell>
                </Row>
            ))}
        </TableBody>
    </Table>
    )

}