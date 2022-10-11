import React, { useMemo } from "react";
import "./ReactTables.css";
import { Table } from "react-bootstrap";
import { useFilters, useGlobalFilter, useSortBy, useTable } from "react-table";
import GlobalFilter from "./GlobalFilter";
import ColumnFilter from "./ColumnFilter";

const Bdata = [
  {
    id:1,
    name: "Ayaan",
    age: 26,
  },
  {
    id:2,
    name: "Ahana",
    age: 22,
  },
  {
    id:3,
    name: "Peter",
    age: 40,
  },
  {
    id:4,
    name: "Virat",
    age: 30,
  },
  {
    id:5,
    name: "Rohit",
    age: 32,
  },
  {
    id:6,
    name: "Dhoni",
    age: 37,
  },
];
const Bcolumns = [
  {
    Header:"ID",
    accessor:'id',
    Filter:ColumnFilter,//we cannot revome that filter directly so we use below disableFilter prop
    disableFilters:true
  }
  ,

  {
    Header: "Name",
    accessor: "name",
    Filter:ColumnFilter,

  },
  {
    Header: "Age",
    accessor: "age",
    Filter:ColumnFilter
  },
];

const ReactTables = () => {

  const data = useMemo(() => Bdata, []);
  const columns = useMemo(() => Bcolumns, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter
  } = useTable({ columns, data }, useFilters,useGlobalFilter ,useSortBy);

  const { globalFilter } = state;


  return (
    <>
      <GlobalFilter gfilter={globalFilter} setGFilter={setGlobalFilter} />
 

      <Table striped bordered hover size="lg" style={{textAlign:'center'}} responsive {...getTableProps()}>
        <thead >
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((columns) => (
                <th
                  {...columns.getHeaderProps(columns.getSortByToggleProps())}
                  className={
                    columns.isSorted
                      ? columns.isSortedDesc
                        ? "sort-desc"
                        : "sort-asc"
                      : ""
                  }
                >
                  {columns.render("Header")}
                  <div>{columns.canFilter?columns.render('Filter'):null}</div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default ReactTables;
