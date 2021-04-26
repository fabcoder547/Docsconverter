
import XLSX, { read } from 'xlsx'
import FileSaver from 'file-saver';
import Path from 'path'
export const convert_xls_To_json=(file,fileName)=>{
    
    console.log('convert_xls_To_json called')
      var selectedFile=file;

     var reader=new FileReader();
      reader.onload=function(event){
        // console.log(event);
        var data=event.target.result;
        console.log(data)

        
       var workbook= XLSX.read(data,{
         type:'binary'
       })


      
         var jsonObject;
         workbook.SheetNames.forEach(sheetname=>{
         var row_object=XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetname]);
          jsonObject=JSON.stringify(row_object)
           var blob =new Blob([jsonObject]);
         console.log(blob)
         let url=(URL.createObjectURL(blob))
         FileSaver.saveAs(url,`${fileName}.json`)
        
         
       })
        
      }

      reader.readAsBinaryString(selectedFile);
  }

 export const convert_xls_to_Csv=(file,fileName)=>{
  var selectedFile=file;
    console.log('convert_excel_to_Csv called')
            var reader=new FileReader();
      reader.onload=function(event){
        // console.log(event);
        var data=event.target.result;
        console.log(data)

        
       var workbook= XLSX.read(data,{
         type:'binary'
       }) 
       console.log(workbook)
       workbook.SheetNames.forEach(sheetname=>{
        var csvObject=XLSX.utils.sheet_to_csv(workbook.Sheets[sheetname]);
        console.log(csvObject)
        var blob=new Blob([csvObject]);
        FileSaver.saveAs(blob,`${fileName}.csv`)

       })
      }
      reader.readAsBinaryString(selectedFile);
}


export const convert_xls_To_html=(file,fileName)=>{
  var selectedFile=file;
    console.log(fileName)
   var reader=new FileReader();

   reader.onload=function(e){
     const data=e.target.result;
    const workbook=XLSX.read(data,{
      type:'binary',
    })

     workbook.SheetNames.forEach(sheetname=>{
       const htmldata=XLSX.utils.sheet_to_html(workbook.Sheets[sheetname]);
       console.log(htmldata);
       const blob=new Blob([htmldata],{type: 'text/html'});
       const url=URL.createObjectURL(blob);
    
        FileSaver.saveAs(url,`${fileName}.html`);
     }) 


    
   }

   reader.readAsBinaryString(selectedFile);
}

export const convert_xls_To_txt=(file,fileName)=>{
  let selectedFile=file;
  // console.log(fileName)
  const reader=new FileReader();
  reader.onload=function(e)
  {
    const data=e.target.result;

    const workbook=XLSX.read(data,{
      type:'binary'
    })

    workbook.SheetNames.forEach(sheetname=>{

      const textData=XLSX.utils.sheet_to_txt(workbook.Sheets[sheetname]);
      console.log(textData)
        const blob=new Blob([textData],{type:'text/plain'});
        FileSaver.saveAs(URL.createObjectURL(blob),`${fileName}.txt`)
    })

  }

  reader.readAsBinaryString(selectedFile);
}

export const convert_xls_To_xlsx=(file,fileName)=>{

  let selectedFile=file;
  const reader=new FileReader();
  reader.onload=function(e)
  {
    const data=e.target.result;

    const workbook=XLSX.read(data,{
      type:'binary'
    })

    XLSX.writeFile(workbook,`${fileName}.xlsx`);
  }

  reader.readAsBinaryString(selectedFile);


}