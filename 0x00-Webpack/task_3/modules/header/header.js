import $ from 'jquery';

console.log('Init header');

$('#logo').css({
    width: '200px',
    height: '200px',
    backgroundImage: 'url(../assets/holberton-logo.jpg)',
    backgroundSize: 'cover'
});

$('body').prepend('<header><h1>Holberton Dashboard</h1></header>');
