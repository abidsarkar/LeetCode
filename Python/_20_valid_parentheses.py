class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        matching_bracket = {')': '(', '}': '{', ']': '['}
        for char in s:
            if char in matching_bracket.values():  # If it's an opening bracket
                stack.append(char)
            elif char in matching_bracket.keys():  # If it's a closing bracket
                if stack and stack[-1] == matching_bracket[char]:
                    stack.pop()
                else:
                    return False  # Unmatched closing bracket
            else:
                return False  # Invalid character
        return len(stack) == 0
    


value = "{}[]()"
# print(value[0])
obj = Solution()
ans = obj.isValid(value)
print(ans)