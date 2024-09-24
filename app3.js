


for(let i = 1; i<15; i = i+2){
    
    for(let k = 15; k>=i; k--){
        document.write("&nbsp;") 
    }
    
    for(let j = 1; j<=i; j++){
        document.write("*") 
        
    }
        document.write("<br>") 
     }
    
    for(let i = 15; i>=1; i = i-2){
    
            for(let k = 15; k>=i; k--){
             document.write("&nbsp")
        }
            for(let j = 1; j<=i; j++){
                document.write("*")
            }
           document.write("<br>")  
        }