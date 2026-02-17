class avlNode{
    val:number = 0;
    left:avlNode | null;
    right:avlNode | null;
    height:number;

    constructor(val:number){
        this.val = val;
        this.left = null;
        this.right = null;
        this.height = 1;    
    }

}

export default avlNode