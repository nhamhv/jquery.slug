/**
 * Created by HoangNham on 2/20/14.
 */

(function ($) {
    $.fn.extend({
        toSlug: function (options) {
            var defaultVal = {
                parent: null
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
                if(opts.parent !== null){
                    $(opts.parent).keyup(function (){
                        var str = $(opts.parent).val();
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