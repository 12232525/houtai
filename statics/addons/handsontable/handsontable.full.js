/*!
(The MIT License)

Copyright (c) 2012-2014 Marcin Warpechowski
Copyright (c) 2015 Handsoncode sp. z o.o. <hello@handsoncode.net>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

*/
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.Handsontable = f()}})(function(){var define,module,exports;return (function outer (modules, cache, entry) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof require == "function" && require;
  var globalNS = JSON.parse('{"zeroclipboard":"ZeroClipboard","moment":"moment","numbro":"numbro","pikaday":"Pikaday"}') || {};

  function newRequire(name, jumped){
    if(!cache[name]) {

      if(!modules[name]) {
        // if we cannot find the the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof require == "function" && require;
        if (!jumped && currentRequire) return currentRequire(name, true);

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) return previousRequire(name, true);

        // Try to find module from global scope
        if (globalNS[name] && typeof window[globalNS[name]] !== 'undefined') {
          return window[globalNS[name]];
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }
      var m = cache[name] = {exports:{}};
      modules[name][0].call(m.exports, function(x){
        var id = modules[name][1][x];
        return newRequire(id ? id : x);
      },m,m.exports,outer,modules,cache,entry);
    }

    return cache[name].exports;
  }
  for(var i=0;i<entry.length;i++) newRequire(entry[i]);

  // Override the current require with this new one
  return newRequire;
})
({1:[function(_dereq_,module,exports){

},{}],2:[function(_dereq_,module,exports){
if (window.jQuery) {
  (function ($) {
    $.fn.handsontable = function (action) {
      var i,
        ilen,
        args,
        output,
        userSettings,
        $this = this.first(), // Use only first element from list
        instance = $this.data('handsontable');

      // Init case
      if (typeof action !== 'string') {
        userSettings = action || {};

        if (instance) {
          instance.updateSettings(userSettings);

        } else {
          instance = new Handsontable.Core($this[0], userSettings);
          $this.data('handsontable', instance);
          instance.init();
        }

        return $this;

      } else { // Action case
        args = [];

        if (arguments.length > 1) {
          for (i = 1, ilen = arguments.length; i < ilen; i++) {
            args.push(arguments[i]);
          }
        }

        if (instance) {
          if (typeof instance[action] !== 'undefined') {
            output = instance[action].apply(instance, args);

            if (action === 'destroy') {
              $this.removeData();
            }

          } else {
            throw new Error('Handsontable do not provide action: ' + action);
          }
        }

        return output;
      }
    };
  })(window.jQuery);
}



},{}],3:[function(_dereq_,module,exports){
"use strict";
Object.defineProperties(exports, {
  WalkontableBorder: {get: function() {
      return WalkontableBorder;
    }},
  __esModule: {value: true}
});
var $___46__46__47__46__46__47__46__46__47_helpers_47_dom_47_element__,
    $___46__46__47__46__46__47__46__46__47_helpers_47_dom_47_event__,
    $___46__46__47__46__46__47__46__46__47_helpers_47_browser__,
    $___46__46__47__46__46__47__46__46__47_eventManager__,
    $__cell_47_coords__,
    $__overlay_47__95_base_46_js__;
var $__0 = ($___46__46__47__46__46__47__46__46__47_helpers_47_dom_47_element__ = _dereq_("helpers/dom/element"), $___46__46__47__46__46__47__46__46__47_helpers_47_dom_47_element__ && $___46__46__47__46__46__47__46__46__47_helpers_47_dom_47_element__.__esModule && $___46__46__47__46__46__47__46__46__47_helpers_47_dom_47_element__ || {default: $___46__46__47__46__46__47__46__46__47_helpers_47_dom_47_element__}),
    getComputedStyle = $__0.getComputedStyle,
    getTrimmingContainer = $__0.getTrimmingContainer,
    innerWidth = $__0.innerWidth,
    innerHeight = $__0.innerHeight,
    offset = $__0.offset,
    outerHeight = $__0.outerHeight,
    outerWidth = $__0.outerWidth;
var stopImmediatePropagation = ($___46__46__47__46__46__47__46__46__47_helpers_47_dom_47_event__ = _dereq_("helpers/dom/event"), $___46__46__47__46__46__47__46__46__47_helpers_47_dom_47_event__ && $___46__46__47__46__46__47__46__46__47_helpers_47_dom_47_event__.__esModule && $___46__46__47__46__46__47__46__46__47_helpers_47_dom_47_event__ || {default: $___46__46__47__46__46__47__46__46__47_helpers_47_dom_47_event__}).stopImmediatePropagation;
var isMobileBrowser = ($___46__46__47__46__46__47__46__46__47_helpers_47_browser__ = _dereq_("helpers/browser"), $___46__46__47__46__46__47__46__46__47_helpers_47_browser__ && $___46__46__47__46__46__47__46__46__47_helpers_47_browser__.__esModule && $___46__46__47__46__46__47__46__46__47_helpers_47_browser__ || {default: $___46__46__47__46__46__47__46__46__47_helpers_47_browser__}).isMobileBrowser;
var EventManager = ($___46__46__47__46__46__47__46__46__47_eventManager__ = _dereq_("eventManager"), $___46__46__47__46__46__47__46__46__47_eventManager__ && $___46__46__47__46__46__47__46__46__47_eventManager__.__esModule && $___46__46__47__46__46__47__46__46__47_eventManager__ || {default: $___46__46__47__46__46__47__46__46__47_eventManager__}).EventManager;
var WalkontableCellCoords = ($__cell_47_coords__ = _dereq_("cell/coords"), $__cell_47_coords__ && $__cell_47_coords__.__esModule && $__cell_47_coords__ || {default: $__cell_47_coords__}).WalkontableCellCoords;
var WalkontableOverlay = ($__overlay_47__95_base_46_js__ = _dereq_("overlay/_base.js"), $__overlay_47__95_base_46_js__ && $__overlay_47__95_base_46_js__.__esModule && $__overlay_47__95_base_46_js__ || {default: $__overlay_47__95_base_46_js__}).WalkontableOverlay;
var WalkontableBorder = function WalkontableBorder(wotInstance, settings) {
  if (!settings) {
    return;
  }
  this.eventManager = new EventManager(wotInstance);
  this.instance = wotInstance;
  this.wot = wotInstance;
  this.settings = settings;
  this.mouseDown = false;
  this.main = null;
  this.top = null;
  this.left = null;
  this.bottom = null;
  this.right = null;
  this.topStyle = null;
  this.leftStyle = null;
  this.bottomStyle = null;
  this.rightStyle = null;
  this.cornerDefaultStyle = {
    width: '5px',
    height: '5px',
    borderWidth: '2px',
    borderStyle: 'solid',
    borderColor: '#FFF'
  };
  this.corner = null;
  this.cornerStyle = null;
  this.createBorders(settings);
  this.registerListeners();
};
($traceurRuntime.createClass)(WalkontableBorder, {
  registerListeners: function() {
    var $__6 = this;
    this.eventManager.addEventListener(document.body, 'mousedown', (function() {
      return $__6.onMouseDown();
    }));
    this.eventManager.addEventListener(document.body, 'mouseup', (function() {
      return $__6.onMouseUp();
    }));
    var $__8 = this,
        $__9 = function(c, len) {
          $__8.eventManager.addEventListener($__8.main.childNodes[c], 'mouseenter', (function(event) {
            return $__6.onMouseEnter(event, $__6.main.childNodes[c]);
          }));
        };
    for (var c = 0,
        len = this.main.childNodes.length; c < len; c++) {
      $__9(c, len);
    }
  },
  onMouseDown: function() {
    this.mouseDown = true;
  },
  onMouseUp: function() {
    this.mouseDown = false;
  },
  onMouseEnter: function(event, parentElement) {
    if (!this.mouseDown || !this.wot.getSetting('hideBorderOnMouseDownOver')) {
      return;
    }
    event.preventDefault();
    stopImmediatePropagation(event);
    var _this = this;
    var bounds = parentElement.getBoundingClientRect();
    parentElement.style.display = 'none';
    function isOutside(event) {
      if (event.clientY < Math.floor(bounds.top)) {
        return true;
      }
      if (event.clientY > Math.ceil(bounds.top + bounds.height)) {
        return true;
      }
      if (event.clientX < Math.floor(bounds.left)) {
        return true;
      }
      if (event.clientX > Math.ceil(bounds.left + bounds.width)) {
        return true;
      }
    }
    function handler(event) {
      if (isOutside(event)) {
        _this.eventManager.removeEventListener(document.body, 'mousemove', handler);
        parentElement.style.display = 'block';
      }
    }
    this.eventManager.addEventListener(document.body, 'mousemove', handler);
  },
  createBorders: function(settings) {
    this.main = document.createElement('div');
    var borderDivs = ['top', 'left', 'bottom', 'right', 'corner'];
    var style = this.main.style;
    style.position = 'absolute';
    style.top = 0;
    style.left = 0;
    for (var i = 0; i < 5; i++) {
      var position = borderDivs[i];
      var div = document.createElement('div');
      div.className = 'wtBorder ' + (this.settings.className || '');
      if (this.settings[position] && this.settings[position].hide) {
        div.className += ' hidden';
      }
      style = div.style;
      style.backgroundColor = (this.settings[position] && this.settings[position].color) ? this.settings[position].color : settings.border.color;
      style.height = (this.settings[position] && this.settings[position].width) ? this.settings[position].width + 'px' : settings.border.width + 'px';
      style.width = (this.settings[position] && this.settings[position].width) ? this.settings[position].width + 'px' : settings.border.width + 'px';
      this.main.appendChild(div);
    }
    this.top = this.main.childNodes[0];
    this.left = this.main.childNodes[1];
    this.bottom = this.main.childNodes[2];
    this.right = this.main.childNodes[3];
    this.topStyle = this.top.style;
    this.leftStyle = this.left.style;
    this.bottomStyle = this.bottom.style;
    this.rightStyle = this.right.style;
    this.corner = this.main.childNodes[4];
    this.corner.className += ' corner';
    this.cornerStyle = this.corner.style;
    this.cornerStyle.width = this.cornerDefaultStyle.width;
    this.cornerStyle.height = this.cornerDefaultStyle.height;
    this.cornerStyle.border = [this.cornerDefaultStyle.borderWidth, this.cornerDefaultStyle.borderStyle, this.cornerDefaultStyle.borderColor].join(' ');
    if (isMobileBrowser()) {
      this.createMultipleSelectorHandles();
    }
    this.disappear();
    if (!this.wot.wtTable.bordersHolder) {
      this.wot.wtTable.bordersHolder = document.createElement('div');
      this.wot.wtTable.bordersHolder.className = 'htBorders';
      this.wot.wtTable.spreader.appendChild(this.wot.wtTable.bordersHolder);
    }
    this.wot.wtTable.bordersHolder.insertBefore(this.main, this.wot.wtTable.bordersHolder.firstChild);
  },
  createMultipleSelectorHandles: function() {
    this.selectionHandles = {
      topLeft: document.createElement('DIV'),
      topLeftHitArea: document.createElement('DIV'),
      bottomRight: document.createElement('DIV'),
      bottomRightHitArea: document.createElement('DIV')
    };
    var width = 10;
    var hitAreaWidth = 40;
    this.selectionHandles.topLeft.className = 'topLeftSelectionHandle';
    this.selectionHandles.topLeftHitArea.className = 'topLeftSelectionHandle-HitArea';
    this.selectionHandles.bottomRight.className = 'bottomRightSelectionHandle';
    this.selectionHandles.bottomRightHitArea.className = 'bottomRightSelectionHandle-HitArea';
    this.selectionHandles.styles = {
      topLeft: this.selectionHandles.topLeft.style,
      topLeftHitArea: this.selectionHandles.topLeftHitArea.style,
      bottomRight: this.selectionHandles.bottomRight.style,
      bottomRightHitArea: this.selectionHandles.bottomRightHitArea.style
    };
    var hitAreaStyle = {
      position: 'absolute',
      height: hitAreaWidth + 'px',
      width: hitAreaWidth + 'px',
      'border-radius': parseInt(hitAreaWidth / 1.5, 10) + 'px'
    };
    for (var prop in hitAreaStyle) {
      if (hitAreaStyle.hasOwnProperty(prop)) {
        this.selectionHandles.styles.bottomRightHitArea[prop] = hitAreaStyle[prop];
        this.selectionHandles.styles.topLeftHitArea[prop] = hitAreaStyle[prop];
      }
    }
    var handleStyle = {
      position: 'absolute',
      height: width + 'px',
      width: width + 'px',
      'border-radius': parseInt(width / 1.5, 10) + 'px',
      background: '#F5F5FF',
      border: '1px solid #4285c8'
    };
    for (var prop$__10 in handleStyle) {
      if (handleStyle.hasOwnProperty(prop$__10)) {
        this.selectionHandles.styles.bottomRight[prop$__10] = handleStyle[prop$__10];
        this.selectionHandles.styles.topLeft[prop$__10] = handleStyle[prop$__10];
      }
    }
    this.main.appendChild(this.selectionHandles.topLeft);
    this.main.appendChild(this.selectionHandles.bottomRight);
    this.main.appendChild(this.selectionHandles.topLeftHitArea);
    this.main.appendChild(this.selectionHandles.bottomRightHitArea);
  },
  isPartRange: function(row, col) {
    if (this.wot.selections.area.cellRange) {
      if (row != this.wot.selections.area.cellRange.to.row || col != this.wot.selections.area.cellRange.to.col) {
        return true;
      }
    }
    return false;
  },
  updateMultipleSelectionHandlesPosition: function(row, col, top, left, width, height) {
    var handleWidth = parseInt(this.selectionHandles.styles.topLeft.width, 10);
    var hitAreaWidth = parseInt(this.selectionHandles.styles.topLeftHitArea.width, 10);
    this.selectionHandles.styles.topLeft.top = parseInt(top - handleWidth, 10) + 'px';
    this.selectionHandles.styles.topLeft.left = parseInt(left - handleWidth, 10) + 'px';
    this.selectionHandles.styles.topLeftHitArea.top = parseInt(top - (hitAreaWidth / 4) * 3, 10) + 'px';
    this.selectionHandles.styles.topLeftHitArea.left = parseInt(left - (hitAreaWidth / 4) * 3, 10) + 'px';
    this.selectionHandles.styles.bottomRight.top = parseInt(top + height, 10) + 'px';
    this.selectionHandles.styles.bottomRight.left = parseInt(left + width, 10) + 'px';
    this.selectionHandles.styles.bottomRightHitArea.top = parseInt(top + height - hitAreaWidth / 4, 10) + 'px';
    this.selectionHandles.styles.bottomRightHitArea.left = parseInt(left + width - hitAreaWidth / 4, 10) + 'px';
    if (this.settings.border.multipleSelectionHandlesVisible && this.settings.border.multipleSelectionHandlesVisible()) {
      this.selectionHandles.styles.topLeft.display = 'block';
      this.selectionHandles.styles.topLeftHitArea.display = 'block';
      if (this.isPartRange(row, col)) {
        this.selectionHandles.styles.bottomRight.display = 'none';
        this.selectionHandles.styles.bottomRightHitArea.display = 'none';
      } else {
        this.selectionHandles.styles.bottomRight.display = 'block';
        this.selectionHandles.styles.bottomRightHitArea.display = 'block';
      }
    } else {
      this.selectionHandles.styles.topLeft.display = 'none';
      this.selectionHandles.styles.bottomRight.display = 'none';
      this.selectionHandles.styles.topLeftHitArea.display = 'none';
      this.selectionHandles.styles.bottomRightHitArea.display = 'none';
    }
    if (row == this.wot.wtSettings.getSetting('fixedRowsTop') || col == this.wot.wtSettings.getSetting('fixedColumnsLeft')) {
      this.selectionHandles.styles.topLeft.zIndex = '9999';
      this.selectionHandles.styles.topLeftHitArea.zIndex = '9999';
    } else {
      this.selectionHandles.styles.topLeft.zIndex = '';
      this.selectionHandles.styles.topLeftHitArea.zIndex = '';
    }
  },
  appear: function(corners) {
    if (this.disabled) {
      return;
    }
    var isMultiple,
        fromTD,
        toTD,
        fromOffset,
        toOffset,
        containerOffset,
        top,
        minTop,
        left,
        minLeft,
        height,
        width,
        fromRow,
        fromColumn,
        toRow,
        toColumn,
        trimmingContainer,
        cornerOverlappingContainer,
        ilen;
    ilen = this.wot.wtTable.getRenderedRowsCount();
    for (var i = 0; i < ilen; i++) {
      var s = this.wot.wtTable.rowFilter.renderedToSource(i);
      if (s >= corners[0] && s <= corners[2]) {
        fromRow = s;
        break;
      }
    }
    for (var i$__11 = ilen - 1; i$__11 >= 0; i$__11--) {
      var s$__12 = this.wot.wtTable.rowFilter.renderedToSource(i$__11);
      if (s$__12 >= corners[0] && s$__12 <= corners[2]) {
        toRow = s$__12;
        break;
      }
    }
    ilen = this.wot.wtTable.getRenderedColumnsCount();
    for (var i$__13 = 0; i$__13 < ilen; i$__13++) {
      var s$__14 = this.wot.wtTable.columnFilter.renderedToSource(i$__13);
      if (s$__14 >= corners[1] && s$__14 <= corners[3]) {
        fromColumn = s$__14;
        break;
      }
    }
    for (var i$__15 = ilen - 1; i$__15 >= 0; i$__15--) {
      var s$__16 = this.wot.wtTable.columnFilter.renderedToSource(i$__15);
      if (s$__16 >= corners[1] && s$__16 <= corners[3]) {
        toColumn = s$__16;
        break;
      }
    }
    if (fromRow === void 0 || fromColumn === void 0) {
      this.disappear();
      return;
    }
    isMultiple = (fromRow !== toRow || fromColumn !== toColumn);
    fromTD = this.wot.wtTable.getCell(new WalkontableCellCoords(fromRow, fromColumn));
    toTD = isMultiple ? this.wot.wtTable.getCell(new WalkontableCellCoords(toRow, toColumn)) : fromTD;
    fromOffset = offset(fromTD);
    toOffset = isMultiple ? offset(toTD) : fromOffset;
    containerOffset = offset(this.wot.wtTable.TABLE);
    minTop = fromOffset.top;
    height = toOffset.top + outerHeight(toTD) - minTop;
    minLeft = fromOffset.left;
    width = toOffset.left + outerWidth(toTD) - minLeft;
    top = minTop - containerOffset.top - 1;
    left = minLeft - containerOffset.left - 1;
    var style = getComputedStyle(fromTD);
    if (parseInt(style.borderTopWidth, 10) > 0) {
      top += 1;
      height = height > 0 ? height - 1 : 0;
    }
    if (parseInt(style.borderLeftWidth, 10) > 0) {
      left += 1;
      width = width > 0 ? width - 1 : 0;
    }
    this.topStyle.top = top + 'px';
    this.topStyle.left = left + 'px';
    this.topStyle.width = width + 'px';
    this.topStyle.display = 'block';
    this.leftStyle.top = top + 'px';
    this.leftStyle.left = left + 'px';
    this.leftStyle.height = height + 'px';
    this.leftStyle.display = 'block';
    var delta = Math.floor(this.settings.border.width / 2);
    this.bottomStyle.top = top + height - delta + 'px';
    this.bottomStyle.left = left + 'px';
    this.bottomStyle.width = width + 'px';
    this.bottomStyle.display = 'block';
    this.rightStyle.top = top + 'px';
    this.rightStyle.left = left + width - delta + 'px';
    this.rightStyle.height = height + 1 + 'px';
    this.rightStyle.display = 'block';
    if (isMobileBrowser() || (!this.hasSetting(this.settings.border.cornerVisible) || this.isPartRange(toRow, toColumn))) {
      this.cornerStyle.display = 'none';
    } else {
      this.cornerStyle.top = top + height - 4 + 'px';
      this.cornerStyle.left = left + width - 4 + 'px';
      this.cornerStyle.borderRightWidth = this.cornerDefaultStyle.borderWidth;
      this.cornerStyle.width = this.cornerDefaultStyle.width;
      this.cornerStyle.display = 'none';
      trimmingContainer = getTrimmingContainer(this.wot.wtTable.TABLE);
      if (toColumn === this.wot.getSetting('totalColumns') - 1) {
        cornerOverlappingContainer = toTD.offsetLeft + outerWidth(toTD) + (parseInt(this.cornerDefaultStyle.width) / 2) >= innerWidth(trimmingContainer);
        if (cornerOverlappingContainer) {
          this.cornerStyle.left = Math.floor(left + width - 3 - parseInt(this.cornerDefaultStyle.width) / 2) + 'px';
          this.cornerStyle.borderRightWidth = 0;
        }
      }
      if (toRow === this.wot.getSetting('totalRows') - 1) {
        cornerOverlappingContainer = toTD.offsetTop + outerHeight(toTD) + (parseInt(this.cornerDefaultStyle.height) / 2) >= innerHeight(trimmingContainer);
        if (cornerOverlappingContainer) {
          this.cornerStyle.top = Math.floor(top + height - 3 - parseInt(this.cornerDefaultStyle.height) / 2) + 'px';
          this.cornerStyle.borderBottomWidth = 0;
        }
      }
      this.cornerStyle.display = 'block';
    }
    if (isMobileBrowser()) {
      this.updateMultipleSelectionHandlesPosition(fromRow, fromColumn, top, left, width, height);
    }
  },
  disappear: function() {
    this.topStyle.display = 'none';
    this.leftStyle.display = 'none';
    this.bottomStyle.display = 'none';
    this.rightStyle.display = 'none';
    this.cornerStyle.display = 'none';
    if (isMobileBrowser()) {
      this.selectionHandles.styles.topLeft.display = 'none';
      this.selectionHandles.styles.bottomRight.display = 'none';
    }
  },
  hasSetting: function(setting) {
    if (typeof setting === 'function') {
      return setting();
    }
    return !!setting;
  }
}, {});
;
window.WalkontableBorder = WalkontableBorder;

//# 
},{"cell/coords":6,"eventManager":42,"helpers/browser":44,"helpers/dom/element":47,"helpers/dom/event":48,"overlay/_base.js":12}],4:[function(_dereq_,module,exports){
"use strict";
Object.defineProperties(exports, {
  WalkontableViewportColumnsCalculator: {get: function() {
      return WalkontableViewportColumnsCalculator;
    }},
  __esModule: {value: true}
});
var privatePool = new WeakMap();
var WalkontableViewportColumnsCalculator = function WalkontableViewportColumnsCalculator(viewportWidth, scrollOffset, totalColumns, columnWidthFn, overrideFn, onlyFullyVisible, stretchH) {
  var stretchingColumnWidthFn = arguments[7] !== (void 0) ? arguments[7] : (function(width) {
    return width;
  });
  privatePool.set(this, {
    viewportWidth: viewportWidth,
    scrollOffset: scrollOffset,
    totalColumns: totalColumns,
    columnWidthFn: columnWidthFn,
    overrideFn: overrideFn,
    onlyFullyVisible: onlyFullyVisible,
    stretchingColumnWidthFn: stretchingColumnWidthFn
  });
  this.count = 0;
  this.startColumn = null;
  this.endColumn = null;
  this.startPosition = null;
  this.stretchAllRatio = 0;
  this.stretchLastWidth = 0;
  this.stretch = stretchH;
  this.totalTargetWidth = 0;
  this.needVerifyLastColumnWidth = true;
  this.stretchAllColumnsWidth = [];
  this.calculate();
};
var $WalkontableViewportColumnsCalculator = WalkontableViewportColumnsCalculator;
($traceurRuntime.createClass)(WalkontableViewportColumnsCalculator, {
  calculate: function() {
    var sum = 0;
    var needReverse = true;
    var startPositions = [];
    var columnWidth;
    var priv = privatePool.get(this);
    var onlyFullyVisible = priv.onlyFullyVisible;
    var overrideFn = priv.overrideFn;
    var scrollOffset = priv.scrollOffset;
    var totalColumns = priv.totalColumns;
    var viewportWidth = priv.viewportWidth;
    for (var i = 0; i < totalColumns; i++) {
      columnWidth = this._getColumnWidth(i);
      if (sum <= scrollOffset && !onlyFullyVisible) {
        this.startColumn = i;
      }
      var compensatedViewportWidth = scrollOffset > 0 ? viewportWidth + 1 : viewportWidth;
      if (sum >= scrollOffset && sum + columnWidth <= scrollOffset + compensatedViewportWidth) {
        if (this.startColumn == null) {
          this.startColumn = i;
        }
        this.endColumn = i;
      }
      startPositions.push(sum);
      sum += columnWidth;
      if (!onlyFullyVisible) {
        this.endColumn = i;
      }
      if (sum >= scrollOffset + viewportWidth) {
        needReverse = false;
        break;
      }
    }
    if (this.endColumn === totalColumns - 1 && needReverse) {
      this.startColumn = this.endColumn;
      while (this.startColumn > 0) {
        var viewportSum = startPositions[this.endColumn] + columnWidth - startPositions[this.startColumn - 1];
        if (viewportSum <= viewportWidth || !onlyFullyVisible) {
          this.startColumn--;
        }
        if (viewportSum > viewportWidth) {
          break;
        }
      }
    }
    if (this.startColumn !== null && overrideFn) {
      overrideFn(this);
    }
    this.startPosition = startPositions[this.startColumn];
    if (this.startPosition == void 0) {
      this.startPosition = null;
    }
    if (this.startColumn !== null) {
      this.count = this.endColumn - this.startColumn + 1;
    }
  },
  refreshStretching: function(totalWidth) {
    if (this.stretch === 'none') {
      return;
    }
    this.totalTargetWidth = totalWidth;
    var priv = privatePool.get(this);
    var totalColumns = priv.totalColumns;
    var sumAll = 0;
    for (var i = 0; i < totalColumns; i++) {
      var columnWidth = this._getColumnWidth(i);
      var permanentColumnWidth = priv.stretchingColumnWidthFn(void 0, i);
      if (typeof permanentColumnWidth === 'number') {
        totalWidth -= permanentColumnWidth;
      } else {
        sumAll += columnWidth;
      }
    }
    var remainingSize = totalWidth - sumAll;
    if (this.stretch === 'all' && remainingSize > 0) {
      this.stretchAllRatio = totalWidth / sumAll;
      this.stretchAllColumnsWidth = [];
      this.needVerifyLastColumnWidth = true;
    } else if (this.stretch === 'last' && totalWidth !== Infinity) {
      var columnWidth$__1 = this._getColumnWidth(totalColumns - 1);
      var lastColumnWidth = remainingSize + columnWidth$__1;
      this.stretchLastWidth = lastColumnWidth >= 0 ? lastColumnWidth : columnWidth$__1;
    }
  },
  getStretchedColumnWidth: function(column, baseWidth) {
    var result = null;
    if (this.stretch === 'all' && this.stretchAllRatio !== 0) {
      result = this._getStretchedAllColumnWidth(column, baseWidth);
    } else if (this.stretch === 'last' && this.stretchLastWidth !== 0) {
      result = this._getStretchedLastColumnWidth(column);
    }
    return result;
  },
  _getStretchedAllColumnWidth: function(column, baseWidth) {
    var sumRatioWidth = 0;
    var priv = privatePool.get(this);
    var totalColumns = priv.totalColumns;
    if (!this.stretchAllColumnsWidth[column]) {
      var stretchedWidth = Math.round(baseWidth * this.stretchAllRatio);
      var newStretchedWidth = priv.stretchingColumnWidthFn(stretchedWidth, column);
      if (newStretchedWidth === void 0) {
        this.stretchAllColumnsWidth[column] = stretchedWidth;
      } else {
        this.stretchAllColumnsWidth[column] = isNaN(newStretchedWidth) ? this._getColumnWidth(column) : newStretchedWidth;
      }
    }
    if (this.stretchAllColumnsWidth.length === totalColumns && this.needVerifyLastColumnWidth) {
      this.needVerifyLastColumnWidth = false;
      for (var i = 0; i < this.stretchAllColumnsWidth.length; i++) {
        sumRatioWidth += this.stretchAllColumnsWidth[i];
      }
      if (sumRatioWidth !== this.totalTargetWidth) {
        this.stretchAllColumnsWidth[this.stretchAllColumnsWidth.length - 1] += this.totalTargetWidth - sumRatioWidth;
      }
    }
    return this.stretchAllColumnsWidth[column];
  },
  _getStretchedLastColumnWidth: function(column) {
    var priv = privatePool.get(this);
    var totalColumns = priv.totalColumns;
    if (column === totalColumns - 1) {
      return this.stretchLastWidth;
    }
    return null;
  },
  _getColumnWidth: function(column) {
    var width = privatePool.get(this).columnWidthFn(column);
    if (width === void 0) {
      width = $WalkontableViewportColumnsCalculator.DEFAULT_WIDTH;
    }
    return width;
  }
}, {get DEFAULT_WIDTH() {
    return 50;
  }});
;
window.WalkontableViewportColumnsCalculator = WalkontableViewportColumnsCalculator;

//# 
},{}],5:[function(_dereq_,module,exports){
"use strict";
Object.defineProperties(exports, {
  WalkontableViewportRowsCalculator: {get: function() {
      return WalkontableViewportRowsCalculator;
    }},
  __esModule: {value: true}
});
var privatePool = new WeakMap();
var WalkontableViewportRowsCalculator = function WalkontableViewportRowsCalculator(viewportHeight, scrollOffset, totalRows, rowHeightFn, overrideFn, onlyFullyVisible, horizontalScrollbarHeight) {
  privatePool.set(this, {
    viewportHeight: viewportHeight,
    scrollOffset: scrollOffset,
    totalRows: totalRows,
    rowHeightFn: rowHeightFn,
    overrideFn: overrideFn,
    onlyFullyVisible: onlyFullyVisible,
    horizontalScrollbarHeight: horizontalScrollbarHeight
  });
  this.count = 0;
  this.startRow = null;
  this.endRow = null;
  this.startPosition = null;
  this.calculate();
};
var $WalkontableViewportRowsCalculator = WalkontableViewportRowsCalculator;
($traceurRuntime.createClass)(WalkontableViewportRowsCalculator, {calculate: function() {
    var sum = 0;
    var needReverse = true;
    var startPositions = [];
    var priv = privatePool.get(this);
    var onlyFullyVisible = priv.onlyFullyVisible;
    var overrideFn = priv.overrideFn;
    var rowHeightFn = priv.rowHeightFn;
    var scrollOffset = priv.scrollOffset;
    var totalRows = priv.totalRows;
    var viewportHeight = priv.viewportHeight;
    var horizontalScrollbarHeight = priv.horizontalScrollbarHeight || 0;
    for (var i = 0; i < totalRows; i++) {
      var rowHeight = rowHeightFn(i);
      if (rowHeight === undefined) {
        rowHeight = $WalkontableViewportRowsCalculator.DEFAULT_HEIGHT;
      }
      if (sum <= scrollOffset && !onlyFullyVisible) {
        this.startRow = i;
      }
      if (sum >= scrollOffset && sum + rowHeight <= scrollOffset + viewportHeight - horizontalScrollbarHeight) {
        if (this.startRow === null) {
          this.startRow = i;
        }
        this.endRow = i;
      }
      startPositions.push(sum);
      sum += rowHeight;
      if (!onlyFullyVisible) {
        this.endRow = i;
      }
      if (sum >= scrollOffset + viewportHeight - horizontalScrollbarHeight) {
        needReverse = false;
        break;
      }
    }
    if (this.endRow === totalRows - 1 && needReverse) {
      this.startRow = this.endRow;
      while (this.startRow > 0) {
        var viewportSum = startPositions[this.endRow] + rowHeight - startPositions[this.startRow - 1];
        if (viewportSum <= viewportHeight - horizontalScrollbarHeight || !onlyFullyVisible) {
          this.startRow--;
        }
        if (viewportSum >= viewportHeight - horizontalScrollbarHeight) {
          break;
        }
      }
    }
    if (this.startRow !== null && overrideFn) {
      overrideFn(this);
    }
    this.startPosition = startPositions[this.startRow];
    if (this.startPosition == void 0) {
      this.startPosition = null;
    }
    if (this.startRow !== null) {
      this.count = this.endRow - this.startRow + 1;
    }
  }}, {get DEFAULT_HEIGHT() {
    return 23;
  }});
;
window.WalkontableViewportRowsCalculator = WalkontableViewportRowsCalculator;

//# 
},{}],6:[function(_dereq_,module,exports){
"use strict";
Object.defineProperties(exports, {
  WalkontableCellCoords: {get: function() {
      return WalkontableCellCoords;
    }},
  __esModule: {value: true}
});
var WalkontableCellCoords = function WalkontableCellCoords(row, col) {
  if (typeof row !== 'undefined' && typeof col !== 'undefined') {
    this.row = row;
    this.col = col;
  } else {
    this.row = null;
    this.col = null;
  }
};
($traceurRuntime.createClass)(WalkontableCellCoords, {
  isValid: function(wotInstance) {
    if (this.row < 0 || this.col < 0) {
      return false;
    }
    if (this.row >= wotInstance.getSetting('totalRows') || this.col >= wotInstance.getSetting('totalColumns')) {
      return false;
    }
    return true;
  },
  isEqual: function(cellCoords) {
    if (cellCoords === this) {
      return true;
    }
    return this.row === cellCoords.row && this.col === cellCoords.col;
  },
  isSouthEastOf: function(testedCoords) {
    return this.row >= testedCoords.row && this.col >= testedCoords.col;
  },
  isNorthWestOf: function(testedCoords) {
    return this.row <= testedCoords.row && this.col <= testedCoords.col;
  },
  isSouthWestOf: function(testedCoords) {
    return this.row >= testedCoords.row && this.col <= testedCoords.col;
  },
  isNorthEastOf: function(testedCoords) {
    return this.row <= testedCoords.row && this.col >= testedCoords.col;
  }
}, {});
;
window.WalkontableCellCoords = WalkontableCellCoords;

//# 
},{}],7:[function(_dereq_,module,exports){
"use strict";
Object.defineProperties(exports, {
  WalkontableCellRange: {get: function() {
      return WalkontableCellRange;
    }},
  __esModule: {value: true}
});
var $___46__46__47_cell_47_coords__;
var WalkontableCellCoords = ($___46__46__47_cell_47_coords__ = _dereq_("cell/coords"), $___46__46__47_cell_47_coords__ && $___46__46__47_cell_47_coords__.__esModule && $___46__46__47_cell_47_coords__ || {default: $___46__46__47_cell_47_coords__}).WalkontableCellCoords;
var WalkontableCellRange = function WalkontableCellRange(highlight, from, to) {
  this.highlight = highlight;
  this.from = from;
  this.to = to;
};
var $WalkontableCellRange = WalkontableCellRange;
($traceurRuntime.createClass)(WalkontableCellRange, {
  isValid: function(wotInstance) {
    return this.from.isValid(wotInstance) && this.to.isValid(wotInstance);
  },
  isSingle: function() {
    return this.from.row === this.to.row && this.from.col === this.to.col;
  },
  getHeight: function() {
    return Math.max(this.from.row, this.to.row) - Math.min(this.from.row, this.to.row) + 1;
  },
  getWidth: function() {
    return Math.max(this.from.col, this.to.col) - Math.min(this.from.col, this.to.col) + 1;
  },
  includes: function(cellCoords) {
    var $__2 = cellCoords,
        row = $__2.row,
        col = $__2.col;
    var topLeft = this.getTopLeftCorner();
    var bottomRight = this.getBottomRightCorner();
    return topLeft.row <= row && bottomRight.row >= row && topLeft.col <= col && bottomRight.col >= col;
  },
  includesRange: function(testedRange) {
    return this.includes(testedRange.getTopLeftCorner()) && this.includes(testedRange.getBottomRightCorner());
  },
  isEqual: function(testedRange) {
    return (Math.min(this.from.row, this.to.row) == Math.min(testedRange.from.row, testedRange.to.row)) && (Math.max(this.from.row, this.to.row) == Math.max(testedRange.from.row, testedRange.to.row)) && (Math.min(this.from.col, this.to.col) == Math.min(testedRange.from.col, testedRange.to.col)) && (Math.max(this.from.col, this.to.col) == Math.max(testedRange.from.col, testedRange.to.col));
  },
  overlaps: function(testedRange) {
    return testedRange.isSouthEastOf(this.getTopLeftCorner()) && testedRange.isNorthWestOf(this.getBottomRightCorner());
  },
  isSouthEastOf: function(testedCoords) {
    return this.getTopLeftCorner().isSouthEastOf(testedCoords) || this.getBottomRightCorner().isSouthEastOf(testedCoords);
  },
  isNorthWestOf: function(testedCoords) {
    return this.getTopLeftCorner().isNorthWestOf(testedCoords) || this.getBottomRightCorner().isNorthWestOf(testedCoords);
  },
  expand: function(cellCoords) {
    var topLeft = this.getTopLeftCorner();
    var bottomRight = this.getBottomRightCorner();
    if (cellCoords.row < topLeft.row || cellCoords.col < topLeft.col || cellCoords.row > bottomRight.row || cellCoords.col > bottomRight.col) {
      this.from = new WalkontableCellCoords(Math.min(topLeft.row, cellCoords.row), Math.min(topLeft.col, cellCoords.col));
      this.to = new WalkontableCellCoords(Math.max(bottomRight.row, cellCoords.row), Math.max(bottomRight.col, cellCoords.col));
      return true;
    }
    return false;
  },
  expandByRange: function(expandingRange) {
    if (this.includesRange(expandingRange) || !this.overlaps(expandingRange)) {
      return false;
    }
    var topLeft = this.getTopLeftCorner();
    var bottomRight = this.getBottomRightCorner();
    var topRight = this.getTopRightCorner();
    var bottomLeft = this.getBottomLeftCorner();
    var expandingTopLeft = expandingRange.getTopLeftCorner();
    var expandingBottomRight = expandingRange.getBottomRightCorner();
    var resultTopRow = Math.min(topLeft.row, expandingTopLeft.row);
    var resultTopCol = Math.min(topLeft.col, expandingTopLeft.col);
    var resultBottomRow = Math.max(bottomRight.row, expandingBottomRight.row);
    var resultBottomCol = Math.max(bottomRight.col, expandingBottomRight.col);
    var finalFrom = new WalkontableCellCoords(resultTopRow, resultTopCol),
        finalTo = new WalkontableCellCoords(resultBottomRow, resultBottomCol);
    var isCorner = new $WalkontableCellRange(finalFrom, finalFrom, finalTo).isCorner(this.from, expandingRange),
        onlyMerge = expandingRange.isEqual(new $WalkontableCellRange(finalFrom, finalFrom, finalTo));
    if (isCorner && !onlyMerge) {
      if (this.from.col > finalFrom.col) {
        finalFrom.col = resultBottomCol;
        finalTo.col = resultTopCol;
      }
      if (this.from.row > finalFrom.row) {
        finalFrom.row = resultBottomRow;
        finalTo.row = resultTopRow;
      }
    }
    this.from = finalFrom;
    this.to = finalTo;
    return true;
  },
  getDirection: function() {
    if (this.from.isNorthWestOf(this.to)) {
      return 'NW-SE';
    } else if (this.from.isNorthEastOf(this.to)) {
      return 'NE-SW';
    } else if (this.from.isSouthEastOf(this.to)) {
      return 'SE-NW';
    } else if (this.from.isSouthWestOf(this.to)) {
      return 'SW-NE';
    }
  },
  setDirection: function(direction) {
    var $__2,
        $__3,
        $__4,
        $__5;
    switch (direction) {
      case 'NW-SE':
        ($__2 = [this.getTopLeftCorner(), this.getBottomRightCorner()], this.from = $__2[0], this.to = $__2[1], $__2);
        break;
      case 'NE-SW':
        ($__3 = [this.getTopRightCorner(), this.getBottomLeftCorner()], this.from = $__3[0], this.to = $__3[1], $__3);
        break;
      case 'SE-NW':
        ($__4 = [this.getBottomRightCorner(), this.getTopLeftCorner()], this.from = $__4[0], this.to = $__4[1], $__4);
        break;
      case 'SW-NE':
        ($__5 = [this.getBottomLeftCorner(), this.getTopRightCorner()], this.from = $__5[0], this.to = $__5[1], $__5);
        break;
    }
  },
  getTopLeftCorner: function() {
    return new WalkontableCellCoords(Math.min(this.from.row, this.to.row), Math.min(this.from.col, this.to.col));
  },
  getBottomRightCorner: function() {
    return new WalkontableCellCoords(Math.max(this.from.row, this.to.row), Math.max(this.from.col, this.to.col));
  },
  getTopRightCorner: function() {
    return new WalkontableCellCoords(Math.min(this.from.row, this.to.row), Math.max(this.from.col, this.to.col));
  },
  getBottomLeftCorner: function() {
    return new WalkontableCellCoords(Math.max(this.from.row, this.to.row), Math.min(this.from.col, this.to.col));
  },
  isCorner: function(coords, expandedRange) {
    if (expandedRange) {
      if (expandedRange.includes(coords)) {
        if (this.getTopLeftCorner().isEqual(new WalkontableCellCoords(expandedRange.from.row, expandedRange.from.col)) || this.getTopRightCorner().isEqual(new WalkontableCellCoords(expandedRange.from.row, expandedRange.to.col)) || this.getBottomLeftCorner().isEqual(new WalkontableCellCoords(expandedRange.to.row, expandedRange.from.col)) || this.getBottomRightCorner().isEqual(new WalkontableCellCoords(expandedRange.to.row, expandedRange.to.col))) {
          return true;
        }
      }
    }
    return coords.isEqual(this.getTopLeftCorner()) || coords.isEqual(this.getTopRightCorner()) || coords.isEqual(this.getBottomLeftCorner()) || coords.isEqual(this.getBottomRightCorner());
  },
  getOppositeCorner: function(coords, expandedRange) {
    if (!(coords instanceof WalkontableCellCoords)) {
      return false;
    }
    if (expandedRange) {
      if (expandedRange.includes(coords)) {
        if (this.getTopLeftCorner().isEqual(new WalkontableCellCoords(expandedRange.from.row, expandedRange.from.col))) {
          return this.getBottomRightCorner();
        }
        if (this.getTopRightCorner().isEqual(new WalkontableCellCoords(expandedRange.from.row, expandedRange.to.col))) {
          return this.getBottomLeftCorner();
        }
        if (this.getBottomLeftCorner().isEqual(new WalkontableCellCoords(expandedRange.to.row, expandedRange.from.col))) {
          return this.getTopRightCorner();
        }
        if (this.getBottomRightCorner().isEqual(new WalkontableCellCoords(expandedRange.to.row, expandedRange.to.col))) {
          return this.getTopLeftCorner();
        }
      }
    }
    if (coords.isEqual(this.getBottomRightCorner())) {
      return this.getTopLeftCorner();
    } else if (coords.isEqual(this.getTopLeftCorner())) {
      return this.getBottomRightCorner();
    } else if (coords.isEqual(this.getTopRightCorner())) {
      return this.getBottomLeftCorner();
    } else if (coords.isEqual(this.getBottomLeftCorner())) {
      return this.getTopRightCorner();
    }
  },
  getBordersSharedWith: function(range) {
    if (!this.includesRange(range)) {
      return [];
    }
    var thisBorders = {
      top: Math.min(this.from.row, this.to.row),
      bottom: Math.max(this.from.row, this.to.row),
      left: Math.min(this.from.col, this.to.col),
      right: Math.max(this.from.col, this.to.col)
    };
    var rangeBorders = {
      top: Math.min(range.from.row, range.to.row),
      bottom: Math.max(range.from.row, range.to.row),
      left: Math.min(range.from.col, range.to.col),
      right: Math.max(range.from.col, range.to.col)
    };
    var result = [];
    if (thisBorders.top == rangeBorders.top) {
      result.push('top');
    }
    if (thisBorders.right == rangeBorders.right) {
      result.push('right');
    }
    if (thisBorders.bottom == rangeBorders.bottom) {
      result.push('bottom');
    }
    if (thisBorders.left == rangeBorders.left) {
      result.push('left');
    }
    return result;
  },
  getInner: function() {
    var topLeft = this.getTopLeftCorner();
    var bottomRight = this.getBottomRightCorner();
    var out = [];
    for (var r = topLeft.row; r <= bottomRight.row; r++) {
      for (var c = topLeft.col; c <= bottomRight.col; c++) {
        if (!(this.from.row === r && this.from.col === c) && !(this.to.row === r && this.to.col === c)) {
          out.push(new WalkontableCellCoords(r, c));
        }
      }
    }
    return out;
  },
  getAll: function() {
    var topLeft = this.getTopLeftCorner();
    var bottomRight = this.getBottomRightCorner();
    var out = [];
    for (var r = topLeft.row; r <= bottomRight.row; r++) {
      for (var c = topLeft.col; c <= bottomRight.col; c++) {
        if (topLeft.row === r && topLeft.col === c) {
          out.push(topLeft);
        } else if (bottomRight.row === r && bottomRight.col === c) {
          out.push(bottomRight);
        } else {
          out.push(new WalkontableCellCoords(r, c));
        }
      }
    }
    return out;
  },
  forAll: function(callback) {
    var topLeft = this.getTopLeftCorner();
    var bottomRight = this.getBottomRightCorner();
    for (var r = topLeft.row; r <= bottomRight.row; r++) {
      for (var c = topLeft.col; c <= bottomRight.col; c++) {
        var breakIteration = callback(r, c);
        if (breakIteration === false) {
          return;
        }
      }
    }
  }
}, {});
;
window.WalkontableCellRange = WalkontableCellRange;

//# 
},{"cell/coords":6}],8:[function(_dereq_,module,exports){
"use strict";
Object.defineProperties(exports, {
  Walkontable: {get: function() {
      return Walkontable;
    }},
  __esModule: {value: true}
});
var $___46__46__47__46__46__47__46__46__47_helpers_47_dom_47_element__,
    $___46__46__47__46__46__47__46__46__47_helpers_47_object__,
    $___46__46__47__46__46__47__46__46__47_helpers_47_string__,
    $__event__,
    $__overlays__,
    $__scroll__,
    $__settings__,
    $__table__,
    $__viewport__,
    $__overlay_47__95_base_46_js__,
    $__overlay_47_top_46_js__,
    $__overlay_47_left_46_js__,
    $__overlay_47_debug_46_js__,
    $__overlay_47_topLeftCorner_46_js__;
var $__0 = ($___46__46__47__46__46__47__46__46__47_helpers_47_dom_47_element__ = _dereq_("helpers/dom/element"), $___46__46__47__46__46__47__46__46__47_helpers_47_dom_47_element__ && $___46__46__47__46__46__47__46__46__47_helpers_47_dom_47_element__.__esModule && $___46__46__47__46__46__47__46__46__47_helpers_47_dom_47_element__ || {default: $___46__46__47__46__46__47__46__46__47_helpers_47_dom_47_element__}),
    addClass = $__0.addClass,
    fastInnerText = $__0.fastInnerText,
    isVisible = $__0.isVisible,
    removeClass = $__0.removeClass;
var objectEach = ($___46__46__47__46__46__47__46__46__47_helpers_47_object__ = _dereq_("helpers/object"), $___46__46__47__46__46__47__46__46__47_helpers_47_object__ && $___46__46__47__46__46__47__46__46__47_helpers_47_object__.__esModule && $___46__46__47__46__46__47__46__46__47_helpers_47_object__ || {default: $___46__46__47__46__46__47__46__46__47_helpers_47_object__}).objectEach;
var $__2 = ($___46__46__47__46__46__47__46__46__47_helpers_47_string__ = _dereq_("helpers/string"), $___46__46__47__46__46__47__46__46__47_helpers_47_string__ && $___46__46__47__46__46__47__46__46__47_helpers_47_string__.__esModule && $___46__46__47__46__46__47__46__46__47_helpers_47_string__ || {default: $___46__46__47__46__46__47__46__46__47_helpers_47_string__}),
    toUpperCaseFirst = $__2.toUpperCaseFirst,
    randomString = $__2.randomString;
var WalkontableEvent = ($__event__ = _dereq_("event"), $__event__ && $__event__.__esModule && $__event__ || {default: $__event__}).WalkontableEvent;
var WalkontableOverlays = ($__overlays__ = _dereq_("overlays"), $__overlays__ && $__overlays__.__esModule && $__overlays__ || {default: $__overlays__}).WalkontableOverlays;
var WalkontableScroll = ($__scroll__ = _dereq_("scroll"), $__scroll__ && $__scroll__.__esModule && $__scroll__ || {default: $__scroll__}).WalkontableScroll;
var WalkontableSettings = ($__settings__ = _dereq_("settings"), $__settings__ && $__settings__.__esModule && $__settings__ || {default: $__settings__}).WalkontableSettings;
var WalkontableTable = ($__table__ = _dereq_("table"), $__table__ && $__table__.__esModule && $__table__ || {default: $__table__}).WalkontableTable;
var WalkontableViewport = ($__viewport__ = _dereq_("viewport"), $__viewport__ && $__viewport__.__esModule && $__viewport__ || {default: $__viewport__}).WalkontableViewport;
var WalkontableOverlay = ($__overlay_47__95_base_46_js__ = _dereq_("overlay/_base.js"), $__overlay_47__95_base_46_js__ && $__overlay_47__95_base_46_js__.__esModule && $__overlay_47__95_base_46_js__ || {default: $__overlay_47__95_base_46_js__}).WalkontableOverlay;
var WalkontableTopOverlay = ($__overlay_47_top_46_js__ = _dereq_("overlay/top.js"), $__overlay_47_top_46_js__ && $__overlay_47_top_46_js__.__esModule && $__overlay_47_top_46_js__ || {default: $__overlay_47_top_46_js__}).WalkontableTopOverlay;
var WalkontableLeftOverlay = ($__overlay_47_left_46_js__ = _dereq_("overlay/left.js"), $__overlay_47_left_46_js__ && $__overlay_47_left_46_js__.__esModule && $__overlay_47_left_46_js__ || {default: $__overlay_47_left_46_js__}).WalkontableLeftOverlay;
var WalkontableDebugOverlay = ($__overlay_47_debug_46_js__ = _dereq_("overlay/debug.js"), $__overlay_47_debug_46_js__ && $__overlay_47_debug_46_js__.__esModule && $__overlay_47_debug_46_js__ || {default: $__overlay_47_debug_46_js__}).WalkontableDebugOverlay;
var WalkontableTopLeftCornerOverlay = ($__overlay_47_topLeftCorner_46_js__ = _dereq_("overlay/topLeftCorner.js"), $__overlay_47_topLeftCorner_46_js__ && $__overlay_47_topLeftCorner_46_js__.__esModule && $__overlay_47_topLeftCorner_46_js__ || {default: $__overlay_47_topLeftCorner_46_js__}).WalkontableTopLeftCornerOverlay;
var Walkontable = function Walkontable(settings) {
  var originalHeaders = [];
  this.guid = 'wt_' + randomString();
  if (settings.cloneSource) {
    this.cloneSource = settings.cloneSource;
    this.cloneOverlay = settings.cloneOverlay;
    this.wtSettings = settings.cloneSource.wtSettings;
    this.wtTable = new WalkontableTable(this, settings.table, settings.wtRootElement);
    this.wtScroll = new WalkontableScroll(this);
    this.wtViewport = settings.cloneSource.wtViewport;
    this.wtEvent = new WalkontableEvent(this);
    this.selections = this.cloneSource.selections;
  } else {
    this.wtSettings = new WalkontableSettings(this, settings);
    this.wtTable = new WalkontableTable(this, settings.table);
    this.wtScroll = new WalkontableScroll(this);
    this.wtViewport = new WalkontableViewport(this);
    this.wtEvent = new WalkontableEvent(this);
    this.selections = this.getSetting('selections');
    this.wtOverlays = new WalkontableOverlays(this);
    this.exportSettingsAsClassNames();
  }
  if (this.wtTable.THEAD.childNodes.length && this.wtTable.THEAD.childNodes[0].childNodes.length) {
    for (var c = 0,
        clen = this.wtTable.THEAD.childNodes[0].childNodes.length; c < clen; c++) {
      originalHeaders.push(this.wtTable.THEAD.childNodes[0].childNodes[c].innerHTML);
    }
    if (!this.getSetting('columnHeaders').length) {
      this.update('columnHeaders', [function(column, TH) {
        fastInnerText(TH, originalHeaders[column]);
      }]);
    }
  }
  this.drawn = false;
  this.drawInterrupted = false;
};
($traceurRuntime.createClass)(Walkontable, {
  draw: function() {
    var fastDraw = arguments[0] !== (void 0) ? arguments[0] : false;
    this.drawInterrupted = false;
    if (!fastDraw && !isVisible(this.wtTable.TABLE)) {
      this.drawInterrupted = true;
    } else {
      this.wtTable.draw(fastDraw);
    }
    return this;
  },
  getCell: function(coords) {
    var topmost = arguments[1] !== (void 0) ? arguments[1] : false;
    if (!topmost) {
      return this.wtTable.getCell(coords);
    }
    var totalRows = this.wtSettings.getSetting('totalRows');
    var fixedRowsTop = this.wtSettings.getSetting('fixedRowsTop');
    var fixedRowsBottom = this.wtSettings.getSetting('fixedRowsBottom');
    var fixedColumns = this.wtSettings.getSetting('fixedColumnsLeft');
    if (coords.row < fixedRowsTop && coords.col < fixedColumns) {
      return this.wtOverlays.topLeftCornerOverlay.clone.wtTable.getCell(coords);
    } else if (coords.row < fixedRowsTop) {
      return this.wtOverlays.topOverlay.clone.wtTable.getCell(coords);
    } else if (coords.col < fixedColumns && coords.row >= totalRows - fixedRowsBottom) {
      if (this.wtOverlays.bottomLeftCornerOverlay.clone) {
        return this.wtOverlays.bottomLeftCornerOverlay.clone.wtTable.getCell(coords);
      }
    } else if (coords.col < fixedColumns) {
      return this.wtOverlays.leftOverlay.clone.wtTable.getCell(coords);
    } else if (coords.row < totalRows && coords.row > totalRows - fixedRowsBottom) {
      if (this.wtOverlays.bottomOverlay.clone) {
        return this.wtOverlays.bottomOverlay.clone.wtTable.getCell(coords);
      }
    }
    return this.wtTable.getCell(coords);
  },
  update: function(settings, value) {
    return this.wtSettings.update(settings, value);
  },
  scrollVertical: function(row) {
    this.wtOverlays.topOverlay.scrollTo(row);
    this.getSetting('onScrollVertically');
    return this;
  },
  scrollHorizontal: function(column) {
    this.wtOverlays.leftOverlay.scrollTo(column);
    this.getSetting('onScrollHorizontally');
    return this;
  },
  scrollViewport: function(coords) {
    this.wtScroll.scrollViewport(coords);
    return this;
  },
  getViewport: function() {
    return [this.wtTable.getFirstVisibleRow(), this.wtTable.getFirstVisibleColumn(), this.wtTable.getLastVisibleRow(), this.wtTable.getLastVisibleColumn()];
  },
  getOverlayName: function() {
    return this.cloneOverlay ? this.cloneOverlay.type : 'master';
  },
  isOverlayName: function(name) {
    if (this.cloneOverlay) {
      return this.cloneOverlay.type === name;
    }
    return false;
  },
  exportSettingsAsClassNames: function() {
    var $__14 = this;
    var toExport = {
      rowHeaders: ['array'],
      columnHeaders: ['array']
    };
    var allClassNames = [];
    var newClassNames = [];
    objectEach(toExport, (function(optionType, key) {
      if (optionType.indexOf('array') > -1 && $__14.getSetting(key).length) {
        newClassNames.push('ht' + toUpperCaseFirst(key));
      }
      allClassNames.push('ht' + toUpperCaseFirst(key));
    }));
    removeClass(this.wtTable.wtRootElement.parentNode, allClassNames);
    addClass(this.wtTable.wtRootElement.parentNode, newClassNames);
  },
  getSetting: function(key, param1, param2, param3, param4) {
    return this.wtSettings.getSetting(key, param1, param2, param3, param4);
  },
  hasSetting: function(key) {
    return this.wtSettings.has(key);
  },
  destroy: function() {
    this.wtOverlays.destroy();
    this.wtEvent.destroy();
  }
}, {});
;
window.Walkontable = Walkontable;

//# 
},{"event":9,"helpers/dom/element":47,"helpers/object":53,"helpers/string":55,"overlay/_base.js":12,"overlay/debug.js":13,"overlay/left.js":14,"overlay/top.js":15,"overlay/topLeftCorner.js":16,"overlays":17,"scroll":18,"settings":20,"table":21,"viewport":23}],9:[function(_dereq_,module,exports){
"use strict";
Object.defineProperties(exports, {
  WalkontableEvent: {get: function() {
      return WalkontableEvent;
    }},
  __esModule: {value: true}
});
var $___46__46__47__46__46__47__46__46__47_helpers_47_dom_47_element__,
    $___46__46__47__46__46__47__46__46__47_helpers_47_function__,
    $___46__46__47__46__46__47__46__46__47_helpers_47_browser__,
    $___46__46__47__46__46__47__46__46__47_eventManager__;
var $__0 = ($___46__46__47__46__46__47__46__46__47_helpers_47_dom_47_element__ = _dereq_("helpers/dom/element"), $___46__46__47__46__46__47__46__46__47_helpers_47_dom_47_element__ && $___46__46__47__46__46__47__46__46__47_helpers_47_dom_47_element__.__esModule && $___46__46__47__46__46__47__46__46__47_helpers_47_dom_47_element__ || {default: $___46__46__47__46__46__47__46__46__47_helpers_47_dom_47_element__}),
    closestDown = $__0.closestDown,
    hasClass = $__0.hasClass,
    isChildOf = $__0.isChildOf,
    getParent = $__0.getParent;
var partial = ($___46__46__47__46__46__47__46__46__47_helpers_47_function__ = _dereq_("helpers/function"), $___46__46__47__46__46__47__46__46__47_helpers_47_function__ && $___46__46__47__46__46__47__46__46__47_helpers_47_function__.__esModule && $___46__46__47__46__46__47__46__46__47_helpers_47_function__ || {default: $___46__46__47__46__46__47__46__46__47_helpers_47_function__}).partial;
var isMobileBrowser = ($___46__46__47__46__46__47__46__46__47_helpers_47_browser__ = _dereq_("helpers/browser"), $___46__46__47__46__46__47__46__46__47_helpers_47_browser__ && $___46__46__47__46__46__47__46__46__47_helpers_47_browser__.__esModule && $___46__46__47__46__46__47__46__46__47_helpers_47_browser__ || {default: $___46__46__47__46__46__47__46__46__47_helpers_47_browser__}).isMobileBrowser;
var eventManagerObject = ($___46__46__47__46__46__47__46__46__47_eventManager__ = _dereq_("eventManager"), $___46__46__47__46__46__47__46__46__47_eventManager__ && $___46__46__47__46__46__47__46__46__47_eventManager__.__esModule && $___46__46__47__46__46__47__46__46__47_eventManager__ || {default: $___46__46__47__46__46__47__46__46__47_eventManager__}).eventManager;
function WalkontableEvent(instance) {
  var that = this;
  var eventManager = eventManagerObject(instance);
  this.instance = instance;
  var dblClickOrigin = [null, null];
  this.dblClickTimeout = [null, null];
  var onMouseDown = function(event) {
    var activeElement = document.activeElement;
    var getParentNode = partial(getParent, event.realTarget);
    var realTarget = event.realTarget;
    if (realTarget === activeElement || getParentNode(0) === activeElement || getParentNode(1) === activeElement) {
      return;
    }
    var cell = that.parentCell(realTarget);
    if (hasClass(realTarget, 'corner')) {
      that.instance.getSetting('onCellCornerMouseDown', event, realTarget);
    } else if (cell.TD) {
      if (that.instance.hasSetting('onCellMouseDown')) {
        that.instance.getSetting('onCellMouseDown', event, cell.coords, cell.TD, that.instance);
      }
    }
    if (event.button !== 2) {
      if (cell.TD) {
        dblClickOrigin[0] = cell.TD;
        clearTimeout(that.dblClickTimeout[0]);
        that.dblClickTimeout[0] = setTimeout(function() {
          dblClickOrigin[0] = null;
        }, 1000);
      }
    }
  };
  var onTouchMove = function(event) {
    that.instance.touchMoving = true;
  };
  var longTouchTimeout;
  var onTouchStart = function(event) {
    var container = this;
    eventManager.addEventListener(this, 'touchmove', onTouchMove);
    that.checkIfTouchMove = setTimeout(function() {
      if (that.instance.touchMoving === true) {
        that.instance.touchMoving = void 0;
        eventManager.removeEventListener('touchmove', onTouchMove, false);
        return;
      } else {
        onMouseDown(event);
      }
    }, 30);
  };
  var onMouseOver = function(event) {
    var table,
        td,
        mainWOT;
    if (that.instance.hasSetting('onCellMouseOver')) {
      table = that.instance.wtTable.TABLE;
      td = closestDown(event.realTarget, ['TD', 'TH'], table);
      mainWOT = that.instance.cloneSource || that.instance;
      if (td && td !== mainWOT.lastMouseOver && isChildOf(td, table)) {
        mainWOT.lastMouseOver = td;
        that.instance.getSetting('onCellMouseOver', event, that.instance.wtTable.getCoords(td), td, that.instance);
      }
    }
  };
  var onMouseUp = function(event) {
    if (event.button !== 2) {
      var cell = that.parentCell(event.realTarget);
      if (cell.TD === dblClickOrigin[0] && cell.TD === dblClickOrigin[1]) {
        if (hasClass(event.realTarget, 'corner')) {
          that.instance.getSetting('onCellCornerDblClick', event, cell.coords, cell.TD, that.instance);
        } else {
          that.instance.getSetting('onCellDblClick', event, cell.coords, cell.TD, that.instance);
        }
        dblClickOrigin[0] = null;
        dblClickOrigin[1] = null;
      } else if (cell.TD === dblClickOrigin[0]) {
        that.instance.getSetting('onCellMouseUp', event, cell.coords, cell.TD, that.instance);
        dblClickOrigin[1] = cell.TD;
        clearTimeout(that.dblClickTimeout[1]);
        that.dblClickTimeout[1] = setTimeout(function() {
          dblClickOrigin[1] = null;
        }, 500);
      } else if (cell.TD && that.instance.hasSetting('onCellMouseUp')) {
        that.instance.getSetting('onCellMouseUp', event, cell.coords, cell.TD, that.instance);
      }
    }
  };
  var onTouchEnd = function(event) {
    clearTimeout(longTouchTimeout);
    event.preventDefault();
    onMouseUp(event);
  };
  eventManager.addEventListener(this.instance.wtTable.holder, 'mousedown', onMouseDown);
  eventManager.addEventListener(this.instance.wtTable.TABLE, 'mouseover', onMouseOver);
  eventManager.addEventListener(this.instance.wtTable.holder, 'mouseup', onMouseUp);
  if (this.instance.wtTable.holder.parentNode.parentNode && isMobileBrowser() && !that.instance.wtTable.isWorkingOnClone()) {
    var classSelector = '.' + this.instance.wtTable.holder.parentNode.className.split(' ').join('.');
    eventManager.addEventListener(this.instance.wtTable.holder, 'touchstart', function(event) {
      that.instance.touchApplied = true;
      if (isChildOf(event.target, classSelector)) {
        onTouchStart.call(event.target, event);
      }
    });
    eventManager.addEventListener(this.instance.wtTable.holder, 'touchend', function(event) {
      that.instance.touchApplied = false;
      if (isChildOf(event.target, classSelector)) {
        onTouchEnd.call(event.target, event);
      }
    });
    if (!that.instance.momentumScrolling) {
      that.instance.momentumScrolling = {};
    }
    eventManager.addEventListener(this.instance.wtTable.holder, 'scroll', function(event) {
      clearTimeout(that.instance.momentumScrolling._timeout);
      if (!that.instance.momentumScrolling.ongoing) {
        that.instance.getSetting('onBeforeTouchScroll');
      }
      that.instance.momentumScrolling.ongoing = true;
      that.instance.momentumScrolling._timeout = setTimeout(function() {
        if (!that.instance.touchApplied) {
          that.instance.momentumScrolling.ongoing = false;
          that.instance.getSetting('onAfterMomentumScroll');
        }
      }, 200);
    });
  }
  eventManager.addEventListener(window, 'resize', function() {
    if (that.instance.getSetting('stretchH') !== 'none') {
      that.instance.draw();
    }
  });
  this.destroy = function() {
    clearTimeout(this.dblClickTimeout[0]);
    clearTimeout(this.dblClickTimeout[1]);
    eventManager.destroy();
  };
}
WalkontableEvent.prototype.parentCell = function(elem) {
  var cell = {};
  var TABLE = this.instance.wtTable.TABLE;
  var TD = closestDown(elem, ['TD', 'TH'], TABLE);
  if (TD) {
    cell.coords = this.instance.wtTable.getCoords(TD);
    cell.TD = TD;
  } else if (hasClass(elem, 'wtBorder') && hasClass(elem, 'current')) {
    cell.coords = this.instance.selections.current.cellRange.highlight;
    cell.TD = this.instance.wtTable.getCell(cell.coords);
  } else if (hasClass(elem, 'wtBorder') && hasClass(elem, 'area')) {
    if (this.instance.selections.area.cellRange) {
      cell.coords = this.instance.selections.area.cellRange.to;
      cell.TD = this.instance.wtTable.getCell(cell.coords);
    }
  }
  return cell;
};
;
window.WalkontableEvent = WalkontableEvent;

//# 
},{"eventManager":42,"helpers/browser":44,"helpers/dom/element":47,"helpers/function":50}],10:[function(_dereq_,module,exports){
"use strict";
Object.defineProperties(exports, {
  WalkontableColumnFilter: {get: function() {
      return WalkontableColumnFilter;
    }},
  __esModule: {value: true}
});
var WalkontableColumnFilter = function WalkontableColumnFilter(offset, total, countTH) {
  this.offset = offset;
  this.total = total;
  this.countTH = countTH;
};
($traceurRuntime.createClass)(WalkontableColumnFilter, {
  offsetted: function(index) {
    return index + this.offset;
  },
  unOffsetted: function(index) {
    return index - this.offset;
  },
  renderedToSource: function(index) {
    return this.offsetted(index);
  },
  sourceToRendered: function(index) {
    return this.unOffsetted(index);
  },
  offsettedTH: function(index) {
    return index - this.countTH;
  },
  unOffsettedTH: function(index) {
    return index + this.countTH;
  },
  visibleRowHeadedColumnToSourceColumn: function(index) {
    return this.renderedToSource(this.offsettedTH(index));
  },
  sourceColumnToVisibleRowHeadedColumn: function(index) {
    return this.unOffsettedTH(this.sourceToRendered(index));
  }
}, {});
;
window.WalkontableColumnFilter = WalkontableColumnFilter;

//# 
},{}],11:[function(_dereq_,module,exports){
"use strict";
Object.defineProperties(exports, {
  WalkontableRowFilter: {get: function() {
      return WalkontableRowFilter;
    }},
  __esModule: {value: true}
});
var WalkontableRowFilter = function WalkontableRowFilter(offset, total, countTH) {
  this.offset = offset;
  this.total = total;
  this.countTH = countTH;
};
($traceurRuntime.createClass)(WalkontableRowFilter, {
  offsetted: function(index) {
    return index + this.offset;
  },
  unOffsetted: function(index) {
    return index - this.offset;
  },
  renderedToSource: function(index) {
    return this.offsetted(index);
  },
  sourceToRendered: function(index) {
    return this.unOffsetted(index);
  },
  offsettedTH: function(index) {
    return index - this.countTH;
  },
  unOffsettedTH: function(index) {
    return index + this.countTH;
  },
  visibleColHeadedRowToSourceRow: function(index) {
    return this.renderedToSource(this.offsettedTH(index));
  },
  sourceRowToVisibleColHeadedRow: function(index) {
    return this.unOffsettedTH(this.sourceToRendered(index));
  }
}, {});
;
window.WalkontableRowFilter = WalkontableRowFilter;

//# 
},{}],12:[function(_dereq_,module,exports){
"use strict";
Object.defineProperties(exports, {
  WalkontableOverlay: {get: function() {
      return WalkontableOverlay;
    }},
  __esModule: {value: true}
});
var $___46__46__47__46__46__47__46__46__47__46__46__47_helpers_47_dom_47_element__,
    $___46__46__47__46__46__47__46__46__47__46__46__47_helpers_47_object__,
    $___46__46__47__46__46__47__46__46__47__46__46__47_helpers_47_array__,
    $___46__46__47__46__46__47__46__46__47__46__46__47_eventManager__;
var $__0 = ($___46__46__47__46__46__47__46__46__47__46__46__47_helpers_47_dom_47_element__ = _dereq_("helpers/dom/element"), $___46__46__47__46__46__47__46__46__47__46__46__47_helpers_47_dom_47_element__ && $___46__46__47__46__46__47__46__46__47__46__46__47_helpers_47_dom_47_element__.__esModule && $___46__46__47__46__46__47__46__46__47__46__46__47_helpers_47_dom_47_element__ || {default: $___46__46__47__46__46__47__46__46__47__46__46__47_helpers_47_dom_47_element__}),
    getScrollableElement = $__0.getScrollableElement,
    getTrimmingContainer = $__0.getTrimmingContainer;
var defineGetter = ($___46__46__47__46__46__47__46__46__47__46__46__47_helpers_47_object__ = _dereq_("helpers/object"), $___46__46__47__46__46__47__46__46__47__46__46__47_helpers_47_object__ && $___46__46__47__46__46__47__46__46__47__46__46__47_helpers_47_object__.__esModule && $___46__46__47__46__46__47__46__46__47__46__46__47_helpers_47_object__ || {default: $___46__46__47__46__46__47__46__46__47__46__46__47_helpers_47_object__}).defineGetter;
var arrayEach = ($___46__46__47__46__46__47__46__46__47__46__46__47_helpers_47_array__ = _dereq_("helpers/array"), $___46__46__47__46__46__47__46__46__47__46__46__47_helpers_47_array__ && $___46__46__47__46__46__47__46__46__47__46__46__47_helpers_47_array__.__esModule && $___46__46__47__46__46__47__46__46__47__46__46__47_helpers_47_array__ || {default: $___46__46__47__46__46__47__46__46__47__46__46__47_helpers_47_array__}).arrayEach;
var eventManagerObject = ($___46__46__47__46__46__47__46__46__47__46__46__47_eventManager__ = _dereq_("eventManager"), $___46__46__47__46__46__47__46__46__47__46__46__47_eventManager__ && $___46__46__47__46__46__47__46__46__47__46__46__47_eventManager__.__esModule && $___46__46__47__46__46__47__46__46__47__46__46__47_eventManager__ || {default: $___46__46__47__46__46__47__46__46__47__46__46__47_eventManager__}).eventManager;
var registeredOverlays = {};
var WalkontableOverlay = function WalkontableOverlay(wotInstance) {
  defineGetter(this, 'wot', wotInstance, {writable: false});
  this.instance = this.wot;
  this.type = '';
  this.mainTableScrollableElement = null;
  this.TABLE = this.wot.wtTable.TABLE;
  this.hider = this.wot.wtTable.hider;
  this.spreader = this.wot.wtTable.spreader;
  this.holder = this.wot.wtTable.holder;
  this.wtRootElement = this.wot.wtTable.wtRootElement;
  this.trimmingContainer = getTrimmingContainer(this.hider.parentNode.parentNode);
  this.areElementSizesAdjusted = false;
  this.updateStateOfRendering();
};
var $WalkontableOverlay = WalkontableOverlay;
($traceurRuntime.createClass)(WalkontableOverlay, {
  updateStateOfRendering: function() {
    var previousState = this.needFullRender;
    this.needFullRender = this.shouldBeRendered();
    var changed = previousState !== this.needFullRender;
    if (changed && !this.needFullRender) {
      this.reset();
    }
    return changed;
  },
  shouldBeRendered: function() {
    return true;
  },
  updateTrimmingContainer: function() {
    this.trimmingContainer = getTrimmingContainer(this.hider.parentNode.parentNode);
  },
  updateMainScrollableElement: function() {
    this.mainTableScrollableElement = getScrollableElement(this.wot.wtTable.TABLE);
  },
  makeClone: function(direction) {
    if ($WalkontableOverlay.CLONE_TYPES.indexOf(direction) === -1) {
      throw new Error('Clone type "' + direction + '" is not supported.');
    }
    var clone = document.createElement('DIV');
    var clonedTable = document.createElement('TABLE');
    clone.className = 'ht_clone_' + direction + ' handsontable';
    clone.style.position = 'absolute';
    clone.style.top = 0;
    clone.style.left = 0;
    clone.style.overflow = 'hidden';
    clonedTable.className = this.wot.wtTable.TABLE.className;
    clone.appendChild(clonedTable);
    this.type = direction;
    this.wot.wtTable.wtRootElement.parentNode.appendChild(clone);
    var preventOverflow = this.wot.getSetting('preventOverflow');
    if (preventOverflow === true || preventOverflow === 'horizontal' && this.type === $WalkontableOverlay.CLONE_TOP || preventOverflow === 'vertical' && this.type === $WalkontableOverlay.CLONE_LEFT) {
      this.mainTableScrollableElement = window;
    } else {
      this.mainTableScrollableElement = getScrollableElement(this.wot.wtTable.TABLE);
    }
    return new Walkontable({
      cloneSource: this.wot,
      cloneOverlay: this,
      table: clonedTable
    });
  },
  refresh: function() {
    var fastDraw = arguments[0] !== (void 0) ? arguments[0] : false;
    var nextCycleRenderFlag = this.shouldBeRendered();
    if (this.clone && (this.needFullRender || nextCycleRenderFlag)) {
      this.clone.draw(fastDraw);
    }
    this.needFullRender = nextCycleRenderFlag;
  },
  reset: function() {
    if (!this.clone) {
      return;
    }
    var holder = this.clone.wtTable.holder;
    var hider = this.clone.wtTable.hider;
    var holderStyle = holder.style;
    var hidderStyle = hider.style;
    var rootStyle = holder.parentNode.style;
    arrayEach([holderStyle, hidderStyle, rootStyle], (function(style) {
      style.width = '';
      style.height = '';
    }));
  },
  destroy: function() {
    eventManagerObject(this.clone).destroy();
  }
}, {
  get CLONE_TOP() {
    return 'top';
  },
  get CLONE_BOTTOM() {
    return 'bottom';
  },
  get CLONE_LEFT() {
    return 'left';
  },
  get CLONE_TOP_LEFT_CORNER() {
    return 'top_left_corner';
  },
  get CLONE_BOTTOM_LEFT_CORNER() {
    return 'bottom_left_corner';
  },
  get CLONE_DEBUG() {
    return 'debug';
  },
  get CLONE_TYPES() {
    return [$WalkontableOverlay.CLONE_TOP, $WalkontableOverlay.CLONE_BOTTOM, $WalkontableOverlay.CLONE_LEFT, $WalkontableOverlay.CLONE_TOP_LEFT_CORNER, $WalkontableOverlay.CLONE_BOTTOM_LEFT_CORNER, $WalkontableOverlay.CLONE_DEBUG];
  },
  registerOverlay: function(type, overlayClass) {
    if ($WalkontableOverlay.CLONE_TYPES.indexOf(type) === -1) {
      throw new Error(("Unsupported overlay (" + type + ")."));
    }
    registeredOverlays[type] = overlayClass;
  },
  createOverlay: function(type, wot) {
    return new registeredOverlays[type](wot);
  },
  isOverlayTypeOf: function(overlay, type) {
    if (!overlay || !registeredOverlays[type]) {
      return false;
    }
    return overlay instanceof registeredOverlays[type];
  }
});
;
window.WalkontableOverlay = WalkontableOverlay;

//# 
},{"eventManager":42,"helpers/array":43,"helpers/dom/element":47,"helpers/object":53}],13:[function(_dereq_,module,exports){
"use strict";
Object.defineProperties(exports, {
  WalkontableDebugOverlay: {get: function() {
      return WalkontableDebugOverlay;
    }},
  __esModule: {value: true}
});
var $___46__46__47__46__46__47__46__46__47__46__46__47_helpers_47_dom_47_element__,
    $___95_base__;
var addClass = ($___46__46__47__46__46__47__46__46__47__46__46__47_helpers_47_dom_47_element__ = _dereq_("helpers/dom/element"), $___46__46__47__46__46__47__46__46__47__46__46__47_helpers_47_dom_47_element__ && $___46__46__47__46__46__47__46__46__47__46__46__47_helpers_47_dom_47_element__.__esModule && $___46__46__47__46__46__47__46__46__47__46__46__47_helpers_47_dom_47_element__ || {default: $___46__46__47__46__46__47__46__46__47__46__46__47_helpers_47_dom_47_element__}).addClass;
var WalkontableOverlay = ($___95_base__ = _dereq_("_base"), $___95_base__ && $___95_base__.__esModule && $___95_base__ || {default: $___95_base__}).WalkontableOverlay;
var WalkontableDebugOverlay = function WalkontableDebugOverlay(wotInstance) {
  $traceurRuntime.superConstructor($WalkontableDebugOverlay).call(this, wotInstance);
  this.clone = this.makeClone(WalkontableOverlay.CLONE_DEBUG);
  this.clone.wtTable.holder.style.opacity = 0.4;
  this.clone.wtTable.holder.style.textShadow = '0 0 2px #ff0000';
  addClass(this.clone.wtTable.holder.parentNode, 'wtDebugVisible');
};
var $WalkontableDebugOverlay = WalkontableDebugOverlay;
($traceurRuntime.createClass)(WalkontableDebugOverlay, {}, {}, WalkontableOverlay);
;
window.WalkontableDebugOverlay = WalkontableDebugOverlay;
WalkontableOverlay.registerOverlay(WalkontableOverlay.CLONE_DEBUG, WalkontableDebugOverlay);

//# 
},{"_base":12,"helpers/dom/element":47}],14:[function(_dereq_,module,exports){
"use strict";
Object.defineProperties(exports, {
  WalkontableLeftOverlay: {get: function() {
      return WalkontableLeftOverlay;
    }},
  __esModule: {value: true}
});
var $___46__46__47__46__46__47__46__46__47__46__46__47_helpers_47_dom_47_element__,
    $___95_base__;
var $__0 = ($___46__46__47__46__46__47__46__46__47__46__46__47_helpers_47_dom_47_element__ = _dereq_("helpers/dom/element"), $___46__46__47__46__46__47__46__46__47__46__46__47_helpers_47_dom_47_element__ && $___46__46__47__46__46__47__46__46__47__46__46__47_helpers_47_dom_47_element__.__esModule && $___46__46__47__46__46__47__46__46__47__46__46__47_helpers_47_dom_47_element__ || {default: $___46__46__47__46__46__47__46__46__47__46__46__47_helpers_47_dom_47_element__}),
    addClass = $__0.addClass,
    getScrollbarWidth = $__0.getScrollbarWidth,
    getScrollLeft = $__0.getScrollLeft,
    getWindowScrollTop = $__0.getWindowScrollTop,
    hasClass = $__0.hasClass,
    outerWidth = $__0.outerWidth,
    innerHeight = $__0.innerHeight,
    removeClass = $__0.removeClass,
    setOverlayPosition = $__0.setOverlayPosition,
    resetCssTransform = $__0.resetCssTransform;
var WalkontableOverlay = ($___95_base__ = _dereq_("_base"), $___95_base__ && $___95_base__.__esModule && $___95_base__ || {default: $___95_base__}).WalkontableOverlay;
var WalkontableLeftOverlay = function WalkontableLeftOverlay(wotInstance) {
  $traceurRuntime.superConstructor($WalkontableLeftOverlay).call(this, wotInstance);
  this.clone = this.makeClone(WalkontableOverlay.CLONE_LEFT);
};
var $WalkontableLeftOverlay = WalkontableLeftOverlay;
($traceurRuntime.createClass)(WalkontableLeftOverlay, {
  shouldBeRendered: function() {
    return this.wot.getSetting('fixedColumnsLeft') || this.wot.getSetting('rowHeaders').length ? true : false;
  },
  resetFixedPosition: function() {
    if (!this.needFullRender || !this.wot.wtTable.holder.parentNode) {
      return;
    }
    var overlayRoot = this.clone.wtTable.holder.parentNode;
    var headerPosition = 0;
    var preventOverflow = this.wot.getSetting('preventOverflow');
    if (this.trimmingContainer === window && (!preventOverflow || preventOverflow !== 'horizontal')) {
      var box = this.wot.wtTable.hider.getBoundingClientRect();
      var left = Math.ceil(box.left);
      var right = Math.ceil(box.right);
      var finalLeft;
      var finalTop;
      finalTop = this.wot.wtTable.hider.style.top;
      finalTop = finalTop === '' ? 0 : finalTop;
      if (left < 0 && (right - overlayRoot.offsetWidth) > 0) {
        finalLeft = -left;
      } else {
        finalLeft = 0;
      }
      headerPosition = finalLeft;
      finalLeft = finalLeft + 'px';
      setOverlayPosition(overlayRoot, finalLeft, finalTop);
    } else {
      headerPosition = this.getScrollPosition();
      resetCssTransform(overlayRoot);
    }
    this.adjustHeaderBordersPosition(headerPosition);
    this.adjustElementsSize();
  },
  setScrollPosition: function(pos) {
    if (this.mainTableScrollableElement === window) {
      window.scrollTo(pos, getWindowScrollTop());
    } else {
      this.mainTableScrollableElement.scrollLeft = pos;
    }
  },
  onScroll: function() {
    this.wot.getSetting('onScrollVertically');
  },
  sumCellSizes: function(from, to) {
    var sum = 0;
    var defaultColumnWidth = this.wot.wtSettings.defaultColumnWidth;
    while (from < to) {
      sum += this.wot.wtTable.getStretchedColumnWidth(from) || defaultColumnWidth;
      from++;
    }
    return sum;
  },
  adjustElementsSize: function() {
    var force = arguments[0] !== (void 0) ? arguments[0] : false;
    this.updateTrimmingContainer();
    if (this.needFullRender || force) {
      this.adjustRootElementSize();
      this.adjustRootChildrenSize();
      if (!force) {
        this.areElementSizesAdjusted = true;
      }
    }
  },
  adjustRootElementSize: function() {
    var masterHolder = this.wot.wtTable.holder;
    var scrollbarHeight = masterHolder.clientHeight === masterHolder.offsetHeight ? 0 : getScrollbarWidth();
    var overlayRoot = this.clone.wtTable.holder.parentNode;
    var overlayRootStyle = overlayRoot.style;
    var preventOverflow = this.wot.getSetting('preventOverflow');
    var tableWidth;
    if (this.trimmingContainer !== window || preventOverflow === 'vertical') {
      var height = this.wot.wtViewport.getWorkspaceHeight() - scrollbarHeight;
      height = Math.min(height, innerHeight(this.wot.wtTable.wtRootElement));
      overlayRootStyle.height = height + 'px';
    } else {
      overlayRootStyle.height = '';
    }
    this.clone.wtTable.holder.style.height = overlayRootStyle.height;
    tableWidth = outerWidth(this.clone.wtTable.TABLE);
    overlayRootStyle.width = (tableWidth === 0 ? tableWidth : tableWidth + 4) + 'px';
  },
  adjustRootChildrenSize: function() {
    var scrollbarWidth = getScrollbarWidth();
    this.clone.wtTable.hider.style.height = this.hider.style.height;
    this.clone.wtTable.holder.style.height = this.clone.wtTable.holder.parentNode.style.height;
    if (scrollbarWidth === 0) {
      scrollbarWidth = 30;
    }
    this.clone.wtTable.holder.style.width = parseInt(this.clone.wtTable.holder.parentNode.style.width, 10) + scrollbarWidth + 'px';
  },
  applyToDOM: function() {
    var total = this.wot.getSetting('totalColumns');
    if (!this.areElementSizesAdjusted) {
      this.adjustElementsSize();
    }
    if (typeof this.wot.wtViewport.columnsRenderCalculator.startPosition === 'number') {
      this.spreader.style.left = this.wot.wtViewport.columnsRenderCalculator.startPosition + 'px';
    } else if (total === 0) {
      this.spreader.style.left = '0';
    } else {
      throw new Error('Incorrect value of the columnsRenderCalculator');
    }
    this.spreader.style.right = '';
    if (this.needFullRender) {
      this.syncOverlayOffset();
    }
  },
  syncOverlayOffset: function() {
    if (typeof this.wot.wtViewport.rowsRenderCalculator.startPosition === 'number') {
      this.clone.wtTable.spreader.style.top = this.wot.wtViewport.rowsRenderCalculator.startPosition + 'px';
    } else {
      this.clone.wtTable.spreader.style.top = '';
    }
  },
  scrollTo: function(sourceCol, beyondRendered) {
    var newX = this.getTableParentOffset();
    var sourceInstance = this.wot.cloneSource ? this.wot.cloneSource : this.wot;
    var mainHolder = sourceInstance.wtTable.holder;
    var scrollbarCompensation = 0;
    if (beyondRendered && mainHolder.offsetWidth !== mainHolder.clientWidth) {
      scrollbarCompensation = getScrollbarWidth();
    }
    if (beyondRendered) {
      newX += this.sumCellSizes(0, sourceCol + 1);
      newX -= this.wot.wtViewport.getViewportWidth();
    } else {
      newX += this.sumCellSizes(this.wot.getSetting('fixedColumnsLeft'), sourceCol);
    }
    newX += scrollbarCompensation;
    this.setScrollPosition(newX);
  },
  getTableParentOffset: function() {
    var preventOverflow = this.wot.getSetting('preventOverflow');
    var offset = 0;
    if (!preventOverflow && this.trimmingContainer === window) {
      offset = this.wot.wtTable.holderOffset.left;
    }
    return offset;
  },
  getScrollPosition: function() {
    return getScrollLeft(this.mainTableScrollableElement);
  },
  adjustHeaderBordersPosition: function(position) {
    var masterParent = this.wot.wtTable.holder.parentNode;
    var rowHeaders = this.wot.getSetting('rowHeaders');
    var fixedColumnsLeft = this.wot.getSetting('fixedColumnsLeft');
    var totalRows = this.wot.getSetting('totalRows');
    if (totalRows) {
      removeClass(masterParent, 'emptyRows');
    } else {
      addClass(masterParent, 'emptyRows');
    }
    if (fixedColumnsLeft && !rowHeaders.length) {
      addClass(masterParent, 'innerBorderLeft');
    } else if (!fixedColumnsLeft && rowHeaders.length) {
      var previousState = hasClass(masterParent, 'innerBorderLeft');
      if (position) {
        addClass(masterParent, 'innerBorderLeft');
      } else {
        removeClass(masterParent, 'innerBorderLeft');
      }
      if (!previousState && position || previousState && !position) {
        this.wot.wtOverlays.adjustElementsSize();
      }
    }
  }
}, {}, WalkontableOverlay);
;
window.WalkontableLeftOverlay = WalkontableLeftOverlay;
WalkontableOverlay.registerOverlay(WalkontableOverlay.CLONE_LEFT, WalkontableLeftOverlay);

//# 
},{"_base":12,"helpers/dom/element":47}],15:[function(_dereq_,module,exports){
"use strict";
Object.defineProperties(exports, {
  WalkontableTopOverlay: {get: function() {
      return WalkontableTopOverlay;
    }},
  __esModule: {value: true}
});
var $___46__46__47__46__46__47__46__46__47__46__46__47_helpers_47_dom_47_element__,
    $___95_base__;
var $__0 = ($___46__46__47__46__46__47__46__46__47__46__46__47_helpers_47_dom_47_element__ = _dereq_("helpers/dom/element"), $___46__46__47__46__46__47__46__46__47__46__46__47_helpers_47_dom_47_element__ && $___46__46__47__46__46__47__46__46__47__46__46__47_helpers_47_dom_47_element__.__esModule && $___46__46__47__46__46__47__46__46__47__46__46__47_helpers_47_dom_47_element__ || {default: $___46__46__47__46__46__47__46__46__47__46__46__47_helpers_47_dom_47_element__}),
    addClass = $__0.addClass,
    getScrollbarWidth = $__0.getScrollbarWidth,
    getScrollTop = $__0.getScrollTop,
    getWindowScrollLeft = $__0.getWindowScrollLeft,
    hasClass = $__0.hasClass,
    outerHeight = $__0.outerHeight,
    innerWidth = $__0.innerWidth,
    removeClass = $__0.removeClass,
    setOverlayPosition = $__0.setOverlayPosition,
    resetCssTransform = $__0.resetCssTransform;
var WalkontableOverlay = ($___95_base__ = _dereq_("_base"), $___95_base__ && $___95_base__.__esModule && $___95_base__ || {default: $___95_base__}).WalkontableOverlay;
var WalkontableTopOverlay = function WalkontableTopOverlay(wotInstance) {
  $traceurRuntime.superConstructor($WalkontableTopOverlay).call(this, wotInstance);
  this.clone = this.makeClone(WalkontableOverlay.CLONE_TOP);
};
var $WalkontableTopOverlay = WalkontableTopOverlay;
($traceurRuntime.createClass)(WalkontableTopOverlay, {
  shouldBeRendered: function() {
    return this.wot.getSetting('fixedRowsTop') || this.wot.getSetting('columnHeaders').length ? true : false;
  },
  resetFixedPosition: function() {
    if (!this.needFullRender || !this.wot.wtTable.holder.parentNode) {
      return;
    }
    var overlayRoot = this.clone.wtTable.holder.parentNode;
    var headerPosition = 0;
    var preventOverflow = this.wot.getSetting('preventOverflow');
    if (this.trimmingContainer === window && (!preventOverflow || preventOverflow !== 'vertical')) {
      var box = this.wot.wtTable.hider.getBoundingClientRect();
      var top = Math.ceil(box.top);
      var bottom = Math.ceil(box.bottom);
      var finalLeft;
      var finalTop;
      finalLeft = this.wot.wtTable.hider.style.left;
      finalLeft = finalLeft === '' ? 0 : finalLeft;
      if (top < 0 && (bottom - overlayRoot.offsetHeight) > 0) {
        finalTop = -top;
      } else {
        finalTop = 0;
      }
      headerPosition = finalTop;
      finalTop = finalTop + 'px';
      setOverlayPosition(overlayRoot, finalLeft, finalTop);
    } else {
      headerPosition = this.getScrollPosition();
      resetCssTransform(overlayRoot);
    }
    this.adjustHeaderBordersPosition(headerPosition);
    this.adjustElementsSize();
  },
  setScrollPosition: function(pos) {
    if (this.mainTableScrollableElement === window) {
      window.scrollTo(getWindowScrollLeft(), pos);
    } else {
      this.mainTableScrollableElement.scrollTop = pos;
    }
  },
  onScroll: function() {
    this.wot.getSetting('onScrollHorizontally');
  },
  sumCellSizes: function(from, to) {
    var sum = 0;
    var defaultRowHeight = this.wot.wtSettings.settings.defaultRowHeight;
    while (from < to) {
      var height = this.wot.wtTable.getRowHeight(from);
      sum += height === void 0 ? defaultRowHeight : height;
      from++;
    }
    return sum;
  },
  adjustElementsSize: function() {
    var force = arguments[0] !== (void 0) ? arguments[0] : false;
    this.updateTrimmingContainer();
    if (this.needFullRender || force) {
      this.adjustRootElementSize();
      this.adjustRootChildrenSize();
      if (!force) {
        this.areElementSizesAdjusted = true;
      }
    }
  },
  adjustRootElementSize: function() {
    var masterHolder = this.wot.wtTable.holder;
    var scrollbarWidth = masterHolder.clientWidth === masterHolder.offsetWidth ? 0 : getScrollbarWidth();
    var overlayRoot = this.clone.wtTable.holder.parentNode;
    var overlayRootStyle = overlayRoot.style;
    var preventOverflow = this.wot.getSetting('preventOverflow');
    var tableHeight;
    if (this.trimmingContainer !== window || preventOverflow === 'horizontal') {
      var width = this.wot.wtViewport.getWorkspaceWidth() - scrollbarWidth;
      width = Math.min(width, innerWidth(this.wot.wtTable.wtRootElement));
      overlayRootStyle.width = width + 'px';
    } else {
      overlayRootStyle.width = '';
    }
    this.clone.wtTable.holder.style.width = overlayRootStyle.width;
    tableHeight = outerHeight(this.clone.wtTable.TABLE);
    overlayRootStyle.height = (tableHeight === 0 ? tableHeight : tableHeight + 4) + 'px';
  },
  adjustRootChildrenSize: function() {
    var scrollbarWidth = getScrollbarWidth();
    this.clone.wtTable.hider.style.width = this.hider.style.width;
    this.clone.wtTable.holder.style.width = this.clone.wtTable.holder.parentNode.style.width;
    if (scrollbarWidth === 0) {
      scrollbarWidth = 30;
    }
    this.clone.wtTable.holder.style.height = parseInt(this.clone.wtTable.holder.parentNode.style.height, 10) + scrollbarWidth + 'px';
  },
  applyToDOM: function() {
    var total = this.wot.getSetting('totalRows');
    if (!this.areElementSizesAdjusted) {
      this.adjustElementsSize();
    }
    if (typeof this.wot.wtViewport.rowsRenderCalculator.startPosition === 'number') {
      this.spreader.style.top = this.wot.wtViewport.rowsRenderCalculator.startPosition + 'px';
    } else if (total === 0) {
      this.spreader.style.top = '0';
    } else {
      throw new Error('Incorrect value of the rowsRenderCalculator');
    }
    this.spreader.style.bottom = '';
    if (this.needFullRender) {
      this.syncOverlayOffset();
    }
  },
  syncOverlayOffset: function() {
    if (typeof this.wot.wtViewport.columnsRenderCalculator.startPosition === 'number') {
      this.clone.wtTable.spreader.style.left = this.wot.wtViewport.columnsRenderCalculator.startPosition + 'px';
    } else {
      this.clone.wtTable.spreader.style.left = '';
    }
  },
  scrollTo: function(sourceRow, bottomEdge) {
    var newY = this.getTableParentOffset();
    var sourceInstance = this.wot.cloneSource ? this.wot.cloneSource : this.wot;
    var mainHolder = sourceInstance.wtTable.holder;
    var scrollbarCompensation = 0;
    if (bottomEdge && mainHolder.offsetHeight !== mainHolder.clientHeight) {
      scrollbarCompensation = getScrollbarWidth();
    }
    if (bottomEdge) {
      var fixedRowsBottom = this.wot.getSetting('fixedRowsBottom');
      var fixedRowsTop = this.wot.getSetting('fixedRowsTop');
      var totalRows = this.wot.getSetting('totalRows');
      newY += this.sumCellSizes(0, sourceRow + 1);
      newY -= this.wot.wtViewport.getViewportHeight() - this.sumCellSizes(totalRows - fixedRowsBottom, totalRows);
      newY += 1;
    } else {
      newY += this.sumCellSizes(this.wot.getSetting('fixedRowsTop'), sourceRow);
    }
    newY += scrollbarCompensation;
    this.setScrollPosition(newY);
  },
  getTableParentOffset: function() {
    if (this.mainTableScrollableElement === window) {
      return this.wot.wtTable.holderOffset.top;
    } else {
      return 0;
    }
  },
  getScrollPosition: function() {
    return getScrollTop(this.mainTableScrollableElement);
  },
  adjustHeaderBordersPosition: function(position) {
    var masterParent = this.wot.wtTable.holder.parentNode;
    var totalColumns = this.wot.getSetting('totalColumns');
    if (totalColumns) {
      removeClass(masterParent, 'emptyColumns');
    } else {
      addClass(masterParent, 'emptyColumns');
    }
    if (this.wot.getSetting('fixedRowsTop') === 0 && this.wot.getSetting('columnHeaders').length > 0) {
      var previousState = hasClass(masterParent, 'innerBorderTop');
      if (position || this.wot.getSetting('totalRows') === 0) {
        addClass(masterParent, 'innerBorderTop');
      } else {
        removeClass(masterParent, 'innerBorderTop');
      }
      if (!previousState && position || previousState && !position) {
        this.wot.wtOverlays.adjustElementsSize();
      }
    }
    if (this.wot.getSetting('rowHeaders').length === 0) {
      var secondHeaderCell = this.clone.wtTable.THEAD.querySelectorAll('th:nth-of-type(2)');
      if (secondHeaderCell) {
        for (var i = 0; i < secondHeaderCell.length; i++) {
          secondHeaderCell[i].style['border-left-width'] = 0;
        }
      }
    }
  }
}, {}, WalkontableOverlay);
;
window.WalkontableTopOverlay = WalkontableTopOverlay;
WalkontableOverlay.registerOverlay(WalkontableOverlay.CLONE_TOP, WalkontableTopOverlay);

//# 
},{"_base":12,"helpers/dom/element":47}],16:[function(_dereq_,module,exports){
"use strict";
Object.defineProperties(exports, {
  WalkontableTopLeftCornerOverlay: {get: function() {
      return WalkontableTopLeftCornerOverlay;
    }},
  __esModule: {value: true}
});
var $___46__46__47__46__46__47__46__46__47__46__46__47_helpers_47_dom_47_element__,
    $___95_base__;
var $__0 = ($___46__46__47__46__46__47__46__46__47__46__46__47_helpers_47_dom_47_element__ = _dereq_("helpers/dom/element"), $___46__46__47__46__46__47__46__46__47__46__46__47_helpers_47_dom_47_element__ && $___46__46__47__46__46__47__46__46__47__46__46__47_helpers_47_dom_47_element__.__esModule && $___46__46__47__46__46__47__46__46__47__46__46__47_helpers_47_dom_47_element__ || {default: $___46__46__47__46__46__47__46__46__47__46__46__47_helpers_47_dom_47_element__}),
    outerHeight = $__0.outerHeight,
    outerWidth = $__0.outerWidth,
    setOverlayPosition = $__0.setOverlayPosition,
    resetCssTransform = $__0.resetCssTransform;
var WalkontableOverlay = ($___95_base__ = _dereq_("_base"), $___95_base__ && $___95_base__.__esModule && $___95_base__ || {default: $___95_base__}).WalkontableOverlay;
var WalkontableTopLeftCornerOverlay = function WalkontableTopLeftCornerOverlay(wotInstance) {
  $traceurRuntime.superConstructor($WalkontableTopLeftCornerOverlay).call(this, wotInstance);
  this.clone = this.makeClone(WalkontableOverlay.CLONE_TOP_LEFT_CORNER);
};
var $WalkontableTopLeftCornerOverlay = WalkontableTopLeftCornerOverlay;
($traceurRuntime.createClass)(WalkontableTopLeftCornerOverlay, {
  shouldBeRendered: function() {
    return (this.wot.getSetting('fixedRowsTop') || this.wot.getSetting('columnHeaders').length) && (this.wot.getSetting('fixedColumnsLeft') || this.wot.getSetting('rowHeaders').length) ? true : false;
  },
  resetFixedPosition: function() {
    this.updateTrimmingContainer();
    if (!this.wot.wtTable.holder.parentNode) {
      return;
    }
    var overlayRoot = this.clone.wtTable.holder.parentNode;
    var tableHeight = outerHeight(this.clone.wtTable.TABLE);
    var tableWidth = outerWidth(this.clone.wtTable.TABLE);
    var preventOverflow = this.wot.getSetting('preventOverflow');
    if (this.trimmingContainer === window) {
      var box = this.wot.wtTable.hider.getBoundingClientRect();
      var top = Math.ceil(box.top);
      var left = Math.ceil(box.left);
      var bottom = Math.ceil(box.bottom);
      var right = Math.ceil(box.right);
      var finalLeft = '0';
      var finalTop = '0';
      if (!preventOverflow || preventOverflow === 'vertical') {
        if (left < 0 && (right - overlayRoot.offsetWidth) > 0) {
          finalLeft = -left + 'px';
        }
      }
      if (!preventOverflow || preventOverflow === 'horizontal') {
        if (top < 0 && (bottom - overlayRoot.offsetHeight) > 0) {
          finalTop = -top + 'px';
        }
      }
      setOverlayPosition(overlayRoot, finalLeft, finalTop);
    } else {
      resetCssTransform(overlayRoot);
    }
    overlayRoot.style.height = (tableHeight === 0 ? tableHeight : tableHeight + 4) + 'px';
    overlayRoot.style.width = (tableWidth === 0 ? tableWidth : tableWidth + 4) + 'px';
  }
}, {}, WalkontableOverlay);
;
window.WalkontableTopLeftCornerOverlay = WalkontableTopLeftCornerOverlay;
WalkontableOverlay.registerOverlay(WalkontableOverlay.CLONE_TOP_LEFT_CORNER, WalkontableTopLeftCornerOverlay);

//# 
},{"_base":12,"helpers/dom/element":47}],17:[function(_dereq_,module,exports){
"use strict";
Object.defineProperties(exports, {
  WalkontableOverlays: {get: function() {
      return WalkontableOverlays;
    }},
  __esModule: {value: true}
});
var $___46__46__47__46__46__47__46__46__47_helpers_47_dom_47_element__,
    $___46__46__47__46__46__47__46__46__47_helpers_47_array__,
    $___46__46__47__46__46__47__46__46__47_helpers_47_unicode__,
    $___46__46__47__46__46__47__46__46__47_helpers_47_browser__,
    $___46__46__47__46__46__47__46__46__47_eventManager__;
var $__0 = ($___46__46__47__46__46__47__46__46__47_helpers_47_dom_47_element__ = _dereq_("helpers/dom/element"), $___46__46__47__46__46__47__46__46__47_helpers_47_dom_47_element__ && $___46__46__47__46__46__47__46__46__47_helpers_47_dom_47_element__.__esModule && $___46__46__47__46__46__47__46__46__47_helpers_47_dom_47_element__ || {default: $___46__46__47__46__46__47__46__46__47_helpers_47_dom_47_element__}),
    getScrollableElement = $__0.getScrollableElement,
    getScrollbarWidth = $__0.getScrollbarWidth,
    getScrollLeft = $__0.getScrollLeft,
    getScrollTop = $__0.getScrollTop;
var arrayEach = ($___46__46__47__46__46__47__46__46__47_helpers_47_array__ = _dereq_("helpers/array"), $___46__46__47__46__46__47__46__46__47_helpers_47_array__ && $___46__46__47__46__46__47__46__46__47_helpers_47_array__.__esModule && $___46__46__47__46__46__47__46__46__47_helpers_47_array__ || {default: $___46__46__47__46__46__47__46__46__47_helpers_47_array__}).arrayEach;
var isKey = ($___46__46__47__46__46__47__46__46__47_helpers_47_unicode__ = _dereq_("helpers/unicode"), $___46__46__47__46__46__47__46__46__47_helpers_47_unicode__ && $___46__46__47__46__46__47__46__46__47_helpers_47_unicode__.__esModule && $___46__46__47__46__46__47__46__46__47_helpers_47_unicode__ || {default: $___46__46__47__46__46__47__46__46__47_helpers_47_unicode__}).isKey;
var isMobileBrowser = ($___46__46__47__46__46__47__46__46__47_helpers_47_browser__ = _dereq_("helpers/browser"), $___46__46__47__46__46__47__46__46__47_helpers_47_browser__ && $___46__46__47__46__46__47__46__46__47_helpers_47_browser__.__esModule && $___46__46__47__46__46__47__46__46__47_helpers_47_browser__ || {default: $___46__46__47__46__46__47__46__46__47_helpers_47_browser__}).isMobileBrowser;
var EventManager = ($___46__46__47__46__46__47__46__46__47_eventManager__ = _dereq_("eventManager"), $___46__46__47__46__46__47__46__46__47_eventManager__ && $___46__46__47__46__46__47__46__46__47_eventManager__.__esModule && $___46__46__47__46__46__47__46__46__47_eventManager__ || {default: $___46__46__47__46__46__47__46__46__47_eventManager__}).EventManager;
var WalkontableOverlays = function WalkontableOverlays(wotInstance) {
  this.wot = wotInstance;
  this.instance = this.wot;
  this.eventManager = new EventManager(this.wot);
  this.wot.update('scrollbarWidth', getScrollbarWidth());
  this.wot.update('scrollbarHeight', getScrollbarWidth());
  this.scrollableElement = getScrollableElement(this.wot.wtTable.TABLE);
  this.prepareOverlays();
  this.destroyed = false;
  this.keyPressed = false;
  this.spreaderLastSize = {
    width: null,
    height: null
  };
  this.overlayScrollPositions = {
    master: {
      top: 0,
      left: 0
    },
    top: {
      top: null,
      left: 0
    },
    bottom: {
      top: null,
      left: 0
    },
    left: {
      top: 0,
      left: null
    }
  };
  this.pendingScrollCallbacks = {
    master: {
      top: 0,
      left: 0
    },
    top: {left: 0},
    bottom: {left: 0},
    left: {top: 0}
  };
  this.verticalScrolling = false;
  this.horizontalScrolling = false;
  this.delegatedScrollCallback = false;
  this.registeredListeners = [];
  this.registerListeners();
};
($traceurRuntime.createClass)(WalkontableOverlays, {
  prepareOverlays: function() {
    var syncScroll = false;
    if (this.topOverlay) {
      syncScroll = this.topOverlay.updateStateOfRendering() || syncScroll;
    } else {
      this.topOverlay = WalkontableOverlay.createOverlay(WalkontableOverlay.CLONE_TOP, this.wot);
    }
    if (typeof WalkontableBottomOverlay === 'undefined') {
      this.bottomOverlay = {
        needFullRender: false,
        updateStateOfRendering: (function() {
          return false;
        })
      };
    }
    if (typeof WalkontableBottomLeftCornerOverlay === 'undefined') {
      this.bottomLeftCornerOverlay = {
        needFullRender: false,
        updateStateOfRendering: (function() {
          return false;
        })
      };
    }
    if (this.bottomOverlay) {
      syncScroll = this.bottomOverlay.updateStateOfRendering() || syncScroll;
    } else {
      this.bottomOverlay = WalkontableOverlay.createOverlay(WalkontableOverlay.CLONE_BOTTOM, this.wot);
    }
    if (this.leftOverlay) {
      syncScroll = this.leftOverlay.updateStateOfRendering() || syncScroll;
    } else {
      this.leftOverlay = WalkontableOverlay.createOverlay(WalkontableOverlay.CLONE_LEFT, this.wot);
    }
    if (this.topOverlay.needFullRender && this.leftOverlay.needFullRender) {
      if (this.topLeftCornerOverlay) {
        syncScroll = this.topLeftCornerOverlay.updateStateOfRendering() || syncScroll;
      } else {
        this.topLeftCornerOverlay = WalkontableOverlay.createOverlay(WalkontableOverlay.CLONE_TOP_LEFT_CORNER, this.wot);
      }
    }
    if (this.bottomOverlay.needFullRender && this.leftOverlay.needFullRender) {
      if (this.bottomLeftCornerOverlay) {
        syncScroll = this.bottomLeftCornerOverlay.updateStateOfRendering() || syncScroll;
      } else {
        this.bottomLeftCornerOverlay = WalkontableOverlay.createOverlay(WalkontableOverlay.CLONE_BOTTOM_LEFT_CORNER, this.wot);
      }
    }
    if (this.wot.getSetting('debug') && !this.debug) {
      this.debug = WalkontableOverlay.createOverlay(WalkontableOverlay.CLONE_DEBUG, this.wot);
    }
    return syncScroll;
  },
  refreshAll: function() {
    if (!this.wot.drawn) {
      return;
    }
    if (!this.wot.wtTable.holder.parentNode) {
      this.destroy();
      return;
    }
    this.wot.draw(true);
    if (this.verticalScrolling) {
      this.leftOverlay.onScroll();
    }
    if (this.horizontalScrolling) {
      this.topOverlay.onScroll();
    }
    this.verticalScrolling = false;
    this.horizontalScrolling = false;
  },
  registerListeners: function() {
    var $__5 = this;
    var topOverlayScrollable = this.topOverlay.mainTableScrollableElement;
    var leftOverlayScrollable = this.leftOverlay.mainTableScrollableElement;
    var listenersToRegister = [];
    listenersToRegister.push([document.documentElement, 'keydown', (function(event) {
      return $__5.onKeyDown(event);
    })]);
    listenersToRegister.push([document.documentElement, 'keyup', (function() {
      return $__5.onKeyUp();
    })]);
    listenersToRegister.push([document, 'visibilitychange', (function() {
      return $__5.onKeyUp();
    })]);
    listenersToRegister.push([topOverlayScrollable, 'scroll', (function(event) {
      return $__5.onTableScroll(event);
    })]);
    if (topOverlayScrollable !== leftOverlayScrollable) {
      listenersToRegister.push([leftOverlayScrollable, 'scroll', (function(event) {
        return $__5.onTableScroll(event);
      })]);
    }
    if (this.topOverlay.needFullRender) {
      listenersToRegister.push([this.topOverlay.clone.wtTable.holder, 'scroll', (function(event) {
        return $__5.onTableScroll(event);
      })]);
      listenersToRegister.push([this.topOverlay.clone.wtTable.holder, 'wheel', (function(event) {
        return $__5.onTableScroll(event);
      })]);
    }
    if (this.bottomOverlay.needFullRender) {
      listenersToRegister.push([this.bottomOverlay.clone.wtTable.holder, 'scroll', (function(event) {
        return $__5.onTableScroll(event);
      })]);
      listenersToRegister.push([this.bottomOverlay.clone.wtTable.holder, 'wheel', (function(event) {
        return $__5.onTableScroll(event);
      })]);
    }
    if (this.leftOverlay.needFullRender) {
      listenersToRegister.push([this.leftOverlay.clone.wtTable.holder, 'scroll', (function(event) {
        return $__5.onTableScroll(event);
      })]);
      listenersToRegister.push([this.leftOverlay.clone.wtTable.holder, 'wheel', (function(event) {
        return $__5.onTableScroll(event);
      })]);
    }
    if (this.topLeftCornerOverlay && this.topLeftCornerOverlay.needFullRender) {
      listenersToRegister.push([this.topLeftCornerOverlay.clone.wtTable.holder, 'wheel', (function(event) {
        return $__5.onTableScroll(event);
      })]);
    }
    if (this.bottomLeftCornerOverlay && this.bottomLeftCornerOverlay.needFullRender) {
      listenersToRegister.push([this.bottomLeftCornerOverlay.clone.wtTable.holder, 'wheel', (function(event) {
        return $__5.onTableScroll(event);
      })]);
    }
    if (this.topOverlay.trimmingContainer !== window && this.leftOverlay.trimmingContainer !== window) {
      listenersToRegister.push([window, 'wheel', (function(event) {
        var overlay;
        var deltaY = event.wheelDeltaY || event.deltaY;
        var deltaX = event.wheelDeltaX || event.deltaX;
        if ($__5.topOverlay.clone.wtTable.holder.contains(event.realTarget)) {
          overlay = 'top';
        } else if ($__5.bottomOverlay.clone && $__5.bottomOverlay.clone.wtTable.holder.contains(event.realTarget)) {
          overlay = 'bottom';
        } else if ($__5.leftOverlay.clone.wtTable.holder.contains(event.realTarget)) {
          overlay = 'left';
        } else if ($__5.topLeftCornerOverlay && $__5.topLeftCornerOverlay.clone && $__5.topLeftCornerOverlay.clone.wtTable.holder.contains(event.realTarget)) {
          overlay = 'topLeft';
        } else if ($__5.bottomLeftCornerOverlay && $__5.bottomLeftCornerOverlay.clone && $__5.bottomLeftCornerOverlay.clone.wtTable.holder.contains(event.realTarget)) {
          overlay = 'bottomLeft';
        }
        if ((overlay == 'top' && deltaY !== 0) || (overlay == 'left' && deltaX !== 0) || (overlay == 'bottom' && deltaY !== 0) || ((overlay === 'topLeft' || overlay === 'bottomLeft') && (deltaY !== 0 || deltaX !== 0))) {
          event.preventDefault();
        }
      })]);
    }
    while (listenersToRegister.length) {
      var listener = listenersToRegister.pop();
      this.eventManager.addEventListener(listener[0], listener[1], listener[2]);
      this.registeredListeners.push(listener);
    }
  },
  deregisterListeners: function() {
    while (this.registeredListeners.length) {
      var listener = this.registeredListeners.pop();
      this.eventManager.removeEventListener(listener[0], listener[1], listener[2]);
    }
  },
  onTableScroll: function(event) {
    if (isMobileBrowser()) {
      return;
    }
    var masterHorizontal = this.leftOverlay.mainTableScrollableElement;
    var masterVertical = this.topOverlay.mainTableScrollableElement;
    var target = event.target;
    if (this.keyPressed) {
      if ((masterVertical !== window && target !== window && !event.target.contains(masterVertical)) || (masterHorizontal !== window && target !== window && !event.target.contains(masterHorizontal))) {
        return;
      }
    }
    if (event.type === 'scroll') {
      this.syncScrollPositions(event);
    } else {
      this.translateMouseWheelToScroll(event);
    }
  },
  onKeyDown: function(event) {
    this.keyPressed = isKey(event.keyCode, 'ARROW_UP|ARROW_RIGHT|ARROW_DOWN|ARROW_LEFT');
  },
  onKeyUp: function() {
    this.keyPressed = false;
  },
  translateMouseWheelToScroll: function(event) {
    var topOverlay = this.topOverlay.clone.wtTable.holder;
    var bottomOverlay = this.bottomOverlay.clone ? this.bottomOverlay.clone.wtTable.holder : null;
    var leftOverlay = this.leftOverlay.clone.wtTable.holder;
    var topLeftCornerOverlay = this.topLeftCornerOverlay && this.topLeftCornerOverlay.clone ? this.topLeftCornerOverlay.clone.wtTable.holder : null;
    var bottomLeftCornerOverlay = this.bottomLeftCornerOverlay && this.bottomLeftCornerOverlay.clone ? this.bottomLeftCornerOverlay.clone.wtTable.holder : null;
    var mouseWheelSpeedRatio = -0.2;
    var deltaY = event.wheelDeltaY || (-1) * event.deltaY;
    var deltaX = event.wheelDeltaX || (-1) * event.deltaX;
    var parentHolder = null;
    var eventMockup = {type: 'wheel'};
    var tempElem = event.target;
    var delta = null;
    if (event.deltaMode === 1) {
      deltaY = deltaY * 120;
      deltaX = deltaX * 120;
    }
    while (tempElem != document && tempElem != null) {
      if (tempElem.className.indexOf('wtHolder') > -1) {
        parentHolder = tempElem;
        break;
      }
      tempElem = tempElem.parentNode;
    }
    eventMockup.target = parentHolder;
    if (parentHolder === topLeftCornerOverlay || parentHolder === bottomLeftCornerOverlay) {
      this.syncScrollPositions(eventMockup, mouseWheelSpeedRatio * deltaX, 'x');
      this.syncScrollPositions(eventMockup, mouseWheelSpeedRatio * deltaY, 'y');
    } else {
      if (parentHolder === topOverlay || parentHolder === bottomOverlay) {
        delta = deltaY;
      } else if (parentHolder === leftOverlay) {
        delta = deltaX;
      }
      this.syncScrollPositions(eventMockup, mouseWheelSpeedRatio * delta);
    }
    return false;
  },
  syncScrollPositions: function(event) {
    var fakeScrollValue = arguments[1] !== (void 0) ? arguments[1] : null;
    var fakeScrollDirection = arguments[2] !== (void 0) ? arguments[2] : null;
    if (this.destroyed) {
      return;
    }
    if (arguments.length === 0) {
      this.syncScrollWithMaster();
      return;
    }
    var masterHorizontal = this.leftOverlay.mainTableScrollableElement;
    var masterVertical = this.topOverlay.mainTableScrollableElement;
    var target = event.target;
    var tempScrollValue = 0;
    var scrollValueChanged = false;
    var topOverlay;
    var leftOverlay;
    var topLeftCornerOverlay;
    var bottomLeftCornerOverlay;
    var bottomOverlay;
    var delegatedScroll = false;
    var preventOverflow = this.wot.getSetting('preventOverflow');
    if (this.topOverlay.needFullRender) {
      topOverlay = this.topOverlay.clone.wtTable.holder;
    }
    if (this.bottomOverlay.needFullRender) {
      bottomOverlay = this.bottomOverlay.clone.wtTable.holder;
    }
    if (this.leftOverlay.needFullRender) {
      leftOverlay = this.leftOverlay.clone.wtTable.holder;
    }
    if (this.leftOverlay.needFullRender && this.topOverlay.needFullRender) {
      topLeftCornerOverlay = this.topLeftCornerOverlay.clone.wtTable.holder;
    }
    if (this.leftOverlay.needFullRender && this.bottomOverlay.needFullRender) {
      bottomLeftCornerOverlay = this.bottomLeftCornerOverlay.clone.wtTable.holder;
    }
    if (target === document) {
      target = window;
    }
    if (target === masterHorizontal || target === masterVertical) {
      if (preventOverflow) {
        tempScrollValue = getScrollLeft(this.scrollableElement);
      } else {
        tempScrollValue = getScrollLeft(target);
      }
      this.horizontalScrolling = true;
      this.overlayScrollPositions.master.left = tempScrollValue;
      scrollValueChanged = true;
      if (this.pendingScrollCallbacks.master.left > 0) {
        this.pendingScrollCallbacks.master.left--;
      } else {
        if (topOverlay && topOverlay.scrollLeft !== tempScrollValue) {
          if (fakeScrollValue == null) {
            this.pendingScrollCallbacks.top.left++;
          }
          topOverlay.scrollLeft = tempScrollValue;
          delegatedScroll = (masterHorizontal !== window);
        }
        if (bottomOverlay && bottomOverlay.scrollLeft !== tempScrollValue) {
          if (fakeScrollValue == null) {
            this.pendingScrollCallbacks.bottom.left++;
          }
          bottomOverlay.scrollLeft = tempScrollValue;
          delegatedScroll = (masterHorizontal !== window);
        }
      }
      tempScrollValue = getScrollTop(target);
      this.verticalScrolling = true;
      this.overlayScrollPositions.master.top = tempScrollValue;
      scrollValueChanged = true;
      if (this.pendingScrollCallbacks.master.top > 0) {
        this.pendingScrollCallbacks.master.top--;
      } else {
        if (leftOverlay && leftOverlay.scrollTop !== tempScrollValue) {
          if (fakeScrollValue == null) {
            this.pendingScrollCallbacks.left.top++;
          }
          leftOverlay.scrollTop = tempScrollValue;
          delegatedScroll = (masterVertical !== window);
        }
      }
    } else if (target === bottomOverlay) {
      tempScrollValue = getScrollLeft(target);
      this.horizontalScrolling = true;
      this.overlayScrollPositions.bottom.left = tempScrollValue;
      scrollValueChanged = true;
      if (this.pendingScrollCallbacks.bottom.left > 0) {
        this.pendingScrollCallbacks.bottom.left--;
      } else {
        if (fakeScrollValue == null) {
          this.pendingScrollCallbacks.master.left++;
        }
        masterHorizontal.scrollLeft = tempScrollValue;
        if (topOverlay && topOverlay.scrollLeft !== tempScrollValue) {
          if (fakeScrollValue == null) {
            this.pendingScrollCallbacks.top.left++;
          }
          topOverlay.scrollLeft = tempScrollValue;
          delegatedScroll = (masterVertical !== window);
        }
      }
      if (fakeScrollValue !== null) {
        scrollValueChanged = true;
        masterVertical.scrollTop += fakeScrollValue;
      }
    } else if (target === topOverlay) {
      tempScrollValue = getScrollLeft(target);
      this.horizontalScrolling = true;
      this.overlayScrollPositions.top.left = tempScrollValue;
      scrollValueChanged = true;
      if (this.pendingScrollCallbacks.top.left > 0) {
        this.pendingScrollCallbacks.top.left--;
      } else {
        if (fakeScrollValue == null) {
          this.pendingScrollCallbacks.master.left++;
        }
        masterHorizontal.scrollLeft = tempScrollValue;
      }
      if (fakeScrollValue !== null) {
        scrollValueChanged = true;
        masterVertical.scrollTop += fakeScrollValue;
      }
      if (bottomOverlay && bottomOverlay.scrollLeft !== tempScrollValue) {
        if (fakeScrollValue == null) {
          this.pendingScrollCallbacks.bottom.left++;
        }
        bottomOverlay.scrollLeft = tempScrollValue;
        delegatedScroll = (masterVertical !== window);
      }
    } else if (target === leftOverlay) {
      tempScrollValue = getScrollTop(target);
      if (this.overlayScrollPositions.left.top !== tempScrollValue) {
        this.verticalScrolling = true;
        this.overlayScrollPositions.left.top = tempScrollValue;
        scrollValueChanged = true;
        if (this.pendingScrollCallbacks.left.top > 0) {
          this.pendingScrollCallbacks.left.top--;
        } else {
          if (fakeScrollValue == null) {
            this.pendingScrollCallbacks.master.top++;
          }
          masterVertical.scrollTop = tempScrollValue;
        }
      }
      if (fakeScrollValue !== null) {
        scrollValueChanged = true;
        masterVertical.scrollLeft += fakeScrollValue;
      }
    } else if (target === topLeftCornerOverlay || target === bottomLeftCornerOverlay) {
      if (fakeScrollValue !== null) {
        scrollValueChanged = true;
        if (fakeScrollDirection === 'x') {
          masterVertical.scrollLeft += fakeScrollValue;
        } else if (fakeScrollDirection === 'y') {
          masterVertical.scrollTop += fakeScrollValue;
        }
      }
    }
    if (!this.keyPressed && scrollValueChanged && event.type === 'scroll') {
      if (this.delegatedScrollCallback) {
        this.delegatedScrollCallback = false;
      } else {
        this.refreshAll();
      }
      if (delegatedScroll) {
        this.delegatedScrollCallback = true;
      }
    }
  },
  syncScrollWithMaster: function() {
    var master = this.topOverlay.mainTableScrollableElement;
    var $__7 = master,
        scrollLeft = $__7.scrollLeft,
        scrollTop = $__7.scrollTop;
    if (this.topOverlay.needFullRender) {
      this.topOverlay.clone.wtTable.holder.scrollLeft = scrollLeft;
    }
    if (this.bottomOverlay.needFullRender) {
      this.bottomOverlay.clone.wtTable.holder.scrollLeft = scrollLeft;
    }
    if (this.leftOverlay.needFullRender) {
      this.leftOverlay.clone.wtTable.holder.scrollTop = scrollTop;
    }
  },
  updateMainScrollableElements: function() {
    this.deregisterListeners();
    this.leftOverlay.updateMainScrollableElement();
    this.topOverlay.updateMainScrollableElement();
    if (this.bottomOverlay.needFullRender) {
      this.bottomOverlay.updateMainScrollableElement();
    }
    this.scrollableElement = getScrollableElement(this.wot.wtTable.TABLE);
    this.registerListeners();
  },
  destroy: function() {
    this.eventManager.destroy();
    this.topOverlay.destroy();
    if (this.bottomOverlay.clone) {
      this.bottomOverlay.destroy();
    }
    this.leftOverlay.destroy();
    if (this.topLeftCornerOverlay) {
      this.topLeftCornerOverlay.destroy();
    }
    if (this.bottomLeftCornerOverlay && this.bottomLeftCornerOverlay.clone) {
      this.bottomLeftCornerOverlay.destroy();
    }
    if (this.debug) {
      this.debug.destroy();
    }
    this.destroyed = true;
  },
  refresh: function() {
    var fastDraw = arguments[0] !== (void 0) ? arguments[0] : false;
    if (this.topOverlay.areElementSizesAdjusted && this.leftOverlay.areElementSizesAdjusted) {
      var container = this.wot.wtTable.wtRootElement.parentNode || this.wot.wtTable.wtRootElement;
      var width = container.clientWidth;
      var height = container.clientHeight;
      if (width !== this.spreaderLastSize.width || height !== this.spreaderLastSize.height) {
        this.spreaderLastSize.width = width;
        this.spreaderLastSize.height = height;
        this.adjustElementsSize();
      }
    }
    if (this.bottomOverlay.clone) {
      this.bottomOverlay.refresh(fastDraw);
    }
    this.leftOverlay.refresh(fastDraw);
    this.topOverlay.refresh(fastDraw);
    if (this.topLeftCornerOverlay) {
      this.topLeftCornerOverlay.refresh(fastDraw);
    }
    if (this.bottomLeftCornerOverlay && this.bottomLeftCornerOverlay.clone) {
      this.bottomLeftCornerOverlay.refresh(fastDraw);
    }
    if (this.debug) {
      this.debug.refresh(fastDraw);
    }
  },
  adjustElementsSize: function() {
    var force = arguments[0] !== (void 0) ? arguments[0] : false;
    var totalColumns = this.wot.getSetting('totalColumns');
    var totalRows = this.wot.getSetting('totalRows');
    var headerRowSize = this.wot.wtViewport.getRowHeaderWidth();
    var headerColumnSize = this.wot.wtViewport.getColumnHeaderHeight();
    var hiderStyle = this.wot.wtTable.hider.style;
    hiderStyle.width = (headerRowSize + this.leftOverlay.sumCellSizes(0, totalColumns)) + 'px';
    hiderStyle.height = (headerColumnSize + this.topOverlay.sumCellSizes(0, totalRows) + 1) + 'px';
    this.topOverlay.adjustElementsSize(force);
    this.leftOverlay.adjustElementsSize(force);
    if (this.bottomOverlay.clone) {
      this.bottomOverlay.adjustElementsSize(force);
    }
  },
  applyToDOM: function() {
    if (!this.topOverlay.areElementSizesAdjusted || !this.leftOverlay.areElementSizesAdjusted) {
      this.adjustElementsSize();
    }
    this.topOverlay.applyToDOM();
    if (this.bottomOverlay.clone) {
      this.bottomOverlay.applyToDOM();
    }
    this.leftOverlay.applyToDOM();
  },
  getParentOverlay: function(element) {
    if (!element) {
      return null;
    }
    var overlays = [this.topOverlay, this.leftOverlay, this.bottomOverlay, this.topLeftCornerOverlay, this.bottomLeftCornerOverlay];
    var result = null;
    arrayEach(overlays, (function(elem, i) {
      if (!elem) {
        return;
      }
      if (elem.clone && elem.clone.wtTable.TABLE.contains(element)) {
        result = elem.clone;
      }
    }));
    return result;
  }
}, {});
;
window.WalkontableOverlays = WalkontableOverlays;

//# 
},{"eventManager":42,"helpers/array":43,"helpers/browser":44,"helpers/dom/element":47,"helpers/unicode":56}],18:[function(_dereq_,module,exports){
"use strict";
Object.defineProperties(exports, {
  WalkontableScroll: {get: function() {
      return WalkontableScroll;
    }},
  __esModule: {value: true}
});
var $___46__46__47__46__46__47__46__46__47_helpers_47_dom_47_element__,
    $___46__46__47__46__46__47__46__46__47_helpers_47_number__;
var $__0 = ($___46__46__47__46__46__47__46__46__47_helpers_47_dom_47_element__ = _dereq_("helpers/dom/element"), $___46__46__47__46__46__47__46__46__47_helpers_47_dom_47_element__ && $___46__46__47__46__46__47__46__46__47_helpers_47_dom_47_element__.__esModule && $___46__46__47__46__46__47__46__46__47_helpers_47_dom_47_element__ || {default: $___46__46__47__46__46__47__46__46__47_helpers_47_dom_47_element__}),
    innerHeight = $__0.innerHeight,
    innerWidth = $__0.innerWidth,
    getScrollLeft = $__0.getScrollLeft,
    getScrollTop = $__0.getScrollTop,
    offset = $__0.offset;
var $__1 = ($___46__46__47__46__46__47__46__46__47_helpers_47_number__ = _dereq_("helpers/number"), $___46__46__47__46__46__47__46__46__47_helpers_47_number__ && $___46__46__47__46__46__47__46__46__47_helpers_47_number__.__esModule && $___46__46__47__46__46__47__46__46__47_helpers_47_number__ || {default: $___46__46__47__46__46__47__46__46__47_helpers_47_number__}),
    rangeEach = $__1.rangeEach,
    rangeEachReverse = $__1.rangeEachReverse;
var WalkontableScroll = function WalkontableScroll(wotInstance) {
  this.wot = wotInstance;
  this.instance = wotInstance;
};
($traceurRuntime.createClass)(WalkontableScroll, {
  scrollViewport: function(coords) {
    if (!this.wot.drawn) {
      return;
    }
    var $__3 = this._getVariables(),
        topOverlay = $__3.topOverlay,
        leftOverlay = $__3.leftOverlay,
        totalRows = $__3.totalRows,
        totalColumns = $__3.totalColumns,
        fixedRowsTop = $__3.fixedRowsTop,
        fixedRowsBottom = $__3.fixedRowsBottom,
        fixedColumnsLeft = $__3.fixedColumnsLeft;
    if (coords.row < 0 || coords.row > Math.max(totalRows - 1, 0)) {
      throw new Error(("row " + coords.row + " does not exist"));
    }
    if (coords.col < 0 || coords.col > Math.max(totalColumns - 1, 0)) {
      throw new Error(("column " + coords.col + " does not exist"));
    }
    if (coords.row >= fixedRowsTop && coords.row < this.getFirstVisibleRow()) {
      topOverlay.scrollTo(coords.row);
    } else if (coords.row > this.getLastVisibleRow() && coords.row < totalRows - fixedRowsBottom) {
      topOverlay.scrollTo(coords.row, true);
    }
    if (coords.col >= fixedColumnsLeft && coords.col < this.getFirstVisibleColumn()) {
      leftOverlay.scrollTo(coords.col);
    } else if (coords.col > this.getLastVisibleColumn()) {
      leftOverlay.scrollTo(coords.col, true);
    }
  },
  getFirstVisibleRow: function() {
    var $__3 = this._getVariables(),
        topOverlay = $__3.topOverlay,
        wtTable = $__3.wtTable,
        wtViewport = $__3.wtViewport,
        totalRows = $__3.totalRows,
        fixedRowsTop = $__3.fixedRowsTop;
    var firstVisibleRow = wtTable.getFirstVisibleRow();
    if (topOverlay.mainTableScrollableElement === window) {
      var rootElementOffset = offset(wtTable.wtRootElement);
      var totalTableHeight = innerHeight(wtTable.hider);
      var windowHeight = innerHeight(window);
      var windowScrollTop = getScrollTop(window);
      if (rootElementOffset.top + totalTableHeight - windowHeight <= windowScrollTop) {
        var rowsHeight = wtViewport.getColumnHeaderHeight();
        rowsHeight += topOverlay.sumCellSizes(0, fixedRowsTop);
        rangeEachReverse(totalRows, 1, (function(row) {
          rowsHeight += topOverlay.sumCellSizes(row - 1, row);
          if (rootElementOffset.top + totalTableHeight - rowsHeight <= windowScrollTop) {
            firstVisibleRow = row;
            return false;
          }
        }));
      }
    }
    return firstVisibleRow;
  },
  getLastVisibleRow: function() {
    var $__3 = this._getVariables(),
        topOverlay = $__3.topOverlay,
        wtTable = $__3.wtTable,
        wtViewport = $__3.wtViewport,
        totalRows = $__3.totalRows;
    var lastVisibleRow = wtTable.getLastVisibleRow();
    if (topOverlay.mainTableScrollableElement === window) {
      var rootElementOffset = offset(wtTable.wtRootElement);
      var windowHeight = innerHeight(window);
      var windowScrollTop = getScrollTop(window);
      if (rootElementOffset.top > windowScrollTop) {
        var rowsHeight = wtViewport.getColumnHeaderHeight();
        rangeEach(1, totalRows, (function(row) {
          rowsHeight += topOverlay.sumCellSizes(row - 1, row);
          if (rootElementOffset.top + rowsHeight - windowScrollTop >= windowHeight) {
            lastVisibleRow = row - 2;
            return false;
          }
        }));
      }
    }
    return lastVisibleRow;
  },
  getFirstVisibleColumn: function() {
    var $__3 = this._getVariables(),
        leftOverlay = $__3.leftOverlay,
        wtTable = $__3.wtTable,
        wtViewport = $__3.wtViewport,
        totalColumns = $__3.totalColumns,
        fixedColumnsLeft = $__3.fixedColumnsLeft;
    var firstVisibleColumn = wtTable.getFirstVisibleColumn();
    if (leftOverlay.mainTableScrollableElement === window) {
      var rootElementOffset = offset(wtTable.wtRootElement);
      var totalTableWidth = innerWidth(wtTable.hider);
      var windowWidth = innerWidth(window);
      var windowScrollLeft = getScrollLeft(window);
      if (rootElementOffset.left + totalTableWidth - windowWidth <= windowScrollLeft) {
        var columnsWidth = wtViewport.getRowHeaderWidth();
        rangeEachReverse(totalColumns, 1, (function(column) {
          columnsWidth += leftOverlay.sumCellSizes(column - 1, column);
          if (rootElementOffset.left + totalTableWidth - columnsWidth <= windowScrollLeft) {
            firstVisibleColumn = column;
            return false;
          }
        }));
      }
    }
    return firstVisibleColumn;
  },
  getLastVisibleColumn: function() {
    var $__3 = this._getVariables(),
        leftOverlay = $__3.leftOverlay,
        wtTable = $__3.wtTable,
        wtViewport = $__3.wtViewport,
        totalColumns = $__3.totalColumns;
    var lastVisibleColumn = wtTable.getLastVisibleColumn();
    if (leftOverlay.mainTableScrollableElement === window) {
      var rootElementOffset = offset(wtTable.wtRootElement);
      var windowWidth = innerWidth(window);
      var windowScrollLeft = getScrollLeft(window);
      if (rootElementOffset.left > windowScrollLeft) {
        var columnsWidth = wtViewport.getRowHeaderWidth();
        rangeEach(1, totalColumns, (function(column) {
          columnsWidth += leftOverlay.sumCellSizes(column - 1, column);
          if (rootElementOffset.left + columnsWidth - windowScrollLeft >= windowWidth) {
            lastVisibleColumn = column - 2;
            return false;
          }
        }));
      }
    }
    return lastVisibleColumn;
  },
  _getVariables: function() {
    var wot = this.wot;
    var topOverlay = wot.wtOverlays.topOverlay;
    var leftOverlay = wot.wtOverlays.leftOverlay;
    var wtTable = wot.wtTable;
    var wtViewport = wot.wtViewport;
    var totalRows = wot.getSetting('totalRows');
    var totalColumns = wot.getSetting('totalColumns');
    var fixedRowsTop = wot.getSetting('fixedRowsTop');
    var fixedRowsBottom = wot.getSetting('fixedRowsBottom');
    var fixedColumnsLeft = wot.getSetting('fixedColumnsLeft');
    return {
      topOverlay: topOverlay,
      leftOverlay: leftOverlay,
      wtTable: wtTable,
      wtViewport: wtViewport,
      totalRows: totalRows,
      totalColumns: totalColumns,
      fixedRowsTop: fixedRowsTop,
      fixedRowsBottom: fixedRowsBottom,
      fixedColumnsLeft: fixedColumnsLeft
    };
  }
}, {});
;
window.WalkontableScroll = WalkontableScroll;

//# 
},{"helpers/dom/element":47,"helpers/number":52}],19:[function(_dereq_,module,exports){
"use strict";
Object.defineProperties(exports, {
  WalkontableSelection: {get: function() {
      return WalkontableSelection;
    }},
  __esModule: {value: true}
});
var $___46__46__47__46__46__47__46__46__47_helpers_47_dom_47_element__,
    $__border__,
    $__cell_47_coords__,
    $__cell_47_range__;
var addClass = ($___46__46__47__46__46__47__46__46__47_helpers_47_dom_47_element__ = _dereq_("helpers/dom/element"), $___46__46__47__46__46__47__46__46__47_helpers_47_dom_47_element__ && $___46__46__47__46__46__47__46__46__47_helpers_47_dom_47_element__.__esModule && $___46__46__47__46__46__47__46__46__47_helpers_47_dom_47_element__ || {default: $___46__46__47__46__46__47__46__46__47_helpers_47_dom_47_element__}).addClass;
var WalkontableBorder = ($__border__ = _dereq_("border"), $__border__ && $__border__.__esModule && $__border__ || {default: $__border__}).WalkontableBorder;
var WalkontableCellCoords = ($__cell_47_coords__ = _dereq_("cell/coords"), $__cell_47_coords__ && $__cell_47_coords__.__esModule && $__cell_47_coords__ || {default: $__cell_47_coords__}).WalkontableCellCoords;
var WalkontableCellRange = ($__cell_47_range__ = _dereq_("cell/range"), $__cell_47_range__ && $__cell_47_range__.__esModule && $__cell_47_range__ || {default: $__cell_47_range__}).WalkontableCellRange;
var WalkontableSelection = function WalkontableSelection(settings, cellRange) {
  this.settings = settings;
  this.cellRange = cellRange || null;
  this.instanceBorders = {};
};
($traceurRuntime.createClass)(WalkontableSelection, {
  getBorder: function(wotInstance) {
    if (this.instanceBorders[wotInstance.guid]) {
      return this.instanceBorders[wotInstance.guid];
    }
    this.instanceBorders[wotInstance.guid] = new WalkontableBorder(wotInstance, this.settings);
  },
  isEmpty: function() {
    return this.cellRange === null;
  },
  add: function(coords) {
    if (this.isEmpty()) {
      this.cellRange = new WalkontableCellRange(coords, coords, coords);
    } else {
      this.cellRange.expand(coords);
    }
  },
  replace: function(oldCoords, newCoords) {
    if (!this.isEmpty()) {
      if (this.cellRange.from.isEqual(oldCoords)) {
        this.cellRange.from = newCoords;
        return true;
      }
      if (this.cellRange.to.isEqual(oldCoords)) {
        this.cellRange.to = newCoords;
        return true;
      }
    }
    return false;
  },
  clear: function() {
    this.cellRange = null;
  },
  getCorners: function() {
    var topLeft = this.cellRange.getTopLeftCorner();
    var bottomRight = this.cellRange.getBottomRightCorner();
    return [topLeft.row, topLeft.col, bottomRight.row, bottomRight.col];
  },
  addClassAtCoords: function(wotInstance, sourceRow, sourceColumn, className) {
    var TD = wotInstance.wtTable.getCell(new WalkontableCellCoords(sourceRow, sourceColumn));
    if (typeof TD === 'object') {
      addClass(TD, className);
    }
  },
  draw: function(wotInstance) {
    if (this.isEmpty()) {
      if (this.settings.border) {
        var border = this.getBorder(wotInstance);
        if (border) {
          border.disappear();
        }
      }
      return;
    }
    var renderedRows = wotInstance.wtTable.getRenderedRowsCount();
    var renderedColumns = wotInstance.wtTable.getRenderedColumnsCount();
    var corners = this.getCorners();
    var sourceRow,
        sourceCol,
        TH;
    for (var column = 0; column < renderedColumns; column++) {
      sourceCol = wotInstance.wtTable.columnFilter.renderedToSource(column);
      if (sourceCol >= corners[1] && sourceCol <= corners[3]) {
        TH = wotInstance.wtTable.getColumnHeader(sourceCol);
        if (TH) {
          var newClasses = [];
          if (this.settings.highlightHeaderClassName) {
            newClasses.push(this.settings.highlightHeaderClassName);
          }
          if (this.settings.highlightColumnClassName) {
            newClasses.push(this.settings.highlightColumnClassName);
          }
          addClass(TH, newClasses);
        }
      }
    }
    for (var row = 0; row < renderedRows; row++) {
      sourceRow = wotInstance.wtTable.rowFilter.renderedToSource(row);
      if (sourceRow >= corners[0] && sourceRow <= corners[2]) {
        TH = wotInstance.wtTable.getRowHeader(sourceRow);
        if (TH) {
          var newClasses$__5 = [];
          if (this.settings.highlightHeaderClassName) {
            newClasses$__5.push(this.settings.highlightHeaderClassName);
          }
          if (this.settings.highlightRowClassName) {
            newClasses$__5.push(this.settings.highlightRowClassName);
          }
          addClass(TH, newClasses$__5);
        }
      }
      for (var column$__6 = 0; column$__6 < renderedColumns; column$__6++) {
        sourceCol = wotInstance.wtTable.columnFilter.renderedToSource(column$__6);
        if (sourceRow >= corners[0] && sourceRow <= corners[2] && sourceCol >= corners[1] && sourceCol <= corners[3]) {
          if (this.settings.className) {
            this.addClassAtCoords(wotInstance, sourceRow, sourceCol, this.settings.className);
          }
        } else if (sourceRow >= corners[0] && sourceRow <= corners[2]) {
          if (this.settings.highlightRowClassName) {
            this.addClassAtCoords(wotInstance, sourceRow, sourceCol, this.settings.highlightRowClassName);
          }
        } else if (sourceCol >= corners[1] && sourceCol <= corners[3]) {
          if (this.settings.highlightColumnClassName) {
            this.addClassAtCoords(wotInstance, sourceRow, sourceCol, this.settings.highlightColumnClassName);
          }
        }
      }
    }
    wotInstance.getSetting('onBeforeDrawBorders', corners, this.settings.className);
    if (this.settings.border) {
      var border$__7 = this.getBorder(wotInstance);
      if (border$__7) {
        border$__7.appear(corners);
      }
    }
  }
}, {});
;
window.WalkontableSelection = WalkontableSelection;

//# 
},{"border":3,"cell/coords":6,"cell/range":7,"helpers/dom/element":47}],20:[function(_dereq_,module,exports){
"use strict";
Object.defineProperties(exports, {
  WalkontableSettings: {get: function() {
      return WalkontableSettings;
    }},
  __esModule: {value: true}
});
var $___46__46__47__46__46__47__46__46__47_helpers_47_dom_47_element__;
var fastInnerText = ($___46__46__47__46__46__47__46__46__47_helpers_47_dom_47_element__ = _dereq_("helpers/dom/element"), $___46__46__47__46__46__47__46__46__47_helpers_47_dom_47_element__ && $___46__46__47__46__46__47__46__46__47_helpers_47_dom_47_element__.__esModule && $___46__46__47__46__46__47__46__46__47_helpers_47_dom_47_element__ || {default: $___46__46__47__46__46__47__46__46__47_helpers_47_dom_47_element__}).fastInnerText;
var WalkontableSettings = function WalkontableSettings(wotInstance, settings) {
  var $__1 = this;
  this.wot = wotInstance;
  this.instance = wotInstance;
  this.defaults = {
    table: void 0,
    debug: false,
    externalRowCalculator: false,
    stretchH: 'none',
    currentRowClassName: null,
    currentColumnClassName: null,
    preventOverflow: function() {
      return false;
    },
    data: void 0,
    fixedColumnsLeft: 0,
    fixedRowsTop: 0,
    fixedRowsBottom: 0,
    minSpareRows: 0,
    rowHeaders: function() {
      return [];
    },
    columnHeaders: function() {
      return [];
    },
    totalRows: void 0,
    totalColumns: void 0,
    cellRenderer: (function(row, column, TD) {
      var cellData = $__1.getSetting('data', row, column);
      fastInnerText(TD, cellData === void 0 || cellData === null ? '' : cellData);
    }),
    columnWidth: function(col) {
      return;
    },
    rowHeight: function(row) {
      return;
    },
    defaultRowHeight: 23,
    defaultColumnWidth: 50,
    selections: null,
    hideBorderOnMouseDownOver: false,
    viewportRowCalculatorOverride: null,
    viewportColumnCalculatorOverride: null,
    onCellMouseDown: null,
    onCellMouseOver: null,
    onCellMouseUp: null,
    onCellDblClick: null,
    onCellCornerMouseDown: null,
    onCellCornerDblClick: null,
    beforeDraw: null,
    onDraw: null,
    onBeforeDrawBorders: null,
    onScrollVertically: null,
    onScrollHorizontally: null,
    onBeforeTouchScroll: null,
    onAfterMomentumScroll: null,
    onBeforeStretchingColumnWidth: (function(width) {
      return width;
    }),
    onModifyRowHeaderWidth: null,
    scrollbarWidth: 10,
    scrollbarHeight: 10,
    renderAllRows: false,
    groups: false,
    rowHeaderWidth: null,
    columnHeaderHeight: null,
    headerClassName: null
  };
  this.settings = {};
  for (var i in this.defaults) {
    if (this.defaults.hasOwnProperty(i)) {
      if (settings[i] !== void 0) {
        this.settings[i] = settings[i];
      } else if (this.defaults[i] === void 0) {
        throw new Error('A required setting "' + i + '" was not provided');
      } else {
        this.settings[i] = this.defaults[i];
      }
    }
  }
};
($traceurRuntime.createClass)(WalkontableSettings, {
  update: function(settings, value) {
    if (value === void 0) {
      for (var i in settings) {
        if (settings.hasOwnProperty(i)) {
          this.settings[i] = settings[i];
        }
      }
    } else {
      this.settings[settings] = value;
    }
    return this.wot;
  },
  getSetting: function(key, param1, param2, param3, param4) {
    if (typeof this.settings[key] === 'function') {
      return this.settings[key](param1, param2, param3, param4);
    } else if (param1 !== void 0 && Array.isArray(this.settings[key])) {
      return this.settings[key][param1];
    } else {
      return this.settings[key];
    }
  },
  has: function(key) {
    return !!this.settings[key];
  }
}, {});
;
window.WalkontableSettings = WalkontableSettings;

//# 
},{"helpers/dom/element":47}],21:[function(_dereq_,module,exports){
"use strict";
Object.defineProperties(exports, {
  WalkontableTable: {get: function() {
      return WalkontableTable;
    }},
  __esModule: {value: true}
});
var $___46__46__47__46__46__47__46__46__47_helpers_47_dom_47_element__,
    $___46__46__47__46__46__47__46__46__47_helpers_47_function__,
    $__cell_47_coords__,
    $__cell_47_range__,
    $__filter_47_column__,
    $__filter_47_row__,
    $__tableRenderer__;
var $__0 = ($___46__46__47__46__46__47__46__46__47_helpers_47_dom_47_element__ = _dereq_("helpers/dom/element"), $___46__46__47__46__46__47__46__46__47_helpers_47_dom_47_element__ && $___46__46__47__46__46__47__46__46__47_helpers_47_dom_47_element__.__esModule && $___46__46__47__46__46__47__46__46__47_helpers_47_dom_47_element__ || {default: $___46__46__47__46__46__47__46__46__47_helpers_47_dom_47_element__}),
    getStyle = $__0.getStyle,
    getTrimmingContainer = $__0.getTrimmingContainer,
    hasClass = $__0.hasClass,
    index = $__0.index,
    offset = $__0.offset,
    removeClass = $__0.removeClass,
    removeTextNodes = $__0.removeTextNodes,
    overlayContainsElement = $__0.overlayContainsElement,
    closest = $__0.closest;
var isFunction = ($___46__46__47__46__46__47__46__46__47_helpers_47_function__ = _dereq_("helpers/function"), $___46__46__47__46__46__47__46__46__47_helpers_47_function__ && $___46__46__47__46__46__47__46__46__47_helpers_47_function__.__esModule && $___46__46__47__46__46__47__46__46__47_helpers_47_function__ || {default: $___46__46__47__46__46__47__46__46__47_helpers_47_function__}).isFunction;
var WalkontableCellCoords = ($__cell_47_coords__ = _dereq_("cell/coords"), $__cell_47_coords__ && $__cell_47_coords__.__esModule && $__cell_47_coords__ || {default: $__cell_47_coords__}).WalkontableCellCoords;
var WalkontableCellRange = ($__cell_47_range__ = _dereq_("cell/range"), $__cell_47_range__ && $__cell_47_range__.__esModule && $__cell_47_range__ || {default: $__cell_47_range__}).WalkontableCellRange;
var WalkontableColumnFilter = ($__filter_47_column__ = _dereq_("filter/column"), $__filter_47_column__ && $__filter_47_column__.__esModule && $__filter_47_column__ || {default: $__filter_47_column__}).WalkontableColumnFilter;
var WalkontableRowFilter = ($__filter_47_row__ = _dereq_("filter/row"), $__filter_47_row__ && $__filter_47_row__.__esModule && $__filter_47_row__ || {default: $__filter_47_row__}).WalkontableRowFilter;
var WalkontableTableRenderer = ($__tableRenderer__ = _dereq_("tableRenderer"), $__tableRenderer__ && $__tableRenderer__.__esModule && $__tableRenderer__ || {default: $__tableRenderer__}).WalkontableTableRenderer;
var WalkontableTable = function WalkontableTable(wotInstance, table) {
  var $__7 = this;
  this.wot = wotInstance;
  this.instance = this.wot;
  this.TABLE = table;
  this.TBODY = null;
  this.THEAD = null;
  this.COLGROUP = null;
  this.tableOffset = 0;
  this.holderOffset = 0;
  removeTextNodes(this.TABLE);
  this.spreader = this.createSpreader(this.TABLE);
  this.hider = this.createHider(this.spreader);
  this.holder = this.createHolder(this.hider);
  this.wtRootElement = this.holder.parentNode;
  this.alignOverlaysWithTrimmingContainer();
  this.fixTableDomTree();
  this.colgroupChildrenLength = this.COLGROUP.childNodes.length;
  this.theadChildrenLength = this.THEAD.firstChild ? this.THEAD.firstChild.childNodes.length : 0;
  this.tbodyChildrenLength = this.TBODY.childNodes.length;
  this.rowFilter = null;
  this.columnFilter = null;
  this.correctHeaderWidth = false;
  var origRowHeaderWidth = this.wot.wtSettings.settings.rowHeaderWidth;
  this.wot.wtSettings.settings.rowHeaderWidth = (function() {
    return $__7._modifyRowHeaderWidth(origRowHeaderWidth);
  });
};
($traceurRuntime.createClass)(WalkontableTable, {
  fixTableDomTree: function() {
    this.TBODY = this.TABLE.querySelector('tbody');
    if (!this.TBODY) {
      this.TBODY = document.createElement('tbody');
      this.TABLE.appendChild(this.TBODY);
    }
    this.THEAD = this.TABLE.querySelector('thead');
    if (!this.THEAD) {
      this.THEAD = document.createElement('thead');
      this.TABLE.insertBefore(this.THEAD, this.TBODY);
    }
    this.COLGROUP = this.TABLE.querySelector('colgroup');
    if (!this.COLGROUP) {
      this.COLGROUP = document.createElement('colgroup');
      this.TABLE.insertBefore(this.COLGROUP, this.THEAD);
    }
    if (this.wot.getSetting('columnHeaders').length && !this.THEAD.childNodes.length) {
      this.THEAD.appendChild(document.createElement('TR'));
    }
  },
  createSpreader: function(table) {
    var parent = table.parentNode;
    var spreader;
    if (!parent || parent.nodeType !== 1 || !hasClass(parent, 'wtHolder')) {
      spreader = document.createElement('div');
      spreader.className = 'wtSpreader';
      if (parent) {
        parent.insertBefore(spreader, table);
      }
      spreader.appendChild(table);
    }
    spreader.style.position = 'relative';
    return spreader;
  },
  createHider: function(spreader) {
    var parent = spreader.parentNode;
    var hider;
    if (!parent || parent.nodeType !== 1 || !hasClass(parent, 'wtHolder')) {
      hider = document.createElement('div');
      hider.className = 'wtHider';
      if (parent) {
        parent.insertBefore(hider, spreader);
      }
      hider.appendChild(spreader);
    }
    return hider;
  },
  createHolder: function(hider) {
    var parent = hider.parentNode;
    var holder;
    if (!parent || parent.nodeType !== 1 || !hasClass(parent, 'wtHolder')) {
      holder = document.createElement('div');
      holder.style.position = 'relative';
      holder.className = 'wtHolder';
      if (parent) {
        parent.insertBefore(holder, hider);
      }
      if (!this.isWorkingOnClone()) {
        holder.parentNode.className += 'ht_master handsontable';
      }
      holder.appendChild(hider);
    }
    return holder;
  },
  alignOverlaysWithTrimmingContainer: function() {
    var trimmingElement = getTrimmingContainer(this.wtRootElement);
    if (!this.isWorkingOnClone()) {
      this.holder.parentNode.style.position = 'relative';
      if (trimmingElement === window) {
        var preventOverflow = this.wot.getSetting('preventOverflow');
        if (!preventOverflow) {
          this.holder.style.overflow = 'visible';
          this.wtRootElement.style.overflow = 'visible';
        }
      } else {
        this.holder.style.width = getStyle(trimmingElement, 'width');
        this.holder.style.height = getStyle(trimmingElement, 'height');
        this.holder.style.overflow = '';
      }
    }
  },
  isWorkingOnClone: function() {
    return !!this.wot.cloneSource;
  },
  draw: function(fastDraw) {
    var $__9 = this.wot,
        wtOverlays = $__9.wtOverlays,
        wtViewport = $__9.wtViewport;
    var totalRows = this.instance.getSetting('totalRows');
    var rowHeaders = this.wot.getSetting('rowHeaders').length;
    var columnHeaders = this.wot.getSetting('columnHeaders').length;
    var syncScroll = false;
    if (!this.isWorkingOnClone()) {
      this.holderOffset = offset(this.holder);
      fastDraw = wtViewport.createRenderCalculators(fastDraw);
      if (rowHeaders && !this.wot.getSetting('fixedColumnsLeft')) {
        var leftScrollPos = wtOverlays.leftOverlay.getScrollPosition();
        var previousState = this.correctHeaderWidth;
        this.correctHeaderWidth = leftScrollPos > 0;
        if (previousState !== this.correctHeaderWidth) {
          fastDraw = false;
        }
      }
    }
    if (!this.isWorkingOnClone()) {
      syncScroll = wtOverlays.prepareOverlays();
    }
    if (fastDraw) {
      if (!this.isWorkingOnClone()) {
        wtViewport.createVisibleCalculators();
      }
      if (wtOverlays) {
        wtOverlays.refresh(true);
      }
    } else {
      if (this.isWorkingOnClone()) {
        this.tableOffset = this.wot.cloneSource.wtTable.tableOffset;
      } else {
        this.tableOffset = offset(this.TABLE);
      }
      var startRow;
      if (WalkontableOverlay.isOverlayTypeOf(this.wot.cloneOverlay, WalkontableOverlay.CLONE_DEBUG) || WalkontableOverlay.isOverlayTypeOf(this.wot.cloneOverlay, WalkontableOverlay.CLONE_TOP) || WalkontableOverlay.isOverlayTypeOf(this.wot.cloneOverlay, WalkontableOverlay.CLONE_TOP_LEFT_CORNER)) {
        startRow = 0;
      } else if (WalkontableOverlay.isOverlayTypeOf(this.instance.cloneOverlay, WalkontableOverlay.CLONE_BOTTOM) || WalkontableOverlay.isOverlayTypeOf(this.instance.cloneOverlay, WalkontableOverlay.CLONE_BOTTOM_LEFT_CORNER)) {
        startRow = Math.max(totalRows - this.wot.getSetting('fixedRowsBottom'), 0);
      } else {
        startRow = wtViewport.rowsRenderCalculator.startRow;
      }
      var startColumn;
      if (WalkontableOverlay.isOverlayTypeOf(this.wot.cloneOverlay, WalkontableOverlay.CLONE_DEBUG) || WalkontableOverlay.isOverlayTypeOf(this.wot.cloneOverlay, WalkontableOverlay.CLONE_LEFT) || WalkontableOverlay.isOverlayTypeOf(this.wot.cloneOverlay, WalkontableOverlay.CLONE_TOP_LEFT_CORNER) || WalkontableOverlay.isOverlayTypeOf(this.wot.cloneOverlay, WalkontableOverlay.CLONE_BOTTOM_LEFT_CORNER)) {
        startColumn = 0;
      } else {
        startColumn = wtViewport.columnsRenderCalculator.startColumn;
      }
      this.rowFilter = new WalkontableRowFilter(startRow, totalRows, columnHeaders);
      this.columnFilter = new WalkontableColumnFilter(startColumn, this.wot.getSetting('totalColumns'), rowHeaders);
      this.alignOverlaysWithTrimmingContainer();
      this._doDraw();
    }
    this.refreshSelections(fastDraw);
    if (!this.isWorkingOnClone()) {
      wtOverlays.topOverlay.resetFixedPosition();
      if (wtOverlays.bottomOverlay.clone) {
        wtOverlays.bottomOverlay.resetFixedPosition();
      }
      wtOverlays.leftOverlay.resetFixedPosition();
      if (wtOverlays.topLeftCornerOverlay) {
        wtOverlays.topLeftCornerOverlay.resetFixedPosition();
      }
      if (wtOverlays.bottomLeftCornerOverlay && wtOverlays.bottomLeftCornerOverlay.clone) {
        wtOverlays.bottomLeftCornerOverlay.resetFixedPosition();
      }
    }
    if (syncScroll) {
      wtOverlays.syncScrollWithMaster();
    }
    this.wot.drawn = true;
    return this;
  },
  _doDraw: function() {
    var wtRenderer = new WalkontableTableRenderer(this);
    wtRenderer.render();
  },
  removeClassFromCells: function(className) {
    var nodes = this.TABLE.querySelectorAll('.' + className);
    for (var i = 0,
        len = nodes.length; i < len; i++) {
      removeClass(nodes[i], className);
    }
  },
  refreshSelections: function(fastDraw) {
    if (!this.wot.selections) {
      return;
    }
    var len = this.wot.selections.length;
    if (fastDraw) {
      for (var i = 0; i < len; i++) {
        if (this.wot.selections[i].settings.className) {
          this.removeClassFromCells(this.wot.selections[i].settings.className);
        }
        if (this.wot.selections[i].settings.highlightHeaderClassName) {
          this.removeClassFromCells(this.wot.selections[i].settings.highlightHeaderClassName);
        }
        if (this.wot.selections[i].settings.highlightRowClassName) {
          this.removeClassFromCells(this.wot.selections[i].settings.highlightRowClassName);
        }
        if (this.wot.selections[i].settings.highlightColumnClassName) {
          this.removeClassFromCells(this.wot.selections[i].settings.highlightColumnClassName);
        }
      }
    }
    for (var i$__10 = 0; i$__10 < len; i$__10++) {
      this.wot.selections[i$__10].draw(this.wot, fastDraw);
    }
  },
  getCell: function(coords) {
    if (this.isRowBeforeRenderedRows(coords.row)) {
      return -1;
    } else if (this.isRowAfterRenderedRows(coords.row)) {
      return -2;
    }
    var TR = this.TBODY.childNodes[this.rowFilter.sourceToRendered(coords.row)];
    if (TR) {
      return TR.childNodes[this.columnFilter.sourceColumnToVisibleRowHeadedColumn(coords.col)];
    }
  },
  getColumnHeader: function(col) {
    var level = arguments[1] !== (void 0) ? arguments[1] : 0;
    var TR = this.THEAD.childNodes[level];
    if (TR) {
      return TR.childNodes[this.columnFilter.sourceColumnToVisibleRowHeadedColumn(col)];
    }
  },
  getRowHeader: function(row) {
    if (this.columnFilter.sourceColumnToVisibleRowHeadedColumn(0) === 0) {
      return null;
    }
    var TR = this.TBODY.childNodes[this.rowFilter.sourceToRendered(row)];
    if (TR) {
      return TR.childNodes[0];
    }
  },
  getCoords: function(TD) {
    if (TD.nodeName !== 'TD' && TD.nodeName !== 'TH') {
      TD = closest(TD, ['TD', 'TH']);
    }
    var TR = TD.parentNode;
    var CONTAINER = TR.parentNode;
    var row = index(TR);
    var col = TD.cellIndex;
    if (overlayContainsElement(WalkontableOverlay.CLONE_TOP_LEFT_CORNER, TD) || overlayContainsElement(WalkontableOverlay.CLONE_TOP, TD)) {
      if (CONTAINER.nodeName === 'THEAD') {
        row -= CONTAINER.childNodes.length;
      }
    } else {
      if (CONTAINER === this.THEAD) {
        row = this.rowFilter.visibleColHeadedRowToSourceRow(row);
      } else {
        row = this.rowFilter.renderedToSource(row);
      }
    }
    if (overlayContainsElement(WalkontableOverlay.CLONE_TOP_LEFT_CORNER, TD) || overlayContainsElement(WalkontableOverlay.CLONE_LEFT, TD)) {
      col = this.columnFilter.offsettedTH(col);
    } else {
      col = this.columnFilter.visibleRowHeadedColumnToSourceColumn(col);
    }
    return new WalkontableCellCoords(row, col);
  },
  getTrForRow: function(row) {
    return this.TBODY.childNodes[this.rowFilter.sourceToRendered(row)];
  },
  getFirstRenderedRow: function() {
    return this.wot.wtViewport.rowsRenderCalculator.startRow;
  },
  getFirstVisibleRow: function() {
    return this.wot.wtViewport.rowsVisibleCalculator.startRow;
  },
  getFirstRenderedColumn: function() {
    return this.wot.wtViewport.columnsRenderCalculator.startColumn;
  },
  getFirstVisibleColumn: function() {
    return this.wot.wtViewport.columnsVisibleCalculator.startColumn;
  },
  getLastRenderedRow: function() {
    return this.wot.wtViewport.rowsRenderCalculator.endRow;
  },
  getLastVisibleRow: function() {
    return this.wot.wtViewport.rowsVisibleCalculator.endRow;
  },
  getLastRenderedColumn: function() {
    return this.wot.wtViewport.columnsRenderCalculator.endColumn;
  },
  getLastVisibleColumn: function() {
    return this.wot.wtViewport.columnsVisibleCalculator.endColumn;
  },
  isRowBeforeRenderedRows: function(row) {
    return this.rowFilter && (this.rowFilter.sourceToRendered(row) < 0 && row >= 0);
  },
  isRowAfterViewport: function(row) {
    return this.rowFilter && (this.rowFilter.sourceToRendered(row) > this.getLastVisibleRow());
  },
  isRowAfterRenderedRows: function(row) {
    return this.rowFilter && (this.rowFilter.sourceToRendered(row) > this.getLastRenderedRow());
  },
  isColumnBeforeViewport: function(column) {
    return this.columnFilter && (this.columnFilter.sourceToRendered(column) < 0 && column >= 0);
  },
  isColumnAfterViewport: function(column) {
    return this.columnFilter && (this.columnFilter.sourceToRendered(column) > this.getLastVisibleColumn());
  },
  isLastRowFullyVisible: function() {
    return this.getLastVisibleRow() === this.getLastRenderedRow();
  },
  isLastColumnFullyVisible: function() {
    return this.getLastVisibleColumn() === this.getLastRenderedColumn();
  },
  getRenderedColumnsCount: function() {
    var columnsCount = this.wot.wtViewport.columnsRenderCalculator.count;
    var totalColumns = this.wot.getSetting('totalColumns');
    if (this.wot.isOverlayName(WalkontableOverlay.CLONE_DEBUG)) {
      columnsCount = totalColumns;
    } else if (this.wot.isOverlayName(WalkontableOverlay.CLONE_LEFT) || this.wot.isOverlayName(WalkontableOverlay.CLONE_TOP_LEFT_CORNER) || this.wot.isOverlayName(WalkontableOverlay.CLONE_BOTTOM_LEFT_CORNER)) {
      return Math.min(this.wot.getSetting('fixedColumnsLeft'), totalColumns);
    }
    return columnsCount;
  },
  getRenderedRowsCount: function() {
    var rowsCount = this.wot.wtViewport.rowsRenderCalculator.count;
    var totalRows = this.wot.getSetting('totalRows');
    if (this.wot.isOverlayName(WalkontableOverlay.CLONE_DEBUG)) {
      rowsCount = totalRows;
    } else if (this.wot.isOverlayName(WalkontableOverlay.CLONE_TOP) || this.wot.isOverlayName(WalkontableOverlay.CLONE_TOP_LEFT_CORNER)) {
      rowsCount = Math.min(this.wot.getSetting('fixedRowsTop'), totalRows);
    } else if (this.wot.isOverlayName(WalkontableOverlay.CLONE_BOTTOM) || this.wot.isOverlayName(WalkontableOverlay.CLONE_BOTTOM_LEFT_CORNER)) {
      rowsCount = Math.min(this.wot.getSetting('fixedRowsBottom'), totalRows);
    }
    return rowsCount;
  },
  getVisibleRowsCount: function() {
    return this.wot.wtViewport.rowsVisibleCalculator.count;
  },
  allRowsInViewport: function() {
    return this.wot.getSetting('totalRows') == this.getVisibleRowsCount();
  },
  getRowHeight: function(sourceRow) {
    var height = this.wot.wtSettings.settings.rowHeight(sourceRow);
    var oversizedHeight = this.wot.wtViewport.oversizedRows[sourceRow];
    if (oversizedHeight !== void 0) {
      height = height === void 0 ? oversizedHeight : Math.max(height, oversizedHeight);
    }
    return height;
  },
  getColumnHeaderHeight: function(level) {
    var height = this.wot.wtSettings.settings.defaultRowHeight;
    var oversizedHeight = this.wot.wtViewport.oversizedColumnHeaders[level];
    if (oversizedHeight !== void 0) {
      height = height ? Math.max(height, oversizedHeight) : oversizedHeight;
    }
    return height;
  },
  getVisibleColumnsCount: function() {
    return this.wot.wtViewport.columnsVisibleCalculator.count;
  },
  allColumnsInViewport: function() {
    return this.wot.getSetting('totalColumns') == this.getVisibleColumnsCount();
  },
  getColumnWidth: function(sourceColumn) {
    var width = this.wot.wtSettings.settings.columnWidth;
    if (typeof width === 'function') {
      width = width(sourceColumn);
    } else if (typeof width === 'object') {
      width = width[sourceColumn];
    }
    return width || this.wot.wtSettings.settings.defaultColumnWidth;
  },
  getStretchedColumnWidth: function(sourceColumn) {
    var columnWidth = this.getColumnWidth(sourceColumn);
    var width = columnWidth == null ? this.instance.wtSettings.settings.defaultColumnWidth : columnWidth;
    var calculator = this.wot.wtViewport.columnsRenderCalculator;
    if (calculator) {
      var stretchedWidth = calculator.getStretchedColumnWidth(sourceColumn, width);
      if (stretchedWidth) {
        width = stretchedWidth;
      }
    }
    return width;
  },
  _modifyRowHeaderWidth: function(rowHeaderWidthFactory) {
    var widths = isFunction(rowHeaderWidthFactory) ? rowHeaderWidthFactory() : null;
    if (Array.isArray(widths)) {
      widths = $traceurRuntime.spread(widths);
      widths[widths.length - 1] = this._correctRowHeaderWidth(widths[widths.length - 1]);
    } else {
      widths = this._correctRowHeaderWidth(widths);
    }
    return widths;
  },
  _correctRowHeaderWidth: function(width) {
    if (typeof width !== 'number') {
      width = this.wot.getSetting('defaultColumnWidth');
    }
    if (this.correctHeaderWidth) {
      width++;
    }
    return width;
  }
}, {});
;
window.WalkontableTable = WalkontableTable;

//# 
},{"cell/coords":6,"cell/range":7,"filter/column":10,"filter/row":11,"helpers/dom/element":47,"helpers/function":50,"tableRenderer":22}],22:[function(_dereq_,module,exports){
"use strict";
Object.defineProperties(exports, {
  WalkontableTableRenderer: {get: function() {
      return WalkontableTableRenderer;
    }},
  __esModule: {value: true}
});
var $___46__46__47__46__46__47__46__46__47_helpers_47_dom_47_element__;
var $__0 = ($___46__46__47__46__46__47__46__46__47_helpers_47_dom_47_element__ = _dereq_("helpers/dom/element"), $___46__46__47__46__46__47__46__46__47_helpers_47_dom_47_element__ && $___46__46__47__46__46__47__46__46__47_helpers_47_dom_47_element__.__esModule && $___46__46__47__46__46__47__46__46__47_helpers_47_dom_47_element__ || {default: $___46__46__47__46__46__47__46__46__47_helpers_47_dom_47_element__}),
    addClass = $__0.addClass,
    empty = $__0.empty,
    getScrollbarWidth = $__0.getScrollbarWidth,
    hasClass = $__0.hasClass,
    innerHeight = $__0.innerHeight,
    outerWidth = $__0.outerWidth;
var performanceWarningAppeared = false;
var WalkontableTableRenderer = function WalkontableTableRenderer(wtTable) {
  this.wtTable = wtTable;
  this.wot = wtTable.instance;
  this.instance = wtTable.instance;
  this.rowFilter = wtTable.rowFilter;
  this.columnFilter = wtTable.columnFilter;
  this.TABLE = wtTable.TABLE;
  this.THEAD = wtTable.THEAD;
  this.TBODY = wtTable.TBODY;
  this.COLGROUP = wtTable.COLGROUP;
  this.rowHeaders = [];
  this.rowHeaderCount = 0;
  this.columnHeaders = [];
  this.columnHeaderCount = 0;
  this.fixedRowsTop = 0;
  this.fixedRowsBottom = 0;
};
($traceurRuntime.createClass)(WalkontableTableRenderer, {
  render: function() {
    if (!this.wtTable.isWorkingOnClone()) {
      var skipRender = {};
      this.wot.getSetting('beforeDraw', true, skipRender);
      if (skipRender.skipRender === true) {
        return;
      }
    }
    this.rowHeaders = this.wot.getSetting('rowHeaders');
    this.rowHeaderCount = this.rowHeaders.length;
    this.fixedRowsTop = this.wot.getSetting('fixedRowsTop');
    this.fixedRowsBottom = this.wot.getSetting('fixedRowsBottom');
    this.columnHeaders = this.wot.getSetting('columnHeaders');
    this.columnHeaderCount = this.columnHeaders.length;
    var columnsToRender = this.wtTable.getRenderedColumnsCount();
    var rowsToRender = this.wtTable.getRenderedRowsCount();
    var totalColumns = this.wot.getSetting('totalColumns');
    var totalRows = this.wot.getSetting('totalRows');
    var workspaceWidth;
    var adjusted = false;
    if (WalkontableOverlay.isOverlayTypeOf(this.wot.cloneOverlay, WalkontableOverlay.CLONE_BOTTOM) || WalkontableOverlay.isOverlayTypeOf(this.wot.cloneOverlay, WalkontableOverlay.CLONE_BOTTOM_LEFT_CORNER)) {
      this.columnHeaders = [];
      this.columnHeaderCount = 0;
    }
    if (totalColumns >= 0) {
      this.adjustAvailableNodes();
      adjusted = true;
      this.renderColumnHeaders();
      this.renderRows(totalRows, rowsToRender, columnsToRender);
      if (!this.wtTable.isWorkingOnClone()) {
        workspaceWidth = this.wot.wtViewport.getWorkspaceWidth();
        this.wot.wtViewport.containerWidth = null;
      }
      this.adjustColumnWidths(columnsToRender);
      this.markOversizedColumnHeaders();
      this.adjustColumnHeaderHeights();
    }
    if (!adjusted) {
      this.adjustAvailableNodes();
    }
    this.removeRedundantRows(rowsToRender);
    if (!this.wtTable.isWorkingOnClone() || this.wot.isOverlayName(WalkontableOverlay.CLONE_BOTTOM)) {
      this.markOversizedRows();
    }
    if (!this.wtTable.isWorkingOnClone()) {
      this.wot.wtViewport.createVisibleCalculators();
      this.wot.wtOverlays.refresh(false);
      this.wot.wtOverlays.applyToDOM();
      var hiderWidth = outerWidth(this.wtTable.hider);
      var tableWidth = outerWidth(this.wtTable.TABLE);
      if (hiderWidth !== 0 && (tableWidth !== hiderWidth)) {
        this.adjustColumnWidths(columnsToRender);
      }
      if (workspaceWidth !== this.wot.wtViewport.getWorkspaceWidth()) {
        this.wot.wtViewport.containerWidth = null;
        var firstRendered = this.wtTable.getFirstRenderedColumn();
        var lastRendered = this.wtTable.getLastRenderedColumn();
        var defaultColumnWidth = this.wot.getSetting('defaultColumnWidth');
        var rowHeaderWidthSetting = this.wot.getSetting('rowHeaderWidth');
        rowHeaderWidthSetting = this.instance.getSetting('onModifyRowHeaderWidth', rowHeaderWidthSetting);
        if (rowHeaderWidthSetting != null) {
          for (var i = 0; i < this.rowHeaderCount; i++) {
            var width = Array.isArray(rowHeaderWidthSetting) ? rowHeaderWidthSetting[i] : rowHeaderWidthSetting;
            width = width == null ? defaultColumnWidth : width;
            this.COLGROUP.childNodes[i].style.width = width + 'px';
          }
        }
        for (var i$__2 = firstRendered; i$__2 < lastRendered; i$__2++) {
          var width$__3 = this.wtTable.getStretchedColumnWidth(i$__2);
          var renderedIndex = this.columnFilter.sourceToRendered(i$__2);
          this.COLGROUP.childNodes[renderedIndex + this.rowHeaderCount].style.width = width$__3 + 'px';
        }
      }
      this.wot.getSetting('onDraw', true);
    } else if (this.wot.isOverlayName(WalkontableOverlay.CLONE_BOTTOM)) {
      this.wot.cloneSource.wtOverlays.adjustElementsSize();
    }
  },
  removeRedundantRows: function(renderedRowsCount) {
    while (this.wtTable.tbodyChildrenLength > renderedRowsCount) {
      this.TBODY.removeChild(this.TBODY.lastChild);
      this.wtTable.tbodyChildrenLength--;
    }
  },
  renderRows: function(totalRows, rowsToRender, columnsToRender) {
    var lastTD,
        TR;
    var visibleRowIndex = 0;
    var sourceRowIndex = this.rowFilter.renderedToSource(visibleRowIndex);
    var isWorkingOnClone = this.wtTable.isWorkingOnClone();
    while (sourceRowIndex < totalRows && sourceRowIndex >= 0) {
      if (!performanceWarningAppeared && visibleRowIndex > 1000) {
        performanceWarningAppeared = true;
        console.warn('Performance tip: Handsontable rendered more than 1000 visible rows. Consider limiting the number ' + 'of rendered rows by specifying the table height and/or turning off the "renderAllRows" option.');
      }
      if (rowsToRender !== void 0 && visibleRowIndex === rowsToRender) {
        break;
      }
      TR = this.getOrCreateTrForRow(visibleRowIndex, TR);
      this.renderRowHeaders(sourceRowIndex, TR);
      this.adjustColumns(TR, columnsToRender + this.rowHeaderCount);
      lastTD = this.renderCells(sourceRowIndex, TR, columnsToRender);
      if (!isWorkingOnClone || this.wot.isOverlayName(WalkontableOverlay.CLONE_BOTTOM)) {
        this.resetOversizedRow(sourceRowIndex);
      }
      if (TR.firstChild) {
        var height = this.wot.wtTable.getRowHeight(sourceRowIndex);
        if (height) {
          height--;
          TR.firstChild.style.height = height + 'px';
        } else {
          TR.firstChild.style.height = '';
        }
      }
      visibleRowIndex++;
      sourceRowIndex = this.rowFilter.renderedToSource(visibleRowIndex);
    }
  },
  resetOversizedRow: function(sourceRow) {
    if (this.wot.getSetting('externalRowCalculator')) {
      return;
    }
    if (this.wot.wtViewport.oversizedRows && this.wot.wtViewport.oversizedRows[sourceRow]) {
      this.wot.wtViewport.oversizedRows[sourceRow] = void 0;
    }
  },
  markOversizedRows: function() {
    if (this.wot.getSetting('externalRowCalculator')) {
      return;
    }
    var rowCount = this.instance.wtTable.TBODY.childNodes.length;
    var expectedTableHeight = rowCount * this.instance.wtSettings.settings.defaultRowHeight;
    var actualTableHeight = innerHeight(this.instance.wtTable.TBODY) - 1;
    var previousRowHeight;
    var rowInnerHeight;
    var sourceRowIndex;
    var currentTr;
    var rowHeader;
    var totalRows = this.instance.getSetting('totalRows');
    if (expectedTableHeight === actualTableHeight && !this.instance.getSetting('fixedRowsBottom')) {
      return;
    }
    while (rowCount) {
      rowCount--;
      sourceRowIndex = this.instance.wtTable.rowFilter.renderedToSource(rowCount);
      previousRowHeight = this.instance.wtTable.getRowHeight(sourceRowIndex);
      currentTr = this.instance.wtTable.getTrForRow(sourceRowIndex);
      rowHeader = currentTr.querySelector('th');
      if (rowHeader) {
        rowInnerHeight = innerHeight(rowHeader);
      } else {
        rowInnerHeight = innerHeight(currentTr) - 1;
      }
      if ((!previousRowHeight && this.instance.wtSettings.settings.defaultRowHeight < rowInnerHeight || previousRowHeight < rowInnerHeight)) {
        this.instance.wtViewport.oversizedRows[sourceRowIndex] = ++rowInnerHeight;
      }
    }
  },
  markOversizedColumnHeaders: function() {
    var overlayName = this.wot.getOverlayName();
    if (!this.columnHeaderCount || this.wot.wtViewport.hasOversizedColumnHeadersMarked[overlayName] || this.wtTable.isWorkingOnClone()) {
      return;
    }
    var columnCount = this.wtTable.getRenderedColumnsCount();
    for (var i = 0; i < this.columnHeaderCount; i++) {
      for (var renderedColumnIndex = (-1) * this.rowHeaderCount; renderedColumnIndex < columnCount; renderedColumnIndex++) {
        this.markIfOversizedColumnHeader(renderedColumnIndex);
      }
    }
    this.wot.wtViewport.hasOversizedColumnHeadersMarked[overlayName] = true;
  },
  adjustColumnHeaderHeights: function() {
    var columnHeaders = this.wot.getSetting('columnHeaders');
    var children = this.wot.wtTable.THEAD.childNodes;
    var oversizedColumnHeaders = this.wot.wtViewport.oversizedColumnHeaders;
    for (var i = 0,
        len = columnHeaders.length; i < len; i++) {
      if (oversizedColumnHeaders[i]) {
        if (!children[i] || children[i].childNodes.length === 0) {
          return;
        }
        children[i].childNodes[0].style.height = oversizedColumnHeaders[i] + 'px';
      }
    }
  },
  markIfOversizedColumnHeader: function(col) {
    var sourceColIndex = this.wot.wtTable.columnFilter.renderedToSource(col);
    var level = this.columnHeaderCount;
    var defaultRowHeight = this.wot.wtSettings.settings.defaultRowHeight;
    var previousColHeaderHeight;
    var currentHeader;
    var currentHeaderHeight;
    var columnHeaderHeightSetting = this.wot.getSetting('columnHeaderHeight') || [];
    while (level) {
      level--;
      previousColHeaderHeight = this.wot.wtTable.getColumnHeaderHeight(level);
      currentHeader = this.wot.wtTable.getColumnHeader(sourceColIndex, level);
      if (!currentHeader) {
        continue;
      }
      currentHeaderHeight = innerHeight(currentHeader);
      if (!previousColHeaderHeight && defaultRowHeight < currentHeaderHeight || previousColHeaderHeight < currentHeaderHeight) {
        this.wot.wtViewport.oversizedColumnHeaders[level] = currentHeaderHeight;
      }
      if (Array.isArray(columnHeaderHeightSetting)) {
        if (columnHeaderHeightSetting[level] != null) {
          this.wot.wtViewport.oversizedColumnHeaders[level] = columnHeaderHeightSetting[level];
        }
      } else if (!isNaN(columnHeaderHeightSetting)) {
        this.wot.wtViewport.oversizedColumnHeaders[level] = columnHeaderHeightSetting;
      }
      if (this.wot.wtViewport.oversizedColumnHeaders[level] < (columnHeaderHeightSetting[level] || columnHeaderHeightSetting)) {
        this.wot.wtViewport.oversizedColumnHeaders[level] = (columnHeaderHeightSetting[level] || columnHeaderHeightSetting);
      }
    }
  },
  renderCells: function(sourceRowIndex, TR, columnsToRender) {
    var TD;
    var sourceColIndex;
    for (var visibleColIndex = 0; visibleColIndex < columnsToRender; visibleColIndex++) {
      sourceColIndex = this.columnFilter.renderedToSource(visibleColIndex);
      if (visibleColIndex === 0) {
        TD = TR.childNodes[this.columnFilter.sourceColumnToVisibleRowHeadedColumn(sourceColIndex)];
      } else {
        TD = TD.nextSibling;
      }
      if (TD.nodeName == 'TH') {
        TD = replaceThWithTd(TD, TR);
      }
      if (!hasClass(TD, 'hide')) {
        TD.className = '';
      }
      TD.removeAttribute('style');
      this.wot.wtSettings.settings.cellRenderer(sourceRowIndex, sourceColIndex, TD);
    }
    return TD;
  },
  adjustColumnWidths: function(columnsToRender) {
    var scrollbarCompensation = 0;
    var sourceInstance = this.wot.cloneSource ? this.wot.cloneSource : this.wot;
    var mainHolder = sourceInstance.wtTable.holder;
    var defaultColumnWidth = this.wot.getSetting('defaultColumnWidth');
    var rowHeaderWidthSetting = this.wot.getSetting('rowHeaderWidth');
    if (mainHolder.offsetHeight < mainHolder.scrollHeight) {
      scrollbarCompensation = getScrollbarWidth();
    }
    this.wot.wtViewport.columnsRenderCalculator.refreshStretching(this.wot.wtViewport.getViewportWidth() - scrollbarCompensation);
    rowHeaderWidthSetting = this.instance.getSetting('onModifyRowHeaderWidth', rowHeaderWidthSetting);
    if (rowHeaderWidthSetting != null) {
      for (var i = 0; i < this.rowHeaderCount; i++) {
        var width = Array.isArray(rowHeaderWidthSetting) ? rowHeaderWidthSetting[i] : rowHeaderWidthSetting;
        width = width == null ? defaultColumnWidth : width;
        this.COLGROUP.childNodes[i].style.width = width + 'px';
      }
    }
    for (var renderedColIndex = 0; renderedColIndex < columnsToRender; renderedColIndex++) {
      var width$__4 = this.wtTable.getStretchedColumnWidth(this.columnFilter.renderedToSource(renderedColIndex));
      this.COLGROUP.childNodes[renderedColIndex + this.rowHeaderCount].style.width = width$__4 + 'px';
    }
  },
  appendToTbody: function(TR) {
    this.TBODY.appendChild(TR);
    this.wtTable.tbodyChildrenLength++;
  },
  getOrCreateTrForRow: function(rowIndex, currentTr) {
    var TR;
    if (rowIndex >= this.wtTable.tbodyChildrenLength) {
      TR = this.createRow();
      this.appendToTbody(TR);
    } else if (rowIndex === 0) {
      TR = this.TBODY.firstChild;
    } else {
      TR = currentTr.nextSibling;
    }
    if (TR.className) {
      TR.removeAttribute('class');
    }
    return TR;
  },
  createRow: function() {
    var TR = document.createElement('TR');
    for (var visibleColIndex = 0; visibleColIndex < this.rowHeaderCount; visibleColIndex++) {
      TR.appendChild(document.createElement('TH'));
    }
    return TR;
  },
  renderRowHeader: function(row, col, TH) {
    TH.className = '';
    TH.removeAttribute('style');
    this.rowHeaders[col](row, TH, col);
  },
  renderRowHeaders: function(row, TR) {
    for (var TH = TR.firstChild,
        visibleColIndex = 0; visibleColIndex < this.rowHeaderCount; visibleColIndex++) {
      if (!TH) {
        TH = document.createElement('TH');
        TR.appendChild(TH);
      } else if (TH.nodeName == 'TD') {
        TH = replaceTdWithTh(TH, TR);
      }
      this.renderRowHeader(row, visibleColIndex, TH);
      TH = TH.nextSibling;
    }
  },
  adjustAvailableNodes: function() {
    this.adjustColGroups();
    this.adjustThead();
  },
  renderColumnHeaders: function() {
    if (!this.columnHeaderCount) {
      return;
    }
    var columnCount = this.wtTable.getRenderedColumnsCount();
    for (var i = 0; i < this.columnHeaderCount; i++) {
      var TR = this.getTrForColumnHeaders(i);
      for (var renderedColumnIndex = (-1) * this.rowHeaderCount; renderedColumnIndex < columnCount; renderedColumnIndex++) {
        var sourceCol = this.columnFilter.renderedToSource(renderedColumnIndex);
        this.renderColumnHeader(i, sourceCol, TR.childNodes[renderedColumnIndex + this.rowHeaderCount]);
      }
    }
  },
  adjustColGroups: function() {
    var columnCount = this.wtTable.getRenderedColumnsCount();
    while (this.wtTable.colgroupChildrenLength < columnCount + this.rowHeaderCount) {
      this.COLGROUP.appendChild(document.createElement('COL'));
      this.wtTable.colgroupChildrenLength++;
    }
    while (this.wtTable.colgroupChildrenLength > columnCount + this.rowHeaderCount) {
      this.COLGROUP.removeChild(this.COLGROUP.lastChild);
      this.wtTable.colgroupChildrenLength--;
    }
    if (this.rowHeaderCount) {
      addClass(this.COLGROUP.childNodes[0], 'rowHeader');
    }
  },
  adjustThead: function() {
    var columnCount = this.wtTable.getRenderedColumnsCount();
    var TR = this.THEAD.firstChild;
    if (this.columnHeaders.length) {
      for (var i = 0,
          len = this.columnHeaders.length; i < len; i++) {
        TR = this.THEAD.childNodes[i];
        if (!TR) {
          TR = document.createElement('TR');
          this.THEAD.appendChild(TR);
        }
        this.theadChildrenLength = TR.childNodes.length;
        while (this.theadChildrenLength < columnCount + this.rowHeaderCount) {
          TR.appendChild(document.createElement('TH'));
          this.theadChildrenLength++;
        }
        while (this.theadChildrenLength > columnCount + this.rowHeaderCount) {
          TR.removeChild(TR.lastChild);
          this.theadChildrenLength--;
        }
      }
      var theadChildrenLength = this.THEAD.childNodes.length;
      if (theadChildrenLength > this.columnHeaders.length) {
        for (var i$__5 = this.columnHeaders.length; i$__5 < theadChildrenLength; i$__5++) {
          this.THEAD.removeChild(this.THEAD.lastChild);
        }
      }
    } else if (TR) {
      empty(TR);
    }
  },
  getTrForColumnHeaders: function(index) {
    return this.THEAD.childNodes[index];
  },
  renderColumnHeader: function(row, col, TH) {
    TH.className = '';
    TH.removeAttribute('style');
    return this.columnHeaders[row](col, TH, row);
  },
  adjustColumns: function(TR, desiredCount) {
    var count = TR.childNodes.length;
    while (count < desiredCount) {
      var TD = document.createElement('TD');
      TR.appendChild(TD);
      count++;
    }
    while (count > desiredCount) {
      TR.removeChild(TR.lastChild);
      count--;
    }
  },
  removeRedundantColumns: function(columnsToRender) {
    while (this.wtTable.tbodyChildrenLength > columnsToRender) {
      this.TBODY.removeChild(this.TBODY.lastChild);
      this.wtTable.tbodyChildrenLength--;
    }
  }
}, {});
function replaceTdWithTh(TD, TR) {
  var TH = document.createElement('TH');
  TR.insertBefore(TH, TD);
  TR.removeChild(TD);
  return TH;
}
function replaceThWithTd(TH, TR) {
  var TD = document.createElement('TD');
  TR.insertBefore(TD, TH);
  TR.removeChild(TH);
  return TD;
}
;
window.WalkontableTableRenderer = WalkontableTableRenderer;

//# 
},{"helpers/dom/element":47}],23:[function(_dereq_,module,exports){
"use strict";
Object.defineProperties(exports, {
  WalkontableViewport: {get: function() {
      return WalkontableViewport;
    }},
  __esModule: {value: true}
});
var $___46__46__47__46__46__47__46__46__47_browser__,
    $___46__46__47__46__46__47__46__46__47_helpers_47_dom_47_element__,
    $___46__46__47__46__46__47__46__46__47_eventManager__,
    $__calculator_47_viewportColumns__,
    $__calculator_47_viewportRows__;
var Handsontable = ($___46__46__47__46__46__47__46__46__47_browser__ = _dereq_("browser"), $___46__46__47__46__46__47__46__46__47_browser__ && $___46__46__47__46__46__47__46__46__47_browser__.__esModule && $___46__46__47__46__46__47__46__46__47_browser__ || {default: $___46__46__47__46__46__47__46__46__47_browser__}).default;
var $__1 = ($___46__46__47__46__46__47__46__46__47_helpers_47_dom_47_element__ = _dereq_("helpers/dom/element"), $___46__46__47__46__46__47__46__46__47_helpers_47_dom_47_element__ && $___46__46__47__46__46__47__46__46__47_helpers_47_dom_47_element__.__esModule && $___46__46__47__46__46__47__46__46__47_helpers_47_dom_47_element__ || {default: $___46__46__47__46__46__47__46__46__47_helpers_47_dom_47_element__}),
    getScrollbarWidth = $__1.getScrollbarWidth,
    getScrollTop = $__1.getScrollTop,
    getStyle = $__1.getStyle,
    offset = $__1.offset,
    outerHeight = $__1.outerHeight,
    outerWidth = $__1.outerWidth;
var EventManager = ($___46__46__47__46__46__47__46__46__47_eventManager__ = _dereq_("eventManager"), $___46__46__47__46__46__47__46__46__47_eventManager__ && $___46__46__47__46__46__47__46__46__47_eventManager__.__esModule && $___46__46__47__46__46__47__46__46__47_eventManager__ || {default: $___46__46__47__46__46__47__46__46__47_eventManager__}).EventManager;
var WalkontableViewportColumnsCalculator = ($__calculator_47_viewportColumns__ = _dereq_("calculator/viewportColumns"), $__calculator_47_viewportColumns__ && $__calculator_47_viewportColumns__.__esModule && $__calculator_47_viewportColumns__ || {default: $__calculator_47_viewportColumns__}).WalkontableViewportColumnsCalculator;
var WalkontableViewportRowsCalculator = ($__calculator_47_viewportRows__ = _dereq_("calculator/viewportRows"), $__calculator_47_viewportRows__ && $__calculator_47_viewportRows__.__esModule && $__calculator_47_viewportRows__ || {default: $__calculator_47_viewportRows__}).WalkontableViewportRowsCalculator;
var WalkontableViewport = function WalkontableViewport(wotInstance) {
  var $__5 = this;
  this.wot = wotInstance;
  this.instance = this.wot;
  this.oversizedRows = [];
  this.oversizedColumnHeaders = [];
  this.hasOversizedColumnHeadersMarked = {};
  this.clientHeight = 0;
  this.containerWidth = NaN;
  this.rowHeaderWidth = NaN;
  this.rowsVisibleCalculator = null;
  this.columnsVisibleCalculator = null;
  this.eventManager = new EventManager(this.wot);
  this.eventManager.addEventListener(window, 'resize', (function() {
    $__5.clientHeight = $__5.getWorkspaceHeight();
  }));
};
($traceurRuntime.createClass)(WalkontableViewport, {
  getWorkspaceHeight: function() {
    var trimmingContainer = this.instance.wtOverlays.topOverlay.trimmingContainer;
    var elemHeight;
    var height = 0;
    if (trimmingContainer === window) {
      height = document.documentElement.clientHeight;
    } else {
      elemHeight = outerHeight(trimmingContainer);
      height = (elemHeight > 0 && trimmingContainer.clientHeight > 0) ? trimmingContainer.clientHeight : Infinity;
    }
    return height;
  },
  getWorkspaceWidth: function() {
    var width;
    var totalColumns = this.wot.getSetting('totalColumns');
    var trimmingContainer = this.instance.wtOverlays.leftOverlay.trimmingContainer;
    var overflow;
    var stretchSetting = this.wot.getSetting('stretchH');
    var docOffsetWidth = document.documentElement.offsetWidth;
    var preventOverflow = this.wot.getSetting('preventOverflow');
    if (preventOverflow) {
      return outerWidth(this.instance.wtTable.wtRootElement);
    }
    if (Handsontable.freezeOverlays) {
      width = Math.min(docOffsetWidth - this.getWorkspaceOffset().left, docOffsetWidth);
    } else {
      width = Math.min(this.getContainerFillWidth(), docOffsetWidth - this.getWorkspaceOffset().left, docOffsetWidth);
    }
    if (trimmingContainer === window && totalColumns > 0 && this.sumColumnWidths(0, totalColumns - 1) > width) {
      return document.documentElement.clientWidth;
    }
    if (trimmingContainer !== window) {
      overflow = getStyle(this.instance.wtOverlays.leftOverlay.trimmingContainer, 'overflow');
      if (overflow == 'scroll' || overflow == 'hidden' || overflow == 'auto') {
        return Math.max(width, trimmingContainer.clientWidth);
      }
    }
    if (stretchSetting === 'none' || !stretchSetting) {
      return Math.max(width, outerWidth(this.instance.wtTable.TABLE));
    } else {
      return width;
    }
  },
  hasVerticalScroll: function() {
    return this.getWorkspaceActualHeight() > this.getWorkspaceHeight();
  },
  hasHorizontalScroll: function() {
    return this.getWorkspaceActualWidth() > this.getWorkspaceWidth();
  },
  sumColumnWidths: function(from, length) {
    var sum = 0;
    while (from < length) {
      sum += this.wot.wtTable.getColumnWidth(from);
      from++;
    }
    return sum;
  },
  getContainerFillWidth: function() {
    if (this.containerWidth) {
      return this.containerWidth;
    }
    var mainContainer = this.instance.wtTable.holder;
    var fillWidth;
    var dummyElement;
    dummyElement = document.createElement('div');
    dummyElement.style.width = '100%';
    dummyElement.style.height = '1px';
    mainContainer.appendChild(dummyElement);
    fillWidth = dummyElement.offsetWidth;
    this.containerWidth = fillWidth;
    mainContainer.removeChild(dummyElement);
    return fillWidth;
  },
  getWorkspaceOffset: function() {
    return offset(this.wot.wtTable.TABLE);
  },
  getWorkspaceActualHeight: function() {
    return outerHeight(this.wot.wtTable.TABLE);
  },
  getWorkspaceActualWidth: function() {
    return outerWidth(this.wot.wtTable.TABLE) || outerWidth(this.wot.wtTable.TBODY) || outerWidth(this.wot.wtTable.THEAD);
  },
  getColumnHeaderHeight: function() {
    if (isNaN(this.columnHeaderHeight)) {
      this.columnHeaderHeight = outerHeight(this.wot.wtTable.THEAD);
    }
    return this.columnHeaderHeight;
  },
  getViewportHeight: function() {
    var containerHeight = this.getWorkspaceHeight();
    var columnHeaderHeight;
    if (containerHeight === Infinity) {
      return containerHeight;
    }
    columnHeaderHeight = this.getColumnHeaderHeight();
    if (columnHeaderHeight > 0) {
      containerHeight -= columnHeaderHeight;
    }
    return containerHeight;
  },
  getRowHeaderWidth: function() {
    var rowHeadersHeightSetting = this.instance.getSetting('rowHeaderWidth');
    var rowHeaders = this.instance.getSetting('rowHeaders');
    if (rowHeadersHeightSetting) {
      this.rowHeaderWidth = 0;
      for (var i = 0,
          len = rowHeaders.length; i < len; i++) {
        this.rowHeaderWidth += rowHeadersHeightSetting[i] || rowHeadersHeightSetting;
      }
    }
    if (this.wot.cloneSource) {
      return this.wot.cloneSource.wtViewport.getRowHeaderWidth();
    }
    if (isNaN(this.rowHeaderWidth)) {
      if (rowHeaders.length) {
        var TH = this.instance.wtTable.TABLE.querySelector('TH');
        this.rowHeaderWidth = 0;
        for (var i$__7 = 0,
            len$__8 = rowHeaders.length; i$__7 < len$__8; i$__7++) {
          if (TH) {
            this.rowHeaderWidth += outerWidth(TH);
            TH = TH.nextSibling;
          } else {
            this.rowHeaderWidth += 50;
          }
        }
      } else {
        this.rowHeaderWidth = 0;
      }
    }
    this.rowHeaderWidth = this.instance.getSetting('onModifyRowHeaderWidth', this.rowHeaderWidth) || this.rowHeaderWidth;
    return this.rowHeaderWidth;
  },
  getViewportWidth: function() {
    var containerWidth = this.getWorkspaceWidth();
    var rowHeaderWidth;
    if (containerWidth === Infinity) {
      return containerWidth;
    }
    rowHeaderWidth = this.getRowHeaderWidth();
    if (rowHeaderWidth > 0) {
      return containerWidth - rowHeaderWidth;
    }
    return containerWidth;
  },
  createRowsCalculator: function() {
    var visible = arguments[0] !== (void 0) ? arguments[0] : false;
    var $__5 = this;
    var height;
    var pos;
    var fixedRowsTop;
    var scrollbarHeight;
    var fixedRowsBottom;
    var fixedRowsHeight;
    var totalRows;
    this.rowHeaderWidth = NaN;
    if (this.wot.wtSettings.settings.renderAllRows) {
      height = Infinity;
    } else {
      height = this.getViewportHeight();
    }
    pos = this.wot.wtOverlays.topOverlay.getScrollPosition() - this.wot.wtOverlays.topOverlay.getTableParentOffset();
    if (pos < 0) {
      pos = 0;
    }
    fixedRowsTop = this.wot.getSetting('fixedRowsTop');
    fixedRowsBottom = this.wot.getSetting('fixedRowsBottom');
    totalRows = this.wot.getSetting('totalRows');
    if (fixedRowsTop) {
      fixedRowsHeight = this.wot.wtOverlays.topOverlay.sumCellSizes(0, fixedRowsTop);
      pos += fixedRowsHeight;
      height -= fixedRowsHeight;
    }
    if (fixedRowsBottom && this.wot.wtOverlays.bottomOverlay.clone) {
      fixedRowsHeight = this.wot.wtOverlays.bottomOverlay.sumCellSizes(totalRows - fixedRowsBottom, totalRows);
      height -= fixedRowsHeight;
    }
    if (this.wot.wtTable.holder.clientHeight === this.wot.wtTable.holder.offsetHeight) {
      scrollbarHeight = 0;
    } else {
      scrollbarHeight = getScrollbarWidth();
    }
    return new WalkontableViewportRowsCalculator(height, pos, this.wot.getSetting('totalRows'), (function(sourceRow) {
      return $__5.wot.wtTable.getRowHeight(sourceRow);
    }), visible ? null : this.wot.wtSettings.settings.viewportRowCalculatorOverride, visible, scrollbarHeight);
  },
  createColumnsCalculator: function() {
    var visible = arguments[0] !== (void 0) ? arguments[0] : false;
    var $__5 = this;
    var width = this.getViewportWidth();
    var pos;
    var fixedColumnsLeft;
    this.columnHeaderHeight = NaN;
    pos = this.wot.wtOverlays.leftOverlay.getScrollPosition() - this.wot.wtOverlays.leftOverlay.getTableParentOffset();
    if (pos < 0) {
      pos = 0;
    }
    fixedColumnsLeft = this.wot.getSetting('fixedColumnsLeft');
    if (fixedColumnsLeft) {
      var fixedColumnsWidth = this.wot.wtOverlays.leftOverlay.sumCellSizes(0, fixedColumnsLeft);
      pos += fixedColumnsWidth;
      width -= fixedColumnsWidth;
    }
    if (this.wot.wtTable.holder.clientWidth !== this.wot.wtTable.holder.offsetWidth) {
      width -= getScrollbarWidth();
    }
    return new WalkontableViewportColumnsCalculator(width, pos, this.wot.getSetting('totalColumns'), (function(sourceCol) {
      return $__5.wot.wtTable.getColumnWidth(sourceCol);
    }), visible ? null : this.wot.wtSettings.settings.viewportColumnCalculatorOverride, visible, this.wot.getSetting('stretchH'), (function(stretchedWidth, column) {
      return $__5.wot.getSetting('onBeforeStretchingColumnWidth', stretchedWidth, column);
    }));
  },
  createRenderCalculators: function() {
    var fastDraw = arguments[0] !== (void 0) ? arguments[0] : false;
    if (fastDraw) {
      var proposedRowsVisibleCalculator = this.createRowsCalculator(true);
      var proposedColumnsVisibleCalculator = this.createColumnsCalculator(true);
      if (!(this.areAllProposedVisibleRowsAlreadyRendered(proposedRowsVisibleCalculator) && this.areAllProposedVisibleColumnsAlreadyRendered(proposedColumnsVisibleCalculator))) {
        fastDraw = false;
      }
    }
    if (!fastDraw) {
      this.rowsRenderCalculator = this.createRowsCalculator();
      this.columnsRenderCalculator = this.createColumnsCalculator();
    }
    this.rowsVisibleCalculator = null;
    this.columnsVisibleCalculator = null;
    return fastDraw;
  },
  createVisibleCalculators: function() {
    this.rowsVisibleCalculator = this.createRowsCalculator(true);
    this.columnsVisibleCalculator = this.createColumnsCalculator(true);
  },
  areAllProposedVisibleRowsAlreadyRendered: function(proposedRowsVisibleCalculator) {
    if (this.rowsVisibleCalculator) {
      if (proposedRowsVisibleCalculator.startRow < this.rowsRenderCalculator.startRow || (proposedRowsVisibleCalculator.startRow === this.rowsRenderCalculator.startRow && proposedRowsVisibleCalculator.startRow > 0)) {
        return false;
      } else if (proposedRowsVisibleCalculator.endRow > this.rowsRenderCalculator.endRow || (proposedRowsVisibleCalculator.endRow === this.rowsRenderCalculator.endRow && proposedRowsVisibleCalculator.endRow < this.wot.getSetting('totalRows') - 1)) {
        return false;
      } else {
        return true;
      }
    }
    return false;
  },
  areAllProposedVisibleColumnsAlreadyRendered: function(proposedColumnsVisibleCalculator) {
    if (this.columnsVisibleCalculator) {
      if (proposedColumnsVisibleCalculator.startColumn < this.columnsRenderCalculator.startColumn || (proposedColumnsVisibleCalculator.startColumn === this.columnsRenderCalculator.startColumn && proposedColumnsVisibleCalculator.startColumn > 0)) {
        return false;
      } else if (proposedColumnsVisibleCalculator.endColumn > this.columnsRenderCalculator.endColumn || (proposedColumnsVisibleCalculator.endColumn === this.columnsRenderCalculator.endColumn && proposedColumnsVisibleCalculator.endColumn < this.wot.getSetting('totalColumns') - 1)) {
        return false;
      } else {
        return true;
      }
    }
    return false;
  }
}, {});
;
window.WalkontableViewport = WalkontableViewport;

//# 
},{"browser":24,"calculator/viewportColumns":4,"calculator/viewportRows":5,"eventManager":42,"helpers/dom/element":47}],24:[function(_dereq_,module,exports){
"use strict";
var $__shims_47_runtime__,
    $__es6collections__,
    $__pluginHooks__,
    $__numbro__,
    $__moment__,
    $__core__,
    $__renderers_47__95_cellDecorator__,
    $__cellTypes__,
    $___46__46__47_plugins_47_jqueryHandsontable__,
    $__helpers_47_array__,
    $__helpers_47_browser__,
    $__helpers_47_data__,
    $__helpers_47_date__,
    $__helpers_47_feature__,
    $__helpers_47_function__,
    $__helpers_47_mixed__,
    $__helpers_47_number__,
    $__helpers_47_object__,
    $__helpers_47_setting__,
    $__helpers_47_string__,
    $__helpers_47_unicode__,
    $__helpers_47_dom_47_element__,
    $__helpers_47_dom_47_event__,
    $__plugins__;
function Handsontable(rootElement, userSettings) {
  var instance = new Handsontable.Core(rootElement, userSettings || {});
  instance.init();
  return instance;
}
module.exports = Handsontable;
Handsontable.utils = {};
($__shims_47_runtime__ = _dereq_("shims/runtime"), $__shims_47_runtime__ && $__shims_47_runtime__.__esModule && $__shims_47_runtime__ || {default: $__shims_47_runtime__});
($__es6collections__ = _dereq_("es6collections"), $__es6collections__ && $__es6collections__.__esModule && $__es6collections__ || {default: $__es6collections__});
var Hooks = ($__pluginHooks__ = _dereq_("pluginHooks"), $__pluginHooks__ && $__pluginHooks__.__esModule && $__pluginHooks__ || {default: $__pluginHooks__}).Hooks;
var numbro = ($__numbro__ = _dereq_("numbro"), $__numbro__ && $__numbro__.__esModule && $__numbro__ || {default: $__numbro__}).default;
var moment = ($__moment__ = _dereq_("moment"), $__moment__ && $__moment__.__esModule && $__moment__ || {default: $__moment__}).default;
if (typeof window === 'object') {
  if (typeof window.numbro === 'undefined') {
    window.numbro = numbro;
  }
  if (typeof window.moment === 'undefined') {
    window.moment = moment;
  }
}
if (!Handsontable.hooks) {
  Handsontable.hooks = new Hooks();
}
Handsontable.utils.Hooks = Hooks;
($__core__ = _dereq_("core"), $__core__ && $__core__.__esModule && $__core__ || {default: $__core__});
($__renderers_47__95_cellDecorator__ = _dereq_("renderers/_cellDecorator"), $__renderers_47__95_cellDecorator__ && $__renderers_47__95_cellDecorator__.__esModule && $__renderers_47__95_cellDecorator__ || {default: $__renderers_47__95_cellDecorator__});
($__cellTypes__ = _dereq_("cellTypes"), $__cellTypes__ && $__cellTypes__.__esModule && $__cellTypes__ || {default: $__cellTypes__});
($___46__46__47_plugins_47_jqueryHandsontable__ = _dereq_("plugins/jqueryHandsontable"), $___46__46__47_plugins_47_jqueryHandsontable__ && $___46__46__47_plugins_47_jqueryHandsontable__.__esModule && $___46__46__47_plugins_47_jqueryHandsontable__ || {default: $___46__46__47_plugins_47_jqueryHandsontable__});
var arrayHelpers = ($__helpers_47_array__ = _dereq_("helpers/array"), $__helpers_47_array__ && $__helpers_47_array__.__esModule && $__helpers_47_array__ || {default: $__helpers_47_array__});
var browserHelpers = ($__helpers_47_browser__ = _dereq_("helpers/browser"), $__helpers_47_browser__ && $__helpers_47_browser__.__esModule && $__helpers_47_browser__ || {default: $__helpers_47_browser__});
var dataHelpers = ($__helpers_47_data__ = _dereq_("helpers/data"), $__helpers_47_data__ && $__helpers_47_data__.__esModule && $__helpers_47_data__ || {default: $__helpers_47_data__});
var dateHelpers = ($__helpers_47_date__ = _dereq_("helpers/date"), $__helpers_47_date__ && $__helpers_47_date__.__esModule && $__helpers_47_date__ || {default: $__helpers_47_date__});
var featureHelpers = ($__helpers_47_feature__ = _dereq_("helpers/feature"), $__helpers_47_feature__ && $__helpers_47_feature__.__esModule && $__helpers_47_feature__ || {default: $__helpers_47_feature__});
var functionHelpers = ($__helpers_47_function__ = _dereq_("helpers/function"), $__helpers_47_function__ && $__helpers_47_function__.__esModule && $__helpers_47_function__ || {default: $__helpers_47_function__});
var mixedHelpers = ($__helpers_47_mixed__ = _dereq_("helpers/mixed"), $__helpers_47_mixed__ && $__helpers_47_mixed__.__esModule && $__helpers_47_mixed__ || {default: $__helpers_47_mixed__});
var numberHelpers = ($__helpers_47_number__ = _dereq_("helpers/number"), $__helpers_47_number__ && $__helpers_47_number__.__esModule && $__helpers_47_number__ || {default: $__helpers_47_number__});
var objectHelpers = ($__helpers_47_object__ = _dereq_("helpers/object"), $__helpers_47_object__ && $__helpers_47_object__.__esModule && $__helpers_47_object__ || {default: $__helpers_47_object__});
var settingHelpers = ($__helpers_47_setting__ = _dereq_("helpers/setting"), $__helpers_47_setting__ && $__helpers_47_setting__.__esModule && $__helpers_47_setting__ || {default: $__helpers_47_setting__});
var stringHelpers = ($__helpers_47_string__ = _dereq_("helpers/string"), $__helpers_47_string__ && $__helpers_47_string__.__esModule && $__helpers_47_string__ || {default: $__helpers_47_string__});
var unicodeHelpers = ($__helpers_47_unicode__ = _dereq_("helpers/unicode"), $__helpers_47_unicode__ && $__helpers_47_unicode__.__esModule && $__helpers_47_unicode__ || {default: $__helpers_47_unicode__});
var domHelpers = ($__helpers_47_dom_47_element__ = _dereq_("helpers/dom/element"), $__helpers_47_dom_47_element__ && $__helpers_47_dom_47_element__.__esModule && $__helpers_47_dom_47_element__ || {default: $__helpers_47_dom_47_element__});
var domEventHelpers = ($__helpers_47_dom_47_event__ = _dereq_("helpers/dom/event"), $__helpers_47_dom_47_event__ && $__helpers_47_dom_47_event__.__esModule && $__helpers_47_dom_47_event__ || {default: $__helpers_47_dom_47_event__});
var HELPERS = [arrayHelpers, browserHelpers, dataHelpers, dateHelpers, featureHelpers, functionHelpers, mixedHelpers, numberHelpers, objectHelpers, settingHelpers, stringHelpers, unicodeHelpers];
var DOM = [domHelpers, domEventHelpers];
Handsontable.buildDate = 'Tue Nov 08 2016 12:39:38 GMT+0100 (CET)';
Handsontable.packageName = 'handsontable';
Handsontable.version = '0.29.0';
var baseVersion = '@@baseVersion';
if (!/^@@/.test(baseVersion)) {
  Handsontable.baseVersion = baseVersion;
}
Handsontable.plugins = {};
var registerPlugin = ($__plugins__ = _dereq_("plugins"), $__plugins__ && $__plugins__.__esModule && $__plugins__ || {default: $__plugins__}).registerPlugin;
Handsontable.plugins.registerPlugin = registerPlugin;
Handsontable.helper = {};
Handsontable.dom = {};
Handsontable.Dom = Handsontable.dom;
arrayHelpers.arrayEach(HELPERS, (function(helper) {
  arrayHelpers.arrayEach(Object.getOwnPropertyNames(helper), (function(key) {
    if (key.charAt(0) !== '_') {
      Handsontable.helper[key] = helper[key];
    }
  }));
}));
arrayHelpers.arrayEach(DOM, (function(helper) {
  arrayHelpers.arrayEach(Object.getOwnPropertyNames(helper), (function(key) {
    if (key.charAt(0) !== '_') {
      Handsontable.dom[key] = helper[key];
    }
  }));
}));

//# 
},{"cellTypes":25,"core":26,"es6collections":"es6collections","helpers/array":43,"helpers/browser":44,"helpers/data":45,"helpers/date":46,"helpers/dom/element":47,"helpers/dom/event":48,"helpers/feature":49,"helpers/function":50,"helpers/mixed":51,"helpers/number":52,"helpers/object":53,"helpers/setting":54,"helpers/string":55,"helpers/unicode":56,"moment":"moment","numbro":"numbro","pluginHooks":60,"plugins":61,"plugins/jqueryHandsontable":2,"renderers/_cellDecorator":117,"shims/runtime":124}],25:[function(_dereq_,module,exports){
"use strict";
var $__helpers_47_browser__,
    $__editors__,
    $__renderers__,
    $__editors_47_autocompleteEditor__,
    $__editors_47_checkboxEditor__,
    $__editors_47_dateEditor__,
    $__editors_47_dropdownEditor__,
    $__editors_47_handsontableEditor__,
    $__editors_47_mobileTextEditor__,
    $__editors_47_numericEditor__,
    $__editors_47_passwordEditor__,
    $__editors_47_selectEditor__,
    $__editors_47_textEditor__,
    $__renderers_47_autocompleteRenderer__,
    $__renderers_47_checkboxRenderer__,
    $__renderers_47_htmlRenderer__,
    $__renderers_47_numericRenderer__,
    $__renderers_47_passwordRenderer__,
    $__renderers_47_textRenderer__,
    $__validators_47_autocompleteValidator__,
    $__validators_47_dateValidator__,
    $__validators_47_timeValidator__,
    $__validators_47_numericValidator__,
    $__browser__;
var isMobileBrowser = ($__helpers_47_browser__ = _dereq_("helpers/browser"), $__helpers_47_browser__ && $__helpers_47_browser__.__esModule && $__helpers_47_browser__ || {default: $__helpers_47_browser__}).isMobileBrowser;
var getEditorConstructor = ($__editors__ = _dereq_("editors"), $__editors__ && $__editors__.__esModule && $__editors__ || {default: $__editors__}).getEditorConstructor;
var getRenderer = ($__renderers__ = _dereq_("renderers"), $__renderers__ && $__renderers__.__esModule && $__renderers__ || {default: $__renderers__}).getRenderer;
var AutocompleteEditor = ($__editors_47_autocompleteEditor__ = _dereq_("editors/autocompleteEditor"), $__editors_47_autocompleteEditor__ && $__editors_47_autocompleteEditor__.__esModule && $__editors_47_autocompleteEditor__ || {default: $__editors_47_autocompleteEditor__}).AutocompleteEditor;
var CheckboxEditor = ($__editors_47_checkboxEditor__ = _dereq_("editors/checkboxEditor"), $__editors_47_checkboxEditor__ && $__editors_47_checkboxEditor__.__esModule && $__editors_47_checkboxEditor__ || {default: $__editors_47_checkboxEditor__}).CheckboxEditor;
var DateEditor = ($__editors_47_dateEditor__ = _dereq_("editors/dateEditor"), $__editors_47_dateEditor__ && $__editors_47_dateEditor__.__esModule && $__editors_47_dateEditor__ || {default: $__editors_47_dateEditor__}).DateEditor;
var DropdownEditor = ($__editors_47_dropdownEditor__ = _dereq_("editors/dropdownEditor"), $__editors_47_dropdownEditor__ && $__editors_47_dropdownEditor__.__esModule && $__editors_47_dropdownEditor__ || {default: $__editors_47_dropdownEditor__}).DropdownEditor;
var HandsontableEditor = ($__editors_47_handsontableEditor__ = _dereq_("editors/handsontableEditor"), $__editors_47_handsontableEditor__ && $__editors_47_handsontableEditor__.__esModule && $__editors_47_handsontableEditor__ || {default: $__editors_47_handsontableEditor__}).HandsontableEditor;
var MobileTextEditor = ($__editors_47_mobileTextEditor__ = _dereq_("editors/mobileTextEditor"), $__editors_47_mobileTextEditor__ && $__editors_47_mobileTextEditor__.__esModule && $__editors_47_mobileTextEditor__ || {default: $__editors_47_mobileTextEditor__}).MobileTextEditor;
var NumericEditor = ($__editors_47_numericEditor__ = _dereq_("editors/numericEditor"), $__editors_47_numericEditor__ && $__editors_47_numericEditor__.__esModule && $__editors_47_numericEditor__ || {default: $__editors_47_numericEditor__}).NumericEditor;
var PasswordEditor = ($__editors_47_passwordEditor__ = _dereq_("editors/passwordEditor"), $__editors_47_passwordEditor__ && $__editors_47_passwordEditor__.__esModule && $__editors_47_passwordEditor__ || {default: $__editors_47_passwordEditor__}).PasswordEditor;
var SelectEditor = ($__editors_47_selectEditor__ = _dereq_("editors/selectEditor"), $__editors_47_selectEditor__ && $__editors_47_selectEditor__.__esModule && $__editors_47_selectEditor__ || {default: $__editors_47_selectEditor__}).SelectEditor;
var TextEditor = ($__editors_47_textEditor__ = _dereq_("editors/textEditor"), $__editors_47_textEditor__ && $__editors_47_textEditor__.__esModule && $__editors_47_textEditor__ || {default: $__editors_47_textEditor__}).TextEditor;
var AutocompleteRenderer = ($__renderers_47_autocompleteRenderer__ = _dereq_("renderers/autocompleteRenderer"), $__renderers_47_autocompleteRenderer__ && $__renderers_47_autocompleteRenderer__.__esModule && $__renderers_47_autocompleteRenderer__ || {default: $__renderers_47_autocompleteRenderer__}).AutocompleteRenderer;
var CheckboxRenderer = ($__renderers_47_checkboxRenderer__ = _dereq_("renderers/checkboxRenderer"), $__renderers_47_checkboxRenderer__ && $__renderers_47_checkboxRenderer__.__esModule && $__renderers_47_checkboxRenderer__ || {default: $__renderers_47_checkboxRenderer__}).CheckboxRenderer;
var HtmlRenderer = ($__renderers_47_htmlRenderer__ = _dereq_("renderers/htmlRenderer"), $__renderers_47_htmlRenderer__ && $__renderers_47_htmlRenderer__.__esModule && $__renderers_47_htmlRenderer__ || {default: $__renderers_47_htmlRenderer__}).HtmlRenderer;
var NumericRenderer = ($__renderers_47_numericRenderer__ = _dereq_("renderers/numericRenderer"), $__renderers_47_numericRenderer__ && $__renderers_47_numericRenderer__.__esModule && $__renderers_47_numericRenderer__ || {default: $__renderers_47_numericRenderer__}).NumericRenderer;
var PasswordRenderer = ($__renderers_47_passwordRenderer__ = _dereq_("renderers/passwordRenderer"), $__renderers_47_passwordRenderer__ && $__renderers_47_passwordRenderer__.__esModule && $__renderers_47_passwordRenderer__ || {default: $__renderers_47_passwordRenderer__}).PasswordRenderer;
var TextRenderer = ($__renderers_47_textRenderer__ = _dereq_("renderers/textRenderer"), $__renderers_47_textRenderer__ && $__renderers_47_textRenderer__.__esModule && $__renderers_47_textRenderer__ || {default: $__renderers_47_textRenderer__}).TextRenderer;
var AutocompleteValidator = ($__validators_47_autocompleteValidator__ = _dereq_("validators/autocompleteValidator"), $__validators_47_autocompleteValidator__ && $__validators_47_autocompleteValidator__.__esModule && $__validators_47_autocompleteValidator__ || {default: $__validators_47_autocompleteValidator__}).AutocompleteValidator;
var DateValidator = ($__validators_47_dateValidator__ = _dereq_("validators/dateValidator"), $__validators_47_dateValidator__ && $__validators_47_dateValidator__.__esModule && $__validators_47_dateValidator__ || {default: $__validators_47_dateValidator__}).DateValidator;
var TimeValidator = ($__validators_47_timeValidator__ = _dereq_("validators/timeValidator"), $__validators_47_timeValidator__ && $__validators_47_timeValidator__.__esModule && $__validators_47_timeValidator__ || {default: $__validators_47_timeValidator__}).TimeValidator;
var NumericValidator = ($__validators_47_numericValidator__ = _dereq_("validators/numericValidator"), $__validators_47_numericValidator__ && $__validators_47_numericValidator__.__esModule && $__validators_47_numericValidator__ || {default: $__validators_47_numericValidator__}).NumericValidator;
var Handsontable = ($__browser__ = _dereq_("browser"), $__browser__ && $__browser__.__esModule && $__browser__ || {default: $__browser__}).default;
Handsontable.AutocompleteCell = {
  editor: getEditorConstructor('autocomplete'),
  renderer: getRenderer('autocomplete'),
  validator: Handsontable.AutocompleteValidator
};
Handsontable.CheckboxCell = {
  editor: getEditorConstructor('checkbox'),
  renderer: getRenderer('checkbox')
};
Handsontable.TextCell = {
  editor: isMobileBrowser() ? getEditorConstructor('mobile') : getEditorConstructor('text'),
  renderer: getRenderer('text')
};
Handsontable.NumericCell = {
  editor: getEditorConstructor('numeric'),
  renderer: getRenderer('numeric'),
  validator: Handsontable.NumericValidator,
  dataType: 'number'
};
Handsontable.DateCell = {
  editor: getEditorConstructor('date'),
  validator: Handsontable.DateValidator,
  renderer: getRenderer('autocomplete')
};
Handsontable.TimeCell = {
  editor: getEditorConstructor('text'),
  validator: Handsontable.TimeValidator,
  renderer: getRenderer('text')
};
Handsontable.HandsontableCell = {
  editor: getEditorConstructor('handsontable'),
  renderer: getRenderer('autocomplete')
};
Handsontable.PasswordCell = {
  editor: getEditorConstructor('password'),
  renderer: getRenderer('password'),
  copyable: false
};
Handsontable.DropdownCell = {
  editor: getEditorConstructor('dropdown'),
  renderer: getRenderer('autocomplete'),
  validator: Handsontable.AutocompleteValidator
};
Handsontable.cellTypes = {
  text: Handsontable.TextCell,
  date: Handsontable.DateCell,
  time: Handsontable.TimeCell,
  numeric: Handsontable.NumericCell,
  checkbox: Handsontable.CheckboxCell,
  autocomplete: Handsontable.AutocompleteCell,
  handsontable: Handsontable.HandsontableCell,
  password: Handsontable.PasswordCell,
  dropdown: Handsontable.DropdownCell
};
Handsontable.cellLookup = {validator: {
    numeric: Handsontable.NumericValidator,
    autocomplete: Handsontable.AutocompleteValidator
  }};

//# 
},{"browser":24,"editors":30,"editors/autocompleteEditor":32,"editors/checkboxEditor":33,"editors/dateEditor":34,"editors/dropdownEditor":35,"editors/handsontableEditor":36,"editors/mobileTextEditor":37,"editors/numericEditor":38,"editors/passwordEditor":39,"editors/selectEditor":40,"editors/textEditor":41,"helpers/browser":44,"renderers":116,"renderers/autocompleteRenderer":118,"renderers/checkboxRenderer":119,"renderers/htmlRenderer":120,"renderers/numericRenderer":121,"renderers/passwordRenderer":122,"renderers/textRenderer":123,"validators/autocompleteValidator":130,"validators/dateValidator":131,"validators/numericValidator":132,"validators/timeValidator":133}],26:[function(_dereq_,module,exports){
"use strict";
var $__browser__,
    $__numbro__,
    $__helpers_47_dom_47_element__,
    $__helpers_47_setting__,
    $__helpers_47_function__,
    $__helpers_47_mixed__,
    $__helpers_47_browser__,
    $__dataMap__,
    $__editorManager__,
    $__eventManager__,
    $__helpers_47_object__,
    $__helpers_47_array__,
    $__plugins__,
    $__renderers__,
    $__helpers_47_string__,
    $__helpers_47_number__,
    $__tableView__,
    $__dataSource__,
    $__helpers_47_data__,
    $__utils_47_recordTranslator__,
    $__3rdparty_47_walkontable_47_src_47_cell_47_coords__,
    $__3rdparty_47_walkontable_47_src_47_cell_47_range__,
    $__3rdparty_47_walkontable_47_src_47_calculator_47_viewportColumns__;
var Handsontable = ($__browser__ = _dereq_("browser"), $__browser__ && $__browser__.__esModule && $__browser__ || {default: $__browser__}).default;
var numbro = ($__numbro__ = _dereq_("numbro"), $__numbro__ && $__numbro__.__esModule && $__numbro__ || {default: $__numbro__}).default;
var $__2 = ($__helpers_47_dom_47_element__ = _dereq_("helpers/dom/element"), $__helpers_47_dom_47_element__ && $__helpers_47_dom_47_element__.__esModule && $__helpers_47_dom_47_element__ || {default: $__helpers_47_dom_47_element__}),
    addClass = $__2.addClass,
    empty = $__2.empty,
    isChildOfWebComponentTable = $__2.isChildOfWebComponentTable,
    removeClass = $__2.removeClass;
var columnFactory = ($__helpers_47_setting__ = _dereq_("helpers/setting"), $__helpers_47_setting__ && $__helpers_47_setting__.__esModule && $__helpers_47_setting__ || {default: $__helpers_47_setting__}).columnFactory;
var isFunction = ($__helpers_47_function__ = _dereq_("helpers/function"), $__helpers_47_function__ && $__helpers_47_function__.__esModule && $__helpers_47_function__ || {default: $__helpers_47_function__}).isFunction;
var $__5 = ($__helpers_47_mixed__ = _dereq_("helpers/mixed"), $__helpers_47_mixed__ && $__helpers_47_mixed__.__esModule && $__helpers_47_mixed__ || {default: $__helpers_47_mixed__}),
    isDefined = $__5.isDefined,
    isUndefined = $__5.isUndefined;
var isMobileBrowser = ($__helpers_47_browser__ = _dereq_("helpers/browser"), $__helpers_47_browser__ && $__helpers_47_browser__.__esModule && $__helpers_47_browser__ || {default: $__helpers_47_browser__}).isMobileBrowser;
var DataMap = ($__dataMap__ = _dereq_("dataMap"), $__dataMap__ && $__dataMap__.__esModule && $__dataMap__ || {default: $__dataMap__}).DataMap;
var EditorManager = ($__editorManager__ = _dereq_("editorManager"), $__editorManager__ && $__editorManager__.__esModule && $__editorManager__ || {default: $__editorManager__}).EditorManager;
var eventManagerObject = ($__eventManager__ = _dereq_("eventManager"), $__eventManager__ && $__eventManager__.__esModule && $__eventManager__ || {default: $__eventManager__}).eventManager;
var $__10 = ($__helpers_47_object__ = _dereq_("helpers/object"), $__helpers_47_object__ && $__helpers_47_object__.__esModule && $__helpers_47_object__ || {default: $__helpers_47_object__}),
    deepClone = $__10.deepClone,
    duckSchema = $__10.duckSchema,
    extend = $__10.extend,
    isObject = $__10.isObject,
    isObjectEquals = $__10.isObjectEquals,
    deepObjectSize = $__10.deepObjectSize;
var $__11 = ($__helpers_47_array__ = _dereq_("helpers/array"), $__helpers_47_array__ && $__helpers_47_array__.__esModule && $__helpers_47_array__ || {default: $__helpers_47_array__}),
    arrayFlatten = $__11.arrayFlatten,
    arrayMap = $__11.arrayMap;
var getPlugin = ($__plugins__ = _dereq_("plugins"), $__plugins__ && $__plugins__.__esModule && $__plugins__ || {default: $__plugins__}).getPlugin;
var getRenderer = ($__renderers__ = _dereq_("renderers"), $__renderers__ && $__renderers__.__esModule && $__renderers__ || {default: $__renderers__}).getRenderer;
var randomString = ($__helpers_47_string__ = _dereq_("helpers/string"), $__helpers_47_string__ && $__helpers_47_string__.__esModule && $__helpers_47_string__ || {default: $__helpers_47_string__}).randomString;
var rangeEach = ($__helpers_47_number__ = _dereq_("helpers/number"), $__helpers_47_number__ && $__helpers_47_number__.__esModule && $__helpers_47_number__ || {default: $__helpers_47_number__}).rangeEach;
var TableView = ($__tableView__ = _dereq_("tableView"), $__tableView__ && $__tableView__.__esModule && $__tableView__ || {default: $__tableView__}).TableView;
var DataSource = ($__dataSource__ = _dereq_("dataSource"), $__dataSource__ && $__dataSource__.__esModule && $__dataSource__ || {default: $__dataSource__}).DataSource;
var $__18 = ($__helpers_47_data__ = _dereq_("helpers/data"), $__helpers_47_data__ && $__helpers_47_data__.__esModule && $__helpers_47_data__ || {default: $__helpers_47_data__}),
    translateRowsToColumns = $__18.translateRowsToColumns,
    cellMethodLookupFactory = $__18.cellMethodLookupFactory,
    spreadsheetColumnLabel = $__18.spreadsheetColumnLabel;
var getTranslator = ($__utils_47_recordTranslator__ = _dereq_("utils/recordTranslator"), $__utils_47_recordTranslator__ && $__utils_47_recordTranslator__.__esModule && $__utils_47_recordTranslator__ || {default: $__utils_47_recordTranslator__}).getTranslator;
var WalkontableCellCoords = ($__3rdparty_47_walkontable_47_src_47_cell_47_coords__ = _dereq_("3rdparty/walkontable/src/cell/coords"), $__3rdparty_47_walkontable_47_src_47_cell_47_coords__ && $__3rdparty_47_walkontable_47_src_47_cell_47_coords__.__esModule && $__3rdparty_47_walkontable_47_src_47_cell_47_coords__ || {default: $__3rdparty_47_walkontable_47_src_47_cell_47_coords__}).WalkontableCellCoords;
var WalkontableCellRange = ($__3rdparty_47_walkontable_47_src_47_cell_47_range__ = _dereq_("3rdparty/walkontable/src/cell/range"), $__3rdparty_47_walkontable_47_src_47_cell_47_range__ && $__3rdparty_47_walkontable_47_src_47_cell_47_range__.__esModule && $__3rdparty_47_walkontable_47_src_47_cell_47_range__ || {default: $__3rdparty_47_walkontable_47_src_47_cell_47_range__}).WalkontableCellRange;
var WalkontableViewportColumnsCalculator = ($__3rdparty_47_walkontable_47_src_47_calculator_47_viewportColumns__ = _dereq_("3rdparty/walkontable/src/calculator/viewportColumns"), $__3rdparty_47_walkontable_47_src_47_calculator_47_viewportColumns__ && $__3rdparty_47_walkontable_47_src_47_calculator_47_viewportColumns__.__esModule && $__3rdparty_47_walkontable_47_src_47_calculator_47_viewportColumns__ || {default: $__3rdparty_47_walkontable_47_src_47_calculator_47_viewportColumns__}).WalkontableViewportColumnsCalculator;
Handsontable.activeGuid = null;
Handsontable.Core = function Core(rootElement, userSettings) {
  var priv,
      datamap,
      dataSource,
      grid,
      selection,
      editorManager,
      instance = this,
      GridSettings = function() {},
      eventManager = eventManagerObject(instance);
  var recordTranslator = getTranslator(instance);
  extend(GridSettings.prototype, DefaultSettings.prototype);
  extend(GridSettings.prototype, userSettings);
  extend(GridSettings.prototype, expandType(userSettings));
  this.rootElement = rootElement;
  this.isHotTableEnv = isChildOfWebComponentTable(this.rootElement);
  Handsontable.eventManager.isHotTableEnv = this.isHotTableEnv;
  this.container = document.createElement('DIV');
  this.renderCall = false;
  rootElement.insertBefore(this.container, rootElement.firstChild);
  this.guid = 'ht_' + randomString();
  dataSource = new DataSource(instance);
  if (!this.rootElement.id || this.rootElement.id.substring(0, 3) === 'ht_') {
    this.rootElement.id = this.guid;
  }
  priv = {
    cellSettings: [],
    columnSettings: [],
    columnsSettingConflicts: ['data', 'width'],
    settings: new GridSettings(),
    selRange: null,
    isPopulated: null,
    scrollable: null,
    firstRun: true
  };
  grid = {
    alter: function(action, index, amount, source, keepEmptyRows) {
      var delta;
      amount = amount || 1;
      function spliceWith(data, index, count, toInject) {
        var valueFactory = (function() {
          var result;
          if (toInject === 'array') {
            result = [];
          } else if (toInject === 'object') {
            result = {};
          }
          return result;
        });
        var spliceArgs = arrayMap(new Array(count), (function() {
          return valueFactory();
        }));
        spliceArgs.unshift(index, 0);
        data.splice.apply(data, spliceArgs);
      }
      switch (action) {
        case 'insert_row':
          if (instance.getSettings().maxRows === instance.countSourceRows()) {
            return;
          }
          delta = datamap.createRow(index, amount, source);
          spliceWith(priv.cellSettings, index, amount, 'array');
          if (delta) {
            if (selection.isSelected() && priv.selRange.from.row >= index) {
              priv.selRange.from.row = priv.selRange.from.row + delta;
              selection.transformEnd(delta, 0);
            } else {
              selection.refreshBorders();
            }
          }
          break;
        case 'insert_col':
          delta = datamap.createCol(index, amount, source);
          for (var row = 0,
              len = instance.countSourceRows(); row < len; row++) {
            if (priv.cellSettings[row]) {
              spliceWith(priv.cellSettings[row], index, amount);
            }
          }
          if (delta) {
            if (Array.isArray(instance.getSettings().colHeaders)) {
              var spliceArray = [index, 0];
              spliceArray.length += delta;
              Array.prototype.splice.apply(instance.getSettings().colHeaders, spliceArray);
            }
            if (selection.isSelected() && priv.selRange.from.col >= index) {
              priv.selRange.from.col = priv.selRange.from.col + delta;
              selection.transformEnd(0, delta);
            } else {
              selection.refreshBorders();
            }
          }
          break;
        case 'remove_row':
          datamap.removeRow(index, amount, source);
          priv.cellSettings.splice(index, amount);
          var totalRows = instance.countRows();
          var fixedRowsTop = instance.getSettings().fixedRowsTop;
          if (fixedRowsTop >= index + 1) {
            instance.getSettings().fixedRowsTop -= Math.min(amount, fixedRowsTop - index);
          }
          var fixedRowsBottom = instance.getSettings().fixedRowsBottom;
          if (fixedRowsBottom && index >= totalRows - fixedRowsBottom) {
            instance.getSettings().fixedRowsBottom -= Math.min(amount, fixedRowsBottom);
          }
          grid.adjustRowsAndCols();
          selection.refreshBorders();
          break;
        case 'remove_col':
          var logicalColumnIndex = recordTranslator.toPhysicalColumn(index);
          datamap.removeCol(index, amount, source);
          for (var row$__25 = 0,
              len$__26 = instance.countSourceRows(); row$__25 < len$__26; row$__25++) {
            if (priv.cellSettings[row$__25]) {
              priv.cellSettings[row$__25].splice(logicalColumnIndex, amount);
            }
          }
          var fixedColumnsLeft = instance.getSettings().fixedColumnsLeft;
          if (fixedColumnsLeft >= index + 1) {
            instance.getSettings().fixedColumnsLeft -= Math.min(amount, fixedColumnsLeft - index);
          }
          if (Array.isArray(instance.getSettings().colHeaders)) {
            if (typeof logicalColumnIndex == 'undefined') {
              logicalColumnIndex = -1;
            }
            instance.getSettings().colHeaders.splice(logicalColumnIndex, amount);
          }
          grid.adjustRowsAndCols();
          selection.refreshBorders();
          break;
        default:
          throw new Error('There is no such action "' + action + '"');
      }
      if (!keepEmptyRows) {
        grid.adjustRowsAndCols();
      }
    },
    adjustRowsAndCols: function() {
      if (priv.settings.minRows) {
        var rows = instance.countRows();
        if (rows < priv.settings.minRows) {
          for (var r = 0,
              minRows = priv.settings.minRows; r < minRows - rows; r++) {
            datamap.createRow(instance.countRows(), 1, 'auto');
          }
        }
      }
      if (priv.settings.minSpareRows) {
        var emptyRows = instance.countEmptyRows(true);
        if (emptyRows < priv.settings.minSpareRows) {
          for (; emptyRows < priv.settings.minSpareRows && instance.countSourceRows() < priv.settings.maxRows; emptyRows++) {
            datamap.createRow(instance.countRows(), 1, 'auto');
          }
        }
      }
      {
        var emptyCols;
        if (priv.settings.minCols || priv.settings.minSpareCols) {
          emptyCols = instance.countEmptyCols(true);
        }
        if (priv.settings.minCols && !priv.settings.columns && instance.countCols() < priv.settings.minCols) {
          for (; instance.countCols() < priv.settings.minCols; emptyCols++) {
            datamap.createCol(instance.countCols(), 1, 'auto');
          }
        }
        if (priv.settings.minSpareCols && !priv.settings.columns && instance.dataType === 'array' && emptyCols < priv.settings.minSpareCols) {
          for (; emptyCols < priv.settings.minSpareCols && instance.countCols() < priv.settings.maxCols; emptyCols++) {
            datamap.createCol(instance.countCols(), 1, 'auto');
          }
        }
      }
      var rowCount = instance.countRows();
      var colCount = instance.countCols();
      if (rowCount === 0 || colCount === 0) {
        selection.deselect();
      }
      if (selection.isSelected()) {
        var selectionChanged = false;
        var fromRow = priv.selRange.from.row;
        var fromCol = priv.selRange.from.col;
        var toRow = priv.selRange.to.row;
        var toCol = priv.selRange.to.col;
        if (fromRow > rowCount - 1) {
          fromRow = rowCount - 1;
          selectionChanged = true;
          if (toRow > fromRow) {
            toRow = fromRow;
          }
        } else if (toRow > rowCount - 1) {
          toRow = rowCount - 1;
          selectionChanged = true;
          if (fromRow > toRow) {
            fromRow = toRow;
          }
        }
        if (fromCol > colCount - 1) {
          fromCol = colCount - 1;
          selectionChanged = true;
          if (toCol > fromCol) {
            toCol = fromCol;
          }
        } else if (toCol > colCount - 1) {
          toCol = colCount - 1;
          selectionChanged = true;
          if (fromCol > toCol) {
            fromCol = toCol;
          }
        }
        if (selectionChanged) {
          instance.selectCell(fromRow, fromCol, toRow, toCol);
        }
      }
      if (instance.view) {
        instance.view.wt.wtOverlays.adjustElementsSize();
      }
    },
    populateFromArray: function(start, input, end, source, method, direction, deltas) {
      var r,
          rlen,
          c,
          clen,
          setData = [],
          current = {};
      rlen = input.length;
      if (rlen === 0) {
        return false;
      }
      var repeatCol,
          repeatRow,
          cmax,
          rmax,
          baseEnd = {
            row: end === null ? null : end.row,
            col: end === null ? null : end.col
          };
      switch (method) {
        case 'shift_down':
          repeatCol = end ? end.col - start.col + 1 : 0;
          repeatRow = end ? end.row - start.row + 1 : 0;
          input = translateRowsToColumns(input);
          for (c = 0, clen = input.length, cmax = Math.max(clen, repeatCol); c < cmax; c++) {
            if (c < clen) {
              for (r = 0, rlen = input[c].length; r < repeatRow - rlen; r++) {
                input[c].push(input[c][r % rlen]);
              }
              input[c].unshift(start.col + c, start.row, 0);
              instance.spliceCol.apply(instance, input[c]);
            } else {
              input[c % clen][0] = start.col + c;
              instance.spliceCol.apply(instance, input[c % clen]);
            }
          }
          break;
        case 'shift_right':
          repeatCol = end ? end.col - start.col + 1 : 0;
          repeatRow = end ? end.row - start.row + 1 : 0;
          for (r = 0, rlen = input.length, rmax = Math.max(rlen, repeatRow); r < rmax; r++) {
            if (r < rlen) {
              for (c = 0, clen = input[r].length; c < repeatCol - clen; c++) {
                input[r].push(input[r][c % clen]);
              }
              input[r].unshift(start.row + r, start.col, 0);
              instance.spliceRow.apply(instance, input[r]);
            } else {
              input[r % rlen][0] = start.row + r;
              instance.spliceRow.apply(instance, input[r % rlen]);
            }
          }
          break;
        case 'overwrite':
        default:
          current.row = start.row;
          current.col = start.col;
          var selected = {
            row: (end && start) ? (end.row - start.row + 1) : 1,
            col: (end && start) ? (end.col - start.col + 1) : 1
          };
          var skippedRow = 0;
          var skippedColumn = 0;
          var pushData = true;
          var cellMeta;
          var getInputValue = function getInputValue(row) {
            var col = arguments[1] !== (void 0) ? arguments[1] : null;
            var rowValue = input[row % input.length];
            if (col !== null) {
              return rowValue[col % rowValue.length];
            }
            return rowValue;
          };
          var rowInputLength = input.length;
          var rowSelectionLength = end ? end.row - start.row + 1 : 0;
          if (end) {
            rlen = rowSelectionLength;
          } else {
            rlen = Math.max(rowInputLength, rowSelectionLength);
          }
          for (r = 0; r < rlen; r++) {
            if ((end && current.row > end.row && rowSelectionLength > rowInputLength) || (!priv.settings.allowInsertRow && current.row > instance.countRows() - 1) || (current.row >= priv.settings.maxRows)) {
              break;
            }
            var logicalRow = r - skippedRow;
            var colInputLength = getInputValue(logicalRow).length;
            var colSelectionLength = end ? end.col - start.col + 1 : 0;
            if (end) {
              clen = colSelectionLength;
            } else {
              clen = Math.max(colInputLength, colSelectionLength);
            }
            current.col = start.col;
            cellMeta = instance.getCellMeta(current.row, current.col);
            if ((source === 'paste' || source === 'autofill') && cellMeta.skipRowOnPaste) {
              skippedRow++;
              current.row++;
              rlen++;
              continue;
            }
            skippedColumn = 0;
            for (c = 0; c < clen; c++) {
              if ((end && current.col > end.col && colSelectionLength > colInputLength) || (!priv.settings.allowInsertColumn && current.col > instance.countCols() - 1) || (current.col >= priv.settings.maxCols)) {
                break;
              }
              cellMeta = instance.getCellMeta(current.row, current.col);
              if ((source === 'paste' || source === 'autofill') && cellMeta.skipColumnOnPaste) {
                skippedColumn++;
                current.col++;
                clen++;
                continue;
              }
              if (cellMeta.readOnly) {
                current.col++;
                continue;
              }
              var logicalColumn = c - skippedColumn;
              var value = getInputValue(logicalRow, logicalColumn);
              var orgValue = instance.getDataAtCell(current.row, current.col);
              var index = {
                row: logicalRow,
                col: logicalColumn
              };
              if (source === 'autofill') {
                var result = instance.runHooks('beforeAutofillInsidePopulate', index, direction, input, deltas, {}, selected);
                if (result) {
                  value = isUndefined(result.value) ? value : result.value;
                }
              }
              if (value !== null && typeof value === 'object') {
                if (orgValue === null || typeof orgValue !== 'object') {
                  pushData = false;
                } else {
                  var orgValueSchema = duckSchema(orgValue[0] || orgValue);
                  var valueSchema = duckSchema(value[0] || value);
                  if (isObjectEquals(orgValueSchema, valueSchema)) {
                    value = deepClone(value);
                  } else {
                    pushData = false;
                  }
                }
              } else if (orgValue !== null && typeof orgValue === 'object') {
                pushData = false;
              }
              if (pushData) {
                setData.push([current.row, current.col, value]);
              }
              pushData = true;
              current.col++;
            }
            current.row++;
          }
          instance.setDataAtCell(setData, null, null, source || 'populateFromArray');
          break;
      }
    }
  };
  this.selection = selection = {
    inProgress: false,
    selectedHeader: {
      cols: false,
      rows: false
    },
    setSelectedHeaders: function() {
      var rows = arguments[0] !== (void 0) ? arguments[0] : false;
      var cols = arguments[1] !== (void 0) ? arguments[1] : false;
      var corner = arguments[2] !== (void 0) ? arguments[2] : false;
      instance.selection.selectedHeader.rows = rows;
      instance.selection.selectedHeader.cols = cols;
      instance.selection.selectedHeader.corner = corner;
    },
    begin: function() {
      instance.selection.inProgress = true;
    },
    finish: function() {
      var sel = instance.getSelected();
      Handsontable.hooks.run(instance, 'afterSelectionEnd', sel[0], sel[1], sel[2], sel[3]);
      Handsontable.hooks.run(instance, 'afterSelectionEndByProp', sel[0], instance.colToProp(sel[1]), sel[2], instance.colToProp(sel[3]));
      instance.selection.inProgress = false;
    },
    isInProgress: function() {
      return instance.selection.inProgress;
    },
    setRangeStart: function(coords, keepEditorOpened) {
      Handsontable.hooks.run(instance, 'beforeSetRangeStart', coords);
      priv.selRange = new WalkontableCellRange(coords, coords, coords);
      selection.setRangeEnd(coords, null, keepEditorOpened);
    },
    setRangeStartOnly: function(coords) {
      Handsontable.hooks.run(instance, 'beforeSetRangeStartOnly', coords);
      priv.selRange = new WalkontableCellRange(coords, coords, coords);
    },
    setRangeEnd: function(coords, scrollToCell, keepEditorOpened) {
      if (priv.selRange === null) {
        return;
      }
      var disableVisualSelection,
          isHeaderSelected = false,
          areCoordsPositive = true;
      var firstVisibleRow = instance.view.wt.wtTable.getFirstVisibleRow();
      var firstVisibleColumn = instance.view.wt.wtTable.getFirstVisibleColumn();
      var newRangeCoords = {
        row: null,
        col: null
      };
      Handsontable.hooks.run(instance, 'beforeSetRangeEnd', coords);
      instance.selection.begin();
      newRangeCoords.row = coords.row < 0 ? firstVisibleRow : coords.row;
      newRangeCoords.col = coords.col < 0 ? firstVisibleColumn : coords.col;
      priv.selRange.to = new WalkontableCellCoords(newRangeCoords.row, newRangeCoords.col);
      if (!priv.settings.multiSelect) {
        priv.selRange.from = coords;
      }
      instance.view.wt.selections.current.clear();
      disableVisualSelection = instance.getCellMeta(priv.selRange.highlight.row, priv.selRange.highlight.col).disableVisualSelection;
      if (typeof disableVisualSelection === 'string') {
        disableVisualSelection = [disableVisualSelection];
      }
      if (disableVisualSelection === false || Array.isArray(disableVisualSelection) && disableVisualSelection.indexOf('current') === -1) {
        instance.view.wt.selections.current.add(priv.selRange.highlight);
      }
      instance.view.wt.selections.area.clear();
      if ((disableVisualSelection === false || Array.isArray(disableVisualSelection) && disableVisualSelection.indexOf('area') === -1) && selection.isMultiple()) {
        instance.view.wt.selections.area.add(priv.selRange.from);
        instance.view.wt.selections.area.add(priv.selRange.to);
      }
      if (priv.settings.currentHeaderClassName || priv.settings.currentRowClassName || priv.settings.currentColClassName) {
        instance.view.wt.selections.highlight.clear();
        instance.view.wt.selections.highlight.add(priv.selRange.from);
        instance.view.wt.selections.highlight.add(priv.selRange.to);
      }
      Handsontable.hooks.run(instance, 'afterSelection', priv.selRange.from.row, priv.selRange.from.col, priv.selRange.to.row, priv.selRange.to.col);
      Handsontable.hooks.run(instance, 'afterSelectionByProp', priv.selRange.from.row, datamap.colToProp(priv.selRange.from.col), priv.selRange.to.row, datamap.colToProp(priv.selRange.to.col));
      if ((priv.selRange.from.row === 0 && priv.selRange.to.row === instance.countRows() - 1 && instance.countRows() > 1) || (priv.selRange.from.col === 0 && priv.selRange.to.col === instance.countCols() - 1 && instance.countCols() > 1)) {
        isHeaderSelected = true;
      }
      if (coords.row < 0 || coords.col < 0) {
        areCoordsPositive = false;
      }
      if (scrollToCell !== false && !isHeaderSelected && areCoordsPositive) {
        if (priv.selRange.from && !selection.isMultiple()) {
          instance.view.scrollViewport(priv.selRange.from);
        } else {
          instance.view.scrollViewport(coords);
        }
      }
      selection.refreshBorders(null, keepEditorOpened);
    },
    refreshBorders: function(revertOriginal, keepEditor) {
      if (!keepEditor) {
        editorManager.destroyEditor(revertOriginal);
      }
      instance.view.render();
      if (selection.isSelected() && !keepEditor) {
        editorManager.prepareEditor();
      }
    },
    isMultiple: function() {
      var isMultiple = !(priv.selRange.to.col === priv.selRange.from.col && priv.selRange.to.row === priv.selRange.from.row),
          modifier = Handsontable.hooks.run(instance, 'afterIsMultipleSelection', isMultiple);
      if (isMultiple) {
        return modifier;
      }
    },
    transformStart: function(rowDelta, colDelta, force, keepEditorOpened) {
      var delta = new WalkontableCellCoords(rowDelta, colDelta),
          rowTransformDir = 0,
          colTransformDir = 0,
          totalRows,
          totalCols,
          coords,
          fixedRowsBottom;
      instance.runHooks('modifyTransformStart', delta);
      totalRows = instance.countRows();
      totalCols = instance.countCols();
      fixedRowsBottom = instance.getSettings().fixedRowsBottom;
      if (priv.selRange.highlight.row + rowDelta > totalRows - 1) {
        if (force && priv.settings.minSpareRows > 0 && !(fixedRowsBottom && priv.selRange.highlight.row >= totalRows - fixedRowsBottom - 1)) {
          instance.alter('insert_row', totalRows);
          totalRows = instance.countRows();
        } else if (priv.settings.autoWrapCol) {
          delta.row = 1 - totalRows;
          delta.col = priv.selRange.highlight.col + delta.col == totalCols - 1 ? 1 - totalCols : 1;
        }
      } else if (priv.settings.autoWrapCol && priv.selRange.highlight.row + delta.row < 0 && priv.selRange.highlight.col + delta.col >= 0) {
        delta.row = totalRows - 1;
        delta.col = priv.selRange.highlight.col + delta.col == 0 ? totalCols - 1 : -1;
      }
      if (priv.selRange.highlight.col + delta.col > totalCols - 1) {
        if (force && priv.settings.minSpareCols > 0) {
          instance.alter('insert_col', totalCols);
          totalCols = instance.countCols();
        } else if (priv.settings.autoWrapRow) {
          delta.row = priv.selRange.highlight.row + delta.row == totalRows - 1 ? 1 - totalRows : 1;
          delta.col = 1 - totalCols;
        }
      } else if (priv.settings.autoWrapRow && priv.selRange.highlight.col + delta.col < 0 && priv.selRange.highlight.row + delta.row >= 0) {
        delta.row = priv.selRange.highlight.row + delta.row == 0 ? totalRows - 1 : -1;
        delta.col = totalCols - 1;
      }
      coords = new WalkontableCellCoords(priv.selRange.highlight.row + delta.row, priv.selRange.highlight.col + delta.col);
      if (coords.row < 0) {
        rowTransformDir = -1;
        coords.row = 0;
      } else if (coords.row > 0 && coords.row >= totalRows) {
        rowTransformDir = 1;
        coords.row = totalRows - 1;
      }
      if (coords.col < 0) {
        colTransformDir = -1;
        coords.col = 0;
      } else if (coords.col > 0 && coords.col >= totalCols) {
        colTransformDir = 1;
        coords.col = totalCols - 1;
      }
      instance.runHooks('afterModifyTransformStart', coords, rowTransformDir, colTransformDir);
      selection.setRangeStart(coords, keepEditorOpened);
    },
    transformEnd: function(rowDelta, colDelta) {
      var delta = new WalkontableCellCoords(rowDelta, colDelta),
          rowTransformDir = 0,
          colTransformDir = 0,
          totalRows,
          totalCols,
          coords;
      instance.runHooks('modifyTransformEnd', delta);
      totalRows = instance.countRows();
      totalCols = instance.countCols();
      coords = new WalkontableCellCoords(priv.selRange.to.row + delta.row, priv.selRange.to.col + delta.col);
      if (coords.row < 0) {
        rowTransformDir = -1;
        coords.row = 0;
      } else if (coords.row > 0 && coords.row >= totalRows) {
        rowTransformDir = 1;
        coords.row = totalRows - 1;
      }
      if (coords.col < 0) {
        colTransformDir = -1;
        coords.col = 0;
      } else if (coords.col > 0 && coords.col >= totalCols) {
        colTransformDir = 1;
        coords.col = totalCols - 1;
      }
      instance.runHooks('afterModifyTransformEnd', coords, rowTransformDir, colTransformDir);
      selection.setRangeEnd(coords, true);
    },
    isSelected: function() {
      return (priv.selRange !== null);
    },
    inInSelection: function(coords) {
      if (!selection.isSelected()) {
        return false;
      }
      return priv.selRange.includes(coords);
    },
    deselect: function() {
      if (!selection.isSelected()) {
        return;
      }
      instance.selection.inProgress = false;
      priv.selRange = null;
      instance.view.wt.selections.current.clear();
      instance.view.wt.selections.area.clear();
      if (priv.settings.currentHeaderClassName || priv.settings.currentRowClassName || priv.settings.currentColClassName) {
        instance.view.wt.selections.highlight.clear();
      }
      editorManager.destroyEditor();
      selection.refreshBorders();
      removeClass(instance.rootElement, ['ht__selection--rows', 'ht__selection--columns']);
      Handsontable.hooks.run(instance, 'afterDeselect');
    },
    selectAll: function() {
      if (!priv.settings.multiSelect) {
        return;
      }
      selection.setRangeStart(new WalkontableCellCoords(0, 0));
      selection.setRangeEnd(new WalkontableCellCoords(instance.countRows() - 1, instance.countCols() - 1), false);
    },
    empty: function() {
      if (!selection.isSelected()) {
        return;
      }
      var topLeft = priv.selRange.getTopLeftCorner();
      var bottomRight = priv.selRange.getBottomRightCorner();
      var r,
          c,
          changes = [];
      for (r = topLeft.row; r <= bottomRight.row; r++) {
        for (c = topLeft.col; c <= bottomRight.col; c++) {
          if (!instance.getCellMeta(r, c).readOnly) {
            changes.push([r, c, '']);
          }
        }
      }
      instance.setDataAtCell(changes);
    }
  };
  this.init = function() {
    dataSource.setData(priv.settings.data);
    Handsontable.hooks.run(instance, 'beforeInit');
    if (isMobileBrowser()) {
      addClass(instance.rootElement, 'mobile');
    }
    this.updateSettings(priv.settings, true);
    this.view = new TableView(this);
    editorManager = new EditorManager(instance, priv, selection, datamap);
    this.forceFullRender = true;
    Handsontable.hooks.run(instance, 'init');
    this.view.render();
    if (typeof priv.firstRun === 'object') {
      Handsontable.hooks.run(instance, 'afterChange', priv.firstRun[0], priv.firstRun[1]);
      priv.firstRun = false;
    }
    Handsontable.hooks.run(instance, 'afterInit');
  };
  function ValidatorsQueue() {
    var resolved = false;
    return {
      validatorsInQueue: 0,
      valid: true,
      addValidatorToQueue: function() {
        this.validatorsInQueue++;
        resolved = false;
      },
      removeValidatorFormQueue: function() {
        this.validatorsInQueue = this.validatorsInQueue - 1 < 0 ? 0 : this.validatorsInQueue - 1;
        this.checkIfQueueIsEmpty();
      },
      onQueueEmpty: function(valid) {},
      checkIfQueueIsEmpty: function() {
        if (this.validatorsInQueue == 0 && resolved == false) {
          resolved = true;
          this.onQueueEmpty(this.valid);
        }
      }
    };
  }
  function validateChanges(changes, source, callback) {
    var waitingForValidator = new ValidatorsQueue();
    waitingForValidator.onQueueEmpty = resolve;
    for (var i = changes.length - 1; i >= 0; i--) {
      if (changes[i] === null) {
        changes.splice(i, 1);
      } else {
        var row = changes[i][0];
        var col = datamap.propToCol(changes[i][1]);
        var cellProperties = instance.getCellMeta(row, col);
        if (cellProperties.type === 'numeric' && typeof changes[i][3] === 'string') {
          if (changes[i][3].length > 0 && (/^-?[\d\s]*(\.|\,)?\d*$/.test(changes[i][3]) || cellProperties.format)) {
            var len = changes[i][3].length;
            if (isUndefined(cellProperties.language)) {
              numbro.culture('en-US');
            } else if (changes[i][3].indexOf('.') === len - 3 && changes[i][3].indexOf(',') === -1) {
              numbro.culture('en-US');
            } else {
              numbro.culture(cellProperties.language);
            }
            var delimiters = numbro.cultureData(numbro.culture()).delimiters;
            if (numbro.validate(changes[i][3]) && !isNaN(changes[i][3])) {
              changes[i][3] = parseFloat(changes[i][3]);
            } else {
              changes[i][3] = numbro().unformat(changes[i][3]);
            }
          }
        }
        if (instance.getCellValidator(cellProperties)) {
          waitingForValidator.addValidatorToQueue();
          instance.validateCell(changes[i][3], cellProperties, (function(i, cellProperties) {
            return function(result) {
              if (typeof result !== 'boolean') {
                throw new Error('Validation error: result is not boolean');
              }
              if (result === false && cellProperties.allowInvalid === false) {
                changes.splice(i, 1);
                cellProperties.valid = true;
                --i;
              }
              waitingForValidator.removeValidatorFormQueue();
            };
          })(i, cellProperties), source);
        }
      }
    }
    waitingForValidator.checkIfQueueIsEmpty();
    function resolve() {
      var beforeChangeResult;
      if (changes.length) {
        beforeChangeResult = Handsontable.hooks.run(instance, 'beforeChange', changes, source);
        if (isFunction(beforeChangeResult)) {
          console.warn('Your beforeChange callback returns a function. It\'s not supported since Handsontable 0.12.1 (and the returned function will not be executed).');
        } else if (beforeChangeResult === false) {
          changes.splice(0, changes.length);
        }
      }
      callback();
    }
  }
  function applyChanges(changes, source) {
    var i = changes.length - 1;
    if (i < 0) {
      return;
    }
    for (; 0 <= i; i--) {
      var skipThisChange = false;
      if (changes[i] === null) {
        changes.splice(i, 1);
        continue;
      }
      if (changes[i][2] == null && changes[i][3] == null) {
        continue;
      }
      if (priv.settings.allowInsertRow) {
        while (changes[i][0] > instance.countRows() - 1) {
          var numberOfCreatedRows = datamap.createRow();
          if (numberOfCreatedRows === 0) {
            skipThisChange = true;
            break;
          }
        }
      }
      if (skipThisChange) {
        continue;
      }
      if (instance.dataType === 'array' && (!priv.settings.columns || priv.settings.columns.length === 0) && priv.settings.allowInsertColumn) {
        while (datamap.propToCol(changes[i][1]) > instance.countCols() - 1) {
          datamap.createCol();
        }
      }
      datamap.set(changes[i][0], changes[i][1], changes[i][3]);
    }
    instance.forceFullRender = true;
    grid.adjustRowsAndCols();
    Handsontable.hooks.run(instance, 'beforeChangeRender', changes, source);
    selection.refreshBorders(null, true);
    instance.view.wt.wtOverlays.adjustElementsSize();
    Handsontable.hooks.run(instance, 'afterChange', changes, source || 'edit');
  }
  this.validateCell = function(value, cellProperties, callback, source) {
    var validator = instance.getCellValidator(cellProperties);
    function done(valid) {
      var col = cellProperties.visualCol,
          row = cellProperties.visualRow,
          td = instance.getCell(row, col, true);
      if (td && td.nodeName != 'TH') {
        instance.view.wt.wtSettings.settings.cellRenderer(row, col, td);
      }
      callback(valid);
    }
    if (Object.prototype.toString.call(validator) === '[object RegExp]') {
      validator = (function(validator) {
        return function(value, callback) {
          callback(validator.test(value));
        };
      })(validator);
    }
    if (isFunction(validator)) {
      value = Handsontable.hooks.run(instance, 'beforeValidate', value, cellProperties.visualRow, cellProperties.prop, source);
      instance._registerTimeout(setTimeout(function() {
        validator.call(cellProperties, value, function(valid) {
          valid = Handsontable.hooks.run(instance, 'afterValidate', valid, value, cellProperties.visualRow, cellProperties.prop, source);
          cellProperties.valid = valid;
          done(valid);
          Handsontable.hooks.run(instance, 'postAfterValidate', valid, value, cellProperties.visualRow, cellProperties.prop, source);
        });
      }, 0));
    } else {
      instance._registerTimeout(setTimeout(function() {
        cellProperties.valid = true;
        done(cellProperties.valid);
      }, 0));
    }
  };
  function setDataInputToArray(row, propOrCol, value) {
    if (typeof row === 'object') {
      return row;
    } else {
      return [[row, propOrCol, value]];
    }
  }
  this.setDataAtCell = function(row, col, value, source) {
    var input = setDataInputToArray(row, col, value),
        i,
        ilen,
        changes = [],
        prop;
    for (i = 0, ilen = input.length; i < ilen; i++) {
      if (typeof input[i] !== 'object') {
        throw new Error('Method `setDataAtCell` accepts row number or changes array of arrays as its first parameter');
      }
      if (typeof input[i][1] !== 'number') {
        throw new Error('Method `setDataAtCell` accepts row and column number as its parameters. If you want to use object property name, use method `setDataAtRowProp`');
      }
      prop = datamap.colToProp(input[i][1]);
      changes.push([input[i][0], prop, dataSource.getAtCell(recordTranslator.toPhysicalRow(input[i][0]), input[i][1]), input[i][2]]);
    }
    if (!source && typeof row === 'object') {
      source = col;
    }
    instance.runHooks('afterSetDataAtCell', changes, source);
    validateChanges(changes, source, function() {
      applyChanges(changes, source);
    });
  };
  this.setDataAtRowProp = function(row, prop, value, source) {
    var input = setDataInputToArray(row, prop, value),
        i,
        ilen,
        changes = [];
    for (i = 0, ilen = input.length; i < ilen; i++) {
      changes.push([input[i][0], input[i][1], dataSource.getAtCell(recordTranslator.toPhysicalRow(input[i][0]), input[i][1]), input[i][2]]);
    }
    if (!source && typeof row === 'object') {
      source = prop;
    }
    instance.runHooks('afterSetDataAtRowProp', changes, source);
    validateChanges(changes, source, function() {
      applyChanges(changes, source);
    });
  };
  this.listen = function() {
    Handsontable.activeGuid = instance.guid;
  };
  this.unlisten = function() {
    Handsontable.activeGuid = null;
  };
  this.isListening = function() {
    return Handsontable.activeGuid === instance.guid;
  };
  this.destroyEditor = function(revertOriginal) {
    selection.refreshBorders(revertOriginal);
  };
  this.populateFromArray = function(row, col, input, endRow, endCol, source, method, direction, deltas) {
    var c;
    if (!(typeof input === 'object' && typeof input[0] === 'object')) {
      throw new Error('populateFromArray parameter `input` must be an array of arrays');
    }
    c = typeof endRow === 'number' ? new WalkontableCellCoords(endRow, endCol) : null;
    return grid.populateFromArray(new WalkontableCellCoords(row, col), input, c, source, method, direction, deltas);
  };
  this.spliceCol = function(col, index, amount) {
    return datamap.spliceCol.apply(datamap, arguments);
  };
  this.spliceRow = function(row, index, amount) {
    return datamap.spliceRow.apply(datamap, arguments);
  };
  this.getSelected = function() {
    if (selection.isSelected()) {
      return [priv.selRange.from.row, priv.selRange.from.col, priv.selRange.to.row, priv.selRange.to.col];
    }
  };
  this.getSelectedRange = function() {
    if (selection.isSelected()) {
      return priv.selRange;
    }
  };
  this.render = function() {
    if (instance.view) {
      instance.renderCall = true;
      instance.forceFullRender = true;
      selection.refreshBorders(null, true);
    }
  };
  this.loadData = function(data) {
    if (Array.isArray(priv.settings.dataSchema)) {
      instance.dataType = 'array';
    } else if (isFunction(priv.settings.dataSchema)) {
      instance.dataType = 'function';
    } else {
      instance.dataType = 'object';
    }
    if (datamap) {
      datamap.destroy();
    }
    datamap = new DataMap(instance, priv, GridSettings);
    if (typeof data === 'object' && data !== null) {
      if (!(data.push && data.splice)) {
        data = [data];
      }
    } else if (data === null) {
      data = [];
      var row;
      var r = 0;
      var rlen = 0;
      var dataSchema = datamap.getSchema();
      for (r = 0, rlen = priv.settings.startRows; r < rlen; r++) {
        if ((instance.dataType === 'object' || instance.dataType === 'function') && priv.settings.dataSchema) {
          row = deepClone(dataSchema);
          data.push(row);
        } else if (instance.dataType === 'array') {
          row = deepClone(dataSchema[0]);
          data.push(row);
        } else {
          row = [];
          for (var c = 0,
              clen = priv.settings.startCols; c < clen; c++) {
            row.push(null);
          }
          data.push(row);
        }
      }
    } else {
      throw new Error('loadData only accepts array of objects or array of arrays (' + typeof data + ' given)');
    }
    priv.isPopulated = false;
    GridSettings.prototype.data = data;
    if (Array.isArray(data[0])) {
      instance.dataType = 'array';
    }
    datamap.dataSource = data;
    dataSource.data = data;
    dataSource.dataType = instance.dataType;
    dataSource.colToProp = datamap.colToProp.bind(datamap);
    dataSource.propToCol = datamap.propToCol.bind(datamap);
    clearCellSettingCache();
    grid.adjustRowsAndCols();
    Handsontable.hooks.run(instance, 'afterLoadData', priv.firstRun);
    if (priv.firstRun) {
      priv.firstRun = [null, 'loadData'];
    } else {
      Handsontable.hooks.run(instance, 'afterChange', null, 'loadData');
      instance.render();
    }
    priv.isPopulated = true;
    function clearCellSettingCache() {
      priv.cellSettings.length = 0;
    }
  };
  this.getData = function(r, c, r2, c2) {
    if (isUndefined(r)) {
      return datamap.getAll();
    } else {
      return datamap.getRange(new WalkontableCellCoords(r, c), new WalkontableCellCoords(r2, c2), datamap.DESTINATION_RENDERER);
    }
  };
  this.getCopyableText = function(startRow, startCol, endRow, endCol) {
    return datamap.getCopyableText(new WalkontableCellCoords(startRow, startCol), new WalkontableCellCoords(endRow, endCol));
  };
  this.getCopyableData = function(row, column) {
    return datamap.getCopyable(row, datamap.colToProp(column));
  };
  this.getSchema = function() {
    return datamap.getSchema();
  };
  this.updateSettings = function(settings, init) {
    var columnsAsFunc = false;
    var i;
    var j;
    var clen;
    if (isDefined(settings.rows)) {
      throw new Error('"rows" setting is no longer supported. do you mean startRows, minRows or maxRows?');
    }
    if (isDefined(settings.cols)) {
      throw new Error('"cols" setting is no longer supported. do you mean startCols, minCols or maxCols?');
    }
    for (i in settings) {
      if (i === 'data') {
        continue;
      } else {
        if (Handsontable.hooks.getRegistered().indexOf(i) > -1) {
          if (isFunction(settings[i]) || Array.isArray(settings[i])) {
            instance.addHook(i, settings[i]);
          }
        } else {
          if (!init && settings.hasOwnProperty(i)) {
            GridSettings.prototype[i] = settings[i];
          }
        }
      }
    }
    if (settings.data === void 0 && priv.settings.data === void 0) {
      instance.loadData(null);
    } else if (settings.data !== void 0) {
      instance.loadData(settings.data);
    } else if (settings.columns !== void 0) {
      datamap.createMap();
    }
    clen = instance.countCols();
    if (settings.columns && isFunction(settings.columns)) {
      clen = instance.countSourceCols();
      columnsAsFunc = true;
    }
    if (settings.cell !== void 0 || settings.cells !== void 0 || settings.columns !== void 0) {
      priv.cellSettings.length = 0;
    }
    if (clen > 0) {
      var proto;
      var column;
      for (i = 0, j = 0; i < clen; i++) {
        if (columnsAsFunc && !settings.columns(i)) {
          continue;
        }
        priv.columnSettings[j] = columnFactory(GridSettings, priv.columnsSettingConflicts);
        proto = priv.columnSettings[j].prototype;
        if (GridSettings.prototype.columns) {
          if (columnsAsFunc) {
            column = GridSettings.prototype.columns(i);
          } else {
            column = GridSettings.prototype.columns[j];
          }
          if (column) {
            extend(proto, column);
            extend(proto, expandType(column));
          }
        }
        j++;
      }
    }
    if (isDefined(settings.cell)) {
      for (var key in settings.cell) {
        if (settings.cell.hasOwnProperty(key)) {
          var cell = settings.cell[key];
          instance.setCellMetaObject(cell.row, cell.col, cell);
        }
      }
    }
    Handsontable.hooks.run(instance, 'afterCellMetaReset');
    if (isDefined(settings.className)) {
      if (GridSettings.prototype.className) {
        removeClass(instance.rootElement, GridSettings.prototype.className);
      }
      if (settings.className) {
        addClass(instance.rootElement, settings.className);
      }
    }
    var currentHeight = instance.rootElement.style.height;
    if (currentHeight !== '') {
      currentHeight = parseInt(instance.rootElement.style.height, 10);
    }
    var height = settings.height;
    if (isFunction(height)) {
      height = height();
    }
    if (init) {
      var initialStyle = instance.rootElement.getAttribute('style');
      if (initialStyle) {
        instance.rootElement.setAttribute('data-initialstyle', instance.rootElement.getAttribute('style'));
      }
    }
    if (height === null) {
      var initialStyle$__27 = instance.rootElement.getAttribute('data-initialstyle');
      if (initialStyle$__27 && (initialStyle$__27.indexOf('height') > -1 || initialStyle$__27.indexOf('overflow') > -1)) {
        instance.rootElement.setAttribute('style', initialStyle$__27);
      } else {
        instance.rootElement.style.height = '';
        instance.rootElement.style.overflow = '';
      }
    } else if (height !== void 0) {
      instance.rootElement.style.height = height + 'px';
      instance.rootElement.style.overflow = 'hidden';
    }
    if (typeof settings.width != 'undefined') {
      var width = settings.width;
      if (isFunction(width)) {
        width = width();
      }
      instance.rootElement.style.width = width + 'px';
    }
    if (!init) {
      datamap.clearLengthCache();
      Handsontable.hooks.run(instance, 'afterUpdateSettings');
    }
    grid.adjustRowsAndCols();
    if (instance.view && !priv.firstRun) {
      instance.forceFullRender = true;
      selection.refreshBorders(null, true);
    }
    if (!init && instance.view && (currentHeight === '' || height === '' || height === void 0) && currentHeight !== height) {
      instance.view.wt.wtOverlays.updateMainScrollableElements();
    }
  };
  this.getValue = function() {
    var sel = instance.getSelected();
    if (GridSettings.prototype.getValue) {
      if (isFunction(GridSettings.prototype.getValue)) {
        return GridSettings.prototype.getValue.call(instance);
      } else if (sel) {
        return instance.getData()[sel[0]][GridSettings.prototype.getValue];
      }
    } else if (sel) {
      return instance.getDataAtCell(sel[0], sel[1]);
    }
  };
  function expandType(obj) {
    if (!obj.hasOwnProperty('type')) {
      return;
    }
    var type,
        expandedType = {};
    if (typeof obj.type === 'object') {
      type = obj.type;
    } else if (typeof obj.type === 'string') {
      type = Handsontable.cellTypes[obj.type];
      if (type === void 0) {
        throw new Error('You declared cell type "' + obj.type + '" as a string that is not mapped to a known object. Cell type must be an object or a string mapped to an object in Handsontable.cellTypes');
      }
    }
    for (var i in type) {
      if (type.hasOwnProperty(i) && !obj.hasOwnProperty(i)) {
        expandedType[i] = type[i];
      }
    }
    return expandedType;
  }
  this.getSettings = function() {
    return priv.settings;
  };
  this.clear = function() {
    selection.selectAll();
    selection.empty();
  };
  this.alter = function(action, index, amount, source, keepEmptyRows) {
    grid.alter(action, index, amount, source, keepEmptyRows);
  };
  this.getCell = function(row, col, topmost) {
    return instance.view.getCellAtCoords(new WalkontableCellCoords(row, col), topmost);
  };
  this.getCoords = function(elem) {
    return this.view.wt.wtTable.getCoords.call(this.view.wt.wtTable, elem);
  };
  this.colToProp = function(col) {
    return datamap.colToProp(col);
  };
  this.propToCol = function(prop) {
    return datamap.propToCol(prop);
  };
  this.toVisualRow = (function(row) {
    return recordTranslator.toVisualRow(row);
  });
  this.toVisualColumn = (function(column) {
    return recordTranslator.toVisualColumn(column);
  });
  this.toPhysicalRow = (function(row) {
    return recordTranslator.toPhysicalRow(row);
  });
  this.toPhysicalColumn = (function(column) {
    return recordTranslator.toPhysicalColumn(column);
  });
  this.getDataAtCell = function(row, col) {
    return datamap.get(row, datamap.colToProp(col));
  };
  this.getDataAtRowProp = function(row, prop) {
    return datamap.get(row, prop);
  };
  this.getDataAtCol = function(col) {
    var out = [];
    return out.concat.apply(out, datamap.getRange(new WalkontableCellCoords(0, col), new WalkontableCellCoords(priv.settings.data.length - 1, col), datamap.DESTINATION_RENDERER));
  };
  this.getDataAtProp = function(prop) {
    var out = [],
        range;
    range = datamap.getRange(new WalkontableCellCoords(0, datamap.propToCol(prop)), new WalkontableCellCoords(priv.settings.data.length - 1, datamap.propToCol(prop)), datamap.DESTINATION_RENDERER);
    return out.concat.apply(out, range);
  };
  this.getSourceData = function(r, c, r2, c2) {
    var data;
    if (r === void 0) {
      data = dataSource.getData();
    } else {
      data = dataSource.getByRange(new WalkontableCellCoords(r, c), new WalkontableCellCoords(r2, c2));
    }
    return data;
  };
  this.getSourceDataArray = function(r, c, r2, c2) {
    var data;
    if (r === void 0) {
      data = dataSource.getData(true);
    } else {
      data = dataSource.getByRange(new WalkontableCellCoords(r, c), new WalkontableCellCoords(r2, c2), true);
    }
    return data;
  };
  this.getSourceDataAtCol = function(column) {
    return dataSource.getAtColumn(column);
  };
  this.getSourceDataAtRow = function(row) {
    return dataSource.getAtRow(row);
  };
  this.getSourceDataAtCell = function(row, column) {
    return dataSource.getAtCell(row, column);
  };
  this.getDataAtRow = function(row) {
    var data = datamap.getRange(new WalkontableCellCoords(row, 0), new WalkontableCellCoords(row, this.countCols() - 1), datamap.DESTINATION_RENDERER);
    return data[0];
  };
  this.getDataType = function(rowFrom, columnFrom, rowTo, columnTo) {
    var $__23 = this;
    var previousType = null;
    var currentType = null;
    if (rowFrom === void 0) {
      rowFrom = 0;
      rowTo = this.countRows();
      columnFrom = 0;
      columnTo = this.countCols();
    }
    if (rowTo === void 0) {
      rowTo = rowFrom;
    }
    if (columnTo === void 0) {
      columnTo = columnFrom;
    }
    var type = 'mixed';
    rangeEach(Math.min(rowFrom, rowTo), Math.max(rowFrom, rowTo), (function(row) {
      var isTypeEqual = true;
      rangeEach(Math.min(columnFrom, columnTo), Math.max(columnFrom, columnTo), (function(column) {
        var cellType = $__23.getCellMeta(row, column);
        currentType = cellType.type;
        if (previousType) {
          isTypeEqual = previousType === currentType;
        } else {
          previousType = currentType;
        }
        return isTypeEqual;
      }));
      type = isTypeEqual ? currentType : 'mixed';
      return isTypeEqual;
    }));
    return type;
  };
  this.removeCellMeta = function(row, col, key) {
    var cellMeta = instance.getCellMeta(row, col);
    if (cellMeta[key] != undefined) {
      delete priv.cellSettings[row][col][key];
    }
  };
  this.setCellMetaObject = function(row, col, prop) {
    if (typeof prop === 'object') {
      for (var key in prop) {
        if (prop.hasOwnProperty(key)) {
          var value = prop[key];
          this.setCellMeta(row, col, key, value);
        }
      }
    }
  };
  this.setCellMeta = function(row, col, key, val) {
    if (!priv.cellSettings[row]) {
      priv.cellSettings[row] = [];
    }
    if (!priv.cellSettings[row][col]) {
      priv.cellSettings[row][col] = new priv.columnSettings[col]();
    }
    priv.cellSettings[row][col][key] = val;
    Handsontable.hooks.run(instance, 'afterSetCellMeta', row, col, key, val);
  };
  this.getCellsMeta = function() {
    return arrayFlatten(priv.cellSettings);
  };
  this.getCellMeta = function(row, col) {
    var $__24;
    var prop = datamap.colToProp(col),
        cellProperties;
    var visualRow = row;
    var visualCol = col;
    ($__24 = recordTranslator.toPhysical(row, col), row = $__24[0], col = $__24[1], $__24);
    if (!priv.columnSettings[col]) {
      priv.columnSettings[col] = columnFactory(GridSettings, priv.columnsSettingConflicts);
    }
    if (!priv.cellSettings[row]) {
      priv.cellSettings[row] = [];
    }
    if (!priv.cellSettings[row][col]) {
      priv.cellSettings[row][col] = new priv.columnSettings[col]();
    }
    cellProperties = priv.cellSettings[row][col];
    cellProperties.row = row;
    cellProperties.col = col;
    cellProperties.visualRow = visualRow;
    cellProperties.visualCol = visualCol;
    cellProperties.prop = prop;
    cellProperties.instance = instance;
    Handsontable.hooks.run(instance, 'beforeGetCellMeta', row, col, cellProperties);
    extend(cellProperties, expandType(cellProperties));
    if (cellProperties.cells) {
      var settings = cellProperties.cells.call(cellProperties, row, col, prop);
      if (settings) {
        extend(cellProperties, settings);
        extend(cellProperties, expandType(settings));
      }
    }
    Handsontable.hooks.run(instance, 'afterGetCellMeta', row, col, cellProperties);
    return cellProperties;
  };
  this.isColumnModificationAllowed = function() {
    return !(instance.dataType === 'object' || instance.getSettings().columns);
  };
  var rendererLookup = cellMethodLookupFactory('renderer');
  this.getCellRenderer = function(row, col) {
    var renderer = rendererLookup.call(this, row, col);
    return getRenderer(renderer);
  };
  this.getCellEditor = cellMethodLookupFactory('editor');
  this.getCellValidator = cellMethodLookupFactory('validator');
  this.validateCells = function(callback) {
    var waitingForValidator = new ValidatorsQueue();
    if (callback) {
      waitingForValidator.onQueueEmpty = callback;
    }
    var i = instance.countRows() - 1;
    while (i >= 0) {
      var j = instance.countCols() - 1;
      while (j >= 0) {
        waitingForValidator.addValidatorToQueue();
        instance.validateCell(instance.getDataAtCell(i, j), instance.getCellMeta(i, j), function(result) {
          if (typeof result !== 'boolean') {
            throw new Error('Validation error: result is not boolean');
          }
          if (result === false) {
            waitingForValidator.valid = false;
          }
          waitingForValidator.removeValidatorFormQueue();
        }, 'validateCells');
        j--;
      }
      i--;
    }
    waitingForValidator.checkIfQueueIsEmpty();
  };
  this.getRowHeader = function(row) {
    var rowHeader = priv.settings.rowHeaders;
    if (row !== void 0) {
      row = Handsontable.hooks.run(instance, 'modifyRowHeader', row);
    }
    if (row === void 0) {
      rowHeader = [];
      rangeEach(instance.countRows() - 1, (function(i) {
        rowHeader.push(instance.getRowHeader(i));
      }));
    } else if (Array.isArray(rowHeader) && rowHeader[row] !== void 0) {
      rowHeader = rowHeader[row];
    } else if (isFunction(rowHeader)) {
      rowHeader = rowHeader(row);
    } else if (rowHeader && typeof rowHeader !== 'string' && typeof rowHeader !== 'number') {
      rowHeader = row + 1;
    }
    return rowHeader;
  };
  this.hasRowHeaders = function() {
    return !!priv.settings.rowHeaders;
  };
  this.hasColHeaders = function() {
    if (priv.settings.colHeaders !== void 0 && priv.settings.colHeaders !== null) {
      return !!priv.settings.colHeaders;
    }
    for (var i = 0,
        ilen = instance.countCols(); i < ilen; i++) {
      if (instance.getColHeader(i)) {
        return true;
      }
    }
    return false;
  };
  this.getColHeader = function(col) {
    var columnsAsFunc = priv.settings.columns && isFunction(priv.settings.columns);
    var result = priv.settings.colHeaders;
    col = Handsontable.hooks.run(instance, 'modifyColHeader', col);
    if (col === void 0) {
      var out = [];
      var ilen = columnsAsFunc ? instance.countSourceCols() : instance.countCols();
      for (var i = 0; i < ilen; i++) {
        out.push(instance.getColHeader(i));
      }
      result = out;
    } else {
      var translateVisualIndexToColumns = function(col) {
        var arr = [];
        var columnsLen = instance.countSourceCols();
        var index = 0;
        for (; index < columnsLen; index++) {
          if (isFunction(instance.getSettings().columns) && instance.getSettings().columns(index)) {
            arr.push(index);
          }
        }
        return arr[col];
      };
      var baseCol = col;
      col = Handsontable.hooks.run(instance, 'modifyCol', col);
      var prop = translateVisualIndexToColumns(col);
      if (priv.settings.columns && isFunction(priv.settings.columns) && priv.settings.columns(prop) && priv.settings.columns(prop).title) {
        result = priv.settings.columns(prop).title;
      } else if (priv.settings.columns && priv.settings.columns[col] && priv.settings.columns[col].title) {
        result = priv.settings.columns[col].title;
      } else if (Array.isArray(priv.settings.colHeaders) && priv.settings.colHeaders[col] !== void 0) {
        result = priv.settings.colHeaders[col];
      } else if (isFunction(priv.settings.colHeaders)) {
        result = priv.settings.colHeaders(col);
      } else if (priv.settings.colHeaders && typeof priv.settings.colHeaders !== 'string' && typeof priv.settings.colHeaders !== 'number') {
        result = spreadsheetColumnLabel(baseCol);
      }
    }
    return result;
  };
  this._getColWidthFromSettings = function(col) {
    var cellProperties = instance.getCellMeta(0, col);
    var width = cellProperties.width;
    if (width === void 0 || width === priv.settings.width) {
      width = cellProperties.colWidths;
    }
    if (width !== void 0 && width !== null) {
      switch (typeof width) {
        case 'object':
          width = width[col];
          break;
        case 'function':
          width = width(col);
          break;
      }
      if (typeof width === 'string') {
        width = parseInt(width, 10);
      }
    }
    return width;
  };
  this.getColWidth = function(col) {
    var width = instance._getColWidthFromSettings(col);
    width = Handsontable.hooks.run(instance, 'modifyColWidth', width, col);
    if (width === void 0) {
      width = WalkontableViewportColumnsCalculator.DEFAULT_WIDTH;
    }
    return width;
  };
  this._getRowHeightFromSettings = function(row) {
    var height = priv.settings.rowHeights;
    if (height !== void 0 && height !== null) {
      switch (typeof height) {
        case 'object':
          height = height[row];
          break;
        case 'function':
          height = height(row);
          break;
      }
      if (typeof height === 'string') {
        height = parseInt(height, 10);
      }
    }
    return height;
  };
  this.getRowHeight = function(row) {
    var height = instance._getRowHeightFromSettings(row);
    height = Handsontable.hooks.run(instance, 'modifyRowHeight', height, row);
    return height;
  };
  this.countSourceRows = function() {
    var sourceLength = Handsontable.hooks.run(instance, 'modifySourceLength');
    return sourceLength || (instance.getSourceData() ? instance.getSourceData().length : 0);
  };
  this.countSourceCols = function() {
    var len = 0;
    var obj = instance.getSourceData() && instance.getSourceData()[0] ? instance.getSourceData()[0] : [];
    if (isObject(obj)) {
      len = deepObjectSize(obj);
    } else {
      len = obj.length || 0;
    }
    return len;
  };
  this.countRows = function() {
    return datamap.getLength();
  };
  this.countCols = function() {
    var dataHasLength = false;
    var dataLen = 0;
    if (instance.dataType === 'array') {
      dataHasLength = priv.settings.data && priv.settings.data[0] && priv.settings.data[0].length;
    }
    if (dataHasLength) {
      dataLen = priv.settings.data[0].length;
    }
    if (priv.settings.columns) {
      var columnsIsFunction = isFunction(priv.settings.columns);
      if (columnsIsFunction) {
        if (instance.dataType === 'array') {
          var columnLen = 0;
          for (var i = 0; i < dataLen; i++) {
            if (priv.settings.columns(i)) {
              columnLen++;
            }
          }
          dataLen = columnLen;
        } else if (instance.dataType === 'object' || instance.dataType === 'function') {
          dataLen = datamap.colToPropCache.length;
        }
      } else {
        dataLen = priv.settings.columns.length;
      }
    } else {
      if (instance.dataType === 'object' || instance.dataType === 'function') {
        dataLen = datamap.colToPropCache.length;
      }
    }
    return dataLen;
  };
  this.rowOffset = function() {
    return instance.view.wt.wtTable.getFirstRenderedRow();
  };
  this.colOffset = function() {
    return instance.view.wt.wtTable.getFirstRenderedColumn();
  };
  this.countRenderedRows = function() {
    return instance.view.wt.drawn ? instance.view.wt.wtTable.getRenderedRowsCount() : -1;
  };
  this.countVisibleRows = function() {
    return instance.view.wt.drawn ? instance.view.wt.wtTable.getVisibleRowsCount() : -1;
  };
  this.countRenderedCols = function() {
    return instance.view.wt.drawn ? instance.view.wt.wtTable.getRenderedColumnsCount() : -1;
  };
  this.countVisibleCols = function() {
    return instance.view.wt.drawn ? instance.view.wt.wtTable.getVisibleColumnsCount() : -1;
  };
  this.countEmptyRows = function(ending) {
    var i = instance.countRows() - 1,
        empty = 0,
        row;
    while (i >= 0) {
      row = Handsontable.hooks.run(this, 'modifyRow', i);
      if (instance.isEmptyRow(row)) {
        empty++;
      } else if (ending) {
        break;
      }
      i--;
    }
    return empty;
  };
  this.countEmptyCols = function(ending) {
    if (instance.countRows() < 1) {
      return 0;
    }
    var i = instance.countCols() - 1,
        empty = 0;
    while (i >= 0) {
      if (instance.isEmptyCol(i)) {
        empty++;
      } else if (ending) {
        break;
      }
      i--;
    }
    return empty;
  };
  this.isEmptyRow = function(row) {
    return priv.settings.isEmptyRow.call(instance, row);
  };
  this.isEmptyCol = function(col) {
    return priv.settings.isEmptyCol.call(instance, col);
  };
  this.selectCell = function(row, col, endRow, endCol, scrollToCell, changeListener) {
    var coords;
    changeListener = isUndefined(changeListener) || changeListener === true;
    if (typeof row !== 'number' || row < 0 || row >= instance.countRows()) {
      return false;
    }
    if (typeof col !== 'number' || col < 0 || col >= instance.countCols()) {
      return false;
    }
    if (isDefined(endRow)) {
      if (typeof endRow !== 'number' || endRow < 0 || endRow >= instance.countRows()) {
        return false;
      }
      if (typeof endCol !== 'number' || endCol < 0 || endCol >= instance.countCols()) {
        return false;
      }
    }
    coords = new WalkontableCellCoords(row, col);
    priv.selRange = new WalkontableCellRange(coords, coords, coords);
    if (changeListener) {
      instance.listen();
    }
    if (isUndefined(endRow)) {
      selection.setRangeEnd(priv.selRange.from, scrollToCell);
    } else {
      selection.setRangeEnd(new WalkontableCellCoords(endRow, endCol), scrollToCell);
    }
    instance.selection.finish();
    return true;
  };
  this.selectCellByProp = function(row, prop, endRow, endProp, scrollToCell) {
    arguments[1] = datamap.propToCol(arguments[1]);
    if (isDefined(arguments[3])) {
      arguments[3] = datamap.propToCol(arguments[3]);
    }
    return instance.selectCell.apply(instance, arguments);
  };
  this.deselectCell = function() {
    selection.deselect();
  };
  this.scrollViewportTo = function(row, column) {
    var snapToBottom = arguments[2] !== (void 0) ? arguments[2] : false;
    var snapToRight = arguments[3] !== (void 0) ? arguments[3] : false;
    if (row !== void 0 && (row < 0 || row >= instance.countRows())) {
      return false;
    }
    if (column !== void 0 && (column < 0 || column >= instance.countCols())) {
      return false;
    }
    var result = false;
    if (row !== void 0 && column !== void 0) {
      instance.view.wt.wtOverlays.topOverlay.scrollTo(row, snapToBottom);
      instance.view.wt.wtOverlays.leftOverlay.scrollTo(column, snapToRight);
      result = true;
    }
    if (typeof row === 'number' && typeof column !== 'number') {
      instance.view.wt.wtOverlays.topOverlay.scrollTo(row, snapToBottom);
      result = true;
    }
    if (typeof column === 'number' && typeof row !== 'number') {
      instance.view.wt.wtOverlays.leftOverlay.scrollTo(column, snapToRight);
      result = true;
    }
    return result;
  };
  this.destroy = function() {
    instance._clearTimeouts();
    if (instance.view) {
      instance.view.destroy();
    }
    if (dataSource) {
      dataSource.destroy();
    }
    dataSource = null;
    empty(instance.rootElement);
    eventManager.destroy();
    Handsontable.hooks.run(instance, 'afterDestroy');
    Handsontable.hooks.destroy(instance);
    for (var i in instance) {
      if (instance.hasOwnProperty(i)) {
        if (isFunction(instance[i])) {
          instance[i] = postMortem;
        } else if (i !== 'guid') {
          instance[i] = null;
        }
      }
    }
    if (datamap) {
      datamap.destroy();
    }
    datamap = null;
    priv = null;
    grid = null;
    selection = null;
    editorManager = null;
    instance = null;
    GridSettings = null;
  };
  function postMortem() {
    throw new Error('This method cannot be called because this Handsontable instance has been destroyed');
  }
  this.getActiveEditor = function() {
    return editorManager.getActiveEditor();
  };
  this.getPlugin = function(pluginName) {
    return getPlugin(this, pluginName);
  };
  this.getInstance = function() {
    return instance;
  };
  this.addHook = function(key, callback) {
    Handsontable.hooks.add(key, callback, instance);
  };
  this.hasHook = function(key) {
    return Handsontable.hooks.has(key, instance);
  };
  this.addHookOnce = function(key, callback) {
    Handsontable.hooks.once(key, callback, instance);
  };
  this.removeHook = function(key, callback) {
    Handsontable.hooks.remove(key, callback, instance);
  };
  this.runHooks = function(key, p1, p2, p3, p4, p5, p6) {
    return Handsontable.hooks.run(instance, key, p1, p2, p3, p4, p5, p6);
  };
  this.timeouts = [];
  this._registerTimeout = function(handle) {
    this.timeouts.push(handle);
  };
  this._clearTimeouts = function() {
    for (var i = 0,
        ilen = this.timeouts.length; i < ilen; i++) {
      clearTimeout(this.timeouts[i]);
    }
  };
  this.version = Handsontable.version;
  Handsontable.hooks.run(instance, 'construct');
};
var DefaultSettings = function() {};
DefaultSettings.prototype = {
  data: void 0,
  dataSchema: void 0,
  width: void 0,
  height: void 0,
  startRows: 5,
  startCols: 5,
  rowHeaders: void 0,
  colHeaders: null,
  colWidths: void 0,
  rowHeights: void 0,
  columns: void 0,
  cells: void 0,
  cell: [],
  comments: false,
  customBorders: false,
  minRows: 0,
  minCols: 0,
  maxRows: Infinity,
  maxCols: Infinity,
  minSpareRows: 0,
  minSpareCols: 0,
  allowInsertRow: true,
  allowInsertColumn: true,
  allowRemoveRow: true,
  allowRemoveColumn: true,
  multiSelect: true,
  fillHandle: true,
  fixedRowsTop: 0,
  fixedRowsBottom: 0,
  fixedColumnsLeft: 0,
  outsideClickDeselects: true,
  enterBeginsEditing: true,
  enterMoves: {
    row: 1,
    col: 0
  },
  tabMoves: {
    row: 0,
    col: 1
  },
  autoWrapRow: false,
  autoWrapCol: false,
  copyRowsLimit: 1000,
  copyColsLimit: 1000,
  pasteMode: 'overwrite',
  persistentState: void 0,
  currentRowClassName: void 0,
  currentColClassName: void 0,
  currentHeaderClassName: 'ht__highlight',
  className: void 0,
  tableClassName: void 0,
  stretchH: 'none',
  isEmptyRow: function(row) {
    var col,
        colLen,
        value,
        meta;
    for (col = 0, colLen = this.countCols(); col < colLen; col++) {
      value = this.getDataAtCell(row, col);
      if (value !== '' && value !== null && isDefined(value)) {
        if (typeof value === 'object') {
          meta = this.getCellMeta(row, col);
          return isObjectEquals(this.getSchema()[meta.prop], value);
        }
        return false;
      }
    }
    return true;
  },
  isEmptyCol: function(col) {
    var row,
        rowLen,
        value;
    for (row = 0, rowLen = this.countRows(); row < rowLen; row++) {
      value = this.getDataAtCell(row, col);
      if (value !== '' && value !== null && isDefined(value)) {
        return false;
      }
    }
    return true;
  },
  observeDOMVisibility: true,
  allowInvalid: true,
  allowEmpty: true,
  invalidCellClassName: 'htInvalid',
  placeholder: false,
  placeholderCellClassName: 'htPlaceholder',
  readOnlyCellClassName: 'htDimmed',
  renderer: void 0,
  commentedCellClassName: 'htCommentCell',
  fragmentSelection: false,
  readOnly: false,
  skipColumnOnPaste: false,
  search: false,
  type: 'text',
  copyable: true,
  editor: void 0,
  autoComplete: void 0,
  visibleRows: 10,
  trimDropdown: true,
  debug: false,
  wordWrap: true,
  noWordWrapClassName: 'htNoWrap',
  contextMenu: void 0,
  contextMenuCopyPaste: void 0,
  copyPaste: void 0,
  undo: void 0,
  columnSorting: void 0,
  manualColumnMove: void 0,
  manualColumnResize: void 0,
  manualRowMove: void 0,
  manualRowResize: void 0,
  mergeCells: false,
  viewportRowRenderingOffset: 'auto',
  viewportColumnRenderingOffset: 'auto',
  validator: void 0,
  disableVisualSelection: false,
  sortIndicator: void 0,
  manualColumnFreeze: void 0,
  trimWhitespace: true,
  settings: void 0,
  source: void 0,
  title: void 0,
  checkedTemplate: void 0,
  uncheckedTemplate: void 0,
  label: void 0,
  format: void 0,
  language: void 0,
  selectOptions: void 0,
  autoColumnSize: void 0,
  autoRowSize: void 0,
  dateFormat: void 0,
  correctFormat: false,
  defaultDate: void 0,
  strict: void 0,
  allowHtml: false,
  renderAllRows: void 0,
  preventOverflow: false,
  bindRowsWithHeaders: void 0,
  collapsibleColumns: void 0,
  columnSummary: void 0,
  dropdownMenu: void 0,
  filters: void 0,
  formulas: void 0,
  ganttChart: void 0,
  headerTooltips: void 0,
  hiddenColumns: void 0,
  hiddenRows: void 0,
  nestedHeaders: void 0,
  trimRows: void 0,
  rowHeaderWidth: void 0,
  columnHeaderHeight: void 0,
  observeChanges: void 0,
  sortFunction: void 0,
  sortByRelevance: true,
  filter: true,
  filteringCaseSensitive: false
};
Handsontable.DefaultSettings = DefaultSettings;

//# 
},{"3rdparty/walkontable/src/calculator/viewportColumns":4,"3rdparty/walkontable/src/cell/coords":6,"3rdparty/walkontable/src/cell/range":7,"browser":24,"dataMap":27,"dataSource":28,"editorManager":29,"eventManager":42,"helpers/array":43,"helpers/browser":44,"helpers/data":45,"helpers/dom/element":47,"helpers/function":50,"helpers/mixed":51,"helpers/number":52,"helpers/object":53,"helpers/setting":54,"helpers/string":55,"numbro":"numbro","plugins":61,"renderers":116,"tableView":125,"utils/recordTranslator":128}],27:[function(_dereq_,module,exports){
"use strict";
Object.defineProperties(exports, {
  DataMap: {get: function() {
      return DataMap;
    }},
  __esModule: {value: true}
});
var $__browser__,
    $__SheetClip__,
    $__helpers_47_data__,
    $__helpers_47_setting__,
    $__helpers_47_object__,
    $__helpers_47_array__,
    $__utils_47_interval__,
    $__helpers_47_number__,
    $__multiMap__;
var Handsontable = ($__browser__ = _dereq_("browser"), $__browser__ && $__browser__.__esModule && $__browser__ || {default: $__browser__}).default;
var SheetClip = ($__SheetClip__ = _dereq_("SheetClip"), $__SheetClip__ && $__SheetClip__.__esModule && $__SheetClip__ || {default: $__SheetClip__}).default;
var cellMethodLookupFactory = ($__helpers_47_data__ = _dereq_("helpers/data"), $__helpers_47_data__ && $__helpers_47_data__.__esModule && $__helpers_47_data__ || {default: $__helpers_47_data__}).cellMethodLookupFactory;
var columnFactory = ($__helpers_47_setting__ = _dereq_("helpers/setting"), $__helpers_47_setting__ && $__helpers_47_setting__.__esModule && $__helpers_47_setting__ || {default: $__helpers_47_setting__}).columnFactory;
var $__4 = ($__helpers_47_object__ = _dereq_("helpers/object"), $__helpers_47_object__ && $__helpers_47_object__.__esModule && $__helpers_47_object__ || {default: $__helpers_47_object__}),
    createObjectPropListener = $__4.createObjectPropListener,
    duckSchema = $__4.duckSchema,
    deepExtend = $__4.deepExtend,
    deepClone = $__4.deepClone,
    isObject = $__4.isObject,
    deepObjectSize = $__4.deepObjectSize;
var $__5 = ($__helpers_47_array__ = _dereq_("helpers/array"), $__helpers_47_array__ && $__helpers_47_array__.__esModule && $__helpers_47_array__ || {default: $__helpers_47_array__}),
    extendArray = $__5.extendArray,
    to2dArray = $__5.to2dArray;
var Interval = ($__utils_47_interval__ = _dereq_("utils/interval"), $__utils_47_interval__ && $__utils_47_interval__.__esModule && $__utils_47_interval__ || {default: $__utils_47_interval__}).Interval;
var rangeEach = ($__helpers_47_number__ = _dereq_("helpers/number"), $__helpers_47_number__ && $__helpers_47_number__.__esModule && $__helpers_47_number__ || {default: $__helpers_47_number__}).rangeEach;
var MultiMap = ($__multiMap__ = _dereq_("multiMap"), $__multiMap__ && $__multiMap__.__esModule && $__multiMap__ || {default: $__multiMap__}).MultiMap;
function DataMap(instance, priv, GridSettings) {
  var $__9 = this;
  this.instance = instance;
  this.priv = priv;
  this.GridSettings = GridSettings;
  this.dataSource = this.instance.getSettings().data;
  this.cachedLength = null;
  this.skipCache = false;
  this.latestSourceRowsCount = 0;
  if (this.dataSource && this.dataSource[0]) {
    this.duckSchema = this.recursiveDuckSchema(this.dataSource[0]);
  } else {
    this.duckSchema = {};
  }
  this.createMap();
  this.interval = Interval.create((function() {
    return $__9.clearLengthCache();
  }), '15fps');
  this.instance.addHook('skipLengthCache', (function(delay) {
    return $__9.onSkipLengthCache(delay);
  }));
}
DataMap.prototype.DESTINATION_RENDERER = 1;
DataMap.prototype.DESTINATION_CLIPBOARD_GENERATOR = 2;
DataMap.prototype.recursiveDuckSchema = function(object) {
  return duckSchema(object);
};
DataMap.prototype.recursiveDuckColumns = function(schema, lastCol, parent) {
  var prop,
      i;
  if (typeof lastCol === 'undefined') {
    lastCol = 0;
    parent = '';
  }
  if (typeof schema === 'object' && !Array.isArray(schema)) {
    for (i in schema) {
      if (schema.hasOwnProperty(i)) {
        if (schema[i] === null) {
          prop = parent + i;
          this.colToPropCache.push(prop);
          this.propToColCache.set(prop, lastCol);
          lastCol++;
        } else {
          lastCol = this.recursiveDuckColumns(schema[i], lastCol, i + '.');
        }
      }
    }
  }
  return lastCol;
};
DataMap.prototype.createMap = function() {
  var i;
  var schema = this.getSchema();
  if (typeof schema === 'undefined') {
    throw new Error('trying to create `columns` definition but you didn\'t provide `schema` nor `data`');
  }
  this.colToPropCache = [];
  this.propToColCache = new MultiMap();
  var columns = this.instance.getSettings().columns;
  if (columns) {
    var columnsLen = columns.length;
    var filteredIndex = 0;
    var columnsAsFunc = false;
    var schemaLen = deepObjectSize(schema);
    if (typeof columns === 'function') {
      columnsLen = schemaLen > 0 ? schemaLen : this.instance.countSourceCols();
      columnsAsFunc = true;
    }
    for (i = 0; i < columnsLen; i++) {
      var column = columnsAsFunc ? columns(i) : columns[i];
      if (isObject(column)) {
        if (typeof column.data !== 'undefined') {
          var index = columnsAsFunc ? filteredIndex : i;
          this.colToPropCache[index] = column.data;
          this.propToColCache.set(column.data, index);
        }
        filteredIndex++;
      }
    }
  } else {
    this.recursiveDuckColumns(schema);
  }
};
DataMap.prototype.colToProp = function(col) {
  col = Handsontable.hooks.run(this.instance, 'modifyCol', col);
  if (this.colToPropCache && typeof this.colToPropCache[col] !== 'undefined') {
    return this.colToPropCache[col];
  }
  return col;
};
DataMap.prototype.propToCol = function(prop) {
  var col;
  if (typeof this.propToColCache.get(prop) === 'undefined') {
    col = prop;
  } else {
    col = this.propToColCache.get(prop);
  }
  col = Handsontable.hooks.run(this.instance, 'unmodifyCol', col);
  return col;
};
DataMap.prototype.getSchema = function() {
  var schema = this.instance.getSettings().dataSchema;
  if (schema) {
    if (typeof schema === 'function') {
      return schema();
    }
    return schema;
  }
  return this.duckSchema;
};
DataMap.prototype.createRow = function(index, amount, source) {
  var row,
      colCount = this.instance.countCols(),
      numberOfCreatedRows = 0,
      currentIndex;
  if (!amount) {
    amount = 1;
  }
  if (typeof index !== 'number' || index >= this.instance.countSourceRows()) {
    index = this.instance.countSourceRows();
  }
  Handsontable.hooks.run(this.instance, 'beforeCreateRow', index, amount, source);
  currentIndex = index;
  var maxRows = this.instance.getSettings().maxRows;
  while (numberOfCreatedRows < amount && this.instance.countSourceRows() < maxRows) {
    if (this.instance.dataType === 'array') {
      if (this.instance.getSettings().dataSchema) {
        row = deepClone(this.getSchema());
      } else {
        row = [];
        rangeEach(colCount - 1, (function() {
          return row.push(null);
        }));
      }
    } else if (this.instance.dataType === 'function') {
      row = this.instance.getSettings().dataSchema(index);
    } else {
      row = {};
      deepExtend(row, this.getSchema());
    }
    if (index === this.instance.countSourceRows()) {
      this.dataSource.push(row);
    } else {
      this.spliceData(index, 0, row);
    }
    numberOfCreatedRows++;
    currentIndex++;
  }
  Handsontable.hooks.run(this.instance, 'afterCreateRow', index, numberOfCreatedRows, source);
  this.instance.forceFullRender = true;
  return numberOfCreatedRows;
};
DataMap.prototype.createCol = function(index, amount, source) {
  if (!this.instance.isColumnModificationAllowed()) {
    throw new Error('Cannot create new column. When data source in an object, ' + 'you can only have as much columns as defined in first data row, data schema or in the \'columns\' setting.' + 'If you want to be able to add new columns, you have to use array datasource.');
  }
  var rlen = this.instance.countSourceRows(),
      data = this.dataSource,
      constructor,
      numberOfCreatedCols = 0,
      currentIndex;
  if (!amount) {
    amount = 1;
  }
  if (typeof index !== 'number' || index >= this.instance.countCols()) {
    index = this.instance.countCols();
  }
  Handsontable.hooks.run(this.instance, 'beforeCreateCol', index, amount, source);
  currentIndex = index;
  var maxCols = this.instance.getSettings().maxCols;
  while (numberOfCreatedCols < amount && this.instance.countCols() < maxCols) {
    constructor = columnFactory(this.GridSettings, this.priv.columnsSettingConflicts);
    if (typeof index !== 'number' || index >= this.instance.countCols()) {
      if (rlen > 0) {
        for (var r = 0; r < rlen; r++) {
          if (typeof data[r] === 'undefined') {
            data[r] = [];
          }
          data[r].push(null);
        }
      } else {
        data.push([null]);
      }
      this.priv.columnSettings.push(constructor);
    } else {
      for (var r = 0; r < rlen; r++) {
        data[r].splice(currentIndex, 0, null);
      }
      this.priv.columnSettings.splice(currentIndex, 0, constructor);
    }
    numberOfCreatedCols++;
    currentIndex++;
  }
  Handsontable.hooks.run(this.instance, 'afterCreateCol', index, numberOfCreatedCols, source);
  this.instance.forceFullRender = true;
  return numberOfCreatedCols;
};
DataMap.prototype.removeRow = function(index, amount, source) {
  if (!amount) {
    amount = 1;
  }
  if (typeof index !== 'number') {
    index = -amount;
  }
  amount = Handsontable.hooks.run(this.instance, 'modifyRemovedAmount', amount, index);
  index = (this.instance.countSourceRows() + index) % this.instance.countSourceRows();
  var logicRows = this.physicalRowsToLogical(index, amount);
  var actionWasNotCancelled = Handsontable.hooks.run(this.instance, 'beforeRemoveRow', index, amount, logicRows, source);
  if (actionWasNotCancelled === false) {
    return;
  }
  var data = this.dataSource;
  var newData;
  newData = this.filterData(index, amount);
  if (newData) {
    data.length = 0;
    Array.prototype.push.apply(data, newData);
  }
  Handsontable.hooks.run(this.instance, 'afterRemoveRow', index, amount, logicRows, source);
  this.instance.forceFullRender = true;
};
DataMap.prototype.removeCol = function(index, amount, source) {
  if (this.instance.dataType === 'object' || this.instance.getSettings().columns) {
    throw new Error('cannot remove column with object data source or columns option specified');
  }
  if (!amount) {
    amount = 1;
  }
  if (typeof index !== 'number') {
    index = -amount;
  }
  index = (this.instance.countCols() + index) % this.instance.countCols();
  var logicColumns = this.physicalColumnsToLogical(index, amount);
  var descendingLogicColumns = logicColumns.slice(0).sort(function(a, b) {
    return b - a;
  });
  var actionWasNotCancelled = Handsontable.hooks.run(this.instance, 'beforeRemoveCol', index, amount, logicColumns, source);
  if (actionWasNotCancelled === false) {
    return;
  }
  var isTableUniform = true;
  var removedColumnsCount = descendingLogicColumns.length;
  var data = this.dataSource;
  for (var c = 0; c < removedColumnsCount; c++) {
    if (isTableUniform && logicColumns[0] !== logicColumns[c] - c) {
      isTableUniform = false;
    }
  }
  if (isTableUniform) {
    for (var r = 0,
        rlen = this.instance.countSourceRows(); r < rlen; r++) {
      data[r].splice(logicColumns[0], amount);
    }
  } else {
    for (var r$__10 = 0,
        rlen$__11 = this.instance.countSourceRows(); r$__10 < rlen$__11; r$__10++) {
      for (var c$__12 = 0; c$__12 < removedColumnsCount; c$__12++) {
        data[r$__10].splice(descendingLogicColumns[c$__12], 1);
      }
    }
    for (var c$__13 = 0; c$__13 < removedColumnsCount; c$__13++) {
      this.priv.columnSettings.splice(logicColumns[c$__13], 1);
    }
  }
  Handsontable.hooks.run(this.instance, 'afterRemoveCol', index, amount, logicColumns, source);
  this.instance.forceFullRender = true;
};
DataMap.prototype.spliceCol = function(col, index, amount) {
  var elements = 4 <= arguments.length ? [].slice.call(arguments, 3) : [];
  var colData = this.instance.getDataAtCol(col);
  var removed = colData.slice(index, index + amount);
  var after = colData.slice(index + amount);
  extendArray(elements, after);
  var i = 0;
  while (i < amount) {
    elements.push(null);
    i++;
  }
  to2dArray(elements);
  this.instance.populateFromArray(index, col, elements, null, null, 'spliceCol');
  return removed;
};
DataMap.prototype.spliceRow = function(row, index, amount) {
  var elements = 4 <= arguments.length ? [].slice.call(arguments, 3) : [];
  var rowData = this.instance.getSourceDataAtRow(row);
  var removed = rowData.slice(index, index + amount);
  var after = rowData.slice(index + amount);
  extendArray(elements, after);
  var i = 0;
  while (i < amount) {
    elements.push(null);
    i++;
  }
  this.instance.populateFromArray(row, index, [elements], null, null, 'spliceRow');
  return removed;
};
DataMap.prototype.spliceData = function(index, amount, element) {
  var continueSplicing = Handsontable.hooks.run(this.instance, 'beforeDataSplice', index, amount, element);
  if (continueSplicing !== false) {
    this.dataSource.splice(index, amount, element);
  }
};
DataMap.prototype.filterData = function(index, amount) {
  var logicRows = this.physicalRowsToLogical(index, amount);
  var continueSplicing = Handsontable.hooks.run(this.instance, 'beforeDataFilter', index, amount, logicRows);
  if (continueSplicing !== false) {
    var newData = this.dataSource.filter(function(row, index) {
      return logicRows.indexOf(index) == -1;
    });
    return newData;
  }
};
DataMap.prototype.get = function(row, prop) {
  row = Handsontable.hooks.run(this.instance, 'modifyRow', row);
  var dataRow = this.dataSource[row];
  var modifiedRowData = Handsontable.hooks.run(this.instance, 'modifyRowData', row, dataRow, 'get');
  dataRow = isNaN(modifiedRowData) ? modifiedRowData : dataRow;
  var value = null;
  if (dataRow && dataRow.hasOwnProperty && dataRow.hasOwnProperty(prop)) {
    value = dataRow[prop];
  } else if (typeof prop === 'string' && prop.indexOf('.') > -1) {
    var sliced = prop.split('.');
    var out = dataRow;
    if (!out) {
      return null;
    }
    for (var i = 0,
        ilen = sliced.length; i < ilen; i++) {
      out = out[sliced[i]];
      if (typeof out === 'undefined') {
        return null;
      }
    }
    value = out;
  } else if (typeof prop === 'function') {
    value = prop(this.dataSource.slice(row, row + 1)[0]);
  }
  if (Handsontable.hooks.has('modifyData', this.instance)) {
    var valueHolder = createObjectPropListener(value);
    Handsontable.hooks.run(this.instance, 'modifyData', row, this.propToCol(prop), valueHolder, 'get');
    if (valueHolder.isTouched()) {
      value = valueHolder.value;
    }
  }
  return value;
};
var copyableLookup = cellMethodLookupFactory('copyable', false);
DataMap.prototype.getCopyable = function(row, prop) {
  if (copyableLookup.call(this.instance, row, this.propToCol(prop))) {
    return this.get(row, prop);
  }
  return '';
};
DataMap.prototype.set = function(row, prop, value, source) {
  row = Handsontable.hooks.run(this.instance, 'modifyRow', row, source || 'datamapGet');
  var dataRow = this.dataSource[row];
  var modifiedRowData = Handsontable.hooks.run(this.instance, 'modifyRowData', row, dataRow, 'set', source);
  dataRow = isNaN(modifiedRowData) ? modifiedRowData : dataRow;
  if (Handsontable.hooks.has('modifyData', this.instance)) {
    var valueHolder = createObjectPropListener(value);
    Handsontable.hooks.run(this.instance, 'modifyData', row, this.propToCol(prop), valueHolder, 'set');
    if (valueHolder.isTouched()) {
      value = valueHolder.value;
    }
  }
  if (dataRow && dataRow.hasOwnProperty && dataRow.hasOwnProperty(prop)) {
    dataRow[prop] = value;
  } else if (typeof prop === 'string' && prop.indexOf('.') > -1) {
    var sliced = prop.split('.');
    var out = dataRow;
    for (var i = 0,
        ilen = sliced.length - 1; i < ilen; i++) {
      if (typeof out[sliced[i]] === 'undefined') {
        out[sliced[i]] = {};
      }
      out = out[sliced[i]];
    }
    out[sliced[i]] = value;
  } else if (typeof prop === 'function') {
    prop(this.dataSource.slice(row, row + 1)[0], value);
  } else {
    dataRow[prop] = value;
  }
};
DataMap.prototype.physicalRowsToLogical = function(index, amount) {
  var totalRows = this.instance.countSourceRows();
  var physicRow = (totalRows + index) % totalRows;
  var logicRows = [];
  var rowsToRemove = amount;
  var row;
  while (physicRow < totalRows && rowsToRemove) {
    row = Handsontable.hooks.run(this.instance, 'modifyRow', physicRow);
    logicRows.push(row);
    rowsToRemove--;
    physicRow++;
  }
  return logicRows;
};
DataMap.prototype.physicalColumnsToLogical = function(index, amount) {
  var totalCols = this.instance.countCols();
  var physicalCol = (totalCols + index) % totalCols;
  var logicalCols = [];
  var colsToRemove = amount;
  while (physicalCol < totalCols && colsToRemove) {
    var col = Handsontable.hooks.run(this.instance, 'modifyCol', physicalCol);
    logicalCols.push(col);
    colsToRemove--;
    physicalCol++;
  }
  return logicalCols;
};
DataMap.prototype.clear = function() {
  for (var r = 0; r < this.instance.countSourceRows(); r++) {
    for (var c = 0; c < this.instance.countCols(); c++) {
      this.set(r, this.colToProp(c), '');
    }
  }
};
DataMap.prototype.clearLengthCache = function() {
  this.cachedLength = null;
};
DataMap.prototype.getLength = function() {
  var $__9 = this;
  var length = this.instance.countSourceRows();
  if (Handsontable.hooks.has('modifyRow', this.instance)) {
    var reValidate = this.skipCache;
    this.interval.start();
    if (length !== this.latestSourceRowsCount) {
      reValidate = true;
    }
    this.latestSourceRowsCount = length;
    if (this.cachedLength === null || reValidate) {
      rangeEach(length - 1, (function(row) {
        row = Handsontable.hooks.run($__9.instance, 'modifyRow', row);
        if (row === null) {
          --length;
        }
      }));
      this.cachedLength = length;
    } else {
      length = this.cachedLength;
    }
  } else {
    this.interval.stop();
  }
  return length;
};
DataMap.prototype.getAll = function() {
  var start = {
    row: 0,
    col: 0
  };
  var end = {
    row: Math.max(this.instance.countSourceRows() - 1, 0),
    col: Math.max(this.instance.countCols() - 1, 0)
  };
  if (start.row - end.row === 0 && !this.instance.countSourceRows()) {
    return [];
  }
  return this.getRange(start, end, DataMap.prototype.DESTINATION_RENDERER);
};
DataMap.prototype.getRange = function(start, end, destination) {
  var r,
      rlen,
      c,
      clen,
      output = [],
      row,
      rowExists;
  var getFn = destination === this.DESTINATION_CLIPBOARD_GENERATOR ? this.getCopyable : this.get;
  rlen = Math.max(start.row, end.row);
  clen = Math.max(start.col, end.col);
  for (r = Math.min(start.row, end.row); r <= rlen; r++) {
    row = [];
    var physicalRow = Handsontable.hooks.run(this.instance, 'modifyRow', r);
    for (c = Math.min(start.col, end.col); c <= clen; c++) {
      var rowValue;
      if (physicalRow === null) {
        break;
      }
      row.push(getFn.call(this, r, this.colToProp(c)));
    }
    if (physicalRow !== null) {
      output.push(row);
    }
  }
  return output;
};
DataMap.prototype.getText = function(start, end) {
  return SheetClip.stringify(this.getRange(start, end, this.DESTINATION_RENDERER));
};
DataMap.prototype.getCopyableText = function(start, end) {
  return SheetClip.stringify(this.getRange(start, end, this.DESTINATION_CLIPBOARD_GENERATOR));
};
DataMap.prototype.onSkipLengthCache = function(delay) {
  var $__9 = this;
  this.skipCache = true;
  setTimeout((function() {
    $__9.skipCache = false;
  }), delay);
};
DataMap.prototype.destroy = function() {
  this.interval.stop();
  this.interval = null;
  this.instance = null;
  this.priv = null;
  this.GridSettings = null;
  this.dataSource = null;
  this.cachedLength = null;
  this.duckSchema = null;
};
;

//# 
},{"SheetClip":"SheetClip","browser":24,"helpers/array":43,"helpers/data":45,"helpers/number":52,"helpers/object":53,"helpers/setting":54,"multiMap":59,"utils/interval":127}],28:[function(_dereq_,module,exports){
"use strict";
Object.defineProperties(exports, {
  DataSource: {get: function() {
      return DataSource;
    }},
  __esModule: {value: true}
});
var $__helpers_47_object__,
    $__helpers_47_array__,
    $__helpers_47_number__;
var getProperty = ($__helpers_47_object__ = _dereq_("helpers/object"), $__helpers_47_object__ && $__helpers_47_object__.__esModule && $__helpers_47_object__ || {default: $__helpers_47_object__}).getProperty;
var arrayEach = ($__helpers_47_array__ = _dereq_("helpers/array"), $__helpers_47_array__ && $__helpers_47_array__.__esModule && $__helpers_47_array__ || {default: $__helpers_47_array__}).arrayEach;
var rangeEach = ($__helpers_47_number__ = _dereq_("helpers/number"), $__helpers_47_number__ && $__helpers_47_number__.__esModule && $__helpers_47_number__ || {default: $__helpers_47_number__}).rangeEach;
var DataSource = function DataSource(hotInstance) {
  var dataSource = arguments[1] !== (void 0) ? arguments[1] : [];
  this.hot = hotInstance;
  this.data = dataSource;
  this.dataType = 'array';
  this.colToProp = (function() {});
  this.propToCol = (function() {});
};
($traceurRuntime.createClass)(DataSource, {
  getData: function() {
    var toArray = arguments[0] !== (void 0) ? arguments[0] : false;
    var result = this.data;
    if (toArray) {
      result = this.getByRange({
        row: 0,
        col: 0
      }, {
        row: Math.max(this.countRows() - 1, 0),
        col: Math.max(this.countColumns() - 1, 0)
      }, true);
    }
    return result;
  },
  setData: function(data) {
    this.data = data;
  },
  getAtColumn: function(column) {
    var $__3 = this;
    var result = [];
    arrayEach(this.data, (function(row) {
      var property = $__3.colToProp(column);
      if (typeof property === 'string') {
        row = getProperty(row, property);
      } else {
        row = row[property];
      }
      result.push(row);
    }));
    return result;
  },
  getAtRow: function(row) {
    return this.data[row];
  },
  getAtCell: function(row, column) {
    var result = null;
    if (this.data[row]) {
      var prop = this.colToProp(column);
      if (typeof prop === 'string') {
        result = getProperty(this.data[row], prop);
      } else {
        result = this.data[row][prop];
      }
    }
    return result;
  },
  getByRange: function(start, end) {
    var toArray = arguments[2] !== (void 0) ? arguments[2] : false;
    var $__3 = this;
    var startRow = Math.min(start.row, end.row);
    var startCol = Math.min(start.col, end.col);
    var endRow = Math.max(start.row, end.row);
    var endCol = Math.max(start.col, end.col);
    var result = [];
    rangeEach(startRow, endRow, (function(currentRow) {
      var row = $__3.getAtRow(currentRow);
      var newRow;
      if ($__3.dataType === 'array') {
        newRow = row.slice(startCol, endCol + 1);
      } else if ($__3.dataType === 'object') {
        newRow = toArray ? [] : {};
        rangeEach(startCol, endCol, (function(column) {
          var prop = $__3.colToProp(column);
          if (toArray) {
            newRow.push(row[prop]);
          } else {
            newRow[prop] = row[prop];
          }
        }));
      }
      result.push(newRow);
    }));
    return result;
  },
  countRows: function() {
    return Array.isArray(this.data) ? this.data.length : 0;
  },
  countColumns: function() {
    var result = 0;
    if (Array.isArray(this.data)) {
      if (this.dataType === 'array') {
        result = this.data[0].length;
      } else if (this.dataType === 'object') {
        result = Object.keys(this.data[0]).length;
      }
    }
    return result;
  },
  destroy: function() {
    this.data = null;
    this.hot = null;
  }
}, {});
;

//# 
},{"helpers/array":43,"helpers/number":52,"helpers/object":53}],29:[function(_dereq_,module,exports){
"use strict";
Object.defineProperties(exports, {
  EditorManager: {get: function() {
      return EditorManager;
    }},
  __esModule: {value: true}
});
var $__browser__,
    $__3rdparty_47_walkontable_47_src_47_cell_47_coords__,
    $__helpers_47_unicode__,
    $__helpers_47_dom_47_event__,
    $__editors__,
    $__eventManager__;
var Handsontable = ($__browser__ = _dereq_("browser"), $__browser__ && $__browser__.__esModule && $__browser__ || {default: $__browser__}).default;
var WalkontableCellCoords = ($__3rdparty_47_walkontable_47_src_47_cell_47_coords__ = _dereq_("3rdparty/walkontable/src/cell/coords"), $__3rdparty_47_walkontable_47_src_47_cell_47_coords__ && $__3rdparty_47_walkontable_47_src_47_cell_47_coords__.__esModule && $__3rdparty_47_walkontable_47_src_47_cell_47_coords__ || {default: $__3rdparty_47_walkontable_47_src_47_cell_47_coords__}).WalkontableCellCoords;
var $__2 = ($__helpers_47_unicode__ = _dereq_("helpers/unicode"), $__helpers_47_unicode__ && $__helpers_47_unicode__.__esModule && $__helpers_47_unicode__ || {default: $__helpers_47_unicode__}),
    KEY_CODES = $__2.KEY_CODES,
    isMetaKey = $__2.isMetaKey,
    isCtrlKey = $__2.isCtrlKey;
var $__3 = ($__helpers_47_dom_47_event__ = _dereq_("helpers/dom/event"), $__helpers_47_dom_47_event__ && $__helpers_47_dom_47_event__.__esModule && $__helpers_47_dom_47_event__ || {default: $__helpers_47_dom_47_event__}),
    stopPropagation = $__3.stopPropagation,
    stopImmediatePropagation = $__3.stopImmediatePropagation,
    isImmediatePropagationStopped = $__3.isImmediatePropagationStopped;
var getEditor = ($__editors__ = _dereq_("editors"), $__editors__ && $__editors__.__esModule && $__editors__ || {default: $__editors__}).getEditor;
var eventManagerObject = ($__eventManager__ = _dereq_("eventManager"), $__eventManager__ && $__eventManager__.__esModule && $__eventManager__ || {default: $__eventManager__}).eventManager;
;
Handsontable.EditorManager = EditorManager;
function EditorManager(instance, priv, selection) {
  var _this = this,
      destroyed = false,
      eventManager,
      activeEditor;
  eventManager = eventManagerObject(instance);
  function moveSelectionAfterEnter(shiftKey) {
    var enterMoves = typeof priv.settings.enterMoves === 'function' ? priv.settings.enterMoves(event) : priv.settings.enterMoves;
    if (shiftKey) {
      selection.transformStart(-enterMoves.row, -enterMoves.col);
    } else {
      selection.transformStart(enterMoves.row, enterMoves.col, true);
    }
  }
  function moveSelectionUp(shiftKey) {
    if (shiftKey) {
      selection.transformEnd(-1, 0);
    } else {
      selection.transformStart(-1, 0);
    }
  }
  function moveSelectionDown(shiftKey) {
    if (shiftKey) {
      selection.transformEnd(1, 0);
    } else {
      selection.transformStart(1, 0);
    }
  }
  function moveSelectionRight(shiftKey) {
    if (shiftKey) {
      selection.transformEnd(0, 1);
    } else {
      selection.transformStart(0, 1);
    }
  }
  function moveSelectionLeft(shiftKey) {
    if (shiftKey) {
      selection.transformEnd(0, -1);
    } else {
      selection.transformStart(0, -1);
    }
  }
  function onKeyDown(event) {
    var ctrlDown,
        rangeModifier;
    if (!instance.isListening()) {
      return;
    }
    Handsontable.hooks.run(instance, 'beforeKeyDown', event);
    if (destroyed) {
      return;
    }
    if (isImmediatePropagationStopped(event)) {
      return;
    }
    priv.lastKeyCode = event.keyCode;
    if (!selection.isSelected()) {
      return;
    }
    ctrlDown = (event.ctrlKey || event.metaKey) && !event.altKey;
    if (activeEditor && !activeEditor.isWaiting()) {
      if (!isMetaKey(event.keyCode) && !isCtrlKey(event.keyCode) && !ctrlDown && !_this.isEditorOpened()) {
        _this.openEditor('', event);
        return;
      }
    }
    rangeModifier = event.shiftKey ? selection.setRangeEnd : selection.setRangeStart;
    switch (event.keyCode) {
      case KEY_CODES.A:
        if (!_this.isEditorOpened() && ctrlDown) {
          selection.selectAll();
          event.preventDefault();
          stopPropagation(event);
        }
        break;
      case KEY_CODES.ARROW_UP:
        if (_this.isEditorOpened() && !activeEditor.isWaiting()) {
          _this.closeEditorAndSaveChanges(ctrlDown);
        }
        moveSelectionUp(event.shiftKey);
        event.preventDefault();
        stopPropagation(event);
        break;
      case KEY_CODES.ARROW_DOWN:
        if (_this.isEditorOpened() && !activeEditor.isWaiting()) {
          _this.closeEditorAndSaveChanges(ctrlDown);
        }
        moveSelectionDown(event.shiftKey);
        event.preventDefault();
        stopPropagation(event);
        break;
      case KEY_CODES.ARROW_RIGHT:
        if (_this.isEditorOpened() && !activeEditor.isWaiting()) {
          _this.closeEditorAndSaveChanges(ctrlDown);
        }
        moveSelectionRight(event.shiftKey);
        event.preventDefault();
        stopPropagation(event);
        break;
      case KEY_CODES.ARROW_LEFT:
        if (_this.isEditorOpened() && !activeEditor.isWaiting()) {
          _this.closeEditorAndSaveChanges(ctrlDown);
        }
        moveSelectionLeft(event.shiftKey);
        event.preventDefault();
        stopPropagation(event);
        break;
      case KEY_CODES.TAB:
        var tabMoves = typeof priv.settings.tabMoves === 'function' ? priv.settings.tabMoves(event) : priv.settings.tabMoves;
        if (event.shiftKey) {
          selection.transformStart(-tabMoves.row, -tabMoves.col);
        } else {
          selection.transformStart(tabMoves.row, tabMoves.col, true);
        }
        event.preventDefault();
        stopPropagation(event);
        break;
      case KEY_CODES.BACKSPACE:
      case KEY_CODES.DELETE:
        selection.empty(event);
        _this.prepareEditor();
        event.preventDefault();
        break;
      case KEY_CODES.F2:
        _this.openEditor(null, event);
        if (activeEditor) {
          activeEditor.enableFullEditMode();
        }
        event.preventDefault();
        break;
      case KEY_CODES.ENTER:
        if (_this.isEditorOpened()) {
          if (activeEditor && activeEditor.state !== Handsontable.EditorState.WAITING) {
            _this.closeEditorAndSaveChanges(ctrlDown);
          }
          moveSelectionAfterEnter(event.shiftKey);
        } else {
          if (instance.getSettings().enterBeginsEditing) {
            _this.openEditor(null, event);
            if (activeEditor) {
              activeEditor.enableFullEditMode();
            }
          } else {
            moveSelectionAfterEnter(event.shiftKey);
          }
        }
        event.preventDefault();
        stopImmediatePropagation(event);
        break;
      case KEY_CODES.ESCAPE:
        if (_this.isEditorOpened()) {
          _this.closeEditorAndRestoreOriginalValue(ctrlDown);
        }
        event.preventDefault();
        break;
      case KEY_CODES.HOME:
        if (event.ctrlKey || event.metaKey) {
          rangeModifier(new WalkontableCellCoords(0, priv.selRange.from.col));
        } else {
          rangeModifier(new WalkontableCellCoords(priv.selRange.from.row, 0));
        }
        event.preventDefault();
        stopPropagation(event);
        break;
      case KEY_CODES.END:
        if (event.ctrlKey || event.metaKey) {
          rangeModifier(new WalkontableCellCoords(instance.countRows() - 1, priv.selRange.from.col));
        } else {
          rangeModifier(new WalkontableCellCoords(priv.selRange.from.row, instance.countCols() - 1));
        }
        event.preventDefault();
        stopPropagation(event);
        break;
      case KEY_CODES.PAGE_UP:
        selection.transformStart(-instance.countVisibleRows(), 0);
        event.preventDefault();
        stopPropagation(event);
        break;
      case KEY_CODES.PAGE_DOWN:
        selection.transformStart(instance.countVisibleRows(), 0);
        event.preventDefault();
        stopPropagation(event);
        break;
    }
  }
  function init() {
    instance.addHook('afterDocumentKeyDown', onKeyDown);
    eventManager.addEventListener(document.documentElement, 'keydown', function(event) {
      if (!destroyed) {
        instance.runHooks('afterDocumentKeyDown', event);
      }
    });
    function onDblClick(event, coords, elem) {
      if (elem.nodeName == 'TD') {
        _this.openEditor();
        if (activeEditor) {
          activeEditor.enableFullEditMode();
        }
      }
    }
    instance.view.wt.update('onCellDblClick', onDblClick);
    instance.addHook('afterDestroy', function() {
      destroyed = true;
    });
  }
  this.destroyEditor = function(revertOriginal) {
    this.closeEditor(revertOriginal);
  };
  this.getActiveEditor = function() {
    return activeEditor;
  };
  this.prepareEditor = function() {
    var row,
        col,
        prop,
        td,
        originalValue,
        cellProperties,
        editorClass;
    if (activeEditor && activeEditor.isWaiting()) {
      this.closeEditor(false, false, function(dataSaved) {
        if (dataSaved) {
          _this.prepareEditor();
        }
      });
      return;
    }
    row = priv.selRange.highlight.row;
    col = priv.selRange.highlight.col;
    prop = instance.colToProp(col);
    td = instance.getCell(row, col);
    originalValue = instance.getSourceDataAtCell(instance.runHooks('modifyRow', row), col);
    cellProperties = instance.getCellMeta(row, col);
    editorClass = instance.getCellEditor(cellProperties);
    if (editorClass) {
      activeEditor = Handsontable.editors.getEditor(editorClass, instance);
      activeEditor.prepare(row, col, prop, td, originalValue, cellProperties);
    } else {
      activeEditor = void 0;
    }
  };
  this.isEditorOpened = function() {
    return activeEditor && activeEditor.isOpened();
  };
  this.openEditor = function(initialValue, event) {
    if (activeEditor && !activeEditor.cellProperties.readOnly) {
      activeEditor.beginEditing(initialValue, event);
    } else if (activeEditor && activeEditor.cellProperties.readOnly) {
      if (event && event.keyCode === KEY_CODES.ENTER) {
        moveSelectionAfterEnter();
      }
    }
  };
  this.closeEditor = function(restoreOriginalValue, ctrlDown, callback) {
    if (activeEditor) {
      activeEditor.finishEditing(restoreOriginalValue, ctrlDown, callback);
    } else {
      if (callback) {
        callback(false);
      }
    }
  };
  this.closeEditorAndSaveChanges = function(ctrlDown) {
    return this.closeEditor(false, ctrlDown);
  };
  this.closeEditorAndRestoreOriginalValue = function(ctrlDown) {
    return this.closeEditor(true, ctrlDown);
  };
  init();
}

//# 
},{"3rdparty/walkontable/src/cell/coords":6,"browser":24,"editors":30,"eventManager":42,"helpers/dom/event":48,"helpers/unicode":56}],30:[function(_dereq_,module,exports){
"use strict";
Object.defineProperties(exports, {
  registerEditor: {get: function() {
      return registerEditor;
    }},
  getEditor: {get: function() {
      return getEditor;
    }},
  hasEditor: {get: function() {
      return hasEditor;
    }},
  getEditorConstructor: {get: function() {
      return getEditorConstructor;
    }},
  __esModule: {value: true}
});
var $__browser__,
    $__helpers_47_string__;
var Handsontable = ($__browser__ = _dereq_("browser"), $__browser__ && $__browser__.__esModule && $__browser__ || {default: $__browser__}).default;
var toUpperCaseFirst = ($__helpers_47_string__ = _dereq_("helpers/string"), $__helpers_47_string__ && $__helpers_47_string__.__esModule && $__helpers_47_string__ || {default: $__helpers_47_string__}).toUpperCaseFirst;
;
var registeredEditorNames = {},
    registeredEditorClasses = new WeakMap();
Handsontable.editors = Handsontable.editors || {};
Handsontable.editors.registerEditor = registerEditor;
Handsontable.editors.getEditor = getEditor;
function RegisteredEditor(editorClass) {
  var Clazz,
      instances;
  instances = {};
  Clazz = editorClass;
  this.getConstructor = function() {
    return editorClass;
  };
  this.getInstance = function(hotInstance) {
    if (!(hotInstance.guid in instances)) {
      instances[hotInstance.guid] = new Clazz(hotInstance);
    }
    return instances[hotInstance.guid];
  };
}
function registerEditor(editorName, editorClass) {
  var editor = new RegisteredEditor(editorClass);
  if (typeof editorName === 'string') {
    registeredEditorNames[editorName] = editor;
    Handsontable.editors[toUpperCaseFirst(editorName) + 'Editor'] = editorClass;
  }
  registeredEditorClasses.set(editorClass, editor);
}
function getEditor(editorName, hotInstance) {
  var editor;
  if (typeof editorName == 'function') {
    if (!(registeredEditorClasses.get(editorName))) {
      registerEditor(null, editorName);
    }
    editor = registeredEditorClasses.get(editorName);
  } else if (typeof editorName == 'string') {
    editor = registeredEditorNames[editorName];
  } else {
    throw Error('Only strings and functions can be passed as "editor" parameter ');
  }
  if (!editor) {
    throw Error('No editor registered under name "' + editorName + '"');
  }
  return editor.getInstance(hotInstance);
}
function getEditorConstructor(editorName) {
  var editor;
  if (typeof editorName == 'string') {
    editor = registeredEditorNames[editorName];
  } else {
    throw Error('Only strings and functions can be passed as "editor" parameter ');
  }
  if (!editor) {
    throw Error('No editor registered under name "' + editorName + '"');
  }
  return editor.getConstructor();
}
function hasEditor(editorName) {
  return registeredEditorNames[editorName] ? true : false;
}

//# 
},{"browser":24,"helpers/string":55}],31:[function(_dereq_,module,exports){
"use strict";
Object.defineProperties(exports, {
  BaseEditor: {get: function() {
      return BaseEditor;
    }},
  __esModule: {value: true}
});
var $___46__46__47_browser__,
    $___46__46__47_helpers_47_mixed__,
    $___46__46__47_3rdparty_47_walkontable_47_src_47_cell_47_coords__;
var Handsontable = ($___46__46__47_browser__ = _dereq_("browser"), $___46__46__47_browser__ && $___46__46__47_browser__.__esModule && $___46__46__47_browser__ || {default: $___46__46__47_browser__}).default;
var stringify = ($___46__46__47_helpers_47_mixed__ = _dereq_("helpers/mixed"), $___46__46__47_helpers_47_mixed__ && $___46__46__47_helpers_47_mixed__.__esModule && $___46__46__47_helpers_47_mixed__ || {default: $___46__46__47_helpers_47_mixed__}).stringify;
var WalkontableCellCoords = ($___46__46__47_3rdparty_47_walkontable_47_src_47_cell_47_coords__ = _dereq_("3rdparty/walkontable/src/cell/coords"), $___46__46__47_3rdparty_47_walkontable_47_src_47_cell_47_coords__ && $___46__46__47_3rdparty_47_walkontable_47_src_47_cell_47_coords__.__esModule && $___46__46__47_3rdparty_47_walkontable_47_src_47_cell_47_coords__ || {default: $___46__46__47_3rdparty_47_walkontable_47_src_47_cell_47_coords__}).WalkontableCellCoords;
;
Handsontable.editors = Handsontable.editors || {};
Handsontable.editors.BaseEditor = BaseEditor;
Handsontable.EditorState = {
  VIRGIN: 'STATE_VIRGIN',
  EDITING: 'STATE_EDITING',
  WAITING: 'STATE_WAITING',
  FINISHED: 'STATE_FINISHED'
};
function BaseEditor(instance) {
  this.instance = instance;
  this.state = Handsontable.EditorState.VIRGIN;
  this._opened = false;
  this._fullEditMode = false;
  this._closeCallback = null;
  this.init();
}
BaseEditor.prototype._fireCallbacks = function(result) {
  if (this._closeCallback) {
    this._closeCallback(result);
    this._closeCallback = null;
  }
};
BaseEditor.prototype.init = function() {};
BaseEditor.prototype.getValue = function() {
  throw Error('Editor getValue() method unimplemented');
};
BaseEditor.prototype.setValue = function(newValue) {
  throw Error('Editor setValue() method unimplemented');
};
BaseEditor.prototype.open = function() {
  throw Error('Editor open() method unimplemented');
};
BaseEditor.prototype.close = function() {
  throw Error('Editor close() method unimplemented');
};
BaseEditor.prototype.prepare = function(row, col, prop, td, originalValue, cellProperties) {
  this.TD = td;
  this.row = row;
  this.col = col;
  this.prop = prop;
  this.originalValue = originalValue;
  this.cellProperties = cellProperties;
  var ieIframeDocument = document.activeElement.nodeName === void 0;
  if (this.instance.view.isMouseDown() && document.activeElement && document.activeElement !== document.body && !ieIframeDocument) {
    document.activeElement.blur();
  } else if (!document.activeElement || (document.activeElement && ieIframeDocument)) {
    document.body.focus();
  }
  this.state = Handsontable.EditorState.VIRGIN;
};
BaseEditor.prototype.extend = function() {
  var baseClass = this.constructor;
  function Editor() {
    baseClass.apply(this, arguments);
  }
  function inherit(Child, Parent) {
    function Bridge() {}
    Bridge.prototype = Parent.prototype;
    Child.prototype = new Bridge();
    Child.prototype.constructor = Child;
    return Child;
  }
  return inherit(Editor, baseClass);
};
BaseEditor.prototype.saveValue = function(value, ctrlDown) {
  var selection,
      tmp;
  if (ctrlDown) {
    selection = this.instance.getSelected();
    if (selection[0] > selection[2]) {
      tmp = selection[0];
      selection[0] = selection[2];
      selection[2] = tmp;
    }
    if (selection[1] > selection[3]) {
      tmp = selection[1];
      selection[1] = selection[3];
      selection[3] = tmp;
    }
  } else {
    selection = [this.row, this.col, null, null];
  }
  this.instance.populateFromArray(selection[0], selection[1], value, selection[2], selection[3], 'edit');
};
BaseEditor.prototype.beginEditing = function(initialValue, event) {
  if (this.state != Handsontable.EditorState.VIRGIN) {
    return;
  }
  this.instance.view.scrollViewport(new WalkontableCellCoords(this.row, this.col));
  this.instance.view.render();
  this.state = Handsontable.EditorState.EDITING;
  initialValue = typeof initialValue == 'string' ? initialValue : this.originalValue;
  this.setValue(stringify(initialValue));
  this.open(event);
  this._opened = true;
  this.focus();
  this.instance.view.render();
  this.instance.runHooks('afterBeginEditing', this.row, this.col);
};
BaseEditor.prototype.finishEditing = function(restoreOriginalValue, ctrlDown, callback) {
  var _this = this,
      val;
  if (callback) {
    var previousCloseCallback = this._closeCallback;
    this._closeCallback = function(result) {
      if (previousCloseCallback) {
        previousCloseCallback(result);
      }
      callback(result);
    };
  }
  if (this.isWaiting()) {
    return;
  }
  if (this.state == Handsontable.EditorState.VIRGIN) {
    this.instance._registerTimeout(setTimeout(function() {
      _this._fireCallbacks(true);
    }, 0));
    return;
  }
  if (this.state == Handsontable.EditorState.EDITING) {
    if (restoreOriginalValue) {
      this.cancelChanges();
      this.instance.view.render();
      return;
    }
    var value = this.getValue();
    if (this.instance.getSettings().trimWhitespace) {
      val = [[typeof value === 'string' ? String.prototype.trim.call(value || '') : value]];
    } else {
      val = [[value]];
    }
    this.state = Handsontable.EditorState.WAITING;
    this.saveValue(val, ctrlDown);
    if (this.instance.getCellValidator(this.cellProperties)) {
      this.instance.addHookOnce('postAfterValidate', function(result) {
        _this.state = Handsontable.EditorState.FINISHED;
        _this.discardEditor(result);
      });
    } else {
      this.state = Handsontable.EditorState.FINISHED;
      this.discardEditor(true);
    }
  }
};
BaseEditor.prototype.cancelChanges = function() {
  this.state = Handsontable.EditorState.FINISHED;
  this.discardEditor();
};
BaseEditor.prototype.discardEditor = function(result) {
  if (this.state !== Handsontable.EditorState.FINISHED) {
    return;
  }
  if (result === false && this.cellProperties.allowInvalid !== true) {
    this.instance.selectCell(this.row, this.col);
    this.focus();
    this.state = Handsontable.EditorState.EDITING;
    this._fireCallbacks(false);
  } else {
    this.close();
    this._opened = false;
    this._fullEditMode = false;
    this.state = Handsontable.EditorState.VIRGIN;
    this._fireCallbacks(true);
  }
};
BaseEditor.prototype.enableFullEditMode = function() {
  this._fullEditMode = true;
};
BaseEditor.prototype.isInFullEditMode = function() {
  return this._fullEditMode;
};
BaseEditor.prototype.isOpened = function() {
  return this._opened;
};
BaseEditor.prototype.isWaiting = function() {
  return this.state === Handsontable.EditorState.WAITING;
};
BaseEditor.prototype.checkEditorSection = function() {
  var totalRows = this.instance.countRows();
  var section = '';
  if (this.row < this.instance.getSettings().fixedRowsTop) {
    if (this.col < this.instance.getSettings().fixedColumnsLeft) {
      section = 'top-left-corner';
    } else {
      section = 'top';
    }
  } else if (this.instance.getSettings().fixedRowsBottom && this.row >= totalRows - this.instance.getSettings().fixedRowsBottom) {
    if (this.col < this.instance.getSettings().fixedColumnsLeft) {
      section = 'bottom-left-corner';
    } else {
      section = 'bottom';
    }
  } else {
    if (this.col < this.instance.getSettings().fixedColumnsLeft) {
      section = 'left';
    }
  }
  return section;
};

//# 
},{"3rdparty/walkontable/src/cell/coords":6,"browser":24,"helpers/mixed":51}],32:[function(_dereq_,module,exports){
"use strict";
Object.defineProperties(exports, {
  AutocompleteEditor: {get: function() {
      return AutocompleteEditor;
    }},
  __esModule: {value: true}
});
var $___46__46__47_helpers_47_unicode__,
    $___46__46__47_helpers_47_mixed__,
    $___46__46__47_helpers_47_string__,
    $___46__46__47_helpers_47_array__,
    $___46__46__47_helpers_47_dom_47_element__,
    $___46__46__47_editors__,
    $__handsontableEditor__;
var $__0 = ($___46__46__47_helpers_47_unicode__ = _dereq_("helpers/unicode"), $___46__46__47_helpers_47_unicode__ && $___46__46__47_helpers_47_unicode__.__esModule && $___46__46__47_helpers_47_unicode__ || {default: $___46__46__47_helpers_47_unicode__}),
    KEY_CODES = $__0.KEY_CODES,
    isPrintableChar = $__0.isPrintableChar;
var stringify = ($___46__46__47_helpers_47_mixed__ = _dereq_("helpers/mixed"), $___46__46__47_helpers_47_mixed__ && $___46__46__47_helpers_47_mixed__.__esModule && $___46__46__47_helpers_47_mixed__ || {default: $___46__46__47_helpers_47_mixed__}).stringify;
var stripTags = ($___46__46__47_helpers_47_string__ = _dereq_("helpers/string"), $___46__46__47_helpers_47_string__ && $___46__46__47_helpers_47_string__.__esModule && $___46__46__47_helpers_47_string__ || {default: $___46__46__47_helpers_47_string__}).stripTags;
var $__3 = ($___46__46__47_helpers_47_array__ = _dereq_("helpers/array"), $___46__46__47_helpers_47_array__ && $___46__46__47_helpers_47_array__.__esModule && $___46__46__47_helpers_47_array__ || {default: $___46__46__47_helpers_47_array__}),
    pivot = $__3.pivot,
    arrayFilter = $__3.arrayFilter,
    arrayMap = $__3.arrayMap;
var $__4 = ($___46__46__47_helpers_47_dom_47_element__ = _dereq_("helpers/dom/element"), $___46__46__47_helpers_47_dom_47_element__ && $___46__46__47_helpers_47_dom_47_element__.__esModule && $___46__46__47_helpers_47_dom_47_element__ || {default: $___46__46__47_helpers_47_dom_47_element__}),
    addClass = $__4.addClass,
    getCaretPosition = $__4.getCaretPosition,
    getScrollbarWidth = $__4.getScrollbarWidth,
    getSelectionEndPosition = $__4.getSelectionEndPosition,
    outerWidth = $__4.outerWidth,
    outerHeight = $__4.outerHeight,
    offset = $__4.offset,
    getTrimmingContainer = $__4.getTrimmingContainer,
    setCaretPosition = $__4.setCaretPosition;
var registerEditor = ($___46__46__47_editors__ = _dereq_("editors"), $___46__46__47_editors__ && $___46__46__47_editors__.__esModule && $___46__46__47_editors__ || {default: $___46__46__47_editors__}).registerEditor;
var HandsontableEditor = ($__handsontableEditor__ = _dereq_("handsontableEditor"), $__handsontableEditor__ && $__handsontableEditor__.__esModule && $__handsontableEditor__ || {default: $__handsontableEditor__}).HandsontableEditor;
var AutocompleteEditor = HandsontableEditor.prototype.extend();
AutocompleteEditor.prototype.init = function() {
  HandsontableEditor.prototype.init.apply(this, arguments);
  this.query = null;
  this.choices = [];
};
AutocompleteEditor.prototype.createElements = function() {
  HandsontableEditor.prototype.createElements.apply(this, arguments);
  addClass(this.htContainer, 'autocompleteEditor');
  addClass(this.htContainer, window.navigator.platform.indexOf('Mac') === -1 ? '' : 'htMacScroll');
};
var skipOne = false;
function onBeforeKeyDown(event) {
  skipOne = false;
  var editor = this.getActiveEditor();
  if (isPrintableChar(event.keyCode) || event.keyCode === KEY_CODES.BACKSPACE || event.keyCode === KEY_CODES.DELETE || event.keyCode === KEY_CODES.INSERT) {
    var timeOffset = 0;
    if (event.keyCode === KEY_CODES.C && (event.ctrlKey || event.metaKey)) {
      return;
    }
    if (!editor.isOpened()) {
      timeOffset += 10;
    }
    if (editor.htEditor) {
      editor.instance._registerTimeout(setTimeout(function() {
        editor.queryChoices(editor.TEXTAREA.value);
        skipOne = true;
      }, timeOffset));
    }
  }
}
AutocompleteEditor.prototype.prepare = function() {
  this.instance.addHook('beforeKeyDown', onBeforeKeyDown);
  HandsontableEditor.prototype.prepare.apply(this, arguments);
};
AutocompleteEditor.prototype.open = function() {
  this.TEXTAREA_PARENT.style.overflow = 'auto';
  HandsontableEditor.prototype.open.apply(this, arguments);
  this.TEXTAREA_PARENT.style.overflow = '';
  var choicesListHot = this.htEditor.getInstance();
  var _this = this;
  var trimDropdown = this.cellProperties.trimDropdown === void 0 ? true : this.cellProperties.trimDropdown;
  this.TEXTAREA.style.visibility = 'visible';
  this.focus();
  choicesListHot.updateSettings({
    colWidths: trimDropdown ? [outerWidth(this.TEXTAREA) - 2] : void 0,
    width: trimDropdown ? outerWidth(this.TEXTAREA) + getScrollbarWidth() + 2 : void 0,
    afterRenderer: function(TD, row, col, prop, value, cellProperties) {
      var $__8 = _this.cellProperties,
          filteringCaseSensitive = $__8.filteringCaseSensitive,
          allowHtml = $__8.allowHtml;
      var indexOfMatch;
      var match;
      value = stringify(value);
      if (value && !allowHtml) {
        indexOfMatch = filteringCaseSensitive === true ? value.indexOf(this.query) : value.toLowerCase().indexOf(_this.query.toLowerCase());
        if (indexOfMatch !== -1) {
          match = value.substr(indexOfMatch, _this.query.length);
          value = value.replace(match, '<strong>' + match + '</strong>');
        }
      }
      TD.innerHTML = value;
    },
    autoColumnSize: true,
    modifyColWidth: function(width, col) {
      var autoWidths = this.getPlugin('autoColumnSize').widths;
      if (autoWidths[col]) {
        width = autoWidths[col];
      }
      return trimDropdown ? width : width + 15;
    }
  });
  this.htEditor.view.wt.wtTable.holder.parentNode.style['padding-right'] = getScrollbarWidth() + 2 + 'px';
  if (skipOne) {
    skipOne = false;
  }
  _this.instance._registerTimeout(setTimeout(function() {
    _this.queryChoices(_this.TEXTAREA.value);
  }, 0));
};
AutocompleteEditor.prototype.close = function() {
  HandsontableEditor.prototype.close.apply(this, arguments);
};
AutocompleteEditor.prototype.queryChoices = function(query) {
  var $__7 = this;
  this.query = query;
  var $__8 = this.cellProperties,
      source = $__8.source,
      filter = $__8.filter,
      filteringCaseSensitive = $__8.filteringCaseSensitive,
      allowHtml = $__8.allowHtml;
  var stripTagsEach = (function(choices) {
    return arrayMap(choices, (function(choice) {
      return stripTags(choice);
    }));
  });
  if (typeof source == 'function') {
    source.call(this.cellProperties, query, (function(choices) {
      $__7.updateChoicesList(allowHtml ? choices : stripTagsEach(choices));
    }));
  } else if (Array.isArray(source)) {
    this.updateChoicesList(allowHtml ? source : stripTagsEach(source));
  } else {
    this.updateChoicesList([]);
  }
};
AutocompleteEditor.prototype.updateChoicesList = function(choices) {
  var pos = getCaretPosition(this.TEXTAREA);
  var endPos = getSelectionEndPosition(this.TEXTAREA);
  var sortByRelevanceSetting = this.cellProperties.sortByRelevance;
  var filterSetting = this.cellProperties.filter;
  var orderByRelevance = null;
  var highlightIndex = null;
  var flipped = null;
  if (sortByRelevanceSetting) {
    orderByRelevance = AutocompleteEditor.sortByRelevance(this.getValue(), choices, this.cellProperties.filteringCaseSensitive);
  }
  var orderByRelevanceLength = Array.isArray(orderByRelevance) ? orderByRelevance.length : 0;
  if (filterSetting === false) {
    if (orderByRelevanceLength) {
      highlightIndex = orderByRelevance[0];
    }
  } else {
    var sorted = [];
    for (var i = 0,
        choicesCount = choices.length; i < choicesCount; i++) {
      if (sortByRelevanceSetting && orderByRelevanceLength <= i) {
        break;
      }
      if (orderByRelevanceLength) {
        sorted.push(choices[orderByRelevance[i]]);
      } else {
        sorted.push(choices[i]);
      }
    }
    highlightIndex = 0;
    choices = sorted;
  }
  this.choices = choices;
  this.htEditor.loadData(pivot([choices]));
  this.updateDropdownHeight();
  this.flipDropdownIfNeeded();
  if (this.cellProperties.strict === true) {
    this.highlightBestMatchingChoice(highlightIndex);
  }
  this.instance.listen();
  this.TEXTAREA.focus();
  setCaretPosition(this.TEXTAREA, pos, (pos === endPos ? void 0 : endPos));
};
AutocompleteEditor.prototype.flipDropdownIfNeeded = function() {
  var textareaOffset = offset(this.TEXTAREA);
  var textareaHeight = outerHeight(this.TEXTAREA);
  var dropdownHeight = this.getDropdownHeight();
  var trimmingContainer = getTrimmingContainer(this.instance.view.wt.wtTable.TABLE);
  var trimmingContainerScrollTop = trimmingContainer.scrollTop;
  var headersHeight = outerHeight(this.instance.view.wt.wtTable.THEAD);
  var containerOffset = {
    row: 0,
    col: 0
  };
  if (trimmingContainer !== window) {
    containerOffset = offset(trimmingContainer);
  }
  var spaceAbove = textareaOffset.top - containerOffset.top - headersHeight + trimmingContainerScrollTop;
  var spaceBelow = trimmingContainer.scrollHeight - spaceAbove - headersHeight - textareaHeight;
  var flipNeeded = dropdownHeight > spaceBelow && spaceAbove > spaceBelow;
  if (flipNeeded) {
    this.flipDropdown(dropdownHeight);
  } else {
    this.unflipDropdown();
  }
  this.limitDropdownIfNeeded(flipNeeded ? spaceAbove : spaceBelow, dropdownHeight);
  return flipNeeded;
};
AutocompleteEditor.prototype.limitDropdownIfNeeded = function(spaceAvailable, dropdownHeight) {
  if (dropdownHeight > spaceAvailable) {
    var tempHeight = 0;
    var i = 0;
    var lastRowHeight = 0;
    var height = null;
    do {
      lastRowHeight = this.htEditor.getRowHeight(i) || this.htEditor.view.wt.wtSettings.settings.defaultRowHeight;
      tempHeight += lastRowHeight;
      i++;
    } while (tempHeight < spaceAvailable);
    height = tempHeight - lastRowHeight;
    if (this.htEditor.flipped) {
      this.htEditor.rootElement.style.top = parseInt(this.htEditor.rootElement.style.top, 10) + dropdownHeight - height + 'px';
    }
    this.setDropdownHeight(tempHeight - lastRowHeight);
  }
};
AutocompleteEditor.prototype.flipDropdown = function(dropdownHeight) {
  var dropdownStyle = this.htEditor.rootElement.style;
  dropdownStyle.position = 'absolute';
  dropdownStyle.top = -dropdownHeight + 'px';
  this.htEditor.flipped = true;
};
AutocompleteEditor.prototype.unflipDropdown = function() {
  var dropdownStyle = this.htEditor.rootElement.style;
  if (dropdownStyle.position === 'absolute') {
    dropdownStyle.position = '';
    dropdownStyle.top = '';
  }
  this.htEditor.flipped = void 0;
};
AutocompleteEditor.prototype.updateDropdownHeight = function() {
  var currentDropdownWidth = this.htEditor.getColWidth(0) + getScrollbarWidth() + 2;
  var trimDropdown = this.cellProperties.trimDropdown;
  this.htEditor.updateSettings({
    height: this.getDropdownHeight(),
    width: trimDropdown ? void 0 : currentDropdownWidth
  });
  this.htEditor.view.wt.wtTable.alignOverlaysWithTrimmingContainer();
};
AutocompleteEditor.prototype.setDropdownHeight = function(height) {
  this.htEditor.updateSettings({height: height});
};
AutocompleteEditor.prototype.finishEditing = function(restoreOriginalValue) {
  if (!restoreOriginalValue) {
    this.instance.removeHook('beforeKeyDown', onBeforeKeyDown);
  }
  HandsontableEditor.prototype.finishEditing.apply(this, arguments);
};
AutocompleteEditor.prototype.highlightBestMatchingChoice = function(index) {
  if (typeof index === 'number') {
    this.htEditor.selectCell(index, 0);
  } else {
    this.htEditor.deselectCell();
  }
};
AutocompleteEditor.sortByRelevance = function(value, choices, caseSensitive) {
  var choicesRelevance = [];
  var currentItem;
  var valueLength = value.length;
  var valueIndex;
  var charsLeft;
  var result = [];
  var i;
  var choicesCount = choices.length;
  if (valueLength === 0) {
    for (i = 0; i < choicesCount; i++) {
      result.push(i);
    }
    return result;
  }
  for (i = 0; i < choicesCount; i++) {
    currentItem = stripTags(stringify(choices[i]));
    if (caseSensitive) {
      valueIndex = currentItem.indexOf(value);
    } else {
      valueIndex = currentItem.toLowerCase().indexOf(value.toLowerCase());
    }
    if (valueIndex == -1) {
      continue;
    }
    charsLeft = currentItem.length - valueIndex - valueLength;
    choicesRelevance.push({
      baseIndex: i,
      index: valueIndex,
      charsLeft: charsLeft,
      value: currentItem
    });
  }
  choicesRelevance.sort(function(a, b) {
    if (b.index === -1) {
      return -1;
    }
    if (a.index === -1) {
      return 1;
    }
    if (a.index < b.index) {
      return -1;
    } else if (b.index < a.index) {
      return 1;
    } else if (a.index === b.index) {
      if (a.charsLeft < b.charsLeft) {
        return -1;
      } else if (a.charsLeft > b.charsLeft) {
        return 1;
      } else {
        return 0;
      }
    }
  });
  for (i = 0, choicesCount = choicesRelevance.length; i < choicesCount; i++) {
    result.push(choicesRelevance[i].baseIndex);
  }
  return result;
};
AutocompleteEditor.prototype.getDropdownHeight = function() {
  var firstRowHeight = this.htEditor.getInstance().getRowHeight(0) || 23;
  var visibleRows = this.cellProperties.visibleRows;
  return this.choices.length >= visibleRows ? visibleRows * firstRowHeight : this.choices.length * firstRowHeight + 8;
};
AutocompleteEditor.prototype.allowKeyEventPropagation = function(keyCode) {
  var selected = {row: this.htEditor.getSelectedRange() ? this.htEditor.getSelectedRange().from.row : -1};
  var allowed = false;
  if (keyCode === KEY_CODES.ARROW_DOWN && selected.row > 0 && selected.row < this.htEditor.countRows() - 1) {
    allowed = true;
  }
  if (keyCode === KEY_CODES.ARROW_UP && selected.row > -1) {
    allowed = true;
  }
  return allowed;
};
AutocompleteEditor.prototype.discardEditor = function(result) {
  HandsontableEditor.prototype.discardEditor.apply(this, arguments);
  this.instance.view.render();
};
;
registerEditor('autocomplete', AutocompleteEditor);

//# 
},{"editors":30,"handsontableEditor":36,"helpers/array":43,"helpers/dom/element":47,"helpers/mixed":51,"helpers/string":55,"helpers/unicode":56}],33:[function(_dereq_,module,exports){
"use strict";
Object.defineProperties(exports, {
  CheckboxEditor: {get: function() {
      return CheckboxEditor;
    }},
  __esModule: {value: true}
});
var $___46__46__47_editors__,
    $___95_baseEditor__,
    $___46__46__47_helpers_47_dom_47_element__;
var registerEditor = ($___46__46__47_editors__ = _dereq_("editors"), $___46__46__47_editors__ && $___46__46__47_editors__.__esModule && $___46__46__47_editors__ || {default: $___46__46__47_editors__}).registerEditor;
var BaseEditor = ($___95_baseEditor__ = _dereq_("_baseEditor"), $___95_baseEditor__ && $___95_baseEditor__.__esModule && $___95_baseEditor__ || {default: $___95_baseEditor__}).BaseEditor;
var hasClass = ($___46__46__47_helpers_47_dom_47_element__ = _dereq_("helpers/dom/element"), $___46__46__47_helpers_47_dom_47_element__ && $___46__46__47_helpers_47_dom_47_element__.__esModule && $___46__46__47_helpers_47_dom_47_element__ || {default: $___46__46__47_helpers_47_dom_47_element__}).hasClass;
var CheckboxEditor = function CheckboxEditor() {
  $traceurRuntime.superConstructor($CheckboxEditor).apply(this, arguments);
};
var $CheckboxEditor = CheckboxEditor;
($traceurRuntime.createClass)(CheckboxEditor, {
  beginEditing: function(initialValue, event) {
    if (event === void 0) {
      var checkbox = this.TD.querySelector('input[type="checkbox"]');
      if (!hasClass(checkbox, 'htBadValue')) {
        checkbox.click();
      }
    }
  },
  finishEditing: function() {},
  init: function() {},
  open: function() {},
  close: function() {},
  getValue: function() {},
  setValue: function() {},
  focus: function() {}
}, {}, BaseEditor);
;
registerEditor('checkbox', CheckboxEditor);

//# 
},{"_baseEditor":31,"editors":30,"helpers/dom/element":47}],34:[function(_dereq_,module,exports){
"use strict";
Object.defineProperties(exports, {
  DateEditor: {get: function() {
      return DateEditor;
    }},
  __esModule: {value: true}
});
var $___46__46__47_browser__,
    $___46__46__47_helpers_47_dom_47_element__,
    $___46__46__47_helpers_47_object__,
    $___46__46__47_eventManager__,
    $___46__46__47_editors__,
    $___46__46__47_helpers_47_unicode__,
    $___46__46__47_helpers_47_dom_47_event__,
    $__textEditor__,
    $__moment__,
    $__pikaday__;
var Handsontable = ($___46__46__47_browser__ = _dereq_("browser"), $___46__46__47_browser__ && $___46__46__47_browser__.__esModule && $___46__46__47_browser__ || {default: $___46__46__47_browser__}).default;
var $__1 = ($___46__46__47_helpers_47_dom_47_element__ = _dereq_("helpers/dom/element"), $___46__46__47_helpers_47_dom_47_element__ && $___46__46__47_helpers_47_dom_47_element__.__esModule && $___46__46__47_helpers_47_dom_47_element__ || {default: $___46__46__47_helpers_47_dom_47_element__}),
    addClass = $__1.addClass,
    outerHeight = $__1.outerHeight;
var deepExtend = ($___46__46__47_helpers_47_object__ = _dereq_("helpers/object"), $___46__46__47_helpers_47_object__ && $___46__46__47_helpers_47_object__.__esModule && $___46__46__47_helpers_47_object__ || {default: $___46__46__47_helpers_47_object__}).deepExtend;
var EventManager = ($___46__46__47_eventManager__ = _dereq_("eventManager"), $___46__46__47_eventManager__ && $___46__46__47_eventManager__.__esModule && $___46__46__47_eventManager__ || {default: $___46__46__47_eventManager__}).EventManager;
var $__4 = ($___46__46__47_editors__ = _dereq_("editors"), $___46__46__47_editors__ && $___46__46__47_editors__.__esModule && $___46__46__47_editors__ || {default: $___46__46__47_editors__}),
    getEditor = $__4.getEditor,
    registerEditor = $__4.registerEditor;
var isMetaKey = ($___46__46__47_helpers_47_unicode__ = _dereq_("helpers/unicode"), $___46__46__47_helpers_47_unicode__ && $___46__46__47_helpers_47_unicode__.__esModule && $___46__46__47_helpers_47_unicode__ || {default: $___46__46__47_helpers_47_unicode__}).isMetaKey;
var stopPropagation = ($___46__46__47_helpers_47_dom_47_event__ = _dereq_("helpers/dom/event"), $___46__46__47_helpers_47_dom_47_event__ && $___46__46__47_helpers_47_dom_47_event__.__esModule && $___46__46__47_helpers_47_dom_47_event__ || {default: $___46__46__47_helpers_47_dom_47_event__}).stopPropagation;
var TextEditor = ($__textEditor__ = _dereq_("textEditor"), $__textEditor__ && $__textEditor__.__esModule && $__textEditor__ || {default: $__textEditor__}).TextEditor;
var moment = ($__moment__ = _dereq_("moment"), $__moment__ && $__moment__.__esModule && $__moment__ || {default: $__moment__}).default;
var Pikaday = ($__pikaday__ = _dereq_("pikaday"), $__pikaday__ && $__pikaday__.__esModule && $__pikaday__ || {default: $__pikaday__}).default;
var DateEditor = function DateEditor(hotInstance) {
  this.$datePicker = null;
  this.datePicker = null;
  this.datePickerStyle = null;
  this.defaultDateFormat = 'DD/MM/YYYY';
  this.isCellEdited = false;
  this.parentDestroyed = false;
  $traceurRuntime.superConstructor($DateEditor).call(this, hotInstance);
};
var $DateEditor = DateEditor;
($traceurRuntime.createClass)(DateEditor, {
  init: function() {
    var $__10 = this;
    if (typeof moment !== 'function') {
      throw new Error('You need to include moment.js to your project.');
    }
    if (typeof Pikaday !== 'function') {
      throw new Error('You need to include Pikaday to your project.');
    }
    $traceurRuntime.superGet(this, $DateEditor.prototype, "init").call(this);
    this.instance.addHook('afterDestroy', (function() {
      $__10.parentDestroyed = true;
      $__10.destroyElements();
    }));
  },
  createElements: function() {
    $traceurRuntime.superGet(this, $DateEditor.prototype, "createElements").call(this);
    this.datePicker = document.createElement('DIV');
    this.datePickerStyle = this.datePicker.style;
    this.datePickerStyle.position = 'absolute';
    this.datePickerStyle.top = 0;
    this.datePickerStyle.left = 0;
    this.datePickerStyle.zIndex = 9999;
    addClass(this.datePicker, 'htDatepickerHolder');
    document.body.appendChild(this.datePicker);
    this.$datePicker = new Pikaday(this.getDatePickerConfig());
    var eventManager = new EventManager(this);
    eventManager.addEventListener(this.datePicker, 'mousedown', (function(event) {
      return stopPropagation(event);
    }));
    this.hideDatepicker();
  },
  destroyElements: function() {
    this.$datePicker.destroy();
  },
  prepare: function(row, col, prop, td, originalValue, cellProperties) {
    this._opened = false;
    $traceurRuntime.superGet(this, $DateEditor.prototype, "prepare").call(this, row, col, prop, td, originalValue, cellProperties);
  },
  open: function() {
    var event = arguments[0] !== (void 0) ? arguments[0] : null;
    $traceurRuntime.superGet(this, $DateEditor.prototype, "open").call(this);
    this.showDatepicker(event);
  },
  close: function() {
    var $__10 = this;
    this._opened = false;
    this.instance._registerTimeout(setTimeout((function() {
      $__10.instance.selection.refreshBorders();
    }), 0));
    $traceurRuntime.superGet(this, $DateEditor.prototype, "close").call(this);
  },
  finishEditing: function() {
    var isCancelled = arguments[0] !== (void 0) ? arguments[0] : false;
    var ctrlDown = arguments[1] !== (void 0) ? arguments[1] : false;
    if (isCancelled) {
      var value = this.originalValue;
      if (value !== void 0) {
        this.setValue(value);
      }
    }
    this.hideDatepicker();
    $traceurRuntime.superGet(this, $DateEditor.prototype, "finishEditing").call(this, isCancelled, ctrlDown);
  },
  showDatepicker: function(event) {
    this.$datePicker.config(this.getDatePickerConfig());
    var offset = this.TD.getBoundingClientRect();
    var dateFormat = this.cellProperties.dateFormat || this.defaultDateFormat;
    var datePickerConfig = this.$datePicker.config();
    var dateStr;
    var isMouseDown = this.instance.view.isMouseDown();
    var isMeta = event ? isMetaKey(event.keyCode) : false;
    this.datePickerStyle.top = (window.pageYOffset + offset.top + outerHeight(this.TD)) + 'px';
    this.datePickerStyle.left = (window.pageXOffset + offset.left) + 'px';
    this.$datePicker._onInputFocus = function() {};
    datePickerConfig.format = dateFormat;
    if (this.originalValue) {
      dateStr = this.originalValue;
      if (moment(dateStr, dateFormat, true).isValid()) {
        this.$datePicker.setMoment(moment(dateStr, dateFormat), true);
      }
      if (this.getValue() !== this.originalValue) {
        this.setValue(this.originalValue);
      }
      if (!isMeta && !isMouseDown) {
        this.setValue('');
      }
    } else {
      if (this.cellProperties.defaultDate) {
        dateStr = this.cellProperties.defaultDate;
        datePickerConfig.defaultDate = dateStr;
        if (moment(dateStr, dateFormat, true).isValid()) {
          this.$datePicker.setMoment(moment(dateStr, dateFormat), true);
        }
        if (!isMeta && !isMouseDown) {
          this.setValue('');
        }
      } else {
        this.$datePicker.gotoToday();
      }
    }
    this.datePickerStyle.display = 'block';
    this.$datePicker.show();
  },
  hideDatepicker: function() {
    this.datePickerStyle.display = 'none';
    this.$datePicker.hide();
  },
  getDatePickerConfig: function() {
    var $__10 = this;
    var htInput = this.TEXTAREA;
    var options = {};
    if (this.cellProperties && this.cellProperties.datePickerConfig) {
      deepExtend(options, this.cellProperties.datePickerConfig);
    }
    var origOnSelect = options.onSelect;
    var origOnClose = options.onClose;
    options.field = htInput;
    options.trigger = htInput;
    options.container = this.datePicker;
    options.bound = false;
    options.format = options.format || this.defaultDateFormat;
    options.reposition = options.reposition || false;
    options.onSelect = (function(dateStr) {
      if (!isNaN(dateStr.getTime())) {
        dateStr = moment(dateStr).format($__10.cellProperties.dateFormat || $__10.defaultDateFormat);
      }
      $__10.setValue(dateStr);
      $__10.hideDatepicker();
      if (origOnSelect) {
        origOnSelect();
      }
    });
    options.onClose = (function() {
      if (!$__10.parentDestroyed) {
        $__10.finishEditing(false);
      }
      if (origOnClose) {
        origOnClose();
      }
    });
    return options;
  }
}, {}, TextEditor);
;
Handsontable.editors = Handsontable.editors || {};
Handsontable.editors.DateEditor = DateEditor;
registerEditor('date', DateEditor);

//# 
},{"browser":24,"editors":30,"eventManager":42,"helpers/dom/element":47,"helpers/dom/event":48,"helpers/object":53,"helpers/unicode":56,"moment":"moment","pikaday":"pikaday","textEditor":41}],35:[function(_dereq_,module,exports){
"use strict";
Object.defineProperties(exports, {
  DropdownEditor: {get: function() {
      return DropdownEditor;
    }},
  __esModule: {value: true}
});
var $___46__46__47_browser__,
    $___46__46__47_editors__,
    $__autocompleteEditor__;
var Handsontable = ($___46__46__47_browser__ = _dereq_("browser"), $___46__46__47_browser__ && $___46__46__47_browser__.__esModule && $___46__46__47_browser__ || {default: $___46__46__47_browser__}).default;
var $__1 = ($___46__46__47_editors__ = _dereq_("editors"), $___46__46__47_editors__ && $___46__46__47_editors__.__esModule && $___46__46__47_editors__ || {default: $___46__46__47_editors__}),
    getEditor = $__1.getEditor,
    registerEditor = $__1.registerEditor,
    getEditorConstructor = $__1.getEditorConstructor;
var AutocompleteEditor = ($__autocompleteEditor__ = _dereq_("autocompleteEditor"), $__autocompleteEditor__ && $__autocompleteEditor__.__esModule && $__autocompleteEditor__ || {default: $__autocompleteEditor__}).AutocompleteEditor;
var DropdownEditor = function DropdownEditor() {
  $traceurRuntime.superConstructor($DropdownEditor).apply(this, arguments);
};
var $DropdownEditor = DropdownEditor;
($traceurRuntime.createClass)(DropdownEditor, {prepare: function(row, col, prop, td, originalValue, cellProperties) {
    $traceurRuntime.superGet(this, $DropdownEditor.prototype, "prepare").call(this, row, col, prop, td, originalValue, cellProperties);
    this.cellProperties.filter = false;
    this.cellProperties.strict = true;
  }}, {}, AutocompleteEditor);
Handsontable.hooks.add('beforeValidate', function(value, row, col, source) {
  var cellMeta = this.getCellMeta(row, this.propToCol(col));
  if (cellMeta.editor === Handsontable.editors.DropdownEditor) {
    if (cellMeta.strict === void 0) {
      cellMeta.filter = false;
      cellMeta.strict = true;
    }
  }
});
;
registerEditor('dropdown', DropdownEditor);

//# 
},{"autocompleteEditor":32,"browser":24,"editors":30}],36:[function(_dereq_,module,exports){
"use strict";
Object.defineProperties(exports, {
  HandsontableEditor: {get: function() {
      return HandsontableEditor;
    }},
  __esModule: {value: true}
});
var $___46__46__47_browser__,
    $___46__46__47_helpers_47_unicode__,
    $___46__46__47_helpers_47_object__,
    $___46__46__47_helpers_47_dom_47_element__,
    $___46__46__47_helpers_47_dom_47_event__,
    $___46__46__47_editors__,
    $__textEditor__;
var Handsontable = ($___46__46__47_browser__ = _dereq_("browser"), $___46__46__47_browser__ && $___46__46__47_browser__.__esModule && $___46__46__47_browser__ || {default: $___46__46__47_browser__}).default;
var KEY_CODES = ($___46__46__47_helpers_47_unicode__ = _dereq_("helpers/unicode"), $___46__46__47_helpers_47_unicode__ && $___46__46__47_helpers_47_unicode__.__esModule && $___46__46__47_helpers_47_unicode__ || {default: $___46__46__47_helpers_47_unicode__}).KEY_CODES;
var extend = ($___46__46__47_helpers_47_object__ = _dereq_("helpers/object"), $___46__46__47_helpers_47_object__ && $___46__46__47_helpers_47_object__.__esModule && $___46__46__47_helpers_47_object__ || {default: $___46__46__47_helpers_47_object__}).extend;
var setCaretPosition = ($___46__46__47_helpers_47_dom_47_element__ = _dereq_("helpers/dom/element"), $___46__46__47_helpers_47_dom_47_element__ && $___46__46__47_helpers_47_dom_47_element__.__esModule && $___46__46__47_helpers_47_dom_47_element__ || {default: $___46__46__47_helpers_47_dom_47_element__}).setCaretPosition;
var $__4 = ($___46__46__47_helpers_47_dom_47_event__ = _dereq_("helpers/dom/event"), $___46__46__47_helpers_47_dom_47_event__ && $___46__46__47_helpers_47_dom_47_event__.__esModule && $___46__46__47_helpers_47_dom_47_event__ || {default: $___46__46__47_helpers_47_dom_47_event__}),
    stopImmediatePropagation = $__4.stopImmediatePropagation,
    isImmediatePropagationStopped = $__4.isImmediatePropagationStopped;
var $__5 = ($___46__46__47_editors__ = _dereq_("editors"), $___46__46__47_editors__ && $___46__46__47_editors__.__esModule && $___46__46__47_editors__ || {default: $___46__46__47_editors__}),
    getEditor = $__5.getEditor,
    registerEditor = $__5.registerEditor;
var TextEditor = ($__textEditor__ = _dereq_("textEditor"), $__textEditor__ && $__textEditor__.__esModule && $__textEditor__ || {default: $__textEditor__}).TextEditor;
var HandsontableEditor = TextEditor.prototype.extend();
HandsontableEditor.prototype.createElements = function() {
  TextEditor.prototype.createElements.apply(this, arguments);
  var DIV = document.createElement('DIV');
  DIV.className = 'handsontableEditor';
  this.TEXTAREA_PARENT.appendChild(DIV);
  this.htContainer = DIV;
  this.assignHooks();
};
HandsontableEditor.prototype.prepare = function(td, row, col, prop, value, cellProperties) {
  TextEditor.prototype.prepare.apply(this, arguments);
  var parent = this;
  var options = {
    startRows: 0,
    startCols: 0,
    minRows: 0,
    minCols: 0,
    className: 'listbox',
    copyPaste: false,
    autoColumnSize: false,
    autoRowSize: false,
    readOnly: true,
    fillHandle: false,
    afterOnCellMouseDown: function() {
      var value = this.getValue();
      if (value !== void 0) {
        parent.setValue(value);
      }
      parent.instance.destroyEditor();
    }
  };
  if (this.cellProperties.handsontable) {
    extend(options, cellProperties.handsontable);
  }
  this.htOptions = options;
};
var onBeforeKeyDown = function(event) {
  if (isImmediatePropagationStopped(event)) {
    return;
  }
  var editor = this.getActiveEditor();
  var innerHOT = editor.htEditor.getInstance();
  var rowToSelect;
  if (event.keyCode == KEY_CODES.ARROW_DOWN) {
    if (!innerHOT.getSelected() && !innerHOT.flipped) {
      rowToSelect = 0;
    } else if (innerHOT.getSelected()) {
      if (innerHOT.flipped) {
        rowToSelect = innerHOT.getSelected()[0] + 1;
      } else if (!innerHOT.flipped) {
        var selectedRow = innerHOT.getSelected()[0];
        var lastRow = innerHOT.countRows() - 1;
        rowToSelect = Math.min(lastRow, selectedRow + 1);
      }
    }
  } else if (event.keyCode == KEY_CODES.ARROW_UP) {
    if (!innerHOT.getSelected() && innerHOT.flipped) {
      rowToSelect = innerHOT.countRows() - 1;
    } else if (innerHOT.getSelected()) {
      if (innerHOT.flipped) {
        var selectedRow = innerHOT.getSelected()[0];
        rowToSelect = Math.max(0, selectedRow - 1);
      } else {
        var selectedRow = innerHOT.getSelected()[0];
        rowToSelect = selectedRow - 1;
      }
    }
  }
  if (rowToSelect !== void 0) {
    if (rowToSelect < 0 || (innerHOT.flipped && rowToSelect > innerHOT.countRows() - 1)) {
      innerHOT.deselectCell();
    } else {
      innerHOT.selectCell(rowToSelect, 0);
    }
    if (innerHOT.getData().length) {
      event.preventDefault();
      stopImmediatePropagation(event);
      editor.instance.listen();
      editor.TEXTAREA.focus();
    }
  }
};
HandsontableEditor.prototype.open = function() {
  this.instance.addHook('beforeKeyDown', onBeforeKeyDown);
  TextEditor.prototype.open.apply(this, arguments);
  if (this.htEditor) {
    this.htEditor.destroy();
  }
  this.htEditor = new Handsontable(this.htContainer, this.htOptions);
  if (this.cellProperties.strict) {
    this.htEditor.selectCell(0, 0);
    this.TEXTAREA.style.visibility = 'hidden';
  } else {
    this.htEditor.deselectCell();
    this.TEXTAREA.style.visibility = 'visible';
  }
  setCaretPosition(this.TEXTAREA, 0, this.TEXTAREA.value.length);
};
HandsontableEditor.prototype.close = function() {
  this.instance.removeHook('beforeKeyDown', onBeforeKeyDown);
  this.instance.listen();
  TextEditor.prototype.close.apply(this, arguments);
};
HandsontableEditor.prototype.focus = function() {
  this.instance.listen();
  TextEditor.prototype.focus.apply(this, arguments);
};
HandsontableEditor.prototype.beginEditing = function(initialValue) {
  var onBeginEditing = this.instance.getSettings().onBeginEditing;
  if (onBeginEditing && onBeginEditing() === false) {
    return;
  }
  TextEditor.prototype.beginEditing.apply(this, arguments);
};
HandsontableEditor.prototype.finishEditing = function(isCancelled, ctrlDown) {
  if (this.htEditor && this.htEditor.isListening()) {
    this.instance.listen();
  }
  if (this.htEditor && this.htEditor.getSelected()) {
    var value = this.htEditor.getInstance().getValue();
    if (value !== void 0) {
      this.setValue(value);
    }
  }
  return TextEditor.prototype.finishEditing.apply(this, arguments);
};
HandsontableEditor.prototype.assignHooks = function() {
  var _this = this;
  this.instance.addHook('afterDestroy', function() {
    if (_this.htEditor) {
      _this.htEditor.destroy();
    }
  });
};
;
registerEditor('handsontable', HandsontableEditor);

//# 
},{"browser":24,"editors":30,"helpers/dom/element":47,"helpers/dom/event":48,"helpers/object":53,"helpers/unicode":56,"textEditor":41}],37:[function(_dereq_,module,exports){
"use strict";
Object.defineProperties(exports, {
  MobileTextEditor: {get: function() {
      return MobileTextEditor;
    }},
  __esModule: {value: true}
});
var $___46__46__47_browser__,
    $___46__46__47_helpers_47_unicode__,
    $___46__46__47_helpers_47_dom_47_event__,
    $___46__46__47_helpers_47_dom_47_element__,
    $___46__46__47_editors__,
    $___95_baseEditor__,
    $___46__46__47_eventManager__;
var Handsontable = ($___46__46__47_browser__ = _dereq_("browser"), $___46__46__47_browser__ && $___46__46__47_browser__.__esModule && $___46__46__47_browser__ || {default: $___46__46__47_browser__}).default;
var KEY_CODES = ($___46__46__47_helpers_47_unicode__ = _dereq_("helpers/unicode"), $___46__46__47_helpers_47_unicode__ && $___46__46__47_helpers_47_unicode__.__esModule && $___46__46__47_helpers_47_unicode__ || {default: $___46__46__47_helpers_47_unicode__}).KEY_CODES;
var $__2 = ($___46__46__47_helpers_47_dom_47_event__ = _dereq_("helpers/dom/event"), $___46__46__47_helpers_47_dom_47_event__ && $___46__46__47_helpers_47_dom_47_event__.__esModule && $___46__46__47_helpers_47_dom_47_event__ || {default: $___46__46__47_helpers_47_dom_47_event__}),
    stopImmediatePropagation = $__2.stopImmediatePropagation,
    isImmediatePropagationStopped = $__2.isImmediatePropagationStopped;
var $__3 = ($___46__46__47_helpers_47_dom_47_element__ = _dereq_("helpers/dom/element"), $___46__46__47_helpers_47_dom_47_element__ && $___46__46__47_helpers_47_dom_47_element__.__esModule && $___46__46__47_helpers_47_dom_47_element__ || {default: $___46__46__47_helpers_47_dom_47_element__}),
    addClass = $__3.addClass,
    getScrollLeft = $__3.getScrollLeft,
    getScrollTop = $__3.getScrollTop,
    hasClass = $__3.hasClass,
    isChildOf = $__3.isChildOf,
    offset = $__3.offset,
    outerHeight = $__3.outerHeight,
    outerWidth = $__3.outerWidth,
    removeClass = $__3.removeClass,
    setCaretPosition = $__3.setCaretPosition;
var $__4 = ($___46__46__47_editors__ = _dereq_("editors"), $___46__46__47_editors__ && $___46__46__47_editors__.__esModule && $___46__46__47_editors__ || {default: $___46__46__47_editors__}),
    getEditor = $__4.getEditor,
    registerEditor = $__4.registerEditor;
var BaseEditor = ($___95_baseEditor__ = _dereq_("_baseEditor"), $___95_baseEditor__ && $___95_baseEditor__.__esModule && $___95_baseEditor__ || {default: $___95_baseEditor__}).BaseEditor;
var eventManagerObject = ($___46__46__47_eventManager__ = _dereq_("eventManager"), $___46__46__47_eventManager__ && $___46__46__47_eventManager__.__esModule && $___46__46__47_eventManager__ || {default: $___46__46__47_eventManager__}).eventManager;
var MobileTextEditor = BaseEditor.prototype.extend(),
    domDimensionsCache = {};
var createControls = function() {
  this.controls = {};
  this.controls.leftButton = document.createElement('DIV');
  this.controls.leftButton.className = 'leftButton';
  this.controls.rightButton = document.createElement('DIV');
  this.controls.rightButton.className = 'rightButton';
  this.controls.upButton = document.createElement('DIV');
  this.controls.upButton.className = 'upButton';
  this.controls.downButton = document.createElement('DIV');
  this.controls.downButton.className = 'downButton';
  for (var button in this.controls) {
    if (this.controls.hasOwnProperty(button)) {
      this.positionControls.appendChild(this.controls[button]);
    }
  }
};
MobileTextEditor.prototype.valueChanged = function() {
  return this.initValue != this.getValue();
};
MobileTextEditor.prototype.init = function() {
  var that = this;
  this.eventManager = eventManagerObject(this.instance);
  this.createElements();
  this.bindEvents();
  this.instance.addHook('afterDestroy', function() {
    that.destroy();
  });
};
MobileTextEditor.prototype.getValue = function() {
  return this.TEXTAREA.value;
};
MobileTextEditor.prototype.setValue = function(newValue) {
  this.initValue = newValue;
  this.TEXTAREA.value = newValue;
};
MobileTextEditor.prototype.createElements = function() {
  this.editorContainer = document.createElement('DIV');
  this.editorContainer.className = 'htMobileEditorContainer';
  this.cellPointer = document.createElement('DIV');
  this.cellPointer.className = 'cellPointer';
  this.moveHandle = document.createElement('DIV');
  this.moveHandle.className = 'moveHandle';
  this.inputPane = document.createElement('DIV');
  this.inputPane.className = 'inputs';
  this.positionControls = document.createElement('DIV');
  this.positionControls.className = 'positionControls';
  this.TEXTAREA = document.createElement('TEXTAREA');
  addClass(this.TEXTAREA, 'handsontableInput');
  this.inputPane.appendChild(this.TEXTAREA);
  this.editorContainer.appendChild(this.cellPointer);
  this.editorContainer.appendChild(this.moveHandle);
  this.editorContainer.appendChild(this.inputPane);
  this.editorContainer.appendChild(this.positionControls);
  createControls.call(this);
  document.body.appendChild(this.editorContainer);
};
MobileTextEditor.prototype.onBeforeKeyDown = function(event) {
  var instance = this;
  var that = instance.getActiveEditor();
  if (event.target !== that.TEXTAREA || isImmediatePropagationStopped(event)) {
    return;
  }
  switch (event.keyCode) {
    case KEY_CODES.ENTER:
      that.close();
      event.preventDefault();
      break;
    case KEY_CODES.BACKSPACE:
      stopImmediatePropagation(event);
      break;
  }
};
MobileTextEditor.prototype.open = function() {
  this.instance.addHook('beforeKeyDown', this.onBeforeKeyDown);
  addClass(this.editorContainer, 'active');
  removeClass(this.cellPointer, 'hidden');
  this.updateEditorPosition();
};
MobileTextEditor.prototype.focus = function() {
  this.TEXTAREA.focus();
  setCaretPosition(this.TEXTAREA, this.TEXTAREA.value.length);
};
MobileTextEditor.prototype.close = function() {
  this.TEXTAREA.blur();
  this.instance.removeHook('beforeKeyDown', this.onBeforeKeyDown);
  removeClass(this.editorContainer, 'active');
};
MobileTextEditor.prototype.scrollToView = function() {
  var coords = this.instance.getSelectedRange().highlight;
  this.instance.view.scrollViewport(coords);
};
MobileTextEditor.prototype.hideCellPointer = function() {
  if (!hasClass(this.cellPointer, 'hidden')) {
    addClass(this.cellPointer, 'hidden');
  }
};
MobileTextEditor.prototype.updateEditorPosition = function(x, y) {
  if (x && y) {
    x = parseInt(x, 10);
    y = parseInt(y, 10);
    this.editorContainer.style.top = y + 'px';
    this.editorContainer.style.left = x + 'px';
  } else {
    var selection = this.instance.getSelected(),
        selectedCell = this.instance.getCell(selection[0], selection[1]);
    if (!domDimensionsCache.cellPointer) {
      domDimensionsCache.cellPointer = {
        height: outerHeight(this.cellPointer),
        width: outerWidth(this.cellPointer)
      };
    }
    if (!domDimensionsCache.editorContainer) {
      domDimensionsCache.editorContainer = {width: outerWidth(this.editorContainer)};
    }
    if (selectedCell !== undefined) {
      var scrollLeft = this.instance.view.wt.wtOverlays.leftOverlay.trimmingContainer == window ? 0 : getScrollLeft(this.instance.view.wt.wtOverlays.leftOverlay.holder);
      var scrollTop = this.instance.view.wt.wtOverlays.topOverlay.trimmingContainer == window ? 0 : getScrollTop(this.instance.view.wt.wtOverlays.topOverlay.holder);
      var selectedCellOffset = offset(selectedCell),
          selectedCellWidth = outerWidth(selectedCell),
          currentScrollPosition = {
            x: scrollLeft,
            y: scrollTop
          };
      this.editorContainer.style.top = parseInt(selectedCellOffset.top + outerHeight(selectedCell) - currentScrollPosition.y + domDimensionsCache.cellPointer.height, 10) + 'px';
      this.editorContainer.style.left = parseInt((window.innerWidth / 2) - (domDimensionsCache.editorContainer.width / 2), 10) + 'px';
      if (selectedCellOffset.left + selectedCellWidth / 2 > parseInt(this.editorContainer.style.left, 10) + domDimensionsCache.editorContainer.width) {
        this.editorContainer.style.left = window.innerWidth - domDimensionsCache.editorContainer.width + 'px';
      } else if (selectedCellOffset.left + selectedCellWidth / 2 < parseInt(this.editorContainer.style.left, 10) + 20) {
        this.editorContainer.style.left = 0 + 'px';
      }
      this.cellPointer.style.left = parseInt(selectedCellOffset.left - (domDimensionsCache.cellPointer.width / 2) - offset(this.editorContainer).left + (selectedCellWidth / 2) - currentScrollPosition.x, 10) + 'px';
    }
  }
};
MobileTextEditor.prototype.updateEditorData = function() {
  var selected = this.instance.getSelected(),
      selectedValue = this.instance.getDataAtCell(selected[0], selected[1]);
  this.row = selected[0];
  this.col = selected[1];
  this.setValue(selectedValue);
  this.updateEditorPosition();
};
MobileTextEditor.prototype.prepareAndSave = function() {
  var val;
  if (!this.valueChanged()) {
    return true;
  }
  if (this.instance.getSettings().trimWhitespace) {
    val = [[String.prototype.trim.call(this.getValue())]];
  } else {
    val = [[this.getValue()]];
  }
  this.saveValue(val);
};
MobileTextEditor.prototype.bindEvents = function() {
  var that = this;
  this.eventManager.addEventListener(this.controls.leftButton, 'touchend', function(event) {
    that.prepareAndSave();
    that.instance.selection.transformStart(0, -1, null, true);
    that.updateEditorData();
    event.preventDefault();
  });
  this.eventManager.addEventListener(this.controls.rightButton, 'touchend', function(event) {
    that.prepareAndSave();
    that.instance.selection.transformStart(0, 1, null, true);
    that.updateEditorData();
    event.preventDefault();
  });
  this.eventManager.addEventListener(this.controls.upButton, 'touchend', function(event) {
    that.prepareAndSave();
    that.instance.selection.transformStart(-1, 0, null, true);
    that.updateEditorData();
    event.preventDefault();
  });
  this.eventManager.addEventListener(this.controls.downButton, 'touchend', function(event) {
    that.prepareAndSave();
    that.instance.selection.transformStart(1, 0, null, true);
    that.updateEditorData();
    event.preventDefault();
  });
  this.eventManager.addEventListener(this.moveHandle, 'touchstart', function(event) {
    if (event.touches.length == 1) {
      var touch = event.touches[0],
          onTouchPosition = {
            x: that.editorContainer.offsetLeft,
            y: that.editorContainer.offsetTop
          },
          onTouchOffset = {
            x: touch.pageX - onTouchPosition.x,
            y: touch.pageY - onTouchPosition.y
          };
      that.eventManager.addEventListener(this, 'touchmove', function(event) {
        var touch = event.touches[0];
        that.updateEditorPosition(touch.pageX - onTouchOffset.x, touch.pageY - onTouchOffset.y);
        that.hideCellPointer();
        event.preventDefault();
      });
    }
  });
  this.eventManager.addEventListener(document.body, 'touchend', function(event) {
    if (!isChildOf(event.target, that.editorContainer) && !isChildOf(event.target, that.instance.rootElement)) {
      that.close();
    }
  });
  this.eventManager.addEventListener(this.instance.view.wt.wtOverlays.leftOverlay.holder, 'scroll', function(event) {
    if (that.instance.view.wt.wtOverlays.leftOverlay.trimmingContainer != window) {
      that.hideCellPointer();
    }
  });
  this.eventManager.addEventListener(this.instance.view.wt.wtOverlays.topOverlay.holder, 'scroll', function(event) {
    if (that.instance.view.wt.wtOverlays.topOverlay.trimmingContainer != window) {
      that.hideCellPointer();
    }
  });
};
MobileTextEditor.prototype.destroy = function() {
  this.eventManager.clear();
  this.editorContainer.parentNode.removeChild(this.editorContainer);
};
;
registerEditor('mobile', MobileTextEditor);

//# 
},{"_baseEditor":31,"browser":24,"editors":30,"eventManager":42,"helpers/dom/element":47,"helpers/dom/event":48,"helpers/unicode":56}],38:[function(_dereq_,module,exports){
"use strict";
Object.defineProperties(exports, {
  NumericEditor: {get: function() {
      return NumericEditor;
    }},
  __esModule: {value: true}
});
var $__numbro__,
    $___46__46__47_editors__,
    $__textEditor__;
var numbro = ($__numbro__ = _dereq_("numbro"), $__numbro__ && $__numbro__.__esModule && $__numbro__ || {default: $__numbro__}).default;
var registerEditor = ($___46__46__47_editors__ = _dereq_("editors"), $___46__46__47_editors__ && $___46__46__47_editors__.__esModule && $___46__46__47_editors__ || {default: $___46__46__47_editors__}).registerEditor;
var TextEditor = ($__textEditor__ = _dereq_("textEditor"), $__textEditor__ && $__textEditor__.__esModule && $__textEditor__ || {default: $__textEditor__}).TextEditor;
var NumericEditor = function NumericEditor() {
  $traceurRuntime.superConstructor($NumericEditor).apply(this, arguments);
};
var $NumericEditor = NumericEditor;
($traceurRuntime.createClass)(NumericEditor, {beginEditing: function(initialValue) {
    if (typeof initialValue === 'undefined' && this.originalValue) {
      if (typeof this.cellProperties.language !== 'undefined') {
        numbro.culture(this.cellProperties.language);
      }
      var decimalDelimiter = numbro.cultureData().delimiters.decimal;
      initialValue = ('' + this.originalValue).replace('.', decimalDelimiter);
    }
    $traceurRuntime.superGet(this, $NumericEditor.prototype, "beginEditing").call(this, initialValue);
  }}, {}, TextEditor);
;
registerEditor('numeric', NumericEditor);

//# 
},{"editors":30,"numbro":"numbro","textEditor":41}],39:[function(_dereq_,module,exports){
"use strict";
Object.defineProperties(exports, {
  PasswordEditor: {get: function() {
      return PasswordEditor;
    }},
  __esModule: {value: true}
});
var $___46__46__47_browser__,
    $___46__46__47_helpers_47_dom_47_element__,
    $___46__46__47_editors__,
    $__textEditor__;
var Handsontable = ($___46__46__47_browser__ = _dereq_("browser"), $___46__46__47_browser__ && $___46__46__47_browser__.__esModule && $___46__46__47_browser__ || {default: $___46__46__47_browser__}).default;
var empty = ($___46__46__47_helpers_47_dom_47_element__ = _dereq_("helpers/dom/element"), $___46__46__47_helpers_47_dom_47_element__ && $___46__46__47_helpers_47_dom_47_element__.__esModule && $___46__46__47_helpers_47_dom_47_element__ || {default: $___46__46__47_helpers_47_dom_47_element__}).empty;
var $__2 = ($___46__46__47_editors__ = _dereq_("editors"), $___46__46__47_editors__ && $___46__46__47_editors__.__esModule && $___46__46__47_editors__ || {default: $___46__46__47_editors__}),
    getEditor = $__2.getEditor,
    registerEditor = $__2.registerEditor;
var TextEditor = ($__textEditor__ = _dereq_("textEditor"), $__textEditor__ && $__textEditor__.__esModule && $__textEditor__ || {default: $__textEditor__}).TextEditor;
var PasswordEditor = function PasswordEditor() {
  $traceurRuntime.superConstructor($PasswordEditor).apply(this, arguments);
};
var $PasswordEditor = PasswordEditor;
($traceurRuntime.createClass)(PasswordEditor, {createElements: function() {
    $traceurRuntime.superGet(this, $PasswordEditor.prototype, "createElements").call(this);
    this.TEXTAREA = document.createElement('input');
    this.TEXTAREA.setAttribute('type', 'password');
    this.TEXTAREA.className = 'handsontableInput';
    this.textareaStyle = this.TEXTAREA.style;
    this.textareaStyle.width = 0;
    this.textareaStyle.height = 0;
    empty(this.TEXTAREA_PARENT);
    this.TEXTAREA_PARENT.appendChild(this.TEXTAREA);
  }}, {}, TextEditor);
;
registerEditor('password', PasswordEditor);

//# 
},{"browser":24,"editors":30,"helpers/dom/element":47,"textEditor":41}],40:[function(_dereq_,module,exports){
"use strict";
Object.defineProperties(exports, {
  SelectEditor: {get: function() {
      return SelectEditor;
    }},
  __esModule: {value: true}
});
var $___46__46__47_browser__,
    $___46__46__47_helpers_47_dom_47_element__,
    $___46__46__47_helpers_47_dom_47_event__,
    $___46__46__47_helpers_47_unicode__,
    $___46__46__47_editors__,
    $___95_baseEditor__;
var Handsontable = ($___46__46__47_browser__ = _dereq_("browser"), $___46__46__47_browser__ && $___46__46__47_browser__.__esModule && $___46__46__47_browser__ || {default: $___46__46__47_browser__}).default;
var $__1 = ($___46__46__47_helpers_47_dom_47_element__ = _dereq_("helpers/dom/element"), $___46__46__47_helpers_47_dom_47_element__ && $___46__46__47_helpers_47_dom_47_element__.__esModule && $___46__46__47_helpers_47_dom_47_element__ || {default: $___46__46__47_helpers_47_dom_47_element__}),
    addClass = $__1.addClass,
    empty = $__1.empty,
    fastInnerHTML = $__1.fastInnerHTML,
    getComputedStyle = $__1.getComputedStyle,
    getCssTransform = $__1.getCssTransform,
    getScrollableElement = $__1.getScrollableElement,
    offset = $__1.offset,
    outerHeight = $__1.outerHeight,
    outerWidth = $__1.outerWidth,
    resetCssTransform = $__1.resetCssTransform;
var stopImmediatePropagation = ($___46__46__47_helpers_47_dom_47_event__ = _dereq_("helpers/dom/event"), $___46__46__47_helpers_47_dom_47_event__ && $___46__46__47_helpers_47_dom_47_event__.__esModule && $___46__46__47_helpers_47_dom_47_event__ || {default: $___46__46__47_helpers_47_dom_47_event__}).stopImmediatePropagation;
var KEY_CODES = ($___46__46__47_helpers_47_unicode__ = _dereq_("helpers/unicode"), $___46__46__47_helpers_47_unicode__ && $___46__46__47_helpers_47_unicode__.__esModule && $___46__46__47_helpers_47_unicode__ || {default: $___46__46__47_helpers_47_unicode__}).KEY_CODES;
var $__4 = ($___46__46__47_editors__ = _dereq_("editors"), $___46__46__47_editors__ && $___46__46__47_editors__.__esModule && $___46__46__47_editors__ || {default: $___46__46__47_editors__}),
    getEditor = $__4.getEditor,
    registerEditor = $__4.registerEditor;
var BaseEditor = ($___95_baseEditor__ = _dereq_("_baseEditor"), $___95_baseEditor__ && $___95_baseEditor__.__esModule && $___95_baseEditor__ || {default: $___95_baseEditor__}).BaseEditor;
var SelectEditor = BaseEditor.prototype.extend();
SelectEditor.prototype.init = function() {
  this.select = document.createElement('SELECT');
  addClass(this.select, 'htSelectEditor');
  this.select.style.display = 'none';
  this.instance.rootElement.appendChild(this.select);
  this.registerHooks();
};
SelectEditor.prototype.registerHooks = function() {
  var $__6 = this;
  this.instance.addHook('afterScrollHorizontally', (function() {
    return $__6.refreshDimensions();
  }));
  this.instance.addHook('afterScrollVertically', (function() {
    return $__6.refreshDimensions();
  }));
  this.instance.addHook('afterColumnResize', (function() {
    return $__6.refreshDimensions();
  }));
  this.instance.addHook('afterRowResize', (function() {
    return $__6.refreshDimensions();
  }));
};
SelectEditor.prototype.prepare = function() {
  BaseEditor.prototype.prepare.apply(this, arguments);
  var selectOptions = this.cellProperties.selectOptions;
  var options;
  if (typeof selectOptions == 'function') {
    options = this.prepareOptions(selectOptions(this.row, this.col, this.prop));
  } else {
    options = this.prepareOptions(selectOptions);
  }
  empty(this.select);
  for (var option in options) {
    if (options.hasOwnProperty(option)) {
      var optionElement = document.createElement('OPTION');
      optionElement.value = option;
      fastInnerHTML(optionElement, options[option]);
      this.select.appendChild(optionElement);
    }
  }
};
SelectEditor.prototype.prepareOptions = function(optionsToPrepare) {
  var preparedOptions = {};
  if (Array.isArray(optionsToPrepare)) {
    for (var i = 0,
        len = optionsToPrepare.length; i < len; i++) {
      preparedOptions[optionsToPrepare[i]] = optionsToPrepare[i];
    }
  } else if (typeof optionsToPrepare == 'object') {
    preparedOptions = optionsToPrepare;
  }
  return preparedOptions;
};
SelectEditor.prototype.getValue = function() {
  return this.select.value;
};
SelectEditor.prototype.setValue = function(value) {
  this.select.value = value;
};
var onBeforeKeyDown = function(event) {
  var instance = this;
  var editor = instance.getActiveEditor();
  switch (event.keyCode) {
    case KEY_CODES.ARROW_UP:
      var previousOptionIndex = editor.select.selectedIndex - 1;
      if (previousOptionIndex >= 0) {
        editor.select[previousOptionIndex].selected = true;
      }
      stopImmediatePropagation(event);
      event.preventDefault();
      break;
    case KEY_CODES.ARROW_DOWN:
      var nextOptionIndex = editor.select.selectedIndex + 1;
      if (nextOptionIndex <= editor.select.length - 1) {
        editor.select[nextOptionIndex].selected = true;
      }
      stopImmediatePropagation(event);
      event.preventDefault();
      break;
  }
};
SelectEditor.prototype.open = function() {
  this._opened = true;
  this.refreshDimensions();
  this.select.style.display = '';
  this.instance.addHook('beforeKeyDown', onBeforeKeyDown);
};
SelectEditor.prototype.close = function() {
  this._opened = false;
  this.select.style.display = 'none';
  this.instance.removeHook('beforeKeyDown', onBeforeKeyDown);
};
SelectEditor.prototype.focus = function() {
  this.select.focus();
};
SelectEditor.prototype.refreshDimensions = function() {
  if (this.state !== Handsontable.EditorState.EDITING) {
    return;
  }
  this.TD = this.getEditedCell();
  if (!this.TD) {
    this.close();
    return;
  }
  var width = outerWidth(this.TD) + 1,
      height = outerHeight(this.TD) + 1,
      currentOffset = offset(this.TD),
      containerOffset = offset(this.instance.rootElement),
      scrollableContainer = getScrollableElement(this.TD),
      editTop = currentOffset.top - containerOffset.top - 1 - (scrollableContainer.scrollTop || 0),
      editLeft = currentOffset.left - containerOffset.left - 1 - (scrollableContainer.scrollLeft || 0),
      editorSection = this.checkEditorSection(),
      cssTransformOffset;
  var settings = this.instance.getSettings();
  var rowHeadersCount = settings.rowHeaders ? 1 : 0;
  var colHeadersCount = settings.colHeaders ? 1 : 0;
  switch (editorSection) {
    case 'top':
      cssTransformOffset = getCssTransform(this.instance.view.wt.wtOverlays.topOverlay.clone.wtTable.holder.parentNode);
      break;
    case 'left':
      cssTransformOffset = getCssTransform(this.instance.view.wt.wtOverlays.leftOverlay.clone.wtTable.holder.parentNode);
      break;
    case 'top-left-corner':
      cssTransformOffset = getCssTransform(this.instance.view.wt.wtOverlays.topLeftCornerOverlay.clone.wtTable.holder.parentNode);
      break;
    case 'bottom-left-corner':
      cssTransformOffset = getCssTransform(this.instance.view.wt.wtOverlays.bottomLeftCornerOverlay.clone.wtTable.holder.parentNode);
      break;
    case 'bottom':
      cssTransformOffset = getCssTransform(this.instance.view.wt.wtOverlays.bottomOverlay.clone.wtTable.holder.parentNode);
      break;
  }
  if (this.instance.getSelected()[0] === 0) {
    editTop += 1;
  }
  if (this.instance.getSelected()[1] === 0) {
    editLeft += 1;
  }
  var selectStyle = this.select.style;
  if (cssTransformOffset && cssTransformOffset != -1) {
    selectStyle[cssTransformOffset[0]] = cssTransformOffset[1];
  } else {
    resetCssTransform(this.select);
  }
  var cellComputedStyle = getComputedStyle(this.TD);
  if (parseInt(cellComputedStyle.borderTopWidth, 10) > 0) {
    height -= 1;
  }
  if (parseInt(cellComputedStyle.borderLeftWidth, 10) > 0) {
    width -= 1;
  }
  selectStyle.height = height + 'px';
  selectStyle.minWidth = width + 'px';
  selectStyle.top = editTop + 'px';
  selectStyle.left = editLeft + 'px';
  selectStyle.margin = '0px';
};
SelectEditor.prototype.getEditedCell = function() {
  var editorSection = this.checkEditorSection(),
      editedCell;
  switch (editorSection) {
    case 'top':
      editedCell = this.instance.view.wt.wtOverlays.topOverlay.clone.wtTable.getCell({
        row: this.row,
        col: this.col
      });
      this.select.style.zIndex = 101;
      break;
    case 'corner':
      editedCell = this.instance.view.wt.wtOverlays.topLeftCornerOverlay.clone.wtTable.getCell({
        row: this.row,
        col: this.col
      });
      this.select.style.zIndex = 103;
      break;
    case 'left':
      editedCell = this.instance.view.wt.wtOverlays.leftOverlay.clone.wtTable.getCell({
        row: this.row,
        col: this.col
      });
      this.select.style.zIndex = 102;
      break;
    default:
      editedCell = this.instance.getCell(this.row, this.col);
      this.select.style.zIndex = '';
      break;
  }
  return editedCell != -1 && editedCell != -2 ? editedCell : void 0;
};
;
registerEditor('select', SelectEditor);

//# 
},{"_baseEditor":31,"browser":24,"editors":30,"helpers/dom/element":47,"helpers/dom/event":48,"helpers/unicode":56}],41:[function(_dereq_,module,exports){
"use strict";
Object.defineProperties(exports, {
  TextEditor: {get: function() {
      return TextEditor;
    }},
  __esModule: {value: true}
});
var $___46__46__47_browser__,
    $___46__46__47_helpers_47_dom_47_element__,
    $__autoResize__,
    $___95_baseEditor__,
    $___46__46__47_eventManager__,
    $___46__46__47_editors__,
    $___46__46__47_helpers_47_unicode__,
    $___46__46__47_helpers_47_dom_47_event__;
var Handsontable = ($___46__46__47_browser__ = _dereq_("browser"), $___46__46__47_browser__ && $___46__46__47_browser__.__esModule && $___46__46__47_browser__ || {default: $___46__46__47_browser__}).default;
var $__1 = ($___46__46__47_helpers_47_dom_47_element__ = _dereq_("helpers/dom/element"), $___46__46__47_helpers_47_dom_47_element__ && $___46__46__47_helpers_47_dom_47_element__.__esModule && $___46__46__47_helpers_47_dom_47_element__ || {default: $___46__46__47_helpers_47_dom_47_element__}),
    addClass = $__1.addClass,
    getCaretPosition = $__1.getCaretPosition,
    getComputedStyle = $__1.getComputedStyle,
    getCssTransform = $__1.getCssTransform,
    getScrollableElement = $__1.getScrollableElement,
    getScrollbarWidth = $__1.getScrollbarWidth,
    innerWidth = $__1.innerWidth,
    offset = $__1.offset,
    resetCssTransform = $__1.resetCssTransform,
    setCaretPosition = $__1.setCaretPosition,
    hasVerticalScrollbar = $__1.hasVerticalScrollbar,
    hasHorizontalScrollbar = $__1.hasHorizontalScrollbar;
var autoResize = ($__autoResize__ = _dereq_("autoResize"), $__autoResize__ && $__autoResize__.__esModule && $__autoResize__ || {default: $__autoResize__}).default;
var BaseEditor = ($___95_baseEditor__ = _dereq_("_baseEditor"), $___95_baseEditor__ && $___95_baseEditor__.__esModule && $___95_baseEditor__ || {default: $___95_baseEditor__}).BaseEditor;
var eventManagerObject = ($___46__46__47_eventManager__ = _dereq_("eventManager"), $___46__46__47_eventManager__ && $___46__46__47_eventManager__.__esModule && $___46__46__47_eventManager__ || {default: $___46__46__47_eventManager__}).eventManager;
var $__5 = ($___46__46__47_editors__ = _dereq_("editors"), $___46__46__47_editors__ && $___46__46__47_editors__.__esModule && $___46__46__47_editors__ || {default: $___46__46__47_editors__}),
    getEditor = $__5.getEditor,
    registerEditor = $__5.registerEditor;
var KEY_CODES = ($___46__46__47_helpers_47_unicode__ = _dereq_("helpers/unicode"), $___46__46__47_helpers_47_unicode__ && $___46__46__47_helpers_47_unicode__.__esModule && $___46__46__47_helpers_47_unicode__ || {default: $___46__46__47_helpers_47_unicode__}).KEY_CODES;
var $__7 = ($___46__46__47_helpers_47_dom_47_event__ = _dereq_("helpers/dom/event"), $___46__46__47_helpers_47_dom_47_event__ && $___46__46__47_helpers_47_dom_47_event__.__esModule && $___46__46__47_helpers_47_dom_47_event__ || {default: $___46__46__47_helpers_47_dom_47_event__}),
    stopPropagation = $__7.stopPropagation,
    stopImmediatePropagation = $__7.stopImmediatePropagation,
    isImmediatePropagationStopped = $__7.isImmediatePropagationStopped;
var TextEditor = BaseEditor.prototype.extend();
TextEditor.prototype.init = function() {
  var that = this;
  this.createElements();
  this.eventManager = eventManagerObject(this);
  this.bindEvents();
  this.autoResize = autoResize();
  this.instance.addHook('afterDestroy', function() {
    that.destroy();
  });
};
TextEditor.prototype.getValue = function() {
  return this.TEXTAREA.value;
};
TextEditor.prototype.setValue = function(newValue) {
  this.TEXTAREA.value = newValue;
};
var onBeforeKeyDown = function onBeforeKeyDown(event) {
  var instance = this,
      that = instance.getActiveEditor(),
      ctrlDown;
  ctrlDown = (event.ctrlKey || event.metaKey) && !event.altKey;
  if (event.target !== that.TEXTAREA || isImmediatePropagationStopped(event)) {
    return;
  }
  if (event.keyCode === 17 || event.keyCode === 224 || event.keyCode === 91 || event.keyCode === 93) {
    stopImmediatePropagation(event);
    return;
  }
  switch (event.keyCode) {
    case KEY_CODES.ARROW_RIGHT:
      if (that.isInFullEditMode()) {
        if ((!that.isWaiting() && !that.allowKeyEventPropagation) || (!that.isWaiting() && that.allowKeyEventPropagation && !that.allowKeyEventPropagation(event.keyCode))) {
          stopImmediatePropagation(event);
        }
      }
      break;
    case KEY_CODES.ARROW_LEFT:
      if (that.isInFullEditMode()) {
        if ((!that.isWaiting() && !that.allowKeyEventPropagation) || (!that.isWaiting() && that.allowKeyEventPropagation && !that.allowKeyEventPropagation(event.keyCode))) {
          stopImmediatePropagation(event);
        }
      }
      break;
    case KEY_CODES.ARROW_UP:
    case KEY_CODES.ARROW_DOWN:
      if (that.isInFullEditMode()) {
        if ((!that.isWaiting() && !that.allowKeyEventPropagation) || (!that.isWaiting() && that.allowKeyEventPropagation && !that.allowKeyEventPropagation(event.keyCode))) {
          stopImmediatePropagation(event);
        }
      }
      break;
    case KEY_CODES.ENTER:
      var selected = that.instance.getSelected();
      var isMultipleSelection = !(selected[0] === selected[2] && selected[1] === selected[3]);
      if ((ctrlDown && !isMultipleSelection) || event.altKey) {
        if (that.isOpened()) {
          var caretPosition = getCaretPosition(that.TEXTAREA),
              value = that.getValue();
          var newValue = value.slice(0, caretPosition) + '\n' + value.slice(caretPosition);
          that.setValue(newValue);
          setCaretPosition(that.TEXTAREA, caretPosition + 1);
        } else {
          that.beginEditing(that.originalValue + '\n');
        }
        stopImmediatePropagation(event);
      }
      event.preventDefault();
      break;
    case KEY_CODES.A:
    case KEY_CODES.X:
    case KEY_CODES.C:
    case KEY_CODES.V:
      if (ctrlDown) {
        stopImmediatePropagation(event);
      }
      break;
    case KEY_CODES.BACKSPACE:
    case KEY_CODES.DELETE:
    case KEY_CODES.HOME:
    case KEY_CODES.END:
      stopImmediatePropagation(event);
      break;
  }
  if ([KEY_CODES.ARROW_UP, KEY_CODES.ARROW_RIGHT, KEY_CODES.ARROW_DOWN, KEY_CODES.ARROW_LEFT].indexOf(event.keyCode) === -1) {
    that.autoResize.resize(String.fromCharCode(event.keyCode));
  }
};
TextEditor.prototype.open = function() {
  this.refreshDimensions();
  this.instance.addHook('beforeKeyDown', onBeforeKeyDown);
};
TextEditor.prototype.close = function(tdOutside) {
  this.textareaParentStyle.display = 'none';
  this.autoResize.unObserve();
  if (document.activeElement === this.TEXTAREA) {
    this.instance.listen();
  }
  this.instance.removeHook('beforeKeyDown', onBeforeKeyDown);
};
TextEditor.prototype.focus = function() {
  this.TEXTAREA.focus();
  setCaretPosition(this.TEXTAREA, this.TEXTAREA.value.length);
};
TextEditor.prototype.createElements = function() {
  this.TEXTAREA = document.createElement('TEXTAREA');
  addClass(this.TEXTAREA, 'handsontableInput');
  this.textareaStyle = this.TEXTAREA.style;
  this.textareaStyle.width = 0;
  this.textareaStyle.height = 0;
  this.TEXTAREA_PARENT = document.createElement('DIV');
  addClass(this.TEXTAREA_PARENT, 'handsontableInputHolder');
  this.textareaParentStyle = this.TEXTAREA_PARENT.style;
  this.textareaParentStyle.top = 0;
  this.textareaParentStyle.left = 0;
  this.textareaParentStyle.display = 'none';
  this.TEXTAREA_PARENT.appendChild(this.TEXTAREA);
  this.instance.rootElement.appendChild(this.TEXTAREA_PARENT);
  var that = this;
  this.instance._registerTimeout(setTimeout(function() {
    that.refreshDimensions();
  }, 0));
};
TextEditor.prototype.getEditedCell = function() {
  var editorSection = this.checkEditorSection(),
      editedCell;
  switch (editorSection) {
    case 'top':
      editedCell = this.instance.view.wt.wtOverlays.topOverlay.clone.wtTable.getCell({
        row: this.row,
        col: this.col
      });
      this.textareaParentStyle.zIndex = 101;
      break;
    case 'top-left-corner':
      editedCell = this.instance.view.wt.wtOverlays.topLeftCornerOverlay.clone.wtTable.getCell({
        row: this.row,
        col: this.col
      });
      this.textareaParentStyle.zIndex = 103;
      break;
    case 'bottom-left-corner':
      editedCell = this.instance.view.wt.wtOverlays.bottomLeftCornerOverlay.clone.wtTable.getCell({
        row: this.row,
        col: this.col
      });
      this.textareaParentStyle.zIndex = 103;
      break;
    case 'left':
      editedCell = this.instance.view.wt.wtOverlays.leftOverlay.clone.wtTable.getCell({
        row: this.row,
        col: this.col
      });
      this.textareaParentStyle.zIndex = 102;
      break;
    case 'bottom':
      editedCell = this.instance.view.wt.wtOverlays.bottomOverlay.clone.wtTable.getCell({
        row: this.row,
        col: this.col
      });
      this.textareaParentStyle.zIndex = 102;
      break;
    default:
      editedCell = this.instance.getCell(this.row, this.col);
      this.textareaParentStyle.zIndex = '';
      break;
  }
  return editedCell != -1 && editedCell != -2 ? editedCell : void 0;
};
TextEditor.prototype.refreshDimensions = function() {
  if (this.state !== Handsontable.EditorState.EDITING) {
    return;
  }
  this.TD = this.getEditedCell();
  if (!this.TD) {
    this.close(true);
    return;
  }
  var currentOffset = offset(this.TD),
      containerOffset = offset(this.instance.rootElement),
      scrollableContainer = getScrollableElement(this.TD),
      totalRowsCount = this.instance.countRows(),
      editTopModifier = currentOffset.top === containerOffset.top ? 0 : 1,
      editTop = currentOffset.top - containerOffset.top - editTopModifier - (scrollableContainer.scrollTop || 0),
      editLeft = currentOffset.left - containerOffset.left - 1 - (scrollableContainer.scrollLeft || 0),
      settings = this.instance.getSettings(),
      rowHeadersCount = this.instance.hasRowHeaders(),
      colHeaders