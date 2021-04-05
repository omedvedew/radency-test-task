import React from 'react';
import CSVReader from 'react-csv-reader'; 
import { connect } from 'react-redux';

const App = ({
  state,
  getCSVInfo,
}) => {

  console.log(state);

  // Converting data from CSV file to array.
  state.CSVInfo ?
  state.CSVInfo.forEach((item, i) => {
    state.CSVItems[`item${i}`] = item.join().split("; ")
  })
  : console.log('waiting for info');

  const renderTable = (obj) => {
    for (let key in obj) {
      console.log(key);
     return (
      <tr id={key}>
        {
          obj[key].map((data, i) => <td key={i}>{data}</td>)
        }
      </tr>
     )
    }
  }
  return (
    <>
      <CSVReader onFileLoaded={(data, fileInfo) => getCSVInfo(data)}/>
      {
        state.CSVInfo ?
        <table style={{border: '1px solid black'}}>
          <tbody>
            <tr>
              <td>Name</td>
              <td>Phone</td>
              <td>Email</td>
              <td>Age</td>
              <td>Experience</td>
              <td>Yearly Income</td>
              <td>Has children</td>
              <td>License States</td>
              <td>Expiration date</td>
              <td>License number</td>
            </tr>
            {renderTable(state.CSVItems)}
          </tbody>
        </table>
        : console.log("waiting for info")
      }
    </>
  )
};

const mapStateToProps = (state) => ({
  state,
});

const mapDispatchToProps = dispatch => ({
  getCSVInfo: (value) => dispatch({
    type: "ADD_INFO_FROM_CSV",
    value,
  })
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
