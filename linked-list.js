class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

class LinkedList {
	constructor() {
		this.length = 0;
		this.head = null;
		this.tail = null;
	}
	push(val){
		var newNode = new Node(val);
		if (!this.head) {
			this.head = newNode;
			this.tail = this.head;
		}
		else {
			this.tail.next = newNode;
			this.tail = newNode;
		}
		this.length++;
		return this;
	}
	traverse(){
		var currNode = this.head;
		while(currNode){
			console.log(currNode.val);
			currNode = currNode.next;
		}
	}
	pop(){
		if (!this.head) return undefined;
		let currNode = this.head;
		let prevNode = currNode;
		while (currNode.next){
			prevNode = currNode;
			currNode = currNode.next;
		} 
		this.tail = prevNode;
		this.tail.next = null;
		this.length--;
		if (this.length === 0 ){
			this.head = null;
			this.tail = null;
		}
		return currNode;
	}
	shift(){
		if (!this.head) return undefined;
		var currHead = this.head;
		this.head = currHead.next;
		this.length--;
		if (this.length === 0 ){
			this.tail = null;
		}
		return currHead;
	}
	unshift(val){
		var newhead = new Node(val);
		if (!this.head) {
			this.head = newhead;
			this.tail = this.head;
		} else {
			newhead.next = this.head;
			this.head = newhead;
		}
		this.length++;
		return this;
	}
	get(index){
		if (index < 0 || index >= this.length) return null;
		var count = 0;
		var currNode = this.head;
		while(count !== index){
			currNode = currNode.next;
			count++;
		}
		return currNode;
	}
	set(val, index){
		var foundNode = this.get(index);
		if (foundNode) {
			foundNode.val = val;
			return true;
		}
		return false;
	}
	insert (val, index){
		if (index < 0 || index > this.length) return false;
		if (index === 0) return !!this.unshift(val);
		if (index === this.length) return !!this.push(val);
		var newnode = new Node(val);
		var prevnode = this.get(index-1);
		var temp = prevnode.next;
		prevnode.next = newnode;
		newnode.next = temp;
		this.length++;
		return true;
	}
    remove(index){
        if(index < 0 || index >= this.length) return undefined;
        if(index === 0) return this.shift();
        if(index === this.length - 1) return this.pop();
        var previousNode = this.get(index - 1);
        var removed = previousNode.next;
        previousNode.next = removed.next;
        this.length--;
        return removed;
	}
	reverse() {
		var node = this.head;
		this.head = this.tail;
		this.tail = node;
		var next;
		var prev = null;
		for(var i = 0; i < this.length; i++){
		  next = node.next;
		  node.next = prev;
		  prev = node;
		  node = next;
		}
		return this;
	}
	print(){
        var arr = [];
        var current = this.head
        while(current){
            arr.push(current.val)
            current = current.next
        }
        console.log(arr);
    }
}