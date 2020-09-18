class Node {
    constructor(data) {
        this.data = data;
        this.right = null;
        this.left = null;
    };
};

class BST {
    constructor() {
        this.root = null;
    };

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

    insert(data) {

        const newNode = new Node(data);
        if(this.root == null)
            this.root = newNode;
        else
            this.insertNewNode(this.root, newNode)
    }
};

const bst1 = new BST();
bst1.insert(20);
bst1.insert(9);
bst1.insert(23);
bst1.insert(22);
console.log(bst1);