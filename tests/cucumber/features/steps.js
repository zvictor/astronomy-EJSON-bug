module.exports = function() {

  this.When(/^I request a post titled "([^"]*)"$/, function (title) {
    console.log('Calling the server to ask our post.');
    this.posts = this.server.call('search', {
      title: title
    });
    console.log('Posts found in the tests runner:');
    console.log(this.posts);
  });

  this.Then(/^I should see the content "([^"]*)"$/, function (content) {
    expect(this.posts[0].content).toEqual(content);
  });

};
