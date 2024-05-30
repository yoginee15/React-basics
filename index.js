  const parent = React.createElement(
    "div",
    { id: "parent", className: "myDiv" },
    React.createElement("div", { id: "child" }, [
      React.createElement("h1", {}, "My Heading"),
      React.createElement("h5", {}, "My Heading 2"),
    ])
  );
// const Parent = () => {
//   return (
//     <div id="parent">
//       <div id="child">
//         <h1>My Heading</h1>
//         <h5>My Heading2</h5>
//       </div>
//     </div>
//   );
// };

console.log("parent", parent); //
//   const body = document.getElementsByTagName("body")
//   const div = React.createElement("div",{id:"root"})
//   body.appendChild(div)
//   const root = ReactDOM.createRoot(div)
//   root.render()
