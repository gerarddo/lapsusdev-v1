$('#newQuote').click(function() {

 	$.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?", function(quote){
  	    
        var html = "";

        html += "<div> <strong>Text:</strong>" + quote["quoteText"]; + "</div>"
        html += "<div> <strong>Author:</strong>" + quote["quoteAuthor"]; + "</div>"
        html += "<div> <strong>Sender Name:</strong>" + quote["senderName"]; + "</div>"
        html += "<div> <strong>Sender Link:</strong>" + quote["senderLink"]; + "</div>"
        html += "<div> <strong>Link:</strong>" + quote["quoteLink"]; + "</div>"
        
      	$("#quote").html(html);

      	$("#tweet").attr("href", "https://twitter.com/intent/tweet?text=" + encodeURIComponent(quote["quoteText"]))
	});
});

// https://dev.twitter.com/web/tweet-button/web-intent