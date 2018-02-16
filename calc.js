var numField1  = document.getElementById('numField1');

var numField2 = document.getElementById('numField2');

var resultField = document.getElementById('resultField');


var form = document.getElementById('xIsWhatPercentofY');


form.addEventListener('submit', function(e){
    
    if(!numField1.value || !numField2.value){
        alert("please enter values in fields");
        
        
    }else{
        var x = parseFloat(numField1.value);
        var y = parseFloat(numField1.value);
        
        var result = x/y;
        var percent = result*100;
        // alert(percent);
        
        resultField.innerText = "Answer: " + percent +"%";
        e.preventDefault();
        
        
    }
    
    
    //alert(x + " " + y);
    // console.log(x);
    // console.log(y);
    
 
    
});