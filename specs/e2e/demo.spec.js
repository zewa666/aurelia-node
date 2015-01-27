describe('aurelia skelleton app', function() {
  it('should load the page', function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:9000/app');

    browser.sleep(3000);
    expect(browser.getTitle()).toBe('Welcome | Aurelia');
  });
});
