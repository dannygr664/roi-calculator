import { useEffect } from "react";
import { useField } from "formik";
import PropTypes from "prop-types";

import { AgGridReact } from "ag-grid-react"; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid

import ErrorMessage from "@components/ErrorMessage/ErrorMessage";

import "./FormikGrid.css";

function FormikGrid({
  label,
  rowData,
  colDefs,
  gridRef,
  addRow,
  removeSelectedRows,
  ...props
}) {
  const [field, meta, helpers] = useField(props.name);

  useEffect(() => {
    helpers.setValue(rowData);
  }, [helpers, rowData]);

  const handleCellValueChanged = () => helpers.setValue(rowData);

  return (
    <>
      <label htmlFor={field.name}>{label}</label>
      <div id="ag-table-buttons">
        <button
          type="button"
          onClick={() => {
            addRow();
          }}
        >
          Add
        </button>
        <button
          type="button"
          onClick={() => {
            removeSelectedRows();
          }}
        >
          Remove Selected
        </button>
      </div>
      <div
        className="ag-theme-quartz" // applying the Data Grid theme
      >
        <AgGridReact
          domLayout="autoHeight"
          rowData={rowData}
          columnDefs={colDefs}
          rowSelection={{ mode: "multiRow" }}
          ref={gridRef}
          stopEditingWhenCellsLoseFocus="true"
          onCellValueChanged={() => handleCellValueChanged()}
        />
      </div>
      {meta.touched && meta.error ? (
        <ErrorMessage message={meta.error} />
      ) : null}
    </>
  );
}

FormikGrid.propTypes = {
  label: PropTypes.string.isRequired,
  rowData: PropTypes.arrayOf(PropTypes.object).isRequired,
  colDefs: PropTypes.arrayOf(PropTypes.object).isRequired,
  gridRef: PropTypes.object.isRequired,
  addRow: PropTypes.func.isRequired,
  removeSelectedRows: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default FormikGrid;
