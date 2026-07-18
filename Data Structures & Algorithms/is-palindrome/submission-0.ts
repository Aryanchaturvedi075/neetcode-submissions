class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        const clean = [...s.toLowerCase()].filter(c => /^[a-z0-9]$/.test(c));
        const len = clean.length - 1;
        for (let i = 0; i <= len; i++) if (clean[i] !== clean[len-i]) return false;
        return true;
    }
}
