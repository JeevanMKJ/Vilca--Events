module.exports = {
  format_date: (date) =>
    // Format date as MM/DD/YYYY
    date.toLocaleDateString(),
  isUrlLocation(value, options) {
    const pattern = /^(?:\w+:)?\/\/([^\s\.]+\.\S{2}|localhost[\:?\d]*)\S*$/;
    if (pattern.test(value)) {
      console.log("I AM HERE", value);
      return `<a href='${options.fn({
        test: value,
      })}' target='_blank'>${options.fn({ test: value })}</a>`;
    }
    console.log("I AM HERE!!!!!!!!!!!!", value);
    return `<p>${options.fn({ test: value })}</p>`;
  },
  isUrlSocial(value, options) {
    const pattern = /^(?:\w+:)?\/\/([^\s\.]+\.\S{2}|localhost[\:?\d]*)\S*$/;
    if (pattern.test(value)) {
      console.log("I AM HERE", value);
      return `<a href='${options.fn({
        test: value,
      })}' target='_blank'>${options.fn({ test: value })}</a>`;
    }
    console.log("I AM HERE!!!!!!!!!!!!", value);
    return `<p>${options.fn({ test: value })}</p>`;
  },
  to_string: (object) => {
    console.log(JSON.stringify(object));
  },
  consoleLog: (data) => {
    console.log(data)
  }
};
