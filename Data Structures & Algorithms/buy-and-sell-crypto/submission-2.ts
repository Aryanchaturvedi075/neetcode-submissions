class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        // second approach (window sliding)
        let profit = 0, i = 0;
        const last = prices.length - 1;

        for (let j = 1; j <= last; j++) {
            const diff = prices[j] - prices[i];
            if (diff > profit) profit = diff;
            else if (diff < 0) i++;
        }

        while (i <= last) {
            const diff = prices[last] - prices[i];
            if (diff > profit) profit = diff;
            i++;
        }
        console.log(`${i}`);
        return profit;


        // first approach assumed to find the lowest point and look for the largest number after that
        // but this has obvious flaws, what if you can still profit despite not having the lowest number?
        // const min = Math.min(...prices), index = prices.indexOf(min), max = Math.max(...prices.slice(index + 1, prices.length));
        // return (max > min) ? max - min : 0;
    }
}
