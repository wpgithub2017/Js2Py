// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.4.4.14-4-2
description: >
    Array.prototype.indexOf returns -1 if 'length' is 0 ( length
    overridden to null (type conversion))
includes: [runTestCase.js]
---*/

function testcase() {
  
  var i = Array.prototype.indexOf.call({length: null}, 1);
  
  if (i === -1) {
    return true;
  }
 }
runTestCase(testcase);
