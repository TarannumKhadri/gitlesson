// my answer
function mergeSort (arr) {
    if (arr.length === 1) {
        return arr;
    }
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0,mid);
    const right = arr.slice(mid);
    mergeSort(left);
    mergeSort(right);
    return merge(arr,left,right);
};

function merge (arr,left,right) 
{
    let i = 0;
    let j = 0;
    let k = 0;
    while(i < left.length && j < right.length)
    {
        if(left[i]<right[j]) 
        {
            arr[k] = left[i];
            i = i + 1;      
        }
        else
        {
            arr[k] = right[j];
            j = j + 1;
        }
        k = k + 1;
    }
    while(i< left.length) 
    {
        arr[k] = left[i];
        i = i + 1;
        k = k + 1;    
    }
    while(j< right.length)
    {
        arr[k] = right[j]
        j = j + 1;
        k = k + 1;
    }
    return arr;
};
var list = [8,5,6,9,3,1,4,2,7,10];
  document.writeln(mergeSort(list));
  console.log(mergeSort(list));

  // answer given 
  function merge_sort(left_part,right_part) 
  {
      var i = 0;
      var j = 0;
      var results = [];
  
      while (i < left_part.length || j < right_part.length) {
          if (i === left_part.length) {
              // j is the only index left_part
              results.push(right_part[j]);
              j++;
          } 
        else if (j === right_part.length || left_part[i] <= right_part[j]) {
              results.push(left_part[i]);
              i++;
          } else {
              results.push(right_part[j]);
              j++;
          }
      }
      return results;
  }
  
  console.log(merge_sort([1,3,4], [3,7,9]));