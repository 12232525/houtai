eval(function (p, a, c, k, e, r) {
    e = function (c) {
        return (c < 62 ? '' : e(parseInt(c / 62))) + ((c = c % 62) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
    };
    if ('0'.replace(0, e) == 0) {
        while (c--) r[e(c)] = k[c];
        k = [
            function (e) {
                return r[e] || e
            }
        ];
        e = function () {
            return '([3-9b-df-np-rtv-zA-Z]|1\\w)'
        };
        c = 1
    };
    while (c--)
        if (k[c]) p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]);
    return p
}(';(5($){5 T(M,6){h.6={C:\'1j\',1k:4000,12:0,U:120,1l:m,1m:m,1n:[\'1o\',\'click\'],1p:m,13:\'13\',D:{d:\'.N-w .N-d .4\',x:\'.N-x li\',E:\'.N-E\',F:\'.N-F\'}};h.1q(M,6)};$.fn.T=5(6){k s=new T(h,6)};T.prototype={V:W,G:W,14:15,H:15,_etag:15,3:0,y:\'1o\',1q:5(M,6){$.extend(m,h.6,6);9(!$(M)||!$(h.6.D.d))X;k o=h,Y=o.6.D.d.split(\' \');o.I=$(M);o.x=o.I.J(o.6.D.x);o.E=o.I.J(o.6.D.E);o.F=o.I.J(o.6.D.F);o.w=o.I.J(Y[0]);o.d=o.w.J(Y[1]);o.4=o.d.J(Y[2]);o.p=o.4.length;o.r=o.p-1;o.n=o.6.1n;9(o.6.12!=0){o.3=o.6.12}o.H=\'z\';o.O();o.P();9(o.6.1l){o.16();9(o.6.1p){o.I.hover(5(){o.Q()},5(){o.16()})}}9(o.x&&o.6.1m){o.x.each(5(e){$(h).17(o.n[0],5(){o.Q();o.18=e;9(o.n[0]===o.y){o.1r=19(5(){o.1a()},o.6.U)}t{o.1a()}}).1b(5(){9(o.n[0]===o.y)1c(o.1r)})})}9(o.E){o.E.17(o.n[1],5(){o.Q();9(o.n[1]===o.y){o.1s=19(5(){o.1d()},o.6.U)}t{o.1d()}}).1b(5(){9(o.n[1]===o.y)1c(o.1s)})}9(o.F){o.F.17(o.n[1],5(){o.Q();9(o.n[1]===o.y){o.1t=19(5(){o.1e()},o.6.U)}t{o.1e()}}).1b(5(){9(o.n[1]===o.y)1c(o.1t)})}},Q:5(){k o=h;clearInterval(o.14)},16:5(){k o=h;o.14=setInterval(5(){o.1f()},o.6.1k)},1a:5(){k o=h;9(o.6.C===\'R\'||o.6.C===\'1u\'||o.6.C===\'1v\'||o.6.C===\'1w\'){o.4.b(o.18).1x(m,m)}t{o.d.1x(m)}o.3=o.18;o.H=\'q\';o.u=-1;o.O();o.P()},1d:5(){k o=h;9(o.G)X;o.G=m;o.3<=0?o.3=o.r:o.3--;o.H=\'q\';o.u=0;o.O();o.P()},1e:5(){k o=h;9(o.G)X;o.G=m;o.1f()},1f:5(){k o=h;9(o.V)X;o.V=m;o.3>=o.r?o.3=0:o.3++;o.H=\'q\';o.u=1;o.O();o.P()},P:5(){k o=h,a=o.6.13;o.4.b(o.3).1y(a).K().1z(a);o.x.b(o.3).1y(a).K().1z(a);o.V=W},l:5(){k o=h;o.G=W},O:5(){k o=h,A=o.H;B(o.6.C){f\'R\':B(A){f\'z\':o.4.b(o.3).R().K().1g();g;f\'q\':o.4.b(o.3).R().K().1g();o.l();g}g;f\'1u\':B(A){f\'z\':o.4.b(o.3).R().K().1g();o.4.7({S:\'1h\'});g;f\'q\':o.4.b(o.3).fadeIn(1A).K().fadeOut(1A);o.l();g}g;f\'1v\':B(A){f\'z\':o.8=o.w.1i();o.4.7({S:\'1h\',j:o.8+\'c\'});o.4.b(o.3).7({j:0});g;f\'q\':o.4.Z(o.4[o.3]).7({10:0});o.4.b(o.3).7({10:1});o.4.b(o.3).v({j:0,},L,5(){o.4.Z(o.4[o.3]).7({j:o.8+\'c\',});o.l()});g}g;f\'1w\':B(A){f\'z\':o.8=o.w.11();o.4.7({S:\'1h\',i:o.8+\'c\'});o.4.b(o.3).7({i:0});g;f\'q\':o.4.Z(o.4[o.3]).7({10:0});o.4.b(o.3).7({10:1});o.4.b(o.3).v({i:0,},L,5(){o.4.Z(o.4[o.3]).7({i:o.8+\'c\',});o.l()});g}g;f\'vslide\':B(A){f\'z\':o.8=o.w.1i();o.d.7({j:\'-\'+o.3*o.8+\'c\'});o.4.7({S:\'1B\',1i:o.8+\'c\'});g;f\'q\':9(o.u===0&&o.3===o.r){o.4.b(o.r).7({j:\'-\'+o.8*o.p+\'c\'});o.d.v({j:o.8+\'c\'},L,5(){o.d.7({j:\'-\'+o.8*(o.r)+\'c\'});o.4.b(o.r).7({j:0});o.l()})}t 9(o.u===1&&o.3===0){o.4.b(o.3).7({j:o.8*o.p+\'c\'});o.d.v({j:\'-\'+o.8*o.p+\'c\'},L,5(){o.d.7({j:0});o.4.b(o.3).7({j:0});o.l()})}t{o.d.v({j:\'-\'+o.8*o.3+\'c\'},L,5(){o.l()})}g}g;f\'1j\':B(A){f\'z\':o.8=o.w.11();o.d.7({11:o.8*o.p+\'c\',i:\'-\'+o.3*o.8+\'c\'});o.4.7({S:\'1B\',11:o.8+\'c\',float:\'i\'});g;f\'q\':9(o.u===0&&o.3===o.r){o.4.b(o.3).7({i:\'-\'+o.8*o.p+\'c\'});o.d.v({i:o.8+\'c\'},5(){o.d.7({i:\'-\'+o.8*(o.3)+\'c\'});o.4.b(o.3).7({i:0});o.l()})}t 9(o.u===1&&o.3===0){o.4.b(o.3).7({i:o.8*o.p+\'c\'});o.d.v({i:\'-\'+o.8*o.p+\'c\'},5(){o.d.7({i:o.3});o.4.b(o.3).7({i:o.3});o.l()})}t{o.d.v({i:\'-\'+o.8*o.3+\'c\'},L,5(){o.l()})}g}g}}}}(jQuery));', [], 100, '|||_cur|item|function|options|css|size|if||eq|px|roll||case|break|this|left|top|var|_call|true|_trigger||count|anim|last||else||animate|wrap|ctrl|_mover|init|type|switch|effect|elements|prev|next|_stopflag|_type|tap|find|siblings|400|element|slider|_effect|_active|_clear|show|position|iSlider|delay|_paused|false|return|el|not|zIndex|width|index|active|_timer|null|_set|bind|etag|setTimeout|_ctrl|mouseout|clearTimeout|_prev|_next|_auto|hide|absolute|height|hslide|speed|timing|ctrlHandle|trigger|mouseover|pauseHover|_init|_ctrlOut|_prevOut|_nextOut|fade|vcover|hcover|stop|addClass|removeClass|700|relative'.split('|'), 0, {}));

/*!
 * istyle.js
 * transition,modal,dropdown,tab,tooltip,popover,loading
 * 2013-08-01 21:45
 */
/* ===================================================
 * bootstrap-transition.js v2.3.1
 * http://twitter.github.com/bootstrap/javascript.html#transitions
 * ===================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */
! function ($) {
    "use strict"; // jshint ;_;
    /* CSS TRANSITION SUPPORT (http://www.modernizr.com/)
     * ======================================================= */

    $(function () {

        $.support.transition = (function () {

            var transitionEnd = (function () {

                var el = document.createElement('bootstrap'),
                    transEndEventNames = {
                        'WebkitTransition': 'webkitTransitionEnd',
                        'MozTransition': 'transitionend',
                        'OTransition': 'oTransitionEnd otransitionend',
                        'transition': 'transitionend'
                    }, name

                for (name in transEndEventNames) {
                    if (el.style[name] !== undefined) {
                        return transEndEventNames[name]
                    }
                }

            }())

            return transitionEnd && {
                end: transitionEnd
            }

        })()

    })

}(window.jQuery);
/* =========================================================
 * bootstrap-modal.js v2.3.1
 * http://twitter.github.com/bootstrap/javascript.html#modals
 * =========================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================= */
