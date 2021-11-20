//My codepen:   https://codepen.io/mbonzi/pen/jOLJxoE?editors=0010

//Welcome class component 
const Welcome = ({bootcampName})  => {
  
  return <h1>Welcome to {bootcampName}!</h1>
  
};


//App class component 
class App extends React.Component {
  
   constructor(props) {
    super(props);
    this.state = {
      bootcampName: "Nucamp"
    };
  }
  
  render(){
    return(
      <div>
        <Welcome bootcampName={this.state.bootcampName} />
       </div>
    );
  };
}


ReactDOM.render(
  <App />, 
  document.getElementById('root')
);
