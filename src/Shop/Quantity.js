const Quantity = ({ amount, setAmount }) => {
    const minusOne = () => {
        if (amount <= 1) return;
        const newAmount = amount - 1;
        setAmount(newAmount)
    }
    const plusOne = () => {
        const newAmount = amount + 1;
        setAmount(newAmount)
    }
    return (
        <div className="in-cart">
            <button className="button-add" onClick={minusOne}> - </button>
            <span> {amount} </span>
            <button className="button-add" onClick={plusOne}> + </button>
        </div>
    )
}
export default Quantity;