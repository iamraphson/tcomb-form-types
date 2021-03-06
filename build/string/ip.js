'use strict';

var validator = require('validator');
var t = require('tcomb-form');

// IP
var IP = t.refinement(t.String, validator.isIP);

IP.getValidationErrorMessage = function (value, path, context) {
  return 'Must be a valid IP address (x.x.x.x).';
};

module.exports = IP;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy9pcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLElBQU0sU0FBUyxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUN2QyxJQUFNLENBQUMsR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDOzs7QUFBQyxBQUdoQyxJQUFNLEVBQUUsR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDOztBQUVsRCxFQUFFLENBQUMseUJBQXlCLEdBQUcsVUFBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLE9BQU87U0FBSyx1Q0FBdUM7Q0FBQSxDQUFDOztBQUVqRyxNQUFNLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQyIsImZpbGUiOiJzdHJpbmcvaXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB2YWxpZGF0b3IgPSByZXF1aXJlKCd2YWxpZGF0b3InKTtcbmNvbnN0IHQgPSByZXF1aXJlKCd0Y29tYi1mb3JtJyk7XG5cbi8vIElQXG5jb25zdCBJUCA9IHQucmVmaW5lbWVudCh0LlN0cmluZywgdmFsaWRhdG9yLmlzSVApO1xuXG5JUC5nZXRWYWxpZGF0aW9uRXJyb3JNZXNzYWdlID0gKHZhbHVlLCBwYXRoLCBjb250ZXh0KSA9PiAnTXVzdCBiZSBhIHZhbGlkIElQIGFkZHJlc3MgKHgueC54LngpLic7XG5cbm1vZHVsZS5leHBvcnRzID0gSVA7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
