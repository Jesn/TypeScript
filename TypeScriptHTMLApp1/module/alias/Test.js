//import 入 module 块
var polygons = Shapes.Polygons;
var tg = new polygons.Triangle("三角形面积是：");
var triangleArea = tg.getTriangleArea(3);
var sq = new polygons.Square("正方形面积是：");
var squareArea = sq.getSquareArea(8);
window.onload = function () {
    console.log(triangleArea);
    console.log(squareArea);
};
//# sourceMappingURL=Test.js.map