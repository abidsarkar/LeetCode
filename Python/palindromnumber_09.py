# https://leetcode.com/problems/palindrome-number/
# just convert the number into string then reverse it and check with a copy of it . if the copy same then return true or else return false
class Solution:
    def isPalindrome(self, x: int) -> bool:
        valueString = str(x)
        copyValue = valueString
        copyValue = copyValue[::-1]
        if copyValue==valueString:
            return True
        else:
            return False

value = -121
obj = Solution()
ans = obj.isPalindrome(value)
print(ans)

