import React, { useMemo } from "react";
import "./ReactTables.css";
import { Button, Table } from "react-bootstrap";
import { useFilters, useGlobalFilter, usePagination, useSortBy, useTable } from "react-table";
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
  {
    id:7,
    name: "Dhoni",
    age: 37,
  },
  {
    id:8,
    name: "Dhoni",
    age: 37,
  },
  {
    id:9,
    name: "Dhoni",
    age: 37,
  },
  {
    id:10,
    name: "Dhoni",
    age: 37,
  },
  {
    id:11,
    name: "Dhoni",
    age: 37,
  },
  {
    id:12,
    name: "Dhoni",
    age: 37,
  },
  {
    id:13,
    name: "boomb",
    age: 50,
  },
];
const Bcolumns = [
  {
    Header:"ID",
    accessor:'id',
    // Filter:ColumnFilter,//we cannot revome that filter directly so we use below disableFilter prop
    disableFilters:true
  }
  ,

  {
    Header: "Name",
    accessor: "name",
   

  },
  {
    Header: "Age",
    accessor: "age",
   
  },
];

const ReactTables = () => {

  const data = useMemo(() => Bdata, []);
  const columns = useMemo(() => Bcolumns, []);
  const defaultColumn = useMemo(()=>{
    return {
      Filter:ColumnFilter
    }
  },[])

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    prepareRow,
    state,
    setGlobalFilter
  } = useTable({ columns,defaultColumn,data,initialState:{pageIndex:1}}, useFilters,useGlobalFilter ,useSortBy,usePagination);

  const { globalFilter,pageIndex } = state;


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
          {page.map((row, i) => {
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
      <div style={{margin:'1vmax 0 0 30vmax'}}>
        <span>
          page{' '}
          <strong>
            {pageIndex+1} of {pageOptions.length}
          </strong>
        </span>
        <span>
         {' '} | Go To Page{' '}
          <input type="number" defaultValue={pageIndex+1} onChange={e=>{
            const pageNumber = e.target.value? Number(e.target.value) - 1:0;
            gotoPage(pageNumber)
          }}  style={{width:'6vmax'}}/>
        </span>
        <Button variant="primary" className="ml-5" onClick={()=>gotoPage(0)} disabled={!canPreviousPage}>{'<<'}</Button>
        <Button variant="primary" className="ml-5" onClick={()=>previousPage()} disabled={!canPreviousPage}>Prev</Button>
        <Button variant="primary" className="ml-5" onClick={()=>nextPage()} disabled={!canNextPage}>Next</Button>
        <Button variant="primary" className="ml-5" onClick={()=>gotoPage(pageCount-1)} disabled={!canNextPage}>{'>>'}</Button>

      </div>
    </>
  );
};

export default ReactTables;
