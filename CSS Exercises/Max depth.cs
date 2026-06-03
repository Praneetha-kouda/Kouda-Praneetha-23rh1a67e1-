/**
 * LeetCode 104: Maximum Depth of Binary Tree
 * 
 * Definition for binary tree node.
 */
class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;
    TreeNode() {}
    TreeNode(int val) { this.val = val; }
    TreeNode(int val, TreeNode left, TreeNode right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

/**
 * Time: O(n), Space: O(h)
 */
public class MaximumDepthOfBinaryTree {
    
    public int maxDepth(TreeNode root) {
        // Base case: empty tree
        if (root == null) return 0;
        
        // Recursively find depth of subtrees
        int leftDepth = maxDepth(root.left);
        int rightDepth = maxDepth(root.right);
        
        // Current depth = max of children + 1
        return Math.max(leftDepth, rightDepth) + 1;
    }
    
    public static void main(String[] args) {
        MaximumDepthOfBinaryTree solution = new MaximumDepthOfBinaryTree();
        
        System.out.println("=== Maximum Depth of Binary Tree ===");
        
        // Test case 1: [3,9,20,null,null,15,7]
        //       3
        //      / \
        //     9  20
        //       /  \
        //      15   7
        TreeNode root1 = new TreeNode(3,
            new TreeNode(9),
            new TreeNode(20, new TreeNode(15), new TreeNode(7))
        );
        System.out.println("Test 1 - Expected: 3, Got: " + solution.maxDepth(root1));
        
        // Test case 2: [1,null,2]
        //       1
        //        \
        //         2
        TreeNode root2 = new TreeNode(1, null, new TreeNode(2));
        System.out.println("Test 2 - Expected: 2, Got: " + solution.maxDepth(root2));
        
        // Test case 3: []
        TreeNode root3 = null;
        System.out.println("Test 3 - Expected: 0, Got: " + solution.maxDepth(root3));
        
        // Test case 4: [0]
        TreeNode root4 = new TreeNode(0);
        System.out.println("Test 4 - Expected: 1, Got: " + solution.maxDepth(root4));
        
        // Test case 5: Balanced tree with depth 4
        //           1
        //          / \
        //         2   3
        //        / \
        //       4   5
        //      /
        //     6
        TreeNode root5 = new TreeNode(1,
            new TreeNode(2, new TreeNode(4, new TreeNode(6), null), new TreeNode(5)),
            new TreeNode(3)
        );
        System.out.println("Test 5 - Expected: 4, Got: " + solution.maxDepth(root5));
    }
}