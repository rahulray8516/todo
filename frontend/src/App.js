// eslint-disable-next-line no-unused-vars
import logo from './logo.svg';
import './App.css';
function App() {
  return (
    <div>
      <h1>
        Please click on this button
      </h1>
      <MyButton />
    </div>
  );
}

function MyButton(){
  return (
    <button>I'm a button</button>
  )
}

export default App;
