export {};
/**
 * Functions
 * 1.
 */

//  function add(x,y){
//    return x+y
//  }

function add(x: number, y = 0): number {
  return x + y;
}

add(1);

function hellox(name: string) {
  return "hello " + name;
}

console.log(hellox("jjj"));
