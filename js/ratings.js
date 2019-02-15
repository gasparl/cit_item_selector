$("input[name=name_of_your_radiobutton]:checked").val();

//after likert, check if all filled in
var lscales = [];
function validate_likert() {
    console.log("submission...");
    var is_valid = true;
    $("input:radio").each(function() {
        var rname = $(this).attr("name");
        if ($.inArray(rname, lscales) == -1) lscales.push(rname);
    });
    $.each(lscales, function(i, lscale) {
        if ($('input[name="' + lscale + '"]:checked').length == 0) {
            is_valid = false;
        }
    });
    if (is_valid === false) {
        console.log("sth not filled...");
        alert("Please choose an answer in each category.");
    }
    return is_valid;
}

function save_ratings() {
    console.log("saving");
    to_copy = '';
    $.each(lscales, function(i, lscale) {
        to_copy += "\t" + $('input[name="' + lscale + '"]:checked').val();
    });
    element = $('<textarea>').appendTo('body').val(to_copy).select();
    document.execCommand("Copy");
    element.remove();
    console.log(to_copy);
}

// change div - if good to go. Two optional function to include in execution (default does nothing)
function done() {
    if (validate_likert() === true) {
        save_ratings()
        $("#div_ratings").hide();
        $("#instructions").show();
    }
}

//calculate sum
function sum(array_to_sum) {
    var sum = 0;
    array_to_sum.forEach(function(item) {
        sum += item;
    });
    return sum;
}
//calculate mean
function mean(array_to_avg) {
    var mean = sum(array_to_avg) / array_to_avg.length;
    return mean;
}

function randomdigit(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//shuffle
function shuffle(array) {
    var newarr = [];
    var currentIndex = array.length,
        temporaryValue,
        randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        newarr[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return newarr;
}

// random choice from array
function rchoice(array) {
    return array[Math.floor(array.length * Math.random())];
}

// pythonic range (integers from START until before END)
function range(start, end) {
    r = [];
    for (var i = start; i < end; i++) {
        r.push(i);
    }
    return r;
}
