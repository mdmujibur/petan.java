// this files abut learn logical operators
// we have get logical operators total 3 categorys
// &&,||,! //as example 
var nid = (Boolean(0))
var cb = (Boolean('hsc'))
var age = (Boolean(0))
var student = (Boolean(1))




if (nid && cb) {
    console.log('you are accepted');
} else {
    console.log('we can not accepet you');
}

if (age || student) {
    console.log('your selected next stap');

} else {
    console.log('we can not selected you sorry');
}


if (nid != age) {
    console.log('congratulation');
} else {
    console.log(" you are not eligible");
}