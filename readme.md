# Grind :zap:
### Keeping a record of all the Questions I solve daily, so I don't slack off.

---
> From: Thu Aug 11 2022
---

---
> Till: Sun Aug 28 2022
---

**Streak: 18 days** :fire: &
**Number of Questions: 63** :relieved:

### Latest Question Explanation :octopus:
##### I put explainations late for self clarification. Thanks.
This is not the exact date I started solving questions, so don't worry the date only refers to the day I started documenting.
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
| Day | Questions |
| --- | ----------- |
|18|Merge Two Binary Trees|
|18|Longest Subsequence With Limited Sum|
|18|Max Sum of Rectangle No Larger Than K|
|18|Max Area of Island|
|17|Flood Fill|
|16|Reordered Power of 2|
|15|Ransom Note|
|14|Merge Sorted Array|
|14|Power of Three|
|14|Symmetric Tree|
|13|Permutation in String|
|13|Longest Substring Without Repeating Characters|
|13|Palindrome Linked List|
|13|Same Tree|
|13|Remove Nth Node From End of List|
|12|Sqrt(x)|
|12|Middle of the Linked List|
|12|Power of Three|
|12|Power of Two|
|12|Power of Four|
|12|Stamping The Sequence|
|12|Remove Duplicates from Sorted List|
|11|Reverse Words in a String III|
|11|Reverse String|
|11|Shifting Letters II|
|11|Time Needed to Rearrange a Binary String|
|11|Minimum Recolors to Get K Consecutive Black Blocks|
|10|Minimum Number of Refueling Stops|
|10|Two Sum II - Input Array Is Sorted|
|10|Move Zeroes|
|10|Climbing Stairs|
|9|Rotate Array|
|9|Squares of a Sorted Array|
|9|Search Insert Position|
|9|Reduce Array Size to The Half|
|8|First Bad Version|
|8|Binary Search|
|8|Reduce Array Size to The Half|
|7|Add Binary|
|7|Plus One|
|7|Length of Last Word|
|7|Implement strStr()|
|7|Move Zeroes|
|7|Remove Element|
|7|Check if the Sentence Is Pangram|
|7|First Letter to Appear Twice|
|7|Unique Morse Code Words|
|6|Remove Duplicates from Sorted Array|
|6|Palindrome Number|
|6|Longest Common Prefix|
|6|Sort Characters By Frequency|
|6|First Unique Character in a String|
|5|Integer to Roman|
|5|Roman to Integer|
|4|Word Ladder II|
|4|Word Ladder|
|3|Substring with Concatenation of All Words|
|3|Node Depths|
|3|Branch Sums|
|2|Lowest Common Ancestor of a Binary Search Tree|
|2|Find Closest Value in Bst|
|1|Non-constructible Change|
|1|Validate Binary Search Tree|


\* not only leetcode but other platforms as well.