'use strict';

var validator = require('validator');
var t = require('tcomb-form');

// UUID
var UUID = t.refinement(t.String, validator.isUUID);

UUID.getValidationErrorMessage = function (value, path, context) {
  return 'Must be a valid UUID.';
};

module.exports = UUID;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy91dWlkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBTSxTQUFTLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQ3ZDLElBQU0sQ0FBQyxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUM7OztBQUFDLEFBR2hDLElBQU0sSUFBSSxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7O0FBRXRELElBQUksQ0FBQyx5QkFBeUIsR0FBRyxVQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsT0FBTztTQUFLLHVCQUF1QjtDQUFBLENBQUM7O0FBRW5GLE1BQU0sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDIiwiZmlsZSI6InN0cmluZy91dWlkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgdmFsaWRhdG9yID0gcmVxdWlyZSgndmFsaWRhdG9yJyk7XG5jb25zdCB0ID0gcmVxdWlyZSgndGNvbWItZm9ybScpO1xuXG4vLyBVVUlEXG5jb25zdCBVVUlEID0gdC5yZWZpbmVtZW50KHQuU3RyaW5nLCB2YWxpZGF0b3IuaXNVVUlEKTtcblxuVVVJRC5nZXRWYWxpZGF0aW9uRXJyb3JNZXNzYWdlID0gKHZhbHVlLCBwYXRoLCBjb250ZXh0KSA9PiAnTXVzdCBiZSBhIHZhbGlkIFVVSUQuJztcblxubW9kdWxlLmV4cG9ydHMgPSBVVUlEO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
