import ReactDom from "react-dom"
ReactDom.render("hello gud morning",document.getElementById("Message"))
ReactDom.render(<h1>hello world </h1>,document.getElementById("Message"))
ReactDom.render(<div>
    <h1>hello world</h1>
    <h2>welcome to react</h2>
    </div>,document.getElementById("Message"))