// https://leetcode.com/problems/two-sum/description/
// we have 2 method at this moments. brute force 
#include <iostream>
#include <map>
#include <vector>
#include <unordered_map>
using namespace std;
//class Solution {
//public:
//    vector<int> twoSum(vector<int>& nums, int target) {
//        vector<int> ans;
//        int size = nums.size();
//        for(int i = 0 ; i<size - 1; i++){
//            for(int j  = i+1; j< size; j++){
//                if(nums[i]+nums[j]==target){
//                    ans.push_back(i);
//                    ans.push_back(j);
//                    return ans;
//                }
//            }
//        }
//        return ans;
//    }
//};
class Solution {
public:
    vector<int> twoSum(vector<int>&nums,int target){
        vector<int> ans;
        int size = nums.size();

        int diff;
        unordered_map<int,int>m;
        for (int i = 0; i < size; ++i) {
            diff = target - nums[i];
            if(m.find(diff) !=m.end() && m.find(diff)->second != i){
                ans.push_back(i);
                ans.push_back(m.find(diff)->second);
                return ans;
            }
            m[nums[i]] = i;
        }
        return ans;
    }
};
int main() {
    vector<int> nums = {2, 7, 11, 15}; // Direct initialization
    int target = 9;

    Solution solution;
    vector<int> result = solution.twoSum(nums, target);

    // Print the result using a range-based for loop
    for (int num : result) {
        cout << num << " ";
    }
    cout << endl;

    return 0;
}
