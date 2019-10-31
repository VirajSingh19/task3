import React, {Component} from 'react';
import "./List.css";

var ReactBsTable  = require('react-bootstrap-table');
var BootstrapTable = ReactBsTable.BootstrapTable;
var TableHeaderColumn = ReactBsTable.TableHeaderColumn;


var products = [{
    id: 1,
    name: "Product1",
    price: 120
}, {
    id: 2,
    name: "Product2",
    price: 80
}];
const options = {
    onRowClick: function(row) {
      console.log(`You click row id: ${row.id}`);
    },
    onRowDoubleClick: function(row) {
      console.log(`You double click row id: ${row.id}`);
    }
};



class List extends Component {
    onSelectAll = (isSelected) => {
        if (isSelected) {
          return products.map(row => row.id);
        } else {
          return [];
        }
      }
    render() {
        const selectRowProp = {
            mode: 'checkbox',
            bgColor: 'lightgreen', 
            hideSelectColumn: true,
            clickToSelect: true 
          };
            
        return (
            <BootstrapTable data={products} options={options} selectRow={ selectRowProp } striped hover>
            <TableHeaderColumn isKey dataField='id'>Product ID</TableHeaderColumn>
            <TableHeaderColumn  dataField='name'>Product Name</TableHeaderColumn>
            <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
        </BootstrapTable>            
        );
    }
}

export default List;


// <div className="topdiv">
// <div className="overflow-auto tab">
//     <table className="f6 w-100  center" cellSpacing="0">
//     <thead>
//         <tr className="stripe-dark">
//         <th className="fw6 tl pa3 bg-white">Name</th>
//         <th className="fw6 tl pa3 bg-white">Username</th>
//         <th className="fw6 tl pa3 bg-white">Email</th>
//         <th className="fw6 tl pa3 bg-white">ID</th>
//         </tr>
//     </thead>
//     <tbody className="lh-copy">
//         <tr className="stripe-dark">
//         <td className="pa3">Hassan Johnson</td>
//         <td className="pa3">@hassan</td>
//         <td className="pa3">hassan@companywithalongdomain.co</td>
//         <td className="pa3">12</td>
//         </tr>
//     </tbody>
//     </table>
// </div>
// </div>                       