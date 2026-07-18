class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        // convert string to lowercase and then filter elements with a regex check into array
        const clean = [...s.toLowerCase()].filter(c => /^[a-z0-9]$/.test(c));
        
        // 2 pointer approach compares ends of array
        
        let j = clean.length - 1;
        for (let i = 0; i <= j; i++, j--) if (clean[i] !== clean[j]) return false;
        return true;
    }
}
