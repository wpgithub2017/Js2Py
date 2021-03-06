// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.3.5.4_2-90gs
description: >
    Strict mode - checking access to strict function caller from
    non-strict function (non-strict function declaration called by
    strict Function.prototype.bind(null)())
flags: [noStrict]
---*/

function f() { return gNonStrict();};
(function () {"use strict"; return f.bind(null)(); })();


function gNonStrict() {
    return gNonStrict.caller;
}
