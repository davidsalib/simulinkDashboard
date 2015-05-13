$(function () {
    
	    	$('#emissions').highcharts({
	        chart:{
	        	backgroundColor: ''
	        },
	        title: {
	            text: 'Emissions',
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
	                
	            }]
	        },
	        tooltip: {
	            valueSuffix: '°C'
	        },
	        legend: {
	            enabled: false
	        },
	        series: [{
	            name: 'Tokyo',
	            data: [],
	            color: '#99FF00'
	        }],
	        exporting: { enabled: false },
	        credits: {  enabled: false  }
	    });
	});