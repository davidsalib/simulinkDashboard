$(function () {
    
	    	$('#electrical_consumption').highcharts({
	        chart:{
	        	backgroundColor: ''
	        },
	        title: {
	            text: 'Electrical Consumption',
	            style: {
	                	color: 'white'                
	                	},
	            x: -20 //center
	        },      
	        	
	        yAxis: {
	            title: {
	                text: 'L/100km',
	                style: {
	                	color: 'white'                
	                }
	            },
	            plotLines: [{
	                value: 0,
	                width: 1,
	                color: '#00FFBF'
	            }]
	        },
	        tooltip: {
	            valueSuffix: '°C'
	        },
	        legend: {
	            enabled: false
	        },	        
	        series: [{
	            data: [],
	            marker: {enabled: false},
	            enableMouseTracking: false, 
	            color: '#FFD900'
	        }],
	        exporting: { enabled: false },
	        credits: {  enabled: false  }
	    });
	});