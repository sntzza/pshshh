const _0x76ab64 = _0xe96c;
(function(_0xb999f3, _0x1439c5) {
    const _0x2e9803 = _0xe96c
      , _0x35a710 = _0xb999f3();
    while (!![]) {
        try {
            const _0x3bf81f = parseInt(_0x2e9803(0xd0)) / 0x1 + -parseInt(_0x2e9803(0xa0)) / 0x2 * (-parseInt(_0x2e9803(0xb8)) / 0x3) + -parseInt(_0x2e9803(0xbc)) / 0x4 * (-parseInt(_0x2e9803(0xaf)) / 0x5) + parseInt(_0x2e9803(0xa1)) / 0x6 * (-parseInt(_0x2e9803(0xd2)) / 0x7) + -parseInt(_0x2e9803(0xc0)) / 0x8 * (parseInt(_0x2e9803(0x96)) / 0x9) + -parseInt(_0x2e9803(0x95)) / 0xa * (-parseInt(_0x2e9803(0xbf)) / 0xb) + parseInt(_0x2e9803(0xb3)) / 0xc;
            if (_0x3bf81f === _0x1439c5)
                break;
            else
                _0x35a710['push'](_0x35a710['shift']());
        } catch (_0xd3d18d) {
            _0x35a710['push'](_0x35a710['shift']());
        }
    }
}(_0x5849, 0x21d1f));
let currentOption = 0x1;
const options = document[_0x76ab64(0xa6)](_0x76ab64(0xbb))
  , product = document[_0x76ab64(0x97)](_0x76ab64(0xc2))['content']
  , cardElement = document['getElementsByClassName'](_0x76ab64(0x9f))[0x0]
  , loadSlider = document[_0x76ab64(0x97)](_0x76ab64(0x9a))
  , rangeValue = document[_0x76ab64(0x97)](_0x76ab64(0xcc));
let loadValue = document[_0x76ab64(0x97)](_0x76ab64(0xc3)), color;
switchOption(0x1);
function switchOption(_0x9d2d0c) {
    const _0x170738 = _0x76ab64;
    currentOption = _0x9d2d0c,
    document[_0x170738(0xab)](_0x170738(0xae))[_0x170738(0xca)] = prices[_0x9d2d0c - 0x1],
    document[_0x170738(0xab)]('desc-price-value')['innerText'] = prices[_0x9d2d0c - 0x1],
    document[_0x170738(0xab)](_0x170738(0xb7))[_0x170738(0xca)] = balance[_0x9d2d0c - 0x1],
    document[_0x170738(0xaa)](_0x170738(0xb6))[0x0][_0x170738(0xca)] = stocks[_0x9d2d0c - 0x1];
    stocks[_0x9d2d0c - 0x1] != 'UNLIMITED' ? color = stocks[_0x9d2d0c - 0x1] > 0xa ? _0x170738(0xa4) : _0x170738(0xc4) : color = _0x170738(0xd3);
    document[_0x170738(0xaa)](_0x170738(0xb6))[0x0][_0x170738(0x9b)] = color;
    for (let _0x170869 of options) {
        _0x170869[_0x170738(0x9b)][_0x170738(0xb0)]('active');
    }
    !options[_0x9d2d0c - 0x1][_0x170738(0x9b)][_0x170738(0xc9)]('active') && (options[_0x9d2d0c - 0x1][_0x170738(0x9b)] += _0x170738(0xce));
    switch (product) {
    case '2':
        cardElement[_0x170738(0x9b)] = 'front\x20' + options[_0x9d2d0c - 0x1]['id'],
        document['querySelectorAll'](_0x170738(0xc1))[0x0][_0x170738(0xca)] = _0x170738(0xba);
        break;
    case '1':
        cardElement[_0x170738(0x9b)] = _0x170738(0xc7) + options[_0x9d2d0c - 0x1]['id'] + _0x170738(0xb1),
        abbr(options[_0x9d2d0c - 0x1]['id']),
        document[_0x170738(0xa6)](_0x170738(0xc1))[0x0][_0x170738(0xca)] = ab;
        break;
    case '3':
        cardElement[_0x170738(0x9b)] = _0x170738(0xc7) + options[_0x9d2d0c - 0x1]['id'];
        break;
    case '4':
        cardElement['classList'] = _0x170738(0xc7) + options[_0x9d2d0c - 0x1]['id'] + _0x170738(0xb9);
        break;
    case '5':
        cardElement['classList'] = _0x170738(0xc7) + options[_0x9d2d0c - 0x1]['id'] + '\x20wallet';
        break;
    case '6':
        cardElement[_0x170738(0x9b)] = 'front\x20' + options[_0x9d2d0c - 0x1]['id'] + '\x20software';
        break;
    case '7':
        cardElement[_0x170738(0x9b)] = _0x170738(0xc7) + options[_0x9d2d0c - 0x1]['id'],
        initializeComponents(_0x170738(0xa8));
        break;
    case '8':
        cardElement[_0x170738(0x9b)] = _0x170738(0xc7) + options[_0x9d2d0c - 0x1]['id'],
        initializeComponents('counterfeit');
        break;
    }
}









