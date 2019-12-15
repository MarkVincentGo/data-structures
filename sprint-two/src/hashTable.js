

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // k is the key and goes in hash function, index is the return value of that
  // using the returned index, set the value to the storage index
  //use get to return the whole bcket
  // push the new key value pair with the current bucket
  //set the pushed array back to the storage at index

  if (this._storage.get(index) === undefined) { //if that position of storage is empty
      this._storage.set(index, [[k, v]]); //create a new bucket at that position with key value pair
  } else {
      var current = this._storage.get(index);
      for (var i = 0; i < current.length; i++) {
        if (current[i][0] === k) {
          current.splice(i, 1, [k, v]);
          // current[i] = [k,v];
          this._storage.set(index, current);
          return;
        }
      }
      var fresh = current.concat([[k,v]]);
      this._storage.set(index, fresh);
  }

  // if the bucket at the index is empty, create a new array and push the value
  // if the bucket is already there, push the value

};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
//   return this._storage.get(index)
  var current= this._storage.get(index)

  if (current === undefined) {
      return undefined;
  }

  for (var i = 0; i < current.length; i++) {
      if (current[i][0] === k) {

          return current[i][1];
      }
  }
  return undefined

};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // assign a variable to the array returned from get
  var current = this._storage.get(index)
  //edge case
  if (current === undefined) {
      return true;
  }

  for (var i = 0; i < current.length; i++) {
      if (current[i][0] === k) {
          current.splice(i, 1);
          return true
      }
  }
  return true

};
