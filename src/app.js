import $ from 'jquery';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import CSController from './modules/CSController.js';

$(document).ready(function() {
  new CSController();
});