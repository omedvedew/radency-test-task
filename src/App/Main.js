import React from 'react';
import CSVReader from 'react-csv-reader'; 
import { connect } from 'react-redux';
import CSVItem from './CSVItem';
import { keys } from 'lodash';

const Main = ({
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
 
  // Validating table content
  function validateCell() {
    let rows = document.querySelectorAll('tr');
    console.log(rows);
    for (let i=1; i<rows.length-1; i++) {
      if (rows[i].cells[3].textContent.includes('@') === false) {rows[i].cells[3].classList.add("invalid")};
      if (+rows[i].cells[4].textContent <= 20) {rows[i].cells[4].classList.add("invalid")};
      if (+rows[i].cells[5].textContent > +rows[i].cells[4].textContent || +rows[i].cells[5].textContent < 0) {rows[i].cells[5].classList.add("invalid")};
      if (+rows[i].cells[6].textContent > 1000000) {rows[i].cells[6].classList.add("invalid")};
      if (+rows[i].cells[8].textContent.length > 2) {rows[i].cells[8].textContent = rows[i].cells[8].textContent.slice(0, 2)};
      if (+rows[i].cells[2].textContent < 12 || rows[i].cells[2].textContent.startsWith("+1") === false) {rows[i].cells[2].classList.add("invalid")};
      if (rows[i].cells[7].textContent.toLowerCase() === 'true' || rows[i].cells[7].textContent.toLowerCase() === 'false') {continue} else {rows[i].cells[7].classList.add("invalid")};
    };
  };
  setTimeout(validateCell, 500);

  return (
    <main className="main">
      <CSVReader onFileLoaded={(data, fileInfo) => getCSVInfo(data)}/>
      
      {
        state.CSVInfo ?
        <table border="1" cellSpacing="0" cellPadding="0">
          <tbody>
            <tr className="table-heading-row">
              <td>ID</td>
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
            {keys(state.CSVItems).map((data, i) => (
              <tr key={i}>
                <td>{i+1}</td>
                <CSVItem data={state.CSVItems[data]}/>
              </tr>
            ))}
          </tbody>
        </table>
        : console.log('waitin for info')
      }
    </main>
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

export default connect(mapStateToProps, mapDispatchToProps)(Main);