! function ($) {
    "use strict"; // jshint ;_;
    /* MODAL CLASS DEFINITION
     * ====================== */

    var Modal = function (element, options) {
        this.options = options
        this.$element = $(element)
            .delegate('[data-dismiss="modal"]', 'click.dismiss.modal', $.proxy(this.hide, this))
        this.options.remote && this.$element.find('.modal-body').load(this.options.remote)
    }

    Modal.prototype = {

        constructor: Modal

        ,
        toggle: function () {
            return this[!this.isShown ? 'show' : 'hide']()
        }

        ,
        show: function () {
            var that = this,
                e = $.Event('show')

                this.$element.trigger(e)

                if (this.isShown || e.isDefaultPrevented()) return

                this.isShown = true

                this.escape()

                this.backdrop(function () {
                    var transition = $.support.transition && that.$element.hasClass('fade')

                    if (!that.$element.parent().length) {
                        that.$element.appendTo(document.body) //don't move modals dom position
                    }

                    that.$element.show()

                    if (transition) {
                        that.$element[0].offsetWidth // force reflow
                    }

                    that.$element
                        .addClass('in')
                        .attr('aria-hidden', false)

                    that.enforceFocus()

                    transition ?
                        that.$element.one($.support.transition.end, function () {
                            that.$element.focus().trigger('shown')
                        }) :
                        that.$element.focus().trigger('shown')

                })
        }

        ,
        hide: function (e) {
            e && e.preventDefault()

            var that = this

            e = $.Event('hide')

            this.$element.trigger(e)

            if (!this.isShown || e.isDefaultPrevented()) return

            this.isShown = false

            this.escape()

            $(document).off('focusin.modal')

            this.$element
                .removeClass('in')
                .attr('aria-hidden', true)

            $.support.transition && this.$element.hasClass('fade') ?
                this.hideWithTransition() :
                this.hideModal()
        }

        ,
        enforceFocus: function () {
            var that = this
            $(document).on('focusin.modal', function (e) {
                if (that.$element[0] !== e.target && !that.$element.has(e.target).length) {
                    that.$element.focus()
                }
            })
        }

        ,
        escape: function () {
            var that = this
            if (this.isShown && this.options.keyboard) {
                this.$element.on('keyup.dismiss.modal', function (e) {
                    e.which == 27 && that.hide()
                })
            } else if (!this.isShown) {
                this.$element.off('keyup.dismiss.modal')
            }
        }

        ,
        hideWithTransition: function () {
            var that = this,
                timeout = setTimeout(function () {
                    that.$element.off($.support.transition.end)
                    that.hideModal()
                }, 500)

                this.$element.one($.support.transition.end, function () {
                    clearTimeout(timeout)
                    that.hideModal()
                })
        }

        ,
        hideModal: function () {
            var that = this
            this.$element.hide()
            this.backdrop(function () {
                that.removeBackdrop()
                that.$element.trigger('hidden')
            })
        }

        ,
        removeBackdrop: function () {
            this.$backdrop && this.$backdrop.remove()
            this.$backdrop = null
        }

        ,
        backdrop: function (callback) {
            var that = this,
                animate = this.$element.hasClass('fade') ? 'fade' : ''

            if (this.isShown && this.options.backdrop) {
                var doAnimate = $.support.transition && animate

                this.$backdrop = $('<div class="modal-backdrop ' + animate + '" />')
                    .appendTo(document.body)

                this.$backdrop.click(
                    this.options.backdrop == 'static' ?
                    $.proxy(this.$element[0].focus, this.$element[0]) : $.proxy(this.hide, this)
                )

                if (doAnimate) this.$backdrop[0].offsetWidth // force reflow

                this.$backdrop.addClass('in')

                if (!callback) return

                doAnimate ?
                    this.$backdrop.one($.support.transition.end, callback) :
                    callback()

            } else if (!this.isShown && this.$backdrop) {
                this.$backdrop.removeClass('in')

                $.support.transition && this.$element.hasClass('fade') ?
                    this.$backdrop.one($.support.transition.end, callback) :
                    callback()

            } else if (callback) {
                callback()
            }
        }
    }


    /* MODAL PLUGIN DEFINITION
     * ======================= */

    var old = $.fn.modal

    $.fn.modal = function (option) {
        return this.each(function () {
            var $this = $(this),
                data = $this.data('modal'),
                options = $.extend({}, $.fn.modal.defaults, $this.data(), typeof option == 'object' && option)
                if (!data) $this.data('modal', (data = new Modal(this, options)))
                if (typeof option == 'string') data[option]()
                else if (options.show) data.show()
        })
    }

    $.fn.modal.defaults = {
        backdrop: true,
        keyboard: true,
        show: true
    }

    $.fn.modal.Constructor = Modal


    /* MODAL NO CONFLICT
     * ================= */

    $.fn.modal.noConflict = function () {
        $.fn.modal = old
        return this
    }


    /* MODAL DATA-API
     * ============== */

    $(document).on('click.modal.data-api', '[data-toggle="modal"]', function (e) {
        var $this = $(this),
            href = $this.attr('href'),
            $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) //strip for ie7
            ,
            option = $target.data('modal') ? 'toggle' : $.extend({
                remote: !/#/.test(href) && href
            }, $target.data(), $this.data())

            e.preventDefault()

            $target
                .modal(option)
                .one('hide', function () {
                    $this.focus()
                })
    })

}(window.jQuery);

/* ============================================================
 * bootstrap-dropdown.js v2.3.1
 * http://twitter.github.com/bootstrap/javascript.html#dropdowns
 * ============================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ============================================================ */


! function ($) {

    "use strict"; // jshint ;_;


    /* DROPDOWN CLASS DEFINITION
     * ========================= */

    var toggle = '[data-toggle=dropdown]',
        Dropdown = function (element) {
            var $el = $(element).on('click.dropdown.data-api', this.toggle)
            $('html').on('click.dropdown.data-api', function () {
                $el.parent().removeClass('open')
            })
        }

    Dropdown.prototype = {

        constructor: Dropdown

        ,
        toggle: function (e) {
            var $this = $(this),
                $parent, isActive

            if ($this.is('.disabled, :disabled')) return

            $parent = getParent($this)

            isActive = $parent.hasClass('open')

            clearMenus()

            if (!isActive) {
                $parent.toggleClass('open')
            }

            $this.focus()

            return false
        }

        ,
        keydown: function (e) {
            var $this, $items, $active, $parent, isActive, index

            if (!/(38|40|27)/.test(e.keyCode)) return

            $this = $(this)

            e.preventDefault()
            e.stopPropagation()

            if ($this.is('.disabled, :disabled')) return

            $parent = getParent($this)

            isActive = $parent.hasClass('open')

            if (!isActive || (isActive && e.keyCode == 27)) {
                if (e.which == 27) $parent.find(toggle).focus()
                return $this.click()
            }

            $items = $('[role=menu] li:not(.divider):visible a', $parent)

            if (!$items.length) return

            index = $items.index($items.filter(':focus'))

            if (e.keyCode == 38 && index > 0) index-- // up
            if (e.keyCode == 40 && index < $items.length - 1) index++ // down
            if (!~index) index = 0

            $items
                .eq(index)
                .focus()
        }

    }

    function clearMenus() {
        $(toggle).each(function () {
            getParent($(this)).removeClass('open')
        })
    }

    function getParent($this) {
        var selector = $this.attr('data-target'),
            $parent

        if (!selector) {
            selector = $this.attr('href')
            selector = selector && /#/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '') //strip for ie7
        }

        $parent = selector && $(selector)

        if (!$parent || !$parent.length) $parent = $this.parent()

        return $parent
    }


    /* DROPDOWN PLUGIN DEFINITION
     * ========================== */

    var old = $.fn.dropdown

    $.fn.dropdown = function (option) {
        return this.each(function () {
            var $this = $(this),
                data = $this.data('dropdown')
                if (!data) $this.data('dropdown', (data = new Dropdown(this)))
                if (typeof option == 'string') data[option].call($this)
        })
    }

    $.fn.dropdown.Constructor = Dropdown


    /* DROPDOWN NO CONFLICT
     * ==================== */

    $.fn.dropdown.noConflict = function () {
        $.fn.dropdown = old
        return this
    }


    /* APPLY TO STANDARD DROPDOWN ELEMENTS
     * =================================== */

    $(document)
        .on('click.dropdown.data-api', clearMenus)
        .on('click.dropdown.data-api', '.dropdown form', function (e) {
            e.stopPropagation()
        })
        .on('click.dropdown-menu', function (e) {
            e.stopPropagation()
        })
        .on('click.dropdown.data-api', toggle, Dropdown.prototype.toggle)
        .on('keydown.dropdown.data-api', toggle + ', [role=menu]', Dropdown.prototype.keydown)

}(window.jQuery);

