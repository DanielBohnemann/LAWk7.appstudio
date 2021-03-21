let req = ""
let query = ""
let results = ""
let pw = "Runner48"  // put your database password here
let netID = "dbo47382"
let allCustomerData = []



Button1.onclick=function(){
  query = "SELECT * FROM customer" 
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=dbo47382&query=" + query)
    if (req.status == 200) { //transit trip worked. 
        results = JSON.parse(req.responseText)
        if (results.length == 0)    
           lbl1.textContent = "There are no customers in the database."
        else {        
           let message = ""
           for (i = 0; i < results.length; i++)
               message = message + results[i][1] + "\n"
           Texta1.value = message
        } // end else

    } else   // the transit didn't work - bad wifi? server turned off?
        lbl1.textContent = "Error code: " + req.status
}
