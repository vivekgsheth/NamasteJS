let user = {
    name : "Vivek",
    address : {
        office : {
            city : "Ahmedabad",
            area : "Prahladnagar"
        },
        personal : {
            city : "Gandhidham",
            area : {
                landmark : "Gurukul"
            }
        }
    }
}

let final_obj = {};

let recursive_fn = (obj, parent) => {
    for (let key in obj){
        if (typeof obj[key] === "object"){
            recursive_fn(obj[key], parent+"_"+key);
        }else{
            final_obj[parent+"_"+key] = obj[key];
        }
    }
}
recursive_fn(user, "user")
console.log(final_obj);