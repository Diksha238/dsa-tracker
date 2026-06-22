import { useState, useEffect } from "react";

const DSA_DATA = [
  {
    section: "Basics",
    color: "#4a7c59",
    subtopics: [
      {
        name: "Maths",
        problems: [
          "Count all Digits of a Number","Count number of odd digits in a number","Reverse a number","Palindrome Number","Return the Largest Digit in a Number","Factorial of a given number","Check if the Number is Armstrong","Check for Perfect Number","Check for Prime Number","Count of Prime Numbers till N","GCD of Two Numbers","LCM of two numbers","Divisors of a Number"
        ]
      },
      {
        name: "Arrays",
        problems: [
          "Sum of Array Elements","Count of odd numbers in array","Check if the Array is Sorted I","Reverse an array"
        ]
      },
      {
        name: "Hashing",
        problems: [
          "Highest Occurring Element in an Array","Second Highest Occurring Element","Sum of Highest and Lowest Frequency"
        ]
      },
      {
        name: "Strings",
        problems: [
          "Reverse a String II","Palindrome Check","Largest Odd Number in a String","Longest Common Prefix","Isomorphic String","Rotate String","Valid Anagram","Sort Characters by Frequency"
        ]
      },
      {
        name: "Recursion",
        problems: [
          "Recursion Theory","Recursion Concepts with Parameters","Sum of First N Numbers","Factorial of a Given Number","Sum of Array Elements","Reverse a String I","Check if String is Palindrome or Not","Check if a Number is Prime or Not","Reverse an array","Check if the Array is Sorted II","Sum of Digits in a Given Number","Fibonacci Number"
        ]
      }
    ]
  },
  {
    section: "Sorting",
    color: "#5b7fa6",
    subtopics: [
      {
        name: "Sorting Algorithms",
        problems: [
          "Selection Sort","Bubble Sort","Insertion Sorting","Merge Sorting","Quick Sorting"
        ]
      }
    ]
  },
  {
    section: "Arrays",
    color: "#e07b39",
    subtopics: [
      {
        name: "Arrays Easy",
        problems: [
          "Linear Search","Largest Element","Second Largest Element","Maximum Consecutive Ones","Left Rotate Array by One","Left Rotate Array by K Places","Move Zeros to End","Remove duplicates from sorted array","Find missing number","Union of two sorted arrays","Intersection of two sorted arrays"
        ]
      },
      {
        name: "Arrays Medium",
        problems: [
          "Majority Element-I","Leaders in an Array","Rearrange array elements by sign","Print the matrix in spiral manner","Pascal's Triangle I","Pascal's Triangle II","Pascal's Triangle III","Rotate matrix by 90 degrees","Two Sum","3 Sum","4 Sum","Sort an array of 0's 1's and 2's","Kadane's Algorithm","Next Permutation"
        ]
      },
      {
        name: "Arrays Hard",
        problems: [
          "Majority Element-II","Find the repeating and missing number","Count Inversions","Reverse Pairs","Maximum Product Subarray in an Array","Merge two sorted arrays without extra space"
        ]
      }
    ]
  },
  {
    section: "Hashing",
    color: "#6b8e5e",
    subtopics: [
      {
        name: "Hashing",
        problems: [
          "Longest Consecutive Sequence in an Array","Longest subarray with sum K","Count subarrays with given sum","Count subarrays with given xor K"
        ]
      }
    ]
  },
  {
    section: "Binary Search",
    color: "#3a7ca5",
    subtopics: [
      {
        name: "Binary Search 1D",
        problems: [
          "Search X in sorted array","Lower Bound","Upper Bound","Search insert position","Floor and Ceil in Sorted Array","First and last occurrence","Search in rotated sorted array-I","Search in rotated sorted array-II","Find minimum in Rotated Sorted Array","Find out how many times the array is rotated","Single element in sorted array","Find square root of a number","Find Nth root of a number","Find the smallest divisor","Koko eating bananas","Minimum days to make M bouquets","Aggressive Cows","Book Allocation Problem","Find peak element","Median of 2 sorted arrays","Kth element of 2 sorted arrays","Minimize Max Distance to Gas Station","Split array - largest sum"
        ]
      },
      {
        name: "BS(2D Arrays)",
        problems: [
          "Find row with maximum 1's","Search in a 2D matrix","Search in 2D matrix - II","Find Peak Element - II","Matrix Median"
        ]
      }
    ]
  },
  {
    section: "Recursion",
    color: "#e8a838",
    subtopics: [
      {
        name: "Recursion Easy",
        problems: [
          "Pow(x,n)","Generate Parentheses","Power Set"
        ]
      },
      {
        name: "Recursion Medium",
        problems: [
          "Check if there exists a subsequence with sum K","Count all subsequences with sum K","Combination Sum","Combination Sum II","Subsets I","Subsets II","Combination Sum III"
        ]
      },
      {
        name: "Recursion Hard",
        problems: [
          "Letter Combinations of a Phone Number","Palindrome partitioning","Word Search","N Queen","Rat in a Maze","M Coloring Problem","Sudoku Solver"
        ]
      }
    ]
  },
  {
    section: "Linked List",
    color: "#7b68b5",
    subtopics: [
      {
        name: "Single Linked List",
        problems: [
          "Introduction to Singly LinkedList","Traversal in Linked List","Deletion in Linked List","Insertion in Linked List","Deletion of the head of LL","Deletion of the tail of Linked List","Deletion of the Kth element of Linked List","Delete the element with value X","Insertion at the head of Linked List","Insertion at the tail of Linked List","Insertion at the Kth position of Linked List","Insertion before the value X in Linked List"
        ]
      },
      {
        name: "Double Linked List",
        problems: [
          "Introduction to Doubly LL","Deletion in Doubly LL","Insertion in DLL","Convert Array to Doubly Linked List","Delete head of Doubly Linked List","Delete Tail of Doubly Linked List","Delete Kth Element of Doubly Linked List","Removing given node in Doubly Linked List","Insert node before head in Doubly Linked List","Insert node before tail in Doubly Linked List","Insert node before (kth node) in Doubly Linked List","Insert before given node in Doubly Linked List"
        ]
      },
      {
        name: "Logic Building",
        problems: [
          "Add two numbers in Linked List","Segregate odd and even nodes in Linked List","Sort a Linked List of 0's 1's and 2's","Remove Nth node from the back of the LL","Reverse a LL"
        ]
      },
      {
        name: "Linked List Medium",
        problems: [
          "Add one to a number represented by Linked List","Find Middle of Linked List","Delete the middle node in LL","Check if LL is palindrome or not","Find the intersection point of Y LL","Detect a loop in Linked List","Find the starting point in LL","Length of loop in LL"
        ]
      },
      {
        name: "Linked List Hard",
        problems: [
          "Reverse LL in group of given size K","Rotate a Linked List","Merge two Sorted Lists","Flattening of LL","Sort LL","Clone a LL with random and next pointer","Delete all occurrences of a key in DLL","Remove duplicated from sorted DLL"
        ]
      }
    ]
  },
  {
    section: "Bit Manipulation",
    color: "#c97d4e",
    subtopics: [
      {
        name: "Bit Manipulation",
        problems: [
          "Minimum Bit Flips to Convert Number","Single Number - I","Single Number - II","Single Number - III","Divide two numbers without multiplication and division","Power Set Bit Manipulation","XOR of numbers in a given range"
        ]
      }
    ]
  },
  {
    section: "Greedy Algorithms",
    color: "#8aab6f",
    subtopics: [
      {
        name: "Greedy",
        problems: [
          "Assign Cookies","Lemonade Change","Jump Game - I","Shortest Job First","Job sequencing Problem","N meetings in one room","Non-overlapping Intervals","Insert Interval","Minimum number of platforms required for a railway"
        ]
      },
      {
        name: "Greedy Hard",
        problems: [
          "Valid Paranthesis Checker","Candy"
        ]
      }
    ]
  },
  {
    section: "Sliding Window / 2 Pointer",
    color: "#6b96c4",
    subtopics: [
      {
        name: "Sliding Window / 2 Pointer",
        problems: [
          "Maximum Points You Can Obtain from Cards","Longest Substring Without Repeating Characters","Max Consecutive Ones III","Fruit Into Baskets","Longest Substring With At Most K Distinct Characters","Longest Repeating Character Replacement","Minimum Window Substring","Number of Substrings Containing All Three Characters","Binary Subarrays With Sum","Count number of Nice subarrays"
        ]
      }
    ]
  },
  {
    section: "Stack / Queue",
    color: "#c26b6b",
    subtopics: [
      {
        name: "Stack/Queue Implementation",
        problems: [
          "Implementation using different DS","Implement Stack using Arrays","Implement Queue using Arrays","Implement Stack using Queue","Implement Queue using Stack","Implement stack using Linkedlist","Implement queue using Linkedlist","Balanced Paranthesis"
        ]
      },
      {
        name: "Stack/Queue FAQs",
        problems: [
          "Next Greater Element","Next Greater Element - 2","Asteroid Collision","Sum of Subarray Minimums","Sum of Subarray Ranges","Remove K Digits","Implement Min Stack","Sliding Window Maximum","Trapping Rainwater","Largest rectangle in a histogram","Maximum Rectangles","Stock span problem","Celebrity Problem","LRU Cache","LFU Cache"
        ]
      }
    ]
  },
  {
    section: "Binary Tree",
    color: "#5c8a70",
    subtopics: [
      {
        name: "Traversal",
        problems: [
          "Inorder Traversal","Preorder Traversal","Postorder Traversal","Level Order Traversal","Pre, Post, Inorder in one traversal","Maximum Depth in BT"
        ]
      },
      {
        name: "Binary Tree (Medium)",
        problems: [
          "Check if two trees are identical or not","Check for balanced binary tree","Diameter of Binary Tree","Maximum path sum","Check for symmetrical BTs","Zig Zag or Spiral Traversal","Boundary Traversal","Vertical Order Traversal","Top View of BT","Bottom view of BT","Right/Left View of BT","Print root to node path in BT","LCA in BT","Maximum Width of BT","Print all nodes at a distance of K in BT","Minimum time taken to burn the BT from a given Node","Count total nodes in a complete BT"
        ]
      },
      {
        name: "Construction Problems",
        problems: [
          "Requirements needed to construct a unique BT","Construct a BT from Preorder and Inorder","Construct a BT from Postorder and Inorder","Serialize and De-serialize BT"
        ]
      },
      {
        name: "Morris Traversal",
        problems: [
          "Morris Inorder Traversal","Morris Preorder Traversal"
        ]
      },
      {
        name: "Binary Search Tree",
        problems: [
          "Search in BST","Floor and Cell in a BST","Insert a given node in BST","Delete a node in BST","Kth Smallest and Largest element in BST","Check if a tree is a BST or not","LCA in BST","Construct a BST from a preorder traversal","Inorder successor and predecessor in BST","BST Iterator","Two sum in BST","Correct BST with two nodes swapped","Largest BST in Binary Tree"
        ]
      }
    ]
  },
  {
    section: "Heaps",
    color: "#b07a3e",
    subtopics: [
      {
        name: "Heaps",
        problems: [
          "Heapify Algorithm","Build heap from a given Array","Implement Min Heap","Implement Max Heap","Check if an array represents a min heap","Convert Min Heap to Max Heap","Heap Sort","K-th Largest element in an array","Kth largest element in a stream of running integers"
        ]
      }
    ]
  },
  {
    section: "Graphs",
    color: "#4a8a8a",
    subtopics: [
      {
        name: "Graphs Traversal",
        problems: [
          "Traversal Techniques","Connected Components","Number of provinces","Number of islands","Flood fill algorithm","Number of enclaves","Rotten Oranges","Distance of nearest cell having one","Surrounded Regions","Number of distinct islands"
        ]
      },
      {
        name: "Graphs Cycles",
        problems: [
          "Detect a cycle in an undirected graph","Bipartite graph","Topological sort or Kahn's algorithm","Detect a cycle in a directed graph"
        ]
      },
      {
        name: "Graphs Hard",
        problems: [
          "Find eventual safe states","Course Schedule I","Course Schedule II","Alien Dictionary","Shortest path in DAG","Shortest path in undirected graph with unit weights","Word ladder I","Word ladder II"
        ]
      },
      {
        name: "Shortest Path Algo",
        problems: [
          "Dijkstra's algorithm","Print Shortest Path","Shortest Distance in a Binary Maze","Path with minimum effort","Cheapest flight within K stops","Minimum multiplications to reach end","Number of ways to arrive at destination","Bellman ford algorithm","Floyd warshall algorithm","Find the city with the smallest number of neighbors"
        ]
      },
      {
        name: "Minimum Spanning Tree",
        problems: [
          "MST theory","Disjoint Set","Find the MST weight","Number of operations to make network connected","Accounts merge","Number of islands II","Making a large island","Most stones removed with same row or column","Kosaraju's algorithm","Bridges in graph","Articulation point in graph"
        ]
      }
    ]
  },
  {
    section: "Dynamic Programming",
    color: "#7a6b9e",
    subtopics: [
      {
        name: "DP Basics",
        problems: [
          "Climbing stairs","Frog Jump","Frog jump with K distances","Maximum sum of non adjacent elements","House robber","Ninja's training"
        ]
      },
      {
        name: "DP on Grids",
        problems: [
          "Grid unique paths","Unique paths II","Minimum Falling Path Sum","Triangle","Cherry pickup II"
        ]
      },
      {
        name: "DP on Stocks",
        problems: [
          "Best time to buy and sell stock","Best time to buy and sell stock II","Best time to buy and sell stock III","Best time to buy and sell stock IV","Best time to buy and sell stock with transaction fees"
        ]
      },
      {
        name: "DP on subsequences",
        problems: [
          "Subset sum equals to target","Partition equal subset sum","Partition a set into two subsets with minimum absolute sum difference","Count subsets with sum K","Count partitions with given difference","0 and 1 Knapsack","Minimum coins","Target sum","Coin change II","Unbounded knapsack","Rod cutting problem"
        ]
      },
      {
        name: "LIS",
        problems: [
          "Longest Increasing Subsequence","Print Longest Increasing Subsequence","Largest Divisible Subset","Longest String Chain","Longest Bitonic Subsequence","Number of Longest Increasing Subsequences"
        ]
      },
      {
        name: "DP on strings",
        problems: [
          "Longest common subsequence","Longest common substring","Longest palindromic subsequence","Minimum insertions to make string palindrome","Minimum insertions or deletions to convert string A to B","Shortest common supersequence","Distinct subsequences","Edit distance","Wildcard matching"
        ]
      },
      {
        name: "MCM DP",
        problems: [
          "Matrix chain multiplication","Minimum cost to cut the stick","Burst balloons","Palindrome partitioning II"
        ]
      }
    ]
  },
  {
    section: "Tries",
    color: "#5a8a6a",
    subtopics: [
      {
        name: "Tries",
        problems: [
          "Trie Implementation and Operations","Trie Implementation and Advanced Operations","Longest Word with All Prefixes","Number of distinct substrings in a string","Maximum XOR of two numbers in an array","Maximum Xor with an element from an array"
        ]
      }
    ]
  },
  {
    section: "Strings (Advanced)",
    color: "#c44d4d",
    subtopics: [
      {
        name: "Strings Advanced",
        problems: [
          "Reverse every word in a string","Minimum number of bracket reversals to make an expression balanced","Count and say","Rabin Karp Algorithm","Z function","KMP Algorithm or LPS array","Shortest Palindrome","Longest happy prefix"
        ]
      }
    ]
  },
  {
    section: "Maths (Advanced)",
    color: "#4a7ab5",
    subtopics: [
      {
        name: "Maths Advanced",
        problems: [
          "Print all primes till N","Prime factorisation of a Number","Count primes in range L to R"
        ]
      }
    ]
  }
];

