class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        // 3rd solution was convert the array into a hashset
        // compare the length of both to determine duplicates
        return new Set(nums).size < nums.length;


        // 2nd solution was using a hashset and finding duplicates while adding new elements
        // // use a hashset to store unique values
        // const seen = new Set<number>;

        // // check if a number already exists in the hashset before adding a new one 
        // for (const num of nums) {
        //     if (seen.has(num)) return true;     // if true, then it's a duplicate
        //     seen.add(num);
        // }
        // return false;

        // first solution was brute force nested for loops checking
    }
}
