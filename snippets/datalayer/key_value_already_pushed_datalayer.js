// source : https://www.thyngster.com/tip-finding-out-key-value-already-pushed-datalayer/
var isValueInDatalayer = function($key, $val) {
    var res = -1;
    var dlname;
    for (i in window.google_tag_manager) {
        if(typeof(window.google_tag_manager[i])=="object" && window.google_tag_manager[i].gtmDom)
            dlname = i;        
    }        
    if (typeof (window.google_tag_manager) != "undefined") {
        for (i in window[dlname]) {
            if (!$val & $val!='') {                
                if (window[dlname][i][$key]) {
                    return i;
                }
            } else {
                if (window[dlname][i][$key] && window[dlname][i][$key] == $val) {
                    return i;
                }
            }
        }
    }
    return res;
};
