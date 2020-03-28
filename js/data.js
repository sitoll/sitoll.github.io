 $(document).ready(function(){
  		var mytbl=$('#table-data').DataTable({
  			"paging":true,
  			"lengthChange":true,
  			"searching":true,
  			"ordering":true,
  			"info":true,
  			"autoWidth":true,
  			"data":[],
  			"columns":[
  			{
  				"title":"Region",
  				"data":"Country_Region",
  			},{
  				"title":"Positif",
  				"data":"Confirmed"
  			},
  			{
  				"title":"Sembuh",
  				"data":"Recovered"
  			},
  			{
  				"title":"Meninggal",
  				"data":"Deaths"
  			}
  			]
  		});

  		let url='https://api.kawalcorona.com/';
            
  		fetch(url).then(res=>res.json()).then((out)=>{
  			var logs=out;
  			// console.log(logs);
  			log=[];
        for(let i = 0; i < logs.length; i++){
            log[i]=logs[i]["attributes"];
        }
  			mytbl.clear();
  			$.each(log,function(index,value){
  				mytbl.row.add(value);
  			});
  			mytbl.draw();
  		})
  		.catch(err=>{
  			throw err
  		})


  		var positif='https://api.kawalcorona.com/positif/';
  		
  		fetch(positif).then(res=>res.json()).then((out)=>{
  			var pos=out;
  			console.log(pos.value);
  			var tag=document.getElementById("pf");
  			tag.innerHTML="<h4 class='text-info'>"+pos.value+"</h4> Orang";
  		})


  		var sembuh='https://api.kawalcorona.com/sembuh/';
  		
  		fetch(sembuh).then(res=>res.json()).then((out)=>{
  			var pos=out;
  			console.log(pos.value);
  			var tag=document.getElementById("sh");
  			tag.innerHTML="<h4 class='text-primary'>"+pos.value+"</h4> Orang";
  		})

  		var meninggal='https://api.kawalcorona.com/meninggal/';
  		
  		fetch(meninggal).then(res=>res.json()).then((out)=>{
  			var pos=out;
  			console.log(pos.value);
  			var tag=document.getElementById("ml");
  			tag.innerHTML="<h4 class='text-danger'>"+pos.value+"</h4> Orang";
  		})

  		// ind
  		var inp='https://api.kawalcorona.com/indonesia/';
  		
  		fetch(inp).then(res=>res.json()).then((out)=>{
  			var pos=out;
  			console.log(pos[0].positif);
  			var tag=document.getElementById("ipf");
  			tag.innerHTML="<h4 class='text-info'>"+pos[0].positif+"</h4> Orang";
  			var tag1=document.getElementById("ish");
  			tag1.innerHTML="<h4 class='text-primary'>"+pos[0].sembuh+"</h4> Orang";
  			var tag2=document.getElementById("iml");
  			tag2.innerHTML="<h4 class='text-danger'>"+pos[0].meninggal+"</h4> Orang";
  		})


  		var mytbl1=$('#table-data1').DataTable({
  			"paging":true,
  			"lengthChange":true,
  			"searching":true,
  			"ordering":true,
  			"info":true,
  			"autoWidth":true,
  			"data":[],
  			"columns":[
  			{
  				"title":"Provinsi",
  				"data":"Provinsi",
  			},{
  				"title":"Positif",
  				"data":"Kasus_Posi"
  			},
  			{
  				"title":"Sembuh",
  				"data":"Kasus_Semb"
  			},
  			{
  				"title":"Meninggal",
  				"data":"Kasus_Meni"
  			}
  			]
  		});

  		let url1='https://api.kawalcorona.com/indonesia/provinsi/';
            
  		fetch(url1).then(res=>res.json()).then((out)=>{
  			var logs=out;
  			// console.log(logs);
  			log=[];
        for(let i = 0; i < logs.length; i++){
            log[i]=logs[i]["attributes"];
        }
  			mytbl1.clear();
  			$.each(log,function(index,value){
  				mytbl1.row.add(value);
  			});
  			mytbl1.draw();
  		})
  		.catch(err=>{
  			throw err
  		})
 
 });
