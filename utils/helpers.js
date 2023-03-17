module.exports = {
  format_date: (date) => {
    // Format date as MM/DD/YYYY
    return date.toLocaleDateString();
  },
  isUrl: function (value, options) {
    var pattern = /^(?:\w+:)?\/\/([^\s\.]+\.\S{2}|localhost[\:?\d]*)\S*$/;
    if (pattern.test(value)) {
      console.log("I AM HERE", value);
      return (
        "<a href='" +
        options.fn({ test: value }) +
        "' target='_blank'>" +
        options.fn({ test: value }) +
        "</a>"
      );
    } else {
      console.log("I AM HERE!!!!!!!!!!!!", value);
      return "<p>" + options.fn({ test: value }) + "</p>";
    }
  },
};
