var jumpOutOfArray = function (array) {
    var saltos = 0;
    for (var i = 0; i <= array.length; i += array[i]) {
        saltos++;
    }
    console.log(saltos);
};
jumpOutOfArray([2, -3, 1, 4, -5, -3, 3]);
