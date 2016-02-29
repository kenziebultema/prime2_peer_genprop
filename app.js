//generate random property IDs, sq ft, $/sq ft
//animate to slide down on load, slide up on remove

$(document).ready(function(){
    $('.create').on('click', createProperty);
    $('.container').on('click', '.remove', showDiv);
});

function createProperty(){
    var random = randomNumber(1000, 9999);
    var id = random;
    random = randomNumber(1000, 4000);
    var sqft = random;
    random = randomNumber(1, 99);
    var costPer = random;
    appendDom(id, sqft, costPer);
}

function showDiv(){
    $(this).parent().parent().slideUp();
}

function appendDom(id, sqft, costPer){
    $('.container').append('<div class="property"></div>');
    var $el = $('.container').children().last();

    $el.append('<div class="id"><p>Property ID: ' + id + '</p></div>');
    $el.append('<div class="sqft"><p>' + sqft + ' Sq. Ft.</p></div>');
    $el.append('<div class="cost-per"><p>$' + costPer + ' / sq. ft.</p></div>');
    $el.append('<div class="butDiv"><button class="remove">Remove</button></div>');
    $el.hide().slideDown();
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (1 + max - min) + min);
}
