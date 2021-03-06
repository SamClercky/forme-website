export const DateDiff = {
    inDays: function(d1: Date, d2: Date) {
        let t2 = d2.getTime();
        let t1 = d1.getTime();
        
        // @ts-ignore
        return parseInt((t2-t1)/(24*3600*1000));
    },
 
    inWeeks: function(d1: Date, d2: Date) {
        let t2 = d2.getTime();
        let t1 = d1.getTime();
        
        // @ts-ignore
        return parseInt((t2-t1)/(24*3600*1000*7));
    },
 
    inMonths: function(d1: Date, d2: Date) {
        let d1Y = d1.getFullYear();
        let d2Y = d2.getFullYear();
        let d1M = d1.getMonth();
        let d2M = d2.getMonth();
        
        // @ts-ignore
        return (d2M+12*d2Y)-(d1M+12*d1Y);
    },
 
    inYears: function(d1: Date, d2: Date) {
        return d2.getFullYear()-d1.getFullYear();
    },

    inSeconds: function(d1: Date, d2: Date) {
        return d2.getSeconds() - d1.getSeconds();
    },

    inMinutes: function(d1: Date, d2: Date) {
        return d2.getMinutes() - d1.getMinutes();
    },

    inHours: function(d1: Date, d2: Date) {
        return d2.getHours() - d1.getHours();
    },
}