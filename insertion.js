// my answer
function insertionSort (arr,n)
 {
     n=arr.length;
    for (var i = 0; i < n; i++)
     {
       key = arr[i];
      for (j = i - 1; j > -1 && arr[j] > key; j--)
       {
        
        arr[j + 1] = arr[j];
      }
     
      arr[j + 1] = key;
    }
  
    return arr;
  }
  var list = [8,5,6,9,3,1,4,2,7,10];
  document.writeln(insertionSort(list));
  console.log(insertionSort([8,5,6,9,3,1,4,2,7,10]));
//answer given  
  function insertion_Sort(arr)
  {
    for (var i = 1; i < arr.length; i++) 
    {
      if (arr[i] < arr[0]) 
      {
        //move current element to the first position
        arr.unshift(arr.splice(i,1)[0]);
      } 
      else if (arr[i] > arr[i-1]) 
      {
        //leave current element where it is
        continue;
      } 
      else {
        //find where element should go
        for (var j = 1; j < i; j++) {
          if (arr[i] > arr[j-1] && arr[i] < arr[j]) 
          {
            //move element
            arr.splice(j,0,arr.splice(i,1)[0]);
          }
        }
      }
    }
    return arr;
  }
  
  console.log(insertion_Sort([3, 0, 2, 5, -1, 4, 1]));