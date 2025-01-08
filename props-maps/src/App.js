import logo from './logo.svg';
import './App.css';
import Task from './Task';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      {/* <Employee /> */}
      <Task/>
    </>
  );
}
var dataItems = [
  {
    "emp_name": "John",
    "emp_tech": "React",
    "emp_exp": "2 years"
  },
  {
    "emp_name": "Smith",
    "emp_tech": "Angular",
    "emp_exp": "3 years"
  },
  {
    "emp_name": "David",
    "emp_tech": "Vue",
    "emp_exp": "1 years"
  }
]

function Employee() {
  return (
    <>
      <table border="1">
        <tr>
          <th>Sr no</th>
          <th>Name</th>
          <th>Tech</th>
          <th>Experiance</th>
        </tr>
        {dataItems.map((item, index) => {
          // console.log(item);
          return (
            <>
              <SubData srno={index + 1} name={item.emp_name} tech={item.emp_tech} exp={item.emp_exp} />
              {/* <SubData srno={index + 1} name={dataItems[index]["emp_name"]} tech={dataItems[index]['emp_tech']} exp={dataItems[index]['emp_exp']} /> */}

            </>
          )
        })
        }
      </table>
    </>
  );
}
function SubData(props) {
  return (
    <>
      <tr>
        <td>{props.srno}</td>
        <td>{props.name}</td>
        <td>{props.tech}</td>
        <td>{props.exp}</td>
      </tr>

    </>
  );
}

export default App;
