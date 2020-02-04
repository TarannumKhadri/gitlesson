//my answer

function bubbleSort(arr)
{
    function swap(arr, start, end) { 
        let temp = arr[start]; 
        arr[start] = arr[end]; 
        arr[end] = temp; 
    } 
    var last=arr.length;
    for(var i=0; i < last-1; i++)
    { 
        for(var j=0; j < last-i-1; j++)
        {
            if (arr[j] > arr[j+1])
            {
                swap(arr, j, j+1);
            }
        }
    }
    return arr;
}
var list = [5,10,1,9,2,8,3,7,4,6];
document.writeln(bubbleSort(list));
console.log(bubbleSort([5,10,1,9,2,8,3,7,4,6,]));

  // answer given 
  function swap(arr, first_Index, second_Index){
    var temp = arr[first_Index];
    arr[first_Index] = arr[second_Index];
    arr[second_Index] = temp;
}

function bubble_Sort(arr){

    var len = arr.length,
        i, j, stop;

    for (i=0; i < len; i++){
        for (j=0, stop=len-i; j < stop; j++){
            if (arr[j] > arr[j+1]){
                swap(arr, j, j+1);
            }
        }
    }

    return arr;
}
console.log(bubble_Sort([3, 0, 2, 5, -1, 4, 1]));