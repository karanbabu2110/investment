import {calculateInvestmentResults} from '../util/investment.js';

export default function Results({userInput}) {
    const result = calculateInvestmentResults(userInput);
    return <p>Results...</p>
}