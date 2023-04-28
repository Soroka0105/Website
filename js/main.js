// jQuery Mask Plugin v1.14.16
// github.com/igorescobar/jQuery-Mask-Plugin
var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.findInternal=function(a,n,f){a instanceof String&&(a=String(a));for(var p=a.length,k=0;k<p;k++){var b=a[k];if(n.call(f,b,k,a))return{i:k,v:b}}return{i:-1,v:void 0}};$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;$jscomp.SIMPLE_FROUND_POLYFILL=!1;
$jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(a,n,f){a!=Array.prototype&&a!=Object.prototype&&(a[n]=f.value)};$jscomp.getGlobal=function(a){return"undefined"!=typeof window&&window===a?a:"undefined"!=typeof global&&null!=global?global:a};$jscomp.global=$jscomp.getGlobal(this);
$jscomp.polyfill=function(a,n,f,p){if(n){f=$jscomp.global;a=a.split(".");for(p=0;p<a.length-1;p++){var k=a[p];k in f||(f[k]={});f=f[k]}a=a[a.length-1];p=f[a];n=n(p);n!=p&&null!=n&&$jscomp.defineProperty(f,a,{configurable:!0,writable:!0,value:n})}};$jscomp.polyfill("Array.prototype.find",function(a){return a?a:function(a,f){return $jscomp.findInternal(this,a,f).v}},"es6","es3");
(function(a,n,f){"function"===typeof define&&define.amd?define(["jquery"],a):"object"===typeof exports&&"undefined"===typeof Meteor?module.exports=a(require("jquery")):a(n||f)})(function(a){var n=function(b,d,e){var c={invalid:[],getCaret:function(){try{var a=0,r=b.get(0),h=document.selection,d=r.selectionStart;if(h&&-1===navigator.appVersion.indexOf("MSIE 10")){var e=h.createRange();e.moveStart("character",-c.val().length);a=e.text.length}else if(d||"0"===d)a=d;return a}catch(C){}},setCaret:function(a){try{if(b.is(":focus")){var c=
b.get(0);if(c.setSelectionRange)c.setSelectionRange(a,a);else{var g=c.createTextRange();g.collapse(!0);g.moveEnd("character",a);g.moveStart("character",a);g.select()}}}catch(B){}},events:function(){b.on("keydown.mask",function(a){b.data("mask-keycode",a.keyCode||a.which);b.data("mask-previus-value",b.val());b.data("mask-previus-caret-pos",c.getCaret());c.maskDigitPosMapOld=c.maskDigitPosMap}).on(a.jMaskGlobals.useInput?"input.mask":"keyup.mask",c.behaviour).on("paste.mask drop.mask",function(){setTimeout(function(){b.keydown().keyup()},
100)}).on("change.mask",function(){b.data("changed",!0)}).on("blur.mask",function(){f===c.val()||b.data("changed")||b.trigger("change");b.data("changed",!1)}).on("blur.mask",function(){f=c.val()}).on("focus.mask",function(b){!0===e.selectOnFocus&&a(b.target).select()}).on("focusout.mask",function(){e.clearIfNotMatch&&!k.test(c.val())&&c.val("")})},getRegexMask:function(){for(var a=[],b,c,e,t,f=0;f<d.length;f++)(b=l.translation[d.charAt(f)])?(c=b.pattern.toString().replace(/.{1}$|^.{1}/g,""),e=b.optional,
(b=b.recursive)?(a.push(d.charAt(f)),t={digit:d.charAt(f),pattern:c}):a.push(e||b?c+"?":c)):a.push(d.charAt(f).replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"));a=a.join("");t&&(a=a.replace(new RegExp("("+t.digit+"(.*"+t.digit+")?)"),"($1)?").replace(new RegExp(t.digit,"g"),t.pattern));return new RegExp(a)},destroyEvents:function(){b.off("input keydown keyup paste drop blur focusout ".split(" ").join(".mask "))},val:function(a){var c=b.is("input")?"val":"text";if(0<arguments.length){if(b[c]()!==a)b[c](a);
c=b}else c=b[c]();return c},calculateCaretPosition:function(a){var d=c.getMasked(),h=c.getCaret();if(a!==d){var e=b.data("mask-previus-caret-pos")||0;d=d.length;var g=a.length,f=a=0,l=0,k=0,m;for(m=h;m<d&&c.maskDigitPosMap[m];m++)f++;for(m=h-1;0<=m&&c.maskDigitPosMap[m];m--)a++;for(m=h-1;0<=m;m--)c.maskDigitPosMap[m]&&l++;for(m=e-1;0<=m;m--)c.maskDigitPosMapOld[m]&&k++;h>g?h=10*d:e>=h&&e!==g?c.maskDigitPosMapOld[h]||(e=h,h=h-(k-l)-a,c.maskDigitPosMap[h]&&(h=e)):h>e&&(h=h+(l-k)+f)}return h},behaviour:function(d){d=
d||window.event;c.invalid=[];var e=b.data("mask-keycode");if(-1===a.inArray(e,l.byPassKeys)){e=c.getMasked();var h=c.getCaret(),g=b.data("mask-previus-value")||"";setTimeout(function(){c.setCaret(c.calculateCaretPosition(g))},a.jMaskGlobals.keyStrokeCompensation);c.val(e);c.setCaret(h);return c.callbacks(d)}},getMasked:function(a,b){var h=[],f=void 0===b?c.val():b+"",g=0,k=d.length,n=0,p=f.length,m=1,r="push",u=-1,w=0;b=[];if(e.reverse){r="unshift";m=-1;var x=0;g=k-1;n=p-1;var A=function(){return-1<
g&&-1<n}}else x=k-1,A=function(){return g<k&&n<p};for(var z;A();){var y=d.charAt(g),v=f.charAt(n),q=l.translation[y];if(q)v.match(q.pattern)?(h[r](v),q.recursive&&(-1===u?u=g:g===x&&g!==u&&(g=u-m),x===u&&(g-=m)),g+=m):v===z?(w--,z=void 0):q.optional?(g+=m,n-=m):q.fallback?(h[r](q.fallback),g+=m,n-=m):c.invalid.push({p:n,v:v,e:q.pattern}),n+=m;else{if(!a)h[r](y);v===y?(b.push(n),n+=m):(z=y,b.push(n+w),w++);g+=m}}a=d.charAt(x);k!==p+1||l.translation[a]||h.push(a);h=h.join("");c.mapMaskdigitPositions(h,
b,p);return h},mapMaskdigitPositions:function(a,b,d){a=e.reverse?a.length-d:0;c.maskDigitPosMap={};for(d=0;d<b.length;d++)c.maskDigitPosMap[b[d]+a]=1},callbacks:function(a){var g=c.val(),h=g!==f,k=[g,a,b,e],l=function(a,b,c){"function"===typeof e[a]&&b&&e[a].apply(this,c)};l("onChange",!0===h,k);l("onKeyPress",!0===h,k);l("onComplete",g.length===d.length,k);l("onInvalid",0<c.invalid.length,[g,a,b,c.invalid,e])}};b=a(b);var l=this,f=c.val(),k;d="function"===typeof d?d(c.val(),void 0,b,e):d;l.mask=
d;l.options=e;l.remove=function(){var a=c.getCaret();l.options.placeholder&&b.removeAttr("placeholder");b.data("mask-maxlength")&&b.removeAttr("maxlength");c.destroyEvents();c.val(l.getCleanVal());c.setCaret(a);return b};l.getCleanVal=function(){return c.getMasked(!0)};l.getMaskedVal=function(a){return c.getMasked(!1,a)};l.init=function(g){g=g||!1;e=e||{};l.clearIfNotMatch=a.jMaskGlobals.clearIfNotMatch;l.byPassKeys=a.jMaskGlobals.byPassKeys;l.translation=a.extend({},a.jMaskGlobals.translation,e.translation);
l=a.extend(!0,{},l,e);k=c.getRegexMask();if(g)c.events(),c.val(c.getMasked());else{e.placeholder&&b.attr("placeholder",e.placeholder);b.data("mask")&&b.attr("autocomplete","off");g=0;for(var f=!0;g<d.length;g++){var h=l.translation[d.charAt(g)];if(h&&h.recursive){f=!1;break}}f&&b.attr("maxlength",d.length).data("mask-maxlength",!0);c.destroyEvents();c.events();g=c.getCaret();c.val(c.getMasked());c.setCaret(g)}};l.init(!b.is("input"))};a.maskWatchers={};var f=function(){var b=a(this),d={},e=b.attr("data-mask");
b.attr("data-mask-reverse")&&(d.reverse=!0);b.attr("data-mask-clearifnotmatch")&&(d.clearIfNotMatch=!0);"true"===b.attr("data-mask-selectonfocus")&&(d.selectOnFocus=!0);if(p(b,e,d))return b.data("mask",new n(this,e,d))},p=function(b,d,e){e=e||{};var c=a(b).data("mask"),f=JSON.stringify;b=a(b).val()||a(b).text();try{return"function"===typeof d&&(d=d(b)),"object"!==typeof c||f(c.options)!==f(e)||c.mask!==d}catch(w){}},k=function(a){var b=document.createElement("div");a="on"+a;var e=a in b;e||(b.setAttribute(a,
"return;"),e="function"===typeof b[a]);return e};a.fn.mask=function(b,d){d=d||{};var e=this.selector,c=a.jMaskGlobals,f=c.watchInterval;c=d.watchInputs||c.watchInputs;var k=function(){if(p(this,b,d))return a(this).data("mask",new n(this,b,d))};a(this).each(k);e&&""!==e&&c&&(clearInterval(a.maskWatchers[e]),a.maskWatchers[e]=setInterval(function(){a(document).find(e).each(k)},f));return this};a.fn.masked=function(a){return this.data("mask").getMaskedVal(a)};a.fn.unmask=function(){clearInterval(a.maskWatchers[this.selector]);
delete a.maskWatchers[this.selector];return this.each(function(){var b=a(this).data("mask");b&&b.remove().removeData("mask")})};a.fn.cleanVal=function(){return this.data("mask").getCleanVal()};a.applyDataMask=function(b){b=b||a.jMaskGlobals.maskElements;(b instanceof a?b:a(b)).filter(a.jMaskGlobals.dataMaskAttr).each(f)};k={maskElements:"input,td,span,div",dataMaskAttr:"*[data-mask]",dataMask:!0,watchInterval:300,watchInputs:!0,keyStrokeCompensation:10,useInput:!/Chrome\/[2-4][0-9]|SamsungBrowser/.test(window.navigator.userAgent)&&
k("input"),watchDataMask:!1,byPassKeys:[9,16,17,18,36,37,38,39,40,91],translation:{0:{pattern:/\d/},9:{pattern:/\d/,optional:!0},"#":{pattern:/\d/,recursive:!0},A:{pattern:/[a-zA-Z0-9]/},S:{pattern:/[a-zA-Z]/}}};a.jMaskGlobals=a.jMaskGlobals||{};k=a.jMaskGlobals=a.extend(!0,{},k,a.jMaskGlobals);k.dataMask&&a.applyDataMask();setInterval(function(){a.jMaskGlobals.watchDataMask&&a.applyDataMask()},k.watchInterval)},window.jQuery,window.Zepto);

