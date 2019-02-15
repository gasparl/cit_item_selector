// countries or animals can be replaces with any other list of items
var countries = [ "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burma", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "Costa Rica", "Cote d'Ivoire", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Vatican City", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea ", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea ", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Tajikistan", "Tanzania", "Thailand", "Timor Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe" ];
var animls = ["Alligator", "Alpaca", "Ant", "Antelope", "Badger", "Bat", "Bear", "Beaver", "Bee", "Bison", "Buffalo", "Butterfly", "Camel", "Cat", "Caterpillar", "Cheetah", "Chicken", "Chimpanzee", "Cobra", "Crab", "Crane", "Crocodile", "Crow", "Deer", "Dog", "Dolphin", "Donkey", "Dove", "Duck", "Dugong", "Eagle", "Elephant", "Emu", "Falcon", "Ferret", "Flamingo", "Fly", "Fox", "Frog", "Gazelle", "Giraffe", "Gnu", "Goat", "Goose", "Gorilla", "Grasshopper", "Hamster", "Hawk", "Hedgehog", "Herring", "Hippopotamus", "Horse", "Hummingbird", "Hyena", "Jackal", "Jaguar", "Jellyfish", "Kangaroo", "Kiwi", "Koala", "Lemur", "Leopard", "Lion", "Llama", "Lobster", "Locust", "Magpie", "Mammoth", "Mole", "Mongoose", "Monkey", "Moose", "Mouse", "Mosquito", "Octopus", "Opossum", "Ostrich", "Owl", "Oyster", "Panther", "Parrot", "Panda", "Pelican", "Penguin", "Pheasant", "Pig", "Pigeon", "Porcupine", "Porpoise", "Rabbit", "Raccoon", "Ram", "Rat", "Raven", "Reindeer", "Rhinoceros", "Salamander", "Salmon", "Seahorse", "Seal", "Shark", "Sheep", "Sloth", "Snail", "Snake", "Spider", "Squirrel", "Swan", "Tapir", "Tiger", "Toad", "Turkey", "Walrus", "Wasp", "Weasel", "Whale", "Wolf", "Wolverine", "Wombat", "Yak", "Zebra"];

var nums = range(1, 32); // generate days

capitalize = function(str1){
  return str1.charAt(0).toUpperCase() + str1.slice(1);
}
animls.forEach(function(item, index) {
    animls[index] = item.toLowerCase();
});
animls.sort();