/* ========================================================
 * bootstrap-tab.js v2.3.1
 * http://twitter.github.com/bootstrap/javascript.html#tabs
 * ========================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================== */


! function ($) {

    "use strict"; // jshint ;_;


    /* TAB CLASS DEFINITION
     * ==================== */

    var Tab = function (element) {
        this.element = $(element)
    }

    Tab.prototype = {

        constructor: Tab

        ,
        show: function () {
            var $this = this.element,
                $ul = $this.closest('ul:not(.dropdown-menu)'),
                selector = $this.attr('data-target'),
                previous, $target, e

            if (!selector) {
                selector = $this.attr('href')
                selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') //strip for ie7
            }

            if ($this.parent('li').hasClass('active')) return

            previous = $ul.find('.active:last a')[0]

            e = $.Event('show', {
                relatedTarget: previous
            })

            $this.trigger(e)

            if (e.isDefaultPrevented()) return

            $target = $(selector)

            this.activate($this.parent('li'), $ul)
            this.activate($target, $target.parent(), function () {
                $this.trigger({
                    type: 'shown',
                    relatedTarget: previous
                })
            })
        }

        ,
        activate: function (element, container, callback) {
            var $active = container.find('> .active'),
                transition = callback && $.support.transition && $active.hasClass('fade')

                function next() {
                    $active
                        .removeClass('active')
                        .find('> .dropdown-menu > .active')
                        .removeClass('active')

                    element.addClass('active')

                    if (transition) {
                        element[0].offsetWidth // reflow for transition
                        element.addClass('in')
                    } else {
                        element.removeClass('fade')
                    }

                    if (element.parent('.dropdown-menu')) {
                        element.closest('li.dropdown').addClass('active')
                    }

                    callback && callback()
                }

            transition ?
                $active.one($.support.transition.end, next) :
                next()

            $active.removeClass('in')
        }
    }


    /* TAB PLUGIN DEFINITION
     * ===================== */

    var old = $.fn.tab

    $.fn.tab = function (option) {
        return this.each(function () {
            var $this = $(this),
                data = $this.data('tab')
                if (!data) $this.data('tab', (data = new Tab(this)))
                if (typeof option == 'string') data[option]()
        })
    }

    $.fn.tab.Constructor = Tab


    /* TAB NO CONFLICT
     * =============== */

    $.fn.tab.noConflict = function () {
        $.fn.tab = old
        return this
    }


    /* TAB DATA-API
     * ============ */

    $(document).on('click.tab.data-api', '[data-toggle="tab"], [data-toggle="pill"]', function (e) {
        e.preventDefault()
        $(this).tab('show')
    })

}(window.jQuery);
/* ===========================================================
 * bootstrap-tooltip.js v2.3.1
 * http://twitter.github.com/bootstrap/javascript.html#tooltips
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ===========================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */


! function ($) {

    "use strict"; // jshint ;_;


    /* TOOLTIP PUBLIC CLASS DEFINITION
     * =============================== */

    var Tooltip = function (element, options) {
        this.init('tooltip', element, options)
    }

    Tooltip.prototype = {

        constructor: Tooltip

        ,
        init: function (type, element, options) {
            var eventIn, eventOut, triggers, trigger, i

                this.type = type
                this.$element = $(element)
                this.options = this.getOptions(options)
                this.enabled = true

                triggers = this.options.trigger.split(' ')

                for (i = triggers.length; i--;) {
                    trigger = triggers[i]
                    if (trigger == 'click') {
                        this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this))
                    } else if (trigger != 'manual') {
                        eventIn = trigger == 'hover' ? 'mouseenter' : 'focus'
                        eventOut = trigger == 'hover' ? 'mouseleave' : 'blur'
                        this.$element.on(eventIn + '.' + this.type, this.options.selector, $.proxy(this.enter, this))
                        this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this))
                    }
                }

            this.options.selector ?
                (this._options = $.extend({}, this.options, {
                trigger: 'manual',
                selector: ''
            })) :
                this.fixTitle()
        }

        ,
        getOptions: function (options) {
            options = $.extend({}, $.fn[this.type].defaults, this.$element.data(), options)

            if (options.delay && typeof options.delay == 'number') {
                options.delay = {
                    show: options.delay,
                    hide: options.delay
                }
            }

            return options
        }

        ,
        enter: function (e) {
            var defaults = $.fn[this.type].defaults,
                options = {}, self

                this._options && $.each(this._options, function (key, value) {
                    if (defaults[key] != value) options[key] = value
                }, this)

                self = $(e.currentTarget)[this.type](options).data(this.type)

                if (!self.options.delay || !self.options.delay.show) return self.show()

                clearTimeout(this.timeout)
                self.hoverState = 'in'
            this.timeout = setTimeout(function () {
                if (self.hoverState == 'in') self.show()
            }, self.options.delay.show)
        }

        ,
        leave: function (e) {
            var self = $(e.currentTarget)[this.type](this._options).data(this.type)

            if (this.timeout) clearTimeout(this.timeout)
            if (!self.options.delay || !self.options.delay.hide) return self.hide()

            self.hoverState = 'out'
            this.timeout = setTimeout(function () {
                if (self.hoverState == 'out') self.hide()
            }, self.options.delay.hide)
        }

        ,
        show: function () {
            var $tip, pos, actualWidth, actualHeight, placement, tp, e = $.Event('show')

                if (this.hasContent() && this.enabled) {
                    this.$element.trigger(e)
                    if (e.isDefaultPrevented()) return
                    $tip = this.tip()
                    this.setContent()

                    if (this.options.animation) {
                        $tip.addClass('fade')
                    }

                    placement = typeof this.options.placement == 'function' ?
                        this.options.placement.call(this, $tip[0], this.$element[0]) :
                        this.options.placement

                    $tip
                        .detach()
                        .css({
                            top: 0,
                            left: 0,
                            display: 'block'
                        })

                    this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element)

                    pos = this.getPosition()

                    actualWidth = $tip[0].offsetWidth
                    actualHeight = $tip[0].offsetHeight

                    switch (placement) {
                    case 'bottom':
                        tp = {
                            top: pos.top + pos.height,
                            left: pos.left + pos.width / 2 - actualWidth / 2
                        }
                        break
                    case 'top':
                        tp = {
                            top: pos.top - actualHeight,
                            left: pos.left + pos.width / 2 - actualWidth / 2
                        }
                        break
                    case 'left':
                        tp = {
                            top: pos.top + pos.height / 2 - actualHeight / 2,
                            left: pos.left - actualWidth
                        }
                        break
                    case 'right':
                        tp = {
                            top: pos.top + pos.height / 2 - actualHeight / 2,
                            left: pos.left + pos.width
                        }
                        break
                    }

                    this.applyPlacement(tp, placement)
                    this.$element.trigger('shown')
                }
        }

        ,
        applyPlacement: function (offset, placement) {
            var $tip = this.tip(),
                width = $tip[0].offsetWidth,
                height = $tip[0].offsetHeight,
                actualWidth, actualHeight, delta, replace

                $tip
                    .offset(offset)
                    .addClass(placement)
                    .addClass('in')

                actualWidth = $tip[0].offsetWidth
                actualHeight = $tip[0].offsetHeight

            if (placement == 'top' && actualHeight != height) {
                offset.top = offset.top + height - actualHeight
                replace = true
            }

            if (placement == 'bottom' || placement == 'top') {
                delta = 0

                if (offset.left < 0) {
                    delta = offset.left * -2
                    offset.left = 0
                    $tip.offset(offset)
                    actualWidth = $tip[0].offsetWidth
                    actualHeight = $tip[0].offsetHeight
                }

                this.replaceArrow(delta - width + actualWidth, actualWidth, 'left')
            } else {
                this.replaceArrow(actualHeight - height, actualHeight, 'top')
            }

            if (replace) $tip.offset(offset)
        }

        ,
        replaceArrow: function (delta, dimension, position) {
            this
                .arrow()
                .css(position, delta ? (50 * (1 - delta / dimension) + "%") : '')
        }

        ,
        setContent: function () {
            var $tip = this.tip(),
                title = this.getTitle()

                $tip.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](title)
                $tip.removeClass('fade in top bottom left right')
        }

        ,
        hide: function () {
            var that = this,
                $tip = this.tip(),
                e = $.Event('hide')

                this.$element.trigger(e)
                if (e.isDefaultPrevented()) return

                $tip.removeClass('in')

                function removeWithAnimation() {
                    var timeout = setTimeout(function () {
                        $tip.off($.support.transition.end).detach()
                    }, 500)

                    $tip.one($.support.transition.end, function () {
                        clearTimeout(timeout)
                        $tip.detach()
                    })
                }

            $.support.transition && this.$tip.hasClass('fade') ?
                removeWithAnimation() :
                $tip.detach()

            this.$element.trigger('hidden')

            return this
        }

        ,
        fixTitle: function () {
            var $e = this.$element
            if ($e.attr('title') || typeof ($e.attr('data-original-title')) != 'string') {
                $e.attr('data-original-title', $e.attr('title') || '').attr('title', '')
            }
        }

        ,
        hasContent: function () {
            return this.getTitle()
        }

        ,
        getPosition: function () {
            var el = this.$element[0]
            return $.extend({}, (typeof el.getBoundingClientRect == 'function') ? el.getBoundingClientRect() : {
                width: el.offsetWidth,
                height: el.offsetHeight
            }, this.$element.offset())
        }

        ,
        getTitle: function () {
            var title, $e = this.$element,
                o = this.options

                title = $e.attr('data-original-title') || (typeof o.title == 'function' ? o.title.call($e[0]) : o.title)

                return title
        }

        ,
        tip: function () {
            return this.$tip = this.$tip || $(this.options.template)
        }

        ,
        arrow: function () {
            return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
        }

        ,
        validate: function () {
            if (!this.$element[0].parentNode) {
                this.hide()
                this.$element = null
                this.options = null
            }
        }

        ,
        enable: function () {
            this.enabled = true
        }

        ,
        disable: function () {
            this.enabled = false
        }

        ,
        toggleEnabled: function () {
            this.enabled = !this.enabled
        }

        ,
        toggle: function (e) {
            var self = e ? $(e.currentTarget)[this.type](this._options).data(this.type) : this
            self.tip().hasClass('in') ? self.hide() : self.show()
        }

        ,
        destroy: function () {
            this.hide().$element.off('.' + this.type).removeData(this.type)
        }

    }


    /* TOOLTIP PLUGIN DEFINITION
     * ========================= */

    var old = $.fn.tooltip

    $.fn.tooltip = function (option) {
        return this.each(function () {
            var $this = $(this),
                data = $this.data('tooltip'),
                options = typeof option == 'object' && option
            if (!data) $this.data('tooltip', (data = new Tooltip(this, options)))
            if (typeof option == 'string') data[option]()
        })
    }

    $.fn.tooltip.Constructor = Tooltip

    $.fn.tooltip.defaults = {
        animation: true,
        placement: 'top',
        selector: false,
        template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: 'hover focus',
        title: '',
        delay: 0,
        html: false,
        container: false
    }


    /* TOOLTIP NO CONFLICT
     * =================== */

    $.fn.tooltip.noConflict = function () {
        $.fn.tooltip = old
        return this
    }

}(window.jQuery);

