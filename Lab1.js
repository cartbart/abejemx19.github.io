function arraystf()
  {
    var array = [];
    sum = 0;
    for (var i=0; i<5; i++)
    {
      var val = Math.floor( Math.random()*100 );
      sum += val
      array.push(val);
    }
    var mean = sum/array.length;
    //in Chrome, this is available in Developer Tools
    console.log(mean);
    var greater = [];
    
    greater = array.filter(function(x){return x>mean;});
    document.querySelector("#arrayOut").innerHTML="The array is:"+array+"<br>The mean is:"+mean+"<br>Greater:"+greater;
  }
