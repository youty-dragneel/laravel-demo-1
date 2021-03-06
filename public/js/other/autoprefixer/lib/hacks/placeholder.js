'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Selector = require('../selector');

var Placeholder = function (_Selector) {
    _inherits(Placeholder, _Selector);

    function Placeholder() {
        _classCallCheck(this, Placeholder);

        return _possibleConstructorReturn(this, _Selector.apply(this, arguments));
    }

    /**
     * Add old mozilla to possible prefixes
     */
    Placeholder.prototype.possible = function possible() {
        return _Selector.prototype.possible.call(this).concat('-moz- old');
    };

    /**
     * Return different selectors depend on prefix
     */


    Placeholder.prototype.prefixed = function prefixed(prefix) {
        if (prefix === '-webkit-') {
            return '::-webkit-input-placeholder';
        } else if (prefix === '-ms-') {
            return ':-ms-input-placeholder';
        } else if (prefix === '-moz- old') {
            return ':-moz-placeholder';
        } else {
            return '::' + prefix + 'placeholder';
        }
    };

    return Placeholder;
}(Selector);

Object.defineProperty(Placeholder, 'names', {
    enumerable: true,
    writable: true,
    value: [':placeholder-shown', '::placeholder']
});


module.exports = Placeholder;