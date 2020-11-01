module.exports = function createDreamTeam(arrNames) {
    if (!Array.isArray(arrNames)) return false;
    let secretMessage = arrNames.map(function(name) {
        if (typeof name === 'string')
            return name.trim().charAt(0).toUpperCase();
        else
            return '';
    });
    return secretMessage.join() == '' ? false : secretMessage.sort().join('');
};
