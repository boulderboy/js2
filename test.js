let arr = [[12,13,14], [22,23,24], 34, 44, [55,56,57]];
arr.forEach(function (elementArray) {
    if(!elementArray.isArray){
        elementArray += 100;
    } else if(elementArray.isArray){
        elementArray.forEach(function (arrayElement) {
            arrayElement += 1000;
        })
    }
});

console.log(arr);