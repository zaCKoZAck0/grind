# Grind

### Keeping a record of all the Questions I solve daily, so I don't slack off.

---
>From:  Thu, 11 Aug
---
---
>Till: Thu, 12 Aug
---

**Streak: 2 days** :fire:

### Latest Question Explaination :octopus:

---

### Question 1 (Find Closest Value in Bst)

I got the approach at first but it was pretty mushed up, to find the nearest value the approact was to find the minimum absolute difference between element and target, though I got the 99% of the solution few misunderstandings made it hard for me.

1 > Base Case:
    if on root return the last closest value.
2 > Main Logic:
    find the minimum absolute difference between current and previous minimum
3> Recursive call:
    traverse like normal bst 
        if larger go left
        if smaller go right
        else if value is same as target no value will bw smaller than that.

```python
def findClosestValueInBst(tree, target):
    # Write your code here

    def treeTraversal(tree, closest):
        if not tree:
            return closest
        if abs(target-closest)>abs(target-tree.value):
            closest = tree.value
        if target < tree.value:
            return treeTraversal(tree.left,closest)
        elif target > tree.value:
            return treeTraversal(tree.right,closest)
        return closest

    return(treeTraversal(tree,float('inf')))
# This is the class of the input tree. Do not edit.
class BST:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

```
### Question 2 (Lowest Common Ancestor of a Binary Search Tree)

The approach is specific to property of BST, if we want to find the common elment we have to find the split.
How a split occurs:
1. Both elements on diffent sub tree.
2. One element == root and other exist in subtree.
If we find a split we return where the split occured. 

```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':
        current = root
        while current:
            if p.val > current.val and q.val > current.val:
                current = current.right
            elif p.val < current.val and q.val < current.val:
                current = current.left
            else:
                return current
```

---


| Day | Questions |
| --- | ----------- |
|2|Find Closest Value in Bst|
|1|Non-constructible Change|
|1|Validate Binary Search Tree|


\* not only leetcode but other platforms as well.