var items_base1 = [ [ "jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "okt", "nov", "dec" ], nums, animls.sort(), countries
];

var categories_base = [ "months", "days", "animals", "countries"];
var categories = [ "dates", "animals", "countries" ];

$( document ).ready( function() {
    categories_base.forEach( function( categ, index ) { //fills up the selection options for the categories
        var dropChoices = '';
        var catAll = items_base1[ index ];
        catAll.forEach( function( word ) {
            dropChoices += '<option value="' + word + '">' + word + '</option>';
        } );
        categ_id = "#" + categ;
        $( categ_id ).append( dropChoices );
    } );
} );

var condition;
var actual_probes, items_base2, countries;
function prune() {
    //given the probe (in each of the categories), selects 8 additional items, 5 of which will later be irrelevants. None with same starting letter, and with length closest possible to the probe.
    countries.forEach(function(item, index) {
        countries[index] = item.toLowerCase();
    });
    countries.sort();
    items_base1.push(countries);
    var actual_probes_base = [
        $("#months")
            .val()
            .toLowerCase(),
        $("#days").val(),
        $("#animals")
            .val()
            .toLowerCase(),
        $("#countries")
            .val()
            .toLowerCase()
    ];
    actual_probes = [
        [actual_probes_base[0], actual_probes_base[1]].join(" "),
        actual_probes_base[2], actual_probes_base[3]
    ];
    var items_base2_temp = [];
    actual_probes_base.forEach(function(probe, index) {
        var container = items_base1[index],
            temps;
        var final8 = [probe];
        var maxdif = 0;
        if (probe[0] > -1) {
            final8.push.apply(final8, [0, 0, 0, 0, 0, 0, 0]);
        } else {
            container = $.grep(container, function(n) {
                return probe != n;
            });
            container = $.grep(container, function(n) {
                return probe[0] != n[0];
            });
            if (/\s/.test(probe)) {
                container = $.grep(container, function(n) {
                    return /\s/.test(n);
                });
            } else {
                container = $.grep(container, function(n) {
                    return !/\s/.test(n);
                });
            }
            while (final8.length < 9 && maxdif < 99) {
                temps = $.grep(container, function(n) {
                    return Math.abs(probe.length - n.length) <= maxdif;
                });
                if (temps.length > 0) {
                    final8.push(rchoice(temps));
                    container = $.grep(container, function(n) {
                        return final8[final8.length - 1] !== n;
                    });
                    if (index === 4 || index === 3) {
                        container = $.grep(container, function(n) {
                            return final8[final8.length - 1][0] !== n[0];
                        });
                    }
                } else {
                    maxdif++;
                }
            }
        }
        items_base2_temp.push(final8);
    });
    var days = range(1, 32);
    var day;
    var days_to_filt1 = [actual_probes_base[1]];
    items_base2_temp[0].forEach(function(month, index) {
        if (index > 0) {
            var days_to_filt2 = days_to_filt1;
            if (month == "feb") {
                days_to_filt2 = days_to_filt1.concat([29, 30, 31]);
            } else {
                if (
                    $.inArray(month, [
                        "apr",
                        "jun",
                        "sep",
                        "nov"
                    ]) > -1
                ) {
                    days_to_filt2.push(31);
                }
            }
            var dys_temp = $.grep(days, function(a) {
                return $.inArray(a, days_to_filt2) == -1;
            });
            day = rchoice(dys_temp);
        } else {
            day = items_base2_temp[1][0];
        }
        day = day.toString();
        if (day.length == 1) {
            day = "0" + day;
        }
        items_base2_temp[0][index] = [month, day].join(" ");
        days_to_filt1.push(day);
    });
    items_base2_temp.splice(1, 1);
    items_base2 = items_base2_temp;
    select_meaningful();
}


function select_meaningful() {
    window.countC0 = 0;
    window.countC1 = 0;
    window.countC2 = 0;
    window.words_to_filter = [
        [],
        [],
        []
    ];
    items_base2.forEach( function( categ, index1 ) {
        column = categ.slice( 1, 9 );
        column.forEach( function( word, ind ) {
            column[ ind ] = word.toLowerCase();
        } );
        column.sort();
        column.splice( 8, 0, "None" );
        column.forEach( function( word, index2 ) {
            var id_full = [ "#wo", index1, index2 ].join( "" );
            $( id_full ).text( word );
        } );
    } );
    $( ".words0" ).click( function() {
        var this_word = $( this ).text();
        if ( this_word == "None" ) {
            if ( $( this ).hasClass( 'turnedon' ) ) {
                $( this ).removeClass( 'turnedon' );
                countC0 = 0;
            } else {
                if ( countC0 === 0 ) {
                    $( this ).addClass( 'turnedon' );
                    countC0 = 9;
                }
            }
        } else {
            if ( $( this ).hasClass( 'turnedon' ) ) {
                $( this ).removeClass( 'turnedon' );
                words_to_filter[ 0 ] = $.grep( words_to_filter[ 0 ], function( a ) {
                    return a != this_word;
                } );
                countC0--;
            } else {
                if ( countC0 < 2 ) {
                    $( this ).addClass( 'turnedon' );
                    words_to_filter[ 0 ].push( this_word );
                    countC0++;
                }
            }
        }
    } );
    $( ".words1" ).click( function() {
        var this_word = $( this ).text();
        if ( this_word == "None" ) {
            if ( $( this ).hasClass( 'turnedon' ) ) {
                $( this ).removeClass( 'turnedon' );
                countC1 = 0;
            } else {
                if ( countC1 === 0 ) {
                    $( this ).addClass( 'turnedon' );
                    countC1 = 9;
                }
            }
        } else {
            if ( $( this ).hasClass( 'turnedon' ) ) {
                $( this ).removeClass( 'turnedon' );
                words_to_filter[ 1 ] = $.grep( words_to_filter[ 1 ], function( a ) {
                    return a != this_word;
                } );
                countC1--;
            } else {
                if ( countC1 < 2 ) {
                    $( this ).addClass( 'turnedon' );
                    words_to_filter[ 1 ].push( this_word );
                    countC1++;
                }
            }
        }
    } );
    $( ".words2" ).click( function() {
        var this_word = $( this ).text();
        if ( this_word == "None" ) {
            if ( $( this ).hasClass( 'turnedon' ) ) {
                $( this ).removeClass( 'turnedon' );
                countC2 = 0;
            } else {
                if ( countC2 === 0 ) {
                    $( this ).addClass( 'turnedon' );
                    countC2 = 9;
                }
            }
        } else {
            if ( $( this ).hasClass( 'turnedon' ) ) {
                $( this ).removeClass( 'turnedon' );
                words_to_filter[ 2 ] = $.grep( words_to_filter[ 2 ], function( a ) {
                    return a != this_word;
                } );
                countC2--;
            } else {
                if ( countC2 < 2 ) {
                    $( this ).addClass( 'turnedon' );
                    words_to_filter[ 2 ].push( this_word );
                    countC2++;
                }
            }
        }
    } );
}

var stim_base = [];
function create_stim_base() {
    //creates all stimuli (a 6-item group - 1probe,1target,4irrelevants - for each of 4 different categories) from the given item and probe words
    items_base2.forEach(function(categ, index) {
        var filtered_words = $.grep(categ, function(a) {
            return $.inArray(a, words_to_filter[index]) == -1;
        });
        var words_array = [];
        if (true) { // always true here - Python will decide condition
            words_array = [filtered_words[0]].concat(
                shuffle(filtered_words.slice(1, 7))
            ); // for GUILTY
        } else {
            words_array = shuffle(filtered_words.slice(1, 7)); // for INNOCENT
        }
        words_array.forEach(function(worrd, index) {
            words_array[index] = capitalize(worrd);
        });
        stim_base.push(words_array);
    });
    console.log(stim_base[0]);
    console.log(stim_base[1]);
    ready_stims = true;
    for_py = "countries = ['" + stim_base[2].join("', '") + "']";
    for_py += "\ndates = ['" + stim_base[0].join("', '") + "']";
    for_py += "\nanimals = ['" + stim_base[1].join("', '") + "']";
    console.log(for_py);
    for_py2 = "countries = ['" + stim_base[2].join("', '") + "']";
    for_py2 += "<br>dates = ['" + stim_base[0].join("', '") + "']";
    for_py2 += "<br>animals = ['" + stim_base[1].join("', '") + "']";
    element = $('<textarea>').appendTo('body').val(for_py).select();
    document.execCommand("Copy");
    element.remove();
}
var ready_stims = false;
var for_py,for_py2;
$(document).ready(function() {
    $(document).keyup(function(es) {
        //starting screen
        if (ready_stims === true) {
            keys_code = es.keyCode || es.which;
            if (keys_code == 69 || keys_code == 73) {
                $("#instructions").html(for_py2);
            }
        }
    });
});
