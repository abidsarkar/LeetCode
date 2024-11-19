#include <iostream>
#include <vector>

using namespace std;
class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        vector<int> ans;
        int size = nums.size();
        for(int i = 0 ; i<size - 1; i++){
            for(int j  = i+1; j< size; j++){
                if(nums[i]+nums[j]==target){
                    ans.push_back(i);
                    ans.push_back(j);
                    return ans;
                }
            }
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

