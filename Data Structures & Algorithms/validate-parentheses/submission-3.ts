class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const map = { ')' : '(', '}' : '{', ']' : '[' }
        const stack: string[] = [];
        for(const c of s){
            if ('({['.includes(c)) stack.push(c);
            else {
                const last: string = stack.pop();
                if(map[c] !== last) return false;
            }
        }
        if (stack.length !== 0) return false;
        return true;
    }
}
