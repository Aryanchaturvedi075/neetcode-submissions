class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        const sAlphabets: number[] = new Array(26).fill(0);
        const tAlphabets: number[] = new Array(26).fill(0);
        const aCode = 'a'.charCodeAt(0);
        
        for (const c of s) sAlphabets[c.charCodeAt(0) - aCode]++;
        for (const c of t) tAlphabets[c.charCodeAt(0) - aCode]++;

        console.log(sAlphabets);
        // console.log(tAlphabets);

        return sAlphabets.every((value, index) => value === tAlphabets[index]);
    }
}
