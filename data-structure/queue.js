class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

class Queue {
	constructor() {
		this.first = null;
		this.last = null;
		this.size = 0;
    }
	dequeue(){
		if (!this.first) return undefined;
		var node = this.first;
		this.first = node.next;
		this.size--;
		if (this.size === 0 ){
			this.last = null;
		}
		return node;
	}
	enqueue(val){
		var newNode = new Node(val);
		if (!this.first) {
			this.first = newNode;
			this.last = this.first;
		}
		else {
			this.last.next = newNode;
			this.last = newNode;
		}
		return ++this.size;
	}
	print(){
        var arr = [];
        var current = this.first;
        while(current){
            arr.push(current.val)
            current = current.next
        }
        console.log(arr);
    }
}