// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker {
    constructor(length, width, height){
        this.length = length;
        this.width = width;
        this.height = height;
    }
    volume(){
        return this.length * this.width * this.height;
    }
    surfaceArea(){
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    }
}


const cuboid = new CuboidMaker(4,5,5);


console.log("volume=" + cuboid.volume()); // 100
console.log("surface area=" + cuboid.surfaceArea()); // 130


// class volume extends CuboidMaker {
//     super(length,width,height);
//     
// }

// function CuboidMaker(length,width,height){
//     this.length = length;
//     this.width = width;
//     this.height = height;
//   }
  
//   CuboidMaker.prototype.volume = function(){
//     this.volume = this.length * this.width * this.height;
//     console.log(this.volume);
//     return this.volume;
//   }
//   CuboidMaker.prototype.surfaceArea = function(){
//     this.surfaceArea = 2 * this.length * this.width + this.length * this.height + this.width * this.length;
//     console.log(this.surfaceArea)
//     return this.surfaceArea;
//   }
  
//   const cubanCube = new CuboidMaker(4,5,5);
  
//   cubanCube.volume();
//   cubanCube.surfaceArea();


// Test your volume and surfaceArea methods by uncommenting the logs below:

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  
//Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker. 
// Test your work by logging out your volume and surface area.
