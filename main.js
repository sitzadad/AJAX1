var method = {
  init:function(){
    method.initStyling();
    method.initEvents();
  },
  initStyling:function(){
    console.log('init styling');
  },
  initEvents:function(){
    $('button').on('click',method.getWeather);
  },
  getWeather:function(){
    $('#resultsWrapper').empty();
    $.ajax({
      url: 'http://api.openweathermap.org/data/2.5/weather?q='+$('input').val()+'&units=imperial',
      type: 'GET',
      dataType: 'JSONP',
      success: function (data) {
        console.log(data);
        if(data.message==='Error: Not found city'){
          $('#resultsWrapper').append('<span>Missing Search Criteria. Please try again.</span>');
        }else{
          $('#resultsWrapper').append('<span>City: '+data.name+'<br>Condition: '+data.weather[0].description+'<br>Country: '+data.sys.country+'<br>Current Temperature: '+data.main.temp+' F<br>Humidity: '+data.main.humidity+'%</span>');
        }
      },
      error: function (error) {
          $('#resultsWrapper').append('<span>Fatal Error</span>')
      }
    });
  }
};



$(document).ready(function () {
  method.init();
});