const STORAGE_KEY = "tuf_dsa_tracker_v2";

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch { return {}; }
}

function saveState(state) {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch {}
}

export default function App() {
  const [state, setState] = useState(loadState);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all"); // all | pending | done | revisit
  const [collapsed, setCollapsed] = useState({});
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => { saveState(state); }, [state]);

  const toggle = (key, field) => {
    setState(prev => {
      const cur = prev[key] || {};
      return { ...prev, [key]: { ...cur, [field]: !cur[field] } };
    });
  };

  const setNote = (noteKey, val) => {
    setState(prev => ({ ...prev, [noteKey]: val }));
  };

  const toggleSection = (sec) => {
    setCollapsed(prev => ({ ...prev, [sec]: !prev[sec] }));
  };

  // Stats
  const allProblems = DSA_DATA.flatMap(s => s.subtopics.flatMap(st => st.problems.map(p => `${s.section}::${st.name}::${p}`)));
  const totalCount = allProblems.length;
  const doneCount = allProblems.filter(k => state[k]?.done).length;
  const revisitCount = allProblems.filter(k => state[k]?.revisit).length;
  const pct = totalCount ? Math.round((doneCount / totalCount) * 100) : 0;

  const matchesSearch = (p) => !search || p.toLowerCase().includes(search.toLowerCase());
  const matchesFilter = (k) => {
    if (filter === "all") return true;
    if (filter === "done") return !!state[k]?.done;
    if (filter === "pending") return !state[k]?.done;
    if (filter === "revisit") return !!state[k]?.revisit;
    return true;
  };

  return (
    <div style={{ minHeight: "100vh", background: "#0f1117", color: "#e8eaf0", fontFamily: "'Inter', 'Segoe UI', sans-serif" }}>
      {/* Header */}
      <div style={{ background: "linear-gradient(135deg, #1a1d2e 0%, #12151f 100%)", borderBottom: "1px solid #2a2d3e", padding: "24px 20px 20px", position: "sticky", top: 0, zIndex: 100 }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
            <div>
              <h1 style={{ margin: 0, fontSize: 22, fontWeight: 700, letterSpacing: "-0.5px", color: "#fff" }}>
                TUF+ DSA Sheet
              </h1>
              <p style={{ margin: "2px 0 0", fontSize: 12, color: "#666" }}>Track your progress across {totalCount} problems</p>
            </div>
            <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: 22, fontWeight: 700, color: "#6ee7b7" }}>{doneCount}</div>
                <div style={{ fontSize: 10, color: "#666", textTransform: "uppercase", letterSpacing: 1 }}>Done</div>
              </div>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: 22, fontWeight: 700, color: "#fbbf24" }}>{revisitCount}</div>
                <div style={{ fontSize: 10, color: "#666", textTransform: "uppercase", letterSpacing: 1 }}>Revisit</div>
              </div>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: 22, fontWeight: 700, color: "#a78bfa" }}>{pct}%</div>
                <div style={{ fontSize: 10, color: "#666", textTransform: "uppercase", letterSpacing: 1 }}>Complete</div>
              </div>
            </div>
          </div>
          {/* Progress bar */}
          <div style={{ marginTop: 14, height: 4, background: "#2a2d3e", borderRadius: 2, overflow: "hidden" }}>
            <div style={{ height: "100%", width: `${pct}%`, background: "linear-gradient(90deg, #6ee7b7, #a78bfa)", borderRadius: 2, transition: "width 0.4s" }} />
          </div>
          {/* Controls */}
          <div style={{ marginTop: 14, display: "flex", gap: 10, flexWrap: "wrap" }}>
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search problems..."
              style={{ flex: 1, minWidth: 180, padding: "7px 12px", borderRadius: 6, border: "1px solid #2a2d3e", background: "#1a1d2e", color: "#e8eaf0", fontSize: 13, outline: "none" }}
            />
            {["all","done","pending","revisit"].map(f => (
              <button key={f} onClick={() => setFilter(f)} style={{ padding: "7px 14px", borderRadius: 6, border: "none", cursor: "pointer", fontSize: 12, fontWeight: 600, textTransform: "capitalize", background: filter === f ? "#6ee7b7" : "#1e2132", color: filter === f ? "#0f1117" : "#888", transition: "all 0.15s" }}>
                {f}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Section nav */}
      <div style={{ background: "#12151f", borderBottom: "1px solid #1e2132", overflowX: "auto", whiteSpace: "nowrap" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 20px", display: "flex", gap: 4 }}>
          {DSA_DATA.map(s => {
            const sProbs = s.subtopics.flatMap(st => st.problems.map(p => `${s.section}::${st.name}::${p}`));
            const sDone = sProbs.filter(k => state[k]?.done).length;
            return (
              <button key={s.section} onClick={() => { setActiveSection(s.section); document.getElementById(`sec-${s.section}`)?.scrollIntoView({ behavior: "smooth", block: "start" }); }} style={{ padding: "10px 12px", background: "none", border: "none", cursor: "pointer", fontSize: 11, color: "#888", borderBottom: activeSection === s.section ? `2px solid ${s.color}` : "2px solid transparent", transition: "all 0.15s", whiteSpace: "nowrap" }}>
                {s.section} <span style={{ color: s.color, fontWeight: 700 }}>{sDone}/{sProbs.length}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main content */}
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "24px 20px 60px" }}>
        {DSA_DATA.map(section => {
          const sProbs = section.subtopics.flatMap(st => st.problems.map(p => `${section.section}::${st.name}::${p}`));
          const sDone = sProbs.filter(k => state[k]?.done).length;
          const sTotal = sProbs.length;
          const sPct = sTotal ? Math.round((sDone / sTotal) * 100) : 0;

          // Check if any problems match filter/search
          const anyVisible = section.subtopics.some(st =>
            st.problems.some(p => {
              const k = `${section.section}::${st.name}::${p}`;
              return matchesSearch(p) && matchesFilter(k);
            })
          );
          if (!anyVisible) return null;

          const isCollapsed = collapsed[section.section];

          return (
            <div key={section.section} id={`sec-${section.section}`} style={{ marginBottom: 28 }}>
              {/* Section header */}
              <div onClick={() => toggleSection(section.section)} style={{ display: "flex", alignItems: "center", gap: 12, cursor: "pointer", padding: "12px 16px", background: "#1a1d2e", borderRadius: isCollapsed ? 10 : "10px 10px 0 0", borderLeft: `4px solid ${section.color}`, userSelect: "none" }}>
                <span style={{ fontSize: 16, color: "#888" }}>{isCollapsed ? "▶" : "▼"}</span>
                <h2 style={{ margin: 0, fontSize: 15, fontWeight: 700, color: "#fff", flex: 1 }}>{section.section}</h2>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{ height: 4, width: 80, background: "#2a2d3e", borderRadius: 2, overflow: "hidden" }}>
                    <div style={{ height: "100%", width: `${sPct}%`, background: section.color, borderRadius: 2 }} />
                  </div>
                  <span style={{ fontSize: 12, color: section.color, fontWeight: 700, minWidth: 60, textAlign: "right" }}>{sDone}/{sTotal}</span>
                </div>
              </div>

              {!isCollapsed && (
                <div style={{ background: "#161925", borderRadius: "0 0 10px 10px", border: `1px solid #2a2d3e`, borderTop: "none", overflow: "hidden" }}>
                  {/* Section notes */}
                  <div style={{ padding: "12px 16px", borderBottom: "1px solid #1e2132", background: "#13161f" }}>
                    <div style={{ fontSize: 10, color: section.color, textTransform: "uppercase", letterSpacing: 1, fontWeight: 700, marginBottom: 6 }}>Section Notes</div>
                    <textarea
                      value={state[`note::${section.section}`] || ""}
                      onChange={e => setNote(`note::${section.section}`, e.target.value)}
                      placeholder={`Add notes for ${section.section}...`}
                      rows={2}
                      style={{ width: "100%", background: "#0f1117", border: "1px solid #2a2d3e", borderRadius: 6, color: "#c8d0e0", fontSize: 12, padding: "8px 10px", resize: "vertical", outline: "none", boxSizing: "border-box", fontFamily: "inherit", lineHeight: 1.5 }}
                    />
                  </div>

                  {/* Subtopics */}
                  {section.subtopics.map(sub => {
                    const visibleProbs = sub.problems.filter(p => {
                      const k = `${section.section}::${sub.name}::${p}`;
                      return matchesSearch(p) && matchesFilter(k);
                    });
                    if (!visibleProbs.length) return null;

                    const subDone = sub.problems.filter(p => state[`${section.section}::${sub.name}::${p}`]?.done).length;

                    return (
                      <div key={sub.name} style={{ borderBottom: "1px solid #1e2132" }}>
                        {/* Subtopic header */}
                        <div style={{ padding: "8px 16px", display: "flex", alignItems: "center", justifyContent: "space-between", background: "#14172280" }}>
                          <span style={{ fontSize: 12, fontWeight: 600, color: "#aab0c4" }}>{sub.name}</span>
                          <span style={{ fontSize: 11, color: "#555" }}>{subDone}/{sub.problems.length}</span>
                        </div>

                        {/* Problems table */}
                        <div>
                          {visibleProbs.map((prob, i) => {
                            const k = `${section.section}::${sub.name}::${prob}`;
                            const s = state[k] || {};
                            return (
                              <div key={prob} style={{ display: "flex", alignItems: "center", padding: "9px 16px", gap: 12, borderTop: i > 0 ? "1px solid #1a1d2e" : "none", background: s.done ? "#131c18" : "transparent", transition: "background 0.15s" }}>
                                {/* Done checkbox */}
                                <div onClick={() => toggle(k, "done")} style={{ width: 18, height: 18, borderRadius: 4, border: s.done ? "none" : "2px solid #333", background: s.done ? "#6ee7b7" : "transparent", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", flexShrink: 0, transition: "all 0.15s" }}>
                                  {s.done && <span style={{ color: "#0f1117", fontSize: 11, fontWeight: 700 }}>✓</span>}
                                </div>
                                {/* Problem name */}
                                <span style={{ flex: 1, fontSize: 13, color: s.done ? "#6ee7b7" : "#c8d0e0", textDecoration: s.done ? "line-through" : "none", opacity: s.done ? 0.7 : 1 }}>{prob}</span>
                                {/* Revisit toggle */}
                                <div onClick={() => toggle(k, "revisit")} title="Mark for revisit" style={{ padding: "2px 8px", borderRadius: 4, fontSize: 10, fontWeight: 700, cursor: "pointer", border: s.revisit ? "none" : "1px solid #333", background: s.revisit ? "#fbbf24" : "transparent", color: s.revisit ? "#0f1117" : "#555", transition: "all 0.15s", flexShrink: 0 }}>
                                  ↺
                                </div>
                                {/* Revision count */}
                                <div style={{ display: "flex", alignItems: "center", gap: 4, flexShrink: 0 }}>
                                  <button onClick={() => setState(prev => { const cur = prev[k] || {}; return { ...prev, [k]: { ...cur, rev: Math.max(0,(cur.rev||0)-1) } }; })} style={{ width: 18, height: 18, borderRadius: 3, border: "1px solid #333", background: "transparent", color: "#666", cursor: "pointer", fontSize: 12, display: "flex", alignItems: "center", justifyContent: "center", padding: 0 }}>-</button>
                                  <span style={{ minWidth: 16, textAlign: "center", fontSize: 11, color: (state[k]?.rev || 0) > 0 ? "#a78bfa" : "#444" }}>{state[k]?.rev || 0}</span>
                                  <button onClick={() => setState(prev => { const cur = prev[k] || {}; return { ...prev, [k]: { ...cur, rev: (cur.rev||0)+1 } }; })} style={{ width: 18, height: 18, borderRadius: 3, border: "1px solid #333", background: "transparent", color: "#666", cursor: "pointer", fontSize: 12, display: "flex", alignItems: "center", justifyContent: "center", padding: 0 }}>+</button>
                                </div>
                              </div>
                            );
                          })}
                        </div>

                        {/* Subtopic notes */}
                        <div style={{ padding: "10px 16px 12px", background: "#0f111880" }}>
                          <textarea
                            value={state[`note::${section.section}::${sub.name}`] || ""}
                            onChange={e => setNote(`note::${section.section}::${sub.name}`, e.target.value)}
                            placeholder={`Notes for ${sub.name}...`}
                            rows={2}
                            style={{ width: "100%", background: "#0f1117", border: "1px solid #1e2132", borderRadius: 6, color: "#8892a4", fontSize: 11, padding: "7px 10px", resize: "vertical", outline: "none", boxSizing: "border-box", fontFamily: "inherit", lineHeight: 1.5 }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}