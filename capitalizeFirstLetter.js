// capitalizeFirstLetter.js

function capitalizeFirstLetter(chaine) {

    majChaine=chaine.split(" ").map(elt => capitalizeFirst(elt));
    
    return majChaine.join(" ");
}

module.exports = capitalizeFirstLetter;

function capitalizeFirst(input) {
	  return input.length > 0
	    ? input[0].toUpperCase() + input.slice(1)
	    : '';
}