// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

// = require ace/ace
// = require ace/worker-html

//= require ace/theme-monokai
//= require ace/mode-markdown

$(document).on('ready page:load', function() {
  $('textarea[data-editor]').each(function() {
    var textarea = $(this);
    var mode = textarea.data('editor');
    var editDiv = $('<div>', {
      position: 'absolute',
      width: textarea.width(),
      height: textarea.height(),
      'class': textarea.attr('class')
    }).insertBefore(textarea);
    textarea.css('display', 'none');
    var editor = ace.edit(editDiv[0]);
    editor.setTheme("ace/theme/solarized_light");
    editor.renderer.setShowGutter(true);
    editor.getSession().setValue(textarea.val());
    editor.getSession().setUseWrapMode(true);
    editor.getSession().setMode("ace/mode/" + mode);
    // copy back to textarea on form submit...
    textarea.closest('form').submit(function() {
      textarea.val(editor.getSession().getValue());
    })
  });
});