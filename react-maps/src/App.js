import './App.css';
import Task from './Task';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <>
      <h1 className="App">Map in React</h1>
      <div style={{ margin: '50px' }}>
        {/* <One />
        <Two />
        <Three />
        <Four />*/}
        <Task />
      </div>
    </>
  );
}

var listData = ['Ramesh', 'Suresh', 'Mahesh', 'Jayesh']
function One() {
  return (
    <>
      <p>{listData[2]}</p>
      {
        listData.map((elem, index) => {
          {
            return (
              <>
                <br /><b>{elem} index:{index}</b>
              </>
            );
          }
        })
      }
    </>
  );

}

//{},pair,value access=>key
var mydata = {
  "Gujarat": "Gandhinagar",
  "Rajastan": "Jaipur"
}
//print all keys:
function Two() {
  return (
    <>
      <p>{mydata['Rajastan']}</p>
      {
        Object.keys(mydata).map((elem) => {
          return (
            <>
              <br /><b>Keys: {elem}</b>
            </>
          );
        })
      }
    </>
  );
}
//print all Values:
function Three() {
  return (
    <>
      {
        Object.values(mydata).map((elem) => {
          return <><br /><b>values: {elem}</b></>
        })
      }
    </>
  );
}
//print all keys and values:
function Four() {
  return (
    <>
      <table border={1}>
        <tr>
          <th>Sr no</th>
          <th>States</th>
          <th>City</th>
        </tr>
        {
          Object.keys(mydata).map((elem, i) => {
            return (
              <>
                {/* <br /><b>Keys: {elem} values:{mydata[elem]}</b> */}
                <tr>
                  <td>{i + 1}</td>
                  <td>{elem}</td>
                  <td>{mydata[elem]}</td>
                </tr>
              </>
            );
          })
        }
      </table>
    </>
  );
}


export default App;
