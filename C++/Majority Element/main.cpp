//https://leetcode.com/problems/majority-element/description/
#include <iostream>
#include <string>
#include <algorithm>
#include <vector>

using namespace std;

int majorityElement(vector<int> &nums) {
    int n = nums.size();
    if(n==1){
        return nums[0];
    }
    sort(nums.begin(), nums.end());
    int freq = 1, ans = nums[0];
    for (int i = 1; i < n; ++i) {
        if(nums[i] == nums[i-1]){
            freq++;
        } else{
            freq=1;
            ans = nums[i];
        }
        if(freq>n/2){
            return ans;
        }
    }
    return -1;
}
int mooresVoting(vector<int>& nums){
    int freq =0, ans =0;
    for (int i = 0; i <nums.size(); i++)
    {
        if(freq ==0){
            ans = nums[i];
        }
        if(ans == nums[i]){
            freq++;
        }else{
            freq--;
        }
    }
    return ans;
    
}
int main() {
    vector<int> vector1 = {3, 2, 3};
    int ans = majorityElement(vector1);
    cout << ans;
    return 0;
}
