var BinarySearchTree = function(value) {
    this.value = value;
    this.left = null;
    this.right = null;
};

BinarySearchTree.prototype.insert = function(value) {
    var newNode = new BinarySearchTree(value);

    var check = function(element){ 

    if (value > element.value) {
        if (element.right === null) {
            element.right = newNode;
       } else if (element.right !== null) {
           check(element.right);
       }

    } else if (value < element.value) {
        if (element.left === null) {
            element.left = newNode;
        } else if (element.left !== null) {
            check(element.left);
        };    
      };
   };
 check(this);
};

BinarySearchTree.prototype.contains = function(target) {
    var result = false;

    var check = function(element) {
        if (element === null) {
            return;
        };
        
        if (target === element.value) {
            result = true;
        } else if (target > element.value) {
            check(element.right);
        } else if (target < element.value) {
            check (element.left);
        }; 
    };
   check(this);
   return result
};

BinarySearchTree.prototype.depthFirstLog = function(cb) {
    // var array = [];

    // if (this === null) {
    //     return array;
    // };

    var innerFunction = function(element) {
        if (element === null) {
            return;
        };

        for (var key in element) {
            if (key === 'value') {
                cb(element[key]);
            } else {
                innerFunction(element[key])
            };
        };

    };
    innerFunction(this);
    // return;

};
/*
 * Complexity: What is the time complexity of the above functions?
 */

//  var xNode = new BinarySearchTree();
//  xNode.depthFirstLog();

//  var aNode = new BinarySearchTree(5);
//  // aNode.value;

//  var bNode = new BinarySearchTree(3) 
//  aNode.left = bNode;

//  var aNode.insert(7);
 
//  var BinarySearchTree = {value : 5, right: null, left: null }
