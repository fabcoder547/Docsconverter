import React from 'react'
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';
import Card from "./Card"
 const App=()=> {




  return (
    <div className="row mx-0">
    <Navbar/>
      <div className="main_content ">
        <div className="main_content_heading text-center mb-5 mt-3">
          <h2 className=""><i class="fa  fa-file"></i> Convert Your Files</h2>
          <p>Safe Secure and fast service for converting files</p>
        </div>
      <div className="row mx-0 card_row">
       <h4 className="m-2 mx-0 service_header">
         Convert XLSX Files
       </h4>
      <div className="col-md-3 col-sm-6  card_col">
         <Link to="/convert/xlsx/html/convert_excel_to_html" className="bg-dark w-100 rounded text-decoration-none  mb-2 ">
             <Card heading="XLSX" description="xlsx to html"/>
        </Link>
      </div>
       <div className="col-md-3 col-sm-6  card_col">
        <Link to="/convert/xlsx/json/convert_excel_To_json" className="bg-dark w-100 rounded text-decoration-none  mb-2  ">
             <Card heading="XLSX" description="Excel to json"/>
        </Link>
      </div>
      <div className="col-md-3 col-sm-6  card_col">
          <Link to="/convert/xlsx/csv/convert_excel_to_Csv" className="bg-dark w-100 rounded text-decoration-none  mb-2  ">
             <Card heading="XLSX" description="Excel to Csv"/>
          </Link>
      </div>
        
      <div className="col-md-3 col-sm-6  card_col">
          <Link to="/convert/xlsx/txt/convert_excel_to_txt" className="bg-dark w-100 rounded text-decoration-none  mb-2 "> 
             <Card heading="XLSX" description="Excel TO text"/>
          </Link>
      </div>
      <div className="col-md-3 col-sm-6  card_col">
          <Link to="/convert/xlsx/xls/convert_excel_to_xls" className="bg-dark w-100 rounded text-decoration-none  mb-2 "> 
             <Card heading="XLSX" description="Excel T0 xls"/>
          </Link>
      </div>
      </div>
      
     <div className="row mx-0 card_row">
      <h4 className="m-2 mx-0 service_header">
         Convert XLS Files
       </h4>
       <div className="col-md-3 col-sm-6  card_col">
          <Link to="/convert/xls/json/convert_xls_To_json" className="bg-dark w-100 rounded text-decoration-none  mb-2  ">
             <Card heading="XLS" description="xls to json"/>
          </Link>
      </div>
       <div className="col-md-3 col-sm-6  card_col">
            <Link to="/convert/xls/csv/convert_xls_to_Csv" className="bg-dark w-100 rounded text-decoration-none  mb-2 ">
             <Card heading="XLS" description="xls to Csv"/>
          </Link>
      </div>
      <div className="col-md-3 col-sm-6  card_col">
          <Link to="/convert/xls/html/convert_xls_to_html" className="bg-dark w-100 rounded text-decoration-none  mb-2  ">
             <Card heading="XLS" description="xls to Html"/>
          </Link>
      </div>
       <div className="col-md-3 col-sm-6  card_col">
           <Link to="/convert/xls/txt/convert_xls_to_txt" className="bg-dark w-100 rounded text-decoration-none  mb-2 "> 
             <Card heading="XLS" description="xls TO text"/>
          </Link>
      </div>
       <div className="col-md-3 col-sm-6  card_col">
           <Link to="/convert/xls/xlsx/convert_xls_to_xlsx" className="bg-dark w-100 rounded text-decoration-none  mb-2 "> 
             <Card heading="XLS" description="xls To xlsx"/>
          </Link>
      </div>
     </div>
   

   <div className="row mx-0 card_row">
      <h4 className="m-2 mx-0 service_header">
         Convert Json Files
       </h4>
     <div className="col-md-3 col-sm-6  card_col">
            <Link to="/convert/json/xlsx/convert_json_To_excel" className="bg-dark w-100 rounded text-decoration-none  mb-2  ">
             <Card heading="JSON" description="Json to excel"/>
          </Link>
      </div>
       <div className="col-md-3 col-sm-6  card_col">
            <Link to="/convert/json/csv/convert_json_To_csv" className="bg-dark w-100 rounded text-decoration-none  mb-2  ">
             <Card heading="JSON" description="Json to Csv"/>
          </Link>
      </div>
      <div className="col-md-3 col-sm-6  card_col">
            <Link to="/convert/json/txt/convert_json_To_txt" className="bg-dark w-100 rounded text-decoration-none  mb-2  ">
             <Card heading="JSON" description="Json to Text"/>
          </Link>
      </div>
      <div className="col-md-3 col-sm-6 card_col">
          <Link to="/convert/json/html/convert_json_To_html" className="bg-dark w-100 rounded text-decoration-none  mb-2  ">
             <Card heading="JSON" description="Json to Html"/>
          </Link>
      </div>
      <div className="col-md-3 col-sm-6 card_col">
          <Link to="/convert/json/xls/convert_json_To_xls" className="bg-dark w-100 rounded text-decoration-none  mb-2  ">
             <Card heading="JSON" description="Json to xls"/>
          </Link>
      </div>
      
   </div>
    
      
      <div className="row mx-0 card_row">
       <h4 className="m-2 mx-0 service_header">
         Convert Csv Files
       </h4>
         <div className="col-md-3 col-sm-6  card_col">
          <Link to="/convert/csv/xlsx/convert_csv_To_excel" className="bg-dark w-100 rounded text-decoration-none  mb-2 ">
             <Card heading="csv" description="Csv  to Excel"/>
          </Link>
         
      </div>
      <div className="col-md-3 col-sm-6  card_col">
         <Link to="/convert/csv/json/convert_csv_To_json" className="bg-dark w-100 rounded text-decoration-none  mb-2 ">
             <Card heading="csv" description="Csv  to Json"/>
          </Link>
      </div>
       <div className="col-md-3 col-sm-6  card_col">
         <Link to="/convert/csv/html/convert_csv_To_html" className="bg-dark w-100 rounded text-decoration-none  mb-2 ">
             <Card heading="csv" description="Csv  to html"/>
          </Link>
      </div>
       <div className="col-md-3 col-sm-6  card_col">
         <Link to="/convert/csv/txt/convert_csv_To_txt" className="bg-dark w-100 rounded text-decoration-none  mb-2 ">
             <Card heading="csv" description="Csv  to text"/>
          </Link>
      </div>
       <div className="col-md-3 col-sm-6  card_col">
         <Link to="/convert/csv/xls/convert_csv_To_xls" className="bg-dark w-100 rounded text-decoration-none  mb-2 ">
             <Card heading="csv" description="Csv  to Xls"/>
          </Link>
      </div>
      </div>
     
      
      
    
      
     
     
      
    
      
      </div>
     <Footer/>
    </div>
  )
}
export default App;