class Node {
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }

    insert(data){

        if(this.root === null){
            this.root = new Node(data)
        }else{
            this.insertNode(this.root, data);
        }
    }
    insertNode(parentNode, data){
        if(parentNode.data < data){
            if(parentNode.right === null){
                parentNode.right = new Node(data);
            } else{
                this.insertNode(parentNode.right, data)
            }
        }else{
            if(parentNode.left === null){
                parentNode.left = new Node(data);
            }else{
                this.insertNode(parentNode.left, data)
            }
        }
    }
    inorder(node){
        if(node !== null)
        {
            this.inorder(node.left);
            console.log(node.data);
            this.inorder(node.right);
        }
    }
    findNode(node, data){
        if(node === null){
            return `${data} is not find!`;
        }
        if (node.data < data){
            return this.findNode(node.right, data);
        } else if(node.data > data){
            return this.findNode(node.left, data)
        } else{
            return `${data} is find!`
        }
    }
}

var binaryTree = new BinarySearchTree();
const array = [7, 5, 1, 8, 3, 6, 0, 9, 4, 2];
for (const number in array) {
    binaryTree.insert(number)
}
binaryTree.inorder(binaryTree.root)
console.log(binaryTree.findNode(binaryTree.root, 8));
console.log(binaryTree.findNode(binaryTree.root, 18));