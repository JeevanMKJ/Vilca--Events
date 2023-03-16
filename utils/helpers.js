// module.exports = {
//   format_date: (date) => {
//     // Format date as MM/DD/YYYY
//     return date.toLocaleDateString();
//   },
//   // The custom helper 'is_url' takes in a string value and checks if it's a valid URL
//   isUrl: function (value, options) {
//     var pattern = /^(?:\w+:)?\/\/([^\s\.]+\.\S{2}|localhost[\:?\d]*)\S*$/;
//     return pattern.test(value);
//   },
// };
module.exports = {
  format_date: (date) => {
    // Format date as MM/DD/YYYY
    return date.toLocaleDateString();
  },
  isUrl: function (value, options) {
    var pattern = /^(?:\w+:)?\/\/([^\s\.]+\.\S{2}|localhost[\:?\d]*)\S*$/;
    if (pattern.test(value)) {
      // If the input value is a valid URL, return an anchor tag containing the URL
      // return `<a href="${value}">${value}</a>`;
      console.log("I AM HERE", value);
      return "<a>" + options.fn({ test: value }) + "</a>";
    } else {
      // If the input value is not a valid URL, return a paragraph tag containing the value
      // return `<p>${value}</p>`;
      console.log("I AM HERE!!!!!!!!!!!!", value);
      return "<a>" + options.fn({ test: value }) + "</a>";
    }
  },
};

// `<a href="${value}">${value}</a>`
