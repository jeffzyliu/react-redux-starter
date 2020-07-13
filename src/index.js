import $ from 'jquery';
import './style.scss';

let time = 0;
$('#main').html(`You've been on this page for ${time} seconds`);
time += 1;
setInterval(() => {
  $('#main').html(`You've been on this page for ${time} seconds`);
  time += 1;
}, 1000);
