export class Faksimile {

  title: string;
  contain: string;
  scaleFactor: number;
  width: number;
  height: number;
  actualwidth: number;
  ID: string;
  angle: number; 
  constructor(title: string, contain: string, width: number, height: number, actualwidth?: number, scaleFactor?: number, angle?: number) {
    var ID  = function () {
      // Math.random should be unique because of its seeding algorithm.
      // Convert it to base 36 (numbers + letters), and grab the first 9 characters
      // after the decimal.
      return '_' + Math.random().toString(36).substr(2, 9);
    };
    this.ID = ID();
    this.title = title;
    this.contain = contain;
    this.angle = angle | 0;
    this.scaleFactor = scaleFactor | 100;
    this.width = width;
    this.height = height;
    this.actualwidth = actualwidth;
  }
}
