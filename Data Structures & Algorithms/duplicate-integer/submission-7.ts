class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const uniques = new Set(nums);
        return nums.length !== uniques.size;
    }
}
