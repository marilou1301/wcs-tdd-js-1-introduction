// Rectangle.js
class Rectangle {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  isSquare() {
      return (this.a==this.b);
  }

  getArea() {
      return this.a*this.b;
  }

  getPerimeter() {
      return (2*this.a)+(2*this.b);
  }
}

module.exports.Rectangle = Rectangle;