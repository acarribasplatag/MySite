/*
 * Ana Arribasplata
 * Interactive Dynamic Table 
 * 10/23/2014
 * ana_arribasplata@student.uml.edu
 * dyntable.js 
 */

/* 
   I got some of this code from the homework I did last year. 
   I made major changes because the one I did last year does not work.
   Also, Disha helped me a little bit. She got help from people at her work. 
*/

var form = document.getElementById("Form");
form.go.onclick = function () {

    var row, col;
    // Get the values from the form on the HTML page. 
    var rStart = parseInt(form.rStart.value);
    var rEnd = parseInt(form.rEnd.value);
    var cStart = parseInt(form.cStart.value);
    var cEnd = parseInt(form.cEnd.value);

    if (errorCheck(rStart, rEnd, cStart, cEnd) === false) {
	return  ; 
    }

    // This will give us the size, and on what number the rows and columns will start.
    var rows = rEnd - rStart + 1;
    var cols = cEnd - cStart + 1;

    var div = document.getElementById("dynTable");
    // Check if we have a table, if so, remove it. 
    if (div.firstChild != null) {
	div.removeChild(div.firstChild);
    }
    
    
    // Create the table. 
    var tbl = document.createElement("table");
    tbl.id = "Table";
    
    // This is to make the first square, blank. 
    row = tbl.insertRow();
    row.insertCell();
    for (var c = cStart; c <= cEnd; ++c) {
	col = row.insertCell();
	col.innerHTML = c;
    }
    
    // This is a for loop which will give us the correct table. 
    // In order to know the rows, we initialize it to the first value, r can NOT be greater than the second value of the row, then we go to the next one. 
    for (var r = rStart; r <= rEnd; ++r) {
	row = tbl.insertRow();
	col = row.insertCell();
	col.innerHTML = r;
	// In order to know the columns, we initiliaze it to the first value of the column, c can NOT be greater than the second value of the column, then we go to the next one. 
	for (var c = cStart; c <= cEnd; ++c) {
	   // Insert the cells. 
	    var col = row.insertCell();
	    // Multiply rows by the columns. 
	    col.innerHTML = r * c;
	}
    }
    // Append the table. 
    div.appendChild(tbl);

 }


function errorCheck(rStart, rEnd, cStart, cEnd) {

//    var errorDiv = document.getElementById("error") ; 
    var rSerror = document.getElementById("rStartError");
    var rEerror = document.getElementById("rEndError") ; 
    var cSerror = document.getElementById("cStartError") ; 
    var cEerror = document.getElementById("cEndError"); 
    var error1, error2, error3, error4, error5, error6; 
    
    
    // Check the start of the row. 
    if (rStart === 0 ){
	error1 = true ; 
	rSerror.innerHTML="Row Starts is empty. Enter a number.";
    }  
    if (rStart % 1 === 0) {
	error1 = false ;
    } else { 
	error1 = true;
    rSerror.innerHTML="Row Starts is not a number. Enter a number.";
    }

    // Check the end of the row.
    if (rEnd === "") {
	error2 = true ;
        rEerror.innerHTML="Row Ends is empty. Enter a number.";
    }
    else if (rEnd % 1 === 0) {
        error2 = false ;
    } else {
        error2 = true;
        rEerror.innerHTML="Row Ends is not a number. Enter a number.";
    }
    
    // Ckeck the start of the column. 
    if (cStart === ""){
        error3 = true ;
        cSerror.innerHTML="Column Starts is empty. Enter a number.";
    }
    else if (cStart % 1 === 0) {
        error3 = false ;
    } else {
        error3 = true;
        cSerror.innerHTML="Column Starts is not a number. Enter a number.";
    }
    
    // Check the end of the column. 
    if (cEnd === ""){
        error4 = true ;
        cEerror.innerHTML="Column Ends is empty. Enter a number.";
    }
    else if (cEnd % 1 === 0) {
        error3 = false ;
        
    } else {
        error3 = true;
        cEerror.innerHTML="Column Ends is not a number. Enter a number.";
    }

    // Check if the first value of the row is greater than the last value of the row. 

    if (rStart % 1 === 0 && rEnd % 1 === 0) {
       if (rStart > rEnd) {
	      error5 = true ; 
	      rSerror.innerHTML="Value can not be smaller than the row number. Enter a bigger number." ;
       } else {
	      error5 = false ; 
       }
   }

   // Check if the firt value of the column is greater than the last value of the column. 

    if (cStart % 1 === 0 && cEnd % 1 === 0) {
	if (cStart > cEnd) {
	        error6 = true ; 
	        cSerror.innerHTML="Value can not be smaller than the column number. Enter a bigger number.";
	    } else {
		    error6 = false ; 
	    }
    }

  // Check if there is no errors and return.
   if (error1 || error2 || error3 || error4 || error5 || error6 === true) {
	return false; 
  } else {
	return true ; 
  }
}



