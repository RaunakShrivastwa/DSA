import Node from "./Node";

export default class BinaryTree<T> {
  private index: number = -1;

  createBinaryTree(arr: T[]): Node<T> | null {
    this.index++;
    if (arr.length === 0 || arr[this.index] === -1) {
      return null;
    }
    const node :Node<T> = new Node<T>(arr[this.index]);
    node.left = this.createBinaryTree(arr);
    node.right = this.createBinaryTree(arr);
    return node;
  }

  preOrder(root:Node<T> | null): void{
    if(root === null){
      return;
    }
    console.log(root.value);
    this.preOrder(root.left);
    this.preOrder(root.right);
    
  }

}
