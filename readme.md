# Grind

### Keeping a record of all the Questions I solve daily, so I don't slack off.
---
>From:  Thu, 11 Aug
---
---
>Till: Thu, 11 Aug
---

**Streak: 1 days** :fire:

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
            #tree can't have duplicates/equal values
            #checking the same using python "set"
            return self.psudoTree == sorted(self.psudoTree)
            #if valid binary search tree inorder traveral will be sorted 
        else:
            return False
            #false
```
---


| Day | Questions |
| --- | ----------- |
| | |
| 1 | Validate Binary Search Tree |

