$(function () {
    
	    	$('#fuel_efficiency').highcharts({
	        chart:{
	        	backgroundColor: ''
	        },
	        title: {
	            text: 'Fuel Efficiency',
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
	                color: '#808080'
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
	            color: '#00FFBF'

	        }],
	        exporting: { enabled: false },
	        credits: {  enabled: false  }
	    });
	});