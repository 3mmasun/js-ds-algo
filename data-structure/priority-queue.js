class Node {
    constructor (val, priority){
        this.val = val;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor(){
        this.val = [];
    }
    enqueue(value, priority){
        var node = new Node(value, priority);
        this.val.push(node);
        this.bubbleUp();
    }
    bubbleUp(){
        let idx = this.val.length-1;
        let element = this.val[idx];
        let parentIdx;
        let parentElement;
        while(idx > 0){
            parentIdx = Math.floor((idx-1)/2);
            parentElement = this.val[parentIdx];
            if(element.priority < parentElement.priority) break;
            this.val[parentIdx] = element;
            this.val[idx] = parentElement;
            idx = parentIdx;
        }
    }
    dequeue(){
        let maxElement = this.val[0];
        if (this.val.length === 0) {
            return null;
        }
        if (this.val.length === 1) {
            this.val = [];
            return maxElement;
        }
        let end = this.val.pop();
        this.val[0] = end;
        this.sinkdown();
        return maxElement;
    }
    sinkdown(){
        let idx = 0;
        let element = this.val[idx];
        let childL, childLIdx;
        let childR, childRIdx;
        let swap;
        while (true){
            swap = null;
            childLIdx = 2*idx + 1;
            childRIdx = 2*idx + 2;
            if (childLIdx < this.val.length){
                childL = this.val[childLIdx];
                if (element.priority < childL.priority) {
                    swap = childLIdx;
                }
            }
            if (childRIdx < this.val.length){
                childR = this.val[childRIdx];
                if (element.priority < childR.priority && (swap === null || (swap !== null && childL.priority < childR.priority ))){
                    swap = childRIdx;
                }
            }
            if (swap === null) break;
            [this.val[idx],this.val[swap]] = [this.val[swap],this.val[idx]];
            idx = swap;
        }
    }
}

let ER = new PriorityQueue();
ER.enqueue("COLD",1);
ER.enqueue("COLD",2);
ER.enqueue("COLD",3);
ER.enqueue("COLD",4);
ER.enqueue("COLD",5);
ER.enqueue("COLD",6);
ER.enqueue("COLD",7);
