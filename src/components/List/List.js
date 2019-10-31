import React, {Component} from 'react';
import { connect } from "react-redux";
import "./List.css";
import {selectItem, unSelectItem} from "../../actions";

const ReactBsTable  = require('react-bootstrap-table');
const BootstrapTable = ReactBsTable.BootstrapTable;
const TableHeaderColumn = ReactBsTable.TableHeaderColumn;




class List extends Component {  

    constructor() {
      super();
      this.state={
        // local state to handle multiple selctions and unselections
        clicked: new Set()
      }
    }

    render() {
      const that = this;
      
    
     const options = {
      onRowClick: function(row) {
        const {id} = row;
        const {clicked} = that.state;

        if(clicked.has(id)){
          that.props.unSelectItem(id);
          clicked.delete(id);
        }else{
          clicked.add(id);
          that.props.selectItem(id);
        }
        console.log('selected is',clicked);
      }
    };
  
      const {List} = this.props;
        const selectRowProp = {
            mode: 'checkbox',
            bgColor: 'lightgreen', 
            hideSelectColumn: true,
            clickToSelect: true 
          };
        return (
            <BootstrapTable data={List} options={options} selectRow={ selectRowProp } striped hover>
            <TableHeaderColumn isKey dataField='title' filter={ { type: 'TextFilter', delay: 10 } }  >Title</TableHeaderColumn>
            <TableHeaderColumn  dataField='length'  >Length</TableHeaderColumn>  
            <TableHeaderColumn  dataField='category' filter={ { type: 'TextFilter', delay: 10 } }  >Category</TableHeaderColumn>
            <TableHeaderColumn  dataField='author' filter={ { type: 'TextFilter', delay: 10 } }  >Author</TableHeaderColumn>     
        </BootstrapTable>            
        );
    }
}



function mapStateToProps(state) {
  return {
    List: state.list,
    selected: state.selected
  };
}

export default connect(mapStateToProps,{selectItem, unSelectItem}) (List);

