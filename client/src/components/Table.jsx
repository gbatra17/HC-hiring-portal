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

const TableView = () => (
  <div>
    <Table selectable={false}>
      <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
        <TableRow showRowHover={true} displayRowCheckbox={false}>
          <TableHeaderColumn>Name Of Company</TableHeaderColumn>
          <TableHeaderColumn>Date Of Post</TableHeaderColumn>
          <TableHeaderColumn>Preview</TableHeaderColumn>
          <TableHeaderColumn>Download</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody displayRowCheckbox={false}>
        <TableRow showRowHover={true} >
          <TableRowColumn>Icalia Labs</TableRowColumn>
          <TableRowColumn>12/3/2018</TableRowColumn>
          <TableRowColumn>Preview Coming</TableRowColumn>
          <TableRowColumn>Download Coming</TableRowColumn>
        </TableRow>
      </TableBody>
    </Table>
  </div>
);

export default TableView;
