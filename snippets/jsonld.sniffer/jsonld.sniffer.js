/**
 * jsonld.sniffer.js 1.0
 * https://github.com/sanderheilbron/devtools-snippets
 * Shows the contents of JSON-LD script tags for the current page into the console.
 */

(function () {
    'use strict';

    var elements = document.querySelectorAll('[type="application/ld+json"]'),
        count = 0;

    console.info("Found " + elements.length + " JSON-LD script element" + ((elements.length === 1) ? "." : "s."));

    [].forEach.call(elements, function (element) {
        count++;
        console.groupCollapsed("%cScript element #" + count, "color:blue");
        console.log(element.innerHTML);
        console.groupEnd("Script element #" + count);
    });

})();
