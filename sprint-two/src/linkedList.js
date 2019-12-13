var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    // make a new instance of Node 
    // reassign list.head to the newNode if list.head = null
    // if list.head is not null, 
    // reassign list.tail to newNode 
    // the second to last node to be node.next will have to be rewriten to point to the newNode

    var newNode = Node(value);

    if (list.head === null) {
      list.head = newNode;
      list.tail = newNode
    } else if (list.head !== null) {
      list.tail.next = newNode;
      list.tail = newNode;
    } 
  };

  list.removeHead = function() {
    var memory = list.head;
    list.head = list.head.next;
    return memory.value;
  };

  list.contains = function(target) {
    if (list.head === null) {
      return false;
    };
    
    var p = list.head;
 
    while (p !== null) {
 
      if (p.value === target /*|| list.head.next.value === target*/) {
       return true;
      };
      
       p = p.next;
 
    };
    return false;
   };
    return list;
  };


var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