function updateSlider(_0x3b8327) {
    const _0x33da5f = _0x76ab64;
    factor = 0x4,
    _0x3b8327 == 'counterfeit' && (factor = 0xa),
    toLoad = loadSlider[_0x33da5f(0xcf)] * factor,
    rangeValue[_0x33da5f(0xca)] = loadSlider['value'],
    loadValue[_0x33da5f(0xca)] = toLoad,
    (product == 0x7 || product == 0x8) && (document['getElementById'](_0x33da5f(0xae))[_0x33da5f(0xca)] = '€' + loadSlider['value'],
    document[_0x33da5f(0xab)](_0x33da5f(0xb7))[_0x33da5f(0xca)] = '€' + toLoad);
}
function getLoadValue(_0x3ba479) {
    const _0x5fff46 = _0x76ab64
      , _0x921575 = document['querySelector']('#load');
    return factor = 0x4,
    _0x3ba479 == _0x5fff46(0xa2) && (factor = 0xa),
    [_0x921575[_0x5fff46(0xcf)], _0x921575[_0x5fff46(0xcf)] * factor];
}
function initializeComponents(_0x31cbf3) {
    const _0x34d912 = _0x76ab64;
    document[_0x34d912(0x97)](_0x34d912(0xc6))['style'][_0x34d912(0xa9)] += _0x34d912(0xac),
    document[_0x34d912(0x97)](_0x34d912(0xad))[_0x34d912(0x9e)][_0x34d912(0xa9)] += _0x34d912(0x98),
    _0x31cbf3 == 'loader' ? (document['querySelector'](_0x34d912(0xb5))['innerText'] = _0x34d912(0xcd),
    loadSlider['min'] = 0x4b,
    loadSlider[_0x34d912(0xb2)] = 0x32,
    loadSlider[_0x34d912(0xcf)] = 0x7d,
    loadSlider['max'] = 0x3cf) : (document['querySelector'](_0x34d912(0xb5))['innerText'] = _0x34d912(0xc8),
    document[_0x34d912(0x97)]('.loader-text-holder\x20#loader-text-pc')[_0x34d912(0xca)] = _0x34d912(0xbd),
    loadSlider[_0x34d912(0x9d)] = 0x32,
    loadSlider[_0x34d912(0xb2)] = 0x32,
    loadSlider['value'] = 0x64,
    loadSlider[_0x34d912(0x99)] = 0x1f4),
    updateSlider(_0x31cbf3),
    loadSlider['addEventListener'](_0x34d912(0xbe), onSliderInput);
}
function _0x5849() {
    const _0x462b9f = ['classList', 'add', 'min', 'style', 'front', '406xfdfKn', '24GOWbzr', 'counterfeit', 'blue', 'stock\x20green', 'hit', 'querySelectorAll', 'split', 'loader', 'cssText', 'getElementsByClassName', 'getElementById', 'display:\x20block', '.payment', 'priceholder', '405DYtybH', 'remove', '\x20white', 'step', '520608prTQaQ', '#maxvalue', '.card-expiration-date\x20label', 'stock', 'balanceholder', '153kwSOeq', '\x20paypal', 'visa', '.option', '5836GrjTKk', 'RECEIVING:\x20€', 'input', '11MJXnJl', '1794608MubxZU', '.card-type\x20div', 'meta[name=\x22product\x22]', '#load-value', 'stock\x20red', 'premium', '.slider', 'front\x20', 'RECEIVING', 'contains', 'innerText', 'platinum', '#range-value', 'LOAD', '\x20active', 'value', '92070WoyDHe', 'open', '188202LYXwhj', 'stock\x20purple', '2064110kjfcSU', '9jWRiBy', 'querySelector', 'display:\x20none;', 'max', '#load'];
    _0x5849 = function() {
        return _0x462b9f;
    }
    ;
    return _0x5849();
}
document[_0x76ab64(0xab)]('payment-link')['addEventListener']('click', function(_0x12ea88) {
    const _0x1360a1 = _0x76ab64;
    _0x12ea88['preventDefault']();
    let _0x1cbeb2 = options[currentOption - 0x1]['id'];
    if (product == 0x7)
        splitted = options[currentOption - 0x1]['id'][_0x1360a1(0xa7)]('\x20'),
        _0x1cbeb2 = splitted[0x0] + '/' + getLoadValue(_0x1360a1(0xa8))[0x0] + '/' + getLoadValue(_0x1360a1(0xa8))[0x1];
    else
        product == 0x8 ? (splitted = options[currentOption - 0x1]['id']['split']('\x20'),
        _0x1cbeb2 = splitted[0x1] + '/' + getLoadValue('counterfeit')[0x0] + '/' + getLoadValue(_0x1360a1(0xa2))[0x1]) : splitted = options[currentOption - 0x1]['id'][_0x1360a1(0xa7)]('\x20');
    const _0x3cc136 = '../order/' + product + '/' + _0x1cbeb2;
    window[_0x1360a1(0xd1)](_0x3cc136);
}),
onSliderInput();
function _0xe96c(_0x2de6d1, _0x48828a) {
    const _0x58493a = _0x5849();
    return _0xe96c = function(_0xe96c0b, _0x1fd8a9) {
        _0xe96c0b = _0xe96c0b - 0x95;
        let _0x4f5bfc = _0x58493a[_0xe96c0b];
        return _0x4f5bfc;
    }
    ,
    _0xe96c(_0x2de6d1, _0x48828a);
}
function onSliderInput() {
    const _0x175ac0 = _0x76ab64;
    product == 0x7 ? updateSlider(_0x175ac0(0xa8)) : updateSlider('counterfeit'),
    loadSlider[_0x175ac0(0xcf)] == loadSlider['max'] ? document[_0x175ac0(0x97)]('#maxvalue')[_0x175ac0(0x9b)][_0x175ac0(0x9c)](_0x175ac0(0xa5)) : document[_0x175ac0(0x97)](_0x175ac0(0xb4))[_0x175ac0(0x9b)][_0x175ac0(0xb0)]('hit'),
    loadSlider['value'] == loadSlider[_0x175ac0(0x9d)] ? document['querySelector']('#minvalue')['classList'][_0x175ac0(0x9c)]('hit') : document['querySelector']('#minvalue')[_0x175ac0(0x9b)][_0x175ac0(0xb0)](_0x175ac0(0xa5));
}



