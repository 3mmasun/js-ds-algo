class Node {
	constructor(val) {
		this.val = val;
		this.right = null;
		this.left = null;
	}
}

class BST {
	constructor() {
		this.root = null;
    }
    insert(val){
        var node = new Node(val);
        if (!this.root) {
            this.root = node;
            return this.root;
        }
        let current = this.root;
        while(true){
            if (val === current.val) return undefined;
            if(val < current.val){
                if(current.left === null){
                    current.left = node;
                    return this;
                }
                current = current.left;
            }
            if(val > current.val){
                if(current.right === null){
                    current.right = node;
                    return this;
                }
                current = current.right;
            }
        }
    }
    find(val){
        if (!this.root) return null;
        let current = this.root;
        while(true){
            if (val === current.val) return current;
            if(val < current.val){
                if(current.left === null) return null;
                current = current.left;
            }
            if(val > current.val){
                if(current.right === null) return null;
                current = current.right;
            }
        }
    }
    contains(val){
        if (!this.root) return false;
        let current = this.root;
        while(true){
            if (val === current.val) return true;
            if(val < current.val){
                if(current.left === null) return false;
                current = current.left;
            }
            if(val > current.val){
                if(current.right === null) return false;
                current = current.right;
            }
        }
    }
    BFS(){
        var node = this.root,
            data = [],
            queue = [];
        queue.push(node);

        while(queue.length){
           node = queue.shift();
           data.push(node.val);
           if(node.left) queue.push(node.left);
           if(node.right) queue.push(node.right);
        }
        return data;
    }
    DFSPreOrder(){
        var data = [];
        function traverse(node){
            data.push(node.val);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
    }
    DFSInOrder(){
        var data = [];
        function traverse(node){
            if(node.left) traverse(node.left);
            data.push(node.val);
            if(node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
    }
    DFSPostOrder(){
        var data = [];
        function traverse(node){
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            data.push(node.val);
        }
        traverse(this.root);
        return data;
    }
}
//      10
//     /   \
//   6      15
//  / \       \
// 3   8      20 

var tree = new BST();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);

tree.BFS() // [10, 6, 15, 3, 8, 20]
tree.DFSPreOrder() // [10, 6, 3, 8, 15, 20]
tree.DFSInOrder() // [3, 6, 8, 10, 15, 20]
tree.DFSPostOrder() // [3, 8, 6, 20, 15, 10]