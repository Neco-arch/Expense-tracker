import {
  Table,
  TableHeader,
  Column,
  TableBody,
  Row,
  Cell,
} from "react-aria-components";

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
            <Column isRowHeader>{new Date().toLocaleDateString()}</Column>
            <Column hidden></Column>
            <Column hidden></Column>
        </TableHeader>
        <TableBody>
            {mockdata.map((transaction) => (
                <Row key={transaction.id} >
                    <Cell>{transaction.description}</Cell>
                    <Cell>{transaction.date}</Cell>
                    <Cell>฿ {transaction.amount}</Cell>
                </Row>
            ))}
        </TableBody>
    </Table>
    )

}