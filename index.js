
let student=prompt("Enter the tool you known\n HTML,CSS,Bootstrap,JS,Node and React\n Are_Enter : don't know anything")

// student=="HTML,CSS,Bootstrap"?
//     console.log("UI/UX Designer"):
//     console.log("Please learn the JS,Node and React to become a Frontend Developer");

// student=="HTML,CSS,Bootstrap,JS and React"?
//     console.log("Frontend Developer"):
//     console.log("Please learn the Node to become a Backend Developer");

// student=="HTML,CSS,Bootstrap,JS and Node"?
//     console.log("Backend Developer"):
//     console.log("Please learn the React to become a Fullstack Developer");

// student=="HTML,CSS,Bootstrap,JS,Node and React"?
//     console.log("Full stack Developer"):
//     console.log("Please learn remaining tools to become a Fullstack Developer")

// student=="don't know anything"?
//     console.log("Go and Join 10000 Coders"):false
//     student==""
//     console.log("Please give correct inputs")


//     let student = "HTML,CSS,Bootstrap";

student === "HTML,CSS,Bootstrap" ?alert("UI/UX Designer\n Please learn the JS,Node and React to become a Frontend Developer ") :
student === "HTML,CSS,Bootstrap,JS,React" ?alert("Frontend Developer\n Please learn the JS,Node and React to become a Backend Developer") :
student === "HTML,CSS,Bootstrap,JS,Node" ?alert("Backend Developer\n Please learn the React to become a Fullstack Developer") :
student === "HTML,CSS,Bootstrap,JS,Node,React" ? alert("Full stack Developer\n Please learn remaining tools to become a Fullstack Developer") :
student === "don't know anything" ?alert("Go and Join 10000 Coders") :
student === "" ? alert("Please give correct inputs") :
alert("Thank You");
