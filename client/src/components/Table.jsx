import React from 'react';
import ReactFilestack from 'filestack-react';
import Paper from 'material-ui/Paper';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

const TableView = (props) => (
  <div>
    <Table selectable={false}>
      <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
        <TableRow>
          <TableHeaderColumn>Name Of Company</TableHeaderColumn>
          <TableHeaderColumn>Date Of Post</TableHeaderColumn>
          <TableHeaderColumn>Position</TableHeaderColumn>
          <TableHeaderColumn>Coding Challenge</TableHeaderColumn>
          <TableHeaderColumn>Preview</TableHeaderColumn>
          <TableHeaderColumn>Download</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody displayRowCheckbox={false}>
        {console.log(props.listOfJobs)}
        {props.listOfJobs.map((item) => <TableRow >
          <TableRowColumn>{item.companyName}</TableRowColumn>
          <TableRowColumn>12/3/2018</TableRowColumn>
          <TableRowColumn>{item.jobTitle}</TableRowColumn>
          <TableRowColumn>Yes</TableRowColumn>
          <TableRowColumn>Preview Coming</TableRowColumn>
          <TableRowColumn>Download Coming</TableRowColumn>
        </TableRow>)}
      </TableBody>
    </Table>
  </div>
);

export default TableView;
