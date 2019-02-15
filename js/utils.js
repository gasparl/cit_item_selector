//only allow number in input field
function validate(evt) {
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode(key);
    var regex = /[0-9]/;
    if (!regex.test(key)) {
        theEvent.returnValue = false;
        if (theEvent.preventDefault) theEvent.preventDefault();
    }
}


//do nothing
function noop() {
    $.noop();
}

// change div - if good to go. Two optional function to include in execution (default does nothing)
function change_div(
    current,
    next,
    good_to_go = true,
    onchange_function1 = noop,
    onchange_function2 = noop
) {
    if (good_to_go === true) {
        onchange_function1();
        onchange_function2();
        var toHide = "#" + current.parentNode.id;
        $(toHide).hide();
        $(next).show();
    }
}

//after forms, check if all filled in
function validate_form(form_class) {
    var is_valid = true;
    $(form_class).each(function() {
        if ($(this).val() === "") is_valid = false;
    });
    if (is_valid === false) {
        alert("Please fill out all fields.");
    }
    return is_valid;
}

//validate selection of meaningful items
function check_selected() {
    var is_valid = true;
    if (countC0 === 0 || countC1 === 0 || countC2 === 0 ) {
        is_valid = false;
        alert(
            'Please select at least one item from each category, or click "None".'
        );
    }
    return is_valid;
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
