// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.10.6.2-9-e-1
description: >
    RegExp.prototype.exec - the removed step 9.e won't affected
    current algorithm
includes: [runTestCase.js]
---*/

function testcase() {
        var str = "Hello World!";
        var regObj = new RegExp("World");
        var result = false;
        result = regObj.exec(str).toString() === "World";
        return result;
    }
runTestCase(testcase);
