<html lang="en">
  <head>

  <!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

<!-- Optional theme -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">

<!-- Latest compiled and minified JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title>Test your Reactions!</title>

    <!-- Bootstrap -->
    <link href="css/bootstrap.min.css" rel="stylesheet">

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->

		<style>

		body{
			margin-left: 100px;
            margin-right: 100px;
            background-color: #c0392b;
            color: #ecf0f1;


		}


			#Yourtime{
				font-weight:bold;

			}

			#Shape{
				
				height: 50px;
				width: 50px;
				background: red;
				display: none;
				position: relative; 

			}
				

			#container{
				height: 600px;
				border-style: solid;
				border-color: #c0392b;
				border-width: 3px;
				background-color: white;
				overflow: auto;
					
				
			}

			#best {

				font-size: 15px;
				color:#c0392b;
				font-weight: bold;
				border: 2px white solid;
				padding: 20px;
				background-color: white

			}

			p{
				font-size: 20px;
			}

		</style>
	</head>

		<body align="center">
				<h1 >Test Your Reactions!</h1>
					<p>Click on the boxes and circles as quickly as  you can!</p>
					<p id="Yourtime">Your time is <span id="seconds"></span> </p>
					<p id="best">Your BEST score is <span id="secondsbest"></span> </p>
			<div id="container" class="container-fluid">
			 <div id="Shape"></div>
					
			</div>
	

	<script>


   var start = new Date().getTime();

   var highScore =[];

 

    function makeNewColor(){

    		var r = function () { 
    			return Math.floor(Math.random()*256) };
        	return "rgb(" + r() + "," + r() + "," + r() + ")";
        }


    
	function makeShapeAppear(){

		document.getElementById("Shape").style.top= Math.random()*400 +"px";
		document.getElementById("Shape").style.left= Math.random()*900 +"px";
		document.getElementById("Shape").style.height= Math.floor(Math.random()*225) +25 +"px";
		document.getElementById("Shape").style.width=document.getElementById("Shape").style.height;
		document.getElementById("Shape").style.borderRadius=Math.random() < 0.5 ? 0 : 50+"%";
		document.getElementById("Shape").style.background=makeNewColor();
		document.getElementById("Shape").style.display = "block";
		start = new Date().getTime();
	
	}

	function appearAfterDelay(){
		setTimeout(makeShapeAppear , Math.random()*3000);

	}

	appearAfterDelay();




    document.getElementById("Shape").onclick=function(){
     	document.getElementById("Shape").style.display = "none";
     	var end = new Date().getTime();
     	var timeTaken = ( end - start ) /  1000;
     	highScore.push(timeTaken);
        
        highScore.sort(function(a, b){
        	return a-b});

       document.getElementById("seconds").innerHTML=timeTaken +" "+"seconds"; 
       document.getElementById("secondsbest").innerHTML=highScore[0] +" "+"seconds"; 
 	   appearAfterDelay();
 	  
   }

   
  

	</script>
		



	
</html>