/*  jQuery Nice Select - v1.1.0
    https://github.com/hernansartorio/jquery-nice-select
    Made by Hernán Sartorio  */
 
(function($) {

  $.fn.niceSelect = function(method) {
    
    // Methods
    if (typeof method == 'string') {      
      if (method == 'update') {
        this.each(function() {
          var $select = $(this);
          var $dropdown = $(this).next('.nice-select');
          var open = $dropdown.hasClass('open');
          
          if ($dropdown.length) {
            $dropdown.remove();
            create_nice_select($select);
            
            if (open) {
              $select.next().trigger('click');
            }
          }
        });
      } else if (method == 'destroy') {
        this.each(function() {
          var $select = $(this);
          var $dropdown = $(this).next('.nice-select');
          
          if ($dropdown.length) {
            $dropdown.remove();
            $select.css('display', '');
          }
        });
        if ($('.nice-select').length == 0) {
          $(document).off('.nice_select');
        }
      } else {
        console.log('Method "' + method + '" does not exist.')
      }
      return this;
    }
      
    // Hide native select
    this.hide();
    
    // Create custom markup
    this.each(function() {
      var $select = $(this);
      
      if (!$select.next().hasClass('nice-select')) {
        create_nice_select($select);
      }
    });
    
    function create_nice_select($select) {
      $select.after($('<div></div>')
        .addClass('nice-select')
        .addClass($select.attr('class') || '')
        .addClass($select.attr('disabled') ? 'disabled' : '')
        .attr('tabindex', $select.attr('disabled') ? null : '0')
        .html('<span class="current"></span><ul class="list"></ul>')
      );
        
      var $dropdown = $select.next();
      var $options = $select.find('option');
      var $selected = $select.find('option:selected');
      
      $dropdown.find('.current').html($selected.data('display') || $selected.text());
      
      $options.each(function(i) {
        var $option = $(this);
        var display = $option.data('display');

        $dropdown.find('ul').append($('<li></li>')
          .attr('data-value', $option.val())
          .attr('data-display', (display || null))
          .addClass('option' +
            ($option.is(':selected') ? ' selected' : '') +
            ($option.is(':disabled') ? ' disabled' : ''))
          .html($option.text())
        );
      });
    }
    
    /* Event listeners */
    
    // Unbind existing events in case that the plugin has been initialized before
    $(document).off('.nice_select');
    
    // Open/close
    $(document).on('click.nice_select', '.nice-select', function(event) {
      var $dropdown = $(this);
      
      $('.nice-select').not($dropdown).removeClass('open');
      $dropdown.toggleClass('open');
      
      if ($dropdown.hasClass('open')) {
        $dropdown.find('.option');  
        $dropdown.find('.focus').removeClass('focus');
        $dropdown.find('.selected').addClass('focus');
      } else {
        $dropdown.focus();
      }
    });
    
    // Close when clicking outside
    $(document).on('click.nice_select', function(event) {
      if ($(event.target).closest('.nice-select').length === 0) {
        $('.nice-select').removeClass('open').find('.option');  
      }
    });
    
    // Option click
    $(document).on('click.nice_select', '.nice-select .option:not(.disabled)', function(event) {
      var $option = $(this);
      var $dropdown = $option.closest('.nice-select');
      
      $dropdown.find('.selected').removeClass('selected');
      $option.addClass('selected');
      
      var text = $option.data('display') || $option.text();
      $dropdown.find('.current').text(text);
      
      $dropdown.prev('select').val($option.data('value')).trigger('change');
    });

    // Keyboard events
    $(document).on('keydown.nice_select', '.nice-select', function(event) {    
      var $dropdown = $(this);
      var $focused_option = $($dropdown.find('.focus') || $dropdown.find('.list .option.selected'));
      
      // Space or Enter
      if (event.keyCode == 32 || event.keyCode == 13) {
        if ($dropdown.hasClass('open')) {
          $focused_option.trigger('click');
        } else {
          $dropdown.trigger('click');
        }
        return false;
      // Down
      } else if (event.keyCode == 40) {
        if (!$dropdown.hasClass('open')) {
          $dropdown.trigger('click');
        } else {
          var $next = $focused_option.nextAll('.option:not(.disabled)').first();
          if ($next.length > 0) {
            $dropdown.find('.focus').removeClass('focus');
            $next.addClass('focus');
          }
        }
        return false;
      // Up
      } else if (event.keyCode == 38) {
        if (!$dropdown.hasClass('open')) {
          $dropdown.trigger('click');
        } else {
          var $prev = $focused_option.prevAll('.option:not(.disabled)').first();
          if ($prev.length > 0) {
            $dropdown.find('.focus').removeClass('focus');
            $prev.addClass('focus');
          }
        }
        return false;
      // Esc
      } else if (event.keyCode == 27) {
        if ($dropdown.hasClass('open')) {
          $dropdown.trigger('click');
        }
      // Tab
      } else if (event.keyCode == 9) {
        if ($dropdown.hasClass('open')) {
          return false;
        }
      }
    });

    // Detect CSS pointer-events support, for IE <= 10. From Modernizr.
    var style = document.createElement('a').style;
    style.cssText = 'pointer-events:auto';
    if (style.pointerEvents !== 'auto') {
      $('html').addClass('no-csspointerevents');
    }
    
    return this;

  };

}(jQuery));
/*! jQuery Validation Plugin - v1.19.1 - 6/15/2019
 * https://jqueryvalidation.org/
 * Copyright (c) 2019 Jörn Zaefferer; Licensed MIT */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof module&&module.exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){a.extend(a.fn,{validate:function(b){if(!this.length)return void(b&&b.debug&&window.console&&console.warn("Nothing selected, can't validate, returning nothing."));var c=a.data(this[0],"validator");return c?c:(this.attr("novalidate","novalidate"),c=new a.validator(b,this[0]),a.data(this[0],"validator",c),c.settings.onsubmit&&(this.on("click.validate",":submit",function(b){c.submitButton=b.currentTarget,a(this).hasClass("cancel")&&(c.cancelSubmit=!0),void 0!==a(this).attr("formnovalidate")&&(c.cancelSubmit=!0)}),this.on("submit.validate",function(b){function d(){var d,e;return c.submitButton&&(c.settings.submitHandler||c.formSubmitted)&&(d=a("<input type='hidden'/>").attr("name",c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)),!(c.settings.submitHandler&&!c.settings.debug)||(e=c.settings.submitHandler.call(c,c.currentForm,b),d&&d.remove(),void 0!==e&&e)}return c.settings.debug&&b.preventDefault(),c.cancelSubmit?(c.cancelSubmit=!1,d()):c.form()?c.pendingRequest?(c.formSubmitted=!0,!1):d():(c.focusInvalid(),!1)})),c)},valid:function(){var b,c,d;return a(this[0]).is("form")?b=this.validate().form():(d=[],b=!0,c=a(this[0].form).validate(),this.each(function(){b=c.element(this)&&b,b||(d=d.concat(c.errorList))}),c.errorList=d),b},rules:function(b,c){var d,e,f,g,h,i,j=this[0],k="undefined"!=typeof this.attr("contenteditable")&&"false"!==this.attr("contenteditable");if(null!=j&&(!j.form&&k&&(j.form=this.closest("form")[0],j.name=this.attr("name")),null!=j.form)){if(b)switch(d=a.data(j.form,"validator").settings,e=d.rules,f=a.validator.staticRules(j),b){case"add":a.extend(f,a.validator.normalizeRule(c)),delete f.messages,e[j.name]=f,c.messages&&(d.messages[j.name]=a.extend(d.messages[j.name],c.messages));break;case"remove":return c?(i={},a.each(c.split(/\s/),function(a,b){i[b]=f[b],delete f[b]}),i):(delete e[j.name],f)}return g=a.validator.normalizeRules(a.extend({},a.validator.classRules(j),a.validator.attributeRules(j),a.validator.dataRules(j),a.validator.staticRules(j)),j),g.required&&(h=g.required,delete g.required,g=a.extend({required:h},g)),g.remote&&(h=g.remote,delete g.remote,g=a.extend(g,{remote:h})),g}}}),a.extend(a.expr.pseudos||a.expr[":"],{blank:function(b){return!a.trim(""+a(b).val())},filled:function(b){var c=a(b).val();return null!==c&&!!a.trim(""+c)},unchecked:function(b){return!a(b).prop("checked")}}),a.validator=function(b,c){this.settings=a.extend(!0,{},a.validator.defaults,b),this.currentForm=c,this.init()},a.validator.format=function(b,c){return 1===arguments.length?function(){var c=a.makeArray(arguments);return c.unshift(b),a.validator.format.apply(this,c)}:void 0===c?b:(arguments.length>2&&c.constructor!==Array&&(c=a.makeArray(arguments).slice(1)),c.constructor!==Array&&(c=[c]),a.each(c,function(a,c){b=b.replace(new RegExp("\\{"+a+"\\}","g"),function(){return c})}),b)},a.extend(a.validator,{defaults:{messages:{},groups:{},rules:{},errorClass:"error",pendingClass:"pending",validClass:"valid",errorElement:"label",focusCleanup:!1,focusInvalid:!0,errorContainer:a([]),errorLabelContainer:a([]),onsubmit:!0,ignore:":hidden",ignoreTitle:!1,onfocusin:function(a){this.lastActive=a,this.settings.focusCleanup&&(this.settings.unhighlight&&this.settings.unhighlight.call(this,a,this.settings.errorClass,this.settings.validClass),this.hideThese(this.errorsFor(a)))},onfocusout:function(a){this.checkable(a)||!(a.name in this.submitted)&&this.optional(a)||this.element(a)},onkeyup:function(b,c){var d=[16,17,18,20,35,36,37,38,39,40,45,144,225];9===c.which&&""===this.elementValue(b)||a.inArray(c.keyCode,d)!==-1||(b.name in this.submitted||b.name in this.invalid)&&this.element(b)},onclick:function(a){a.name in this.submitted?this.element(a):a.parentNode.name in this.submitted&&this.element(a.parentNode)},highlight:function(b,c,d){"radio"===b.type?this.findByName(b.name).addClass(c).removeClass(d):a(b).addClass(c).removeClass(d)},unhighlight:function(b,c,d){"radio"===b.type?this.findByName(b.name).removeClass(c).addClass(d):a(b).removeClass(c).addClass(d)}},setDefaults:function(b){a.extend(a.validator.defaults,b)},messages:{required:"This field is required.",remote:"Please fix this field.",email:"Please enter a valid email address.",url:"Please enter a valid URL.",date:"Please enter a valid date.",dateISO:"Please enter a valid date (ISO).",number:"Please enter a valid number.",digits:"Please enter only digits.",equalTo:"Please enter the same value again.",maxlength:a.validator.format("Please enter no more than {0} characters."),minlength:a.validator.format("Please enter at least {0} characters."),rangelength:a.validator.format("Please enter a value between {0} and {1} characters long."),range:a.validator.format("Please enter a value between {0} and {1}."),max:a.validator.format("Please enter a value less than or equal to {0}."),min:a.validator.format("Please enter a value greater than or equal to {0}."),step:a.validator.format("Please enter a multiple of {0}.")},autoCreateRanges:!1,prototype:{init:function(){function b(b){var c="undefined"!=typeof a(this).attr("contenteditable")&&"false"!==a(this).attr("contenteditable");if(!this.form&&c&&(this.form=a(this).closest("form")[0],this.name=a(this).attr("name")),d===this.form){var e=a.data(this.form,"validator"),f="on"+b.type.replace(/^validate/,""),g=e.settings;g[f]&&!a(this).is(g.ignore)&&g[f].call(e,this,b)}}this.labelContainer=a(this.settings.errorLabelContainer),this.errorContext=this.labelContainer.length&&this.labelContainer||a(this.currentForm),this.containers=a(this.settings.errorContainer).add(this.settings.errorLabelContainer),this.submitted={},this.valueCache={},this.pendingRequest=0,this.pending={},this.invalid={},this.reset();var c,d=this.currentForm,e=this.groups={};a.each(this.settings.groups,function(b,c){"string"==typeof c&&(c=c.split(/\s/)),a.each(c,function(a,c){e[c]=b})}),c=this.settings.rules,a.each(c,function(b,d){c[b]=a.validator.normalizeRule(d)}),a(this.currentForm).on("focusin.validate focusout.validate keyup.validate",":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']",b).on("click.validate","select, option, [type='radio'], [type='checkbox']",b),this.settings.invalidHandler&&a(this.currentForm).on("invalid-form.validate",this.settings.invalidHandler)},form:function(){return this.checkForm(),a.extend(this.submitted,this.errorMap),this.invalid=a.extend({},this.errorMap),this.valid()||a(this.currentForm).triggerHandler("invalid-form",[this]),this.showErrors(),this.valid()},checkForm:function(){this.prepareForm();for(var a=0,b=this.currentElements=this.elements();b[a];a++)this.check(b[a]);return this.valid()},element:function(b){var c,d,e=this.clean(b),f=this.validationTargetFor(e),g=this,h=!0;return void 0===f?delete this.invalid[e.name]:(this.prepareElement(f),this.currentElements=a(f),d=this.groups[f.name],d&&a.each(this.groups,function(a,b){b===d&&a!==f.name&&(e=g.validationTargetFor(g.clean(g.findByName(a))),e&&e.name in g.invalid&&(g.currentElements.push(e),h=g.check(e)&&h))}),c=this.check(f)!==!1,h=h&&c,c?this.invalid[f.name]=!1:this.invalid[f.name]=!0,this.numberOfInvalids()||(this.toHide=this.toHide.add(this.containers)),this.showErrors(),a(b).attr("aria-invalid",!c)),h},showErrors:function(b){if(b){var c=this;a.extend(this.errorMap,b),this.errorList=a.map(this.errorMap,function(a,b){return{message:a,element:c.findByName(b)[0]}}),this.successList=a.grep(this.successList,function(a){return!(a.name in b)})}this.settings.showErrors?this.settings.showErrors.call(this,this.errorMap,this.errorList):this.defaultShowErrors()},resetForm:function(){a.fn.resetForm&&a(this.currentForm).resetForm(),this.invalid={},this.submitted={},this.prepareForm(),this.hideErrors();var b=this.elements().removeData("previousValue").removeAttr("aria-invalid");this.resetElements(b)},resetElements:function(a){var b;if(this.settings.unhighlight)for(b=0;a[b];b++)this.settings.unhighlight.call(this,a[b],this.settings.errorClass,""),this.findByName(a[b].name).removeClass(this.settings.validClass);else a.removeClass(this.settings.errorClass).removeClass(this.settings.validClass)},numberOfInvalids:function(){return this.objectLength(this.invalid)},objectLength:function(a){var b,c=0;for(b in a)void 0!==a[b]&&null!==a[b]&&a[b]!==!1&&c++;return c},hideErrors:function(){this.hideThese(this.toHide)},hideThese:function(a){a.not(this.containers).text(""),this.addWrapper(a).hide()},valid:function(){return 0===this.size()},size:function(){return this.errorList.length},focusInvalid:function(){if(this.settings.focusInvalid)try{a(this.findLastActive()||this.errorList.length&&this.errorList[0].element||[]).filter(":visible").trigger("focus").trigger("focusin")}catch(b){}},findLastActive:function(){var b=this.lastActive;return b&&1===a.grep(this.errorList,function(a){return a.element.name===b.name}).length&&b},elements:function(){var b=this,c={};return a(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function(){var d=this.name||a(this).attr("name"),e="undefined"!=typeof a(this).attr("contenteditable")&&"false"!==a(this).attr("contenteditable");return!d&&b.settings.debug&&window.console&&console.error("%o has no name assigned",this),e&&(this.form=a(this).closest("form")[0],this.name=d),this.form===b.currentForm&&(!(d in c||!b.objectLength(a(this).rules()))&&(c[d]=!0,!0))})},clean:function(b){return a(b)[0]},errors:function(){var b=this.settings.errorClass.split(" ").join(".");return a(this.settings.errorElement+"."+b,this.errorContext)},resetInternals:function(){this.successList=[],this.errorList=[],this.errorMap={},this.toShow=a([]),this.toHide=a([])},reset:function(){this.resetInternals(),this.currentElements=a([])},prepareForm:function(){this.reset(),this.toHide=this.errors().add(this.containers)},prepareElement:function(a){this.reset(),this.toHide=this.errorsFor(a)},elementValue:function(b){var c,d,e=a(b),f=b.type,g="undefined"!=typeof e.attr("contenteditable")&&"false"!==e.attr("contenteditable");return"radio"===f||"checkbox"===f?this.findByName(b.name).filter(":checked").val():"number"===f&&"undefined"!=typeof b.validity?b.validity.badInput?"NaN":e.val():(c=g?e.text():e.val(),"file"===f?"C:\\fakepath\\"===c.substr(0,12)?c.substr(12):(d=c.lastIndexOf("/"),d>=0?c.substr(d+1):(d=c.lastIndexOf("\\"),d>=0?c.substr(d+1):c)):"string"==typeof c?c.replace(/\r/g,""):c)},check:function(b){b=this.validationTargetFor(this.clean(b));var c,d,e,f,g=a(b).rules(),h=a.map(g,function(a,b){return b}).length,i=!1,j=this.elementValue(b);"function"==typeof g.normalizer?f=g.normalizer:"function"==typeof this.settings.normalizer&&(f=this.settings.normalizer),f&&(j=f.call(b,j),delete g.normalizer);for(d in g){e={method:d,parameters:g[d]};try{if(c=a.validator.methods[d].call(this,j,b,e.parameters),"dependency-mismatch"===c&&1===h){i=!0;continue}if(i=!1,"pending"===c)return void(this.toHide=this.toHide.not(this.errorsFor(b)));if(!c)return this.formatAndAdd(b,e),!1}catch(k){throw this.settings.debug&&window.console&&console.log("Exception occurred when checking element "+b.id+", check the '"+e.method+"' method.",k),k instanceof TypeError&&(k.message+=".  Exception occurred when checking element "+b.id+", check the '"+e.method+"' method."),k}}if(!i)return this.objectLength(g)&&this.successList.push(b),!0},customDataMessage:function(b,c){return a(b).data("msg"+c.charAt(0).toUpperCase()+c.substring(1).toLowerCase())||a(b).data("msg")},customMessage:function(a,b){var c=this.settings.messages[a];return c&&(c.constructor===String?c:c[b])},findDefined:function(){for(var a=0;a<arguments.length;a++)if(void 0!==arguments[a])return arguments[a]},defaultMessage:function(b,c){"string"==typeof c&&(c={method:c});var d=this.findDefined(this.customMessage(b.name,c.method),this.customDataMessage(b,c.method),!this.settings.ignoreTitle&&b.title||void 0,a.validator.messages[c.method],"<strong>Warning: No message defined for "+b.name+"</strong>"),e=/\$?\{(\d+)\}/g;return"function"==typeof d?d=d.call(this,c.parameters,b):e.test(d)&&(d=a.validator.format(d.replace(e,"{$1}"),c.parameters)),d},formatAndAdd:function(a,b){var c=this.defaultMessage(a,b);this.errorList.push({message:c,element:a,method:b.method}),this.errorMap[a.name]=c,this.submitted[a.name]=c},addWrapper:function(a){return this.settings.wrapper&&(a=a.add(a.parent(this.settings.wrapper))),a},defaultShowErrors:function(){var a,b,c;for(a=0;this.errorList[a];a++)c=this.errorList[a],this.settings.highlight&&this.settings.highlight.call(this,c.element,this.settings.errorClass,this.settings.validClass),this.showLabel(c.element,c.message);if(this.errorList.length&&(this.toShow=this.toShow.add(this.containers)),this.settings.success)for(a=0;this.successList[a];a++)this.showLabel(this.successList[a]);if(this.settings.unhighlight)for(a=0,b=this.validElements();b[a];a++)this.settings.unhighlight.call(this,b[a],this.settings.errorClass,this.settings.validClass);this.toHide=this.toHide.not(this.toShow),this.hideErrors(),this.addWrapper(this.toShow).show()},validElements:function(){return this.currentElements.not(this.invalidElements())},invalidElements:function(){return a(this.errorList).map(function(){return this.element})},showLabel:function(b,c){var d,e,f,g,h=this.errorsFor(b),i=this.idOrName(b),j=a(b).attr("aria-describedby");h.length?(h.removeClass(this.settings.validClass).addClass(this.settings.errorClass),h.html(c)):(h=a("<"+this.settings.errorElement+">").attr("id",i+"-error").addClass(this.settings.errorClass).html(c||""),d=h,this.settings.wrapper&&(d=h.hide().show().wrap("<"+this.settings.wrapper+"/>").parent()),this.labelContainer.length?this.labelContainer.append(d):this.settings.errorPlacement?this.settings.errorPlacement.call(this,d,a(b)):d.insertAfter(b),h.is("label")?h.attr("for",i):0===h.parents("label[for='"+this.escapeCssMeta(i)+"']").length&&(f=h.attr("id"),j?j.match(new RegExp("\\b"+this.escapeCssMeta(f)+"\\b"))||(j+=" "+f):j=f,a(b).attr("aria-describedby",j),e=this.groups[b.name],e&&(g=this,a.each(g.groups,function(b,c){c===e&&a("[name='"+g.escapeCssMeta(b)+"']",g.currentForm).attr("aria-describedby",h.attr("id"))})))),!c&&this.settings.success&&(h.text(""),"string"==typeof this.settings.success?h.addClass(this.settings.success):this.settings.success(h,b)),this.toShow=this.toShow.add(h)},errorsFor:function(b){var c=this.escapeCssMeta(this.idOrName(b)),d=a(b).attr("aria-describedby"),e="label[for='"+c+"'], label[for='"+c+"'] *";return d&&(e=e+", #"+this.escapeCssMeta(d).replace(/\s+/g,", #")),this.errors().filter(e)},escapeCssMeta:function(a){return a.replace(/([\\!"#$%&'()*+,.\/:;<=>?@\[\]^`{|}~])/g,"\\$1")},idOrName:function(a){return this.groups[a.name]||(this.checkable(a)?a.name:a.id||a.name)},validationTargetFor:function(b){return this.checkable(b)&&(b=this.findByName(b.name)),a(b).not(this.settings.ignore)[0]},checkable:function(a){return/radio|checkbox/i.test(a.type)},findByName:function(b){return a(this.currentForm).find("[name='"+this.escapeCssMeta(b)+"']")},getLength:function(b,c){switch(c.nodeName.toLowerCase()){case"select":return a("option:selected",c).length;case"input":if(this.checkable(c))return this.findByName(c.name).filter(":checked").length}return b.length},depend:function(a,b){return!this.dependTypes[typeof a]||this.dependTypes[typeof a](a,b)},dependTypes:{"boolean":function(a){return a},string:function(b,c){return!!a(b,c.form).length},"function":function(a,b){return a(b)}},optional:function(b){var c=this.elementValue(b);return!a.validator.methods.required.call(this,c,b)&&"dependency-mismatch"},startRequest:function(b){this.pending[b.name]||(this.pendingRequest++,a(b).addClass(this.settings.pendingClass),this.pending[b.name]=!0)},stopRequest:function(b,c){this.pendingRequest--,this.pendingRequest<0&&(this.pendingRequest=0),delete this.pending[b.name],a(b).removeClass(this.settings.pendingClass),c&&0===this.pendingRequest&&this.formSubmitted&&this.form()?(a(this.currentForm).submit(),this.submitButton&&a("input:hidden[name='"+this.submitButton.name+"']",this.currentForm).remove(),this.formSubmitted=!1):!c&&0===this.pendingRequest&&this.formSubmitted&&(a(this.currentForm).triggerHandler("invalid-form",[this]),this.formSubmitted=!1)},previousValue:function(b,c){return c="string"==typeof c&&c||"remote",a.data(b,"previousValue")||a.data(b,"previousValue",{old:null,valid:!0,message:this.defaultMessage(b,{method:c})})},destroy:function(){this.resetForm(),a(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur").find(".validate-lessThan-blur").off(".validate-lessThan").removeClass("validate-lessThan-blur").find(".validate-lessThanEqual-blur").off(".validate-lessThanEqual").removeClass("validate-lessThanEqual-blur").find(".validate-greaterThanEqual-blur").off(".validate-greaterThanEqual").removeClass("validate-greaterThanEqual-blur").find(".validate-greaterThan-blur").off(".validate-greaterThan").removeClass("validate-greaterThan-blur")}},classRuleSettings:{required:{required:!0},email:{email:!0},url:{url:!0},date:{date:!0},dateISO:{dateISO:!0},number:{number:!0},digits:{digits:!0},creditcard:{creditcard:!0}},addClassRules:function(b,c){b.constructor===String?this.classRuleSettings[b]=c:a.extend(this.classRuleSettings,b)},classRules:function(b){var c={},d=a(b).attr("class");return d&&a.each(d.split(" "),function(){this in a.validator.classRuleSettings&&a.extend(c,a.validator.classRuleSettings[this])}),c},normalizeAttributeRule:function(a,b,c,d){/min|max|step/.test(c)&&(null===b||/number|range|text/.test(b))&&(d=Number(d),isNaN(d)&&(d=void 0)),d||0===d?a[c]=d:b===c&&"range"!==b&&(a[c]=!0)},attributeRules:function(b){var c,d,e={},f=a(b),g=b.getAttribute("type");for(c in a.validator.methods)"required"===c?(d=b.getAttribute(c),""===d&&(d=!0),d=!!d):d=f.attr(c),this.normalizeAttributeRule(e,g,c,d);return e.maxlength&&/-1|2147483647|524288/.test(e.maxlength)&&delete e.maxlength,e},dataRules:function(b){var c,d,e={},f=a(b),g=b.getAttribute("type");for(c in a.validator.methods)d=f.data("rule"+c.charAt(0).toUpperCase()+c.substring(1).toLowerCase()),""===d&&(d=!0),this.normalizeAttributeRule(e,g,c,d);return e},staticRules:function(b){var c={},d=a.data(b.form,"validator");return d.settings.rules&&(c=a.validator.normalizeRule(d.settings.rules[b.name])||{}),c},normalizeRules:function(b,c){return a.each(b,function(d,e){if(e===!1)return void delete b[d];if(e.param||e.depends){var f=!0;switch(typeof e.depends){case"string":f=!!a(e.depends,c.form).length;break;case"function":f=e.depends.call(c,c)}f?b[d]=void 0===e.param||e.param:(a.data(c.form,"validator").resetElements(a(c)),delete b[d])}}),a.each(b,function(d,e){b[d]=a.isFunction(e)&&"normalizer"!==d?e(c):e}),a.each(["minlength","maxlength"],function(){b[this]&&(b[this]=Number(b[this]))}),a.each(["rangelength","range"],function(){var c;b[this]&&(a.isArray(b[this])?b[this]=[Number(b[this][0]),Number(b[this][1])]:"string"==typeof b[this]&&(c=b[this].replace(/[\[\]]/g,"").split(/[\s,]+/),b[this]=[Number(c[0]),Number(c[1])]))}),a.validator.autoCreateRanges&&(null!=b.min&&null!=b.max&&(b.range=[b.min,b.max],delete b.min,delete b.max),null!=b.minlength&&null!=b.maxlength&&(b.rangelength=[b.minlength,b.maxlength],delete b.minlength,delete b.maxlength)),b},normalizeRule:function(b){if("string"==typeof b){var c={};a.each(b.split(/\s/),function(){c[this]=!0}),b=c}return b},addMethod:function(b,c,d){a.validator.methods[b]=c,a.validator.messages[b]=void 0!==d?d:a.validator.messages[b],c.length<3&&a.validator.addClassRules(b,a.validator.normalizeRule(b))},methods:{required:function(b,c,d){if(!this.depend(d,c))return"dependency-mismatch";if("select"===c.nodeName.toLowerCase()){var e=a(c).val();return e&&e.length>0}return this.checkable(c)?this.getLength(b,c)>0:void 0!==b&&null!==b&&b.length>0},email:function(a,b){return this.optional(b)||/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a)},url:function(a,b){return this.optional(b)||/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[\/?#]\S*)?$/i.test(a)},date:function(){var a=!1;return function(b,c){return a||(a=!0,this.settings.debug&&window.console&&console.warn("The `date` method is deprecated and will be removed in version '2.0.0'.\nPlease don't use it, since it relies on the Date constructor, which\nbehaves very differently across browsers and locales. Use `dateISO`\ninstead or one of the locale specific methods in `localizations/`\nand `additional-methods.js`.")),this.optional(c)||!/Invalid|NaN/.test(new Date(b).toString())}}(),dateISO:function(a,b){return this.optional(b)||/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(a)},number:function(a,b){return this.optional(b)||/^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)},digits:function(a,b){return this.optional(b)||/^\d+$/.test(a)},minlength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(b,c);return this.optional(c)||e>=d},maxlength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(b,c);return this.optional(c)||e<=d},rangelength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(b,c);return this.optional(c)||e>=d[0]&&e<=d[1]},min:function(a,b,c){return this.optional(b)||a>=c},max:function(a,b,c){return this.optional(b)||a<=c},range:function(a,b,c){return this.optional(b)||a>=c[0]&&a<=c[1]},step:function(b,c,d){var e,f=a(c).attr("type"),g="Step attribute on input type "+f+" is not supported.",h=["text","number","range"],i=new RegExp("\\b"+f+"\\b"),j=f&&!i.test(h.join()),k=function(a){var b=(""+a).match(/(?:\.(\d+))?$/);return b&&b[1]?b[1].length:0},l=function(a){return Math.round(a*Math.pow(10,e))},m=!0;if(j)throw new Error(g);return e=k(d),(k(b)>e||l(b)%l(d)!==0)&&(m=!1),this.optional(c)||m},equalTo:function(b,c,d){var e=a(d);return this.settings.onfocusout&&e.not(".validate-equalTo-blur").length&&e.addClass("validate-equalTo-blur").on("blur.validate-equalTo",function(){a(c).valid()}),b===e.val()},remote:function(b,c,d,e){if(this.optional(c))return"dependency-mismatch";e="string"==typeof e&&e||"remote";var f,g,h,i=this.previousValue(c,e);return this.settings.messages[c.name]||(this.settings.messages[c.name]={}),i.originalMessage=i.originalMessage||this.settings.messages[c.name][e],this.settings.messages[c.name][e]=i.message,d="string"==typeof d&&{url:d}||d,h=a.param(a.extend({data:b},d.data)),i.old===h?i.valid:(i.old=h,f=this,this.startRequest(c),g={},g[c.name]=b,a.ajax(a.extend(!0,{mode:"abort",port:"validate"+c.name,dataType:"json",data:g,context:f.currentForm,success:function(a){var d,g,h,j=a===!0||"true"===a;f.settings.messages[c.name][e]=i.originalMessage,j?(h=f.formSubmitted,f.resetInternals(),f.toHide=f.errorsFor(c),f.formSubmitted=h,f.successList.push(c),f.invalid[c.name]=!1,f.showErrors()):(d={},g=a||f.defaultMessage(c,{method:e,parameters:b}),d[c.name]=i.message=g,f.invalid[c.name]=!0,f.showErrors(d)),i.valid=j,f.stopRequest(c,j)}},d)),"pending")}}});var b,c={};return a.ajaxPrefilter?a.ajaxPrefilter(function(a,b,d){var e=a.port;"abort"===a.mode&&(c[e]&&c[e].abort(),c[e]=d)}):(b=a.ajax,a.ajax=function(d){var e=("mode"in d?d:a.ajaxSettings).mode,f=("port"in d?d:a.ajaxSettings).port;return"abort"===e?(c[f]&&c[f].abort(),c[f]=b.apply(this,arguments),c[f]):b.apply(this,arguments)}),a});


$(document).ready(function () {
    var argumentsSlider = document.getElementsByClassName("arguments__slider");

    for (var i = 0; i < argumentsSlider.length; i++) {

        var el = argumentsSlider[i],
            swiper = el.getElementsByClassName("swiper")[0],
            nextBtn = el.getElementsByClassName("slider-next-btn")[0],
            prevBtn = el.getElementsByClassName("slider-prev-btn")[0],
            pagination = el.getElementsByClassName("progress-pagination")[0];

        var argumentsSliderSwiper = new Swiper(swiper, {
            slidesPerView: 'auto',
            loopedSlides: 5,
            loopedSlidesLimit: false,
            loop: true,
            mousewheel: true,
            slideToClickedSlide: true,
            navigation: {
                nextEl: nextBtn,
                prevEl: prevBtn,
            },
            pagination: {
                el: pagination,
                type: 'progressbar',
            }
        });

        argumentsSliderSwiper.on('slideChange', function () {
            var index = this.realIndex,
                container = $('#' + this.wrapperEl.id).closest('.arguments__slider'),
                slideNumber = container.find('.slide-number');

            if (index < 9) {
                index = '0' + (index + 1)
            } else {
                index++;
            }

            slideNumber.html(index);
        });
    }
})

$(document).ready(function(){
    var articlesSlider = document.getElementsByClassName("articles__slider");

    for (var i = 0; i < articlesSlider.length; i++) {

        var el = articlesSlider[i],
            swiper = el.getElementsByClassName("swiper")[0],
            nextBtn = el.getElementsByClassName("slider-next-btn")[0],
            prevBtn = el.getElementsByClassName("slider-prev-btn")[0],
            pagination = el.getElementsByClassName("slider-pagination")[0];

        new Swiper(swiper, {
            slidesPerView: 'auto',
            loop: true,
            mousewheel: true,
            slideToClickedSlide: true,
            navigation: {
                nextEl: nextBtn,
                prevEl: prevBtn,
            },
            pagination: {
                el: pagination,
                type: 'bullets',
            }
        });
    }
})







$(document).ready(function () {
    $('[quizNextBtn_JS]').on('click', function () {
        var container = $(this).closest('[quizActiveQuestionID]'),
            activeID = parseInt(container.attr('quizActiveQuestionID')),
            nextQuestionID = activeID + 1,
            checkedItem = container.find('[quizQuestionID="' + nextQuestionID + '"] .answers-item.checked'),
            skippedAnswer = container.find('[quizQuestionSkip_JS].checked'),
            textareaValue = container.find('[quizTextarea_JS]').val();

        if ($('[quizQuestionID="' + nextQuestionID + '"]').length) {
            quizStepTo(container, activeID, nextQuestionID);

            if (checkedItem.length || skippedAnswer.length || textareaValue) {
                progressLineQuiz(container, nextQuestionID);
            } else {
                quizBtnControl(container, false);
            }
        } else {
            quizLoaderActivation(container);
        }
    });

    $('[quizPrevBtn_JS]').on('click', function () {
        var container = $(this).closest('[quizActiveQuestionID]'),
            activeID = parseInt(container.attr('quizActiveQuestionID')),
            prevQuestionID = activeID - 1;

        if ($('[quizQuestionID="' + prevQuestionID + '"]').length) {
            quizStepTo(container, activeID, prevQuestionID);
            quizBtnControl(container, true);
            progressLineQuiz(container, prevQuestionID);
        }
    });

    $('[singleAnswer_JS]').on('click', function () {
        var element = $(this),
            parent = element.closest('[answersContainer_JS]'),
            container = element.closest('[quizActiveQuestionID]'),
            activeQuestionID = parseInt(container.attr('quizActiveQuestionID'));

        parent.find('[singleAnswer_JS]').each(function () {
            var element = $(this);

            if (element.hasClass('checked')) {
                elementState(element, false);
            }

            element.addClass('disabled');
        });

        elementState(element, true);

        progressLineQuiz(container, activeQuestionID);

        quizBtnControl(container, true);

        setTimeout(function () {
            $('[quizNextBtn_JS]').trigger('click');
        }, 500);
    });

    $('[multipleAnswer_JS]').on('click', function () {
        var element = $(this),
            parent = element.closest('[answersContainer_JS]'),
            container = element.closest('[quizActiveQuestionID]'),
            activeQuestionID = parseInt(container.attr('quizActiveQuestionID'));

        if (element.hasClass('checked')) {
            elementState(element, false);
        } else {
            elementState(element, true);
        }

        if (parent.find('.answers-item.checked').length) {
            quizBtnControl(container, true);
            progressLineQuiz(container, activeQuestionID);
        } else {
            quizBtnControl(container, false);
            progressLineQuiz(container, (activeQuestionID - 1));
        }
    });

    $('[quizTextarea_JS]').on('input', function () {
        var element = $(this),
            value = element.val(),
            parent = element.closest('[answersContainer_JS]'),
            skipBtn = parent.find('[quizQuestionSkip_JS]'),
            container = element.closest('[quizActiveQuestionID]'),
            activeQuestionID = parseInt(container.attr('quizActiveQuestionID'));

        if (value) {
            elementState(skipBtn, false);
            quizBtnControl(container, true);
            progressLineQuiz(container, (activeQuestionID));
        } else {
            if (!(skipBtn.hasClass('checked'))) {
                quizBtnControl(container, false);
                progressLineQuiz(container, (activeQuestionID - 1));
            }
        }
    });

    $('[quizQuestionSkip_JS]').on('click', function () {
        var element = $(this),
            parent = element.closest('[answersContainer_JS]'),
            value = parent.find('[quizTextarea_JS]').val(),
            container = element.closest('[quizActiveQuestionID]'),
            activeQuestionID = parseInt(container.attr('quizActiveQuestionID'));

        if (value) {
            if (element.hasClass('checked')) {
                elementState(element, false);
            } else {
                elementState(element, true);
            }
        } else {
            if (element.hasClass('checked')) {
                elementState(element, false);
                quizBtnControl(container, false);
                progressLineQuiz(container, (activeQuestionID - 1));
            } else {
                elementState(element, true);
                quizBtnControl(container, true);
                progressLineQuiz(container, (activeQuestionID));
            }
        }
    });
});

var progressLineQuiz = function (container, activeQuestionID) {
    var questionsCount = parseInt(container.find('[quizQuestionsCount_JS]').html()),
        progressLine = container.find('[quizProgress_JS] .progress-line'),
        progressText = container.find('[quizProgress_JS] .progress-text'),
        progressValue = (activeQuestionID / questionsCount) * 100;

    progressLine.css('width', progressValue + '%');

    if (progressValue > 50) {
        progressText.addClass('md-white-text');
    } else {
        progressText.removeClass('md-white-text');
    }
}

var quizStepTo = function (container, activeID, targetQuestionID) {
    container.find('[quizButtonsContainer_JS]').addClass('md-animation-active');

    quizScrollTop(container);

    setTimeout(function () {
        $('[quizQuestionID="' + activeID + '"]').removeClass('visible');
        setTimeout(function () {
            $('[quizQuestionID="' + activeID + '"]').removeClass('active');
            $('[quizQuestionID="' + targetQuestionID + '"]').addClass('active');
            $('[quizQuestionID="' + targetQuestionID + '"] [singleAnswer_JS].disabled').each(function () {
                $(this).removeClass('disabled');
            });
        }, 500)
        setTimeout(function () {
            $('[quizQuestionID="' + targetQuestionID + '"]').addClass('visible');
        }, 550)

        container.attr('quizActiveQuestionID', targetQuestionID);
        container.find('[quizActiveQuestionNumber_JS]').text(targetQuestionID);
        container.find('[quizButtonsContainer_JS]').removeClass('md-animation-active');
    }, 500);
}

var quizBtnControl = function (container, state) {
    if (state) {
        container.find('[quizNextBtn_JS]').removeClass('disabled');
        container.find('[quizNextBtn_JS]').parent().removeClass('active');
    } else {
        container.find('[quizNextBtn_JS]').addClass('disabled');
        container.find('[quizNextBtn_JS]').parent().addClass('active');
    }
}

var elementState = function (element, state) {
    if (state) {
        element.addClass('checked');
        element.find('input').attr('checked', 'checked');
    } else {
        element.removeClass('checked');
        element.find('input').removeAttr('checked');
    }
}

var quizLoaderActivation = function (container) {
    var quizLoader = container.find('[quizLoader_JS]'),
        quizContainer = container.find('[quizContainer_JS]'),
        quizPerson = container.find('[quizPerson_JS]'),
        quizFinal = container.find('[quizFinal_JS]');

    quizScrollTop(container);

    quizPerson.addClass('md-transparent');
    quizContainer.addClass('md-transparent');

    setTimeout(function () {
        quizPerson.addClass('md-hidden');
        quizContainer.addClass('md-hidden');
        quizLoader.addClass('md-active');
    }, 500)
    setTimeout(function () {
        quizLoader.addClass('md-visible');
    }, 600)
    setTimeout(function () {
        quizLoader.find('[quizLoaderLine_JS]').addClass('md-animation-active');
    }, 1100);
    setTimeout(function () {
        quizLoader.removeClass('md-visible');
    }, 5100);
    setTimeout(function () {
        quizLoader.removeClass('md-active');
        quizFinal.addClass('md-active');
    }, 5600);
    setTimeout(function () {
        quizFinal.addClass('md-visible');
    }, 5700);
}

var quizScrollTop = function (container) {
    var headerHeight = $('.header__top').innerHeight();
    var top = ($(container).offset().top) - headerHeight;

    $('body,html').animate({
        scrollTop: top
    }, 1500);
}

$(document).ready(function(){
    var casesSlider = document.getElementsByClassName("cases__slider");

    for (var i = 0; i < casesSlider.length; i++) {

        var el = casesSlider[i],
            swiper = el.getElementsByClassName("swiper")[0],
            nextBtn = el.getElementsByClassName("slider-next-btn")[0],
            prevBtn = el.getElementsByClassName("slider-prev-btn")[0],
            pagination = el.getElementsByClassName("slider-pagination")[0];

        new Swiper(swiper, {
            slidesPerView: 'auto',
            loop: true,
            mousewheel: true,
            slideToClickedSlide: true,
            navigation: {
                nextEl: nextBtn,
                prevEl: prevBtn,
            },
            pagination: {
                el: pagination,
                type: 'bullets',
            }
        });
    }
})

$(document).ready(function(){
    var certificatesSlider = document.getElementsByClassName("certificates__slider");

    for (var i = 0; i < certificatesSlider.length; i++) {

        var el = certificatesSlider[i],
            swiper = el.getElementsByClassName("swiper")[0],
            nextBtn = el.getElementsByClassName("slider-next-btn")[0],
            prevBtn = el.getElementsByClassName("slider-prev-btn")[0],
            pagination = el.getElementsByClassName("slider-pagination")[0];

        new Swiper(swiper, {
            slidesPerView: 'auto',
            loop: true,
            mousewheel: true,
            navigation: {
                nextEl: nextBtn,
                prevEl: prevBtn,
            },
            pagination: {
                el: pagination,
                type: 'bullets',
            }
        });
    }
})








$(document).ready(function(){
    $('.cost-block__item .item-header').on('click', function(){
        var item = $(this).closest('.cost-block__item');

        item.toggleClass('open');
        item.find('.item-body').slideToggle(500);
    });
});



$(document).ready(function(){
    setTimeout(function(){
        $('[radioToggle_JS]').addClass('checked');
    }, 1000);

    $('[radioToggle_JS]').on('click', function(){
        $(this).toggleClass('checked');
    });
});

$(document).ready(function () {
    $('[phoneMask_JS]').mask('+ 7 (000) 000 - 00 - 00');

    $('[niceSelect_JS]').niceSelect();

    $('body').addClass('md-visible');

    $('body').append('<div scrollFix_JS></div>');

    pageLoaded();

    $('[socialSelect_JS]').on('change', function () {
        var value = $(this).val(),
            container = $(this).closest('.form-select'),
            form = $(this).closest('form');

        container.find('.select-icon .active').removeClass('active');
        container.find('.select-icon .' + value).addClass('active');
        form.find('[selectTextTarget_JS]').html(value);
    });

    $('.form-checkbox .checkbox').on('click', function () {
        var checkbox = $(this),
            input = checkbox.find('input'),
            submit_btn = checkbox.closest('form').find('[agreementControl_JS]');


        if (checkbox.hasClass('checked')) {
            checkbox.removeClass('checked');
            input.val('not_accepted')
            submit_btn.addClass('disabled');
        } else {
            checkbox.addClass('checked');
            input.val('accepted')
            submit_btn.removeClass('disabled');
        }
    });

    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 1) {
            $('.header').addClass('fixed');
        } else {
            $('.header').removeClass('fixed')
        };

        $('[toTop_JS]').each(function () {
            var element = $(this),
                scroll = $(window).scrollTop();

            if (scroll > 500) {
                element.addClass('visible');
            } else {
                element.removeClass('visible');
            };
        });

        $('[onScrollDisplay_JS]').each(function () {
            var $element = $(this);

            if (!($element.hasClass('visible'))) {
                var scroll = $(window).scrollTop(),
                    position = $element.offset().top,
                    windowHeight = $(window).height();

                if ((scroll + windowHeight) > position) {
                    $element.addClass('visible');
                };
            };
        });

        $('[counterAnimationTime_JS]').each(function () {
            var element = $(this),
                duration = parseInt(element.attr('counterAnimationTime_JS')),
                scroll = $(window).scrollTop(),
                position = element.offset().top,
                windowHeight = $(window).height();

            if (!(element.hasClass('animation-active'))) {
                if ((scroll + windowHeight) > position) {
                    numberCountAnimation(element, duration);
                };
            };
        });

        $('[data-scroll-transform]').each(function () {
            var $element = $(this),
                scroll = $(window).scrollTop(),
                position = $element.offset().top,
                elementHeight = $element.height(),
                windowHeight = $(window).innerHeight();

            if (scroll + (windowHeight - elementHeight) > position) {
                $element.attr('data-scroll-transform', '1');
            } else {
                $element.attr('data-scroll-transform', '0');
            };
        });

        $('[imgOnSrollLoading_JS]').each(function () {
            var element = $(this);

            imageOnScrollLoader(element);
        });
    });

    if ($('[parallaxBlock_JS]').length) {
        if (window.innerWidth > 770) {
            $('[parallaxBlock_JS]').each(function () {
                var parallax = $(this)[0];

                new Parallax(parallax, {
                    hoverOnly: true,
                });
            })
        }
    };

    if (localStorage.getItem('anchorLinkState') === null) {
        localStorage.setItem('anchorLinkState', false);
        localStorage.setItem('anchorLinkID', '');
    }

    if (localStorage.getItem('anchorLinkState')) {
        var target = localStorage.getItem('anchorLinkID');

        if ($(target).length) {
            if ($('.pre-loader').length) {
                var offset = getScrollPosition(target);

                setTimeout(function () {
                    $('body,html').animate({
                        scrollTop: offset
                    }, 1500);
                }, 4500)
            } else {
                var offset = getScrollPosition(target);

                $('body,html').animate({
                    scrollTop: offset
                }, 1500);
            }
        }

        localStorage.setItem('anchorLinkState', false);
        localStorage.setItem('anchorLinkID', '');
    }

    $("[anchorBtn_JS]").on("click", function (event) {
        var target = $(this).attr('anchorBtn_JS');

        if ($(target).length) {
            var offset = getScrollPosition(target);

            $('body,html').animate({
                scrollTop: offset
            }, 1500);
        } else {
            localStorage.setItem('anchorLinkState', true);
            localStorage.setItem('anchorLinkID', target);
            window.location.href = "index.html";
        }
    });

    var hash = window.location.hash;
    if (hash != "") {
        if ($(hash).length) {
            if ($('.pre-loader').length) {
                var offset = getScrollPosition(hash);

                setTimeout(function () {
                    $('body,html').animate({
                        scrollTop: offset
                    }, 1500);
                }, 4500)
            } else {
                var offset = getScrollPosition(hash);

                $('body,html').animate({
                    scrollTop: offset
                }, 1500);
            }
        }
    };

    $('[formValidate_JS]').each(function () {
        var form = $(this);
        $(this).validate({
            errorClass: "validate_error",
            rules: {
                phone: {
                    required: true,
                    minlength: 23
                },
                email: {
                    required: true,
                    email: true
                }
            },
            errorPlacement: function (error, element) {}
        });
    });

    $('[headerMenuBtn_JS]').on('click', function () {
        $(this).toggleClass('menu-open');
        $('header').toggleClass('menu-open');
        $('html').toggleClass('no-scroll');
    });

    $('[formFileInput_JS] input').change(function (e) {
        var element = $(this),
            container = element.closest('[formFileInput_JS]'),
            textField = container.find('.file-name'),
            textPlaceholder = textField.attr('data-placeholder');

        if (typeof e.target.files[0] == 'undefined') {
            var fileName = textPlaceholder;
        } else {
            var fileName = e.target.files[0].name;
        }

        textField.text(fileName);
    });

    $('[reviewStars_JS] .stars-item').on('click', function () {
        var element = $(this),
            value = element.find('input').val(),
            container = element.closest('[reviewStars_JS]');

        container.find('input[checked="checked"]').removeAttr('checked');
        element.find('input').attr('checked', 'checked');
        container.attr('data-stars', value);
    });
});

var getScrollPosition = function (target) {
    var headerHeight = $('.header__top').innerHeight(),
        offset = ($(target).offset().top) - headerHeight,
        scrollFix = $('[scrollFix_JS]').innerHeight();

    if ($(target).attr('onScrollDisplay_JS') == 'fade-bottom') {
        if (!($(target).hasClass('visible'))) {
            offset = offset - scrollFix;
        }
    } else if ($(target).attr('onScrollDisplay_JS') == 'fade-top') {
        if (!($(target).hasClass('visible'))) {
            offset = offset + scrollFix;
        }
    }

    return offset;
}

var numberCountAnimation = function (element, duration) {
    element.addClass('animation-active');
    $({
        Counter: 0
    }).animate({
        Counter: element.text()
    }, {
        duration: duration,
        easing: 'swing',
        step: function () {
            element.text(Math.ceil(this.Counter));
        }
    });
}

var pageLoaded = function () {
    if ($(window).scrollTop() > 1) {
        $('.header').addClass('fixed');
    } else {
        $('.header').removeClass('fixed')
    };

    $('[toTop_JS]').each(function () {
        var element = $(this),
            scroll = $(window).scrollTop();

        if (scroll > 500) {
            element.addClass('visible');
        } else {
            element.removeClass('visible');
        };
    });

    $('[onScrollDisplay_JS]').each(function () {
        var $element = $(this);

        if (!($element.hasClass('visible'))) {
            var scroll = $(window).scrollTop(),
                position = $element.offset().top,
                windowHeight = $(window).height();

            if ((scroll + windowHeight) > position) {
                $element.addClass('visible');
            };
        };
    });

    $('[data-scroll-transform]').each(function () {
        var $element = $(this),
            scroll = $(window).scrollTop(),
            position = $element.offset().top,
            elementHeight = $element.height(),
            windowHeight = $(window).innerHeight();

        if (scroll + (windowHeight - elementHeight) > position) {
            $element.attr('data-scroll-transform', '1');
        } else {
            $element.attr('data-scroll-transform', '0');
        };
    });

    $('[counterAnimationTime_JS]').each(function () {
        var element = $(this),
            duration = parseInt(element.attr('counterAnimationTime_JS')),
            scroll = $(window).scrollTop(),
            position = element.offset().top,
            windowHeight = $(window).height();

        if (!(element.hasClass('animation-active'))) {
            if ((scroll + windowHeight) > position) {
                if ($('.pre-loader').length) {
                    setTimeout(function () {
                        numberCountAnimation(element, duration);
                    }, 3000)
                } else {
                    numberCountAnimation(element, duration);
                }
            };
        };
    });

    $('[imgOnSrollLoading_JS]').each(function () {
        var element = $(this);

        imageOnScrollLoader(element);
    });
};

var imageOnScrollLoader = function (element) {
    var scroll = $(window).scrollTop(),
        position = element.offset().top,
        windowHeight = $(window).height();
        img_src = element.attr('imgOnSrollLoading_JS');
    
    if(position > (scroll - windowHeight) && position < (scroll + (windowHeight * 2))) {
        element.attr('src', img_src);
    }
}

$(document).ready(function(){
    var implementationSlider = document.getElementsByClassName("implementation__slider");

    for (var i = 0; i < implementationSlider.length; i++) {

        var el = implementationSlider[i],
            swiper = el.getElementsByClassName("swiper")[0],
            nextBtn = el.getElementsByClassName("slider-next-btn")[0],
            prevBtn = el.getElementsByClassName("slider-prev-btn")[0],
            pagination = el.getElementsByClassName("slider-pagination")[0];

        new Swiper(swiper, {
            slidesPerView: 'auto',
            loop: true,
            mousewheel: true,
            navigation: {
                nextEl: nextBtn,
                prevEl: prevBtn,
            },
            pagination: {
                el: pagination,
                type: 'bullets',
            }
        });
    }
})





$(document).ready(function () {
    var ourClientsSlider = document.getElementsByClassName("our-clients__slider");

    for (var i = 0; i < ourClientsSlider.length; i++) {

        var el = ourClientsSlider[i],
            swiper = el.getElementsByClassName("swiper")[0];

        new Swiper(swiper, {
            slidesPerView: 3,
            loop: true,
            speed: 3000,
            mousewheel: true,
            autoplay: {
                delay: 0,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
            },
            breakpoints: {
                769: {
                    slidesPerView: 8,
                }
            }
        });
    }
})

$(document).ready(function(){
    var ourMissionSlider = document.getElementsByClassName("our-mission__slider");

    for (var i = 0; i < ourMissionSlider.length; i++) {

        var el = ourMissionSlider[i],
            swiper = el.getElementsByClassName("swiper")[0],
            nextBtn = el.getElementsByClassName("slider-next-btn")[0],
            prevBtn = el.getElementsByClassName("slider-prev-btn")[0],
            pagination = el.getElementsByClassName("progress-pagination")[0];

        new Swiper(swiper, {
            slidesPerView: 'auto',
            loopedSlides: 5,
            loopedSlidesLimit: false,
            loop: true,
            mousewheel: true,
            slideToClickedSlide: true,
            navigation: {
                nextEl: nextBtn,
                prevEl: prevBtn,
            },
            pagination: {
                el: pagination,
                type: 'progressbar',
            }
        });
    }
})

$(document).ready(function () {
    $('body').on('click', '[popupOpen]', function () {
        popupClose();
        var target = $(this).attr('popupOpen');
        popupOpen(target);
    });


    $('body').on('click', '[popupClose_JS]', function () {
        popupClose();
    });

    $('body').append('<div class="download-popup-trigger"></div>');

    $('body .download-popup-trigger').hover(function () {
        if (localStorage.getItem('downloadPopupState') === 'true') {
            localStorage.setItem('downloadPopupState', 'false');

            popupClose();

            $('html').addClass('no-scroll');
            $('[openOnExitPopup_JS]').addClass('open');
        };
    });

    popupClose();
});


if (localStorage.getItem('downloadPopupDay') === null) {
    var date = new Date();
    var today = date.getDate();

    localStorage.setItem('downloadPopupDay', today);
}

if (localStorage.getItem('downloadPopupState') === null) {
    localStorage.setItem('downloadPopupState', 'true');
} else {
    var date = new Date();
    var today = date.getDate();
    var lastDay = localStorage.getItem('downloadPopupDay');

    if (lastDay != today) {
        localStorage.setItem('downloadPopupState', 'true');
        localStorage.setItem('downloadPopupDay', today);
    }
}

var popupClose = function () {
    $('html').removeClass('no-scroll');
    $('.popup.open').removeClass('open');
};

var popupOpen = function (e) {
    popupClose();
    var target = e;
    $('html').addClass('no-scroll');
    $('[popupID="' + target + '"]').addClass('open');
};

$(document).ready(function(){
    if($('.pre-loader').length){
        $('.pre-loader').addClass('active');
        setTimeout(function(){
            $('.pre-loader__main').addClass('md-step-1');
        }, 1000);
        setTimeout(function(){
            $('.pre-loader__main').addClass('md-step-2');
        }, 2000);
        setTimeout(function(){
            $('.pre-loader').addClass('md-hidden');
        }, 3500);
        setTimeout(function(){
            $('html').removeClass('md-pre-loader-active');
        }, 4000);
    } else {
        $('html').removeClass('md-pre-loader-active');
    }
});





$(document).ready(function(){
    var reportsSlider = document.getElementsByClassName("reports");

    for (var i = 0; i < reportsSlider.length; i++) {

        var el = reportsSlider[i],
            swiper = el.getElementsByClassName("swiper")[0],
            nextBtn = el.getElementsByClassName("slider-next-btn")[0],
            prevBtn = el.getElementsByClassName("slider-prev-btn")[0],
            pagination = el.getElementsByClassName("slider-pagination")[0];

        new Swiper(swiper, {
            slidesPerView: 'auto',
            loop: true,
            mousewheel: true,
            slideToClickedSlide: true,
            navigation: {
                nextEl: nextBtn,
                prevEl: prevBtn,
            },
            pagination: {
                el: pagination,
                type: 'bullets',
            }
        });
    }
})

$(document).ready(function(){
    var reviewsSlider = document.getElementsByClassName("reviews__slider");

    for (var i = 0; i < reviewsSlider.length; i++) {

        var el = reviewsSlider[i],
            swiper = el.getElementsByClassName("swiper")[0],
            nextBtn = el.getElementsByClassName("slider-next-btn")[0],
            prevBtn = el.getElementsByClassName("slider-prev-btn")[0],
            pagination = el.getElementsByClassName("slider-pagination")[0];

        new Swiper(swiper, {
            slidesPerView: 1,
            spaceBetween: 20,
            loop: true,
            navigation: {
                nextEl: nextBtn,
                prevEl: prevBtn,
            },
            pagination: {
                el: pagination,
                type: 'bullets',
            }
        });
    }

    var reviewsOtherImagesSlider = document.getElementsByClassName("review-other-images-slider");

    for (var i = 0; i < reviewsOtherImagesSlider.length; i++) {

        var el = reviewsOtherImagesSlider[i],
            swiper = el.getElementsByClassName("swiper")[0],
            nextBtn = el.getElementsByClassName("slider-next-btn")[0],
            prevBtn = el.getElementsByClassName("slider-prev-btn")[0];

        new Swiper(swiper, {
            slidesPerView: 'auto',
            navigation: {
                nextEl: nextBtn,
                prevEl: prevBtn,
            }
        });
    }
})






$(document).ready(function(){
    $('[loadMoreBtn_JS]').on('click', function(e){
        e.preventDefault();
        
        var container = $(this).closest('[loadMoreSection_JS]');

        container.find('.md-count-control').removeClass('md-count-control');
        container.find('[loadMoreBtnContianer_JS]').remove();
    })

    $('[mobileShowAllBtn_JS]').on('click', function(){
        var container = $(this).closest('[showAllContainer_JS]');

        container.addClass('md-show-all');
    })
});



$(document).ready(function(){
    $('.simple-text-btn').on('click', function(){
        var btn = $(this),
            container = btn.closest('.simple-text'),
            newText = btn.attr('data-text'),
            oldText = btn.find('span').html();
        
        btn.attr('data-text', oldText);
        btn.find('span').html(newText);
        btn.toggleClass('open');
        container.find('.simple-text__content').toggleClass('open');
    });
});

$(document).ready(function(){
    var teamSlider = document.getElementsByClassName("team__slider");

    for (var i = 0; i < teamSlider.length; i++) {

        var el = teamSlider[i],
            swiper = el.getElementsByClassName("swiper")[0],
            nextBtn = el.getElementsByClassName("slider-next-btn")[0],
            prevBtn = el.getElementsByClassName("slider-prev-btn")[0],
            pagination = el.getElementsByClassName("slider-pagination")[0];

        new Swiper(swiper, {
            slidesPerView: 'auto',
            loop: true,
            mousewheel: true,
            slideToClickedSlide: true,
            navigation: {
                nextEl: nextBtn,
                prevEl: prevBtn,
            },
            pagination: {
                el: pagination,
                type: 'bullets',
            }
        });
    }
})





$(document).ready(function () {
    $('[toTop_JS]').click(function () {
        var scroll = $(window).scrollTop(),
            windowHeight = $(window).height(),
            time = Math.round((scroll + windowHeight) / windowHeight) * 250;

        $('html, body').animate({
            scrollTop: 0
        }, time);
        return false;
    });
});




