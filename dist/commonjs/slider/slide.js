'use strict';

exports.__esModule = true;

var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

var _aureliaTemplating = require('aurelia-templating');

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var MdSlide = (function () {
  var _instanceInitializers = {};

  _createDecoratedClass(MdSlide, [{
    key: 'captionAlign',
    decorators: [_aureliaTemplating.bindable()],
    initializer: function initializer() {
      return 'left';
    },
    enumerable: true
  }, {
    key: 'img',
    decorators: [_aureliaTemplating.bindable()],
    initializer: null,
    enumerable: true
  }], null, _instanceInitializers);

  function MdSlide(element) {
    _classCallCheck(this, _MdSlide);

    _defineDecoratedPropertyDescriptor(this, 'captionAlign', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'img', _instanceInitializers);

    this.element = element;
  }

  MdSlide.prototype.attached = function attached() {
    if (this.captionAlign) {
      var align = this.captionAlign + '-align';
      this.caption.classList.add(align);
    }
  };

  MdSlide.prototype.detached = function detached() {
    if (this.captionAlign) {
      var align = this.captionAlign + '-align';
      this.caption.classList.remove(align);
    }
  };

  var _MdSlide = MdSlide;
  MdSlide = _aureliaTemplating.inlineView('\n  <template>\n  <li>\n    <img src.bind="img" />\n    <div class="caption" ref="caption">\n      <content></content>\n    </div>\n  </li>\n  </template>\n')(MdSlide) || MdSlide;
  MdSlide = _aureliaTemplating.containerless()(MdSlide) || MdSlide;
  MdSlide = _aureliaDependencyInjection.inject(Element)(MdSlide) || MdSlide;
  MdSlide = _aureliaTemplating.customElement('md-slide')(MdSlide) || MdSlide;
  return MdSlide;
})();

exports.MdSlide = MdSlide;