import React, { useState } from "react";
import XLSX, { read } from "xlsx";
import FileSaver from "file-saver";
import Path from "path";
import { useParams } from "react-router-dom";
import ReactDropzone from "react-dropzone";
import swal from "sweetalert";
import Navbar from "./Navbar";

import {
  convert_xls_To_html,
  convert_xls_To_json,
  convert_xls_to_Csv,
  convert_xls_To_xlsx,
  convert_xls_To_txt,
} from "./xlshelper";
import Footer from "./Footer";
export default function App() {
  const [file, setFile] = useState("");
  const [fileName, setFileName] = useState("index");
  const [success, setSuccess] = useState(false);
  const { first, second, method } = useParams();

  const convert_excel_To_json = () => {
    console.log("convert_excel_To_json called");
    var selectedFile = file;

    var reader = new FileReader();
    reader.onload = function (event) {
      // console.log(event);
      var data = event.target.result;
      console.log(data);

      var workbook = XLSX.read(data, {
        type: "binary",
      });

      console.log(workbook);
      var jsonObject;
      workbook.SheetNames.forEach((sheetname) => {
        var row_object = XLSX.utils.sheet_to_row_object_array(
          workbook.Sheets[sheetname]
        );
        jsonObject = JSON.stringify(row_object);
        var blob = new Blob([jsonObject]);
        console.log(blob);
        let url = URL.createObjectURL(blob);
        FileSaver.saveAs(url, `${fileName}.json`);
      });
    };

    reader.readAsBinaryString(selectedFile);
  };

  const convert_excel_to_Csv = () => {
    var selectedFile = file;
    console.log("convert_excel_to_Csv called");
    var reader = new FileReader();
    reader.onload = function (event) {
      // console.log(event);
      var data = event.target.result;
      console.log(data);

      var workbook = XLSX.read(data, {
        type: "binary",
      });
      console.log(workbook);
      workbook.SheetNames.forEach((sheetname) => {
        var csvObject = XLSX.utils.sheet_to_csv(workbook.Sheets[sheetname]);
        console.log(csvObject);
        var blob = new Blob([csvObject]);
        FileSaver.saveAs(blob, `${fileName}.csv`);
      });
    };
    reader.readAsBinaryString(selectedFile);
  };

  const convert_excel_To_html = () => {
    var selectedFile = file;
    console.log(fileName);
    var reader = new FileReader();

    reader.onload = function (e) {
      const data = e.target.result;
      const workbook = XLSX.read(data, {
        type: "binary",
      });

      workbook.SheetNames.forEach((sheetname) => {
        const htmldata = XLSX.utils.sheet_to_html(workbook.Sheets[sheetname]);
        console.log(htmldata);
        const blob = new Blob([htmldata], { type: "text/html" });
        const url = URL.createObjectURL(blob);

        FileSaver.saveAs(url, `${fileName}.html`);
      });

      setSuccess(true);
    };

    reader.readAsBinaryString(selectedFile);
  };

  const convert_excel_To_txt = () => {
    let selectedFile = file;
    // console.log(fileName)
    const reader = new FileReader();
    reader.onload = function (e) {
      const data = e.target.result;

      const workbook = XLSX.read(data, {
        type: "binary",
      });

      workbook.SheetNames.forEach((sheetname) => {
        const textData = XLSX.utils.sheet_to_txt(workbook.Sheets[sheetname]);
        console.log(textData);
        const blob = new Blob([textData], { type: "text/plain" });
        FileSaver.saveAs(URL.createObjectURL(blob), `${fileName}.txt`);
      });
    };

    reader.readAsBinaryString(selectedFile);
  };

  const convert_excel_To_xls = () => {
    let selectedFile = file;
    const reader = new FileReader();
    reader.onload = function (e) {
      const data = e.target.result;

      const workbook = XLSX.read(data, {
        type: "binary",
      });

      XLSX.writeFile(workbook, `${fileName}.xls`);
    };

    reader.readAsBinaryString(selectedFile);
  };
  const convert_json_To_excel = () => {
    var selectedFile = file;

    var reader = new FileReader();
    reader.onload = function (event) {
      // console.log(event);
      var data = event.target.result;

      const EXCEL_TYPE =
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
      const EXCEL_EXTENSION = ".xlsx";

      var worksheet = XLSX.utils.json_to_sheet(JSON.parse(data));
      var workbook = {
        Sheets: {
          sheet1: worksheet,
        },
        SheetNames: ["sheet1"],
      };
      const excelBuffer = XLSX.write(workbook, {
        bookType: "xlsx",
        type: "array",
      });
      console.log(excelBuffer);
      const blob = new Blob([excelBuffer], { type: EXCEL_TYPE });
      FileSaver.saveAs(blob, `${fileName}.xlsx`);
    };
    reader.readAsText(selectedFile);
  };

  const convert_json_To_csv = () => {
    let selectedFile = file;
    var reader = new FileReader();

    reader.onload = function (e) {
      const data = e.target.result;
      const worksheet = XLSX.utils.json_to_sheet(JSON.parse(data));
      console.log(data);
      const csvObject = XLSX.utils.sheet_to_csv(worksheet);
      const blob = new Blob([csvObject]);
      FileSaver.saveAs(URL.createObjectURL(blob), `${fileName}.csv`);
      setSuccess(true);
    };
    reader.readAsText(selectedFile);
  };

  const convert_json_To_txt = () => {
    let selectedFile = file;

    const reader = new FileReader();
    reader.onload = function (e) {
      const data = e.target.result;
      const worksheet = XLSX.utils.json_to_sheet(JSON.parse(data));

      const textdata = XLSX.utils.sheet_to_txt(worksheet);

      const blob = new Blob([textdata], { type: "text/plain" });
      FileSaver.saveAs(URL.createObjectURL(blob), `${fileName}.txt`);
      setSuccess(true);
    };
    reader.readAsText(selectedFile);
  };

  const convert_json_To_html = () => {
    let selectedFile = file;

    const reader = new FileReader();
    reader.onload = function (e) {
      const data = e.target.result;
      const worksheet = XLSX.utils.json_to_sheet(JSON.parse(data));

      const htmldata = XLSX.utils.sheet_to_html(worksheet);
      console.log(htmldata);
      const blob = new Blob([htmldata], { type: "text/html" });
      FileSaver.saveAs(URL.createObjectURL(blob), `${fileName}.html`);
      setSuccess(true);
    };
    reader.readAsText(selectedFile);
  };

  const covert_json_to_xls = () => {
    var selectedFile = file;

    var reader = new FileReader();
    reader.onload = function (event) {
      // console.log(event);
      var data = event.target.result;

      const EXCEL_TYPE =
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
      const EXCEL_EXTENSION = ".xls";

      var worksheet = XLSX.utils.json_to_sheet(JSON.parse(data));
      var workbook = {
        Sheets: {
          sheet1: worksheet,
        },
        SheetNames: ["sheet1"],
      };
      const excelBuffer = XLSX.write(workbook, {
        bookType: "xls",
        type: "array",
      });
      console.log(excelBuffer);
      const blob = new Blob([excelBuffer], { type: EXCEL_TYPE });
      FileSaver.saveAs(blob, `${fileName}.xls`);
    };
    reader.readAsText(selectedFile);
  };

  const convert_csv_To_excel = () => {
    const selectedFile = file;
    console.log("convert_csv_To_excel called");
    var reader = new FileReader();

    reader.onload = function (event) {
      const data = event.target.result;

      var workbook = XLSX.read(data, {
        type: "array",
      });

      console.log(data);
      console.log(workbook);
      XLSX.writeFile(workbook, `${fileName}.xlsx`);
    };

    reader.readAsArrayBuffer(selectedFile);
  };

  const convert_csv_To_json = () => {
    var selectedFile = file;

    const reader = new FileReader();

    reader.onload = (e) => {
      const data = e.target.result;

      var workbook = XLSX.read(data, {
        type: "array",
      });

      workbook.SheetNames.forEach((sheetname) => {
        var row_object = XLSX.utils.sheet_to_row_object_array(
          workbook.Sheets[sheetname]
        );

        const blob = new Blob([JSON.stringify(row_object)]);
        FileSaver.saveAs(blob, `${fileName}.json`);
      });
    };
    reader.readAsArrayBuffer(selectedFile);
  };

  const convert_csv_To_html = () => {
    var selectedFile = file;

    const reader = new FileReader();

    reader.onload = (e) => {
      const data = e.target.result;

      var workbook = XLSX.read(data, {
        type: "array",
      });

      workbook.SheetNames.forEach((sheetname) => {
        var htmldata = XLSX.utils.sheet_to_html(workbook.Sheets[sheetname]);

        const blob = new Blob([htmldata], {
          type: "text/html",
        });
        FileSaver.saveAs(blob, `${fileName}.html`);
      });
    };
    reader.readAsArrayBuffer(selectedFile);
  };

  const convert_csv_To_txt = () => {
    var selectedFile = file;

    const reader = new FileReader();

    reader.onload = (e) => {
      const data = e.target.result;

      var workbook = XLSX.read(data, {
        type: "array",
      });

      workbook.SheetNames.forEach((sheetname) => {
        var textdata = XLSX.utils.sheet_to_txt(workbook.Sheets[sheetname]);

        const blob = new Blob([textdata], {
          type: "text/plain",
        });
        FileSaver.saveAs(blob, `${fileName}.txt`);
      });
    };
    reader.readAsArrayBuffer(selectedFile);
  };

  const convert_csv_To_xls = () => {
    const selectedFile = file;
    console.log("convert_csv_To_excel called");
    var reader = new FileReader();

    reader.onload = function (event) {
      const data = event.target.result;

      var workbook = XLSX.read(data, {
        type: "array",
      });

      console.log(data);
      console.log(workbook);
      XLSX.writeFile(workbook, `${fileName}.xls`);
    };

    reader.readAsArrayBuffer(selectedFile);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setSuccess(false);
    if (file) {
      setFileName(file.name.split(".")[0]);
      // console.log(file)
      if (Path.extname(file.name) == `.${first}`) {
        if (method) {
          if (first == "xlsx" && second == "json") convert_excel_To_json();
          else if (first == "xlsx" && second == "csv") convert_excel_to_Csv();
          else if (first == "xlsx" && second == "html") convert_excel_To_html();
          else if (first == "xlsx" && second == "txt") convert_excel_To_txt();
          else if (first == "xlsx" && second == "xls") convert_excel_To_xls();
          else if (first == "xls" && second == "html")
            convert_xls_To_html(file, fileName);
          else if (first == "xls" && second == "txt")
            convert_xls_To_txt(file, fileName);
          else if (first == "xls" && second == "xlsx")
            convert_xls_To_xlsx(file, fileName);
          else if (first == "xls" && second == "csv")
            convert_xls_to_Csv(file, fileName);
          else if (first == "xls" && second == "json")
            convert_xls_To_json(file, fileName);
          else if (first == "json" && second == "xlsx") convert_json_To_excel();
          else if (first == "json" && second == "csv") convert_json_To_csv();
          else if (first == "json" && second == "txt") convert_json_To_txt();
          else if (first == "json" && second == "html") convert_json_To_html();
          else if (first == "json" && second == "xls") covert_json_to_xls();
          else if (first == "csv" && second == "xlsx") convert_csv_To_excel();
          else if (first == "csv" && second == "json") convert_csv_To_json();
          else if (first == "csv" && second == "html") convert_csv_To_html();
          else if (first == "csv" && second == "txt") convert_csv_To_txt();
          else if (first == "csv" && second == "xls") convert_csv_To_xls();

          swal({
            title: "Successfully Converted",
            text: "",
            icon: "success",
            buttons: true,
            dangerMode: false,
          });
        }
      } else {
        swal({
          title: "Wrong File",
          text: "Plase give file with correct extension",
          icon: "error",
          buttons: true,
          dangerMode: true,
        });
      }
    } else {
      swal({
        title: "Please select a file",
        text: "You cannot make this field empty",
        icon: "error",
        buttons: true,
        dangerMode: true,
      });
    }
  };

  const onChange = (e) => {
    setFile(e.target.files[0]);
  };

  const onDrop = (files) => {
    setFile(files[0]);
    setFileName(files[0].name.split(".")[0]);
  };

  return (
    <div className="row mx-0 text-center">
      <Navbar />
      <div className="content">
        <div className="mt-3 mb-2">
          <h2 className="">
            <i class="fa fa-file"></i> Convert Your Files
          </h2>
          <p>Safe Secure and fast service for converting files</p>
        </div>

        {/* <input className="form-control mb-4" type="file" accept=".csv " onChange={onChange}/> */}

        <ReactDropzone onDrop={onDrop}>
          {({
            getRootProps,
            getInputProps,
            isDragActive,
            isDragReject,
            acceptedFiles,
          }) => (
            <div {...getRootProps({ className: "dropzone" })}>
              <input {...getInputProps()} />
              <div className="drop_zone_para">
                <h1>
                  <i class="fa fa-upload"></i>
                </h1>
                <h3>
                  {isDragActive
                    ? "Uploading..."
                    : "Select or drag a file to upload!"}
                </h3>
                <p>{acceptedFiles.length > 0 ? acceptedFiles[0].name : ""}</p>
              </div>
            </div>
          )}
        </ReactDropzone>
        <button
          className="btn-primary w-20 download_btn"
          type="submit"
          onClick={onSubmit}
        >
          Convert and Download
        </button>
      </div>
      <Footer />
    </div>
  );
}
