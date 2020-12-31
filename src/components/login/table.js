import React, { Component } from 'react';
import { render } from 'react-dom';

class TableComponent extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          "id": 1,
          "name": "raghu@gmail.com",
          "age": "Change to active"
        },
        {
          "id": 2,
          "name": "ram@gmail.com",
          "age": "Change to inactive"
        },
        {
         "id": 3,
          "name": "navarathan@gmail.com",
          "age": "Change to active"
        },
        {
          "id": 4,
          "name": "spandana@gmail.com",
          "age": "Change to inactive"
        },
        {
          "id": 5,
          "name": "srilatha@gmail.com",
          "age": "Change to active"
        },
        {
          "id": 6,
          "name": "rathna@gmail.com",
          "age": "Change to inactive"
        }
      ]
    }
  }

  render() {
    return(
      <div>
        <Header />
        <div>
        <table border="1" width="500">
          <thead>
            <th>Serial No</th>
            <th>Username</th>
            <th>Status</th>
          </thead>
            <tbody>
              {this.state.data.map((person, i) => <TableRow key = {i} data={person} />)}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
};

class Header extends React.Component {
  render() {
    return(
      <div>
        <p><b>Admin Table</b></p>
      </div>
    );
  }
};

class TableRow extends React.Component {
  render() {
    return(
      <tr>
        <td>{this.props.data.id}</td>
        <td>{this.props.data.name}</td>
        <td>{this.props.data.age}</td>
      </tr>
    );
  }
};

render(<TableComponent />, document.getElementById('root'));

export default TableComponent