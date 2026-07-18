class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const map = new Map<number, number>;
        for (let i = 0; i < nums.length; i++) map.set(target - nums[i], i);

        for (let i = 0; i < nums.length; i++){
            const diff = target = nums[i], j = map.get(diff);
            if (map.has(diff) && i < j) return [i, j];
        }
        return [];
    }
}
