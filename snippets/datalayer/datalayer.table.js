/**
 * datalayer.table.js 1.0
 * https://github.com/sanderheilbron/devtools-snippets
 * Shows the contents of Google Tag Manager’s dataLayer for the current page into the console using console.table.
 */

(function () {
    'use strict';

    var table = {},
        data = window.dataLayer;

    if (data) {
        console.group('%cGTM dataLayer', 'color:blue');
        for (var key in data) {
            if (typeof data[key] !== 'function') {
                table[key] = data[key];
            }
        }
        console.table(table);
        console.groupEnd('GTM dataLayer');
    } else {
        console.info('GTM dataLayer not found.');
    }
})();
