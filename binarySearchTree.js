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
    }
};

//Test cases:
const bst1 = new BST();
bst1.insert(20);
bst1.insert(9);
bst1.insert(23);
bst1.insert(22);
console.log(bst1);