class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        // convert string to lowercase and then filter elements with a regex check into array
        const clean = [...s.toLowerCase()].filter(c => /^[a-z0-9]$/.test(c));
        
        // 2 pointer approach compares ends of array
        const len = clean.length - 1;
        for (let i = 0; i <= len; i++) if (clean[i] !== clean[len-i]) return false;
        return true;
    }
}
