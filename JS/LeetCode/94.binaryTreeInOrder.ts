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



function inorderTraversal(root: TreeNode | null): number[] {
    const queue: (TreeNode | null)[]  = [];
    const printOrder: number[] = [];
    queue.push(root)


    const dfs = (tree: TreeNode | null) => {
        if (tree) {
            if(tree.left) {
                dfs(tree.left)            
            }

            if(tree.right) {
                dfs(tree.right)
            }
            printOrder.push(tree.val)
        }
    }    


    while(queue.length > 0) {
        const current = queue.pop() ?? null;
        dfs(current)
    }
    console.log(printOrder);
    return printOrder;
};