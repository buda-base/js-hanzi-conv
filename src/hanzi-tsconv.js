import {tcscdata} from 'tcscdata';

var convg = function(orig, tbl) {
    res = "";
    for (c of orig) {
        destc = tbl[c];
        if (destc) {
            res += destc;
        } else {
            res += c;
        }
    }
    return res;
}

var tc2sc = function(orig) {
    return convg(org, tcscdata['tc2sc']);
}

var sc2tc = function(orig) {
    return convg(org, tcscdata['sc2tc']);
}

var conv = {'tc2sc': tc2sc, 'sc2tc': sc2tc};

export { conv };
