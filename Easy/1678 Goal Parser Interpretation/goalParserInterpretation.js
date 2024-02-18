/**
 * @param {string} command
 * @return {string}
 */
 
var interpret = function(command) {
    
    const result = []
    for(let i=0;i<command.length;i++){
        if(command[i]==='(' || command[i]===')'){
            if(command[i+1]===')')
            {
                result.push('o')
            }
        }
        else{
            result.push(command[i])
        }
    }

    return result.join('')
};
