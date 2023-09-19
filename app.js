
/*
* <div id="parent">
*       <div id="child">
*                  h1
*                  h2
*                  h3
*       </div>
* </div>
*/ 


const parent = React.createElement("div",{id:"parent"},[React.createElement("div",{id:"child"}, [React.createElement("h1",{},"HEADING!"),
React.createElement("h2",{},"HEADING2")])
,React.createElement("div",{id:"child"}, [React.createElement("h1",{},"HEADING!"),
React.createElement("h2",{},"HEADING2")])
]
)



const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(parent)