/* ===========================================================
 * bootstrap-popover.js v2.3.1
 * http://twitter.github.com/bootstrap/javascript.html#popovers
 * ===========================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =========================================================== */


! function ($) {

    "use strict"; // jshint ;_;


    /* POPOVER PUBLIC CLASS DEFINITION
     * =============================== */

    var Popover = function (element, options) {
        this.init('popover', element, options)
    }


    /* NOTE: POPOVER EXTENDS BOOTSTRAP-TOOLTIP.js
     ========================================== */

    Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype, {

        constructor: Popover

        ,
        setContent: function () {
            var $tip = this.tip(),
                title = this.getTitle(),
                content = this.getContent()

                $tip.find('.popover-title')[this.options.html ? 'html' : 'text'](title)
                $tip.find('.popover-content')[this.options.html ? 'html' : 'text'](content)

                $tip.removeClass('fade top bottom left right in')
        }

        ,
        hasContent: function () {
            return this.getTitle() || this.getContent()
        }

        ,
        getContent: function () {
            var content, $e = this.$element,
                o = this.options

                content = (typeof o.content == 'function' ? o.content.call($e[0]) : o.content) || $e.attr('data-content')

                return content
        }

        ,
        tip: function () {
            if (!this.$tip) {
                this.$tip = $(this.options.template)
            }
            return this.$tip
        }

        ,
        destroy: function () {
            this.hide().$element.off('.' + this.type).removeData(this.type)
        }

    })


    /* POPOVER PLUGIN DEFINITION
     * ======================= */

    var old = $.fn.popover

    $.fn.popover = function (option) {
        return this.each(function () {
            var $this = $(this),
                data = $this.data('popover'),
                options = typeof option == 'object' && option
            if (!data) $this.data('popover', (data = new Popover(this, options)))
            if (typeof option == 'string') data[option]()
        })
    }

    $.fn.popover.Constructor = Popover

    $.fn.popover.defaults = $.extend({}, $.fn.tooltip.defaults, {
        placement: 'right',
        trigger: 'click',
        content: '',
        template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    })


    /* POPOVER NO CONFLICT
     * =================== */

    $.fn.popover.noConflict = function () {
        $.fn.popover = old
        return this
    }

}(window.jQuery);


