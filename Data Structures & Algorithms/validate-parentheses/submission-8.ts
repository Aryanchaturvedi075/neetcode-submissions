class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const map = { ')' : '(', '}' : '{', ']' : '[' }
        const stack: string[] = [];
        for(const c of s){
            if (map[c]) {
                if(map[c] !== stack.pop()) return false;
            }
            else stack.push(c);
        }
        return stack.length === 0;
    }
}
