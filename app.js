var command = process.argv[3];

if(command === '+') {
    var result = Number(process.argv[2]) + Number(process.argv[4]);
    console.log(result);
} else if(command === '-') {
    var result = Number(process.argv[2]) - Number(process.argv[4]);
    console.log(result);
} else if(command === "*") {
    var result = Number(process.argv[2]) * Number(process.argv[4]);
    console.log(result);
} else if(command === '/') {
    var result = Number(process.argv[2]) / Number(process.argv[4]);
    console.log(result);
} else{
    console.log('incorrect input ):<');
}