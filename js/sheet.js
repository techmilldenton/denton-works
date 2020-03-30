
var publicSpreadsheetUrl = "https://docs.google.com/spreadsheets/d/1iCpYHV3MeGKyOlSjih4wFuhysAbEfgENLPpkJCO5jIs/edit?usp=sharing";

function showInfo(data) {
  // do something with the data
  console.log(data);
//   console.log(JSON.stringify(data, null, 2));
    var keys = Object.keys(data.candidates.elements[0]).map(key => {
        console.log(key);
        key = processCandidateKey(key);
        return Object.assign({}, {"title": key});
    });
    var values = [];
    data.candidates.elements.forEach(element => {
        
    });((el, i) => {
        console.log(el, i)
        return Object.values(el);
    });
    console.log(keys);
    jQuery('#candidates').DataTable( {
        data: values,
        columns: keys
    } );
}

/**
 * Update candidate keys.
 * @param {string} key 
 */
function processCandidateKey(key) {
    if (key.includes("timestamp")) {
        return null;
    }

    return key;
}

/**
 * Update candidate values.
 * @param {string} key 
 */
function processCandidateValue(val, index) {
    if (key.includes("timestamp")) {
        return null;
    }

    return key;
}

//initialise and kickstart the whole thing.
Tabletop.init({
    key: publicSpreadsheetUrl,
    callback: showInfo,
    simpleSheet: false
  });

