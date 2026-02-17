import avlNode from "./AvlNode";

export default class AvlTreeOperation{

    insert(root:avlNode | null,key:number):avlNode | null{
        // if root does not exist
        if(!root){
            return new avlNode(key);
        }
        // if key is less than root value
        else if(key<root.val){
            root.left = this.insert(root.left,key);
        }

        // if key is greater than root value
        else if(key>root.val){
            root.right = this.insert(root.right,key);
        }
        
        // if key is equal to root value
        else{
            return root;
        }
        // update height of node
        root.height = 1+ Math.max(this.getHeight(root.left),this.getHeight(root.right));
        
        // check balance factor
        let balance = this.balancedFactor(root);
        

        // LL rotation
        if(balance>1 && root.left && key<root.left.val){
            return this.rightRotation(root);
            
        }

        // RR rotation
        else if(balance<-1 && root.right && key>root.right.val){
            return this.leftRotation(root);
            
        }

        // LR rotation
        else if(balance >1 && root.left && key>root.left.val){
            console.log("LR");
            root.left = this.leftRotation(root.left);
            return this.rightRotation(root);
            
        }
        // RL rotation
        else if(balance<-1 && root.right && key<root.right?.val){
            root.right = this.rightRotation(root.right);
            return this.leftRotation(root);
            
        }else{
           return root;
        }
        return root;
        // not unbalanced


    }

    rightRotation(root:avlNode | null):avlNode | null{
        if (!root || !root.left) {
            return root;
        }
        let newRoot: avlNode = root.left;
        let leftRootChild: avlNode | null = newRoot.right;
        newRoot.right = root;
        root.left = leftRootChild;

        // Update heights
        root.height = 1 + Math.max(this.getHeight(root.left), this.getHeight(root.right));
        newRoot.height = 1 + Math.max(this.getHeight(newRoot.left), this.getHeight(newRoot.right));
        return newRoot;
    }

    leftRotation(root:avlNode | null) : avlNode | null{
         if(!root || !root.right){
            return null;
         }
         let newNode :avlNode = root.right;
         let newNodeRightChild =  newNode.left;
         newNode.left = root;
         root.right = newNodeRightChild;
         root.height = 1+ Math.max(this.getHeight(root.left),this.getHeight(root.right));
         newNode.height = 1+ Math.max(this.getHeight(root.left),this.getHeight(root.right));
         return newNode;
    }

    balancedFactor(root:avlNode | null):number{
        if(!root){
            return 0;
        }
        return this.getHeight(root.left) - this.getHeight(root.right);
    }


    getHeight(root:avlNode | null):number{
        if(!root){
            return 0;
        }
        return root.height;
    }

    preorder(root:avlNode | null):void{
       if(!root){
        return;
       }
        console.log(root.val);
        this.preorder(root.left);
        this.preorder(root.right);
    }

}