var cheerio=require("cheerio")
var request=require("request")

var fs=require("fs")
request("https://news.ycombinator.com/news",function(err,res,body) {
    
  if(err)
  console.log("some error occured"+err)
  
  console.log(res.statusCode)
  
  var $=cheerio.load(body)
  
  $("tr.athing:has(td.votelinks)").each(function(index) {
      // body...
      
      var title=$(this).find('td.title>a').text().trim()
      var link=$(this).find('td.title>a').attr('href')
      fs.appendFileSync("output.txt",title + '\n' + link + '\n');
  })
})
