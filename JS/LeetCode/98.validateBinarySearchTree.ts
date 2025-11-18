class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}


const testcase = new TreeNode(5, new TreeNode(4, null, null), new TreeNode(6, new TreeNode(3, null, null), new TreeNode(7, null, null)))



function isValidBST(root: TreeNode | null): boolean {
    const visited: number[] = []
    const dfs = (tree: TreeNode, visited: number[]): boolean => {
        if (tree?.left) {
            if (tree.left.val > tree.val) {
                return false;
            }
            if(!dfs(tree.left, visited)) {
                return false
            }
        }

        if (tree.val <= visited[visited.length - 1]) {
            return false;
        }
        visited.push(tree.val);

        
        if (tree?.right) {
            if (tree.right.val < tree.val) {
                return false;
            }
            if(!dfs(tree.right, visited)) {
                return false
            }
        }

        return true;
    }
    if(!root) return true;
    
    return dfs(root, visited);
};

const x = isValidBST(testcase);