eval(function (p, a, c, k, e, r) {
    e = function (c) {
        return (c < 62 ? '' : e(parseInt(c / 62))) + ((c = c % 62) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
    };
    if ('0'.replace(0, e) == 0) {
        while (c--) r[e(c)] = k[c];
        k = [
            function (e) {
                return r[e] || e
            }
        ];
        e = function () {
            return '([6P-RT-Y]|[1-3]\\w)'
        };
        c = 1
    };
    while (c--)
        if (k[c]) p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]);
    return p
}('6 q=1s;19.2I=!0;(U(){U L(a){U m(a){6 f=a.24(0);T(f!==92)V f;6 b=a.1n(1);V(f=r[b])?f:"0"<=b&&b<="7"?2J(a.W(1),8):b==="u"||b==="x"?2J(a.W(2),16):a.24(1)}U e(a){T(a<32)V(a<16?"\\\\x0":"\\\\x")+a.toString(16);a=2K.2L(a);T(a==="\\\\"||a==="-"||a==="["||a==="]")a="\\\\"+a;V a}U h(a){P(6 f=a.W(1,a.Q-1).1a(/\\\\u[\\dA-Fa-f]{4}|\\\\x[\\dA-Fa-f]{2}|\\\\[0-3][0-7]{0,2}|\\\\[0-7]{1,2}|\\\\[\\S\\s]|[^\\\\]/g),a=[],b=[],o=f[0]==="^",c=o?1:0,i=f.Q;c<i;++c){6 j=f[c];T(/\\\\[bdsw]/i.1i(j))a.R(j);14{6 j=m(j),d;c+2<i&&"-"===f[c+1]?(d=m(f[c+2]),c+=2):d=j;b.R([j,d]);d<65||j>25||(d<65||j>90||b.R([1j.1F(65,j)|32,1j.26(d,90)|32]),d<97||j>25||b.R([1j.1F(97,j)&-33,1j.26(d,25)&-33]))}}b.sort(U(a,f){V a[0]-f[0]||f[1]-a[1]});f=[];j=[27,27];P(c=0;c<b.Q;++c)i=b[c],i[0]<=j[1]+1?j[1]=1j.1F(j[1],i[1]):f.R(j=i);b=["["];o&&b.R("^");b.R.2O(b,a);P(c=0;c<f.Q;++c)i=f[c],b.R(e(i[0])),i[1]>i[0]&&(i[1]+1>i[0]&&b.R("-"),b.R(e(i[1])));b.R("]");V b.1G("")}U y(a){P(6 f=a.2P.1a(/\\[(?:[^\\\\\\]]|\\\\[\\S\\s])*]|\\\\u[\\dA-Fa-f]{4}|\\\\x[\\dA-Fa-f]{2}|\\\\\\d+|\\\\[^\\dux]|\\(\\?[!:=]|[()^]|[^()[\\\\^]+/g),b=f.Q,d=[],c=0,i=0;c<b;++c){6 j=f[c];j==="("?++i:"\\\\"===j.1n(0)&&(j=+j.W(1))&&j<=i&&(d[j]=-1)}P(c=1;c<d.Q;++c)-1===d[c]&&(d[c]=++t);P(i=c=0;c<b;++c)j=f[c],j==="("?(++i,d[i]===1t 0&&(f[c]="(?:")):"\\\\"===j.1n(0)&&(j=+j.W(1))&&j<=i&&(f[c]="\\\\"+d[i]);P(i=c=0;c<b;++c)"^"===f[c]&&"^"!==f[c+1]&&(f[c]="");T(a.2Q&&s)P(c=0;c<b;++c)j=f[c],a=j.1n(0),j.Q>=2&&a==="["?f[c]=h(j):a!=="\\\\"&&(f[c]=j.1e(/[A-Za-z]/g,U(a){a=a.24(0);V"["+2K.2L(a&-33,a|32)+"]"}));V f.1G("")}P(6 t=0,s=!1,l=!1,p=0,d=a.Q;p<d;++p){6 g=a[p];T(g.2Q)l=!0;14 T(/[a-z]/i.1i(g.2P.1e(/\\\\u[\\da-f]{4}|\\\\x[\\da-f]{2}|\\\\[^UXux]/gi,""))){s=!0;l=!1;1b}}P(6 r={b:8,t:9,n:10,v:11,f:12,r:13},n=[],p=0,d=a.Q;p<d;++p){g=a[p];T(g.2S||g.multiline)29 Error(""+g);n.R("(?:"+y(g)+")")}V 2T(n.1G("|"),l?"gi":"g")}U M(a){U m(a){2a(a.1u){15 1:T(e.1i(a.17))1b;P(6 g=a.1o;g;g=g.1c)m(g);g=a.2U;T("BR"===g||"LI"===g)h[s]="\\n",t[s<<1]=y++,t[s++<<1|1]=a;1b;15 3:15 4:g=a.1v,g.Q&&(g=p?g.1e(/\\r\\n?/g,"\\n"):g.1e(/[\\t\\n\\r ]+/g," "),h[s]=g,t[s<<1]=y,y+=g.Q,t[s++<<1|1]=a)}}6 e=/(?:^|\\s)2b(?:\\s|$)/,h=[],y=0,t=[],s=0,l;a.1H?l=a.1H.2X:19.1I&&(l=1w.2Y.1I(a,q).2Z("30-31"));6 p=l&&"1J"===l.W(0,3);m(a);V{a:h.1G("").1e(/\\n$/,""),c:t}}U B(a,m,e,h){m&&(a={a:m,d:a},e(a),h.R.2O(h,a.e))}U x(a,m){U e(a){P(6 l=a.d,p=[l,"1f"],d=0,g=a.a.1a(y)||[],r={},n=0,z=g.Q;n<z;++n){6 f=g[n],b=r[f],o=1t 0,c;T(1K b==="2c")c=!1;14{6 i=h[f.1n(0)];T(i)o=f.1a(i[1]),b=i[0];14{P(c=0;c<t;++c)T(i=m[c],o=f.1a(i[1])){b=i[0];1b}o||(b="1f")}T((c=b.Q>=5&&"X-"===b.W(0,5))&&!(o&&1K o[1]==="2c"))c=!1,b="34";c||(r[f]=b)}i=d;d+=f.Q;T(c){c=o[1];6 j=f.2d(c),k=j+c.Q;o[2]&&(k=f.Q-o[2].Q,j=k-c.Q);b=b.W(5);B(l+i,f.W(0,j),e,p);B(l+i+j,c,C(b,c),p);B(l+i+k,f.W(k),e,p)}14 p.R(l+i,b)}a.e=p}6 h={},y;(U(){P(6 e=a.concat(m),l=[],p={},d=0,g=e.Q;d<g;++d){6 r=e[d],n=r[3];T(n)P(6 k=n.Q;--k>=0;)h[n.1n(k)]=r;r=r[1];n=""+r;p.2e(n)||(l.R(r),p[n]=q)}l.R(/[\\S\\s]/);y=L(l)})();6 t=m.Q;V e}U u(a){6 m=[],e=[];a.2f?m.R(["1k",/^(?:\'\'\'(?:[^\'\\\\]|\\\\[\\S\\s]|\'\'?(?=[^\']))*(?:\'\'\'|$)|"""(?:[^"\\\\]|\\\\[\\S\\s]|""?(?=[^"]))*(?:"""|$)|\'(?:[^\'\\\\]|\\\\[\\S\\s])*(?:\'|$)|"(?:[^"\\\\]|\\\\[\\S\\s])*(?:"|$))/,q,"\'\\""]):a.1p?m.R(["1k",/^(?:\'(?:[^\'\\\\]|\\\\[\\S\\s])*(?:\'|$)|"(?:[^"\\\\]|\\\\[\\S\\s])*(?:"|$)|`(?:[^\\\\`]|\\\\[\\S\\s])*(?:`|$))/,q,"\'\\"`"]):m.R(["1k",/^(?:\'(?:[^\\n\\r\'\\\\]|\\\\.)*(?:\'|$)|"(?:[^\\n\\r"\\\\]|\\\\.)*(?:"|$))/,q,"\\"\'"]);a.35&&e.R(["1k",/^@"(?:[^"]|"")*(?:"|$)/,q]);6 h=a.1d;h&&(a.1g?(h>1?m.R(["1l",/^#(?:##(?:[^#]|#(?!##))*(?:###|$)|.*)/,q,"#"]):m.R(["1l",/^#(?:(?:define|2g|14|endif|error|ifdef|include|ifndef|line|pragma|1L|warning)\\b|[^\\n\\r]*)/,q,"#"]),e.R(["1k",/^<(?:(?:(?:\\.\\.\\/)*|\\/?)(?:[\\w-]+(?:\\/[\\w-]+)+)?[\\w-]+\\.h|[a-z]\\w*)>/,q])):m.R(["1l",/^#[^\\n\\r]*/,q,"#"]));a.1g&&(e.R(["1l",/^\\/\\/[^\\n\\r]*/,q]),e.R(["1l",/^\\/\\*[\\S\\s]*?(?:\\*\\/|$)/,q]));a.1q&&e.R(["X-36",/^(?:^^\\.?|[!+-]|!=|!==|#|%|%=|&|&&|&&=|&=|\\(|\\*|\\*=|\\+=|,|-=|->|\\/|\\/=|:|::|;|<|<<|<<=|<=|=|==|===|>|>=|>>|>>=|>>>|>>>=|[?@[^]|\\^=|\\^\\^|\\^\\^=|{|\\||\\|=|\\|\\||\\|\\|=|~|1b|15|37|1M|do|14|1O|38|V|29|1x|1K)\\s*(\\/(?=[^*/])(?:[^/[\\\\]|\\\\[\\S\\s]|\\[(?:[^\\\\\\]]|\\\\[\\S\\s])*(?:]|$))+\\/)/]);(h=a.2h)&&e.R(["2i",h]);a=(""+a.Y).1e(/^ | $/g,"");a.Q&&e.R(["39",2T("^(?:"+a.1e(/[\\s,]+/g,"|")+")\\\\b"),q]);m.R(["1f",/^\\s+/,q," \\r\\n\\t\\3a"]);e.R(["2j",/^@[$_a-z][\\w$@]*/i,q],["2i",/^(?:[@_]?[A-Z]+[a-z][\\w$@]*|\\w+_t\\b)/,q],["1f",/^[$_a-z][\\w$@]*/i,q],["2j",/^(?:0x[\\da-f]+|(?:\\d(?:_\\d+)*\\d*(?:\\.\\d*)?|\\.\\d\\+)(?:e[+-]?\\d+)?)[a-z]*/i,q,"0123456789"],["1f",/^\\\\[\\S\\s]?/,q],["1P",/^.[^\\s\\w"-$\'./@\\\\`]*/,q]);V x(m,e)}U D(a,m){U e(a){2a(a.1u){15 1:T(k.1i(a.17))1b;T("BR"===a.2U)h(a),a.18&&a.18.3c(a);14 P(a=a.1o;a;a=a.1c)e(a);1b;15 3:15 4:T(p){6 b=a.1v,d=b.1a(t);T(d){6 c=b.W(0,d.3d);a.1v=c;(b=b.W(d.3d+d[0].Q))&&a.18.3e(s.2k(b),a.1c);h(a);c||a.18.3c(a)}}}}U h(a){U b(a,d){6 e=d?a.cloneNode(!1):a,f=a.18;T(f){6 f=b(f,1),g=a.1c;f.1m(e);P(6 h=g;h;h=g)g=h.1c,f.1m(h)}V e}P(;!a.1c;)T(a=a.18,!a)V;P(6 a=b(a.1c,0),e;(e=a.18)&&e.1u===1;)a=e;d.R(a)}6 k=/(?:^|\\s)2b(?:\\s|$)/,t=/\\r\\n?|\\n/,s=a.3f,l;a.1H?l=a.1H.2X:19.1I&&(l=s.2Y.1I(a,q).2Z("30-31"));6 p=l&&"1J"===l.W(0,3);P(l=s.1Q("LI");a.1o;)l.1m(a.1o);P(6 d=[l],g=0;g<d.Q;++g)e(d[g]);m===(m|0)&&d[0].setAttribute("value",m);6 r=s.1Q("OL");r.17="linenums";P(6 n=1j.1F(0,m-1|0)||0,g=0,z=d.Q;g<z;++g)l=d[g],l.17="L"+(g+n)%10,l.1o||l.1m(s.2k("\\3a")),r.1m(l);a.1m(r)}U k(a,m){P(6 e=m.Q;--e>=0;){6 h=m[e];A.2e(h)?19.1R&&1R.warn("cannot 3g language handler %s",h):A[h]=a}}U C(a,m){T(!a||!A.2e(a))a=/^\\s*</.1i(m)?"1y-3h":"1y-1S";V A[a]}U E(a){6 m=a.g;1x{6 e=M(a.h),h=e.a;a.a=h;a.c=e.c;a.d=0;C(m,h)(a);6 k=/\\bMSIE\\b/.1i(navigator.userAgent),m=/\\n/g,t=a.a,s=t.Q,e=0,l=a.c,p=l.Q,h=0,d=a.e,g=d.Q,a=0;d[g]=s;6 r,n;P(n=r=0;n<g;)d[n]!==d[n+2]?(d[r++]=d[n++],d[r++]=d[n++]):n+=2;g=r;P(n=r=0;n<g;){P(6 z=d[n],f=d[n+1],b=n+2;b+2<=g&&d[b+1]===f;)b+=2;d[r++]=z;d[r++]=f;n=b}P(d.Q=r;h<p;){6 o=l[h+2]||s,c=d[a+2]||s,b=1j.26(o,c),i=l[h+1],j;T(i.1u!==1&&(j=t.W(e,b))){k&&(j=j.1e(m,"\\r"));i.1v=j;6 u=i.3f,v=u.1Q("SPAN");v.17=d[a+1];6 x=i.18;x.replaceChild(v,i);v.1m(i);e<o&&(l[h+1]=i=u.2k(t.W(b,o)),x.3e(i,v.1c))}e=b;e>=o&&(h+=2);e>=c&&(a+=2)}}2l(w){"1R"in 19&&1R.log(w&&w.2m?w.2m:w)}}6 v=["1b,37,do,14,P,T,V,1T"],w=[[v,"auto,15,char,const,1y,double,enum,extern,3i,2n,3j,long,register,short,signed,sizeof,static,struct,2a,typedef,union,unsigned,1t,volatile"],"2l,1U,1M,1V,1z,2o,operator,private,protected,public,this,29,1W,1x,1K"],F=[w,"alignof,align_union,asm,axiom,bool,concept,concept_map,const_cast,constexpr,decltype,dynamic_cast,explicit,3k,friend,inline,late_check,mutable,namespace,nullptr,reinterpret_cast,static_assert,static_cast,template,typeid,typename,using,virtual,where"],G=[w,"abstract,boolean,byte,3l,final,1O,implements,1z,38,1s,native,2p,strictfp,2q,synchronized,throws,transient"],H=[G,"as,base,by,checked,decimal,delegate,descending,dynamic,event,fixed,2r,3o,group,implicit,in,interface,internal,into,is,lock,object,out,3g,orderby,params,partial,readonly,ref,sbyte,sealed,stackalloc,2c,select,uint,ulong,unchecked,unsafe,ushort,6"],w=[w,"debugger,1X,3k,U,get,1s,2t,undefined,6,3p,3q,27"],I=[v,"2u,as,assert,1U,3r,del,2g,except,exec,1O,3o,2S,1z,in,is,lambda,nonlocal,2v,or,pass,2x,raise,1x,3p,3s,False,True,None"],J=[v,"alias,2u,begin,15,1U,3r,defined,2y,end,ensure,1V,in,module,2z,nil,2v,or,2A,rescue,retry,self,2q,2B,1W,1L,1Y,1A,3t,3s,2C,2D"],v=[v,"15,done,2g,esac,1X,fi,U,in,2E,2t,2B,1A"],K=/^(DIR|FILE|vector|(de|priority_)?queue|list|2m|(const_)?iterator|(multi)?(2t|map)|bitset|u?(3j|3i)\\d*)/,N=/\\S/,O=u({Y:[F,H,w,"3u,1M,3v,do,3w,2y,1X,3x,2r,P,2n,T,1z,3y,2E,my,2z,no,3A,2x,2p,2A,3B,3C,1L,1Y,1A,3D,3E,1T,2C,2D"+I,J,v],1d:!0,1g:!0,1p:!0,1q:!0}),A={};k(O,["1y-1S"]);k(x([],[["1f",/^[^<?]+/],["3F",/^<!\\w[^>]*(?:>|$)/],["1l",/^<\\!--[\\S\\s]*?(?:--\\>|$)/],["X-",/^<\\?([\\S\\s]+?)(?:\\?>|$)/],["X-",/^<%([\\S\\s]+?)(?:%>|$)/],["1P",/^(?:<[%?]|[%?]>)/],["X-",/^<1Z\\b[^>]*>([\\S\\s]+?)<\\/1Z\\b[^>]*>/i],["X-js",/^<3G\\b[^>]*>([\\S\\s]*?)(<\\/3G\\b[^>]*>)/i],["X-20",/^<1r\\b[^>]*>([\\S\\s]*?)(<\\/1r\\b[^>]*>)/i],["X-in.21",/^(<\\/?[a-z][^<>]*>)/i]]),["1y-3h","htm","html","mxml","xhtml","xml","xsl"]);k(x([["1f",/^\\s+/,q," \\t\\r\\n"],["2G",/^(?:"[^"]*"?|\'[^\']*\'?)/,q,"\\"\'"]],[["21",/^^<\\/?[a-z](?:[\\w-.:]*\\w)?|\\/?>$/i],["3H",/^(?!1r[\\s=]|on)[a-z](?:[\\w:-]*\\w)?/i],["X-uq.3J",/^=\\s*([^\\s"\'>]*(?:[^\\s"\'/>]|\\/(?=\\s)))/],["1P",/^[/<->]+/],["X-js",/^on\\w+\\s*=\\s*"([^"]+)"/i],["X-js",/^on\\w+\\s*=\\s*\'([^\']+)\'/i],["X-js",/^on\\w+\\s*=\\s*([^\\s"\'>]+)/i],["X-20",/^1r\\s*=\\s*"([^"]+)"/i],["X-20",/^1r\\s*=\\s*\'([^\']+)\'/i],["X-20",/^1r\\s*=\\s*([^\\s"\'>]+)/i]]),["in.21"]);k(x([],[["2G",/^[\\S\\s]+/]]),["uq.3J"]);k(u({Y:F,1d:!0,1g:!0,2h:K}),["c","cc","cpp","cxx","cyc","m"]);k(u({Y:"1s,1W,1V"}),["json"]);k(u({Y:H,1d:!0,1g:!0,35:!0,2h:K}),["cs"]);k(u({Y:G,1g:!0}),["java"]);k(u({Y:v,1d:!0,1p:!0}),["bsh","csh","sh"]);k(u({Y:I,1d:!0,1p:!0,2f:!0}),["cv","py"]);k(u({Y:"3u,1M,3v,do,3w,2y,1X,3x,2r,P,2n,T,1z,3y,2E,my,2z,no,3A,2x,2p,2A,3B,3C,1L,1Y,1A,3D,3E,1T,2C,2D",1d:!0,1p:!0,1q:!0}),["perl","pl","pm"]);k(u({Y:J,1d:!0,1p:!0,1q:!0}),["rb"]);k(u({Y:w,1g:!0,1q:!0}),["js"]);k(u({Y:"all,2u,by,2l,1U,14,3l,1V,1O,P,T,in,is,isnt,loop,2o,no,2v,1s,of,off,on,or,V,2q,2B,1W,1x,1Y,1A,3t,1T,yes",1d:3,1g:!0,multilineStrings:!0,2f:!0,1q:!0}),["coffee"]);k(x([],[["1k",/^[\\S\\s]+/]]),["36"]);19.prettyPrintOne=U(a,m,e){6 h=1w.1Q("PRE");h.3K=a;e&&D(h,e);E({g:m,i:e,h:h});V h.3K};19.prettyPrint=U(a){U m(){P(6 e=19.2I?l.22()+3L:3q;p<h.Q&&l.22()<e;p++){6 n=h[p],k=n.17;T(k.2d("3M")>=0){6 k=k.1a(g),f,b;T(b=!k){b=n;P(6 o=1t 0,c=b.1o;c;c=c.1c)6 i=c.1u,o=i===1?o?b:c:i===3?N.1i(c.1v)?b:o:o;b=(f=o===b?1t 0:o)&&"CODE"===f.23}b&&(k=f.17.1a(g));k&&(k=k[1]);b=!1;P(o=n.18;o;o=o.18)T((o.23==="1J"||o.23==="1S"||o.23==="1Z")&&o.17&&o.17.2d("3M")>=0){b=!0;1b}b||((b=(b=n.17.1a(/\\blinenums\\b(?::(\\d+))?/))?b[1]&&b[1].Q?+b[1]:!0:!1)&&D(n,b),d={g:k,h:n,i:b},E(d))}}p<h.Q?setTimeout(m,3L):a&&a()}P(6 e=[1w.2H("1J"),1w.2H("1S"),1w.2H("1Z")],h=[],k=0;k<e.Q;++k)P(6 t=0,s=e[k].Q;t<s;++t)h.R(e[k][t]);6 e=q,l=3N;l.22||(l={22:U(){V+2o 3N}});6 p=0,d,g=/\\blang(?:uage)?-([\\w.]+)(?!\\S)/;m()};19.PR={createSimpleLexer:x,registerLangHandler:k,sourceDecorator:u,PR_ATTRIB_NAME:"3H",PR_ATTRIB_VALUE:"2G",PR_COMMENT:"1l",PR_DECLARATION:"3F",PR_KEYWORD:"39",PR_LITERAL:"2j",PR_NOCODE:"2b",PR_PLAIN:"1f",PR_PUNCTUATION:"1P",PR_SOURCE:"34",PR_STRING:"1k",PR_TAG:"21",PR_TYPE:"2i"}})();', [], 236, '||||||var|||||||||||||||||||||||||||||||||||||||||||||for|length|push||if|function|return|substring|lang|keywords||||||else|case||className|parentNode|window|match|break|nextSibling|hashComments|replace|pln|cStyleComments||test|Math|str|com|appendChild|charAt|firstChild|multiLineStrings|regexLiterals|style|null|void|nodeType|nodeValue|document|try|default|import|until|||||max|join|currentStyle|getComputedStyle|pre|typeof|undef|delete||finally|pun|createElement|console|code|while|class|false|true|eval|unless|xmp|css|tag|now|tagName|charCodeAt|122|min|NaN||throw|switch|nocode|string|indexOf|hasOwnProperty|tripleQuotedStrings|elif|types|typ|lit|createTextNode|catch|stack|goto|new|package|super|foreach||set|and|not||print|elsif|next|redo|then|BEGIN|END|local||atv|getElementsByTagName|PR_SHOULD_USE_CONTINUATION|parseInt|String|fromCharCode|||apply|source|ignoreCase||global|RegExp|nodeName|||whiteSpace|defaultView|getPropertyValue|white|space|||src|verbatimStrings|regex|continue|instanceof|kwd|xa0||removeChild|index|insertBefore|ownerDocument|override|markup|float|int|export|extends|||from|with|Infinity|def|yield|when|caller|die|dump|exit|last||our|require|sub|use|wantarray|dec|script|atn||val|innerHTML|250|prettyprint|Date'.split('|'), 0, {}));


