class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        const freq: number[] = new Array(26).fill(0);
        const a = 'a'.charCodeAt(0);
        if (t.length !== s.length) return false;
        for(let i = 0; i < s.length; i++){
            freq[s.charCodeAt(i) - a]++;
            freq[t.charCodeAt(i) - a]--;
        }
        return freq.every(x => x === 0);
    }
}
