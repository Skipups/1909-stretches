const trim = obj => {
  for (let keys in obj) {
    if (obj[keys] === undefined || obj[keys] === null) {
      delete obj[keys];
    }
  }
  return obj;
};

module.exports = { trim };
