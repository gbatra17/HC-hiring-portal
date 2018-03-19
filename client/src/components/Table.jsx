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
          <TableHeaderColumn>Download Link</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody displayRowCheckbox={false}>
        {props.listOfJobs.map((item) => <TableRow >
          <TableRowColumn>{item.companyName}</TableRowColumn>
          <TableRowColumn>12/3/2018</TableRowColumn>
          <TableRowColumn>{item.jobTitle}</TableRowColumn>
          <TableRowColumn>{item.codingChallenge === 1 ? "Yes" : "No"}</TableRowColumn>
          <TableRowColumn><a href={item.url}>Click to Download</a></TableRowColumn>
        </TableRow>)}
      </TableBody>
    </Table>
  </div>
);

export default TableView;
