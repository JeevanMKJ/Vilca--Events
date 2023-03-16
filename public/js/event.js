Handlebars.registerHelper("if", function (value) {
  var pattern = /^(?:\w+:)?\/\/([^\s\.]+\.\S{2}|localhost[\:?\d]*)\S*$/;
  return pattern.test(value);
});
