class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        // my intuition is to use a stack here
        // no stack in typescript so use array methods
        const open = '({[';
        const arr : string[] = [];
        const match = {
            ')': '(',
            '}': '{',
            ']': '['
        }

        for (const c of s){
            // LIFO -> push last in
            if (open.includes(c)) arr.push(c);

            // -> pop last out
            else if (match[c] !== arr.pop()) return false;
        }
        
        // checking if all open brackets were closed or not
        return arr.length === 0;
    }
}
