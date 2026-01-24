import Node from "../Node";

export class BST<T extends number> {
  root: Node<T> | null = null;

  createBST(arr: T[]): Node<T> | null {
    if (arr.length === 0) {
      return null
    }

    this.helper(arr, 0);
    return this.root;
  }

  // start++ recursion
  private helper(arr: T[], start: number): void {
    if (start >= arr.length) return;

    this.root = this.insert(this.root, arr[start]);
    this.helper(arr, start + 1);
  }

  // standard BST insert
  private insert(root: Node<T> | null, data: T): Node<T> {
    if (root === null) {
      return new Node<T>(data);
    }

    if (data >= root.value) {
      root.right = this.insert(root.right, data);
    } else {
      root.left = this.insert(root.left, data);
    }

    return root;
  }

  preOrder(root: Node<T> | null): void {
    if (!root) return;
    console.log(root.value);
    this.preOrder(root.left);
    this.preOrder(root.right);
  }

  height(root: Node<T> | null): number {
     if(root == null){
      return 0;
     }

     let leftH = this.height(root.left);
      let rightH = this.height(root.right);
      return Math.max(leftH, rightH) + 1;
  }

  checkBalanced(root:Node<T> | null):boolean{
       if(root == null){
        return true;
       }
        let leftH = this.height(root.left);
        let rightH = this.height(root.right);
        let diff = Math.abs(leftH - rightH);

        if(diff>1){
          return false;
        }
        return this.checkBalanced(root.left) && this.checkBalanced(root.right);
  }

}
