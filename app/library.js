module.exports = {
 findMissing: function(arr1,arr2){
  if(typeof(arr1) === typeof([]) && typeof(arr2) === typeof([])){
    if(arr1.length == 0 || arr2.length == 0){
      return 0;
    }
    else if(arr1.length == arr2.length){
      var same = true;
      for(var i=0;i<arr1.length;i++){
          if(arr2.indexOf(arr1[i]) >= 0){
            same = true;
          }
          else{
            same = false;
          }
      }
      if(same){
        return 0;
      }
    }
    else{
      if(arr2.length > arr1.length){
          for(var i = 0; i < arr2.length;i++){
            if(arr1.indexOf(arr2[i]) < 0){
              return arr2[i];
            }
          }
      }
      else{
        for(var i = 0; i < arr1.length;i++){
            if(arr2.indexOf(arr1[i]) < 0){
              return arr1[i];
            }
          }
      }
    }
     }
  else{
    return "Both Parameters must be arrays!";
  }
  }
}
  

