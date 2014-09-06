/**
 * 
 * Author: Hoang Nham
 * Email: hoangnham01@gmail.com
 * Created by HoangNham on 2/20/14.
 * 
 */
 
(function ($) {
    'use strict';
    $.fn.extend({
        toSlug: function (options) {
            var defaultVal = {
                from: null
            };
            var opts = $.extend(defaultVal, options);

            function convertToSlug(str) {
                str = str.toLowerCase();
                str = str.replace(/^\s+\s+$/g, ''); // trim
                var from = "àáạảãâầấậẩẫăằắặẳẵäèéẹẻẽêềếệểễëìíịỉĩïîòóọỏõôồốộổỗơờớợởỡöùúụủũưừứựửữüûñçỳýỵỷỹđ·/_,:;";
                var to = "aaaaaaaaaaaaaaaaaaeeeeeeeeeeeeiiiiiiioooooooooooooooooouuuuuuuuuuuuuncyyyyyd------";
                for (var i = 0, l = from.length; i < l; i++) {
                    str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
                }
                return str.replace(/[^a-z0-9 -]/g, '-').replace(/\s+/g, '-').replace(/-+/g, '-').replace(/^\-+|\-+$/g, "");
            }
            return this.each(function (countObject, obj) {
                if(opts.from !== null){
                    $(opts.from).keyup(function (){
                        var str = $(opts.from).val();
                        $(obj).val(convertToSlug(str));
                    });
                }
                $(obj).blur(function () {
                    var str = $(this).val();
                    $(this).val(convertToSlug(str));
                });

            });
        }
    });
})(jQuery);
$(document).ready(function(){
    $('#slug').toSlug({from: '#from-slug'});
});
