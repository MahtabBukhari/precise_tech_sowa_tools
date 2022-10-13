import React, { useMemo, useState } from "react";
import "./ReactTables.css";
import { Button, Table } from "react-bootstrap";
import Bdata from './data.json'
import Bcolumns from './column.json'
import {
  useFilters,
  useGlobalFilter,
  usePagination,
  useRowSelect,
  useSortBy,
  useTable,
} from "react-table";
import GlobalFilter from "./GlobalFilter";
import ColumnFilter from "./ColumnFilter";
import { CheckBox } from "./CheckBox";




const ReactTables = () => {
  

  const [apiData, setApiData]=useState(Bdata)



  const data = useMemo(() => apiData, [apiData]);
  const columns = useMemo(() => Bcolumns, []);


  
  const onEdit=(getRowValue)=>{
    console.log(getRowValue)
  
   
 

  }


  const onDelete=(deleteRowId)=>{
   const newdata= apiData.filter(api=>  api.id!==deleteRowId)
   setApiData(newdata)

  }


  const defaultColumn = useMemo(() => {
    return {
      Filter: ColumnFilter
    };
  }, []);


  const defaultHooks = (hooks) => {
    hooks.visibleColumns.push((columns) => {
      return [
        {
          id: "selection",
          Header: ({ getToggleAllRowsSelectedProps }) => (
            <CheckBox {...getToggleAllRowsSelectedProps()} />
          ),

          Cell: ({ row }) => <CheckBox {...row.getToggleRowSelectedProps()} />,
        },

        ...columns,
        {
          action: "selection",
          Header: "Action",
          Cell: ({ row }) => (
            <>
              <Button className="mr-1"  onClick={()=>onEdit(row.values)}>✍️</Button>
              <Button className="ml-1"  onClick={()=>onDelete(row.values.id)} >❌</Button>
            </>
          ),
        },
      ];
    });
  };


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
    setPageSize,
    state,
    setGlobalFilter,
    selectedFlatRows,
  } = useTable(                  //initialState: { pageIndex: 1 }
    { columns, defaultColumn, data                                 },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination,
    useRowSelect,
    defaultHooks
  );

  const { globalFilter, pageSize, pageIndex } = state;

  return (
    <>
      <GlobalFilter gfilter={globalFilter} setGFilter={setGlobalFilter} />

      <Table
        striped
        bordered
        hover
        size="lg"
        style={{ textAlign: "center" }}
        responsive
        {...getTableProps()}
      >
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((columns) => (
                <th
                  {...columns.getHeaderProps(columns.getSortByToggleProps())}
                  style={{
                    borderBottom: "solid 3px red",
                    background: "aliceblue",
                    color: "black",
                    fontWeight: "bold",
                  }}
                  className={
                    columns.isSorted
                      ? columns.isSortedDesc
                        ? "sort-desc"
                        : "sort-asc"
                      : ""
                  }
                >
                  {columns.render("Header")}
                  <div>
                    {columns.canFilter ? columns.render("Filter") : null}
                  </div>
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
                    <td
                      {...cell.getCellProps()}
                      style={{
                        padding: "10px",
                        border: "solid 1px gray",
                        background: "papayawhip",
                      }}
                    >
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </Table>
      <div style={{ margin: "1vmax 0 0 30vmax" }}>
        <span>
          page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>
        </span>
        <span>
          {" "}
          | Go To Page{" "}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const pageNumber = e.target.value
                ? Number(e.target.value) - 1
                : 0;
              gotoPage(pageNumber);
            }}
            style={{ width: "6vmax" }}
          />
        </span>
        <select
          className="ml-3 p-1"
          value={pageSize}
          onChange={(e) => setPageSize(Number(e.target.value))}
        >
          {[10, 25, 50, 100].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              show {pageSize}
            </option>
          ))}
        </select>
        <Button
          variant="primary"
          className="ml-5"
          onClick={() => gotoPage(0)}
          disabled={!canPreviousPage}
        >
          {"<<"}
        </Button>
        <Button
          variant="primary"
          className="ml-5"
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
        >
          Prev
        </Button>
        <Button
          variant="primary"
          className="ml-5"
          onClick={() => nextPage()}
          disabled={!canNextPage}
        >
          Next
        </Button>
        <Button
          variant="primary"
          className="ml-5"
          onClick={() => gotoPage(pageCount - 1)}
          disabled={!canNextPage}
        >
          {">>"}
        </Button>
      </div>

      <div>
        <pre>
          <code>
            {JSON.stringify(
              {
                selectedFlatRows: selectedFlatRows.map((row) => row.original),
              },
              null,
              2
            )}
          </code>
        </pre>
      </div>
    </>
  );
};

export default ReactTables;
