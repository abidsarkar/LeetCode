//https://leetcode.com/problems/maximum-subarray/description/
#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;
int maxSubArray(vector<int>& nums){
    int currentSum = 0;
    int maxSum = INT16_MIN;
    for (int val: nums) {
        currentSum += val;
        maxSum = max(currentSum,maxSum);
        if(currentSum < 0){
            currentSum = 0;
        }
    }
    return maxSum;
};
int main() {
    int n = 5;
    int arr[5] = {1, 2, 3, 4, 5};
    vector<int> abc ={-2,1,-3,4,-1,2,1,-5,4};
    cout<<maxSubArray(abc);
//    int maxSum = INT16_MIN;
//    for (int st = 0; st < n; ++st) {
//        int currSum = 0;
//        for (int end = st; end < n; ++end) {
//            currSum += arr[end];
//            maxSum = max(currSum,maxSum);
//        }
//    }
//    cout<< "Max subarray sum in brotfroce is = "<<maxSum;
    return 0;
}