const isTypeOf = (arg) => {
    const valuesTypeOf = [];
    const ParamEmpty = "function must receive these three parameters: isType({key, value, entity})"
    if(!Array.isArray(arg)){
        if(!arg.key || !arg.value || !arg.entity ) throw new Error(ParamEmpty)
        if(typeof arg.key !== arg.value) valuesTypeOf.push(`field ${arg.entity} must be of the type ${arg.value}`)
    } else {
        arg.map(obj => {
            if(!obj.key || !obj.value || !obj.entity) throw new Error(ParamEmpty)
            if(typeof obj.key !== obj.value) valuesTypeOf.push(`field ${obj.entity} must be of the type ${obj.value}`)
        })
    }

    if(!valuesTypeOf.length) { 
        return { isNotType: false }
    } else {
        let values = "";
        values = valuesTypeOf.join(', ')
        return { isNotType: true, values }
    }

}


module.exports = {isTypeOf}