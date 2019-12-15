var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = {};
  newTree.counter = 0;

  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var newTree = Tree(value)

  this.children[this.counter] = newTree;
  this.counter += 1;
};

treeMethods.contains = function(target) {

  var result = false;


  var hasValue = function(element) {
  if (element.value === target) {
    result = true;
  };

if (element.children) {
  for (var key in element.children) {
      hasValue(element.children[key])
    
    }
  }
};
  hasValue(this)
  return result;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
