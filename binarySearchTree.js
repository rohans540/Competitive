//Binary Search Tree implementation 
//Author: Rohan Sharma

//Node class containing 3 data members: data left and right
class Node {
    constructor(data) {
        this.data = data;
        this.right = null;
        this.left = null;
    };
};

//BST class implementation using Node class
class BST {
    constructor() {
        this.root = null;
    };

/* insertNewNode(node, newNode) method takes two parameters i.e. node where the new node is to be 
added and a newNode which is to be added to the tree this method traverses through the tree 
and add the newNode to the respective position */

    insertNewNode(node, newNode) {
        if(newNode.data < node.data){
            if(node.left == null) {
                node.left = newNode
            } else {
                this.insertNewNode(node.left, newNode);
            }
        } else {
            if(node.right == null) {
                node.right = newNode;
            } else{
                this.insertNewNode(node.right, newNode);
            }
        }
    };

//insert() method to insert a new node in the tree using insertNewNode method
    insert(data) {

        const newNode = new Node(data);
        if(this.root == null)
            this.root = newNode;
        else
            this.insertNewNode(this.root, newNode)
    };

//inOrder(node) method to traverse the binary search tree in inOrder sequence i.e. left>>root>>right
    inOrder(node) {
        if(node !== null){
            this.inOrder(node.left);
            console.log(node.data);
            this.inOrder(node.right);
        }
    };

//preOrder(node) method to traverse the binary search tree in preOrder sequencing i.e. root>>left>>right
    preOrder(node) {
        if(node !== null){
            console.log(node.data);
            this.preOrder(node.left);
            this.preOrder(node.right);
        };
    }
//postOrder(node) method to traverse the binary search tree in postOrder sequencing i.e. left>>right>>root
    postOrder(node) {
        if(node !== null){
            this.postOrder(node.left);
            this.postOrder(node.right);
            console.log(node.data);
        }
    };

//findMinimum(node) method to find the minimum key from the tree.
    findMinimum(node) {
        if(node.left == null) {
            return node.data;
        } else {
            return this.findMinimum(node.left);
        }
    };

//findMaximum(node) method to find the maximum key from the tree.
    findMaximum(node) {
        if(node.right == null) {
            return node.data;
        } else {
            return this.findMaximum(node.right);
        }
    };

//height(node) method to return the height of the tree.
    height(node) {
        if(node == null) {
            return 0;
        } else {
            let lheight = this.height(node.left);
            let rheight = this.height(node.right);

            return lheight > rheight ? lheight+1 : rheight+1;
        }
    }

};

//Test cases:
const bst1 = new BST();
bst1.insert(20);
bst1.insert(9);
bst1.insert(23);
bst1.insert(22);
bst1.insert(26);
bst1.insert(3);
bst1.insert(13);
bst1.insert(6);

// console.log(bst1);
bst1.postOrder(bst1.root);

console.log('minimum is '+bst1.findMinimum(bst1.root));
console.log('maximum is '+bst1.findMaximum(bst1.root));
console.log("Height of tree is "+bst1.height(bst1.root));