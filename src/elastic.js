function initEs() {
  let link = "https://development.es.ap-southeast-1.aws.found.io:9243/product_sg_dev/_search?pretty=true";
  let authorization = "Authorization:ApiKey YtMn0dk1SBqt_bmXUwxeOg"
  $('#es-search').on('keyup',function(){
    console.log('trigger search hear')
  })

  $('#es-search').on('change',function () {
    $.ajax({
      method: "POST",
      url: link,
      dataType: "json",
      crossDomain: true,
      //type: 'json',
      headers: {
        "Authorization": "Basic XXXXXXXXX",
        "Access-Control-Allow-Headers":link
      },
      data: {
        "query": {
          "match": {
            "title": {"query":"dog dry fuud",
              "fuzziness":2 }
          }
        },
        "aggs": {
          "categories.price": {
            "terms": {
              "field": "categories.price"
            }
          }
        }
      },
      success: function(response) {
        alert("success");
        $('#new').html(response);
      }
    })}
  )
}

export {
  initEs
}