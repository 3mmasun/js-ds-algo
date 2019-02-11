class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

class Stack {
	constructor() {
		this.first = null;
		this.last = null;
		this.size = 0;
    }
	pop(){
		if (!this.first) return undefined;
		var node = this.first;
		this.first = node.next;
		this.size--;
		if (this.size === 0 ){
			this.last = null;
		}
		return node;
	}
	push(val){
		var newhead = new Node(val);
		if (!this.first) {
			this.first = newhead;
			this.last = this.first;
		} else {
			newhead.next = this.first;
			this.first = newhead;
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