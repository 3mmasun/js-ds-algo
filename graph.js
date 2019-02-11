class Graph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(node){
        if(!this.adjacencyList[node]) this.adjacencyList[node] = [];
    }
    addEdge(n1,n2){
        this.adjacencyList[n1].push(n2);
        this.adjacencyList[n2].push(n1);
    }
    removeEdge(n1,n2){
        this.adjacencyList[n1] = this.adjacencyList[n1].filter(
            node => node!== n2
        );
        this.adjacencyList[n2] = this.adjacencyList[n2].filter(
            node => node!== n1
        );
    }
    removeVertex(node){
        let adjacentNode;
        while (this.adjacencyList[node].length){
            adjacentNode = this.adjacencyList[node].pop();
            this.removeEdge(node,adjacentNode);
        }
        delete this.adjacencyList[node];
    }
    DFSRecursive(startVertex){
        var result = [];
        var visted = {};
        var adjacencyList = this.adjacencyList;
        (function dfs(vertex){
            if(!vertex) return null;
            visted[vertex] = true;
            result.push(vertex);
            adjacencyList[vertex].forEach(neighbor =>{
                if(!visted[neighbor]) return dfs(neighbor);
            })
        })(startVertex)
        return result;
    }
    DFSIterative(startVertex){
        var result = [];
        var visted = {};
        var vertexStack = [startVertex];
        var currVertex;
        visted[startVertex] = true;
        while(vertexStack.length){
            currVertex = vertexStack.pop();
            result.push(currVertex);
            this.adjacencyList[currVertex].forEach(neighbor =>{
                if(!visted[neighbor]){
                    vertexStack.push(neighbor);
                    visted[neighbor] = true;
                }
            })
        }
        return result;
    }

    BFSIterative(startVertex){
        var result = [];
        var visted = {};
        var vertexQueue = [startVertex];
        var currVertex;
        visted[startVertex] = true;
        while(vertexQueue.length){
            currVertex = vertexQueue.shift();
            result.push(currVertex);
            this.adjacencyList[currVertex].forEach(neighbor =>{
                if(!visted[neighbor]){
                    vertexQueue.push(neighbor);
                    visted[neighbor] = true;
                }
            })
        }
        return result;
    }
}

let g = new Graph();

g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")

g.addEdge("A","B")
g.addEdge("A","C")
g.addEdge("B","D")
g.addEdge("C","E")
g.addEdge("D","E")
g.addEdge("D","F")
g.addEdge("E","F")

//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F
