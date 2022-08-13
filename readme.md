# Grind :zap:

### Keeping a record of all the Questions I solve daily, so I don't slack off.

---
>From:  Thu, 11 Aug
---
---
>Till: Sat, 13 Aug
---

**Streak: 3 days** :fire:

### Latest Question Explanation :octopus:

---
### 1. Branch Sums

The solution is that visit a branch only once and keep adding the values to the sum of the branch 
approach:
1. add root to the sum
2. if right is available go right
3. if left is available go left
4. if leaf is reached add the sum to the output array

```python
# This is the class of the input root. Do not edit it.
class BinaryTree:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None


def branchSums(root):
    # Write your code here.
    def traverseBranch(root,sum,arr):
        sum+=root.value
        if not root.left and not root.right:
            arr.append(sum)
            return
        if root.left:
            traverseBranch(root.left,sum,arr)
        if root.right:
            traverseBranch(root.right,sum,arr)
    array = []
    traverseBranch(root,0,array)
    return (array)
```

### 2. Node Depths

The approach I followed was summing up all the nodes from depth = 0 to root to depth = k, kth node from root.
currentDepth+(all depthLeft)+(all depthRight)

```python3
def nodeDepths(root, depth=0):
    if not root:
        return 0
    return depth + nodeDepths(root.left, depth+1) + nodeDepths(root.right, depth+1)
    
        


# This is the class of the input binary tree.
class BinaryTree:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None
```

---


| Day | Questions |
| --- | ----------- |
|3|Node Depths|
|3|Branch Sums|
|2|Lowest Common Ancestor of a Binary Search Tree|
|2|Find Closest Value in Bst|
|1|Non-constructible Change|
|1|Validate Binary Search Tree|


\* not only leetcode but other platforms as well.