import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Calculator() {

    const [timeframe, setTimeframe] = useState('Daily');
    const [unit, setUnit] = useState('Day');
    const [answer, setAnswer] = useState(0);
    const [salary, setSalary] = useState(0);
    const [expenses, setExpenses] = useState(0);
    const [amountSaved, setAmountSaved] = useState(0);
    const [savingsPercent, setSavingsPercent] = useState(0)
    const [itemCost, setItemCost] = useState(0);


    const handleSubmit = (e) => {
        e.preventDefault();

        var potentialSavings = (salary - expenses);
        var percentSaved = (potentialSavings * (savingsPercent / 100));
        var answer = (itemCost / percentSaved);

        setAmountSaved(percentSaved);
        setTimeframe(timeframe);
        setAnswer(answer);

        if (timeframe == 'Daily') {
            setUnit('Day');
        } else if (timeframe == 'Weekly') {
            setUnit("Week");
        } else if (timeframe == 'Monthly') {
            setUnit("Month");
        } else if (timeframe == 'Yearly') {
            setUnit("Year");
        }

        console.log(unit);
    }


    return (
        <div className='calculator'>
            <nav>
                <ul>
                    <Link to='/'><li>Home</li></Link>
                    <Link to='/calculator'><li>Calculator</li></Link>
                    <Link to='/documentation'><li>Documentation</li></Link>
                </ul>
            </nav>

            
            <form className='calculator-form' onSubmit={handleSubmit}>
                <h1>Budget Calculator</h1>
                    <div className="calc-main">
                        <div className="salary">
                            <p>Calculate salary and expenses on a 
                            <select onChange={e => setTimeframe(e.target.value)} type='text' name="timeframe" className='timeframe-select' >
                                <option value="Daily">Daily</option>
                                <option value="Weekly">Weekly</option>
                                <option value="Monthly">Monthly</option>
                                <option value="Yearly">Yearly</option>
                            </select>
                            basis
                            </p>
                            
                            <h3>Salary</h3>
                            <input type="number" className="salary" onChange={e => setSalary(e.target.value)}/>
                            
                        </div>

                        <div className="expenses">
                        <h3>Expenses</h3>
                            <input type="number" className='expenses' onChange={e => setExpenses(e.target.value)}/>
                        </div>

                        <div className="savings">
                            <h3>Percent Savings</h3>
                            <input type="number" min='1' max='100' className='savings' onChange={e => setSavingsPercent(e.target.value)}/>
                        </div>

                        <div className="itemCost">
                            <h3>Item Cost</h3>
                            <input type="number" required onChange={e => setItemCost(e.target.value)}/>
                        </div>

                        <div className="submit-btn">
                            <input type="submit"/>
                        </div>
                    </div>
             </form>

            <div className="output">
                <h1>It's only {answer} {unit}s before you can make the purchase!</h1>
                <h1>You must save ${amountSaved} per {unit}</h1>
            </div>
        </div>
    )
}

export default Calculator
