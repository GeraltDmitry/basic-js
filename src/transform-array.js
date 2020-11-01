  
module.exports = function transform(array) {
    result = [];
    if (!Array.isArray(array)) throw Exception("The argument is not an array");
    for (let i = 0; i < array.length; i++){
            switch(array[i]) {
                case "--discard-prev" : if(i>0) result.pop();
                    break;
                case "--discard-next" : i++;
                    break;
                case "--double-prev" : if(i>0) result.push(array[i-1]);
                    break;
                case "--double-next" : if(i+1<array.length) result.push(array[i+1]);
                    break;
                default: result.push(array[i]);
                    break;

        }
    }
    return result;
};
