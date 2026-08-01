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
                const last: string = stack.pop();
                if(map[c] !== last) return false;
            }
            else stack.push(c);
        }
        return stack.length === 0;
    }
}
