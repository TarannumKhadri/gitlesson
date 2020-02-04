
//my answer
function swap(arr,start,end) {
    var temp;
    temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
};
function partition(arr,pivot,left,right)
 {
    let pivotElement = arr[pivot];
    let partitionIndex = left;
    for(var i = left; i < right; i++)
    {
        if(arr[i] < pivotElement)
        {
            swap(arr, i, partitionIndex);
            partitionIndex++;
        }
    }
        swap(arr, right, partitionIndex);
        return partitionIndex;
};

function quickSort(arr,left,right) 
{
    var pivot, partitionIndex;
    if(left < right)
    {
        pivot = right;
        partitionIndex = partition(arr, pivot, left, right);
    
        quickSort(arr, left, partitionIndex - 1);
        quickSort(arr, partitionIndex + 1, right);
    }
  return arr;
};

var list = [3,7,8,4,2,1,5];
document.writeln(quickSort(list,0,6)+"<br>");

console.log(quickSort([3,7,8,4,2,1,5],0,6));

// answer given 
function quick_Sort(origArray) {
	if (origArray.length <= 1) { 
		return origArray;
	} else {

		var left = [];
		var right = [];
		var newArray = [];
		var pivot = origArray.pop();
		var length = origArray.length;

		for (var i = 0; i < length; i++) {
			if (origArray[i] <= pivot) {
				left.push(origArray[i]);
			} else {
				right.push(origArray[i]);
			}
		}

        return newArray.concat(
            quick_Sort(left), 
            pivot,
            quick_Sort(right)
        );
	}
}

var myArray = [3, 0, 2, 5, -1, 4, 1 ];

console.log("Original array: " + myArray);
var sortedArray = quick_Sort(myArray);
console.log("Sorted array: " + sortedArray);