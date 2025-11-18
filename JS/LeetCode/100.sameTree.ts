
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

const helper = (node: TreeNode | null) => {
    const queue: (TreeNode | null)[] = [];
    queue.unshift(node);

    let nodeStr = "";

    while (queue.length > 0) {
        const current = queue.pop();
        if (current) {
            nodeStr += current.val;
        }

        if (current?.left) queue.unshift(current.left);
        if (current?.right) queue.unshift(current.right);
    }
    return nodeStr
}

export function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    const x = helper(p);
    const y = helper(q);
    return x === y;

};