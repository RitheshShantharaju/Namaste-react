

const heading = React.createElement("h1",{id:"heading"},"hello world from react")


const parent = React.createElement("div",{id:"parent"},[

React.createElement("div",{id:"child1"},[
React.createElement("div",{id:"h1"},"I am h1 tag"),
React.createElement("div",{id:"h2"},"i am h2 tag")
]),

React.createElement("div",{id:"child2"},[
React.createElement("div",{id:"h1"},"I am h1 tag"),
React.createElement("div",{id:"h2"},"i am h2 tag")
])



])




const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent)