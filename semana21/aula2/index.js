function deleteElement(array, index) {
    for (var i = index; i < array.length; i++) {
        array[i] = array[i + 1];
    }
    array.length = array.length - 1;
}
console.log(deleteElement([1, 2, 3, 4], 1));
