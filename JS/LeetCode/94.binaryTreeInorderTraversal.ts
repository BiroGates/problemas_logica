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

export function inorderTraversal(root: TreeNode | null): number[] {
    const visited: number[] = [];
    const dfs = (node: TreeNode | null) => {
        if (node) {
            if (node?.left) {
                dfs(node.left)
            }   
            visited.push(node.val)
            if(node?.right) {
                dfs(node.right)
            }
        }
    }
    dfs(root);
    return visited;
};