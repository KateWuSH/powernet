$(document).ready(function() {
    $('#about .info .imgL').waypoint(function() {
        $('.info .imgL').addClass('movein');
    }, {
        offset: '50%'
    });

    $('#about .intro').waypoint(function() {
        $('.intro').addClass('movein');
    }, {
        offset: '50%'
    });

    $('#about .mission').waypoint(function() {
        $('.mission').addClass('movein');
    }, {
        offset: '50%'
    });
    $('#about .concept').waypoint(function() {
        $('.concept').addClass('movein');
    }, {
        offset: '50%'
    });
    $('#about .concept .content .text.animated01').waypoint(function() {
        $('.concept .content .text.animated01').addClass('movein');
    }, {
        offset: '50%'
    });

    $('#about .concept .content .text.animated02').waypoint(function() {
        $('.concept .content .text.animated02').addClass('movein');
    }, {
        offset: '50%'
    });

    $('#about .concept .content .text.animated03').waypoint(function() {
        $('.concept .content .text.animated03').addClass('movein');
    }, {
        offset: '50%'
    });

    $('#about .value .text').waypoint(function() {
        $('.value .text').addClass('movein');
    }, {
        offset: '50%'
    });

    $('#about .cis .text').waypoint(function() {
        $('.cis .text').addClass('movein');
    }, {
        offset: '50%'
    });
})