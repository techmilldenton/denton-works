// Init
var window = window || {};
var publicSpreadsheetUrl = "https://docs.google.com/spreadsheets/d/1iCpYHV3MeGKyOlSjih4wFuhysAbEfgENLPpkJCO5jIs/edit?usp=sharing";

function showInfo(data) {
    window.sheetData = data;
  // do something with the data
  console.log(data);
//   console.log(JSON.stringify(data, null, 2));

    var keys = Object.keys(data.candidates.elements[0]).map(key => {
        console.log(key);
        key = processCandidateKey(key);
        return Object.assign({}, {"title": key});
    });

    var values = [];
    data.candidates.elements.forEach((el, i) => {
        console.log(el, i)
        values.push(Object.values(el));
    });

    // Datatable
    var $candidates = jQuery('#candidates');
    console.log($candidates);
    if ($candidates.length > 0) {
        // $candidates.DataTable( {
        //     data: values,
        //     columns: keys
        // } );
    }

    // List
    keys = {};
    Object.keys(data.candidates.elements[0]).forEach(key => {
        console.log(key);
        key = processCandidateKey(key);
        key = key.toLowerCase();
        var keyId = key.split("0").slice(0,2).join("-");
        keys[keyId] = key;
    });
    console.log(keys);
    processCandidateList(keys, values, 'candidates');
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

function processCandidateList(keys, values, id) {
    var options = {
        valueNames: keys,
        // Since there are no elements in the list, this will be used as template.
        item: '<li><h3 class="name"></h3><p class="born"></p></li>',
        item: `<div class="col-md-6 col-lg-3">
                <div class="single_candidates text-center">
                    <div class="thumb">
                        <img src="img/candiateds/3.png" alt="">
                    </div>
                    <a href="#"><h4>Markary Jondon</h4></a>
                    <p>Software Engineer</p>
                </div>
            </div>`
      };
      
      var userList = new List(id, options, values);
      
}

//initialise and kickstart the whole thing.
Tabletop.init({
    key: publicSpreadsheetUrl,
    callback: showInfo,
    simpleSheet: false
  });

