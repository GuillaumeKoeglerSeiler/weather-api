$("#inp").click(() => {
    $.ajax({
    url: 'http://api.weatherstack.com/current',
    data: {
      access_key: '7cc551c43c2cf980366187c97bca15d4',
      query: $("#txt").val()
    },
    dataType: 'json',

    success: function(apiResponse) {

        $(document).ready(function(){
            $("#inp").click(function(){
              var str = $("#txt").val()
            })
          })
      var text = `

      <h2>${apiResponse.location.name} ( ${apiResponse.location.region}, ${apiResponse.location.country} )</h2>
      Température : ${apiResponse.current.temperature}<br>
      <img src="${apiResponse.current.weather_icons}">`
      $(".meteo").html(text)
    }
    
  })
})