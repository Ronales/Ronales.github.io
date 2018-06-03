$(function () {
    var scrtime;

    var $ul = $(".bottom-text ul");
    var liFirstHeight = $ul.find("li:first").height();//��һ��li�ĸ߶�
    $ul.css({ top: "-" + liFirstHeight - 20 + "px" });//����css��top���Խ���һ��li�������б��Ϸ�	 ��li������padding:10px����Ҫ-20

    $(".bottom-text").hover(function () {
        $ul.pause();//��ͣ����
        clearInterval(scrtime);
    }, function () {
        $ul.resume();//�ָ����Ŷ���	
        scrtime = setInterval(function scrolllist() {
            //������ʽչ�ֵ�һ��li
            $ul.animate({ top: 0 + "px" }, 1500, function () {
                //�������ʱ
                $ul.find("li:last").prependTo($ul);//��ul�����һ������li����Ϊul�ĵ�һ��li
                liFirstHeight = $ul.find("li:first").height();//�ղ����li�ĸ߶�
                $ul.css({ top: "-" + liFirstHeight - 20 + "px" });//����css��top���Խ��ղ����li�������б��Ϸ�  ��li������padding:10px����Ҫ-20					
            });
        }, 3300);

    }).trigger("mouseleave");//ͨ��trigger("mouseleave")����������hover�¼��ĵ�2������

});




(function() {
    var e = jQuery,
        f = "jQuery.pause",
        d = 1,
        b = e.fn.animate,
        a = {};

    function c() {
        return new Date().getTime()
    }
    e.fn.animate = function(k, h, j, i) {
        var g = e.speed(h, j, i);
        g.complete = g.old;
        return this.each(function() {
            if (!this[f]) {
                this[f] = d++
            }
            var l = e.extend({}, g);
            b.apply(e(this), [k, e.extend({}, l)]);
            a[this[f]] = {
                run: true,
                prop: k,
                opt: l,
                start: c(),
                done: 0
            }
        })
    };
    e.fn.pause = function() {
        return this.each(function() {
            if (!this[f]) {
                this[f] = d++
            }
            var g = a[this[f]];
            if (g && g.run) {
                g.done += c() - g.start;
                if (g.done > g.opt.duration) {
                    delete a[this[f]]
                } else {
                    e(this).stop();
                    g.run = false
                }
            }
        })
    };
    e.fn.resume = function() {
        return this.each(function() {
            if (!this[f]) {
                this[f] = d++
            }
            var g = a[this[f]];
            if (g && !g.run) {
                g.opt.duration -= g.done;
                g.done = 0;
                g.run = true;
                g.start = c();
                b.apply(e(this), [g.prop, e.extend({}, g.opt)])
            }
        })
    }
})();