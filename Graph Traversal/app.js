class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v) => v !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (v) => v !== vertex1
    );
  }

  removeVertex(vertex) {
    for (const adjacentVertex of this.adjacencyList[vertex]) {
      this.removeEdge(vertex, adjacentVertex);
    }

    delete this.adjacencyList[vertex];
  }

  DFSRecursive(vertex) {
    const results = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;

    (function DFS(vertex) {
      results.push(vertex);
      visited[vertex] = true;

      for (const adjacentVertex of adjacencyList[vertex]) {
        if (!visited[adjacentVertex]) {
          DFS(adjacentVertex);
        }
      }
      return;
    })(vertex);

    return results;
  }

  DFSIterative(vertex) {
    const stack = [vertex];
    const results = [];
    const visited = {};

    while (stack.length !== 0) {
      const vertex = stack.pop();
      if (!visited[vertex]) {
        visited[vertex] = true;
        results.push(vertex);
        this.adjacencyList[vertex].forEach((v) => stack.push(v));
      }
    }

    return results;
  }

  BFS(vertex) {
    const queue = [vertex];
    const results = [];
    const visited = {};

    while (queue.length !== 0) {
      const vertex = queue.shift();
      if (!visited[vertex]) {
        visited[vertex] = true;
        results.push(vertex);
        this.adjacencyList[vertex].forEach((v) => queue.push(v));
      }
    }

    return results;
  }
}

let graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");
graph.addEdge("D", "F");
graph.addEdge("E", "F");

// graph.DFSRecursive("A");
// console.log(graph.DFSIterative("A"));
console.log(graph.BFS("A"));
