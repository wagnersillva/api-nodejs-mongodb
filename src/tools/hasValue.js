const PropertyHasValue = (Args) => {
    const valuesEmpty = [];

    if(typeof Args === "object" && !Array.isArray(Args)){
        Object.keys(Args).map( key => {
            if(!Args[key]) valuesEmpty.push(`${key} cannot be empty`);
        })
    } else if( typeof Args === "object" && Array.isArray(Args) ) {
        Args.map( obj => {
            Object.keys(obj).map( key => {
                if(!obj[key]) valuesEmpty.push(`${key} cannot be empty`);
            })
        })
    }

    if(!valuesEmpty.length){
        return { isEmpty: false }
    } else {
        let values = "";
        values = valuesEmpty.join(', ')
        return { isEmpty: true, values }
    }

}
module.exports = { PropertyHasValue };