import hello from 'ic:canisters/hello';

console.log('Here')

hello.greet(window.prompt("Enter your name:")).then(greeting => {
  window.alert(greeting);
});
