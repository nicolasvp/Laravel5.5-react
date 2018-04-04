"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var getByCurrPage = exports.getByCurrPage = function getByCurrPage(store, pageStartIndex) {
  var dataSize = store.data.length;
  if (!dataSize) return [];
  var getNormalizedPage = function getNormalizedPage() {
    var offset = Math.abs(1 - pageStartIndex);
    return store.page + offset;
  };
  var end = getNormalizedPage() * store.sizePerPage - 1;
  var start = end - (store.sizePerPage - 1);

  var result = [];
  for (var i = start; i <= end; i += 1) {
    result.push(store.data[i]);
    if (i + 1 === dataSize) break;
  }
  return result;
};