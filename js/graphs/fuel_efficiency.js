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
	            name: 'Tokyo',
	            data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
	            color: '#00FFBF'

	        }],
	        exporting: { enabled: false },
	        credits: {  enabled: false  }
	    });
	});