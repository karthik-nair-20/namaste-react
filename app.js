/*
<div id="parent">
  <div id ="child">
    <h1>I am a h1 tag</h1>
    <h2>I am h2 tag</h2>
  </div>
  <div id ="child2">
    <h1>I am a h1 tag</h1>
    <h2>I am h2 tag</h2>
  </div>
</div>

*/
 
const heading = React.createElement("h1" ,
 {id: "heading"},
 "Hello World from React!");

 const parent = React.createElement("div" ,
 {id : "parent"},
 [React.createElement(
  "div",
 {id : "child"},
 [React.createElement("h1",{},
 "i am a h1 tag"),
 React.createElement("h2",{},
 "i am a h2 tag")]
 )

 ,

 React.createElement(
  "div",
 {id : "child2"},
 [React.createElement("h1",{},
 "i am a h1 tag"),
 React.createElement("h2",{},
 "i am a h2 tag")]
 )]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);

console.log(parent);//React object