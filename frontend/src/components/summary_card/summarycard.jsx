export default function Summarycard({ title , amount  }) {
    return (
    <div className="Summary card">
        <div className="Overview_number">
            <h2>Total {title}</h2>
            <h1>฿ {amount}</h1>
        </div>
    </div>
    )
}