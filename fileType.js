
const dotFileExtension = function(fullFileName) {
    let fileType = '';
    [...fullFileName].forEach((character, index) => {
        if(character === '.') {
            fileType = fullFileName.substring(index+1);
        }
    })

    return fileType; 
}

module.exports = dotFileExtension;
