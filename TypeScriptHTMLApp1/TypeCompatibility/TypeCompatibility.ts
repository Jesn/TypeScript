/**
* Type Compatibility
* 类型比较.
*/
interface Named {
    name: string;
}

var x: Named;
//判断这个 y 的类型是{ name: string; location: string; }
var y = { name: 'Alice', location: 'seatte' };
x = y;

var items = [1, 2, 3];

//不压迫强迫这些额外参数...
items.forEach((item, index, arry) => console.log(item));
items.forEach((item) => console.log(item));

var k = () => ({ name: 'Alice' });
var z = () => ({ name: 'Alice', location: 'Seattle' });

k = z;//ok
//z = k; //这 k()方法缺少了 location 属性.所以赋给 z()方法是会报错的.
