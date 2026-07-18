class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const map = {};
        
        for (let i = 0; i < nums.length; i++) {
            const diff = target - nums[i];
            if (map[diff] !== undefined) return [map[diff], i];
            map[nums[i]] =  i;      // the issue i was facing in the one-pass approach was a misunderstanding of adding the diff instead of the nums[i]
        }

        return [];



        // // the primary logic here is to store the 
        // // difference between the target and each element in a hashmap, 
        // // and store the element's corresponding index for lookup
        // const map = new Map<number, number>;
        // for (let i = 0; i < nums.length; i++) map.set(target - nums[i], i);

        // // then reiterate through the loop if a corresponding difference 
        // // exists as a key in the hashmap, (different index)
        // for (let i = 0; i < nums.length; i++){
        //     const diff = target = nums[i], j = map.get(diff);
        //     if (map.has(diff) && i < j) return [i, j];
        // }
        // return [];
    }
}
