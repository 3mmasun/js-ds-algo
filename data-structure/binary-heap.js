class MaxBinaryHeap {
    constructor(){
        this.val = [];
    }
    insert(element){
        this.val.push(element);
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
            if(element < parentElement) break;
            this.val[parentIdx] = element;
            this.val[idx] = parentElement;
            idx = parentIdx;
        }
    }
    extractMax(){
        let maxElement = this.val[0];
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
                if (element < childL) {
                    swap = childLIdx;
                }
            }
            if (childRIdx < this.val.length){
                childR = this.val[childRIdx];
                if (element < childR && (swap === null || (swap !== null && childL < childR ))){
                    swap = childRIdx;
                }
            }
            if (swap === null) break;
            [this.val[idx],this.val[swap]] = [this.val[swap],this.val[idx]];
            idx = swap;
        }
    }
}

let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
