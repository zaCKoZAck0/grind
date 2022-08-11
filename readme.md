# Grind

### Keeping a record of all the Questions I solve daily, so I don't slack off.

**Streak: 1 days** :fire:

---
>From:  Thu, 11 Aug
---
---
>Till: Thu, 11 Aug
---
**Breaks: 0 days** :cry:

### Latest Question Explaination

---
## Question 1 (Validate Binary Search Tree)

The solution was really simple, first used the property of BST that, inorder traversal
of BST gives sorted array, so if the array is not sorted it's not a valid BST.
Below is the explaination of the same.

```python
class Solution:
    def isValidBST(self, root: Optional[TreeNode]) -> bool:
        self.psudoTree = []
        def inOrder(root):
            if root==None:
                return
            inOrder(root.left)
            self.psudoTree.append(root.val)
            inOrder(root.right)
        inOrder(root)
        if len(list(set(self.psudoTree)))==len(self.psudoTree):
            #values have to be greater or smaller
            #BST can't have duplicates/equal values
            #checking the same using python "set"
            return self.psudoTree == sorted(self.psudoTree)
            #if valid binary search tree inorder traveral will be sorted 
        else:
            return False
            #false
```
## Question 2 (Non-constructible Change)

The solution is same as you would approach in your mind you start from the smallest element and you start from minChange = 0, and you add each coin to **minSum** keeping in mind that if you add a coin it should not exceed minChange + 1

```python
def nonConstructibleChange(coins):
    # Write your code here.
    coins = sorted(coins)
    minimumChange = 0
    for coin in coins:
        if coin>minimumChange+1:
            break
        minimumChange+=coin
    return minimumChange + 1
```
---


| Day | Questions |
| --- | ----------- |
| | |
|1|Non-constructible Change|
|1|Validate Binary Search Tree|

