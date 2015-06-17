// form自动填充和数据获取插件
(function($){
    $.fn.extend({
        formFill:function(obj){
            var _this = this;
            $.each(obj, function(key, value) {
                $(_this).find('[name="'+key+'"]').val(value);
            })
        },
        formGet: function() {
            return $(this).serialize()
        }
    })
})(jQuery);

$(function() {
    // 特征检测
    function detect(type, element) {
        if(!$.isArray(type)) type = [type];
        element = element || 'html';
        $.each(type, function(i, item) {
            var key, value;
            if($.isPlainObject(item)) {
                key = item.cssName;
                value = item.className;
            } else key = value = item;


            if(key in document.body.style) {
                $(element).addClass(value)
            }
        })
    }

    detect(['borderRadius', {cssName: 'webkitAnimation', className: 'animation'}, 'transition'])
});

// 系统初始化
$(function(){
    var loadingElement = new Image();
    loadingElement.src = './img/load.gif';

    function loadShow() {
        $(".spinner").show();
    }
    function loadHide() {
        $(".spinner").hide();
    }
    function loadData(url, template, element, callback) {
        loadShow();
        $.getJSON(url, '', function(obj) {
            loadHide();
            $(template).tmpl(obj['index']).appendTo(element);
            loadImgs(element);
            callback(obj['nav'], obj['flow']);
        });
    }
    function loadImgs(domStructure) {
        function loader(img) {
            var imgTmp = new Image();
            imgTmp.src = img.src;
            imgTmp.onload = function() {
                img.src = imgTmp.src;
                $(img).removeClass('loadingIMG').addClass('fadeIn');
            };
            $(img).addClass('loadingIMG');
            img.src = loadingElement.src;
        }
        $(domStructure).find('.lx').each(function() {
            loader(this)
        })
    }

    function loadNavSecondary (template, data) {
        $(".secondary .list").html($(template).tmpl({navSecondary: data}))
    }

    function loadIndexFlow (template, data) {
        var fragment = [document.createElement('div'),document.createElement('div'),document.createElement('div'),document.createElement('div')];
        $(".flow-container").show();
        $.each(data, function(key, item) {
            $(fragment[key % 4]).append($(template).tmpl(item))
        })
        $(".col").each(function(index, col) {
            $(col).html(fragment[index])
        })
    }

    function loadType(template, type) {
        $.getJSON('//localhost:3000/nest/nav' + '?type='+type, '', function(obj) {
            loadIndexFlow('#flowTemplate', obj);
        })
    }

    var recommend = {
        element: '.recommend',
        show: function(template, src) {
            $.getJSON(src, '', function(data) {
                // 渲染template
                var html = '';
                $(recommend.element).html(html);
                loadImgs(recommend.element);
            })
        },
        hide: function() {
            $(this.element).hide();
        }
    };

    // 加载主页内容
    loadData('//localhost:3000/nest/index', '#indexTemplate', '.index-container', function(navSecondary, indexFlowData) {
        loadNavSecondary('#navTemplate', navSecondary);
        loadIndexFlow('#flowTemplate', indexFlowData);
        loadHide();
        recommend.show('');
    })

    $('.navbar').delegate('a', 'click', function() {

        // 获取用户信息
        function getInfo() {
            $.getJSON("./data/person.json", "", function(obj) {
                $("#u-info").formFill(obj)
            })
        }

        // 保存用户信息
        function saveInfo () {alert();
            $.getJSON("http://localhost:3000/profile/save?" + $("#u-info").formGet(), "", function(obj) {
                console.log(obj);
            })
        }

        $('.navbar').find('.active').removeClass('active');
        $(this).addClass('active')
        if($(this).data('type') == 'personal') {
            // 显示个人中心
            $(".index-container > div").hide();
            $(".flow-container").hide();
            if($('.i-wrap').length > 0) {
                $('.i-wrap').show();
            }else{
                $.get('./data/personal.html', '', function(html) {
                    $(".index-container").append(html);
                    getInfo();
                    $("#tb-user-save").click(saveInfo);
                })
            }

        }else if($(this).data('type') == 'index'){

            $(".index-container > div").show();
            $('.i-wrap').hide();
            loadType('#flowTemplate', $(this).data('type'))
        }else{

            $('.i-wrap').hide();
            $(".index-container > div").hide();
            loadType('#flowTemplate', $(this).data('type'))
        }

    })

    $(".btn-friend").bind('click', function() {
        $("#friend").css({
            right: 0
        })
    })


    $(".secondary").stop().animate({
        right: '-100px'
    }).hover(function(){
        $(".secondary").stop().animate({
            right: '0'
        })
    },function(){
        $(".secondary").stop().animate({
            right: '-100px'
        })
    })

    // 关闭登录界面
    $(".close").bind("click", function() {
        $(this).parents('.login').hide()
    })

    $(".login-btn").click(function() {
        $.post("//localhost:3000/log/login", $('.mail-login').formGet(), function(e) {
            console.log(e)
        })

    })
});