if(Meteor.isClient) {

  var posts = Meteor.call('search', {title: 'hello world'});

  Meteor._debug("Posts found in the client side:");
  Meteor._debug(posts);

}
