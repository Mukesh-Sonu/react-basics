// const heading = React.createElement("h1", {
//     style: {'backgroundColor': 'pink'},
//     id: 'h1-pink'
// }, "Hello, this is from React!")
//     const mainRoot = document.getElementById('root');
//     const root = ReactDOM.createRoot(mainRoot)
//     root.render(heading)

/*
*  <div id="parent">
*   <div id="child">
*    <h1>This is h1</h1>
*   </div>
*  </div>
*   ReactElement is an object while render it to the dom it converts to html
*   createElement takes three args 1) elementTye(h1, div) 2){} for attribute to the element 
*   3)React Children, If you want to pass sibiling use as array. As mentioned below
*
*/

const h1 = React.createElement('h1', {}, 'My own h1 in react')
const h2 = React.createElement('h2', {}, 'My own h2 in react')
const childDiv = React.createElement('div', {id: "child"}, [h1, h2])
const parentDiv = React.createElement('div', {id: "parent"}, childDiv)
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(parentDiv)