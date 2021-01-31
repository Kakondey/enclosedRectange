// let rectangleA = {
//     top:'20px',
//     left:'20px',
//     height:'40px',
//     width:'60px',
//     children:[]
// }

// let rectangleB ={
//     top:'30px',
//     left:'30px',
//     height:'20px',
//     width:'30px',
//     children:[]
// }

let rectangleC = {}
let rectangleDummy = {};

function operations(){
    for(let i=0;i<Object.keys(rectangleA).length-1;++i){
        rectangleDummy[Object.keys(rectangleA)[i]] = Math.abs(parseInt(Object.values(rectangleB)[i]) - parseInt(Object.values(rectangleA)[i])).toString()+"px";
    }
    // rectangleDummy[Object.keys(rectangleA)[4]] = rectangleA[Object.keys(rectangleA)[4]]
    Object.keys(rectangleDummy)[4] = Object.keys(rectangleA)[4]
    rectangleC = rectangleA
    rectangleC.children = rectangleDummy
    // console.log(Object.keys(rectangleC))
    // console.log(Object.keys(rectangleC.children))
    // console.log(Object.values(rectangleC))
    // console.log(Object.values(rectangleC.children))
    return rectangleC;
    
}

// console.log(operations())
// console.log(rectangleA)
if(rectangleA.top<rectangleB.top && rectangleA.left<rectangleB.left){
    operations()
}else{
    rectangleA
}

if(rectangleA.bottom<rectangleB.bottom && rectangleA.right<rectangleB.right){
    operations()
}else{
    rectangleA
}

if(rectangleA.top<rectangleB.top && rectangleA.right<rectangleB.right){
    operations()
}else{
    rectangleA
}

if(rectangleA.bottom<rectangleB.bottom && rectangleA.left<rectangleB.left){
    operations()
}else{
    rectangleA
}



