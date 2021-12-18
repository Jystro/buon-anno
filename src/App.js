import React from "react";
import Countdown from "./Countdown";
// class Cdountdown extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { date: new Date() };
//     }

//     componentDidMount() {
//         this.timerID = setInterval(() => this.tick(), 1000);
//     }

//     componentWillUnmount() {
//         clearInterval(this.timerID);
//     }

//     tick() {
//         this.setState({ date: new Date() });
//     }

//     render() {
//         return (
//             <div className='Countdown'>
//                 <h1>Mancano {this.state.date} al nuovo anno</h1>
//             </div>
//         );
//     }
//}

function App() {
  return (
    <>
      <Countdown />
    </>
  );
}

export default App;
