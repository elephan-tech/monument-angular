$(document).ready(function (){
  var userFeed = new Instafeed({
get: 'user',
    userId:'54412362466',
    limit:'12',
    resolution:'standard_resolution',
    accessToken:'IGQVJVTkJCbG5leFdZATWdEeVVSejhDS2h2dnhMbjloUG92b083Y2VOTW9WMWZAQTmw2MWszbjlHUjZA4TzM2QXBHMk5jX1ZAzTGNVSGFDY21BeThINkxON3BLR3p0SVczSVVZAX0RVTXFOa3VMdVBoYm5KWgZDZD',
    sortBy:'most-recent',
    template:'<div class="gallery"><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
  });
  userFeed.run();
});
