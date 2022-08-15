---
### 1. Question (Word Ladder)

The questions wants us to give the shortest path that will give us start word to end word, but if you look closely the qn represents a graph. As their are multiple paths to go from string x -> string y.
So onto the implementation.
1. Create a set of words for easier operations.
2. Maintain a queue for dfs
3. Push begin word to the queue.
4. Put depth = 0
5. until the queue is not empty (depth+1) &
6. for each level (lsize) process the string to find the path
* Pop the fornt from q
* For each word in character do a bruteForce conversion (for each ch <'a' to 'z'>)
* if you find the same character while changing (continue)
* if you find the end character return depth+1
* if any other character that is in (set) push to queue and remove it from set.

```python
class Solution:
    def ladderLength(self, beginWord: str, endWord: str, wordList: List[str]) -> int:
        wordSet = set()
        isPresent = False
        for word in wordList:
            if word==endWord:
                isPresent = True
            wordSet.add(word)
        if isPresent == False:
            return 0
        
        q = list()
        q.append(beginWord)
        depth = 0
        
        while(q):
            depth+=1
            lSize = len(q)
            while(lSize):
                lSize-=1
                curr = q[0]
                q.pop(0)
                for i in range(len(curr)):
                    temp = curr[:]
                    for char in range(97,123):
                        temp = list(temp)
                        temp[i]=chr(char)
                        temp = "".join(temp)
                        if curr==temp:
                            continue
                        if temp == endWord:
                            return depth+1
                        if temp in wordSet:
                            print('putting:',temp)
                            q.append(temp)
                            wordSet.discard(temp)                    
        return 0
```
---