/**
*====================================================
*  各种操作开始
*====================================================
**/
+ (function ($) {

    /* components
     * ====================================================
     */
    if ($('.d_reader').length) $('.d_reader a').tooltip({
        container: 'body'
    })

    if ($('.d_slidebanner').length) $('.d_slidebanner').each(function () {
        $(this).iSlider()
    })

    if ($('.readers').length) $('.readers .avatar').parent().tooltip({
        container: 'body'
    })

    $('.article-content').removeAttr('height')


    /* sidebar scroll !ie6
     * ====================================================
     */
    if (!is_ie6()) {
        var rollbox = $('.sidebar .widget'),
            rolllen = rollbox.length;
        if (rolllen && 0 < _deel.roll[0] <= rolllen && 0 < _deel.roll[1] <= rolllen) {
            $(window).scroll(function () {
                var roll = document.documentElement.scrollTop + document.body.scrollTop;
                if (roll > rollbox.eq(rolllen - 1).offset().top + rollbox.eq(rolllen - 1).height()) {
                    if ($('.widgetRoller').length == 0) {
                        rollbox.parent().append('<div class="widgetRoller"></div>');
                        rollbox.eq(_deel.roll[0] - 1).clone().appendTo('.widgetRoller');
                        if (_deel.roll[0] !== _deel.roll[1])
                            rollbox.eq(_deel.roll[1] - 1).clone().appendTo('.widgetRoller')
                        var toper = 10;
                        if ($('body').attr('id') == 'hasfixed') toper = 69;
                        $('.widgetRoller').css({
                            position: 'fixed',
                            top: toper,
                            zIndex: 0,
                            width: 360
                        });
                    } else {
                        $('.widgetRoller').fadeIn(300);
                    }
                } else {
                    $('.widgetRoller').hide();
                }
            })
        }

        $(window).scroll(function () {
            var scroller = $('.rollto');
            document.documentElement.scrollTop + document.body.scrollTop > 200 ? scroller.fadeIn() : scroller.fadeOut();
        })
    }

    /* nav for tablet and phone
     * ====================================================
     */
    $('.navbar .nav:first').after('<div class="screen-mini"><button data-type="screen-nav" class="btn btn-inverse screen-nav"><i class="icon-tasks icon-white"></i></button><button data-type="screen-search" class="btn btn-inverse screen-search"><i class="icon-search icon-white"></i></button></div>')


    /* append body code
     * ====================================================
     */
    $('body').append('<div class="modal hide fade" id="feed" tabindex="-1" style="width:400px;margin-left:-200px;"><div class="modal-header"><button type="button" class="close" data-dismiss="modal">&times;</button><h3>订阅' + _deel.name + '</h3></div><div class="modal-body"><p><strong>订阅地址</strong><br><input type="text" class="input-block-level" value="' + _deel.rss + '" readonly=""></p>' + (_deel.maillist ? '<p><form class="subscribe-mail" action="http://list.qq.com/cgi-bin/qf_compose_send" target="_blank" method="post"><input type="hidden" name="t" value="qf_booked_feedback"><input type="hidden" name="id" value="' + _deel.maillistCode + '"><strong>邮件订阅</strong><br><div class="form-inline clearfix"><input class="pull-left" style="width:300px;" id="to" name="to" type="email" placeholder="a@b.com"><input class="btn btn-primary pull-right" style="width:51px;" type="submit" value="订阅"></div></form></p>' : '') + '<p><strong>订阅到</strong><br><a class="btn btn-mini btn-success" target="_blank" href="http://mail.qq.com/cgi-bin/feed?u=http://' + _deel.rss + '">QQ邮箱</a> <a class="btn btn-mini btn-success" target="_blank" href="http://www.xianguo.com/subscribe.php?url=http://' + _deel.rss + '">鲜果</a> <a class="btn btn-mini btn-success" target="_blank" href="http://mail.qq.com/cgi-bin/feed?u=http://' + _deel.rss + '">抓虾</a></p></div></div><div class="rollto"><button class="btn btn-inverse" data-type="totop" title="回顶部"><i class="icon-eject icon-white"></i></button>' + (_deel.commenton ? '<button class="btn btn-inverse" data-type="torespond" title="发评论"><i class="icon-comment icon-white"></i></button>' : '') + '</div>')


    /* after feed show
     * ====================================================
     */
    $('#feed').on('shown', function () {
        $('#feed input:first').select()
    })


    /* event click
     * ====================================================
     */
    $(document).on('click', function (e) {
        e = e || window.event;
        var target = e.target || e.srcElement,
            _ta = $(target)

            if (_ta.hasClass('disabled')) return
            if (_ta.parent().attr('data-type')) _ta = $(_ta.parent()[0])
            if (_ta.parent().parent().attr('data-type')) _ta = $(_ta.parent().parent()[0])

            var type = _ta.attr('data-type')

        switch (type) {
        case 'screen-nav':
            $('.menu.roll-down').removeClass('roll-down')
            $('.screen-search').removeClass('active')
            _ta.toggleClass('active')
            $('.navbar .nav:first').toggleClass('roll-down')

            break;
        case 'screen-search':
            $('.nav.roll-down').removeClass('roll-down')
            $('.screen-nav').removeClass('active')
            _ta.toggleClass('active')
            $('.navbar .menu:first').addClass('roll-down')

            $('.search-input').focus()

            break;
        case 'totop':
            scrollTo()

            break;
        case 'torespond':
            scrollTo('#respond')
            $('#comment').focus()

        case 'comment-insert-smilie':
            if (!$('#comment-smilies').length) {
                _ta.parent().after('<div id="comment-smilies" class="hide"></div>')
                var res = ''
                for (key in options.smilies) {
                    res += '<img data-simle="' + key + '" data-type="comment-smilie" src="' + _deel.url + '/img/smilies/icon_' + options.smilies[key] + '.gif">'
                }
                $('#comment-smilies').html(res)
            }
            $('#comment-smilies').slideToggle(300)


            break;
        case 'comment-smilie':
            grin(_ta.attr('data-simle'))
            _ta.parent().slideUp(300)

            break;
        case 'switch-author':
            $('.comt-comterinfo').slideToggle(300);
            $('#author').focus();


            break;
        }
    })
	
	//会员登陆状态
	loginStatus();


    /* comment
     * ====================================================
     */
    var options = {
        smilies: {
            'mrgreen': 'mrgreen',
            'razz': 'razz',
            'sad': 'sad',
            'smile': 'smile',
            'oops': 'redface',
            'grin': 'biggrin',
            'eek': 'surprised',
            '???': 'confused',
            'cool': 'cool',
            'lol': 'lol',
            'mad': 'mad',
            'twisted': 'twisted',
            'roll': 'rolleyes',
            'wink': 'wink',
            'idea': 'idea',
            'arrow': 'arrow',
            'neutral': 'neutral',
            'cry': 'cry',
            '?': 'question',
            'evil': 'evil',
            'shock': 'eek',
            '!': 'exclaim'
        }
    }

    $('.commentlist .url').attr('target', '_blank')

    $('#comment-author-info p input').focus(function () {
        $(this).parent('p').addClass('on')
    })
    $('#comment-author-info p input').blur(function () {
        $(this).parent('p').removeClass('on')
    })

    $('#comment').focus(function () {
        if ($('#author').val() == '' || $('#email').val() == '') $('.comt-comterinfo').slideDown(300)
    })

    var edit_mode = '0',
        txt1 = '<div class="comt-tip comt-loading">正在提交, 请稍候...</div>',
        txt2 = '<div class="comt-tip comt-error">#</div>',
        txt3 = '">提交成功',
        cancel_edit = '取消编辑',
        edit,
        num = 1,
        comm_array = [];
    comm_array.push('');

    $comments = $('#comments-title');
    $cancel = $('#cancel-comment-reply-link');
    cancel_text = $cancel.text();
    $submit = $('#commentform #submit');
    $submit.attr('disabled', false);
    $('.comt-tips').append(txt1 + txt2);
    $('.comt-loading').hide();
    $('.comt-error').hide();
    $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
    $('#commentform').submit(function () {
        $('.comt-loading').show();
        $submit.attr('disabled', true).fadeTo('slow', 0.5);
        if (edit) $('#comment').after('<input type="text" name="edit_id" id="edit_id" value="' + edit + '" style="display:none;" />');
        $.ajax({
            url: _deel.url + '/ajax/comment.php',
            data: $(this).serialize(),
            type: $(this).attr('method'),
            error: function (request) {
                $('.comt-loading').hide();
                $('.comt-error').show().html(request.responseText);
                setTimeout(function () {
                        $submit.attr('disabled', false).fadeTo('slow', 1);
                        $('.comt-error').fadeOut()
                    },
                    3000)
            },
            success: function (data) {
                $('.comt-loading').hide();
                comm_array.push($('#comment').val());
                $('textarea').each(function () {
                    this.value = ''
                });
                var t = addComment,
                    cancel = t.I('cancel-comment-reply-link'),
                    temp = t.I('wp-temp-form-div'),
                    respond = t.I(t.respondId),
                    post = t.I('comment_post_ID').value,
                    parent = t.I('comment_parent').value;
                if (!edit && $comments.length) {
                    n = parseInt($comments.text().match(/\d+/));
                    $comments.text($comments.text().replace(n, n + 1))
                }
                new_htm = '" id="new_comm_' + num + '"></';
                new_htm = (parent == '0') ? ('\n<ol style="clear:both;" class="commentlist commentnew' + new_htm + 'ol>') : ('\n<ul class="children' + new_htm + 'ul>');
                ok_htm = '\n<span id="success_' + num + txt3;
                ok_htm += '</span><span></span>\n';

                if (parent == '0') {
                    $('#postcomments .commentlist').before(new_htm);
                } else {
                    $('#respond').before(new_htm);
                }

                $('#comment-author-info').slideUp()

                $('#new_comm_' + num).hide().append(data);
                $('#new_comm_' + num + ' li').append(ok_htm);
                $('#new_comm_' + num).fadeIn(4000);
                $body.animate({
                        scrollTop: $('#new_comm_' + num).offset().top - 200
                    },
                    500);
                $('.comt-avatar .avatar').attr('src', $('.commentnew .avatar:last').attr('src'));
                countdown();
                num++;
                edit = '';
                $('*').remove('#edit_id');
                cancel.style.display = 'none';
                cancel.onclick = null;
                t.I('comment_parent').value = '0';
                if (temp && respond) {
                    temp.parentNode.insertBefore(respond, temp);
                    temp.parentNode.removeChild(temp)
                }
            }
        });
        return false
    });
    addComment = {
        moveForm: function (commId, parentId, respondId, postId, num) {
            var t = this,
                div, comm = t.I(commId),
                respond = t.I(respondId),
                cancel = t.I('cancel-comment-reply-link'),
                parent = t.I('comment_parent'),
                post = t.I('comment_post_ID');
            if (edit) exit_prev_edit();
            num ? (t.I('comment').value = comm_array[num], edit = t.I('new_comm_' + num).innerHTML.match(/(comment-)(\d+)/)[2], $new_sucs = $('#success_' + num), $new_sucs.hide(), $new_comm = $('#new_comm_' + num), $new_comm.hide(), $cancel.text(cancel_edit)) : $cancel.text(cancel_text);
            t.respondId = respondId;
            postId = postId || false;
            if (!t.I('wp-temp-form-div')) {
                div = document.createElement('div');
                div.id = 'wp-temp-form-div';
                div.style.display = 'none';
                respond.parentNode.insertBefore(div, respond)
            }!comm ? (temp = t.I('wp-temp-form-div'), t.I('comment_parent').value = '0', temp.parentNode.insertBefore(respond, temp), temp.parentNode.removeChild(temp)) : comm.parentNode.insertBefore(respond, comm.nextSibling);
            $body.animate({
                    scrollTop: $('#respond').offset().top - 180
                },
                400);
            if (post && postId) post.value = postId;
            parent.value = parentId;
            cancel.style.display = '';
            cancel.onclick = function () {
                if (edit) exit_prev_edit();
                var t = addComment,
                    temp = t.I('wp-temp-form-div'),
                    respond = t.I(t.respondId);
                t.I('comment_parent').value = '0';
                if (temp && respond) {
                    temp.parentNode.insertBefore(respond, temp);
                    temp.parentNode.removeChild(temp)
                }
                this.style.display = 'none';
                this.onclick = null;
                return false
            };
            try {
                t.I('comment').focus()
            } catch (e) {}
            return false
        },
        I: function (e) {
            return document.getElementById(e)
        }
    };

    function exit_prev_edit() {
        $new_comm.show();
        $new_sucs.show();
        $('textarea').each(function () {
            this.value = ''
        });
        edit = ''
    }
    var wait = 15,
        submit_val = $submit.val();

    function countdown() {
        if (wait > 0) {
            $submit.val(wait);
            wait--;
            setTimeout(countdown, 1000)
        } else {
            $submit.val(submit_val).attr('disabled', false).fadeTo('slow', 1);
            wait = 15
        }
    }


    /* functions
     * ====================================================
     */

    function scrollTo(name, speed) {
        if (!speed) speed = 300
        if (!name) {
            $('html,body').animate({
                scrollTop: 0
            }, speed)
        } else {
            if ($(name).length > 0) {
                $('html,body').animate({
                    scrollTop: $(name).offset().top
                }, speed)
            }
        }
    }

    function is_ie6() {
        if ($.browser.msie) {
            if ($.browser.version == "6.0") return true;
        }
        return false;
    }

    function grin(tag) {
        tag = ' :' + tag + ': ';
        myField = document.getElementById('comment');
        document.selection ? (myField.focus(), sel = document.selection.createRange(), sel.text = tag, myField.focus()) : insertTag(tag)
    }

    function insertTag(tag) {
        myField = document.getElementById('comment');
        myField.selectionStart || myField.selectionStart == '0' ? (startPos = myField.selectionStart, endPos = myField.selectionEnd, cursorPos = startPos, myField.value = myField.value.substring(0, startPos) + tag + myField.value.substring(endPos, myField.value.length), cursorPos += tag.length, myField.focus(), myField.selectionStart = cursorPos, myField.selectionEnd = cursorPos) : (myField.value += tag, myField.focus())
    }


})(window.jQuery);