const { prisma } = require('../lib/prisma.js')

async function gettransactions(req,res) {
    try {
        const transactions = await prisma.transactions.findMany({
        where : {
            userId : req.user.userId,
        }
    })
    return res.json({data : transactions})
    } catch(error) {
        res.json({ error: "Something went wrong" })
    }

}
async function addtransactions(req,res) {
    const { transactions } = req.body

    if (!Array.isArray(transactions)) {
        return res.json("invalid type of data")
    }

    try {
        for (let item of transactions) {
            await prisma.transactions.create({
                data : {
                    userId : req.user.userId ,
                    description : item.description ,
                    date : new Date(item.date),
                    amount : item.amount,
                    type : item.type
                }
            })
        }

        return res.json("Added all the data")
    } catch(error) {
        res.json({ error: "Something went wrong" })
    }
    
}

async function DeleteTransaction(req,res) {
    const { id } = req.params;

    if (id === null) return res.status(400).json({ error: "Invalid id" });
    try {
        await prisma.transactions.delete({
            where : {
                userId : req.user.userId ,
                id : parseInt(id)
            }
        })
        return res.json("Delete Data")
    } catch(error) {
        res.json({ error: "Something went wrong" })
    }
    
}

async function  EditTransaction(req,res) {
    const { id } = req.params;
    const { transactions  } = req.body

    if (id === null) return res.status(400).json({ error: "Invalid id" });
    try {
        await prisma.transactions.update({
            where : {
                userId : req.user.userId,
                id : parseInt(id)
            },
            data : {
                description : transactions[0].description ,
                date : new Date(transactions[0].date) ,
                amount : transactions[0].amount ,
                type : transactions[0].type
            }
        })
        return res.json({ message: "Transaction updated" });
    } catch(error) {
        res.json({ error: "Something went wrong" })
    }
}

module.exports = { gettransactions , addtransactions , DeleteTransaction , EditTransaction}