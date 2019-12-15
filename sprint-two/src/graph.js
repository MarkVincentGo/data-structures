var Graph = function() {

};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(value) {
    var newNode = {};
    newNode.value = value;
    newNode.edge = {};
    this[value] = newNode;

};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(value) {

    for (var key in this) {
        if (this[key].value === value) {
            return true;
        };
    };
    return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(value) {
    delete this[value];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {

    return this[fromNode].edge[toNode] === this[toNode] && this[toNode].edge[fromNode] === this[fromNode];
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
    this[fromNode].edge[toNode] = this[toNode];
    this[toNode].edge[fromNode] = this[fromNode];
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
    delete this[fromNode].edge[toNode];
    delete this[toNode].edge[fromNode];
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {

    for (var key in this) {
        if (typeof this[key] !== 'function') {
        cb(this[key].value);
        };
    };
};


/*
 * Complexity: What is the time complexity of the above functions?
 */


// var aGraph = new Graph();
// aGraph.addNode('SF');

