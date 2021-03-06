'use strict';

var validator = require('validator');
var t = require('tcomb-form');

// MACAddress
var MacAddress = t.refinement(t.String, validator.isMACAddress);

MacAddress.getValidationErrorMessage = function (value, path, context) {
  return 'Must be a valid MAC address.';
};

module.exports = MacAddress;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy9tYWMtYWRkcmVzcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLElBQU0sU0FBUyxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUN2QyxJQUFNLENBQUMsR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDOzs7QUFBQyxBQUdoQyxJQUFNLFVBQVUsR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDOztBQUVsRSxVQUFVLENBQUMseUJBQXlCLEdBQUcsVUFBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLE9BQU87U0FBSyw4QkFBOEI7Q0FBQSxDQUFDOztBQUVoRyxNQUFNLENBQUMsT0FBTyxHQUFHLFVBQVUsQ0FBQyIsImZpbGUiOiJzdHJpbmcvbWFjLWFkZHJlc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB2YWxpZGF0b3IgPSByZXF1aXJlKCd2YWxpZGF0b3InKTtcbmNvbnN0IHQgPSByZXF1aXJlKCd0Y29tYi1mb3JtJyk7XG5cbi8vIE1BQ0FkZHJlc3NcbmNvbnN0IE1hY0FkZHJlc3MgPSB0LnJlZmluZW1lbnQodC5TdHJpbmcsIHZhbGlkYXRvci5pc01BQ0FkZHJlc3MpO1xuXG5NYWNBZGRyZXNzLmdldFZhbGlkYXRpb25FcnJvck1lc3NhZ2UgPSAodmFsdWUsIHBhdGgsIGNvbnRleHQpID0+ICdNdXN0IGJlIGEgdmFsaWQgTUFDIGFkZHJlc3MuJztcblxubW9kdWxlLmV4cG9ydHMgPSBNYWNBZGRyZXNzO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
