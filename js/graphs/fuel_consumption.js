$(function () {
    
	    	$('#fuel_consumption').highcharts({
	        chart:{
	        	backgroundColor: ''
	        },
	        title: {
	            text: 'Fuel Consumption',
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
	                color: '#0cf'
	            }]
	        },
	        tooltip: {
	            valueSuffix: '°C'
	        },
	     	legend: {
	            enabled: false
	        },
	        series: [{
	            color: '#00ccff',
	            enableMouseTracking: false, 
	            marker: {enabled: false}, 
	            data: []

	        }],
	        exporting: { enabled: false },
	        credits: {  enabled: false  }
	    });
	});