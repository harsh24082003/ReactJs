import React, {useId} from "react";

function InputBox({
    label, 
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectedCurrency = "usd",
    amountDisabled = false,
    currencyDisabled = false,

    className = "",

}) {
    const amountInputId = useId();  //It is used for generating unique IDs for the input element, which is useful for accessibility and linking labels to inputs. It consists of string and numbers 

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={amountInputId} className="text-black/40 mb-2 mr-20 flex">
                    {label}
                </label>
                <input 
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisabled}
                    value={amount}
                    onChange={e =>
                    onAmountChange && onAmountChange(e.target.value === "" ? "" : Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectedCurrency}
                    onChange={(e)=> onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisabled}  //If onCurrencyChange exists, the onCUrrencyChange function will be called with the selected value
                >
                    
                        {currencyOptions.map((curr)=>(
                            <option key={curr} value={curr}>
                                {curr}
                            </option>
                        ))}
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;