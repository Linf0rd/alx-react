const { Map } = require('immutable');

function getImmutableObject(object) {
  return Map(object);
}

module.exports = getImmutableObject;
