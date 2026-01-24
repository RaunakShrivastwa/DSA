import Node from "../Node";

export default class BinaryTreeNode<T> {
  // create your binary tree from an array

  private index : number = -1;

  createBinaryTree(arr: T[]): Node<T> | null {
    this.index++;
     if(arr.length === 0 || arr[this.index] === -1) {
        return null;
     }
     let node: Node<T> = new Node<T>(arr[this.index]);
     node.left =  this.createBinaryTree(arr);
     node.right = this.createBinaryTree(arr);
     return node;
  }

  //print the binary tree in order
  preOrderTraversal(root: Node<T> | null): void {
    if(root === null){
        return;
    }
    console.log(root.value);
    this.preOrderTraversal(root.left);
    this.preOrderTraversal(root.right);
    
  }

  inOrderTraversal(root: Node<T> | null): void {
    if(root === null){
        return;
    }
    this.inOrderTraversal(root.left);
    console.log(root.value);
    this.inOrderTraversal(root.right);
  }

  postOrderTraversal(root: Node<T> | null): void {
    if(root === null){
        return;
    }
    this.postOrderTraversal(root.left);
    this.postOrderTraversal(root.right);
    console.log(root.value);    
  }

  
  
}
