function findMatching(drivers, name){
    return drivers.filter (
        function (max){
            if (max.toUpperCase()===name.toUpperCase()) {
                return true;
            }
        }
    )
}

function fuzzyMatch (drivers, name){
    return drivers.filter (
        function (max){
            if (max.slice(0,name.length)===name) {
                return true;
            }
        }
    )
}
   
function  matchName (drivers, name){
    return drivers.filter (
        function (max){
            if (max.name===name) {
                return true;
            }
        }
    )
}