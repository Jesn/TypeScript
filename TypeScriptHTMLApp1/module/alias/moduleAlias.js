//------------别名的使用..
//--声明一个--Shapes 块别名--
var Shapes;
(function (Shapes) {
    //多边形
    var Polygons;
    (function (Polygons) {
        //三角形
        var Triangle = (function () {
            function Triangle(strname) {
                this.side = 3; //声明边一个变量，并且给一个默认值
                this.theName = strname;
            }
            //计算三角形,获取面积，这里为了返回一个构造方法的传进来的字符串，故返回类型给了一个 any 类型
            Triangle.prototype.getTriangleArea = function (side) {
                return this.theName + this.side * side;
            };
            return Triangle;
        })();
        Polygons.Triangle = Triangle;
        //正方形
        var Square = (function () {
            function Square(strName) {
                this.side = 8; //声明边一个变量，并且给一个默认值
                this.theName = strName;
            }
            //计算正方形,获取面积
            Square.prototype.getSquareArea = function (side) {
                return this.theName + this.side * side;
            };
            return Square;
        })();
        Polygons.Square = Square;
    })(Polygons = Shapes.Polygons || (Shapes.Polygons = {}));
})(Shapes || (Shapes = {}));
//# sourceMappingURL=moduleAlias.js.map