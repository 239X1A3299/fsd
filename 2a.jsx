import React from "react";
class App extends React.Component{
  state={count :0 };
  render(){
    return(
      <div>
        <h2>Counter: {this.state.count}</h2>
        <button onClick={()=>
          this.setState({count:this.state.count + 1 })
        }>
          Click me
        </button>
      </div>
    );
  }
}
export default App;