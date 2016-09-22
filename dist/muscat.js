/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	__webpack_require__(2);

	var _kuromoji = __webpack_require__(299);

	var _kuromoji2 = _interopRequireDefault(_kuromoji);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var _instance = null;

	var Muscat = function () {
	  _createClass(Muscat, null, [{
	    key: 'instance',
	    value: function instance() {
	      if (!_instance) {
	        _instance = new Muscat();
	      }
	      return _instance;
	    }
	  }]);

	  function Muscat() {
	    _classCallCheck(this, Muscat);

	    this._tokenizer = null;
	  }

	  _createClass(Muscat, [{
	    key: 'setup',
	    value: function setup(dicPath) {
	      this._tokenizer = new Promise(function (resolve, reject) {
	        _kuromoji2.default.builder({ dicPath: dicPath }).build(function (error, tokenizer) {
	          if (tokenizer) {
	            resolve(tokenizer);
	            return;
	          }
	          reject(error);
	        });
	      });
	      return this;
	    }
	  }, {
	    key: 'parse',
	    value: function parse(string) {
	      var _this = this;

	      var classname = arguments.length <= 1 || arguments[1] === undefined ? 'ww' : arguments[1];

	      return this._tokenizer.then(function (tokenizer) {
	        return _this._parseInternal(tokenizer, string, classname);
	      });
	    }
	  }, {
	    key: '_parseInternal',
	    value: function _parseInternal(tokenizer, string, classname) {
	      return new Promise(function (resolve, _) {
	        var result = tokenizer.tokenize(string);
	        var words = new Set(['、']);
	        var poses = new Set(['助詞', '助動詞', '記号']);
	        var chunks = result.reduce(function (previous, current) {
	          var form = current['surface_form'];
	          var pos = current['pos'];
	          if ((words.has(form) || poses.has(pos)) && 0 < previous.length) {
	            previous[previous.length - 1] += form;
	            return previous;
	          }
	          previous.push(form);
	          return previous;
	        }, []);
	        var html = chunks.reduce(function (previous, current) {
	          return previous + ('<span class="' + classname + '">' + current + '</span>');
	        }, '');
	        resolve({
	          chunks: chunks,
	          html_code: html
	        });
	      });
	    }
	  }]);

	  return Muscat;
	}();

	exports.default = Muscat;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";

	__webpack_require__(3);

	__webpack_require__(294);

	__webpack_require__(296);

	/* eslint max-len: 0 */

	if (global._babelPolyfill) {
	  throw new Error("only one instance of babel-polyfill is allowed");
	}
	global._babelPolyfill = true;

	// Should be removed in the next major release:

	var DEFINE_PROPERTY = "defineProperty";
	function define(O, key, value) {
	  O[key] || Object[DEFINE_PROPERTY](O, key, {
	    writable: true,
	    configurable: true,
	    value: value
	  });
	}

	define(String.prototype, "padLeft", "".padStart);
	define(String.prototype, "padRight", "".padEnd);

	"pop,reverse,shift,keys,values,entries,indexOf,every,some,forEach,map,filter,find,findIndex,includes,join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill".split(",").forEach(function (key) {
	  [][key] && define(Array, key, Function.call.bind([][key]));
	});
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(4);
	__webpack_require__(53);
	__webpack_require__(54);
	__webpack_require__(55);
	__webpack_require__(56);
	__webpack_require__(58);
	__webpack_require__(61);
	__webpack_require__(62);
	__webpack_require__(63);
	__webpack_require__(64);
	__webpack_require__(65);
	__webpack_require__(66);
	__webpack_require__(67);
	__webpack_require__(68);
	__webpack_require__(69);
	__webpack_require__(71);
	__webpack_require__(73);
	__webpack_require__(75);
	__webpack_require__(77);
	__webpack_require__(80);
	__webpack_require__(81);
	__webpack_require__(82);
	__webpack_require__(86);
	__webpack_require__(88);
	__webpack_require__(90);
	__webpack_require__(93);
	__webpack_require__(94);
	__webpack_require__(95);
	__webpack_require__(96);
	__webpack_require__(98);
	__webpack_require__(99);
	__webpack_require__(100);
	__webpack_require__(101);
	__webpack_require__(102);
	__webpack_require__(103);
	__webpack_require__(104);
	__webpack_require__(106);
	__webpack_require__(107);
	__webpack_require__(108);
	__webpack_require__(110);
	__webpack_require__(111);
	__webpack_require__(112);
	__webpack_require__(114);
	__webpack_require__(115);
	__webpack_require__(116);
	__webpack_require__(117);
	__webpack_require__(118);
	__webpack_require__(119);
	__webpack_require__(120);
	__webpack_require__(121);
	__webpack_require__(122);
	__webpack_require__(123);
	__webpack_require__(124);
	__webpack_require__(125);
	__webpack_require__(126);
	__webpack_require__(127);
	__webpack_require__(132);
	__webpack_require__(133);
	__webpack_require__(137);
	__webpack_require__(138);
	__webpack_require__(139);
	__webpack_require__(140);
	__webpack_require__(142);
	__webpack_require__(143);
	__webpack_require__(144);
	__webpack_require__(145);
	__webpack_require__(146);
	__webpack_require__(147);
	__webpack_require__(148);
	__webpack_require__(149);
	__webpack_require__(150);
	__webpack_require__(151);
	__webpack_require__(152);
	__webpack_require__(153);
	__webpack_require__(154);
	__webpack_require__(155);
	__webpack_require__(156);
	__webpack_require__(157);
	__webpack_require__(158);
	__webpack_require__(160);
	__webpack_require__(161);
	__webpack_require__(167);
	__webpack_require__(168);
	__webpack_require__(170);
	__webpack_require__(171);
	__webpack_require__(172);
	__webpack_require__(176);
	__webpack_require__(177);
	__webpack_require__(178);
	__webpack_require__(179);
	__webpack_require__(180);
	__webpack_require__(182);
	__webpack_require__(183);
	__webpack_require__(184);
	__webpack_require__(185);
	__webpack_require__(188);
	__webpack_require__(190);
	__webpack_require__(191);
	__webpack_require__(192);
	__webpack_require__(194);
	__webpack_require__(196);
	__webpack_require__(198);
	__webpack_require__(199);
	__webpack_require__(200);
	__webpack_require__(202);
	__webpack_require__(203);
	__webpack_require__(204);
	__webpack_require__(205);
	__webpack_require__(212);
	__webpack_require__(215);
	__webpack_require__(216);
	__webpack_require__(218);
	__webpack_require__(219);
	__webpack_require__(222);
	__webpack_require__(223);
	__webpack_require__(225);
	__webpack_require__(226);
	__webpack_require__(227);
	__webpack_require__(228);
	__webpack_require__(229);
	__webpack_require__(230);
	__webpack_require__(231);
	__webpack_require__(232);
	__webpack_require__(233);
	__webpack_require__(234);
	__webpack_require__(235);
	__webpack_require__(236);
	__webpack_require__(237);
	__webpack_require__(238);
	__webpack_require__(239);
	__webpack_require__(240);
	__webpack_require__(241);
	__webpack_require__(242);
	__webpack_require__(243);
	__webpack_require__(245);
	__webpack_require__(246);
	__webpack_require__(247);
	__webpack_require__(248);
	__webpack_require__(249);
	__webpack_require__(250);
	__webpack_require__(252);
	__webpack_require__(253);
	__webpack_require__(254);
	__webpack_require__(255);
	__webpack_require__(256);
	__webpack_require__(257);
	__webpack_require__(258);
	__webpack_require__(259);
	__webpack_require__(261);
	__webpack_require__(262);
	__webpack_require__(264);
	__webpack_require__(265);
	__webpack_require__(266);
	__webpack_require__(267);
	__webpack_require__(270);
	__webpack_require__(271);
	__webpack_require__(272);
	__webpack_require__(273);
	__webpack_require__(274);
	__webpack_require__(275);
	__webpack_require__(276);
	__webpack_require__(277);
	__webpack_require__(279);
	__webpack_require__(280);
	__webpack_require__(281);
	__webpack_require__(282);
	__webpack_require__(283);
	__webpack_require__(284);
	__webpack_require__(285);
	__webpack_require__(286);
	__webpack_require__(287);
	__webpack_require__(288);
	__webpack_require__(289);
	__webpack_require__(292);
	__webpack_require__(293);
	module.exports = __webpack_require__(10);

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global         = __webpack_require__(5)
	  , has            = __webpack_require__(6)
	  , DESCRIPTORS    = __webpack_require__(7)
	  , $export        = __webpack_require__(9)
	  , redefine       = __webpack_require__(19)
	  , META           = __webpack_require__(23).KEY
	  , $fails         = __webpack_require__(8)
	  , shared         = __webpack_require__(24)
	  , setToStringTag = __webpack_require__(25)
	  , uid            = __webpack_require__(20)
	  , wks            = __webpack_require__(26)
	  , wksExt         = __webpack_require__(27)
	  , wksDefine      = __webpack_require__(28)
	  , keyOf          = __webpack_require__(30)
	  , enumKeys       = __webpack_require__(43)
	  , isArray        = __webpack_require__(46)
	  , anObject       = __webpack_require__(13)
	  , toIObject      = __webpack_require__(33)
	  , toPrimitive    = __webpack_require__(17)
	  , createDesc     = __webpack_require__(18)
	  , _create        = __webpack_require__(47)
	  , gOPNExt        = __webpack_require__(50)
	  , $GOPD          = __webpack_require__(52)
	  , $DP            = __webpack_require__(12)
	  , $keys          = __webpack_require__(31)
	  , gOPD           = $GOPD.f
	  , dP             = $DP.f
	  , gOPN           = gOPNExt.f
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , PROTOTYPE      = 'prototype'
	  , HIDDEN         = wks('_hidden')
	  , TO_PRIMITIVE   = wks('toPrimitive')
	  , isEnum         = {}.propertyIsEnumerable
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , OPSymbols      = shared('op-symbols')
	  , ObjectProto    = Object[PROTOTYPE]
	  , USE_NATIVE     = typeof $Symbol == 'function'
	  , QObject        = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(dP({}, 'a', {
	    get: function(){ return dP(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = gOPD(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  dP(it, key, D);
	  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
	} : dP;

	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
	};

	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
	  return typeof it == 'symbol';
	} : function(it){
	  return it instanceof $Symbol;
	};

	var $defineProperty = function defineProperty(it, key, D){
	  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if(has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  it  = toIObject(it);
	  key = toPrimitive(key, true);
	  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
	  var D = gOPD(it, key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = gOPN(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var IS_OP  = it === ObjectProto
	    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
	  } return result;
	};

	// 19.4.1.1 Symbol([description])
	if(!USE_NATIVE){
	  $Symbol = function Symbol(){
	    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function(value){
	      if(this === ObjectProto)$set.call(OPSymbols, value);
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
	    return this._k;
	  });

	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f   = $defineProperty;
	  __webpack_require__(51).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(45).f  = $propertyIsEnumerable;
	  __webpack_require__(44).f = $getOwnPropertySymbols;

	  if(DESCRIPTORS && !__webpack_require__(29)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }

	  wksExt.f = function(name){
	    return wrap(wks(name));
	  }
	}

	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

	for(var symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);

	for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);

	$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    if(isSymbol(key))return keyOf(SymbolRegistry, key);
	    throw TypeError(key + ' is not a symbol!');
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	});

	$export($export.S + $export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});

	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it){
	    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	    var args = [it]
	      , i    = 1
	      , replacer, $replacer;
	    while(arguments.length > i)args.push(arguments[i++]);
	    replacer = args[1];
	    if(typeof replacer == 'function')$replacer = replacer;
	    if($replacer || !isArray(replacer))replacer = function(key, value){
	      if($replacer)value = $replacer.call(this, key, value);
	      if(!isSymbol(value))return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});

	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(11)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 5 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 6 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(8)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(5)
	  , core      = __webpack_require__(10)
	  , hide      = __webpack_require__(11)
	  , redefine  = __webpack_require__(19)
	  , ctx       = __webpack_require__(21)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE]
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE] || (exports[PROTOTYPE] = {})
	    , key, own, out, exp;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    // export native or passed
	    out = (own ? target : source)[key];
	    // bind timers to global for call from export context
	    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // extend global
	    if(target)redefine(target, key, out, type & $export.U);
	    // export
	    if(exports[key] != out)hide(exports, key, exp);
	    if(IS_PROTO && expProto[key] != out)expProto[key] = out;
	  }
	};
	global.core = core;
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 10 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(12)
	  , createDesc = __webpack_require__(18);
	module.exports = __webpack_require__(7) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(13)
	  , IE8_DOM_DEFINE = __webpack_require__(15)
	  , toPrimitive    = __webpack_require__(17)
	  , dP             = Object.defineProperty;

	exports.f = __webpack_require__(7) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(14);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(7) && !__webpack_require__(8)(function(){
	  return Object.defineProperty(__webpack_require__(16)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(14)
	  , document = __webpack_require__(5).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(14);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(5)
	  , hide      = __webpack_require__(11)
	  , has       = __webpack_require__(6)
	  , SRC       = __webpack_require__(20)('src')
	  , TO_STRING = 'toString'
	  , $toString = Function[TO_STRING]
	  , TPL       = ('' + $toString).split(TO_STRING);

	__webpack_require__(10).inspectSource = function(it){
	  return $toString.call(it);
	};

	(module.exports = function(O, key, val, safe){
	  var isFunction = typeof val == 'function';
	  if(isFunction)has(val, 'name') || hide(val, 'name', key);
	  if(O[key] === val)return;
	  if(isFunction)has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
	  if(O === global){
	    O[key] = val;
	  } else {
	    if(!safe){
	      delete O[key];
	      hide(O, key, val);
	    } else {
	      if(O[key])O[key] = val;
	      else hide(O, key, val);
	    }
	  }
	// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
	})(Function.prototype, TO_STRING, function toString(){
	  return typeof this == 'function' && this[SRC] || $toString.call(this);
	});

/***/ },
/* 20 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(22);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var META     = __webpack_require__(20)('meta')
	  , isObject = __webpack_require__(14)
	  , has      = __webpack_require__(6)
	  , setDesc  = __webpack_require__(12).f
	  , id       = 0;
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	var FREEZE = !__webpack_require__(8)(function(){
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function(it){
	  setDesc(it, META, {value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  }});
	};
	var fastKey = function(it, create){
	  // return primitive with prefix
	  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return 'F';
	    // not necessary to add metadata
	    if(!create)return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function(it, create){
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return true;
	    // not necessary to add metadata
	    if(!create)return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function(it){
	  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY:      META,
	  NEED:     false,
	  fastKey:  fastKey,
	  getWeak:  getWeak,
	  onFreeze: onFreeze
	};

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(5)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(12).f
	  , has = __webpack_require__(6)
	  , TAG = __webpack_require__(26)('toStringTag');

	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(24)('wks')
	  , uid        = __webpack_require__(20)
	  , Symbol     = __webpack_require__(5).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';

	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};

	$exports.store = store;

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(26);

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var global         = __webpack_require__(5)
	  , core           = __webpack_require__(10)
	  , LIBRARY        = __webpack_require__(29)
	  , wksExt         = __webpack_require__(27)
	  , defineProperty = __webpack_require__(12).f;
	module.exports = function(name){
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
	};

/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = false;

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(31)
	  , toIObject = __webpack_require__(33);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(32)
	  , enumBugKeys = __webpack_require__(42);

	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(6)
	  , toIObject    = __webpack_require__(33)
	  , arrayIndexOf = __webpack_require__(37)(false)
	  , IE_PROTO     = __webpack_require__(41)('IE_PROTO');

	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(34)
	  , defined = __webpack_require__(36);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(35);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 35 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 36 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(33)
	  , toLength  = __webpack_require__(38)
	  , toIndex   = __webpack_require__(40);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(39)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 39 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(39)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(24)('keys')
	  , uid    = __webpack_require__(20);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 42 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(31)
	  , gOPS    = __webpack_require__(44)
	  , pIE     = __webpack_require__(45);
	module.exports = function(it){
	  var result     = getKeys(it)
	    , getSymbols = gOPS.f;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = pIE.f
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
	  } return result;
	};

/***/ },
/* 44 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 45 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(35);
	module.exports = Array.isArray || function isArray(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(13)
	  , dPs         = __webpack_require__(48)
	  , enumBugKeys = __webpack_require__(42)
	  , IE_PROTO    = __webpack_require__(41)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(16)('iframe')
	    , i      = enumBugKeys.length
	    , lt     = '<'
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(49).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};

	module.exports = Object.create || function create(O, Properties){
	  var result;
	  if(O !== null){
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty;
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};


/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(12)
	  , anObject = __webpack_require__(13)
	  , getKeys  = __webpack_require__(31);

	module.exports = __webpack_require__(7) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(5).document && document.documentElement;

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(33)
	  , gOPN      = __webpack_require__(51).f
	  , toString  = {}.toString;

	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];

	var getWindowNames = function(it){
	  try {
	    return gOPN(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};

	module.exports.f = function getOwnPropertyNames(it){
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};


/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys      = __webpack_require__(32)
	  , hiddenKeys = __webpack_require__(42).concat('length', 'prototype');

	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
	  return $keys(O, hiddenKeys);
	};

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	var pIE            = __webpack_require__(45)
	  , createDesc     = __webpack_require__(18)
	  , toIObject      = __webpack_require__(33)
	  , toPrimitive    = __webpack_require__(17)
	  , has            = __webpack_require__(6)
	  , IE8_DOM_DEFINE = __webpack_require__(15)
	  , gOPD           = Object.getOwnPropertyDescriptor;

	exports.f = __webpack_require__(7) ? gOPD : function getOwnPropertyDescriptor(O, P){
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if(IE8_DOM_DEFINE)try {
	    return gOPD(O, P);
	  } catch(e){ /* empty */ }
	  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
	};

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(9)
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	$export($export.S, 'Object', {create: __webpack_require__(47)});

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(9);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(7), 'Object', {defineProperty: __webpack_require__(12).f});

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(9);
	// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
	$export($export.S + $export.F * !__webpack_require__(7), 'Object', {defineProperties: __webpack_require__(48)});

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	var toIObject                 = __webpack_require__(33)
	  , $getOwnPropertyDescriptor = __webpack_require__(52).f;

	__webpack_require__(57)('getOwnPropertyDescriptor', function(){
	  return function getOwnPropertyDescriptor(it, key){
	    return $getOwnPropertyDescriptor(toIObject(it), key);
	  };
	});

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(9)
	  , core    = __webpack_require__(10)
	  , fails   = __webpack_require__(8);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 Object.getPrototypeOf(O)
	var toObject        = __webpack_require__(59)
	  , $getPrototypeOf = __webpack_require__(60);

	__webpack_require__(57)('getPrototypeOf', function(){
	  return function getPrototypeOf(it){
	    return $getPrototypeOf(toObject(it));
	  };
	});

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(36);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(6)
	  , toObject    = __webpack_require__(59)
	  , IE_PROTO    = __webpack_require__(41)('IE_PROTO')
	  , ObjectProto = Object.prototype;

	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(59)
	  , $keys    = __webpack_require__(31);

	__webpack_require__(57)('keys', function(){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 Object.getOwnPropertyNames(O)
	__webpack_require__(57)('getOwnPropertyNames', function(){
	  return __webpack_require__(50).f;
	});

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.5 Object.freeze(O)
	var isObject = __webpack_require__(14)
	  , meta     = __webpack_require__(23).onFreeze;

	__webpack_require__(57)('freeze', function($freeze){
	  return function freeze(it){
	    return $freeze && isObject(it) ? $freeze(meta(it)) : it;
	  };
	});

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.17 Object.seal(O)
	var isObject = __webpack_require__(14)
	  , meta     = __webpack_require__(23).onFreeze;

	__webpack_require__(57)('seal', function($seal){
	  return function seal(it){
	    return $seal && isObject(it) ? $seal(meta(it)) : it;
	  };
	});

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.15 Object.preventExtensions(O)
	var isObject = __webpack_require__(14)
	  , meta     = __webpack_require__(23).onFreeze;

	__webpack_require__(57)('preventExtensions', function($preventExtensions){
	  return function preventExtensions(it){
	    return $preventExtensions && isObject(it) ? $preventExtensions(meta(it)) : it;
	  };
	});

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.12 Object.isFrozen(O)
	var isObject = __webpack_require__(14);

	__webpack_require__(57)('isFrozen', function($isFrozen){
	  return function isFrozen(it){
	    return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
	  };
	});

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.13 Object.isSealed(O)
	var isObject = __webpack_require__(14);

	__webpack_require__(57)('isSealed', function($isSealed){
	  return function isSealed(it){
	    return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
	  };
	});

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.11 Object.isExtensible(O)
	var isObject = __webpack_require__(14);

	__webpack_require__(57)('isExtensible', function($isExtensible){
	  return function isExtensible(it){
	    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
	  };
	});

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(9);

	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(70)});

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys  = __webpack_require__(31)
	  , gOPS     = __webpack_require__(44)
	  , pIE      = __webpack_require__(45)
	  , toObject = __webpack_require__(59)
	  , IObject  = __webpack_require__(34)
	  , $assign  = Object.assign;

	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(8)(function(){
	  var A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , aLen  = arguments.length
	    , index = 1
	    , getSymbols = gOPS.f
	    , isEnum     = pIE.f;
	  while(aLen > index){
	    var S      = IObject(arguments[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  } return T;
	} : $assign;

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.10 Object.is(value1, value2)
	var $export = __webpack_require__(9);
	$export($export.S, 'Object', {is: __webpack_require__(72)});

/***/ },
/* 72 */
/***/ function(module, exports) {

	// 7.2.9 SameValue(x, y)
	module.exports = Object.is || function is(x, y){
	  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
	};

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(9);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(74).set});

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var isObject = __webpack_require__(14)
	  , anObject = __webpack_require__(13);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(21)(Function.call, __webpack_require__(52).f(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.3.6 Object.prototype.toString()
	var classof = __webpack_require__(76)
	  , test    = {};
	test[__webpack_require__(26)('toStringTag')] = 'z';
	if(test + '' != '[object z]'){
	  __webpack_require__(19)(Object.prototype, 'toString', function toString(){
	    return '[object ' + classof(this) + ']';
	  }, true);
	}

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(35)
	  , TAG = __webpack_require__(26)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

	// fallback for IE11 Script Access Denied error
	var tryGet = function(it, key){
	  try {
	    return it[key];
	  } catch(e){ /* empty */ }
	};

	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
	var $export = __webpack_require__(9);

	$export($export.P, 'Function', {bind: __webpack_require__(78)});

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var aFunction  = __webpack_require__(22)
	  , isObject   = __webpack_require__(14)
	  , invoke     = __webpack_require__(79)
	  , arraySlice = [].slice
	  , factories  = {};

	var construct = function(F, len, args){
	  if(!(len in factories)){
	    for(var n = [], i = 0; i < len; i++)n[i] = 'a[' + i + ']';
	    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
	  } return factories[len](F, args);
	};

	module.exports = Function.bind || function bind(that /*, args... */){
	  var fn       = aFunction(this)
	    , partArgs = arraySlice.call(arguments, 1);
	  var bound = function(/* args... */){
	    var args = partArgs.concat(arraySlice.call(arguments));
	    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
	  };
	  if(isObject(fn.prototype))bound.prototype = fn.prototype;
	  return bound;
	};

/***/ },
/* 79 */
/***/ function(module, exports) {

	// fast apply, http://jsperf.lnkit.com/fast-apply/5
	module.exports = function(fn, args, that){
	  var un = that === undefined;
	  switch(args.length){
	    case 0: return un ? fn()
	                      : fn.call(that);
	    case 1: return un ? fn(args[0])
	                      : fn.call(that, args[0]);
	    case 2: return un ? fn(args[0], args[1])
	                      : fn.call(that, args[0], args[1]);
	    case 3: return un ? fn(args[0], args[1], args[2])
	                      : fn.call(that, args[0], args[1], args[2]);
	    case 4: return un ? fn(args[0], args[1], args[2], args[3])
	                      : fn.call(that, args[0], args[1], args[2], args[3]);
	  } return              fn.apply(that, args);
	};

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(12).f
	  , createDesc = __webpack_require__(18)
	  , has        = __webpack_require__(6)
	  , FProto     = Function.prototype
	  , nameRE     = /^\s*function ([^ (]*)/
	  , NAME       = 'name';

	var isExtensible = Object.isExtensible || function(){
	  return true;
	};

	// 19.2.4.2 name
	NAME in FProto || __webpack_require__(7) && dP(FProto, NAME, {
	  configurable: true,
	  get: function(){
	    try {
	      var that = this
	        , name = ('' + that).match(nameRE)[1];
	      has(that, NAME) || !isExtensible(that) || dP(that, NAME, createDesc(5, name));
	      return name;
	    } catch(e){
	      return '';
	    }
	  }
	});

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var isObject       = __webpack_require__(14)
	  , getPrototypeOf = __webpack_require__(60)
	  , HAS_INSTANCE   = __webpack_require__(26)('hasInstance')
	  , FunctionProto  = Function.prototype;
	// 19.2.3.6 Function.prototype[@@hasInstance](V)
	if(!(HAS_INSTANCE in FunctionProto))__webpack_require__(12).f(FunctionProto, HAS_INSTANCE, {value: function(O){
	  if(typeof this != 'function' || !isObject(O))return false;
	  if(!isObject(this.prototype))return O instanceof this;
	  // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
	  while(O = getPrototypeOf(O))if(this.prototype === O)return true;
	  return false;
	}});

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	var $export   = __webpack_require__(9)
	  , $parseInt = __webpack_require__(83);
	// 18.2.5 parseInt(string, radix)
	$export($export.G + $export.F * (parseInt != $parseInt), {parseInt: $parseInt});

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	var $parseInt = __webpack_require__(5).parseInt
	  , $trim     = __webpack_require__(84).trim
	  , ws        = __webpack_require__(85)
	  , hex       = /^[\-+]?0[xX]/;

	module.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix){
	  var string = $trim(String(str), 3);
	  return $parseInt(string, (radix >>> 0) || (hex.test(string) ? 16 : 10));
	} : $parseInt;

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(9)
	  , defined = __webpack_require__(36)
	  , fails   = __webpack_require__(8)
	  , spaces  = __webpack_require__(85)
	  , space   = '[' + spaces + ']'
	  , non     = '\u200b\u0085'
	  , ltrim   = RegExp('^' + space + space + '*')
	  , rtrim   = RegExp(space + space + '*$');

	var exporter = function(KEY, exec, ALIAS){
	  var exp   = {};
	  var FORCE = fails(function(){
	    return !!spaces[KEY]() || non[KEY]() != non;
	  });
	  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
	  if(ALIAS)exp[ALIAS] = fn;
	  $export($export.P + $export.F * FORCE, 'String', exp);
	};

	// 1 -> String#trimLeft
	// 2 -> String#trimRight
	// 3 -> String#trim
	var trim = exporter.trim = function(string, TYPE){
	  string = String(defined(string));
	  if(TYPE & 1)string = string.replace(ltrim, '');
	  if(TYPE & 2)string = string.replace(rtrim, '');
	  return string;
	};

	module.exports = exporter;

/***/ },
/* 85 */
/***/ function(module, exports) {

	module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
	  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	var $export     = __webpack_require__(9)
	  , $parseFloat = __webpack_require__(87);
	// 18.2.4 parseFloat(string)
	$export($export.G + $export.F * (parseFloat != $parseFloat), {parseFloat: $parseFloat});

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	var $parseFloat = __webpack_require__(5).parseFloat
	  , $trim       = __webpack_require__(84).trim;

	module.exports = 1 / $parseFloat(__webpack_require__(85) + '-0') !== -Infinity ? function parseFloat(str){
	  var string = $trim(String(str), 3)
	    , result = $parseFloat(string);
	  return result === 0 && string.charAt(0) == '-' ? -0 : result;
	} : $parseFloat;

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global            = __webpack_require__(5)
	  , has               = __webpack_require__(6)
	  , cof               = __webpack_require__(35)
	  , inheritIfRequired = __webpack_require__(89)
	  , toPrimitive       = __webpack_require__(17)
	  , fails             = __webpack_require__(8)
	  , gOPN              = __webpack_require__(51).f
	  , gOPD              = __webpack_require__(52).f
	  , dP                = __webpack_require__(12).f
	  , $trim             = __webpack_require__(84).trim
	  , NUMBER            = 'Number'
	  , $Number           = global[NUMBER]
	  , Base              = $Number
	  , proto             = $Number.prototype
	  // Opera ~12 has broken Object#toString
	  , BROKEN_COF        = cof(__webpack_require__(47)(proto)) == NUMBER
	  , TRIM              = 'trim' in String.prototype;

	// 7.1.3 ToNumber(argument)
	var toNumber = function(argument){
	  var it = toPrimitive(argument, false);
	  if(typeof it == 'string' && it.length > 2){
	    it = TRIM ? it.trim() : $trim(it, 3);
	    var first = it.charCodeAt(0)
	      , third, radix, maxCode;
	    if(first === 43 || first === 45){
	      third = it.charCodeAt(2);
	      if(third === 88 || third === 120)return NaN; // Number('+0x1') should be NaN, old V8 fix
	    } else if(first === 48){
	      switch(it.charCodeAt(1)){
	        case 66 : case 98  : radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
	        case 79 : case 111 : radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
	        default : return +it;
	      }
	      for(var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++){
	        code = digits.charCodeAt(i);
	        // parseInt parses a string to a first unavailable symbol
	        // but ToNumber should return NaN if a string contains unavailable symbols
	        if(code < 48 || code > maxCode)return NaN;
	      } return parseInt(digits, radix);
	    }
	  } return +it;
	};

	if(!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')){
	  $Number = function Number(value){
	    var it = arguments.length < 1 ? 0 : value
	      , that = this;
	    return that instanceof $Number
	      // check on 1..constructor(foo) case
	      && (BROKEN_COF ? fails(function(){ proto.valueOf.call(that); }) : cof(that) != NUMBER)
	        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
	  };
	  for(var keys = __webpack_require__(7) ? gOPN(Base) : (
	    // ES3:
	    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
	    // ES6 (in case, if modules with ES6 Number statics required before):
	    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
	    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
	  ).split(','), j = 0, key; keys.length > j; j++){
	    if(has(Base, key = keys[j]) && !has($Number, key)){
	      dP($Number, key, gOPD(Base, key));
	    }
	  }
	  $Number.prototype = proto;
	  proto.constructor = $Number;
	  __webpack_require__(19)(global, NUMBER, $Number);
	}

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	var isObject       = __webpack_require__(14)
	  , setPrototypeOf = __webpack_require__(74).set;
	module.exports = function(that, target, C){
	  var P, S = target.constructor;
	  if(S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf){
	    setPrototypeOf(that, P);
	  } return that;
	};

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export      = __webpack_require__(9)
	  , toInteger    = __webpack_require__(39)
	  , aNumberValue = __webpack_require__(91)
	  , repeat       = __webpack_require__(92)
	  , $toFixed     = 1..toFixed
	  , floor        = Math.floor
	  , data         = [0, 0, 0, 0, 0, 0]
	  , ERROR        = 'Number.toFixed: incorrect invocation!'
	  , ZERO         = '0';

	var multiply = function(n, c){
	  var i  = -1
	    , c2 = c;
	  while(++i < 6){
	    c2 += n * data[i];
	    data[i] = c2 % 1e7;
	    c2 = floor(c2 / 1e7);
	  }
	};
	var divide = function(n){
	  var i = 6
	    , c = 0;
	  while(--i >= 0){
	    c += data[i];
	    data[i] = floor(c / n);
	    c = (c % n) * 1e7;
	  }
	};
	var numToString = function(){
	  var i = 6
	    , s = '';
	  while(--i >= 0){
	    if(s !== '' || i === 0 || data[i] !== 0){
	      var t = String(data[i]);
	      s = s === '' ? t : s + repeat.call(ZERO, 7 - t.length) + t;
	    }
	  } return s;
	};
	var pow = function(x, n, acc){
	  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
	};
	var log = function(x){
	  var n  = 0
	    , x2 = x;
	  while(x2 >= 4096){
	    n += 12;
	    x2 /= 4096;
	  }
	  while(x2 >= 2){
	    n  += 1;
	    x2 /= 2;
	  } return n;
	};

	$export($export.P + $export.F * (!!$toFixed && (
	  0.00008.toFixed(3) !== '0.000' ||
	  0.9.toFixed(0) !== '1' ||
	  1.255.toFixed(2) !== '1.25' ||
	  1000000000000000128..toFixed(0) !== '1000000000000000128'
	) || !__webpack_require__(8)(function(){
	  // V8 ~ Android 4.3-
	  $toFixed.call({});
	})), 'Number', {
	  toFixed: function toFixed(fractionDigits){
	    var x = aNumberValue(this, ERROR)
	      , f = toInteger(fractionDigits)
	      , s = ''
	      , m = ZERO
	      , e, z, j, k;
	    if(f < 0 || f > 20)throw RangeError(ERROR);
	    if(x != x)return 'NaN';
	    if(x <= -1e21 || x >= 1e21)return String(x);
	    if(x < 0){
	      s = '-';
	      x = -x;
	    }
	    if(x > 1e-21){
	      e = log(x * pow(2, 69, 1)) - 69;
	      z = e < 0 ? x * pow(2, -e, 1) : x / pow(2, e, 1);
	      z *= 0x10000000000000;
	      e = 52 - e;
	      if(e > 0){
	        multiply(0, z);
	        j = f;
	        while(j >= 7){
	          multiply(1e7, 0);
	          j -= 7;
	        }
	        multiply(pow(10, j, 1), 0);
	        j = e - 1;
	        while(j >= 23){
	          divide(1 << 23);
	          j -= 23;
	        }
	        divide(1 << j);
	        multiply(1, 1);
	        divide(2);
	        m = numToString();
	      } else {
	        multiply(0, z);
	        multiply(1 << -e, 0);
	        m = numToString() + repeat.call(ZERO, f);
	      }
	    }
	    if(f > 0){
	      k = m.length;
	      m = s + (k <= f ? '0.' + repeat.call(ZERO, f - k) + m : m.slice(0, k - f) + '.' + m.slice(k - f));
	    } else {
	      m = s + m;
	    } return m;
	  }
	});

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	var cof = __webpack_require__(35);
	module.exports = function(it, msg){
	  if(typeof it != 'number' && cof(it) != 'Number')throw TypeError(msg);
	  return +it;
	};

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var toInteger = __webpack_require__(39)
	  , defined   = __webpack_require__(36);

	module.exports = function repeat(count){
	  var str = String(defined(this))
	    , res = ''
	    , n   = toInteger(count);
	  if(n < 0 || n == Infinity)throw RangeError("Count can't be negative");
	  for(;n > 0; (n >>>= 1) && (str += str))if(n & 1)res += str;
	  return res;
	};

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export      = __webpack_require__(9)
	  , $fails       = __webpack_require__(8)
	  , aNumberValue = __webpack_require__(91)
	  , $toPrecision = 1..toPrecision;

	$export($export.P + $export.F * ($fails(function(){
	  // IE7-
	  return $toPrecision.call(1, undefined) !== '1';
	}) || !$fails(function(){
	  // V8 ~ Android 4.3-
	  $toPrecision.call({});
	})), 'Number', {
	  toPrecision: function toPrecision(precision){
	    var that = aNumberValue(this, 'Number#toPrecision: incorrect invocation!');
	    return precision === undefined ? $toPrecision.call(that) : $toPrecision.call(that, precision); 
	  }
	});

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.1 Number.EPSILON
	var $export = __webpack_require__(9);

	$export($export.S, 'Number', {EPSILON: Math.pow(2, -52)});

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.2 Number.isFinite(number)
	var $export   = __webpack_require__(9)
	  , _isFinite = __webpack_require__(5).isFinite;

	$export($export.S, 'Number', {
	  isFinite: function isFinite(it){
	    return typeof it == 'number' && _isFinite(it);
	  }
	});

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var $export = __webpack_require__(9);

	$export($export.S, 'Number', {isInteger: __webpack_require__(97)});

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var isObject = __webpack_require__(14)
	  , floor    = Math.floor;
	module.exports = function isInteger(it){
	  return !isObject(it) && isFinite(it) && floor(it) === it;
	};

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.4 Number.isNaN(number)
	var $export = __webpack_require__(9);

	$export($export.S, 'Number', {
	  isNaN: function isNaN(number){
	    return number != number;
	  }
	});

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.5 Number.isSafeInteger(number)
	var $export   = __webpack_require__(9)
	  , isInteger = __webpack_require__(97)
	  , abs       = Math.abs;

	$export($export.S, 'Number', {
	  isSafeInteger: function isSafeInteger(number){
	    return isInteger(number) && abs(number) <= 0x1fffffffffffff;
	  }
	});

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.6 Number.MAX_SAFE_INTEGER
	var $export = __webpack_require__(9);

	$export($export.S, 'Number', {MAX_SAFE_INTEGER: 0x1fffffffffffff});

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.10 Number.MIN_SAFE_INTEGER
	var $export = __webpack_require__(9);

	$export($export.S, 'Number', {MIN_SAFE_INTEGER: -0x1fffffffffffff});

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	var $export     = __webpack_require__(9)
	  , $parseFloat = __webpack_require__(87);
	// 20.1.2.12 Number.parseFloat(string)
	$export($export.S + $export.F * (Number.parseFloat != $parseFloat), 'Number', {parseFloat: $parseFloat});

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	var $export   = __webpack_require__(9)
	  , $parseInt = __webpack_require__(83);
	// 20.1.2.13 Number.parseInt(string, radix)
	$export($export.S + $export.F * (Number.parseInt != $parseInt), 'Number', {parseInt: $parseInt});

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.3 Math.acosh(x)
	var $export = __webpack_require__(9)
	  , log1p   = __webpack_require__(105)
	  , sqrt    = Math.sqrt
	  , $acosh  = Math.acosh;

	$export($export.S + $export.F * !($acosh
	  // V8 bug: https://code.google.com/p/v8/issues/detail?id=3509
	  && Math.floor($acosh(Number.MAX_VALUE)) == 710
	  // Tor Browser bug: Math.acosh(Infinity) -> NaN 
	  && $acosh(Infinity) == Infinity
	), 'Math', {
	  acosh: function acosh(x){
	    return (x = +x) < 1 ? NaN : x > 94906265.62425156
	      ? Math.log(x) + Math.LN2
	      : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
	  }
	});

/***/ },
/* 105 */
/***/ function(module, exports) {

	// 20.2.2.20 Math.log1p(x)
	module.exports = Math.log1p || function log1p(x){
	  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
	};

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.5 Math.asinh(x)
	var $export = __webpack_require__(9)
	  , $asinh  = Math.asinh;

	function asinh(x){
	  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
	}

	// Tor Browser bug: Math.asinh(0) -> -0 
	$export($export.S + $export.F * !($asinh && 1 / $asinh(0) > 0), 'Math', {asinh: asinh});

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.7 Math.atanh(x)
	var $export = __webpack_require__(9)
	  , $atanh  = Math.atanh;

	// Tor Browser bug: Math.atanh(-0) -> 0 
	$export($export.S + $export.F * !($atanh && 1 / $atanh(-0) < 0), 'Math', {
	  atanh: function atanh(x){
	    return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
	  }
	});

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.9 Math.cbrt(x)
	var $export = __webpack_require__(9)
	  , sign    = __webpack_require__(109);

	$export($export.S, 'Math', {
	  cbrt: function cbrt(x){
	    return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
	  }
	});

/***/ },
/* 109 */
/***/ function(module, exports) {

	// 20.2.2.28 Math.sign(x)
	module.exports = Math.sign || function sign(x){
	  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
	};

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.11 Math.clz32(x)
	var $export = __webpack_require__(9);

	$export($export.S, 'Math', {
	  clz32: function clz32(x){
	    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
	  }
	});

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.12 Math.cosh(x)
	var $export = __webpack_require__(9)
	  , exp     = Math.exp;

	$export($export.S, 'Math', {
	  cosh: function cosh(x){
	    return (exp(x = +x) + exp(-x)) / 2;
	  }
	});

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.14 Math.expm1(x)
	var $export = __webpack_require__(9)
	  , $expm1  = __webpack_require__(113);

	$export($export.S + $export.F * ($expm1 != Math.expm1), 'Math', {expm1: $expm1});

/***/ },
/* 113 */
/***/ function(module, exports) {

	// 20.2.2.14 Math.expm1(x)
	var $expm1 = Math.expm1;
	module.exports = (!$expm1
	  // Old FF bug
	  || $expm1(10) > 22025.465794806719 || $expm1(10) < 22025.4657948067165168
	  // Tor Browser bug
	  || $expm1(-2e-17) != -2e-17
	) ? function expm1(x){
	  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
	} : $expm1;

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.16 Math.fround(x)
	var $export   = __webpack_require__(9)
	  , sign      = __webpack_require__(109)
	  , pow       = Math.pow
	  , EPSILON   = pow(2, -52)
	  , EPSILON32 = pow(2, -23)
	  , MAX32     = pow(2, 127) * (2 - EPSILON32)
	  , MIN32     = pow(2, -126);

	var roundTiesToEven = function(n){
	  return n + 1 / EPSILON - 1 / EPSILON;
	};


	$export($export.S, 'Math', {
	  fround: function fround(x){
	    var $abs  = Math.abs(x)
	      , $sign = sign(x)
	      , a, result;
	    if($abs < MIN32)return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
	    a = (1 + EPSILON32 / EPSILON) * $abs;
	    result = a - (a - $abs);
	    if(result > MAX32 || result != result)return $sign * Infinity;
	    return $sign * result;
	  }
	});

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
	var $export = __webpack_require__(9)
	  , abs     = Math.abs;

	$export($export.S, 'Math', {
	  hypot: function hypot(value1, value2){ // eslint-disable-line no-unused-vars
	    var sum  = 0
	      , i    = 0
	      , aLen = arguments.length
	      , larg = 0
	      , arg, div;
	    while(i < aLen){
	      arg = abs(arguments[i++]);
	      if(larg < arg){
	        div  = larg / arg;
	        sum  = sum * div * div + 1;
	        larg = arg;
	      } else if(arg > 0){
	        div  = arg / larg;
	        sum += div * div;
	      } else sum += arg;
	    }
	    return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
	  }
	});

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.18 Math.imul(x, y)
	var $export = __webpack_require__(9)
	  , $imul   = Math.imul;

	// some WebKit versions fails with big numbers, some has wrong arity
	$export($export.S + $export.F * __webpack_require__(8)(function(){
	  return $imul(0xffffffff, 5) != -5 || $imul.length != 2;
	}), 'Math', {
	  imul: function imul(x, y){
	    var UINT16 = 0xffff
	      , xn = +x
	      , yn = +y
	      , xl = UINT16 & xn
	      , yl = UINT16 & yn;
	    return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
	  }
	});

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.21 Math.log10(x)
	var $export = __webpack_require__(9);

	$export($export.S, 'Math', {
	  log10: function log10(x){
	    return Math.log(x) / Math.LN10;
	  }
	});

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.20 Math.log1p(x)
	var $export = __webpack_require__(9);

	$export($export.S, 'Math', {log1p: __webpack_require__(105)});

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.22 Math.log2(x)
	var $export = __webpack_require__(9);

	$export($export.S, 'Math', {
	  log2: function log2(x){
	    return Math.log(x) / Math.LN2;
	  }
	});

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.28 Math.sign(x)
	var $export = __webpack_require__(9);

	$export($export.S, 'Math', {sign: __webpack_require__(109)});

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.30 Math.sinh(x)
	var $export = __webpack_require__(9)
	  , expm1   = __webpack_require__(113)
	  , exp     = Math.exp;

	// V8 near Chromium 38 has a problem with very small numbers
	$export($export.S + $export.F * __webpack_require__(8)(function(){
	  return !Math.sinh(-2e-17) != -2e-17;
	}), 'Math', {
	  sinh: function sinh(x){
	    return Math.abs(x = +x) < 1
	      ? (expm1(x) - expm1(-x)) / 2
	      : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);
	  }
	});

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.33 Math.tanh(x)
	var $export = __webpack_require__(9)
	  , expm1   = __webpack_require__(113)
	  , exp     = Math.exp;

	$export($export.S, 'Math', {
	  tanh: function tanh(x){
	    var a = expm1(x = +x)
	      , b = expm1(-x);
	    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
	  }
	});

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.34 Math.trunc(x)
	var $export = __webpack_require__(9);

	$export($export.S, 'Math', {
	  trunc: function trunc(it){
	    return (it > 0 ? Math.floor : Math.ceil)(it);
	  }
	});

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	var $export        = __webpack_require__(9)
	  , toIndex        = __webpack_require__(40)
	  , fromCharCode   = String.fromCharCode
	  , $fromCodePoint = String.fromCodePoint;

	// length should be 1, old FF problem
	$export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
	  // 21.1.2.2 String.fromCodePoint(...codePoints)
	  fromCodePoint: function fromCodePoint(x){ // eslint-disable-line no-unused-vars
	    var res  = []
	      , aLen = arguments.length
	      , i    = 0
	      , code;
	    while(aLen > i){
	      code = +arguments[i++];
	      if(toIndex(code, 0x10ffff) !== code)throw RangeError(code + ' is not a valid code point');
	      res.push(code < 0x10000
	        ? fromCharCode(code)
	        : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00)
	      );
	    } return res.join('');
	  }
	});

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	var $export   = __webpack_require__(9)
	  , toIObject = __webpack_require__(33)
	  , toLength  = __webpack_require__(38);

	$export($export.S, 'String', {
	  // 21.1.2.4 String.raw(callSite, ...substitutions)
	  raw: function raw(callSite){
	    var tpl  = toIObject(callSite.raw)
	      , len  = toLength(tpl.length)
	      , aLen = arguments.length
	      , res  = []
	      , i    = 0;
	    while(len > i){
	      res.push(String(tpl[i++]));
	      if(i < aLen)res.push(String(arguments[i]));
	    } return res.join('');
	  }
	});

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 21.1.3.25 String.prototype.trim()
	__webpack_require__(84)('trim', function($trim){
	  return function trim(){
	    return $trim(this, 3);
	  };
	});

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(128)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(129)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(39)
	  , defined   = __webpack_require__(36);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(29)
	  , $export        = __webpack_require__(9)
	  , redefine       = __webpack_require__(19)
	  , hide           = __webpack_require__(11)
	  , has            = __webpack_require__(6)
	  , Iterators      = __webpack_require__(130)
	  , $iterCreate    = __webpack_require__(131)
	  , setToStringTag = __webpack_require__(25)
	  , getPrototypeOf = __webpack_require__(60)
	  , ITERATOR       = __webpack_require__(26)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';

	var returnThis = function(){ return this; };

	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
	    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
	    , methods, key, IteratorPrototype;
	  // Fix native
	  if($anyNative){
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
	    if(IteratorPrototype !== Object.prototype){
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if(DEF_VALUES && $native && $native.name !== VALUES){
	    VALUES_BUG = true;
	    $default = function values(){ return $native.call(this); };
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES ? $default : getMethod(VALUES),
	      keys:    IS_SET     ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 130 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(47)
	  , descriptor     = __webpack_require__(18)
	  , setToStringTag = __webpack_require__(25)
	  , IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(11)(IteratorPrototype, __webpack_require__(26)('iterator'), function(){ return this; });

	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(9)
	  , $at     = __webpack_require__(128)(false);
	$export($export.P, 'String', {
	  // 21.1.3.3 String.prototype.codePointAt(pos)
	  codePointAt: function codePointAt(pos){
	    return $at(this, pos);
	  }
	});

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])
	'use strict';
	var $export   = __webpack_require__(9)
	  , toLength  = __webpack_require__(38)
	  , context   = __webpack_require__(134)
	  , ENDS_WITH = 'endsWith'
	  , $endsWith = ''[ENDS_WITH];

	$export($export.P + $export.F * __webpack_require__(136)(ENDS_WITH), 'String', {
	  endsWith: function endsWith(searchString /*, endPosition = @length */){
	    var that = context(this, searchString, ENDS_WITH)
	      , endPosition = arguments.length > 1 ? arguments[1] : undefined
	      , len    = toLength(that.length)
	      , end    = endPosition === undefined ? len : Math.min(toLength(endPosition), len)
	      , search = String(searchString);
	    return $endsWith
	      ? $endsWith.call(that, search, end)
	      : that.slice(end - search.length, end) === search;
	  }
	});

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	// helper for String#{startsWith, endsWith, includes}
	var isRegExp = __webpack_require__(135)
	  , defined  = __webpack_require__(36);

	module.exports = function(that, searchString, NAME){
	  if(isRegExp(searchString))throw TypeError('String#' + NAME + " doesn't accept regex!");
	  return String(defined(that));
	};

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.8 IsRegExp(argument)
	var isObject = __webpack_require__(14)
	  , cof      = __webpack_require__(35)
	  , MATCH    = __webpack_require__(26)('match');
	module.exports = function(it){
	  var isRegExp;
	  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
	};

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	var MATCH = __webpack_require__(26)('match');
	module.exports = function(KEY){
	  var re = /./;
	  try {
	    '/./'[KEY](re);
	  } catch(e){
	    try {
	      re[MATCH] = false;
	      return !'/./'[KEY](re);
	    } catch(f){ /* empty */ }
	  } return true;
	};

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.7 String.prototype.includes(searchString, position = 0)
	'use strict';
	var $export  = __webpack_require__(9)
	  , context  = __webpack_require__(134)
	  , INCLUDES = 'includes';

	$export($export.P + $export.F * __webpack_require__(136)(INCLUDES), 'String', {
	  includes: function includes(searchString /*, position = 0 */){
	    return !!~context(this, searchString, INCLUDES)
	      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(9);

	$export($export.P, 'String', {
	  // 21.1.3.13 String.prototype.repeat(count)
	  repeat: __webpack_require__(92)
	});

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.18 String.prototype.startsWith(searchString [, position ])
	'use strict';
	var $export     = __webpack_require__(9)
	  , toLength    = __webpack_require__(38)
	  , context     = __webpack_require__(134)
	  , STARTS_WITH = 'startsWith'
	  , $startsWith = ''[STARTS_WITH];

	$export($export.P + $export.F * __webpack_require__(136)(STARTS_WITH), 'String', {
	  startsWith: function startsWith(searchString /*, position = 0 */){
	    var that   = context(this, searchString, STARTS_WITH)
	      , index  = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length))
	      , search = String(searchString);
	    return $startsWith
	      ? $startsWith.call(that, search, index)
	      : that.slice(index, index + search.length) === search;
	  }
	});

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.2 String.prototype.anchor(name)
	__webpack_require__(141)('anchor', function(createHTML){
	  return function anchor(name){
	    return createHTML(this, 'a', 'name', name);
	  }
	});

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(9)
	  , fails   = __webpack_require__(8)
	  , defined = __webpack_require__(36)
	  , quot    = /"/g;
	// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
	var createHTML = function(string, tag, attribute, value) {
	  var S  = String(defined(string))
	    , p1 = '<' + tag;
	  if(attribute !== '')p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
	  return p1 + '>' + S + '</' + tag + '>';
	};
	module.exports = function(NAME, exec){
	  var O = {};
	  O[NAME] = exec(createHTML);
	  $export($export.P + $export.F * fails(function(){
	    var test = ''[NAME]('"');
	    return test !== test.toLowerCase() || test.split('"').length > 3;
	  }), 'String', O);
	};

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.3 String.prototype.big()
	__webpack_require__(141)('big', function(createHTML){
	  return function big(){
	    return createHTML(this, 'big', '', '');
	  }
	});

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.4 String.prototype.blink()
	__webpack_require__(141)('blink', function(createHTML){
	  return function blink(){
	    return createHTML(this, 'blink', '', '');
	  }
	});

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.5 String.prototype.bold()
	__webpack_require__(141)('bold', function(createHTML){
	  return function bold(){
	    return createHTML(this, 'b', '', '');
	  }
	});

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.6 String.prototype.fixed()
	__webpack_require__(141)('fixed', function(createHTML){
	  return function fixed(){
	    return createHTML(this, 'tt', '', '');
	  }
	});

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.7 String.prototype.fontcolor(color)
	__webpack_require__(141)('fontcolor', function(createHTML){
	  return function fontcolor(color){
	    return createHTML(this, 'font', 'color', color);
	  }
	});

/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.8 String.prototype.fontsize(size)
	__webpack_require__(141)('fontsize', function(createHTML){
	  return function fontsize(size){
	    return createHTML(this, 'font', 'size', size);
	  }
	});

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.9 String.prototype.italics()
	__webpack_require__(141)('italics', function(createHTML){
	  return function italics(){
	    return createHTML(this, 'i', '', '');
	  }
	});

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.10 String.prototype.link(url)
	__webpack_require__(141)('link', function(createHTML){
	  return function link(url){
	    return createHTML(this, 'a', 'href', url);
	  }
	});

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.11 String.prototype.small()
	__webpack_require__(141)('small', function(createHTML){
	  return function small(){
	    return createHTML(this, 'small', '', '');
	  }
	});

/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.12 String.prototype.strike()
	__webpack_require__(141)('strike', function(createHTML){
	  return function strike(){
	    return createHTML(this, 'strike', '', '');
	  }
	});

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.13 String.prototype.sub()
	__webpack_require__(141)('sub', function(createHTML){
	  return function sub(){
	    return createHTML(this, 'sub', '', '');
	  }
	});

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.14 String.prototype.sup()
	__webpack_require__(141)('sup', function(createHTML){
	  return function sup(){
	    return createHTML(this, 'sup', '', '');
	  }
	});

/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	// 20.3.3.1 / 15.9.4.4 Date.now()
	var $export = __webpack_require__(9);

	$export($export.S, 'Date', {now: function(){ return new Date().getTime(); }});

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export     = __webpack_require__(9)
	  , toObject    = __webpack_require__(59)
	  , toPrimitive = __webpack_require__(17);

	$export($export.P + $export.F * __webpack_require__(8)(function(){
	  return new Date(NaN).toJSON() !== null || Date.prototype.toJSON.call({toISOString: function(){ return 1; }}) !== 1;
	}), 'Date', {
	  toJSON: function toJSON(key){
	    var O  = toObject(this)
	      , pv = toPrimitive(O);
	    return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();
	  }
	});

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
	var $export = __webpack_require__(9)
	  , fails   = __webpack_require__(8)
	  , getTime = Date.prototype.getTime;

	var lz = function(num){
	  return num > 9 ? num : '0' + num;
	};

	// PhantomJS / old WebKit has a broken implementations
	$export($export.P + $export.F * (fails(function(){
	  return new Date(-5e13 - 1).toISOString() != '0385-07-25T07:06:39.999Z';
	}) || !fails(function(){
	  new Date(NaN).toISOString();
	})), 'Date', {
	  toISOString: function toISOString(){
	    if(!isFinite(getTime.call(this)))throw RangeError('Invalid time value');
	    var d = this
	      , y = d.getUTCFullYear()
	      , m = d.getUTCMilliseconds()
	      , s = y < 0 ? '-' : y > 9999 ? '+' : '';
	    return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) +
	      '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) +
	      'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) +
	      ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';
	  }
	});

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	var DateProto    = Date.prototype
	  , INVALID_DATE = 'Invalid Date'
	  , TO_STRING    = 'toString'
	  , $toString    = DateProto[TO_STRING]
	  , getTime      = DateProto.getTime;
	if(new Date(NaN) + '' != INVALID_DATE){
	  __webpack_require__(19)(DateProto, TO_STRING, function toString(){
	    var value = getTime.call(this);
	    return value === value ? $toString.call(this) : INVALID_DATE;
	  });
	}

/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	var TO_PRIMITIVE = __webpack_require__(26)('toPrimitive')
	  , proto        = Date.prototype;

	if(!(TO_PRIMITIVE in proto))__webpack_require__(11)(proto, TO_PRIMITIVE, __webpack_require__(159));

/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var anObject    = __webpack_require__(13)
	  , toPrimitive = __webpack_require__(17)
	  , NUMBER      = 'number';

	module.exports = function(hint){
	  if(hint !== 'string' && hint !== NUMBER && hint !== 'default')throw TypeError('Incorrect hint');
	  return toPrimitive(anObject(this), hint != NUMBER);
	};

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
	var $export = __webpack_require__(9);

	$export($export.S, 'Array', {isArray: __webpack_require__(46)});

/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ctx            = __webpack_require__(21)
	  , $export        = __webpack_require__(9)
	  , toObject       = __webpack_require__(59)
	  , call           = __webpack_require__(162)
	  , isArrayIter    = __webpack_require__(163)
	  , toLength       = __webpack_require__(38)
	  , createProperty = __webpack_require__(164)
	  , getIterFn      = __webpack_require__(165);

	$export($export.S + $export.F * !__webpack_require__(166)(function(iter){ Array.from(iter); }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
	    var O       = toObject(arrayLike)
	      , C       = typeof this == 'function' ? this : Array
	      , aLen    = arguments.length
	      , mapfn   = aLen > 1 ? arguments[1] : undefined
	      , mapping = mapfn !== undefined
	      , index   = 0
	      , iterFn  = getIterFn(O)
	      , length, result, step, iterator;
	    if(mapping)mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
	      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
	        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
	      }
	    } else {
	      length = toLength(O.length);
	      for(result = new C(length); length > index; index++){
	        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});


/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(13);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(130)
	  , ITERATOR   = __webpack_require__(26)('iterator')
	  , ArrayProto = Array.prototype;

	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $defineProperty = __webpack_require__(12)
	  , createDesc      = __webpack_require__(18);

	module.exports = function(object, index, value){
	  if(index in object)$defineProperty.f(object, index, createDesc(0, value));
	  else object[index] = value;
	};

/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(76)
	  , ITERATOR  = __webpack_require__(26)('iterator')
	  , Iterators = __webpack_require__(130);
	module.exports = __webpack_require__(10).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(26)('iterator')
	  , SAFE_CLOSING = false;

	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }

	module.exports = function(exec, skipClosing){
	  if(!skipClosing && !SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[ITERATOR]();
	    iter.next = function(){ return {done: safe = true}; };
	    arr[ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export        = __webpack_require__(9)
	  , createProperty = __webpack_require__(164);

	// WebKit Array.of isn't generic
	$export($export.S + $export.F * __webpack_require__(8)(function(){
	  function F(){}
	  return !(Array.of.call(F) instanceof F);
	}), 'Array', {
	  // 22.1.2.3 Array.of( ...items)
	  of: function of(/* ...args */){
	    var index  = 0
	      , aLen   = arguments.length
	      , result = new (typeof this == 'function' ? this : Array)(aLen);
	    while(aLen > index)createProperty(result, index, arguments[index++]);
	    result.length = aLen;
	    return result;
	  }
	});

/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.13 Array.prototype.join(separator)
	var $export   = __webpack_require__(9)
	  , toIObject = __webpack_require__(33)
	  , arrayJoin = [].join;

	// fallback for not array-like strings
	$export($export.P + $export.F * (__webpack_require__(34) != Object || !__webpack_require__(169)(arrayJoin)), 'Array', {
	  join: function join(separator){
	    return arrayJoin.call(toIObject(this), separator === undefined ? ',' : separator);
	  }
	});

/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	var fails = __webpack_require__(8);

	module.exports = function(method, arg){
	  return !!method && fails(function(){
	    arg ? method.call(null, function(){}, 1) : method.call(null);
	  });
	};

/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export    = __webpack_require__(9)
	  , html       = __webpack_require__(49)
	  , cof        = __webpack_require__(35)
	  , toIndex    = __webpack_require__(40)
	  , toLength   = __webpack_require__(38)
	  , arraySlice = [].slice;

	// fallback for not array-like ES3 strings and DOM objects
	$export($export.P + $export.F * __webpack_require__(8)(function(){
	  if(html)arraySlice.call(html);
	}), 'Array', {
	  slice: function slice(begin, end){
	    var len   = toLength(this.length)
	      , klass = cof(this);
	    end = end === undefined ? len : end;
	    if(klass == 'Array')return arraySlice.call(this, begin, end);
	    var start  = toIndex(begin, len)
	      , upTo   = toIndex(end, len)
	      , size   = toLength(upTo - start)
	      , cloned = Array(size)
	      , i      = 0;
	    for(; i < size; i++)cloned[i] = klass == 'String'
	      ? this.charAt(start + i)
	      : this[start + i];
	    return cloned;
	  }
	});

/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export   = __webpack_require__(9)
	  , aFunction = __webpack_require__(22)
	  , toObject  = __webpack_require__(59)
	  , fails     = __webpack_require__(8)
	  , $sort     = [].sort
	  , test      = [1, 2, 3];

	$export($export.P + $export.F * (fails(function(){
	  // IE8-
	  test.sort(undefined);
	}) || !fails(function(){
	  // V8 bug
	  test.sort(null);
	  // Old WebKit
	}) || !__webpack_require__(169)($sort)), 'Array', {
	  // 22.1.3.25 Array.prototype.sort(comparefn)
	  sort: function sort(comparefn){
	    return comparefn === undefined
	      ? $sort.call(toObject(this))
	      : $sort.call(toObject(this), aFunction(comparefn));
	  }
	});

/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export  = __webpack_require__(9)
	  , $forEach = __webpack_require__(173)(0)
	  , STRICT   = __webpack_require__(169)([].forEach, true);

	$export($export.P + $export.F * !STRICT, 'Array', {
	  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
	  forEach: function forEach(callbackfn /* , thisArg */){
	    return $forEach(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	// 0 -> Array#forEach
	// 1 -> Array#map
	// 2 -> Array#filter
	// 3 -> Array#some
	// 4 -> Array#every
	// 5 -> Array#find
	// 6 -> Array#findIndex
	var ctx      = __webpack_require__(21)
	  , IObject  = __webpack_require__(34)
	  , toObject = __webpack_require__(59)
	  , toLength = __webpack_require__(38)
	  , asc      = __webpack_require__(174);
	module.exports = function(TYPE, $create){
	  var IS_MAP        = TYPE == 1
	    , IS_FILTER     = TYPE == 2
	    , IS_SOME       = TYPE == 3
	    , IS_EVERY      = TYPE == 4
	    , IS_FIND_INDEX = TYPE == 6
	    , NO_HOLES      = TYPE == 5 || IS_FIND_INDEX
	    , create        = $create || asc;
	  return function($this, callbackfn, that){
	    var O      = toObject($this)
	      , self   = IObject(O)
	      , f      = ctx(callbackfn, that, 3)
	      , length = toLength(self.length)
	      , index  = 0
	      , result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined
	      , val, res;
	    for(;length > index; index++)if(NO_HOLES || index in self){
	      val = self[index];
	      res = f(val, index, O);
	      if(TYPE){
	        if(IS_MAP)result[index] = res;            // map
	        else if(res)switch(TYPE){
	          case 3: return true;                    // some
	          case 5: return val;                     // find
	          case 6: return index;                   // findIndex
	          case 2: result.push(val);               // filter
	        } else if(IS_EVERY)return false;          // every
	      }
	    }
	    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
	  };
	};

/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
	var speciesConstructor = __webpack_require__(175);

	module.exports = function(original, length){
	  return new (speciesConstructor(original))(length);
	};

/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(14)
	  , isArray  = __webpack_require__(46)
	  , SPECIES  = __webpack_require__(26)('species');

	module.exports = function(original){
	  var C;
	  if(isArray(original)){
	    C = original.constructor;
	    // cross-realm fallback
	    if(typeof C == 'function' && (C === Array || isArray(C.prototype)))C = undefined;
	    if(isObject(C)){
	      C = C[SPECIES];
	      if(C === null)C = undefined;
	    }
	  } return C === undefined ? Array : C;
	};

/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(9)
	  , $map    = __webpack_require__(173)(1);

	$export($export.P + $export.F * !__webpack_require__(169)([].map, true), 'Array', {
	  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
	  map: function map(callbackfn /* , thisArg */){
	    return $map(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(9)
	  , $filter = __webpack_require__(173)(2);

	$export($export.P + $export.F * !__webpack_require__(169)([].filter, true), 'Array', {
	  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
	  filter: function filter(callbackfn /* , thisArg */){
	    return $filter(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(9)
	  , $some   = __webpack_require__(173)(3);

	$export($export.P + $export.F * !__webpack_require__(169)([].some, true), 'Array', {
	  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
	  some: function some(callbackfn /* , thisArg */){
	    return $some(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(9)
	  , $every  = __webpack_require__(173)(4);

	$export($export.P + $export.F * !__webpack_require__(169)([].every, true), 'Array', {
	  // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
	  every: function every(callbackfn /* , thisArg */){
	    return $every(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(9)
	  , $reduce = __webpack_require__(181);

	$export($export.P + $export.F * !__webpack_require__(169)([].reduce, true), 'Array', {
	  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
	  reduce: function reduce(callbackfn /* , initialValue */){
	    return $reduce(this, callbackfn, arguments.length, arguments[1], false);
	  }
	});

/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	var aFunction = __webpack_require__(22)
	  , toObject  = __webpack_require__(59)
	  , IObject   = __webpack_require__(34)
	  , toLength  = __webpack_require__(38);

	module.exports = function(that, callbackfn, aLen, memo, isRight){
	  aFunction(callbackfn);
	  var O      = toObject(that)
	    , self   = IObject(O)
	    , length = toLength(O.length)
	    , index  = isRight ? length - 1 : 0
	    , i      = isRight ? -1 : 1;
	  if(aLen < 2)for(;;){
	    if(index in self){
	      memo = self[index];
	      index += i;
	      break;
	    }
	    index += i;
	    if(isRight ? index < 0 : length <= index){
	      throw TypeError('Reduce of empty array with no initial value');
	    }
	  }
	  for(;isRight ? index >= 0 : length > index; index += i)if(index in self){
	    memo = callbackfn(memo, self[index], index, O);
	  }
	  return memo;
	};

/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(9)
	  , $reduce = __webpack_require__(181);

	$export($export.P + $export.F * !__webpack_require__(169)([].reduceRight, true), 'Array', {
	  // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
	  reduceRight: function reduceRight(callbackfn /* , initialValue */){
	    return $reduce(this, callbackfn, arguments.length, arguments[1], true);
	  }
	});

/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export       = __webpack_require__(9)
	  , $indexOf      = __webpack_require__(37)(false)
	  , $native       = [].indexOf
	  , NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;

	$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(169)($native)), 'Array', {
	  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
	  indexOf: function indexOf(searchElement /*, fromIndex = 0 */){
	    return NEGATIVE_ZERO
	      // convert -0 to +0
	      ? $native.apply(this, arguments) || 0
	      : $indexOf(this, searchElement, arguments[1]);
	  }
	});

/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export       = __webpack_require__(9)
	  , toIObject     = __webpack_require__(33)
	  , toInteger     = __webpack_require__(39)
	  , toLength      = __webpack_require__(38)
	  , $native       = [].lastIndexOf
	  , NEGATIVE_ZERO = !!$native && 1 / [1].lastIndexOf(1, -0) < 0;

	$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(169)($native)), 'Array', {
	  // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
	  lastIndexOf: function lastIndexOf(searchElement /*, fromIndex = @[*-1] */){
	    // convert -0 to +0
	    if(NEGATIVE_ZERO)return $native.apply(this, arguments) || 0;
	    var O      = toIObject(this)
	      , length = toLength(O.length)
	      , index  = length - 1;
	    if(arguments.length > 1)index = Math.min(index, toInteger(arguments[1]));
	    if(index < 0)index = length + index;
	    for(;index >= 0; index--)if(index in O)if(O[index] === searchElement)return index || 0;
	    return -1;
	  }
	});

/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
	var $export = __webpack_require__(9);

	$export($export.P, 'Array', {copyWithin: __webpack_require__(186)});

	__webpack_require__(187)('copyWithin');

/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
	'use strict';
	var toObject = __webpack_require__(59)
	  , toIndex  = __webpack_require__(40)
	  , toLength = __webpack_require__(38);

	module.exports = [].copyWithin || function copyWithin(target/*= 0*/, start/*= 0, end = @length*/){
	  var O     = toObject(this)
	    , len   = toLength(O.length)
	    , to    = toIndex(target, len)
	    , from  = toIndex(start, len)
	    , end   = arguments.length > 2 ? arguments[2] : undefined
	    , count = Math.min((end === undefined ? len : toIndex(end, len)) - from, len - to)
	    , inc   = 1;
	  if(from < to && to < from + count){
	    inc  = -1;
	    from += count - 1;
	    to   += count - 1;
	  }
	  while(count-- > 0){
	    if(from in O)O[to] = O[from];
	    else delete O[to];
	    to   += inc;
	    from += inc;
	  } return O;
	};

/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.31 Array.prototype[@@unscopables]
	var UNSCOPABLES = __webpack_require__(26)('unscopables')
	  , ArrayProto  = Array.prototype;
	if(ArrayProto[UNSCOPABLES] == undefined)__webpack_require__(11)(ArrayProto, UNSCOPABLES, {});
	module.exports = function(key){
	  ArrayProto[UNSCOPABLES][key] = true;
	};

/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
	var $export = __webpack_require__(9);

	$export($export.P, 'Array', {fill: __webpack_require__(189)});

	__webpack_require__(187)('fill');

/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
	'use strict';
	var toObject = __webpack_require__(59)
	  , toIndex  = __webpack_require__(40)
	  , toLength = __webpack_require__(38);
	module.exports = function fill(value /*, start = 0, end = @length */){
	  var O      = toObject(this)
	    , length = toLength(O.length)
	    , aLen   = arguments.length
	    , index  = toIndex(aLen > 1 ? arguments[1] : undefined, length)
	    , end    = aLen > 2 ? arguments[2] : undefined
	    , endPos = end === undefined ? length : toIndex(end, length);
	  while(endPos > index)O[index++] = value;
	  return O;
	};

/***/ },
/* 190 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
	var $export = __webpack_require__(9)
	  , $find   = __webpack_require__(173)(5)
	  , KEY     = 'find'
	  , forced  = true;
	// Shouldn't skip holes
	if(KEY in [])Array(1)[KEY](function(){ forced = false; });
	$export($export.P + $export.F * forced, 'Array', {
	  find: function find(callbackfn/*, that = undefined */){
	    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	__webpack_require__(187)(KEY);

/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
	var $export = __webpack_require__(9)
	  , $find   = __webpack_require__(173)(6)
	  , KEY     = 'findIndex'
	  , forced  = true;
	// Shouldn't skip holes
	if(KEY in [])Array(1)[KEY](function(){ forced = false; });
	$export($export.P + $export.F * forced, 'Array', {
	  findIndex: function findIndex(callbackfn/*, that = undefined */){
	    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	__webpack_require__(187)(KEY);

/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(193)('Array');

/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global      = __webpack_require__(5)
	  , dP          = __webpack_require__(12)
	  , DESCRIPTORS = __webpack_require__(7)
	  , SPECIES     = __webpack_require__(26)('species');

	module.exports = function(KEY){
	  var C = global[KEY];
	  if(DESCRIPTORS && C && !C[SPECIES])dP.f(C, SPECIES, {
	    configurable: true,
	    get: function(){ return this; }
	  });
	};

/***/ },
/* 194 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(187)
	  , step             = __webpack_require__(195)
	  , Iterators        = __webpack_require__(130)
	  , toIObject        = __webpack_require__(33);

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(129)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;

	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 195 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

	var global            = __webpack_require__(5)
	  , inheritIfRequired = __webpack_require__(89)
	  , dP                = __webpack_require__(12).f
	  , gOPN              = __webpack_require__(51).f
	  , isRegExp          = __webpack_require__(135)
	  , $flags            = __webpack_require__(197)
	  , $RegExp           = global.RegExp
	  , Base              = $RegExp
	  , proto             = $RegExp.prototype
	  , re1               = /a/g
	  , re2               = /a/g
	  // "new" creates a new object, old webkit buggy here
	  , CORRECT_NEW       = new $RegExp(re1) !== re1;

	if(__webpack_require__(7) && (!CORRECT_NEW || __webpack_require__(8)(function(){
	  re2[__webpack_require__(26)('match')] = false;
	  // RegExp constructor can alter flags and IsRegExp works correct with @@match
	  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
	}))){
	  $RegExp = function RegExp(p, f){
	    var tiRE = this instanceof $RegExp
	      , piRE = isRegExp(p)
	      , fiU  = f === undefined;
	    return !tiRE && piRE && p.constructor === $RegExp && fiU ? p
	      : inheritIfRequired(CORRECT_NEW
	        ? new Base(piRE && !fiU ? p.source : p, f)
	        : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f)
	      , tiRE ? this : proto, $RegExp);
	  };
	  var proxy = function(key){
	    key in $RegExp || dP($RegExp, key, {
	      configurable: true,
	      get: function(){ return Base[key]; },
	      set: function(it){ Base[key] = it; }
	    });
	  };
	  for(var keys = gOPN(Base), i = 0; keys.length > i; )proxy(keys[i++]);
	  proto.constructor = $RegExp;
	  $RegExp.prototype = proto;
	  __webpack_require__(19)(global, 'RegExp', $RegExp);
	}

	__webpack_require__(193)('RegExp');

/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 21.2.5.3 get RegExp.prototype.flags
	var anObject = __webpack_require__(13);
	module.exports = function(){
	  var that   = anObject(this)
	    , result = '';
	  if(that.global)     result += 'g';
	  if(that.ignoreCase) result += 'i';
	  if(that.multiline)  result += 'm';
	  if(that.unicode)    result += 'u';
	  if(that.sticky)     result += 'y';
	  return result;
	};

/***/ },
/* 198 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	__webpack_require__(199);
	var anObject    = __webpack_require__(13)
	  , $flags      = __webpack_require__(197)
	  , DESCRIPTORS = __webpack_require__(7)
	  , TO_STRING   = 'toString'
	  , $toString   = /./[TO_STRING];

	var define = function(fn){
	  __webpack_require__(19)(RegExp.prototype, TO_STRING, fn, true);
	};

	// 21.2.5.14 RegExp.prototype.toString()
	if(__webpack_require__(8)(function(){ return $toString.call({source: 'a', flags: 'b'}) != '/a/b'; })){
	  define(function toString(){
	    var R = anObject(this);
	    return '/'.concat(R.source, '/',
	      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
	  });
	// FF44- RegExp#toString has a wrong name
	} else if($toString.name != TO_STRING){
	  define(function toString(){
	    return $toString.call(this);
	  });
	}

/***/ },
/* 199 */
/***/ function(module, exports, __webpack_require__) {

	// 21.2.5.3 get RegExp.prototype.flags()
	if(__webpack_require__(7) && /./g.flags != 'g')__webpack_require__(12).f(RegExp.prototype, 'flags', {
	  configurable: true,
	  get: __webpack_require__(197)
	});

/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

	// @@match logic
	__webpack_require__(201)('match', 1, function(defined, MATCH, $match){
	  // 21.1.3.11 String.prototype.match(regexp)
	  return [function match(regexp){
	    'use strict';
	    var O  = defined(this)
	      , fn = regexp == undefined ? undefined : regexp[MATCH];
	    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
	  }, $match];
	});

/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var hide     = __webpack_require__(11)
	  , redefine = __webpack_require__(19)
	  , fails    = __webpack_require__(8)
	  , defined  = __webpack_require__(36)
	  , wks      = __webpack_require__(26);

	module.exports = function(KEY, length, exec){
	  var SYMBOL   = wks(KEY)
	    , fns      = exec(defined, SYMBOL, ''[KEY])
	    , strfn    = fns[0]
	    , rxfn     = fns[1];
	  if(fails(function(){
	    var O = {};
	    O[SYMBOL] = function(){ return 7; };
	    return ''[KEY](O) != 7;
	  })){
	    redefine(String.prototype, KEY, strfn);
	    hide(RegExp.prototype, SYMBOL, length == 2
	      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
	      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
	      ? function(string, arg){ return rxfn.call(string, this, arg); }
	      // 21.2.5.6 RegExp.prototype[@@match](string)
	      // 21.2.5.9 RegExp.prototype[@@search](string)
	      : function(string){ return rxfn.call(string, this); }
	    );
	  }
	};

/***/ },
/* 202 */
/***/ function(module, exports, __webpack_require__) {

	// @@replace logic
	__webpack_require__(201)('replace', 2, function(defined, REPLACE, $replace){
	  // 21.1.3.14 String.prototype.replace(searchValue, replaceValue)
	  return [function replace(searchValue, replaceValue){
	    'use strict';
	    var O  = defined(this)
	      , fn = searchValue == undefined ? undefined : searchValue[REPLACE];
	    return fn !== undefined
	      ? fn.call(searchValue, O, replaceValue)
	      : $replace.call(String(O), searchValue, replaceValue);
	  }, $replace];
	});

/***/ },
/* 203 */
/***/ function(module, exports, __webpack_require__) {

	// @@search logic
	__webpack_require__(201)('search', 1, function(defined, SEARCH, $search){
	  // 21.1.3.15 String.prototype.search(regexp)
	  return [function search(regexp){
	    'use strict';
	    var O  = defined(this)
	      , fn = regexp == undefined ? undefined : regexp[SEARCH];
	    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
	  }, $search];
	});

/***/ },
/* 204 */
/***/ function(module, exports, __webpack_require__) {

	// @@split logic
	__webpack_require__(201)('split', 2, function(defined, SPLIT, $split){
	  'use strict';
	  var isRegExp   = __webpack_require__(135)
	    , _split     = $split
	    , $push      = [].push
	    , $SPLIT     = 'split'
	    , LENGTH     = 'length'
	    , LAST_INDEX = 'lastIndex';
	  if(
	    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
	    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
	    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
	    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
	    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
	    ''[$SPLIT](/.?/)[LENGTH]
	  ){
	    var NPCG = /()??/.exec('')[1] === undefined; // nonparticipating capturing group
	    // based on es5-shim implementation, need to rework it
	    $split = function(separator, limit){
	      var string = String(this);
	      if(separator === undefined && limit === 0)return [];
	      // If `separator` is not a regex, use native split
	      if(!isRegExp(separator))return _split.call(string, separator, limit);
	      var output = [];
	      var flags = (separator.ignoreCase ? 'i' : '') +
	                  (separator.multiline ? 'm' : '') +
	                  (separator.unicode ? 'u' : '') +
	                  (separator.sticky ? 'y' : '');
	      var lastLastIndex = 0;
	      var splitLimit = limit === undefined ? 4294967295 : limit >>> 0;
	      // Make `global` and avoid `lastIndex` issues by working with a copy
	      var separatorCopy = new RegExp(separator.source, flags + 'g');
	      var separator2, match, lastIndex, lastLength, i;
	      // Doesn't need flags gy, but they don't hurt
	      if(!NPCG)separator2 = new RegExp('^' + separatorCopy.source + '$(?!\\s)', flags);
	      while(match = separatorCopy.exec(string)){
	        // `separatorCopy.lastIndex` is not reliable cross-browser
	        lastIndex = match.index + match[0][LENGTH];
	        if(lastIndex > lastLastIndex){
	          output.push(string.slice(lastLastIndex, match.index));
	          // Fix browsers whose `exec` methods don't consistently return `undefined` for NPCG
	          if(!NPCG && match[LENGTH] > 1)match[0].replace(separator2, function(){
	            for(i = 1; i < arguments[LENGTH] - 2; i++)if(arguments[i] === undefined)match[i] = undefined;
	          });
	          if(match[LENGTH] > 1 && match.index < string[LENGTH])$push.apply(output, match.slice(1));
	          lastLength = match[0][LENGTH];
	          lastLastIndex = lastIndex;
	          if(output[LENGTH] >= splitLimit)break;
	        }
	        if(separatorCopy[LAST_INDEX] === match.index)separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
	      }
	      if(lastLastIndex === string[LENGTH]){
	        if(lastLength || !separatorCopy.test(''))output.push('');
	      } else output.push(string.slice(lastLastIndex));
	      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
	    };
	  // Chakra, V8
	  } else if('0'[$SPLIT](undefined, 0)[LENGTH]){
	    $split = function(separator, limit){
	      return separator === undefined && limit === 0 ? [] : _split.call(this, separator, limit);
	    };
	  }
	  // 21.1.3.17 String.prototype.split(separator, limit)
	  return [function split(separator, limit){
	    var O  = defined(this)
	      , fn = separator == undefined ? undefined : separator[SPLIT];
	    return fn !== undefined ? fn.call(separator, O, limit) : $split.call(String(O), separator, limit);
	  }, $split];
	});

/***/ },
/* 205 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY            = __webpack_require__(29)
	  , global             = __webpack_require__(5)
	  , ctx                = __webpack_require__(21)
	  , classof            = __webpack_require__(76)
	  , $export            = __webpack_require__(9)
	  , isObject           = __webpack_require__(14)
	  , aFunction          = __webpack_require__(22)
	  , anInstance         = __webpack_require__(206)
	  , forOf              = __webpack_require__(207)
	  , speciesConstructor = __webpack_require__(208)
	  , task               = __webpack_require__(209).set
	  , microtask          = __webpack_require__(210)()
	  , PROMISE            = 'Promise'
	  , TypeError          = global.TypeError
	  , process            = global.process
	  , $Promise           = global[PROMISE]
	  , process            = global.process
	  , isNode             = classof(process) == 'process'
	  , empty              = function(){ /* empty */ }
	  , Internal, GenericPromiseCapability, Wrapper;

	var USE_NATIVE = !!function(){
	  try {
	    // correct subclassing with @@species support
	    var promise     = $Promise.resolve(1)
	      , FakePromise = (promise.constructor = {})[__webpack_require__(26)('species')] = function(exec){ exec(empty, empty); };
	    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
	    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
	  } catch(e){ /* empty */ }
	}();

	// helpers
	var sameConstructor = function(a, b){
	  // with library wrapper special case
	  return a === b || a === $Promise && b === Wrapper;
	};
	var isThenable = function(it){
	  var then;
	  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
	};
	var newPromiseCapability = function(C){
	  return sameConstructor($Promise, C)
	    ? new PromiseCapability(C)
	    : new GenericPromiseCapability(C);
	};
	var PromiseCapability = GenericPromiseCapability = function(C){
	  var resolve, reject;
	  this.promise = new C(function($$resolve, $$reject){
	    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
	    resolve = $$resolve;
	    reject  = $$reject;
	  });
	  this.resolve = aFunction(resolve);
	  this.reject  = aFunction(reject);
	};
	var perform = function(exec){
	  try {
	    exec();
	  } catch(e){
	    return {error: e};
	  }
	};
	var notify = function(promise, isReject){
	  if(promise._n)return;
	  promise._n = true;
	  var chain = promise._c;
	  microtask(function(){
	    var value = promise._v
	      , ok    = promise._s == 1
	      , i     = 0;
	    var run = function(reaction){
	      var handler = ok ? reaction.ok : reaction.fail
	        , resolve = reaction.resolve
	        , reject  = reaction.reject
	        , domain  = reaction.domain
	        , result, then;
	      try {
	        if(handler){
	          if(!ok){
	            if(promise._h == 2)onHandleUnhandled(promise);
	            promise._h = 1;
	          }
	          if(handler === true)result = value;
	          else {
	            if(domain)domain.enter();
	            result = handler(value);
	            if(domain)domain.exit();
	          }
	          if(result === reaction.promise){
	            reject(TypeError('Promise-chain cycle'));
	          } else if(then = isThenable(result)){
	            then.call(result, resolve, reject);
	          } else resolve(result);
	        } else reject(value);
	      } catch(e){
	        reject(e);
	      }
	    };
	    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
	    promise._c = [];
	    promise._n = false;
	    if(isReject && !promise._h)onUnhandled(promise);
	  });
	};
	var onUnhandled = function(promise){
	  task.call(global, function(){
	    var value = promise._v
	      , abrupt, handler, console;
	    if(isUnhandled(promise)){
	      abrupt = perform(function(){
	        if(isNode){
	          process.emit('unhandledRejection', value, promise);
	        } else if(handler = global.onunhandledrejection){
	          handler({promise: promise, reason: value});
	        } else if((console = global.console) && console.error){
	          console.error('Unhandled promise rejection', value);
	        }
	      });
	      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
	      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
	    } promise._a = undefined;
	    if(abrupt)throw abrupt.error;
	  });
	};
	var isUnhandled = function(promise){
	  if(promise._h == 1)return false;
	  var chain = promise._a || promise._c
	    , i     = 0
	    , reaction;
	  while(chain.length > i){
	    reaction = chain[i++];
	    if(reaction.fail || !isUnhandled(reaction.promise))return false;
	  } return true;
	};
	var onHandleUnhandled = function(promise){
	  task.call(global, function(){
	    var handler;
	    if(isNode){
	      process.emit('rejectionHandled', promise);
	    } else if(handler = global.onrejectionhandled){
	      handler({promise: promise, reason: promise._v});
	    }
	  });
	};
	var $reject = function(value){
	  var promise = this;
	  if(promise._d)return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  promise._v = value;
	  promise._s = 2;
	  if(!promise._a)promise._a = promise._c.slice();
	  notify(promise, true);
	};
	var $resolve = function(value){
	  var promise = this
	    , then;
	  if(promise._d)return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  try {
	    if(promise === value)throw TypeError("Promise can't be resolved itself");
	    if(then = isThenable(value)){
	      microtask(function(){
	        var wrapper = {_w: promise, _d: false}; // wrap
	        try {
	          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
	        } catch(e){
	          $reject.call(wrapper, e);
	        }
	      });
	    } else {
	      promise._v = value;
	      promise._s = 1;
	      notify(promise, false);
	    }
	  } catch(e){
	    $reject.call({_w: promise, _d: false}, e); // wrap
	  }
	};

	// constructor polyfill
	if(!USE_NATIVE){
	  // 25.4.3.1 Promise(executor)
	  $Promise = function Promise(executor){
	    anInstance(this, $Promise, PROMISE, '_h');
	    aFunction(executor);
	    Internal.call(this);
	    try {
	      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
	    } catch(err){
	      $reject.call(this, err);
	    }
	  };
	  Internal = function Promise(executor){
	    this._c = [];             // <- awaiting reactions
	    this._a = undefined;      // <- checked in isUnhandled reactions
	    this._s = 0;              // <- state
	    this._d = false;          // <- done
	    this._v = undefined;      // <- value
	    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
	    this._n = false;          // <- notify
	  };
	  Internal.prototype = __webpack_require__(211)($Promise.prototype, {
	    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	    then: function then(onFulfilled, onRejected){
	      var reaction    = newPromiseCapability(speciesConstructor(this, $Promise));
	      reaction.ok     = typeof onFulfilled == 'function' ? onFulfilled : true;
	      reaction.fail   = typeof onRejected == 'function' && onRejected;
	      reaction.domain = isNode ? process.domain : undefined;
	      this._c.push(reaction);
	      if(this._a)this._a.push(reaction);
	      if(this._s)notify(this, false);
	      return reaction.promise;
	    },
	    // 25.4.5.1 Promise.prototype.catch(onRejected)
	    'catch': function(onRejected){
	      return this.then(undefined, onRejected);
	    }
	  });
	  PromiseCapability = function(){
	    var promise  = new Internal;
	    this.promise = promise;
	    this.resolve = ctx($resolve, promise, 1);
	    this.reject  = ctx($reject, promise, 1);
	  };
	}

	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: $Promise});
	__webpack_require__(25)($Promise, PROMISE);
	__webpack_require__(193)(PROMISE);
	Wrapper = __webpack_require__(10)[PROMISE];

	// statics
	$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
	  // 25.4.4.5 Promise.reject(r)
	  reject: function reject(r){
	    var capability = newPromiseCapability(this)
	      , $$reject   = capability.reject;
	    $$reject(r);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
	  // 25.4.4.6 Promise.resolve(x)
	  resolve: function resolve(x){
	    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
	    if(x instanceof $Promise && sameConstructor(x.constructor, this))return x;
	    var capability = newPromiseCapability(this)
	      , $$resolve  = capability.resolve;
	    $$resolve(x);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(166)(function(iter){
	  $Promise.all(iter)['catch'](empty);
	})), PROMISE, {
	  // 25.4.4.1 Promise.all(iterable)
	  all: function all(iterable){
	    var C          = this
	      , capability = newPromiseCapability(C)
	      , resolve    = capability.resolve
	      , reject     = capability.reject;
	    var abrupt = perform(function(){
	      var values    = []
	        , index     = 0
	        , remaining = 1;
	      forOf(iterable, false, function(promise){
	        var $index        = index++
	          , alreadyCalled = false;
	        values.push(undefined);
	        remaining++;
	        C.resolve(promise).then(function(value){
	          if(alreadyCalled)return;
	          alreadyCalled  = true;
	          values[$index] = value;
	          --remaining || resolve(values);
	        }, reject);
	      });
	      --remaining || resolve(values);
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  },
	  // 25.4.4.4 Promise.race(iterable)
	  race: function race(iterable){
	    var C          = this
	      , capability = newPromiseCapability(C)
	      , reject     = capability.reject;
	    var abrupt = perform(function(){
	      forOf(iterable, false, function(promise){
	        C.resolve(promise).then(capability.resolve, reject);
	      });
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  }
	});

/***/ },
/* 206 */
/***/ function(module, exports) {

	module.exports = function(it, Constructor, name, forbiddenField){
	  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
	    throw TypeError(name + ': incorrect invocation!');
	  } return it;
	};

/***/ },
/* 207 */
/***/ function(module, exports, __webpack_require__) {

	var ctx         = __webpack_require__(21)
	  , call        = __webpack_require__(162)
	  , isArrayIter = __webpack_require__(163)
	  , anObject    = __webpack_require__(13)
	  , toLength    = __webpack_require__(38)
	  , getIterFn   = __webpack_require__(165)
	  , BREAK       = {}
	  , RETURN      = {};
	var exports = module.exports = function(iterable, entries, fn, that, ITERATOR){
	  var iterFn = ITERATOR ? function(){ return iterable; } : getIterFn(iterable)
	    , f      = ctx(fn, that, entries ? 2 : 1)
	    , index  = 0
	    , length, step, iterator, result;
	  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
	    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	    if(result === BREAK || result === RETURN)return result;
	  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
	    result = call(iterator, f, step.value, entries);
	    if(result === BREAK || result === RETURN)return result;
	  }
	};
	exports.BREAK  = BREAK;
	exports.RETURN = RETURN;

/***/ },
/* 208 */
/***/ function(module, exports, __webpack_require__) {

	// 7.3.20 SpeciesConstructor(O, defaultConstructor)
	var anObject  = __webpack_require__(13)
	  , aFunction = __webpack_require__(22)
	  , SPECIES   = __webpack_require__(26)('species');
	module.exports = function(O, D){
	  var C = anObject(O).constructor, S;
	  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
	};

/***/ },
/* 209 */
/***/ function(module, exports, __webpack_require__) {

	var ctx                = __webpack_require__(21)
	  , invoke             = __webpack_require__(79)
	  , html               = __webpack_require__(49)
	  , cel                = __webpack_require__(16)
	  , global             = __webpack_require__(5)
	  , process            = global.process
	  , setTask            = global.setImmediate
	  , clearTask          = global.clearImmediate
	  , MessageChannel     = global.MessageChannel
	  , counter            = 0
	  , queue              = {}
	  , ONREADYSTATECHANGE = 'onreadystatechange'
	  , defer, channel, port;
	var run = function(){
	  var id = +this;
	  if(queue.hasOwnProperty(id)){
	    var fn = queue[id];
	    delete queue[id];
	    fn();
	  }
	};
	var listener = function(event){
	  run.call(event.data);
	};
	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if(!setTask || !clearTask){
	  setTask = function setImmediate(fn){
	    var args = [], i = 1;
	    while(arguments.length > i)args.push(arguments[i++]);
	    queue[++counter] = function(){
	      invoke(typeof fn == 'function' ? fn : Function(fn), args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clearTask = function clearImmediate(id){
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if(__webpack_require__(35)(process) == 'process'){
	    defer = function(id){
	      process.nextTick(ctx(run, id, 1));
	    };
	  // Browsers with MessageChannel, includes WebWorkers
	  } else if(MessageChannel){
	    channel = new MessageChannel;
	    port    = channel.port2;
	    channel.port1.onmessage = listener;
	    defer = ctx(port.postMessage, port, 1);
	  // Browsers with postMessage, skip WebWorkers
	  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
	    defer = function(id){
	      global.postMessage(id + '', '*');
	    };
	    global.addEventListener('message', listener, false);
	  // IE8-
	  } else if(ONREADYSTATECHANGE in cel('script')){
	    defer = function(id){
	      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
	        html.removeChild(this);
	        run.call(id);
	      };
	    };
	  // Rest old browsers
	  } else {
	    defer = function(id){
	      setTimeout(ctx(run, id, 1), 0);
	    };
	  }
	}
	module.exports = {
	  set:   setTask,
	  clear: clearTask
	};

/***/ },
/* 210 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(5)
	  , macrotask = __webpack_require__(209).set
	  , Observer  = global.MutationObserver || global.WebKitMutationObserver
	  , process   = global.process
	  , Promise   = global.Promise
	  , isNode    = __webpack_require__(35)(process) == 'process';

	module.exports = function(){
	  var head, last, notify;

	  var flush = function(){
	    var parent, fn;
	    if(isNode && (parent = process.domain))parent.exit();
	    while(head){
	      fn   = head.fn;
	      head = head.next;
	      try {
	        fn();
	      } catch(e){
	        if(head)notify();
	        else last = undefined;
	        throw e;
	      }
	    } last = undefined;
	    if(parent)parent.enter();
	  };

	  // Node.js
	  if(isNode){
	    notify = function(){
	      process.nextTick(flush);
	    };
	  // browsers with MutationObserver
	  } else if(Observer){
	    var toggle = true
	      , node   = document.createTextNode('');
	    new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
	    notify = function(){
	      node.data = toggle = !toggle;
	    };
	  // environments with maybe non-completely correct, but existent Promise
	  } else if(Promise && Promise.resolve){
	    var promise = Promise.resolve();
	    notify = function(){
	      promise.then(flush);
	    };
	  // for other environments - macrotask based on:
	  // - setImmediate
	  // - MessageChannel
	  // - window.postMessag
	  // - onreadystatechange
	  // - setTimeout
	  } else {
	    notify = function(){
	      // strange IE + webpack dev server bug - use .call(global)
	      macrotask.call(global, flush);
	    };
	  }

	  return function(fn){
	    var task = {fn: fn, next: undefined};
	    if(last)last.next = task;
	    if(!head){
	      head = task;
	      notify();
	    } last = task;
	  };
	};

/***/ },
/* 211 */
/***/ function(module, exports, __webpack_require__) {

	var redefine = __webpack_require__(19);
	module.exports = function(target, src, safe){
	  for(var key in src)redefine(target, key, src[key], safe);
	  return target;
	};

/***/ },
/* 212 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strong = __webpack_require__(213);

	// 23.1 Map Objects
	module.exports = __webpack_require__(214)('Map', function(get){
	  return function Map(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.1.3.6 Map.prototype.get(key)
	  get: function get(key){
	    var entry = strong.getEntry(this, key);
	    return entry && entry.v;
	  },
	  // 23.1.3.9 Map.prototype.set(key, value)
	  set: function set(key, value){
	    return strong.def(this, key === 0 ? 0 : key, value);
	  }
	}, strong, true);

/***/ },
/* 213 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var dP          = __webpack_require__(12).f
	  , create      = __webpack_require__(47)
	  , redefineAll = __webpack_require__(211)
	  , ctx         = __webpack_require__(21)
	  , anInstance  = __webpack_require__(206)
	  , defined     = __webpack_require__(36)
	  , forOf       = __webpack_require__(207)
	  , $iterDefine = __webpack_require__(129)
	  , step        = __webpack_require__(195)
	  , setSpecies  = __webpack_require__(193)
	  , DESCRIPTORS = __webpack_require__(7)
	  , fastKey     = __webpack_require__(23).fastKey
	  , SIZE        = DESCRIPTORS ? '_s' : 'size';

	var getEntry = function(that, key){
	  // fast case
	  var index = fastKey(key), entry;
	  if(index !== 'F')return that._i[index];
	  // frozen object case
	  for(entry = that._f; entry; entry = entry.n){
	    if(entry.k == key)return entry;
	  }
	};

	module.exports = {
	  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
	    var C = wrapper(function(that, iterable){
	      anInstance(that, C, NAME, '_i');
	      that._i = create(null); // index
	      that._f = undefined;    // first entry
	      that._l = undefined;    // last entry
	      that[SIZE] = 0;         // size
	      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    redefineAll(C.prototype, {
	      // 23.1.3.1 Map.prototype.clear()
	      // 23.2.3.2 Set.prototype.clear()
	      clear: function clear(){
	        for(var that = this, data = that._i, entry = that._f; entry; entry = entry.n){
	          entry.r = true;
	          if(entry.p)entry.p = entry.p.n = undefined;
	          delete data[entry.i];
	        }
	        that._f = that._l = undefined;
	        that[SIZE] = 0;
	      },
	      // 23.1.3.3 Map.prototype.delete(key)
	      // 23.2.3.4 Set.prototype.delete(value)
	      'delete': function(key){
	        var that  = this
	          , entry = getEntry(that, key);
	        if(entry){
	          var next = entry.n
	            , prev = entry.p;
	          delete that._i[entry.i];
	          entry.r = true;
	          if(prev)prev.n = next;
	          if(next)next.p = prev;
	          if(that._f == entry)that._f = next;
	          if(that._l == entry)that._l = prev;
	          that[SIZE]--;
	        } return !!entry;
	      },
	      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
	      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
	      forEach: function forEach(callbackfn /*, that = undefined */){
	        anInstance(this, C, 'forEach');
	        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3)
	          , entry;
	        while(entry = entry ? entry.n : this._f){
	          f(entry.v, entry.k, this);
	          // revert to the last existing entry
	          while(entry && entry.r)entry = entry.p;
	        }
	      },
	      // 23.1.3.7 Map.prototype.has(key)
	      // 23.2.3.7 Set.prototype.has(value)
	      has: function has(key){
	        return !!getEntry(this, key);
	      }
	    });
	    if(DESCRIPTORS)dP(C.prototype, 'size', {
	      get: function(){
	        return defined(this[SIZE]);
	      }
	    });
	    return C;
	  },
	  def: function(that, key, value){
	    var entry = getEntry(that, key)
	      , prev, index;
	    // change existing entry
	    if(entry){
	      entry.v = value;
	    // create new entry
	    } else {
	      that._l = entry = {
	        i: index = fastKey(key, true), // <- index
	        k: key,                        // <- key
	        v: value,                      // <- value
	        p: prev = that._l,             // <- previous entry
	        n: undefined,                  // <- next entry
	        r: false                       // <- removed
	      };
	      if(!that._f)that._f = entry;
	      if(prev)prev.n = entry;
	      that[SIZE]++;
	      // add to index
	      if(index !== 'F')that._i[index] = entry;
	    } return that;
	  },
	  getEntry: getEntry,
	  setStrong: function(C, NAME, IS_MAP){
	    // add .keys, .values, .entries, [@@iterator]
	    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
	    $iterDefine(C, NAME, function(iterated, kind){
	      this._t = iterated;  // target
	      this._k = kind;      // kind
	      this._l = undefined; // previous
	    }, function(){
	      var that  = this
	        , kind  = that._k
	        , entry = that._l;
	      // revert to the last existing entry
	      while(entry && entry.r)entry = entry.p;
	      // get next entry
	      if(!that._t || !(that._l = entry = entry ? entry.n : that._t._f)){
	        // or finish the iteration
	        that._t = undefined;
	        return step(1);
	      }
	      // return step by kind
	      if(kind == 'keys'  )return step(0, entry.k);
	      if(kind == 'values')return step(0, entry.v);
	      return step(0, [entry.k, entry.v]);
	    }, IS_MAP ? 'entries' : 'values' , !IS_MAP, true);

	    // add [@@species], 23.1.2.2, 23.2.2.2
	    setSpecies(NAME);
	  }
	};

/***/ },
/* 214 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global            = __webpack_require__(5)
	  , $export           = __webpack_require__(9)
	  , redefine          = __webpack_require__(19)
	  , redefineAll       = __webpack_require__(211)
	  , meta              = __webpack_require__(23)
	  , forOf             = __webpack_require__(207)
	  , anInstance        = __webpack_require__(206)
	  , isObject          = __webpack_require__(14)
	  , fails             = __webpack_require__(8)
	  , $iterDetect       = __webpack_require__(166)
	  , setToStringTag    = __webpack_require__(25)
	  , inheritIfRequired = __webpack_require__(89);

	module.exports = function(NAME, wrapper, methods, common, IS_MAP, IS_WEAK){
	  var Base  = global[NAME]
	    , C     = Base
	    , ADDER = IS_MAP ? 'set' : 'add'
	    , proto = C && C.prototype
	    , O     = {};
	  var fixMethod = function(KEY){
	    var fn = proto[KEY];
	    redefine(proto, KEY,
	      KEY == 'delete' ? function(a){
	        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'has' ? function has(a){
	        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'get' ? function get(a){
	        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'add' ? function add(a){ fn.call(this, a === 0 ? 0 : a); return this; }
	        : function set(a, b){ fn.call(this, a === 0 ? 0 : a, b); return this; }
	    );
	  };
	  if(typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function(){
	    new C().entries().next();
	  }))){
	    // create collection constructor
	    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
	    redefineAll(C.prototype, methods);
	    meta.NEED = true;
	  } else {
	    var instance             = new C
	      // early implementations not supports chaining
	      , HASNT_CHAINING       = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance
	      // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
	      , THROWS_ON_PRIMITIVES = fails(function(){ instance.has(1); })
	      // most early implementations doesn't supports iterables, most modern - not close it correctly
	      , ACCEPT_ITERABLES     = $iterDetect(function(iter){ new C(iter); }) // eslint-disable-line no-new
	      // for early implementations -0 and +0 not the same
	      , BUGGY_ZERO = !IS_WEAK && fails(function(){
	        // V8 ~ Chromium 42- fails only with 5+ elements
	        var $instance = new C()
	          , index     = 5;
	        while(index--)$instance[ADDER](index, index);
	        return !$instance.has(-0);
	      });
	    if(!ACCEPT_ITERABLES){ 
	      C = wrapper(function(target, iterable){
	        anInstance(target, C, NAME);
	        var that = inheritIfRequired(new Base, target, C);
	        if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	        return that;
	      });
	      C.prototype = proto;
	      proto.constructor = C;
	    }
	    if(THROWS_ON_PRIMITIVES || BUGGY_ZERO){
	      fixMethod('delete');
	      fixMethod('has');
	      IS_MAP && fixMethod('get');
	    }
	    if(BUGGY_ZERO || HASNT_CHAINING)fixMethod(ADDER);
	    // weak collections should not contains .clear method
	    if(IS_WEAK && proto.clear)delete proto.clear;
	  }

	  setToStringTag(C, NAME);

	  O[NAME] = C;
	  $export($export.G + $export.W + $export.F * (C != Base), O);

	  if(!IS_WEAK)common.setStrong(C, NAME, IS_MAP);

	  return C;
	};

/***/ },
/* 215 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strong = __webpack_require__(213);

	// 23.2 Set Objects
	module.exports = __webpack_require__(214)('Set', function(get){
	  return function Set(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.2.3.1 Set.prototype.add(value)
	  add: function add(value){
	    return strong.def(this, value = value === 0 ? 0 : value, value);
	  }
	}, strong);

/***/ },
/* 216 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var each         = __webpack_require__(173)(0)
	  , redefine     = __webpack_require__(19)
	  , meta         = __webpack_require__(23)
	  , assign       = __webpack_require__(70)
	  , weak         = __webpack_require__(217)
	  , isObject     = __webpack_require__(14)
	  , getWeak      = meta.getWeak
	  , isExtensible = Object.isExtensible
	  , uncaughtFrozenStore = weak.ufstore
	  , tmp          = {}
	  , InternalMap;

	var wrapper = function(get){
	  return function WeakMap(){
	    return get(this, arguments.length > 0 ? arguments[0] : undefined);
	  };
	};

	var methods = {
	  // 23.3.3.3 WeakMap.prototype.get(key)
	  get: function get(key){
	    if(isObject(key)){
	      var data = getWeak(key);
	      if(data === true)return uncaughtFrozenStore(this).get(key);
	      return data ? data[this._i] : undefined;
	    }
	  },
	  // 23.3.3.5 WeakMap.prototype.set(key, value)
	  set: function set(key, value){
	    return weak.def(this, key, value);
	  }
	};

	// 23.3 WeakMap Objects
	var $WeakMap = module.exports = __webpack_require__(214)('WeakMap', wrapper, methods, weak, true, true);

	// IE11 WeakMap frozen keys fix
	if(new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7){
	  InternalMap = weak.getConstructor(wrapper);
	  assign(InternalMap.prototype, methods);
	  meta.NEED = true;
	  each(['delete', 'has', 'get', 'set'], function(key){
	    var proto  = $WeakMap.prototype
	      , method = proto[key];
	    redefine(proto, key, function(a, b){
	      // store frozen objects on internal weakmap shim
	      if(isObject(a) && !isExtensible(a)){
	        if(!this._f)this._f = new InternalMap;
	        var result = this._f[key](a, b);
	        return key == 'set' ? this : result;
	      // store all the rest on native weakmap
	      } return method.call(this, a, b);
	    });
	  });
	}

/***/ },
/* 217 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var redefineAll       = __webpack_require__(211)
	  , getWeak           = __webpack_require__(23).getWeak
	  , anObject          = __webpack_require__(13)
	  , isObject          = __webpack_require__(14)
	  , anInstance        = __webpack_require__(206)
	  , forOf             = __webpack_require__(207)
	  , createArrayMethod = __webpack_require__(173)
	  , $has              = __webpack_require__(6)
	  , arrayFind         = createArrayMethod(5)
	  , arrayFindIndex    = createArrayMethod(6)
	  , id                = 0;

	// fallback for uncaught frozen keys
	var uncaughtFrozenStore = function(that){
	  return that._l || (that._l = new UncaughtFrozenStore);
	};
	var UncaughtFrozenStore = function(){
	  this.a = [];
	};
	var findUncaughtFrozen = function(store, key){
	  return arrayFind(store.a, function(it){
	    return it[0] === key;
	  });
	};
	UncaughtFrozenStore.prototype = {
	  get: function(key){
	    var entry = findUncaughtFrozen(this, key);
	    if(entry)return entry[1];
	  },
	  has: function(key){
	    return !!findUncaughtFrozen(this, key);
	  },
	  set: function(key, value){
	    var entry = findUncaughtFrozen(this, key);
	    if(entry)entry[1] = value;
	    else this.a.push([key, value]);
	  },
	  'delete': function(key){
	    var index = arrayFindIndex(this.a, function(it){
	      return it[0] === key;
	    });
	    if(~index)this.a.splice(index, 1);
	    return !!~index;
	  }
	};

	module.exports = {
	  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
	    var C = wrapper(function(that, iterable){
	      anInstance(that, C, NAME, '_i');
	      that._i = id++;      // collection id
	      that._l = undefined; // leak store for uncaught frozen objects
	      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    redefineAll(C.prototype, {
	      // 23.3.3.2 WeakMap.prototype.delete(key)
	      // 23.4.3.3 WeakSet.prototype.delete(value)
	      'delete': function(key){
	        if(!isObject(key))return false;
	        var data = getWeak(key);
	        if(data === true)return uncaughtFrozenStore(this)['delete'](key);
	        return data && $has(data, this._i) && delete data[this._i];
	      },
	      // 23.3.3.4 WeakMap.prototype.has(key)
	      // 23.4.3.4 WeakSet.prototype.has(value)
	      has: function has(key){
	        if(!isObject(key))return false;
	        var data = getWeak(key);
	        if(data === true)return uncaughtFrozenStore(this).has(key);
	        return data && $has(data, this._i);
	      }
	    });
	    return C;
	  },
	  def: function(that, key, value){
	    var data = getWeak(anObject(key), true);
	    if(data === true)uncaughtFrozenStore(that).set(key, value);
	    else data[that._i] = value;
	    return that;
	  },
	  ufstore: uncaughtFrozenStore
	};

/***/ },
/* 218 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var weak = __webpack_require__(217);

	// 23.4 WeakSet Objects
	__webpack_require__(214)('WeakSet', function(get){
	  return function WeakSet(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.4.3.1 WeakSet.prototype.add(value)
	  add: function add(value){
	    return weak.def(this, value, true);
	  }
	}, weak, false, true);

/***/ },
/* 219 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export      = __webpack_require__(9)
	  , $typed       = __webpack_require__(220)
	  , buffer       = __webpack_require__(221)
	  , anObject     = __webpack_require__(13)
	  , toIndex      = __webpack_require__(40)
	  , toLength     = __webpack_require__(38)
	  , isObject     = __webpack_require__(14)
	  , ArrayBuffer  = __webpack_require__(5).ArrayBuffer
	  , speciesConstructor = __webpack_require__(208)
	  , $ArrayBuffer = buffer.ArrayBuffer
	  , $DataView    = buffer.DataView
	  , $isView      = $typed.ABV && ArrayBuffer.isView
	  , $slice       = $ArrayBuffer.prototype.slice
	  , VIEW         = $typed.VIEW
	  , ARRAY_BUFFER = 'ArrayBuffer';

	$export($export.G + $export.W + $export.F * (ArrayBuffer !== $ArrayBuffer), {ArrayBuffer: $ArrayBuffer});

	$export($export.S + $export.F * !$typed.CONSTR, ARRAY_BUFFER, {
	  // 24.1.3.1 ArrayBuffer.isView(arg)
	  isView: function isView(it){
	    return $isView && $isView(it) || isObject(it) && VIEW in it;
	  }
	});

	$export($export.P + $export.U + $export.F * __webpack_require__(8)(function(){
	  return !new $ArrayBuffer(2).slice(1, undefined).byteLength;
	}), ARRAY_BUFFER, {
	  // 24.1.4.3 ArrayBuffer.prototype.slice(start, end)
	  slice: function slice(start, end){
	    if($slice !== undefined && end === undefined)return $slice.call(anObject(this), start); // FF fix
	    var len    = anObject(this).byteLength
	      , first  = toIndex(start, len)
	      , final  = toIndex(end === undefined ? len : end, len)
	      , result = new (speciesConstructor(this, $ArrayBuffer))(toLength(final - first))
	      , viewS  = new $DataView(this)
	      , viewT  = new $DataView(result)
	      , index  = 0;
	    while(first < final){
	      viewT.setUint8(index++, viewS.getUint8(first++));
	    } return result;
	  }
	});

	__webpack_require__(193)(ARRAY_BUFFER);

/***/ },
/* 220 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(5)
	  , hide   = __webpack_require__(11)
	  , uid    = __webpack_require__(20)
	  , TYPED  = uid('typed_array')
	  , VIEW   = uid('view')
	  , ABV    = !!(global.ArrayBuffer && global.DataView)
	  , CONSTR = ABV
	  , i = 0, l = 9, Typed;

	var TypedArrayConstructors = (
	  'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'
	).split(',');

	while(i < l){
	  if(Typed = global[TypedArrayConstructors[i++]]){
	    hide(Typed.prototype, TYPED, true);
	    hide(Typed.prototype, VIEW, true);
	  } else CONSTR = false;
	}

	module.exports = {
	  ABV:    ABV,
	  CONSTR: CONSTR,
	  TYPED:  TYPED,
	  VIEW:   VIEW
	};

/***/ },
/* 221 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global         = __webpack_require__(5)
	  , DESCRIPTORS    = __webpack_require__(7)
	  , LIBRARY        = __webpack_require__(29)
	  , $typed         = __webpack_require__(220)
	  , hide           = __webpack_require__(11)
	  , redefineAll    = __webpack_require__(211)
	  , fails          = __webpack_require__(8)
	  , anInstance     = __webpack_require__(206)
	  , toInteger      = __webpack_require__(39)
	  , toLength       = __webpack_require__(38)
	  , gOPN           = __webpack_require__(51).f
	  , dP             = __webpack_require__(12).f
	  , arrayFill      = __webpack_require__(189)
	  , setToStringTag = __webpack_require__(25)
	  , ARRAY_BUFFER   = 'ArrayBuffer'
	  , DATA_VIEW      = 'DataView'
	  , PROTOTYPE      = 'prototype'
	  , WRONG_LENGTH   = 'Wrong length!'
	  , WRONG_INDEX    = 'Wrong index!'
	  , $ArrayBuffer   = global[ARRAY_BUFFER]
	  , $DataView      = global[DATA_VIEW]
	  , Math           = global.Math
	  , RangeError     = global.RangeError
	  , Infinity       = global.Infinity
	  , BaseBuffer     = $ArrayBuffer
	  , abs            = Math.abs
	  , pow            = Math.pow
	  , floor          = Math.floor
	  , log            = Math.log
	  , LN2            = Math.LN2
	  , BUFFER         = 'buffer'
	  , BYTE_LENGTH    = 'byteLength'
	  , BYTE_OFFSET    = 'byteOffset'
	  , $BUFFER        = DESCRIPTORS ? '_b' : BUFFER
	  , $LENGTH        = DESCRIPTORS ? '_l' : BYTE_LENGTH
	  , $OFFSET        = DESCRIPTORS ? '_o' : BYTE_OFFSET;

	// IEEE754 conversions based on https://github.com/feross/ieee754
	var packIEEE754 = function(value, mLen, nBytes){
	  var buffer = Array(nBytes)
	    , eLen   = nBytes * 8 - mLen - 1
	    , eMax   = (1 << eLen) - 1
	    , eBias  = eMax >> 1
	    , rt     = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0
	    , i      = 0
	    , s      = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0
	    , e, m, c;
	  value = abs(value)
	  if(value != value || value === Infinity){
	    m = value != value ? 1 : 0;
	    e = eMax;
	  } else {
	    e = floor(log(value) / LN2);
	    if(value * (c = pow(2, -e)) < 1){
	      e--;
	      c *= 2;
	    }
	    if(e + eBias >= 1){
	      value += rt / c;
	    } else {
	      value += rt * pow(2, 1 - eBias);
	    }
	    if(value * c >= 2){
	      e++;
	      c /= 2;
	    }
	    if(e + eBias >= eMax){
	      m = 0;
	      e = eMax;
	    } else if(e + eBias >= 1){
	      m = (value * c - 1) * pow(2, mLen);
	      e = e + eBias;
	    } else {
	      m = value * pow(2, eBias - 1) * pow(2, mLen);
	      e = 0;
	    }
	  }
	  for(; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8);
	  e = e << mLen | m;
	  eLen += mLen;
	  for(; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8);
	  buffer[--i] |= s * 128;
	  return buffer;
	};
	var unpackIEEE754 = function(buffer, mLen, nBytes){
	  var eLen  = nBytes * 8 - mLen - 1
	    , eMax  = (1 << eLen) - 1
	    , eBias = eMax >> 1
	    , nBits = eLen - 7
	    , i     = nBytes - 1
	    , s     = buffer[i--]
	    , e     = s & 127
	    , m;
	  s >>= 7;
	  for(; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8);
	  m = e & (1 << -nBits) - 1;
	  e >>= -nBits;
	  nBits += mLen;
	  for(; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8);
	  if(e === 0){
	    e = 1 - eBias;
	  } else if(e === eMax){
	    return m ? NaN : s ? -Infinity : Infinity;
	  } else {
	    m = m + pow(2, mLen);
	    e = e - eBias;
	  } return (s ? -1 : 1) * m * pow(2, e - mLen);
	};

	var unpackI32 = function(bytes){
	  return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];
	};
	var packI8 = function(it){
	  return [it & 0xff];
	};
	var packI16 = function(it){
	  return [it & 0xff, it >> 8 & 0xff];
	};
	var packI32 = function(it){
	  return [it & 0xff, it >> 8 & 0xff, it >> 16 & 0xff, it >> 24 & 0xff];
	};
	var packF64 = function(it){
	  return packIEEE754(it, 52, 8);
	};
	var packF32 = function(it){
	  return packIEEE754(it, 23, 4);
	};

	var addGetter = function(C, key, internal){
	  dP(C[PROTOTYPE], key, {get: function(){ return this[internal]; }});
	};

	var get = function(view, bytes, index, isLittleEndian){
	  var numIndex = +index
	    , intIndex = toInteger(numIndex);
	  if(numIndex != intIndex || intIndex < 0 || intIndex + bytes > view[$LENGTH])throw RangeError(WRONG_INDEX);
	  var store = view[$BUFFER]._b
	    , start = intIndex + view[$OFFSET]
	    , pack  = store.slice(start, start + bytes);
	  return isLittleEndian ? pack : pack.reverse();
	};
	var set = function(view, bytes, index, conversion, value, isLittleEndian){
	  var numIndex = +index
	    , intIndex = toInteger(numIndex);
	  if(numIndex != intIndex || intIndex < 0 || intIndex + bytes > view[$LENGTH])throw RangeError(WRONG_INDEX);
	  var store = view[$BUFFER]._b
	    , start = intIndex + view[$OFFSET]
	    , pack  = conversion(+value);
	  for(var i = 0; i < bytes; i++)store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];
	};

	var validateArrayBufferArguments = function(that, length){
	  anInstance(that, $ArrayBuffer, ARRAY_BUFFER);
	  var numberLength = +length
	    , byteLength   = toLength(numberLength);
	  if(numberLength != byteLength)throw RangeError(WRONG_LENGTH);
	  return byteLength;
	};

	if(!$typed.ABV){
	  $ArrayBuffer = function ArrayBuffer(length){
	    var byteLength = validateArrayBufferArguments(this, length);
	    this._b       = arrayFill.call(Array(byteLength), 0);
	    this[$LENGTH] = byteLength;
	  };

	  $DataView = function DataView(buffer, byteOffset, byteLength){
	    anInstance(this, $DataView, DATA_VIEW);
	    anInstance(buffer, $ArrayBuffer, DATA_VIEW);
	    var bufferLength = buffer[$LENGTH]
	      , offset       = toInteger(byteOffset);
	    if(offset < 0 || offset > bufferLength)throw RangeError('Wrong offset!');
	    byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
	    if(offset + byteLength > bufferLength)throw RangeError(WRONG_LENGTH);
	    this[$BUFFER] = buffer;
	    this[$OFFSET] = offset;
	    this[$LENGTH] = byteLength;
	  };

	  if(DESCRIPTORS){
	    addGetter($ArrayBuffer, BYTE_LENGTH, '_l');
	    addGetter($DataView, BUFFER, '_b');
	    addGetter($DataView, BYTE_LENGTH, '_l');
	    addGetter($DataView, BYTE_OFFSET, '_o');
	  }

	  redefineAll($DataView[PROTOTYPE], {
	    getInt8: function getInt8(byteOffset){
	      return get(this, 1, byteOffset)[0] << 24 >> 24;
	    },
	    getUint8: function getUint8(byteOffset){
	      return get(this, 1, byteOffset)[0];
	    },
	    getInt16: function getInt16(byteOffset /*, littleEndian */){
	      var bytes = get(this, 2, byteOffset, arguments[1]);
	      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
	    },
	    getUint16: function getUint16(byteOffset /*, littleEndian */){
	      var bytes = get(this, 2, byteOffset, arguments[1]);
	      return bytes[1] << 8 | bytes[0];
	    },
	    getInt32: function getInt32(byteOffset /*, littleEndian */){
	      return unpackI32(get(this, 4, byteOffset, arguments[1]));
	    },
	    getUint32: function getUint32(byteOffset /*, littleEndian */){
	      return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;
	    },
	    getFloat32: function getFloat32(byteOffset /*, littleEndian */){
	      return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);
	    },
	    getFloat64: function getFloat64(byteOffset /*, littleEndian */){
	      return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);
	    },
	    setInt8: function setInt8(byteOffset, value){
	      set(this, 1, byteOffset, packI8, value);
	    },
	    setUint8: function setUint8(byteOffset, value){
	      set(this, 1, byteOffset, packI8, value);
	    },
	    setInt16: function setInt16(byteOffset, value /*, littleEndian */){
	      set(this, 2, byteOffset, packI16, value, arguments[2]);
	    },
	    setUint16: function setUint16(byteOffset, value /*, littleEndian */){
	      set(this, 2, byteOffset, packI16, value, arguments[2]);
	    },
	    setInt32: function setInt32(byteOffset, value /*, littleEndian */){
	      set(this, 4, byteOffset, packI32, value, arguments[2]);
	    },
	    setUint32: function setUint32(byteOffset, value /*, littleEndian */){
	      set(this, 4, byteOffset, packI32, value, arguments[2]);
	    },
	    setFloat32: function setFloat32(byteOffset, value /*, littleEndian */){
	      set(this, 4, byteOffset, packF32, value, arguments[2]);
	    },
	    setFloat64: function setFloat64(byteOffset, value /*, littleEndian */){
	      set(this, 8, byteOffset, packF64, value, arguments[2]);
	    }
	  });
	} else {
	  if(!fails(function(){
	    new $ArrayBuffer;     // eslint-disable-line no-new
	  }) || !fails(function(){
	    new $ArrayBuffer(.5); // eslint-disable-line no-new
	  })){
	    $ArrayBuffer = function ArrayBuffer(length){
	      return new BaseBuffer(validateArrayBufferArguments(this, length));
	    };
	    var ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];
	    for(var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j; ){
	      if(!((key = keys[j++]) in $ArrayBuffer))hide($ArrayBuffer, key, BaseBuffer[key]);
	    };
	    if(!LIBRARY)ArrayBufferProto.constructor = $ArrayBuffer;
	  }
	  // iOS Safari 7.x bug
	  var view = new $DataView(new $ArrayBuffer(2))
	    , $setInt8 = $DataView[PROTOTYPE].setInt8;
	  view.setInt8(0, 2147483648);
	  view.setInt8(1, 2147483649);
	  if(view.getInt8(0) || !view.getInt8(1))redefineAll($DataView[PROTOTYPE], {
	    setInt8: function setInt8(byteOffset, value){
	      $setInt8.call(this, byteOffset, value << 24 >> 24);
	    },
	    setUint8: function setUint8(byteOffset, value){
	      $setInt8.call(this, byteOffset, value << 24 >> 24);
	    }
	  }, true);
	}
	setToStringTag($ArrayBuffer, ARRAY_BUFFER);
	setToStringTag($DataView, DATA_VIEW);
	hide($DataView[PROTOTYPE], $typed.VIEW, true);
	exports[ARRAY_BUFFER] = $ArrayBuffer;
	exports[DATA_VIEW] = $DataView;

/***/ },
/* 222 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(9);
	$export($export.G + $export.W + $export.F * !__webpack_require__(220).ABV, {
	  DataView: __webpack_require__(221).DataView
	});

/***/ },
/* 223 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(224)('Int8', 1, function(init){
	  return function Int8Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 224 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	if(__webpack_require__(7)){
	  var LIBRARY             = __webpack_require__(29)
	    , global              = __webpack_require__(5)
	    , fails               = __webpack_require__(8)
	    , $export             = __webpack_require__(9)
	    , $typed              = __webpack_require__(220)
	    , $buffer             = __webpack_require__(221)
	    , ctx                 = __webpack_require__(21)
	    , anInstance          = __webpack_require__(206)
	    , propertyDesc        = __webpack_require__(18)
	    , hide                = __webpack_require__(11)
	    , redefineAll         = __webpack_require__(211)
	    , toInteger           = __webpack_require__(39)
	    , toLength            = __webpack_require__(38)
	    , toIndex             = __webpack_require__(40)
	    , toPrimitive         = __webpack_require__(17)
	    , has                 = __webpack_require__(6)
	    , same                = __webpack_require__(72)
	    , classof             = __webpack_require__(76)
	    , isObject            = __webpack_require__(14)
	    , toObject            = __webpack_require__(59)
	    , isArrayIter         = __webpack_require__(163)
	    , create              = __webpack_require__(47)
	    , getPrototypeOf      = __webpack_require__(60)
	    , gOPN                = __webpack_require__(51).f
	    , getIterFn           = __webpack_require__(165)
	    , uid                 = __webpack_require__(20)
	    , wks                 = __webpack_require__(26)
	    , createArrayMethod   = __webpack_require__(173)
	    , createArrayIncludes = __webpack_require__(37)
	    , speciesConstructor  = __webpack_require__(208)
	    , ArrayIterators      = __webpack_require__(194)
	    , Iterators           = __webpack_require__(130)
	    , $iterDetect         = __webpack_require__(166)
	    , setSpecies          = __webpack_require__(193)
	    , arrayFill           = __webpack_require__(189)
	    , arrayCopyWithin     = __webpack_require__(186)
	    , $DP                 = __webpack_require__(12)
	    , $GOPD               = __webpack_require__(52)
	    , dP                  = $DP.f
	    , gOPD                = $GOPD.f
	    , RangeError          = global.RangeError
	    , TypeError           = global.TypeError
	    , Uint8Array          = global.Uint8Array
	    , ARRAY_BUFFER        = 'ArrayBuffer'
	    , SHARED_BUFFER       = 'Shared' + ARRAY_BUFFER
	    , BYTES_PER_ELEMENT   = 'BYTES_PER_ELEMENT'
	    , PROTOTYPE           = 'prototype'
	    , ArrayProto          = Array[PROTOTYPE]
	    , $ArrayBuffer        = $buffer.ArrayBuffer
	    , $DataView           = $buffer.DataView
	    , arrayForEach        = createArrayMethod(0)
	    , arrayFilter         = createArrayMethod(2)
	    , arraySome           = createArrayMethod(3)
	    , arrayEvery          = createArrayMethod(4)
	    , arrayFind           = createArrayMethod(5)
	    , arrayFindIndex      = createArrayMethod(6)
	    , arrayIncludes       = createArrayIncludes(true)
	    , arrayIndexOf        = createArrayIncludes(false)
	    , arrayValues         = ArrayIterators.values
	    , arrayKeys           = ArrayIterators.keys
	    , arrayEntries        = ArrayIterators.entries
	    , arrayLastIndexOf    = ArrayProto.lastIndexOf
	    , arrayReduce         = ArrayProto.reduce
	    , arrayReduceRight    = ArrayProto.reduceRight
	    , arrayJoin           = ArrayProto.join
	    , arraySort           = ArrayProto.sort
	    , arraySlice          = ArrayProto.slice
	    , arrayToString       = ArrayProto.toString
	    , arrayToLocaleString = ArrayProto.toLocaleString
	    , ITERATOR            = wks('iterator')
	    , TAG                 = wks('toStringTag')
	    , TYPED_CONSTRUCTOR   = uid('typed_constructor')
	    , DEF_CONSTRUCTOR     = uid('def_constructor')
	    , ALL_CONSTRUCTORS    = $typed.CONSTR
	    , TYPED_ARRAY         = $typed.TYPED
	    , VIEW                = $typed.VIEW
	    , WRONG_LENGTH        = 'Wrong length!';

	  var $map = createArrayMethod(1, function(O, length){
	    return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);
	  });

	  var LITTLE_ENDIAN = fails(function(){
	    return new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;
	  });

	  var FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails(function(){
	    new Uint8Array(1).set({});
	  });

	  var strictToLength = function(it, SAME){
	    if(it === undefined)throw TypeError(WRONG_LENGTH);
	    var number = +it
	      , length = toLength(it);
	    if(SAME && !same(number, length))throw RangeError(WRONG_LENGTH);
	    return length;
	  };

	  var toOffset = function(it, BYTES){
	    var offset = toInteger(it);
	    if(offset < 0 || offset % BYTES)throw RangeError('Wrong offset!');
	    return offset;
	  };

	  var validate = function(it){
	    if(isObject(it) && TYPED_ARRAY in it)return it;
	    throw TypeError(it + ' is not a typed array!');
	  };

	  var allocate = function(C, length){
	    if(!(isObject(C) && TYPED_CONSTRUCTOR in C)){
	      throw TypeError('It is not a typed array constructor!');
	    } return new C(length);
	  };

	  var speciesFromList = function(O, list){
	    return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);
	  };

	  var fromList = function(C, list){
	    var index  = 0
	      , length = list.length
	      , result = allocate(C, length);
	    while(length > index)result[index] = list[index++];
	    return result;
	  };

	  var addGetter = function(it, key, internal){
	    dP(it, key, {get: function(){ return this._d[internal]; }});
	  };

	  var $from = function from(source /*, mapfn, thisArg */){
	    var O       = toObject(source)
	      , aLen    = arguments.length
	      , mapfn   = aLen > 1 ? arguments[1] : undefined
	      , mapping = mapfn !== undefined
	      , iterFn  = getIterFn(O)
	      , i, length, values, result, step, iterator;
	    if(iterFn != undefined && !isArrayIter(iterFn)){
	      for(iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++){
	        values.push(step.value);
	      } O = values;
	    }
	    if(mapping && aLen > 2)mapfn = ctx(mapfn, arguments[2], 2);
	    for(i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++){
	      result[i] = mapping ? mapfn(O[i], i) : O[i];
	    }
	    return result;
	  };

	  var $of = function of(/*...items*/){
	    var index  = 0
	      , length = arguments.length
	      , result = allocate(this, length);
	    while(length > index)result[index] = arguments[index++];
	    return result;
	  };

	  // iOS Safari 6.x fails here
	  var TO_LOCALE_BUG = !!Uint8Array && fails(function(){ arrayToLocaleString.call(new Uint8Array(1)); });

	  var $toLocaleString = function toLocaleString(){
	    return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);
	  };

	  var proto = {
	    copyWithin: function copyWithin(target, start /*, end */){
	      return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
	    },
	    every: function every(callbackfn /*, thisArg */){
	      return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    fill: function fill(value /*, start, end */){ // eslint-disable-line no-unused-vars
	      return arrayFill.apply(validate(this), arguments);
	    },
	    filter: function filter(callbackfn /*, thisArg */){
	      return speciesFromList(this, arrayFilter(validate(this), callbackfn,
	        arguments.length > 1 ? arguments[1] : undefined));
	    },
	    find: function find(predicate /*, thisArg */){
	      return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    findIndex: function findIndex(predicate /*, thisArg */){
	      return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    forEach: function forEach(callbackfn /*, thisArg */){
	      arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    indexOf: function indexOf(searchElement /*, fromIndex */){
	      return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    includes: function includes(searchElement /*, fromIndex */){
	      return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    join: function join(separator){ // eslint-disable-line no-unused-vars
	      return arrayJoin.apply(validate(this), arguments);
	    },
	    lastIndexOf: function lastIndexOf(searchElement /*, fromIndex */){ // eslint-disable-line no-unused-vars
	      return arrayLastIndexOf.apply(validate(this), arguments);
	    },
	    map: function map(mapfn /*, thisArg */){
	      return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    reduce: function reduce(callbackfn /*, initialValue */){ // eslint-disable-line no-unused-vars
	      return arrayReduce.apply(validate(this), arguments);
	    },
	    reduceRight: function reduceRight(callbackfn /*, initialValue */){ // eslint-disable-line no-unused-vars
	      return arrayReduceRight.apply(validate(this), arguments);
	    },
	    reverse: function reverse(){
	      var that   = this
	        , length = validate(that).length
	        , middle = Math.floor(length / 2)
	        , index  = 0
	        , value;
	      while(index < middle){
	        value         = that[index];
	        that[index++] = that[--length];
	        that[length]  = value;
	      } return that;
	    },
	    some: function some(callbackfn /*, thisArg */){
	      return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    sort: function sort(comparefn){
	      return arraySort.call(validate(this), comparefn);
	    },
	    subarray: function subarray(begin, end){
	      var O      = validate(this)
	        , length = O.length
	        , $begin = toIndex(begin, length);
	      return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(
	        O.buffer,
	        O.byteOffset + $begin * O.BYTES_PER_ELEMENT,
	        toLength((end === undefined ? length : toIndex(end, length)) - $begin)
	      );
	    }
	  };

	  var $slice = function slice(start, end){
	    return speciesFromList(this, arraySlice.call(validate(this), start, end));
	  };

	  var $set = function set(arrayLike /*, offset */){
	    validate(this);
	    var offset = toOffset(arguments[1], 1)
	      , length = this.length
	      , src    = toObject(arrayLike)
	      , len    = toLength(src.length)
	      , index  = 0;
	    if(len + offset > length)throw RangeError(WRONG_LENGTH);
	    while(index < len)this[offset + index] = src[index++];
	  };

	  var $iterators = {
	    entries: function entries(){
	      return arrayEntries.call(validate(this));
	    },
	    keys: function keys(){
	      return arrayKeys.call(validate(this));
	    },
	    values: function values(){
	      return arrayValues.call(validate(this));
	    }
	  };

	  var isTAIndex = function(target, key){
	    return isObject(target)
	      && target[TYPED_ARRAY]
	      && typeof key != 'symbol'
	      && key in target
	      && String(+key) == String(key);
	  };
	  var $getDesc = function getOwnPropertyDescriptor(target, key){
	    return isTAIndex(target, key = toPrimitive(key, true))
	      ? propertyDesc(2, target[key])
	      : gOPD(target, key);
	  };
	  var $setDesc = function defineProperty(target, key, desc){
	    if(isTAIndex(target, key = toPrimitive(key, true))
	      && isObject(desc)
	      && has(desc, 'value')
	      && !has(desc, 'get')
	      && !has(desc, 'set')
	      // TODO: add validation descriptor w/o calling accessors
	      && !desc.configurable
	      && (!has(desc, 'writable') || desc.writable)
	      && (!has(desc, 'enumerable') || desc.enumerable)
	    ){
	      target[key] = desc.value;
	      return target;
	    } else return dP(target, key, desc);
	  };

	  if(!ALL_CONSTRUCTORS){
	    $GOPD.f = $getDesc;
	    $DP.f   = $setDesc;
	  }

	  $export($export.S + $export.F * !ALL_CONSTRUCTORS, 'Object', {
	    getOwnPropertyDescriptor: $getDesc,
	    defineProperty:           $setDesc
	  });

	  if(fails(function(){ arrayToString.call({}); })){
	    arrayToString = arrayToLocaleString = function toString(){
	      return arrayJoin.call(this);
	    }
	  }

	  var $TypedArrayPrototype$ = redefineAll({}, proto);
	  redefineAll($TypedArrayPrototype$, $iterators);
	  hide($TypedArrayPrototype$, ITERATOR, $iterators.values);
	  redefineAll($TypedArrayPrototype$, {
	    slice:          $slice,
	    set:            $set,
	    constructor:    function(){ /* noop */ },
	    toString:       arrayToString,
	    toLocaleString: $toLocaleString
	  });
	  addGetter($TypedArrayPrototype$, 'buffer', 'b');
	  addGetter($TypedArrayPrototype$, 'byteOffset', 'o');
	  addGetter($TypedArrayPrototype$, 'byteLength', 'l');
	  addGetter($TypedArrayPrototype$, 'length', 'e');
	  dP($TypedArrayPrototype$, TAG, {
	    get: function(){ return this[TYPED_ARRAY]; }
	  });

	  module.exports = function(KEY, BYTES, wrapper, CLAMPED){
	    CLAMPED = !!CLAMPED;
	    var NAME       = KEY + (CLAMPED ? 'Clamped' : '') + 'Array'
	      , ISNT_UINT8 = NAME != 'Uint8Array'
	      , GETTER     = 'get' + KEY
	      , SETTER     = 'set' + KEY
	      , TypedArray = global[NAME]
	      , Base       = TypedArray || {}
	      , TAC        = TypedArray && getPrototypeOf(TypedArray)
	      , FORCED     = !TypedArray || !$typed.ABV
	      , O          = {}
	      , TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];
	    var getter = function(that, index){
	      var data = that._d;
	      return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);
	    };
	    var setter = function(that, index, value){
	      var data = that._d;
	      if(CLAMPED)value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;
	      data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);
	    };
	    var addElement = function(that, index){
	      dP(that, index, {
	        get: function(){
	          return getter(this, index);
	        },
	        set: function(value){
	          return setter(this, index, value);
	        },
	        enumerable: true
	      });
	    };
	    if(FORCED){
	      TypedArray = wrapper(function(that, data, $offset, $length){
	        anInstance(that, TypedArray, NAME, '_d');
	        var index  = 0
	          , offset = 0
	          , buffer, byteLength, length, klass;
	        if(!isObject(data)){
	          length     = strictToLength(data, true)
	          byteLength = length * BYTES;
	          buffer     = new $ArrayBuffer(byteLength);
	        } else if(data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER){
	          buffer = data;
	          offset = toOffset($offset, BYTES);
	          var $len = data.byteLength;
	          if($length === undefined){
	            if($len % BYTES)throw RangeError(WRONG_LENGTH);
	            byteLength = $len - offset;
	            if(byteLength < 0)throw RangeError(WRONG_LENGTH);
	          } else {
	            byteLength = toLength($length) * BYTES;
	            if(byteLength + offset > $len)throw RangeError(WRONG_LENGTH);
	          }
	          length = byteLength / BYTES;
	        } else if(TYPED_ARRAY in data){
	          return fromList(TypedArray, data);
	        } else {
	          return $from.call(TypedArray, data);
	        }
	        hide(that, '_d', {
	          b: buffer,
	          o: offset,
	          l: byteLength,
	          e: length,
	          v: new $DataView(buffer)
	        });
	        while(index < length)addElement(that, index++);
	      });
	      TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);
	      hide(TypedArrayPrototype, 'constructor', TypedArray);
	    } else if(!$iterDetect(function(iter){
	      // V8 works with iterators, but fails in many other cases
	      // https://code.google.com/p/v8/issues/detail?id=4552
	      new TypedArray(null); // eslint-disable-line no-new
	      new TypedArray(iter); // eslint-disable-line no-new
	    }, true)){
	      TypedArray = wrapper(function(that, data, $offset, $length){
	        anInstance(that, TypedArray, NAME);
	        var klass;
	        // `ws` module bug, temporarily remove validation length for Uint8Array
	        // https://github.com/websockets/ws/pull/645
	        if(!isObject(data))return new Base(strictToLength(data, ISNT_UINT8));
	        if(data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER){
	          return $length !== undefined
	            ? new Base(data, toOffset($offset, BYTES), $length)
	            : $offset !== undefined
	              ? new Base(data, toOffset($offset, BYTES))
	              : new Base(data);
	        }
	        if(TYPED_ARRAY in data)return fromList(TypedArray, data);
	        return $from.call(TypedArray, data);
	      });
	      arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function(key){
	        if(!(key in TypedArray))hide(TypedArray, key, Base[key]);
	      });
	      TypedArray[PROTOTYPE] = TypedArrayPrototype;
	      if(!LIBRARY)TypedArrayPrototype.constructor = TypedArray;
	    }
	    var $nativeIterator   = TypedArrayPrototype[ITERATOR]
	      , CORRECT_ITER_NAME = !!$nativeIterator && ($nativeIterator.name == 'values' || $nativeIterator.name == undefined)
	      , $iterator         = $iterators.values;
	    hide(TypedArray, TYPED_CONSTRUCTOR, true);
	    hide(TypedArrayPrototype, TYPED_ARRAY, NAME);
	    hide(TypedArrayPrototype, VIEW, true);
	    hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);

	    if(CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)){
	      dP(TypedArrayPrototype, TAG, {
	        get: function(){ return NAME; }
	      });
	    }

	    O[NAME] = TypedArray;

	    $export($export.G + $export.W + $export.F * (TypedArray != Base), O);

	    $export($export.S, NAME, {
	      BYTES_PER_ELEMENT: BYTES,
	      from: $from,
	      of: $of
	    });

	    if(!(BYTES_PER_ELEMENT in TypedArrayPrototype))hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);

	    $export($export.P, NAME, proto);

	    setSpecies(NAME);

	    $export($export.P + $export.F * FORCED_SET, NAME, {set: $set});

	    $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);

	    $export($export.P + $export.F * (TypedArrayPrototype.toString != arrayToString), NAME, {toString: arrayToString});

	    $export($export.P + $export.F * fails(function(){
	      new TypedArray(1).slice();
	    }), NAME, {slice: $slice});

	    $export($export.P + $export.F * (fails(function(){
	      return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString()
	    }) || !fails(function(){
	      TypedArrayPrototype.toLocaleString.call([1, 2]);
	    })), NAME, {toLocaleString: $toLocaleString});

	    Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;
	    if(!LIBRARY && !CORRECT_ITER_NAME)hide(TypedArrayPrototype, ITERATOR, $iterator);
	  };
	} else module.exports = function(){ /* empty */ };

/***/ },
/* 225 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(224)('Uint8', 1, function(init){
	  return function Uint8Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 226 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(224)('Uint8', 1, function(init){
	  return function Uint8ClampedArray(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	}, true);

/***/ },
/* 227 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(224)('Int16', 2, function(init){
	  return function Int16Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 228 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(224)('Uint16', 2, function(init){
	  return function Uint16Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 229 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(224)('Int32', 4, function(init){
	  return function Int32Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 230 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(224)('Uint32', 4, function(init){
	  return function Uint32Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 231 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(224)('Float32', 4, function(init){
	  return function Float32Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 232 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(224)('Float64', 8, function(init){
	  return function Float64Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 233 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
	var $export   = __webpack_require__(9)
	  , aFunction = __webpack_require__(22)
	  , anObject  = __webpack_require__(13)
	  , rApply    = (__webpack_require__(5).Reflect || {}).apply
	  , fApply    = Function.apply;
	// MS Edge argumentsList argument is optional
	$export($export.S + $export.F * !__webpack_require__(8)(function(){
	  rApply(function(){});
	}), 'Reflect', {
	  apply: function apply(target, thisArgument, argumentsList){
	    var T = aFunction(target)
	      , L = anObject(argumentsList);
	    return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);
	  }
	});

/***/ },
/* 234 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
	var $export    = __webpack_require__(9)
	  , create     = __webpack_require__(47)
	  , aFunction  = __webpack_require__(22)
	  , anObject   = __webpack_require__(13)
	  , isObject   = __webpack_require__(14)
	  , fails      = __webpack_require__(8)
	  , bind       = __webpack_require__(78)
	  , rConstruct = (__webpack_require__(5).Reflect || {}).construct;

	// MS Edge supports only 2 arguments and argumentsList argument is optional
	// FF Nightly sets third argument as `new.target`, but does not create `this` from it
	var NEW_TARGET_BUG = fails(function(){
	  function F(){}
	  return !(rConstruct(function(){}, [], F) instanceof F);
	});
	var ARGS_BUG = !fails(function(){
	  rConstruct(function(){});
	});

	$export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
	  construct: function construct(Target, args /*, newTarget*/){
	    aFunction(Target);
	    anObject(args);
	    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
	    if(ARGS_BUG && !NEW_TARGET_BUG)return rConstruct(Target, args, newTarget);
	    if(Target == newTarget){
	      // w/o altered newTarget, optimization for 0-4 arguments
	      switch(args.length){
	        case 0: return new Target;
	        case 1: return new Target(args[0]);
	        case 2: return new Target(args[0], args[1]);
	        case 3: return new Target(args[0], args[1], args[2]);
	        case 4: return new Target(args[0], args[1], args[2], args[3]);
	      }
	      // w/o altered newTarget, lot of arguments case
	      var $args = [null];
	      $args.push.apply($args, args);
	      return new (bind.apply(Target, $args));
	    }
	    // with altered newTarget, not support built-in constructors
	    var proto    = newTarget.prototype
	      , instance = create(isObject(proto) ? proto : Object.prototype)
	      , result   = Function.apply.call(Target, instance, args);
	    return isObject(result) ? result : instance;
	  }
	});

/***/ },
/* 235 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
	var dP          = __webpack_require__(12)
	  , $export     = __webpack_require__(9)
	  , anObject    = __webpack_require__(13)
	  , toPrimitive = __webpack_require__(17);

	// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
	$export($export.S + $export.F * __webpack_require__(8)(function(){
	  Reflect.defineProperty(dP.f({}, 1, {value: 1}), 1, {value: 2});
	}), 'Reflect', {
	  defineProperty: function defineProperty(target, propertyKey, attributes){
	    anObject(target);
	    propertyKey = toPrimitive(propertyKey, true);
	    anObject(attributes);
	    try {
	      dP.f(target, propertyKey, attributes);
	      return true;
	    } catch(e){
	      return false;
	    }
	  }
	});

/***/ },
/* 236 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.4 Reflect.deleteProperty(target, propertyKey)
	var $export  = __webpack_require__(9)
	  , gOPD     = __webpack_require__(52).f
	  , anObject = __webpack_require__(13);

	$export($export.S, 'Reflect', {
	  deleteProperty: function deleteProperty(target, propertyKey){
	    var desc = gOPD(anObject(target), propertyKey);
	    return desc && !desc.configurable ? false : delete target[propertyKey];
	  }
	});

/***/ },
/* 237 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 26.1.5 Reflect.enumerate(target)
	var $export  = __webpack_require__(9)
	  , anObject = __webpack_require__(13);
	var Enumerate = function(iterated){
	  this._t = anObject(iterated); // target
	  this._i = 0;                  // next index
	  var keys = this._k = []       // keys
	    , key;
	  for(key in iterated)keys.push(key);
	};
	__webpack_require__(131)(Enumerate, 'Object', function(){
	  var that = this
	    , keys = that._k
	    , key;
	  do {
	    if(that._i >= keys.length)return {value: undefined, done: true};
	  } while(!((key = keys[that._i++]) in that._t));
	  return {value: key, done: false};
	});

	$export($export.S, 'Reflect', {
	  enumerate: function enumerate(target){
	    return new Enumerate(target);
	  }
	});

/***/ },
/* 238 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.6 Reflect.get(target, propertyKey [, receiver])
	var gOPD           = __webpack_require__(52)
	  , getPrototypeOf = __webpack_require__(60)
	  , has            = __webpack_require__(6)
	  , $export        = __webpack_require__(9)
	  , isObject       = __webpack_require__(14)
	  , anObject       = __webpack_require__(13);

	function get(target, propertyKey/*, receiver*/){
	  var receiver = arguments.length < 3 ? target : arguments[2]
	    , desc, proto;
	  if(anObject(target) === receiver)return target[propertyKey];
	  if(desc = gOPD.f(target, propertyKey))return has(desc, 'value')
	    ? desc.value
	    : desc.get !== undefined
	      ? desc.get.call(receiver)
	      : undefined;
	  if(isObject(proto = getPrototypeOf(target)))return get(proto, propertyKey, receiver);
	}

	$export($export.S, 'Reflect', {get: get});

/***/ },
/* 239 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
	var gOPD     = __webpack_require__(52)
	  , $export  = __webpack_require__(9)
	  , anObject = __webpack_require__(13);

	$export($export.S, 'Reflect', {
	  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey){
	    return gOPD.f(anObject(target), propertyKey);
	  }
	});

/***/ },
/* 240 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.8 Reflect.getPrototypeOf(target)
	var $export  = __webpack_require__(9)
	  , getProto = __webpack_require__(60)
	  , anObject = __webpack_require__(13);

	$export($export.S, 'Reflect', {
	  getPrototypeOf: function getPrototypeOf(target){
	    return getProto(anObject(target));
	  }
	});

/***/ },
/* 241 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.9 Reflect.has(target, propertyKey)
	var $export = __webpack_require__(9);

	$export($export.S, 'Reflect', {
	  has: function has(target, propertyKey){
	    return propertyKey in target;
	  }
	});

/***/ },
/* 242 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.10 Reflect.isExtensible(target)
	var $export       = __webpack_require__(9)
	  , anObject      = __webpack_require__(13)
	  , $isExtensible = Object.isExtensible;

	$export($export.S, 'Reflect', {
	  isExtensible: function isExtensible(target){
	    anObject(target);
	    return $isExtensible ? $isExtensible(target) : true;
	  }
	});

/***/ },
/* 243 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.11 Reflect.ownKeys(target)
	var $export = __webpack_require__(9);

	$export($export.S, 'Reflect', {ownKeys: __webpack_require__(244)});

/***/ },
/* 244 */
/***/ function(module, exports, __webpack_require__) {

	// all object keys, includes non-enumerable and symbols
	var gOPN     = __webpack_require__(51)
	  , gOPS     = __webpack_require__(44)
	  , anObject = __webpack_require__(13)
	  , Reflect  = __webpack_require__(5).Reflect;
	module.exports = Reflect && Reflect.ownKeys || function ownKeys(it){
	  var keys       = gOPN.f(anObject(it))
	    , getSymbols = gOPS.f;
	  return getSymbols ? keys.concat(getSymbols(it)) : keys;
	};

/***/ },
/* 245 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.12 Reflect.preventExtensions(target)
	var $export            = __webpack_require__(9)
	  , anObject           = __webpack_require__(13)
	  , $preventExtensions = Object.preventExtensions;

	$export($export.S, 'Reflect', {
	  preventExtensions: function preventExtensions(target){
	    anObject(target);
	    try {
	      if($preventExtensions)$preventExtensions(target);
	      return true;
	    } catch(e){
	      return false;
	    }
	  }
	});

/***/ },
/* 246 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
	var dP             = __webpack_require__(12)
	  , gOPD           = __webpack_require__(52)
	  , getPrototypeOf = __webpack_require__(60)
	  , has            = __webpack_require__(6)
	  , $export        = __webpack_require__(9)
	  , createDesc     = __webpack_require__(18)
	  , anObject       = __webpack_require__(13)
	  , isObject       = __webpack_require__(14);

	function set(target, propertyKey, V/*, receiver*/){
	  var receiver = arguments.length < 4 ? target : arguments[3]
	    , ownDesc  = gOPD.f(anObject(target), propertyKey)
	    , existingDescriptor, proto;
	  if(!ownDesc){
	    if(isObject(proto = getPrototypeOf(target))){
	      return set(proto, propertyKey, V, receiver);
	    }
	    ownDesc = createDesc(0);
	  }
	  if(has(ownDesc, 'value')){
	    if(ownDesc.writable === false || !isObject(receiver))return false;
	    existingDescriptor = gOPD.f(receiver, propertyKey) || createDesc(0);
	    existingDescriptor.value = V;
	    dP.f(receiver, propertyKey, existingDescriptor);
	    return true;
	  }
	  return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
	}

	$export($export.S, 'Reflect', {set: set});

/***/ },
/* 247 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.14 Reflect.setPrototypeOf(target, proto)
	var $export  = __webpack_require__(9)
	  , setProto = __webpack_require__(74);

	if(setProto)$export($export.S, 'Reflect', {
	  setPrototypeOf: function setPrototypeOf(target, proto){
	    setProto.check(target, proto);
	    try {
	      setProto.set(target, proto);
	      return true;
	    } catch(e){
	      return false;
	    }
	  }
	});

/***/ },
/* 248 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/tc39/Array.prototype.includes
	var $export   = __webpack_require__(9)
	  , $includes = __webpack_require__(37)(true);

	$export($export.P, 'Array', {
	  includes: function includes(el /*, fromIndex = 0 */){
	    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	__webpack_require__(187)('includes');

/***/ },
/* 249 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/mathiasbynens/String.prototype.at
	var $export = __webpack_require__(9)
	  , $at     = __webpack_require__(128)(true);

	$export($export.P, 'String', {
	  at: function at(pos){
	    return $at(this, pos);
	  }
	});

/***/ },
/* 250 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/tc39/proposal-string-pad-start-end
	var $export = __webpack_require__(9)
	  , $pad    = __webpack_require__(251);

	$export($export.P, 'String', {
	  padStart: function padStart(maxLength /*, fillString = ' ' */){
	    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
	  }
	});

/***/ },
/* 251 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-string-pad-start-end
	var toLength = __webpack_require__(38)
	  , repeat   = __webpack_require__(92)
	  , defined  = __webpack_require__(36);

	module.exports = function(that, maxLength, fillString, left){
	  var S            = String(defined(that))
	    , stringLength = S.length
	    , fillStr      = fillString === undefined ? ' ' : String(fillString)
	    , intMaxLength = toLength(maxLength);
	  if(intMaxLength <= stringLength || fillStr == '')return S;
	  var fillLen = intMaxLength - stringLength
	    , stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
	  if(stringFiller.length > fillLen)stringFiller = stringFiller.slice(0, fillLen);
	  return left ? stringFiller + S : S + stringFiller;
	};


/***/ },
/* 252 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/tc39/proposal-string-pad-start-end
	var $export = __webpack_require__(9)
	  , $pad    = __webpack_require__(251);

	$export($export.P, 'String', {
	  padEnd: function padEnd(maxLength /*, fillString = ' ' */){
	    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
	  }
	});

/***/ },
/* 253 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
	__webpack_require__(84)('trimLeft', function($trim){
	  return function trimLeft(){
	    return $trim(this, 1);
	  };
	}, 'trimStart');

/***/ },
/* 254 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
	__webpack_require__(84)('trimRight', function($trim){
	  return function trimRight(){
	    return $trim(this, 2);
	  };
	}, 'trimEnd');

/***/ },
/* 255 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://tc39.github.io/String.prototype.matchAll/
	var $export     = __webpack_require__(9)
	  , defined     = __webpack_require__(36)
	  , toLength    = __webpack_require__(38)
	  , isRegExp    = __webpack_require__(135)
	  , getFlags    = __webpack_require__(197)
	  , RegExpProto = RegExp.prototype;

	var $RegExpStringIterator = function(regexp, string){
	  this._r = regexp;
	  this._s = string;
	};

	__webpack_require__(131)($RegExpStringIterator, 'RegExp String', function next(){
	  var match = this._r.exec(this._s);
	  return {value: match, done: match === null};
	});

	$export($export.P, 'String', {
	  matchAll: function matchAll(regexp){
	    defined(this);
	    if(!isRegExp(regexp))throw TypeError(regexp + ' is not a regexp!');
	    var S     = String(this)
	      , flags = 'flags' in RegExpProto ? String(regexp.flags) : getFlags.call(regexp)
	      , rx    = new RegExp(regexp.source, ~flags.indexOf('g') ? flags : 'g' + flags);
	    rx.lastIndex = toLength(regexp.lastIndex);
	    return new $RegExpStringIterator(rx, S);
	  }
	});

/***/ },
/* 256 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(28)('asyncIterator');

/***/ },
/* 257 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(28)('observable');

/***/ },
/* 258 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-object-getownpropertydescriptors
	var $export        = __webpack_require__(9)
	  , ownKeys        = __webpack_require__(244)
	  , toIObject      = __webpack_require__(33)
	  , gOPD           = __webpack_require__(52)
	  , createProperty = __webpack_require__(164);

	$export($export.S, 'Object', {
	  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object){
	    var O       = toIObject(object)
	      , getDesc = gOPD.f
	      , keys    = ownKeys(O)
	      , result  = {}
	      , i       = 0
	      , key;
	    while(keys.length > i)createProperty(result, key = keys[i++], getDesc(O, key));
	    return result;
	  }
	});

/***/ },
/* 259 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-object-values-entries
	var $export = __webpack_require__(9)
	  , $values = __webpack_require__(260)(false);

	$export($export.S, 'Object', {
	  values: function values(it){
	    return $values(it);
	  }
	});

/***/ },
/* 260 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(31)
	  , toIObject = __webpack_require__(33)
	  , isEnum    = __webpack_require__(45).f;
	module.exports = function(isEntries){
	  return function(it){
	    var O      = toIObject(it)
	      , keys   = getKeys(O)
	      , length = keys.length
	      , i      = 0
	      , result = []
	      , key;
	    while(length > i)if(isEnum.call(O, key = keys[i++])){
	      result.push(isEntries ? [key, O[key]] : O[key]);
	    } return result;
	  };
	};

/***/ },
/* 261 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-object-values-entries
	var $export  = __webpack_require__(9)
	  , $entries = __webpack_require__(260)(true);

	$export($export.S, 'Object', {
	  entries: function entries(it){
	    return $entries(it);
	  }
	});

/***/ },
/* 262 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export         = __webpack_require__(9)
	  , toObject        = __webpack_require__(59)
	  , aFunction       = __webpack_require__(22)
	  , $defineProperty = __webpack_require__(12);

	// B.2.2.2 Object.prototype.__defineGetter__(P, getter)
	__webpack_require__(7) && $export($export.P + __webpack_require__(263), 'Object', {
	  __defineGetter__: function __defineGetter__(P, getter){
	    $defineProperty.f(toObject(this), P, {get: aFunction(getter), enumerable: true, configurable: true});
	  }
	});

/***/ },
/* 263 */
/***/ function(module, exports, __webpack_require__) {

	// Forced replacement prototype accessors methods
	module.exports = __webpack_require__(29)|| !__webpack_require__(8)(function(){
	  var K = Math.random();
	  // In FF throws only define methods
	  __defineSetter__.call(null, K, function(){ /* empty */});
	  delete __webpack_require__(5)[K];
	});

/***/ },
/* 264 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export         = __webpack_require__(9)
	  , toObject        = __webpack_require__(59)
	  , aFunction       = __webpack_require__(22)
	  , $defineProperty = __webpack_require__(12);

	// B.2.2.3 Object.prototype.__defineSetter__(P, setter)
	__webpack_require__(7) && $export($export.P + __webpack_require__(263), 'Object', {
	  __defineSetter__: function __defineSetter__(P, setter){
	    $defineProperty.f(toObject(this), P, {set: aFunction(setter), enumerable: true, configurable: true});
	  }
	});

/***/ },
/* 265 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export                  = __webpack_require__(9)
	  , toObject                 = __webpack_require__(59)
	  , toPrimitive              = __webpack_require__(17)
	  , getPrototypeOf           = __webpack_require__(60)
	  , getOwnPropertyDescriptor = __webpack_require__(52).f;

	// B.2.2.4 Object.prototype.__lookupGetter__(P)
	__webpack_require__(7) && $export($export.P + __webpack_require__(263), 'Object', {
	  __lookupGetter__: function __lookupGetter__(P){
	    var O = toObject(this)
	      , K = toPrimitive(P, true)
	      , D;
	    do {
	      if(D = getOwnPropertyDescriptor(O, K))return D.get;
	    } while(O = getPrototypeOf(O));
	  }
	});

/***/ },
/* 266 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export                  = __webpack_require__(9)
	  , toObject                 = __webpack_require__(59)
	  , toPrimitive              = __webpack_require__(17)
	  , getPrototypeOf           = __webpack_require__(60)
	  , getOwnPropertyDescriptor = __webpack_require__(52).f;

	// B.2.2.5 Object.prototype.__lookupSetter__(P)
	__webpack_require__(7) && $export($export.P + __webpack_require__(263), 'Object', {
	  __lookupSetter__: function __lookupSetter__(P){
	    var O = toObject(this)
	      , K = toPrimitive(P, true)
	      , D;
	    do {
	      if(D = getOwnPropertyDescriptor(O, K))return D.set;
	    } while(O = getPrototypeOf(O));
	  }
	});

/***/ },
/* 267 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var $export  = __webpack_require__(9);

	$export($export.P + $export.R, 'Map', {toJSON: __webpack_require__(268)('Map')});

/***/ },
/* 268 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var classof = __webpack_require__(76)
	  , from    = __webpack_require__(269);
	module.exports = function(NAME){
	  return function toJSON(){
	    if(classof(this) != NAME)throw TypeError(NAME + "#toJSON isn't generic");
	    return from(this);
	  };
	};

/***/ },
/* 269 */
/***/ function(module, exports, __webpack_require__) {

	var forOf = __webpack_require__(207);

	module.exports = function(iter, ITERATOR){
	  var result = [];
	  forOf(iter, false, result.push, result, ITERATOR);
	  return result;
	};


/***/ },
/* 270 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var $export  = __webpack_require__(9);

	$export($export.P + $export.R, 'Set', {toJSON: __webpack_require__(268)('Set')});

/***/ },
/* 271 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/ljharb/proposal-global
	var $export = __webpack_require__(9);

	$export($export.S, 'System', {global: __webpack_require__(5)});

/***/ },
/* 272 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/ljharb/proposal-is-error
	var $export = __webpack_require__(9)
	  , cof     = __webpack_require__(35);

	$export($export.S, 'Error', {
	  isError: function isError(it){
	    return cof(it) === 'Error';
	  }
	});

/***/ },
/* 273 */
/***/ function(module, exports, __webpack_require__) {

	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(9);

	$export($export.S, 'Math', {
	  iaddh: function iaddh(x0, x1, y0, y1){
	    var $x0 = x0 >>> 0
	      , $x1 = x1 >>> 0
	      , $y0 = y0 >>> 0;
	    return $x1 + (y1 >>> 0) + (($x0 & $y0 | ($x0 | $y0) & ~($x0 + $y0 >>> 0)) >>> 31) | 0;
	  }
	});

/***/ },
/* 274 */
/***/ function(module, exports, __webpack_require__) {

	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(9);

	$export($export.S, 'Math', {
	  isubh: function isubh(x0, x1, y0, y1){
	    var $x0 = x0 >>> 0
	      , $x1 = x1 >>> 0
	      , $y0 = y0 >>> 0;
	    return $x1 - (y1 >>> 0) - ((~$x0 & $y0 | ~($x0 ^ $y0) & $x0 - $y0 >>> 0) >>> 31) | 0;
	  }
	});

/***/ },
/* 275 */
/***/ function(module, exports, __webpack_require__) {

	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(9);

	$export($export.S, 'Math', {
	  imulh: function imulh(u, v){
	    var UINT16 = 0xffff
	      , $u = +u
	      , $v = +v
	      , u0 = $u & UINT16
	      , v0 = $v & UINT16
	      , u1 = $u >> 16
	      , v1 = $v >> 16
	      , t  = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
	    return u1 * v1 + (t >> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >> 16);
	  }
	});

/***/ },
/* 276 */
/***/ function(module, exports, __webpack_require__) {

	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(9);

	$export($export.S, 'Math', {
	  umulh: function umulh(u, v){
	    var UINT16 = 0xffff
	      , $u = +u
	      , $v = +v
	      , u0 = $u & UINT16
	      , v0 = $v & UINT16
	      , u1 = $u >>> 16
	      , v1 = $v >>> 16
	      , t  = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
	    return u1 * v1 + (t >>> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >>> 16);
	  }
	});

/***/ },
/* 277 */
/***/ function(module, exports, __webpack_require__) {

	var metadata                  = __webpack_require__(278)
	  , anObject                  = __webpack_require__(13)
	  , toMetaKey                 = metadata.key
	  , ordinaryDefineOwnMetadata = metadata.set;

	metadata.exp({defineMetadata: function defineMetadata(metadataKey, metadataValue, target, targetKey){
	  ordinaryDefineOwnMetadata(metadataKey, metadataValue, anObject(target), toMetaKey(targetKey));
	}});

/***/ },
/* 278 */
/***/ function(module, exports, __webpack_require__) {

	var Map     = __webpack_require__(212)
	  , $export = __webpack_require__(9)
	  , shared  = __webpack_require__(24)('metadata')
	  , store   = shared.store || (shared.store = new (__webpack_require__(216)));

	var getOrCreateMetadataMap = function(target, targetKey, create){
	  var targetMetadata = store.get(target);
	  if(!targetMetadata){
	    if(!create)return undefined;
	    store.set(target, targetMetadata = new Map);
	  }
	  var keyMetadata = targetMetadata.get(targetKey);
	  if(!keyMetadata){
	    if(!create)return undefined;
	    targetMetadata.set(targetKey, keyMetadata = new Map);
	  } return keyMetadata;
	};
	var ordinaryHasOwnMetadata = function(MetadataKey, O, P){
	  var metadataMap = getOrCreateMetadataMap(O, P, false);
	  return metadataMap === undefined ? false : metadataMap.has(MetadataKey);
	};
	var ordinaryGetOwnMetadata = function(MetadataKey, O, P){
	  var metadataMap = getOrCreateMetadataMap(O, P, false);
	  return metadataMap === undefined ? undefined : metadataMap.get(MetadataKey);
	};
	var ordinaryDefineOwnMetadata = function(MetadataKey, MetadataValue, O, P){
	  getOrCreateMetadataMap(O, P, true).set(MetadataKey, MetadataValue);
	};
	var ordinaryOwnMetadataKeys = function(target, targetKey){
	  var metadataMap = getOrCreateMetadataMap(target, targetKey, false)
	    , keys        = [];
	  if(metadataMap)metadataMap.forEach(function(_, key){ keys.push(key); });
	  return keys;
	};
	var toMetaKey = function(it){
	  return it === undefined || typeof it == 'symbol' ? it : String(it);
	};
	var exp = function(O){
	  $export($export.S, 'Reflect', O);
	};

	module.exports = {
	  store: store,
	  map: getOrCreateMetadataMap,
	  has: ordinaryHasOwnMetadata,
	  get: ordinaryGetOwnMetadata,
	  set: ordinaryDefineOwnMetadata,
	  keys: ordinaryOwnMetadataKeys,
	  key: toMetaKey,
	  exp: exp
	};

/***/ },
/* 279 */
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(278)
	  , anObject               = __webpack_require__(13)
	  , toMetaKey              = metadata.key
	  , getOrCreateMetadataMap = metadata.map
	  , store                  = metadata.store;

	metadata.exp({deleteMetadata: function deleteMetadata(metadataKey, target /*, targetKey */){
	  var targetKey   = arguments.length < 3 ? undefined : toMetaKey(arguments[2])
	    , metadataMap = getOrCreateMetadataMap(anObject(target), targetKey, false);
	  if(metadataMap === undefined || !metadataMap['delete'](metadataKey))return false;
	  if(metadataMap.size)return true;
	  var targetMetadata = store.get(target);
	  targetMetadata['delete'](targetKey);
	  return !!targetMetadata.size || store['delete'](target);
	}});

/***/ },
/* 280 */
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(278)
	  , anObject               = __webpack_require__(13)
	  , getPrototypeOf         = __webpack_require__(60)
	  , ordinaryHasOwnMetadata = metadata.has
	  , ordinaryGetOwnMetadata = metadata.get
	  , toMetaKey              = metadata.key;

	var ordinaryGetMetadata = function(MetadataKey, O, P){
	  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
	  if(hasOwn)return ordinaryGetOwnMetadata(MetadataKey, O, P);
	  var parent = getPrototypeOf(O);
	  return parent !== null ? ordinaryGetMetadata(MetadataKey, parent, P) : undefined;
	};

	metadata.exp({getMetadata: function getMetadata(metadataKey, target /*, targetKey */){
	  return ordinaryGetMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	}});

/***/ },
/* 281 */
/***/ function(module, exports, __webpack_require__) {

	var Set                     = __webpack_require__(215)
	  , from                    = __webpack_require__(269)
	  , metadata                = __webpack_require__(278)
	  , anObject                = __webpack_require__(13)
	  , getPrototypeOf          = __webpack_require__(60)
	  , ordinaryOwnMetadataKeys = metadata.keys
	  , toMetaKey               = metadata.key;

	var ordinaryMetadataKeys = function(O, P){
	  var oKeys  = ordinaryOwnMetadataKeys(O, P)
	    , parent = getPrototypeOf(O);
	  if(parent === null)return oKeys;
	  var pKeys  = ordinaryMetadataKeys(parent, P);
	  return pKeys.length ? oKeys.length ? from(new Set(oKeys.concat(pKeys))) : pKeys : oKeys;
	};

	metadata.exp({getMetadataKeys: function getMetadataKeys(target /*, targetKey */){
	  return ordinaryMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
	}});

/***/ },
/* 282 */
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(278)
	  , anObject               = __webpack_require__(13)
	  , ordinaryGetOwnMetadata = metadata.get
	  , toMetaKey              = metadata.key;

	metadata.exp({getOwnMetadata: function getOwnMetadata(metadataKey, target /*, targetKey */){
	  return ordinaryGetOwnMetadata(metadataKey, anObject(target)
	    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	}});

/***/ },
/* 283 */
/***/ function(module, exports, __webpack_require__) {

	var metadata                = __webpack_require__(278)
	  , anObject                = __webpack_require__(13)
	  , ordinaryOwnMetadataKeys = metadata.keys
	  , toMetaKey               = metadata.key;

	metadata.exp({getOwnMetadataKeys: function getOwnMetadataKeys(target /*, targetKey */){
	  return ordinaryOwnMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
	}});

/***/ },
/* 284 */
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(278)
	  , anObject               = __webpack_require__(13)
	  , getPrototypeOf         = __webpack_require__(60)
	  , ordinaryHasOwnMetadata = metadata.has
	  , toMetaKey              = metadata.key;

	var ordinaryHasMetadata = function(MetadataKey, O, P){
	  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
	  if(hasOwn)return true;
	  var parent = getPrototypeOf(O);
	  return parent !== null ? ordinaryHasMetadata(MetadataKey, parent, P) : false;
	};

	metadata.exp({hasMetadata: function hasMetadata(metadataKey, target /*, targetKey */){
	  return ordinaryHasMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	}});

/***/ },
/* 285 */
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(278)
	  , anObject               = __webpack_require__(13)
	  , ordinaryHasOwnMetadata = metadata.has
	  , toMetaKey              = metadata.key;

	metadata.exp({hasOwnMetadata: function hasOwnMetadata(metadataKey, target /*, targetKey */){
	  return ordinaryHasOwnMetadata(metadataKey, anObject(target)
	    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	}});

/***/ },
/* 286 */
/***/ function(module, exports, __webpack_require__) {

	var metadata                  = __webpack_require__(278)
	  , anObject                  = __webpack_require__(13)
	  , aFunction                 = __webpack_require__(22)
	  , toMetaKey                 = metadata.key
	  , ordinaryDefineOwnMetadata = metadata.set;

	metadata.exp({metadata: function metadata(metadataKey, metadataValue){
	  return function decorator(target, targetKey){
	    ordinaryDefineOwnMetadata(
	      metadataKey, metadataValue,
	      (targetKey !== undefined ? anObject : aFunction)(target),
	      toMetaKey(targetKey)
	    );
	  };
	}});

/***/ },
/* 287 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/rwaldron/tc39-notes/blob/master/es6/2014-09/sept-25.md#510-globalasap-for-enqueuing-a-microtask
	var $export   = __webpack_require__(9)
	  , microtask = __webpack_require__(210)()
	  , process   = __webpack_require__(5).process
	  , isNode    = __webpack_require__(35)(process) == 'process';

	$export($export.G, {
	  asap: function asap(fn){
	    var domain = isNode && process.domain;
	    microtask(domain ? domain.bind(fn) : fn);
	  }
	});

/***/ },
/* 288 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/zenparsing/es-observable
	var $export     = __webpack_require__(9)
	  , global      = __webpack_require__(5)
	  , core        = __webpack_require__(10)
	  , microtask   = __webpack_require__(210)()
	  , OBSERVABLE  = __webpack_require__(26)('observable')
	  , aFunction   = __webpack_require__(22)
	  , anObject    = __webpack_require__(13)
	  , anInstance  = __webpack_require__(206)
	  , redefineAll = __webpack_require__(211)
	  , hide        = __webpack_require__(11)
	  , forOf       = __webpack_require__(207)
	  , RETURN      = forOf.RETURN;

	var getMethod = function(fn){
	  return fn == null ? undefined : aFunction(fn);
	};

	var cleanupSubscription = function(subscription){
	  var cleanup = subscription._c;
	  if(cleanup){
	    subscription._c = undefined;
	    cleanup();
	  }
	};

	var subscriptionClosed = function(subscription){
	  return subscription._o === undefined;
	};

	var closeSubscription = function(subscription){
	  if(!subscriptionClosed(subscription)){
	    subscription._o = undefined;
	    cleanupSubscription(subscription);
	  }
	};

	var Subscription = function(observer, subscriber){
	  anObject(observer);
	  this._c = undefined;
	  this._o = observer;
	  observer = new SubscriptionObserver(this);
	  try {
	    var cleanup      = subscriber(observer)
	      , subscription = cleanup;
	    if(cleanup != null){
	      if(typeof cleanup.unsubscribe === 'function')cleanup = function(){ subscription.unsubscribe(); };
	      else aFunction(cleanup);
	      this._c = cleanup;
	    }
	  } catch(e){
	    observer.error(e);
	    return;
	  } if(subscriptionClosed(this))cleanupSubscription(this);
	};

	Subscription.prototype = redefineAll({}, {
	  unsubscribe: function unsubscribe(){ closeSubscription(this); }
	});

	var SubscriptionObserver = function(subscription){
	  this._s = subscription;
	};

	SubscriptionObserver.prototype = redefineAll({}, {
	  next: function next(value){
	    var subscription = this._s;
	    if(!subscriptionClosed(subscription)){
	      var observer = subscription._o;
	      try {
	        var m = getMethod(observer.next);
	        if(m)return m.call(observer, value);
	      } catch(e){
	        try {
	          closeSubscription(subscription);
	        } finally {
	          throw e;
	        }
	      }
	    }
	  },
	  error: function error(value){
	    var subscription = this._s;
	    if(subscriptionClosed(subscription))throw value;
	    var observer = subscription._o;
	    subscription._o = undefined;
	    try {
	      var m = getMethod(observer.error);
	      if(!m)throw value;
	      value = m.call(observer, value);
	    } catch(e){
	      try {
	        cleanupSubscription(subscription);
	      } finally {
	        throw e;
	      }
	    } cleanupSubscription(subscription);
	    return value;
	  },
	  complete: function complete(value){
	    var subscription = this._s;
	    if(!subscriptionClosed(subscription)){
	      var observer = subscription._o;
	      subscription._o = undefined;
	      try {
	        var m = getMethod(observer.complete);
	        value = m ? m.call(observer, value) : undefined;
	      } catch(e){
	        try {
	          cleanupSubscription(subscription);
	        } finally {
	          throw e;
	        }
	      } cleanupSubscription(subscription);
	      return value;
	    }
	  }
	});

	var $Observable = function Observable(subscriber){
	  anInstance(this, $Observable, 'Observable', '_f')._f = aFunction(subscriber);
	};

	redefineAll($Observable.prototype, {
	  subscribe: function subscribe(observer){
	    return new Subscription(observer, this._f);
	  },
	  forEach: function forEach(fn){
	    var that = this;
	    return new (core.Promise || global.Promise)(function(resolve, reject){
	      aFunction(fn);
	      var subscription = that.subscribe({
	        next : function(value){
	          try {
	            return fn(value);
	          } catch(e){
	            reject(e);
	            subscription.unsubscribe();
	          }
	        },
	        error: reject,
	        complete: resolve
	      });
	    });
	  }
	});

	redefineAll($Observable, {
	  from: function from(x){
	    var C = typeof this === 'function' ? this : $Observable;
	    var method = getMethod(anObject(x)[OBSERVABLE]);
	    if(method){
	      var observable = anObject(method.call(x));
	      return observable.constructor === C ? observable : new C(function(observer){
	        return observable.subscribe(observer);
	      });
	    }
	    return new C(function(observer){
	      var done = false;
	      microtask(function(){
	        if(!done){
	          try {
	            if(forOf(x, false, function(it){
	              observer.next(it);
	              if(done)return RETURN;
	            }) === RETURN)return;
	          } catch(e){
	            if(done)throw e;
	            observer.error(e);
	            return;
	          } observer.complete();
	        }
	      });
	      return function(){ done = true; };
	    });
	  },
	  of: function of(){
	    for(var i = 0, l = arguments.length, items = Array(l); i < l;)items[i] = arguments[i++];
	    return new (typeof this === 'function' ? this : $Observable)(function(observer){
	      var done = false;
	      microtask(function(){
	        if(!done){
	          for(var i = 0; i < items.length; ++i){
	            observer.next(items[i]);
	            if(done)return;
	          } observer.complete();
	        }
	      });
	      return function(){ done = true; };
	    });
	  }
	});

	hide($Observable.prototype, OBSERVABLE, function(){ return this; });

	$export($export.G, {Observable: $Observable});

	__webpack_require__(193)('Observable');

/***/ },
/* 289 */
/***/ function(module, exports, __webpack_require__) {

	// ie9- setTimeout & setInterval additional parameters fix
	var global     = __webpack_require__(5)
	  , $export    = __webpack_require__(9)
	  , invoke     = __webpack_require__(79)
	  , partial    = __webpack_require__(290)
	  , navigator  = global.navigator
	  , MSIE       = !!navigator && /MSIE .\./.test(navigator.userAgent); // <- dirty ie9- check
	var wrap = function(set){
	  return MSIE ? function(fn, time /*, ...args */){
	    return set(invoke(
	      partial,
	      [].slice.call(arguments, 2),
	      typeof fn == 'function' ? fn : Function(fn)
	    ), time);
	  } : set;
	};
	$export($export.G + $export.B + $export.F * MSIE, {
	  setTimeout:  wrap(global.setTimeout),
	  setInterval: wrap(global.setInterval)
	});

/***/ },
/* 290 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var path      = __webpack_require__(291)
	  , invoke    = __webpack_require__(79)
	  , aFunction = __webpack_require__(22);
	module.exports = function(/* ...pargs */){
	  var fn     = aFunction(this)
	    , length = arguments.length
	    , pargs  = Array(length)
	    , i      = 0
	    , _      = path._
	    , holder = false;
	  while(length > i)if((pargs[i] = arguments[i++]) === _)holder = true;
	  return function(/* ...args */){
	    var that = this
	      , aLen = arguments.length
	      , j = 0, k = 0, args;
	    if(!holder && !aLen)return invoke(fn, pargs, that);
	    args = pargs.slice();
	    if(holder)for(;length > j; j++)if(args[j] === _)args[j] = arguments[k++];
	    while(aLen > k)args.push(arguments[k++]);
	    return invoke(fn, args, that);
	  };
	};

/***/ },
/* 291 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(5);

/***/ },
/* 292 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(9)
	  , $task   = __webpack_require__(209);
	$export($export.G + $export.B, {
	  setImmediate:   $task.set,
	  clearImmediate: $task.clear
	});

/***/ },
/* 293 */
/***/ function(module, exports, __webpack_require__) {

	var $iterators    = __webpack_require__(194)
	  , redefine      = __webpack_require__(19)
	  , global        = __webpack_require__(5)
	  , hide          = __webpack_require__(11)
	  , Iterators     = __webpack_require__(130)
	  , wks           = __webpack_require__(26)
	  , ITERATOR      = wks('iterator')
	  , TO_STRING_TAG = wks('toStringTag')
	  , ArrayValues   = Iterators.Array;

	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype
	    , key;
	  if(proto){
	    if(!proto[ITERATOR])hide(proto, ITERATOR, ArrayValues);
	    if(!proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	    Iterators[NAME] = ArrayValues;
	    for(key in $iterators)if(!proto[key])redefine(proto, key, $iterators[key], true);
	  }
	}

/***/ },
/* 294 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {/**
	 * Copyright (c) 2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
	 * additional grant of patent rights can be found in the PATENTS file in
	 * the same directory.
	 */

	!(function(global) {
	  "use strict";

	  var hasOwn = Object.prototype.hasOwnProperty;
	  var undefined; // More compressible than void 0.
	  var $Symbol = typeof Symbol === "function" ? Symbol : {};
	  var iteratorSymbol = $Symbol.iterator || "@@iterator";
	  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

	  var inModule = typeof module === "object";
	  var runtime = global.regeneratorRuntime;
	  if (runtime) {
	    if (inModule) {
	      // If regeneratorRuntime is defined globally and we're in a module,
	      // make the exports object identical to regeneratorRuntime.
	      module.exports = runtime;
	    }
	    // Don't bother evaluating the rest of this file if the runtime was
	    // already defined globally.
	    return;
	  }

	  // Define the runtime globally (as expected by generated code) as either
	  // module.exports (if we're in a module) or a new, empty object.
	  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

	  function wrap(innerFn, outerFn, self, tryLocsList) {
	    // If outerFn provided, then outerFn.prototype instanceof Generator.
	    var generator = Object.create((outerFn || Generator).prototype);
	    var context = new Context(tryLocsList || []);

	    // The ._invoke method unifies the implementations of the .next,
	    // .throw, and .return methods.
	    generator._invoke = makeInvokeMethod(innerFn, self, context);

	    return generator;
	  }
	  runtime.wrap = wrap;

	  // Try/catch helper to minimize deoptimizations. Returns a completion
	  // record like context.tryEntries[i].completion. This interface could
	  // have been (and was previously) designed to take a closure to be
	  // invoked without arguments, but in all the cases we care about we
	  // already have an existing method we want to call, so there's no need
	  // to create a new function object. We can even get away with assuming
	  // the method takes exactly one argument, since that happens to be true
	  // in every case, so we don't have to touch the arguments object. The
	  // only additional allocation required is the completion record, which
	  // has a stable shape and so hopefully should be cheap to allocate.
	  function tryCatch(fn, obj, arg) {
	    try {
	      return { type: "normal", arg: fn.call(obj, arg) };
	    } catch (err) {
	      return { type: "throw", arg: err };
	    }
	  }

	  var GenStateSuspendedStart = "suspendedStart";
	  var GenStateSuspendedYield = "suspendedYield";
	  var GenStateExecuting = "executing";
	  var GenStateCompleted = "completed";

	  // Returning this object from the innerFn has the same effect as
	  // breaking out of the dispatch switch statement.
	  var ContinueSentinel = {};

	  // Dummy constructor functions that we use as the .constructor and
	  // .constructor.prototype properties for functions that return Generator
	  // objects. For full spec compliance, you may wish to configure your
	  // minifier not to mangle the names of these two functions.
	  function Generator() {}
	  function GeneratorFunction() {}
	  function GeneratorFunctionPrototype() {}

	  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype;
	  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
	  GeneratorFunctionPrototype.constructor = GeneratorFunction;
	  GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction";

	  // Helper for defining the .next, .throw, and .return methods of the
	  // Iterator interface in terms of a single ._invoke method.
	  function defineIteratorMethods(prototype) {
	    ["next", "throw", "return"].forEach(function(method) {
	      prototype[method] = function(arg) {
	        return this._invoke(method, arg);
	      };
	    });
	  }

	  runtime.isGeneratorFunction = function(genFun) {
	    var ctor = typeof genFun === "function" && genFun.constructor;
	    return ctor
	      ? ctor === GeneratorFunction ||
	        // For the native GeneratorFunction constructor, the best we can
	        // do is to check its .name property.
	        (ctor.displayName || ctor.name) === "GeneratorFunction"
	      : false;
	  };

	  runtime.mark = function(genFun) {
	    if (Object.setPrototypeOf) {
	      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
	    } else {
	      genFun.__proto__ = GeneratorFunctionPrototype;
	      if (!(toStringTagSymbol in genFun)) {
	        genFun[toStringTagSymbol] = "GeneratorFunction";
	      }
	    }
	    genFun.prototype = Object.create(Gp);
	    return genFun;
	  };

	  // Within the body of any async function, `await x` is transformed to
	  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
	  // `value instanceof AwaitArgument` to determine if the yielded value is
	  // meant to be awaited. Some may consider the name of this method too
	  // cutesy, but they are curmudgeons.
	  runtime.awrap = function(arg) {
	    return new AwaitArgument(arg);
	  };

	  function AwaitArgument(arg) {
	    this.arg = arg;
	  }

	  function AsyncIterator(generator) {
	    function invoke(method, arg, resolve, reject) {
	      var record = tryCatch(generator[method], generator, arg);
	      if (record.type === "throw") {
	        reject(record.arg);
	      } else {
	        var result = record.arg;
	        var value = result.value;
	        if (value instanceof AwaitArgument) {
	          return Promise.resolve(value.arg).then(function(value) {
	            invoke("next", value, resolve, reject);
	          }, function(err) {
	            invoke("throw", err, resolve, reject);
	          });
	        }

	        return Promise.resolve(value).then(function(unwrapped) {
	          // When a yielded Promise is resolved, its final value becomes
	          // the .value of the Promise<{value,done}> result for the
	          // current iteration. If the Promise is rejected, however, the
	          // result for this iteration will be rejected with the same
	          // reason. Note that rejections of yielded Promises are not
	          // thrown back into the generator function, as is the case
	          // when an awaited Promise is rejected. This difference in
	          // behavior between yield and await is important, because it
	          // allows the consumer to decide what to do with the yielded
	          // rejection (swallow it and continue, manually .throw it back
	          // into the generator, abandon iteration, whatever). With
	          // await, by contrast, there is no opportunity to examine the
	          // rejection reason outside the generator function, so the
	          // only option is to throw it from the await expression, and
	          // let the generator function handle the exception.
	          result.value = unwrapped;
	          resolve(result);
	        }, reject);
	      }
	    }

	    if (typeof process === "object" && process.domain) {
	      invoke = process.domain.bind(invoke);
	    }

	    var previousPromise;

	    function enqueue(method, arg) {
	      function callInvokeWithMethodAndArg() {
	        return new Promise(function(resolve, reject) {
	          invoke(method, arg, resolve, reject);
	        });
	      }

	      return previousPromise =
	        // If enqueue has been called before, then we want to wait until
	        // all previous Promises have been resolved before calling invoke,
	        // so that results are always delivered in the correct order. If
	        // enqueue has not been called before, then it is important to
	        // call invoke immediately, without waiting on a callback to fire,
	        // so that the async generator function has the opportunity to do
	        // any necessary setup in a predictable way. This predictability
	        // is why the Promise constructor synchronously invokes its
	        // executor callback, and why async functions synchronously
	        // execute code before the first await. Since we implement simple
	        // async functions in terms of async generators, it is especially
	        // important to get this right, even though it requires care.
	        previousPromise ? previousPromise.then(
	          callInvokeWithMethodAndArg,
	          // Avoid propagating failures to Promises returned by later
	          // invocations of the iterator.
	          callInvokeWithMethodAndArg
	        ) : callInvokeWithMethodAndArg();
	    }

	    // Define the unified helper method that is used to implement .next,
	    // .throw, and .return (see defineIteratorMethods).
	    this._invoke = enqueue;
	  }

	  defineIteratorMethods(AsyncIterator.prototype);

	  // Note that simple async functions are implemented on top of
	  // AsyncIterator objects; they just return a Promise for the value of
	  // the final result produced by the iterator.
	  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
	    var iter = new AsyncIterator(
	      wrap(innerFn, outerFn, self, tryLocsList)
	    );

	    return runtime.isGeneratorFunction(outerFn)
	      ? iter // If outerFn is a generator, return the full iterator.
	      : iter.next().then(function(result) {
	          return result.done ? result.value : iter.next();
	        });
	  };

	  function makeInvokeMethod(innerFn, self, context) {
	    var state = GenStateSuspendedStart;

	    return function invoke(method, arg) {
	      if (state === GenStateExecuting) {
	        throw new Error("Generator is already running");
	      }

	      if (state === GenStateCompleted) {
	        if (method === "throw") {
	          throw arg;
	        }

	        // Be forgiving, per 25.3.3.3.3 of the spec:
	        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
	        return doneResult();
	      }

	      while (true) {
	        var delegate = context.delegate;
	        if (delegate) {
	          if (method === "return" ||
	              (method === "throw" && delegate.iterator[method] === undefined)) {
	            // A return or throw (when the delegate iterator has no throw
	            // method) always terminates the yield* loop.
	            context.delegate = null;

	            // If the delegate iterator has a return method, give it a
	            // chance to clean up.
	            var returnMethod = delegate.iterator["return"];
	            if (returnMethod) {
	              var record = tryCatch(returnMethod, delegate.iterator, arg);
	              if (record.type === "throw") {
	                // If the return method threw an exception, let that
	                // exception prevail over the original return or throw.
	                method = "throw";
	                arg = record.arg;
	                continue;
	              }
	            }

	            if (method === "return") {
	              // Continue with the outer return, now that the delegate
	              // iterator has been terminated.
	              continue;
	            }
	          }

	          var record = tryCatch(
	            delegate.iterator[method],
	            delegate.iterator,
	            arg
	          );

	          if (record.type === "throw") {
	            context.delegate = null;

	            // Like returning generator.throw(uncaught), but without the
	            // overhead of an extra function call.
	            method = "throw";
	            arg = record.arg;
	            continue;
	          }

	          // Delegate generator ran and handled its own exceptions so
	          // regardless of what the method was, we continue as if it is
	          // "next" with an undefined arg.
	          method = "next";
	          arg = undefined;

	          var info = record.arg;
	          if (info.done) {
	            context[delegate.resultName] = info.value;
	            context.next = delegate.nextLoc;
	          } else {
	            state = GenStateSuspendedYield;
	            return info;
	          }

	          context.delegate = null;
	        }

	        if (method === "next") {
	          // Setting context._sent for legacy support of Babel's
	          // function.sent implementation.
	          context.sent = context._sent = arg;

	        } else if (method === "throw") {
	          if (state === GenStateSuspendedStart) {
	            state = GenStateCompleted;
	            throw arg;
	          }

	          if (context.dispatchException(arg)) {
	            // If the dispatched exception was caught by a catch block,
	            // then let that catch block handle the exception normally.
	            method = "next";
	            arg = undefined;
	          }

	        } else if (method === "return") {
	          context.abrupt("return", arg);
	        }

	        state = GenStateExecuting;

	        var record = tryCatch(innerFn, self, context);
	        if (record.type === "normal") {
	          // If an exception is thrown from innerFn, we leave state ===
	          // GenStateExecuting and loop back for another invocation.
	          state = context.done
	            ? GenStateCompleted
	            : GenStateSuspendedYield;

	          var info = {
	            value: record.arg,
	            done: context.done
	          };

	          if (record.arg === ContinueSentinel) {
	            if (context.delegate && method === "next") {
	              // Deliberately forget the last sent value so that we don't
	              // accidentally pass it on to the delegate.
	              arg = undefined;
	            }
	          } else {
	            return info;
	          }

	        } else if (record.type === "throw") {
	          state = GenStateCompleted;
	          // Dispatch the exception by looping back around to the
	          // context.dispatchException(arg) call above.
	          method = "throw";
	          arg = record.arg;
	        }
	      }
	    };
	  }

	  // Define Generator.prototype.{next,throw,return} in terms of the
	  // unified ._invoke helper method.
	  defineIteratorMethods(Gp);

	  Gp[iteratorSymbol] = function() {
	    return this;
	  };

	  Gp[toStringTagSymbol] = "Generator";

	  Gp.toString = function() {
	    return "[object Generator]";
	  };

	  function pushTryEntry(locs) {
	    var entry = { tryLoc: locs[0] };

	    if (1 in locs) {
	      entry.catchLoc = locs[1];
	    }

	    if (2 in locs) {
	      entry.finallyLoc = locs[2];
	      entry.afterLoc = locs[3];
	    }

	    this.tryEntries.push(entry);
	  }

	  function resetTryEntry(entry) {
	    var record = entry.completion || {};
	    record.type = "normal";
	    delete record.arg;
	    entry.completion = record;
	  }

	  function Context(tryLocsList) {
	    // The root entry object (effectively a try statement without a catch
	    // or a finally block) gives us a place to store values thrown from
	    // locations where there is no enclosing try statement.
	    this.tryEntries = [{ tryLoc: "root" }];
	    tryLocsList.forEach(pushTryEntry, this);
	    this.reset(true);
	  }

	  runtime.keys = function(object) {
	    var keys = [];
	    for (var key in object) {
	      keys.push(key);
	    }
	    keys.reverse();

	    // Rather than returning an object with a next method, we keep
	    // things simple and return the next function itself.
	    return function next() {
	      while (keys.length) {
	        var key = keys.pop();
	        if (key in object) {
	          next.value = key;
	          next.done = false;
	          return next;
	        }
	      }

	      // To avoid creating an additional object, we just hang the .value
	      // and .done properties off the next function object itself. This
	      // also ensures that the minifier will not anonymize the function.
	      next.done = true;
	      return next;
	    };
	  };

	  function values(iterable) {
	    if (iterable) {
	      var iteratorMethod = iterable[iteratorSymbol];
	      if (iteratorMethod) {
	        return iteratorMethod.call(iterable);
	      }

	      if (typeof iterable.next === "function") {
	        return iterable;
	      }

	      if (!isNaN(iterable.length)) {
	        var i = -1, next = function next() {
	          while (++i < iterable.length) {
	            if (hasOwn.call(iterable, i)) {
	              next.value = iterable[i];
	              next.done = false;
	              return next;
	            }
	          }

	          next.value = undefined;
	          next.done = true;

	          return next;
	        };

	        return next.next = next;
	      }
	    }

	    // Return an iterator with no values.
	    return { next: doneResult };
	  }
	  runtime.values = values;

	  function doneResult() {
	    return { value: undefined, done: true };
	  }

	  Context.prototype = {
	    constructor: Context,

	    reset: function(skipTempReset) {
	      this.prev = 0;
	      this.next = 0;
	      // Resetting context._sent for legacy support of Babel's
	      // function.sent implementation.
	      this.sent = this._sent = undefined;
	      this.done = false;
	      this.delegate = null;

	      this.tryEntries.forEach(resetTryEntry);

	      if (!skipTempReset) {
	        for (var name in this) {
	          // Not sure about the optimal order of these conditions:
	          if (name.charAt(0) === "t" &&
	              hasOwn.call(this, name) &&
	              !isNaN(+name.slice(1))) {
	            this[name] = undefined;
	          }
	        }
	      }
	    },

	    stop: function() {
	      this.done = true;

	      var rootEntry = this.tryEntries[0];
	      var rootRecord = rootEntry.completion;
	      if (rootRecord.type === "throw") {
	        throw rootRecord.arg;
	      }

	      return this.rval;
	    },

	    dispatchException: function(exception) {
	      if (this.done) {
	        throw exception;
	      }

	      var context = this;
	      function handle(loc, caught) {
	        record.type = "throw";
	        record.arg = exception;
	        context.next = loc;
	        return !!caught;
	      }

	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        var record = entry.completion;

	        if (entry.tryLoc === "root") {
	          // Exception thrown outside of any try block that could handle
	          // it, so set the completion value of the entire function to
	          // throw the exception.
	          return handle("end");
	        }

	        if (entry.tryLoc <= this.prev) {
	          var hasCatch = hasOwn.call(entry, "catchLoc");
	          var hasFinally = hasOwn.call(entry, "finallyLoc");

	          if (hasCatch && hasFinally) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            } else if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }

	          } else if (hasCatch) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            }

	          } else if (hasFinally) {
	            if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }

	          } else {
	            throw new Error("try statement without catch or finally");
	          }
	        }
	      }
	    },

	    abrupt: function(type, arg) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc <= this.prev &&
	            hasOwn.call(entry, "finallyLoc") &&
	            this.prev < entry.finallyLoc) {
	          var finallyEntry = entry;
	          break;
	        }
	      }

	      if (finallyEntry &&
	          (type === "break" ||
	           type === "continue") &&
	          finallyEntry.tryLoc <= arg &&
	          arg <= finallyEntry.finallyLoc) {
	        // Ignore the finally entry if control is not jumping to a
	        // location outside the try/catch block.
	        finallyEntry = null;
	      }

	      var record = finallyEntry ? finallyEntry.completion : {};
	      record.type = type;
	      record.arg = arg;

	      if (finallyEntry) {
	        this.next = finallyEntry.finallyLoc;
	      } else {
	        this.complete(record);
	      }

	      return ContinueSentinel;
	    },

	    complete: function(record, afterLoc) {
	      if (record.type === "throw") {
	        throw record.arg;
	      }

	      if (record.type === "break" ||
	          record.type === "continue") {
	        this.next = record.arg;
	      } else if (record.type === "return") {
	        this.rval = record.arg;
	        this.next = "end";
	      } else if (record.type === "normal" && afterLoc) {
	        this.next = afterLoc;
	      }
	    },

	    finish: function(finallyLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.finallyLoc === finallyLoc) {
	          this.complete(entry.completion, entry.afterLoc);
	          resetTryEntry(entry);
	          return ContinueSentinel;
	        }
	      }
	    },

	    "catch": function(tryLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc === tryLoc) {
	          var record = entry.completion;
	          if (record.type === "throw") {
	            var thrown = record.arg;
	            resetTryEntry(entry);
	          }
	          return thrown;
	        }
	      }

	      // The context.catch method must only be called with a location
	      // argument that corresponds to a known catch block.
	      throw new Error("illegal catch attempt");
	    },

	    delegateYield: function(iterable, resultName, nextLoc) {
	      this.delegate = {
	        iterator: values(iterable),
	        resultName: resultName,
	        nextLoc: nextLoc
	      };

	      return ContinueSentinel;
	    }
	  };
	})(
	  // Among the various tricks for obtaining a reference to the global
	  // object, this seems to be the most reliable technique that does not
	  // use indirect eval (which violates Content Security Policy).
	  typeof global === "object" ? global :
	  typeof window === "object" ? window :
	  typeof self === "object" ? self : this
	);

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(295)))

/***/ },
/* 295 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }


	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }



	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 296 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(297);
	module.exports = __webpack_require__(10).RegExp.escape;

/***/ },
/* 297 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/benjamingr/RexExp.escape
	var $export = __webpack_require__(9)
	  , $re     = __webpack_require__(298)(/[\\^$*+?.()|[\]{}]/g, '\\$&');

	$export($export.S, 'RegExp', {escape: function escape(it){ return $re(it); }});


/***/ },
/* 298 */
/***/ function(module, exports) {

	module.exports = function(regExp, replace){
	  var replacer = replace === Object(replace) ? function(part){
	    return replace[part];
	  } : replace;
	  return function(it){
	    return String(it).replace(regExp, replacer);
	  };
	};

/***/ },
/* 299 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * Copyright 2014 Takuya Asano
	 * Copyright 2010-2014 Atilika Inc. and contributors
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *     http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */

	"use strict";

	var TokenizerBuilder = __webpack_require__(300);
	var DictionaryBuilder = __webpack_require__(323);

	// Public methods
	var kuromoji = {
	    builder: function (option) {
	        return new TokenizerBuilder(option);
	    },
	    dictionaryBuilder: function () {
	        return new DictionaryBuilder();
	    }
	};

	module.exports = kuromoji;


/***/ },
/* 300 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * Copyright 2014 Takuya Asano
	 * Copyright 2010-2014 Atilika Inc. and contributors
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *     http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */

	"use strict";

	var Tokenizer = __webpack_require__(301);
	var DictionaryLoader = __webpack_require__(308);

	/**
	 * TokenizerBuilder create Tokenizer instance.
	 * @param {Object} option JSON object which have key-value pairs settings
	 * @param {string} option.dicPath Dictionary directory path (or URL using in browser)
	 * @constructor
	 */
	function TokenizerBuilder(option) {
	    if (option.dicPath == null) {
	        this.dic_path = "dict/";
	    } else {
	        this.dic_path = option.dicPath;
	    }
	}

	/**
	 * Build Tokenizer instance by asynchronous manner
	 * @param {TokenizerBuilder~onLoad} callback Callback function
	 */
	TokenizerBuilder.prototype.build = function (callback) {
	    var loader = new DictionaryLoader(this.dic_path);
	    loader.load(function (err, dic) {
	        callback(err, new Tokenizer(dic));
	    });
	};

	/**
	 * Callback used by build
	 * @callback TokenizerBuilder~onLoad
	 * @param {Object} err Error object
	 * @param {Tokenizer} tokenizer Prepared Tokenizer
	 */

	module.exports = TokenizerBuilder;


/***/ },
/* 301 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * Copyright 2014 Takuya Asano
	 * Copyright 2010-2014 Atilika Inc. and contributors
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *     http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */

	"use strict";

	var ViterbiBuilder = __webpack_require__(302);
	var ViterbiSearcher = __webpack_require__(306);
	var IpadicFormatter = __webpack_require__(307);

	var PUNCTUATION = /、|。/;

	/**
	 * Tokenizer
	 * @param {DynamicDictionaries} dic Dictionaries used by this tokenizer
	 * @constructor
	 */
	function Tokenizer(dic) {
	    this.token_info_dictionary = dic.token_info_dictionary;
	    this.unknown_dictionary = dic.unknown_dictionary;
	    this.viterbi_builder = new ViterbiBuilder(dic);
	    this.viterbi_searcher = new ViterbiSearcher(dic.connection_costs);
	    this.formatter = new IpadicFormatter();  // TODO Other dictionaries
	}

	/**
	 * Split into sentence by punctuation
	 * @param {string} input Input text
	 * @returns {Array.<string>} Sentences end with punctuation
	 */
	Tokenizer.splitByPunctuation = function (input) {
	    var sentences = [];
	    var tail = input;
	    while (true) {
	        if (tail === "") {
	            break;
	        }
	        var index = tail.search(PUNCTUATION);
	        if (index < 0) {
	            sentences.push(tail);
	            break;
	        }
	        sentences.push(tail.substring(0, index + 1));
	        tail = tail.substring(index + 1);
	    }
	    return sentences;
	};

	/**
	 * Tokenize text
	 * @param {string} text Input text to analyze
	 * @returns {Array} Tokens
	 */
	Tokenizer.prototype.tokenize = function (text) {
	    var sentences = Tokenizer.splitByPunctuation(text);
	    var tokens = [];
	    for (var i = 0; i < sentences.length; i++) {
	        var sentence = sentences[i];
	        this.tokenizeForSentence(sentence, tokens);
	    }
	    return tokens;
	};

	Tokenizer.prototype.tokenizeForSentence = function (sentence, tokens) {
	    if (tokens == null) {
	        tokens = [];
	    }
	    var lattice = this.getLattice(sentence);
	    var best_path = this.viterbi_searcher.search(lattice);
	    var last_pos = 0;
	    if (tokens.length > 0) {
	        last_pos = tokens[tokens.length - 1].word_position;
	    }

	    for (var j = 0; j < best_path.length; j++) {
	        var node = best_path[j];

	        var token, features, features_line;
	        if (node.type === "KNOWN") {
	            features_line = this.token_info_dictionary.getFeatures(node.name);
	            if (features_line == null) {
	                features = [];
	            } else {
	                features = features_line.split(",");
	            }
	            token = this.formatter.formatEntry(node.name, last_pos + node.start_pos, node.type, features);
	        } else if (node.type === "UNKNOWN") {
	            // Unknown word
	            features_line = this.unknown_dictionary.getFeatures(node.name);
	            if (features_line == null) {
	                features = [];
	            } else {
	                features = features_line.split(",");
	            }
	            token = this.formatter.formatUnknownEntry(node.name, last_pos + node.start_pos, node.type, features, node.surface_form);
	        } else {
	            // TODO User dictionary
	            token = this.formatter.formatEntry(node.name, last_pos + node.start_pos, node.type, []);
	        }

	        tokens.push(token);
	    }

	    return tokens;
	};

	/**
	 * Build word lattice
	 * @param {string} text Input text to analyze
	 * @returns {ViterbiLattice} Word lattice
	 */
	Tokenizer.prototype.getLattice = function (text) {
	    return this.viterbi_builder.build(text);
	};

	module.exports = Tokenizer;


/***/ },
/* 302 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * Copyright 2014 Takuya Asano
	 * Copyright 2010-2014 Atilika Inc. and contributors
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *     http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */

	"use strict";

	var ViterbiNode = __webpack_require__(303);
	var ViterbiLattice = __webpack_require__(304);
	var SurrogateAwareString = __webpack_require__(305);

	/**
	 * ViterbiBuilder builds word lattice (ViterbiLattice)
	 * @param {DynamicDictionaries} dic dictionary
	 * @constructor
	 */
	function ViterbiBuilder(dic) {
	    this.trie = dic.trie;
	    this.token_info_dictionary = dic.token_info_dictionary;
	    this.unknown_dictionary = dic.unknown_dictionary;
	}

	/**
	 * Build word lattice
	 * @param {string} sentence_str Input text
	 * @returns {ViterbiLattice} Word lattice
	 */
	ViterbiBuilder.prototype.build = function (sentence_str) {
	    var lattice = new ViterbiLattice();
	    var sentence = new SurrogateAwareString(sentence_str);

	    var key, trie_id, left_id, right_id, word_cost;
	    for (var pos = 0; pos < sentence.length; pos++) {
	        var tail = sentence.slice(pos);
	        var vocabulary = this.trie.commonPrefixSearch(tail);
	        for (var n = 0; n < vocabulary.length; n++) {  // Words in dictionary do not have surrogate pair (only UCS2 set)
	            trie_id = vocabulary[n].v;
	            key = vocabulary[n].k;

	            var token_info_ids = this.token_info_dictionary.target_map[trie_id];
	            for (var i = 0; i < token_info_ids.length; i++) {
	                var token_info_id = parseInt(token_info_ids[i]);

	                left_id = this.token_info_dictionary.dictionary.getShort(token_info_id);
	                right_id = this.token_info_dictionary.dictionary.getShort(token_info_id + 2);
	                word_cost = this.token_info_dictionary.dictionary.getShort(token_info_id + 4);

	                // node_name, cost, start_index, length, type, left_id, right_id, surface_form
	                lattice.append(new ViterbiNode(token_info_id, word_cost, pos + 1, key.length, "KNOWN", left_id, right_id, key));
	            }
	        }

	        // Unknown word processing
	        var surrogate_aware_tail = new SurrogateAwareString(tail);
	        var head_char = new SurrogateAwareString(surrogate_aware_tail.charAt(0));
	        var head_char_class = this.unknown_dictionary.lookup(head_char.toString());
	        if (vocabulary == null || vocabulary.length === 0 || head_char_class.is_always_invoke === 1) {
	            // Process unknown word
	            key = head_char;
	            if (head_char_class.is_grouping === 1 && 1 < surrogate_aware_tail.length) {
	                for (var k = 1; k < surrogate_aware_tail.length; k++) {
	                    var next_char = surrogate_aware_tail.charAt(k);
	                    var next_char_class = this.unknown_dictionary.lookup(next_char);
	                    if (head_char_class.class_name !== next_char_class.class_name) {
	                        break;
	                    }
	                    key += next_char;
	                }
	            }

	            var unk_ids = this.unknown_dictionary.target_map[head_char_class.class_id];
	            for (var j = 0; j < unk_ids.length; j++) {
	                var unk_id = parseInt(unk_ids[j]);

	                left_id = this.unknown_dictionary.dictionary.getShort(unk_id);
	                right_id = this.unknown_dictionary.dictionary.getShort(unk_id + 2);
	                word_cost = this.unknown_dictionary.dictionary.getShort(unk_id + 4);

	                // node_name, cost, start_index, length, type, left_id, right_id, surface_form
	                lattice.append(new ViterbiNode(unk_id, word_cost, pos + 1, key.length, "UNKNOWN", left_id, right_id, key.toString()));
	            }
	        }
	    }
	    lattice.appendEos();

	    return lattice;
	};

	module.exports = ViterbiBuilder;


/***/ },
/* 303 */
/***/ function(module, exports) {

	/*
	 * Copyright 2014 Takuya Asano
	 * Copyright 2010-2014 Atilika Inc. and contributors
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *     http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */

	"use strict";

	/**
	 * ViterbiNode is a node of ViterbiLattice
	 * @param {number} node_name Word ID
	 * @param {number} node_cost Word cost to generate
	 * @param {number} start_pos Start position from 1
	 * @param {number} length Word length
	 * @param {string} type Node type (KNOWN, UNKNOWN, BOS, EOS, ...)
	 * @param {number} left_id Left context ID
	 * @param {number} right_id Right context ID
	 * @param {string} surface_form Surface form of this word
	 * @constructor
	 */
	function ViterbiNode(node_name, node_cost, start_pos, length, type, left_id, right_id, surface_form) {
	    this.name = node_name;
	    this.cost = node_cost;
	    this.start_pos = start_pos;
	    this.length = length;
	    this.left_id = left_id;
	    this.right_id = right_id;
	    this.prev = null;
	    this.surface_form = surface_form;
	    if (type === "BOS") {
	        this.shortest_cost = 0;
	    } else {
	        this.shortest_cost = Number.MAX_VALUE;
	    }
	    this.type = type;
	}

	module.exports = ViterbiNode;


/***/ },
/* 304 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * Copyright 2014 Takuya Asano
	 * Copyright 2010-2014 Atilika Inc. and contributors
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *     http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */

	"use strict";

	var ViterbiNode = __webpack_require__(303);

	/**
	 * ViterbiLattice is a lattice in Viterbi algorithm
	 * @constructor
	 */
	function ViterbiLattice() {
	    this.nodes_end_at = [];
	    this.nodes_end_at[0] = [ new ViterbiNode(-1, 0, 0, 0, "BOS", 0, 0, "") ];
	    this.eos_pos = 1;
	}

	/**
	 * Append node to ViterbiLattice
	 * @param {ViterbiNode} node
	 */
	ViterbiLattice.prototype.append = function (node) {
	    var last_pos = node.start_pos + node.length - 1;
	    if (this.eos_pos < last_pos) {
	        this.eos_pos = last_pos;
	    }

	    var prev_nodes = this.nodes_end_at[last_pos];
	    if (prev_nodes == null) {
	        prev_nodes = [];
	    }
	    prev_nodes.push(node);

	    this.nodes_end_at[last_pos] = prev_nodes;
	};

	/**
	 * Set ends with EOS (End of Statement)
	 */
	ViterbiLattice.prototype.appendEos = function () {
	    var last_index = this.nodes_end_at.length;
	    this.eos_pos++;
	    this.nodes_end_at[last_index] = [ new ViterbiNode(-1, 0, this.eos_pos, 0, "EOS", 0, 0, "") ];
	};

	module.exports = ViterbiLattice;


/***/ },
/* 305 */
/***/ function(module, exports) {

	/*
	 * Copyright 2014 Takuya Asano
	 * Copyright 2010-2014 Atilika Inc. and contributors
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *     http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */

	"use strict";

	/**
	 * String wrapper for UTF-16 surrogate pair (4 bytes)
	 * @param {string} str String to wrap
	 * @constructor
	 */
	function SurrogateAwareString(str) {
	    this.str = str;
	    this.index_mapping = [];

	    for (var pos = 0; pos < str.length; pos++) {
	        var ch = str.charAt(pos);
	        this.index_mapping.push(pos);
	        if (SurrogateAwareString.isSurrogatePair(ch)) {
	            pos++;
	        }
	    }
	    // Surrogate aware length
	    this.length = this.index_mapping.length;
	}

	SurrogateAwareString.prototype.slice = function (index) {
	    if (this.index_mapping.length <= index) {
	        return "";
	    }
	    var surrogate_aware_index = this.index_mapping[index];
	    return this.str.slice(surrogate_aware_index);
	};

	SurrogateAwareString.prototype.charAt = function (index) {
	    if (this.str.length <= index) {
	        return "";
	    }
	    var surrogate_aware_start_index = this.index_mapping[index];
	    var surrogate_aware_end_index = this.index_mapping[index + 1];

	    if (surrogate_aware_end_index == null) {
	        return this.str.slice(surrogate_aware_start_index);
	    }
	    return this.str.slice(surrogate_aware_start_index, surrogate_aware_end_index);
	};

	SurrogateAwareString.prototype.charCodeAt = function (index) {
	    if (this.index_mapping.length <= index) {
	        return NaN;
	    }
	    var surrogate_aware_index = this.index_mapping[index];
	    var upper = this.str.charCodeAt(surrogate_aware_index);
	    var lower;
	    if (upper >= 0xD800 && upper <= 0xDBFF && surrogate_aware_index < this.str.length) {
	        lower = this.str.charCodeAt(surrogate_aware_index + 1);
	        if (lower >= 0xDC00 && lower <= 0xDFFF) {
	            return (upper - 0xD800) * 0x400 + lower - 0xDC00 + 0x10000;
	        }
	    }
	    return upper;
	};

	SurrogateAwareString.prototype.toString = function () {
	    return this.str;
	};

	SurrogateAwareString.isSurrogatePair = function (ch) {
	    var utf16_code = ch.charCodeAt(0);
	    if (utf16_code >= 0xD800 && utf16_code <= 0xDBFF) {
	        // surrogate pair
	        return true;
	    } else {
	        return false;
	    }
	};

	module.exports = SurrogateAwareString;


/***/ },
/* 306 */
/***/ function(module, exports) {

	/*
	 * Copyright 2014 Takuya Asano
	 * Copyright 2010-2014 Atilika Inc. and contributors
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *     http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */

	"use strict";

	/**
	 * ViterbiSearcher is for searching best Viterbi path
	 * @param {ConnectionCosts} connection_costs Connection costs matrix
	 * @constructor
	 */
	function ViterbiSearcher(connection_costs) {
	    this.connection_costs = connection_costs;
	}

	/**
	 * Search best path by forward-backward algorithm
	 * @param {ViterbiLattice} lattice Viterbi lattice to search
	 * @returns {Array} Shortest path
	 */
	ViterbiSearcher.prototype.search = function (lattice) {
	    lattice = this.forward(lattice);
	    return this.backward(lattice);
	};

	ViterbiSearcher.prototype.forward = function (lattice) {
	    var i, j, k;
	    for (i = 1; i <= lattice.eos_pos; i++) {
	        var nodes = lattice.nodes_end_at[i];
	        if (nodes == null) {
	            continue;
	        }
	        for (j = 0; j < nodes.length; j++) {
	            var node = nodes[j];
	            var cost = Number.MAX_VALUE;
	            var shortest_prev_node;

	            var prev_nodes = lattice.nodes_end_at[node.start_pos - 1];
	            if (prev_nodes == null) {
	                // TODO process unknown words (repair word lattice)
	                continue;
	            }
	            for (k = 0; k < prev_nodes.length; k++) {
	                var prev_node = prev_nodes[k];

	                var edge_cost;
	                if (node.left_id == null || prev_node.right_id == null) {
	                    // TODO assert
	                    console.log("Left or right is null");
	                    edge_cost = 0;
	                } else {
	                    edge_cost = this.connection_costs.get(prev_node.right_id, node.left_id);
	                }

	                var _cost = prev_node.shortest_cost + edge_cost + node.cost;
	                if (_cost < cost) {
	                    shortest_prev_node = prev_node;
	                    cost = _cost;
	                }
	            }

	            node.prev = shortest_prev_node;
	            node.shortest_cost = cost;
	        }
	    }
	    return lattice;
	};

	ViterbiSearcher.prototype.backward = function (lattice) {
	    var shortest_path = [];
	    var eos = lattice.nodes_end_at[lattice.nodes_end_at.length - 1][0];

	    var node_back = eos.prev;
	    if (node_back == null) {
	        return [];
	    }
	    while (node_back.type !== "BOS") {
	        shortest_path.push(node_back);
	        if (node_back.prev == null) {
	            // TODO Failed to back. Process unknown words?
	            return [];
	        }
	        node_back = node_back.prev;
	    }

	    return shortest_path.reverse();
	};

	module.exports = ViterbiSearcher;


/***/ },
/* 307 */
/***/ function(module, exports) {

	/*
	 * Copyright 2014 Takuya Asano
	 * Copyright 2010-2014 Atilika Inc. and contributors
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *     http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */

	"use strict";

	/**
	 * Mappings between IPADIC dictionary features and tokenized results
	 * @constructor
	 */
	function IpadicFormatter() {
	}

	IpadicFormatter.prototype.formatEntry = function (word_id, position, type, features) {
	    var token = {};
	    token.word_id = word_id;
	    token.word_type = type;
	    token.word_position = position;

	    token.surface_form = features[0];
	    token.pos = features[1];
	    token.pos_detail_1 = features[2];
	    token.pos_detail_2 = features[3];
	    token.pos_detail_3 = features[4];
	    token.conjugated_type = features[5];
	    token.conjugated_form = features[6];
	    token.basic_form = features[7];
	    token.reading = features[8];
	    token.pronunciation = features[9];

	    return token;
	};

	IpadicFormatter.prototype.formatUnknownEntry = function (word_id, position, type, features, surface_form) {
	    var token = {};
	    token.word_id = word_id;
	    token.word_type = type;
	    token.word_position = position;

	    token.surface_form = surface_form;
	    token.pos = features[1];
	    token.pos_detail_1 = features[2];
	    token.pos_detail_2 = features[3];
	    token.pos_detail_3 = features[4];
	    token.conjugated_type = features[5];
	    token.conjugated_form = features[6];
	    token.basic_form = features[7];
	    // token.reading = features[8];
	    // token.pronunciation = features[9];

	    return token;
	};

	module.exports = IpadicFormatter;


/***/ },
/* 308 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * Copyright 2014 Takuya Asano
	 * Copyright 2010-2014 Atilika Inc. and contributors
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *     http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */

	"use strict";

	var zlib = __webpack_require__(309);
	var DictionaryLoader = __webpack_require__(310);

	/**
	 * BrowserDictionaryLoader inherits DictionaryLoader, using jQuery XHR for download
	 * @param {string} dic_path Dictionary path
	 * @constructor
	 */
	function BrowserDictionaryLoader(dic_path) {
	    DictionaryLoader.apply(this, [dic_path]);
	}

	BrowserDictionaryLoader.prototype = Object.create(DictionaryLoader.prototype);

	/**
	 * Utility function to load gzipped dictionary
	 * @param {string} url Dictionary URL
	 * @param {BrowserDictionaryLoader~onLoad} callback Callback function
	 */
	BrowserDictionaryLoader.prototype.loadArrayBuffer = function (url, callback) {
	    var xhr = new XMLHttpRequest();
	    xhr.open("GET", url, true);
	    xhr.responseType = "arraybuffer";
	    xhr.onload = function () {
	        if (this.status !== 200) {
	            callback(xhr.statusText, null);
	        }
	        var arraybuffer = this.response;

	        var gz = new zlib.Zlib.Gunzip(new Uint8Array(arraybuffer));
	        var typed_array = gz.decompress();
	        callback(null, typed_array.buffer);
	    };
	    xhr.onerror = function (err) {
	        callback(err, null);
	    };
	    xhr.send();
	};

	/**
	 * Callback
	 * @callback BrowserDictionaryLoader~onLoad
	 * @param {Object} err Error object
	 * @param {Uint8Array} buffer Loaded buffer
	 */

	module.exports = BrowserDictionaryLoader;


/***/ },
/* 309 */
/***/ function(module, exports) {

	/** @license zlib.js 2012 - imaya [ https://github.com/imaya/zlib.js ] The MIT License */(function() {'use strict';function n(e){throw e;}var q=void 0,aa=this;function r(e,c){var d=e.split("."),b=aa;!(d[0]in b)&&b.execScript&&b.execScript("var "+d[0]);for(var a;d.length&&(a=d.shift());)!d.length&&c!==q?b[a]=c:b=b[a]?b[a]:b[a]={}};var u="undefined"!==typeof Uint8Array&&"undefined"!==typeof Uint16Array&&"undefined"!==typeof Uint32Array&&"undefined"!==typeof DataView;new (u?Uint8Array:Array)(256);var v;for(v=0;256>v;++v)for(var w=v,ba=7,w=w>>>1;w;w>>>=1)--ba;function x(e,c,d){var b,a="number"===typeof c?c:c=0,f="number"===typeof d?d:e.length;b=-1;for(a=f&7;a--;++c)b=b>>>8^z[(b^e[c])&255];for(a=f>>3;a--;c+=8)b=b>>>8^z[(b^e[c])&255],b=b>>>8^z[(b^e[c+1])&255],b=b>>>8^z[(b^e[c+2])&255],b=b>>>8^z[(b^e[c+3])&255],b=b>>>8^z[(b^e[c+4])&255],b=b>>>8^z[(b^e[c+5])&255],b=b>>>8^z[(b^e[c+6])&255],b=b>>>8^z[(b^e[c+7])&255];return(b^4294967295)>>>0}
	var A=[0,1996959894,3993919788,2567524794,124634137,1886057615,3915621685,2657392035,249268274,2044508324,3772115230,2547177864,162941995,2125561021,3887607047,2428444049,498536548,1789927666,4089016648,2227061214,450548861,1843258603,4107580753,2211677639,325883990,1684777152,4251122042,2321926636,335633487,1661365465,4195302755,2366115317,997073096,1281953886,3579855332,2724688242,1006888145,1258607687,3524101629,2768942443,901097722,1119000684,3686517206,2898065728,853044451,1172266101,3705015759,
	2882616665,651767980,1373503546,3369554304,3218104598,565507253,1454621731,3485111705,3099436303,671266974,1594198024,3322730930,2970347812,795835527,1483230225,3244367275,3060149565,1994146192,31158534,2563907772,4023717930,1907459465,112637215,2680153253,3904427059,2013776290,251722036,2517215374,3775830040,2137656763,141376813,2439277719,3865271297,1802195444,476864866,2238001368,4066508878,1812370925,453092731,2181625025,4111451223,1706088902,314042704,2344532202,4240017532,1658658271,366619977,
	2362670323,4224994405,1303535960,984961486,2747007092,3569037538,1256170817,1037604311,2765210733,3554079995,1131014506,879679996,2909243462,3663771856,1141124467,855842277,2852801631,3708648649,1342533948,654459306,3188396048,3373015174,1466479909,544179635,3110523913,3462522015,1591671054,702138776,2966460450,3352799412,1504918807,783551873,3082640443,3233442989,3988292384,2596254646,62317068,1957810842,3939845945,2647816111,81470997,1943803523,3814918930,2489596804,225274430,2053790376,3826175755,
	2466906013,167816743,2097651377,4027552580,2265490386,503444072,1762050814,4150417245,2154129355,426522225,1852507879,4275313526,2312317920,282753626,1742555852,4189708143,2394877945,397917763,1622183637,3604390888,2714866558,953729732,1340076626,3518719985,2797360999,1068828381,1219638859,3624741850,2936675148,906185462,1090812512,3747672003,2825379669,829329135,1181335161,3412177804,3160834842,628085408,1382605366,3423369109,3138078467,570562233,1426400815,3317316542,2998733608,733239954,1555261956,
	3268935591,3050360625,752459403,1541320221,2607071920,3965973030,1969922972,40735498,2617837225,3943577151,1913087877,83908371,2512341634,3803740692,2075208622,213261112,2463272603,3855990285,2094854071,198958881,2262029012,4057260610,1759359992,534414190,2176718541,4139329115,1873836001,414664567,2282248934,4279200368,1711684554,285281116,2405801727,4167216745,1634467795,376229701,2685067896,3608007406,1308918612,956543938,2808555105,3495958263,1231636301,1047427035,2932959818,3654703836,1088359270,
	936918E3,2847714899,3736837829,1202900863,817233897,3183342108,3401237130,1404277552,615818150,3134207493,3453421203,1423857449,601450431,3009837614,3294710456,1567103746,711928724,3020668471,3272380065,1510334235,755167117],z=u?new Uint32Array(A):A;function B(){}B.prototype.getName=function(){return this.name};B.prototype.getData=function(){return this.data};B.prototype.H=function(){return this.I};r("Zlib.GunzipMember",B);r("Zlib.GunzipMember.prototype.getName",B.prototype.getName);r("Zlib.GunzipMember.prototype.getData",B.prototype.getData);r("Zlib.GunzipMember.prototype.getMtime",B.prototype.H);function D(e){var c=e.length,d=0,b=Number.POSITIVE_INFINITY,a,f,g,k,m,p,t,h,l,y;for(h=0;h<c;++h)e[h]>d&&(d=e[h]),e[h]<b&&(b=e[h]);a=1<<d;f=new (u?Uint32Array:Array)(a);g=1;k=0;for(m=2;g<=d;){for(h=0;h<c;++h)if(e[h]===g){p=0;t=k;for(l=0;l<g;++l)p=p<<1|t&1,t>>=1;y=g<<16|h;for(l=p;l<a;l+=m)f[l]=y;++k}++g;k<<=1;m<<=1}return[f,d,b]};var E=[],F;for(F=0;288>F;F++)switch(!0){case 143>=F:E.push([F+48,8]);break;case 255>=F:E.push([F-144+400,9]);break;case 279>=F:E.push([F-256+0,7]);break;case 287>=F:E.push([F-280+192,8]);break;default:n("invalid literal: "+F)}
	var ca=function(){function e(a){switch(!0){case 3===a:return[257,a-3,0];case 4===a:return[258,a-4,0];case 5===a:return[259,a-5,0];case 6===a:return[260,a-6,0];case 7===a:return[261,a-7,0];case 8===a:return[262,a-8,0];case 9===a:return[263,a-9,0];case 10===a:return[264,a-10,0];case 12>=a:return[265,a-11,1];case 14>=a:return[266,a-13,1];case 16>=a:return[267,a-15,1];case 18>=a:return[268,a-17,1];case 22>=a:return[269,a-19,2];case 26>=a:return[270,a-23,2];case 30>=a:return[271,a-27,2];case 34>=a:return[272,
	a-31,2];case 42>=a:return[273,a-35,3];case 50>=a:return[274,a-43,3];case 58>=a:return[275,a-51,3];case 66>=a:return[276,a-59,3];case 82>=a:return[277,a-67,4];case 98>=a:return[278,a-83,4];case 114>=a:return[279,a-99,4];case 130>=a:return[280,a-115,4];case 162>=a:return[281,a-131,5];case 194>=a:return[282,a-163,5];case 226>=a:return[283,a-195,5];case 257>=a:return[284,a-227,5];case 258===a:return[285,a-258,0];default:n("invalid length: "+a)}}var c=[],d,b;for(d=3;258>=d;d++)b=e(d),c[d]=b[2]<<24|b[1]<<
	16|b[0];return c}();u&&new Uint32Array(ca);function G(e,c){this.i=[];this.j=32768;this.d=this.f=this.c=this.n=0;this.input=u?new Uint8Array(e):e;this.o=!1;this.k=H;this.z=!1;if(c||!(c={}))c.index&&(this.c=c.index),c.bufferSize&&(this.j=c.bufferSize),c.bufferType&&(this.k=c.bufferType),c.resize&&(this.z=c.resize);switch(this.k){case I:this.a=32768;this.b=new (u?Uint8Array:Array)(32768+this.j+258);break;case H:this.a=0;this.b=new (u?Uint8Array:Array)(this.j);this.e=this.F;this.q=this.B;this.l=this.D;break;default:n(Error("invalid inflate mode"))}}
	var I=0,H=1;
	G.prototype.g=function(){for(;!this.o;){var e=J(this,3);e&1&&(this.o=!0);e>>>=1;switch(e){case 0:var c=this.input,d=this.c,b=this.b,a=this.a,f=c.length,g=q,k=q,m=b.length,p=q;this.d=this.f=0;d+1>=f&&n(Error("invalid uncompressed block header: LEN"));g=c[d++]|c[d++]<<8;d+1>=f&&n(Error("invalid uncompressed block header: NLEN"));k=c[d++]|c[d++]<<8;g===~k&&n(Error("invalid uncompressed block header: length verify"));d+g>c.length&&n(Error("input buffer is broken"));switch(this.k){case I:for(;a+g>b.length;){p=
	m-a;g-=p;if(u)b.set(c.subarray(d,d+p),a),a+=p,d+=p;else for(;p--;)b[a++]=c[d++];this.a=a;b=this.e();a=this.a}break;case H:for(;a+g>b.length;)b=this.e({t:2});break;default:n(Error("invalid inflate mode"))}if(u)b.set(c.subarray(d,d+g),a),a+=g,d+=g;else for(;g--;)b[a++]=c[d++];this.c=d;this.a=a;this.b=b;break;case 1:this.l(da,ea);break;case 2:fa(this);break;default:n(Error("unknown BTYPE: "+e))}}return this.q()};
	var K=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],L=u?new Uint16Array(K):K,N=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,258,258],O=u?new Uint16Array(N):N,P=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0],Q=u?new Uint8Array(P):P,R=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577],ga=u?new Uint16Array(R):R,ha=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,
	13,13],U=u?new Uint8Array(ha):ha,V=new (u?Uint8Array:Array)(288),W,ia;W=0;for(ia=V.length;W<ia;++W)V[W]=143>=W?8:255>=W?9:279>=W?7:8;var da=D(V),X=new (u?Uint8Array:Array)(30),Y,ja;Y=0;for(ja=X.length;Y<ja;++Y)X[Y]=5;var ea=D(X);function J(e,c){for(var d=e.f,b=e.d,a=e.input,f=e.c,g=a.length,k;b<c;)f>=g&&n(Error("input buffer is broken")),d|=a[f++]<<b,b+=8;k=d&(1<<c)-1;e.f=d>>>c;e.d=b-c;e.c=f;return k}
	function Z(e,c){for(var d=e.f,b=e.d,a=e.input,f=e.c,g=a.length,k=c[0],m=c[1],p,t;b<m&&!(f>=g);)d|=a[f++]<<b,b+=8;p=k[d&(1<<m)-1];t=p>>>16;e.f=d>>t;e.d=b-t;e.c=f;return p&65535}
	function fa(e){function c(a,c,b){var d,e=this.w,f,g;for(g=0;g<a;)switch(d=Z(this,c),d){case 16:for(f=3+J(this,2);f--;)b[g++]=e;break;case 17:for(f=3+J(this,3);f--;)b[g++]=0;e=0;break;case 18:for(f=11+J(this,7);f--;)b[g++]=0;e=0;break;default:e=b[g++]=d}this.w=e;return b}var d=J(e,5)+257,b=J(e,5)+1,a=J(e,4)+4,f=new (u?Uint8Array:Array)(L.length),g,k,m,p;for(p=0;p<a;++p)f[L[p]]=J(e,3);if(!u){p=a;for(a=f.length;p<a;++p)f[L[p]]=0}g=D(f);k=new (u?Uint8Array:Array)(d);m=new (u?Uint8Array:Array)(b);e.w=
	0;e.l(D(c.call(e,d,g,k)),D(c.call(e,b,g,m)))}G.prototype.l=function(e,c){var d=this.b,b=this.a;this.r=e;for(var a=d.length-258,f,g,k,m;256!==(f=Z(this,e));)if(256>f)b>=a&&(this.a=b,d=this.e(),b=this.a),d[b++]=f;else{g=f-257;m=O[g];0<Q[g]&&(m+=J(this,Q[g]));f=Z(this,c);k=ga[f];0<U[f]&&(k+=J(this,U[f]));b>=a&&(this.a=b,d=this.e(),b=this.a);for(;m--;)d[b]=d[b++-k]}for(;8<=this.d;)this.d-=8,this.c--;this.a=b};
	G.prototype.D=function(e,c){var d=this.b,b=this.a;this.r=e;for(var a=d.length,f,g,k,m;256!==(f=Z(this,e));)if(256>f)b>=a&&(d=this.e(),a=d.length),d[b++]=f;else{g=f-257;m=O[g];0<Q[g]&&(m+=J(this,Q[g]));f=Z(this,c);k=ga[f];0<U[f]&&(k+=J(this,U[f]));b+m>a&&(d=this.e(),a=d.length);for(;m--;)d[b]=d[b++-k]}for(;8<=this.d;)this.d-=8,this.c--;this.a=b};
	G.prototype.e=function(){var e=new (u?Uint8Array:Array)(this.a-32768),c=this.a-32768,d,b,a=this.b;if(u)e.set(a.subarray(32768,e.length));else{d=0;for(b=e.length;d<b;++d)e[d]=a[d+32768]}this.i.push(e);this.n+=e.length;if(u)a.set(a.subarray(c,c+32768));else for(d=0;32768>d;++d)a[d]=a[c+d];this.a=32768;return a};
	G.prototype.F=function(e){var c,d=this.input.length/this.c+1|0,b,a,f,g=this.input,k=this.b;e&&("number"===typeof e.t&&(d=e.t),"number"===typeof e.A&&(d+=e.A));2>d?(b=(g.length-this.c)/this.r[2],f=258*(b/2)|0,a=f<k.length?k.length+f:k.length<<1):a=k.length*d;u?(c=new Uint8Array(a),c.set(k)):c=k;return this.b=c};
	G.prototype.q=function(){var e=0,c=this.b,d=this.i,b,a=new (u?Uint8Array:Array)(this.n+(this.a-32768)),f,g,k,m;if(0===d.length)return u?this.b.subarray(32768,this.a):this.b.slice(32768,this.a);f=0;for(g=d.length;f<g;++f){b=d[f];k=0;for(m=b.length;k<m;++k)a[e++]=b[k]}f=32768;for(g=this.a;f<g;++f)a[e++]=c[f];this.i=[];return this.buffer=a};
	G.prototype.B=function(){var e,c=this.a;u?this.z?(e=new Uint8Array(c),e.set(this.b.subarray(0,c))):e=this.b.subarray(0,c):(this.b.length>c&&(this.b.length=c),e=this.b);return this.buffer=e};function $(e){this.input=e;this.c=0;this.m=[];this.s=!1}$.prototype.G=function(){this.s||this.g();return this.m.slice()};
	$.prototype.g=function(){for(var e=this.input.length;this.c<e;){var c=new B,d=q,b=q,a=q,f=q,g=q,k=q,m=q,p=q,t=q,h=this.input,l=this.c;c.u=h[l++];c.v=h[l++];(31!==c.u||139!==c.v)&&n(Error("invalid file signature:"+c.u+","+c.v));c.p=h[l++];switch(c.p){case 8:break;default:n(Error("unknown compression method: "+c.p))}c.h=h[l++];p=h[l++]|h[l++]<<8|h[l++]<<16|h[l++]<<24;c.I=new Date(1E3*p);c.O=h[l++];c.N=h[l++];0<(c.h&4)&&(c.J=h[l++]|h[l++]<<8,l+=c.J);if(0<(c.h&8)){m=[];for(k=0;0<(g=h[l++]);)m[k++]=String.fromCharCode(g);
	c.name=m.join("")}if(0<(c.h&16)){m=[];for(k=0;0<(g=h[l++]);)m[k++]=String.fromCharCode(g);c.K=m.join("")}0<(c.h&2)&&(c.C=x(h,0,l)&65535,c.C!==(h[l++]|h[l++]<<8)&&n(Error("invalid header crc16")));d=h[h.length-4]|h[h.length-3]<<8|h[h.length-2]<<16|h[h.length-1]<<24;h.length-l-4-4<512*d&&(f=d);b=new G(h,{index:l,bufferSize:f});c.data=a=b.g();l=b.c;c.L=t=(h[l++]|h[l++]<<8|h[l++]<<16|h[l++]<<24)>>>0;x(a,q,q)!==t&&n(Error("invalid CRC-32 checksum: 0x"+x(a,q,q).toString(16)+" / 0x"+t.toString(16)));c.M=
	d=(h[l++]|h[l++]<<8|h[l++]<<16|h[l++]<<24)>>>0;(a.length&4294967295)!==d&&n(Error("invalid input size: "+(a.length&4294967295)+" / "+d));this.m.push(c);this.c=l}this.s=!0;var y=this.m,s,M,S=0,T=0,C;s=0;for(M=y.length;s<M;++s)T+=y[s].data.length;if(u){C=new Uint8Array(T);for(s=0;s<M;++s)C.set(y[s].data,S),S+=y[s].data.length}else{C=[];for(s=0;s<M;++s)C[s]=y[s].data;C=Array.prototype.concat.apply([],C)}return C};r("Zlib.Gunzip",$);r("Zlib.Gunzip.prototype.decompress",$.prototype.g);r("Zlib.Gunzip.prototype.getMembers",$.prototype.G);}).call(this); //@ sourceMappingURL=gunzip.min.js.map


/***/ },
/* 310 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * Copyright 2014 Takuya Asano
	 * Copyright 2010-2014 Atilika Inc. and contributors
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *     http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */

	"use strict";

	var path = __webpack_require__(311);
	var async = __webpack_require__(312);
	var DynamicDictionaries = __webpack_require__(314);

	/**
	 * DictionaryLoader base constructor
	 * @param {string} dic_path Dictionary path
	 * @constructor
	 */
	function DictionaryLoader(dic_path) {
	    this.dic = new DynamicDictionaries();
	    this.dic_path = dic_path;
	}

	DictionaryLoader.prototype.loadArrayBuffer = function (file, callback) {
	    throw new Error("DictionaryLoader#loadArrayBuffer should be overwrite");
	};

	/**
	 * Load dictionary files
	 * @param {DictionaryLoader~onLoad} load_callback Callback function called after loaded
	 */
	DictionaryLoader.prototype.load = function (load_callback) {
	    var dic = this.dic;
	    var dic_path = this.dic_path;
	    var loadArrayBuffer = this.loadArrayBuffer;

	    async.parallel([
	        // Trie
	        function (callback) {
	            async.map([ "base.dat.gz", "check.dat.gz" ], function (filename, _callback) {
	                loadArrayBuffer(path.join(dic_path, filename), function (err, buffer) {
	                    if(err) {
	                        return _callback(err);
	                    }
	                    _callback(null, buffer);
	                });
	            }, function (err, buffers) {
	                if(err) {
	                    return callback(err);
	                }
	                var base_buffer = new Int32Array(buffers[0]);
	                var check_buffer = new Int32Array(buffers[1]);

	                dic.loadTrie(base_buffer, check_buffer);
	                callback(null);
	            });
	        },
	        // Token info dictionaries
	        function (callback) {
	            async.map([ "tid.dat.gz", "tid_pos.dat.gz", "tid_map.dat.gz" ], function (filename, _callback) {
	                loadArrayBuffer(path.join(dic_path, filename), function (err, buffer) {
	                    if(err) {
	                        return _callback(err);
	                    }
	                    _callback(null, buffer);
	                });
	            }, function (err, buffers) {
	                if(err) {
	                    return callback(err);
	                }
	                var token_info_buffer = new Uint8Array(buffers[0]);
	                var pos_buffer = new Uint8Array(buffers[1]);
	                var target_map_buffer = new Uint8Array(buffers[2]);

	                dic.loadTokenInfoDictionaries(token_info_buffer, pos_buffer, target_map_buffer);
	                callback(null);
	            });
	        },
	        // Connection cost matrix
	        function (callback) {
	            loadArrayBuffer(path.join(dic_path, "cc.dat.gz"), function (err, buffer) {
	                if(err) {
	                    return callback(err);
	                }
	                var cc_buffer = new Int16Array(buffer);
	                dic.loadConnectionCosts(cc_buffer);
	                callback(null);
	            });
	        },
	        // Unknown dictionaries
	        function (callback) {
	            async.map([ "unk.dat.gz", "unk_pos.dat.gz", "unk_map.dat.gz", "unk_char.dat.gz", "unk_compat.dat.gz", "unk_invoke.dat.gz" ], function (filename, _callback) {
	                loadArrayBuffer(path.join(dic_path, filename), function (err, buffer) {
	                    if(err) {
	                        return _callback(err);
	                    }
	                    _callback(null, buffer);
	                });
	            }, function (err, buffers) {
	                if(err) {
	                    return callback(err);
	                }
	                var unk_buffer = new Uint8Array(buffers[0]);
	                var unk_pos_buffer = new Uint8Array(buffers[1]);
	                var unk_map_buffer = new Uint8Array(buffers[2]);
	                var cat_map_buffer = new Uint8Array(buffers[3]);
	                var compat_cat_map_buffer = new Uint32Array(buffers[4]);
	                var invoke_def_buffer = new Uint8Array(buffers[5]);

	                dic.loadUnknownDictionaries(unk_buffer, unk_pos_buffer, unk_map_buffer, cat_map_buffer, compat_cat_map_buffer, invoke_def_buffer);
	                // dic.loadUnknownDictionaries(char_buffer, unk_buffer);
	                callback(null);
	            });
	        }
	    ], function (err) {
	        load_callback(err, dic);
	    });
	};

	/**
	 * Callback
	 * @callback DictionaryLoader~onLoad
	 * @param {Object} err Error object
	 * @param {DynamicDictionaries} dic Loaded dictionary
	 */

	module.exports = DictionaryLoader;


/***/ },
/* 311 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	// resolves . and .. elements in a path array with directory names there
	// must be no slashes, empty elements, or device names (c:\) in the array
	// (so also no leading and trailing slashes - it does not distinguish
	// relative and absolute paths)
	function normalizeArray(parts, allowAboveRoot) {
	  // if the path tries to go above the root, `up` ends up > 0
	  var up = 0;
	  for (var i = parts.length - 1; i >= 0; i--) {
	    var last = parts[i];
	    if (last === '.') {
	      parts.splice(i, 1);
	    } else if (last === '..') {
	      parts.splice(i, 1);
	      up++;
	    } else if (up) {
	      parts.splice(i, 1);
	      up--;
	    }
	  }

	  // if the path is allowed to go above the root, restore leading ..s
	  if (allowAboveRoot) {
	    for (; up--; up) {
	      parts.unshift('..');
	    }
	  }

	  return parts;
	}

	// Split a filename into [root, dir, basename, ext], unix version
	// 'root' is just a slash, or nothing.
	var splitPathRe =
	    /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
	var splitPath = function(filename) {
	  return splitPathRe.exec(filename).slice(1);
	};

	// path.resolve([from ...], to)
	// posix version
	exports.resolve = function() {
	  var resolvedPath = '',
	      resolvedAbsolute = false;

	  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
	    var path = (i >= 0) ? arguments[i] : process.cwd();

	    // Skip empty and invalid entries
	    if (typeof path !== 'string') {
	      throw new TypeError('Arguments to path.resolve must be strings');
	    } else if (!path) {
	      continue;
	    }

	    resolvedPath = path + '/' + resolvedPath;
	    resolvedAbsolute = path.charAt(0) === '/';
	  }

	  // At this point the path should be resolved to a full absolute path, but
	  // handle relative paths to be safe (might happen when process.cwd() fails)

	  // Normalize the path
	  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
	    return !!p;
	  }), !resolvedAbsolute).join('/');

	  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
	};

	// path.normalize(path)
	// posix version
	exports.normalize = function(path) {
	  var isAbsolute = exports.isAbsolute(path),
	      trailingSlash = substr(path, -1) === '/';

	  // Normalize the path
	  path = normalizeArray(filter(path.split('/'), function(p) {
	    return !!p;
	  }), !isAbsolute).join('/');

	  if (!path && !isAbsolute) {
	    path = '.';
	  }
	  if (path && trailingSlash) {
	    path += '/';
	  }

	  return (isAbsolute ? '/' : '') + path;
	};

	// posix version
	exports.isAbsolute = function(path) {
	  return path.charAt(0) === '/';
	};

	// posix version
	exports.join = function() {
	  var paths = Array.prototype.slice.call(arguments, 0);
	  return exports.normalize(filter(paths, function(p, index) {
	    if (typeof p !== 'string') {
	      throw new TypeError('Arguments to path.join must be strings');
	    }
	    return p;
	  }).join('/'));
	};


	// path.relative(from, to)
	// posix version
	exports.relative = function(from, to) {
	  from = exports.resolve(from).substr(1);
	  to = exports.resolve(to).substr(1);

	  function trim(arr) {
	    var start = 0;
	    for (; start < arr.length; start++) {
	      if (arr[start] !== '') break;
	    }

	    var end = arr.length - 1;
	    for (; end >= 0; end--) {
	      if (arr[end] !== '') break;
	    }

	    if (start > end) return [];
	    return arr.slice(start, end - start + 1);
	  }

	  var fromParts = trim(from.split('/'));
	  var toParts = trim(to.split('/'));

	  var length = Math.min(fromParts.length, toParts.length);
	  var samePartsLength = length;
	  for (var i = 0; i < length; i++) {
	    if (fromParts[i] !== toParts[i]) {
	      samePartsLength = i;
	      break;
	    }
	  }

	  var outputParts = [];
	  for (var i = samePartsLength; i < fromParts.length; i++) {
	    outputParts.push('..');
	  }

	  outputParts = outputParts.concat(toParts.slice(samePartsLength));

	  return outputParts.join('/');
	};

	exports.sep = '/';
	exports.delimiter = ':';

	exports.dirname = function(path) {
	  var result = splitPath(path),
	      root = result[0],
	      dir = result[1];

	  if (!root && !dir) {
	    // No dirname whatsoever
	    return '.';
	  }

	  if (dir) {
	    // It has a dirname, strip trailing slash
	    dir = dir.substr(0, dir.length - 1);
	  }

	  return root + dir;
	};


	exports.basename = function(path, ext) {
	  var f = splitPath(path)[2];
	  // TODO: make this comparison case-insensitive on windows?
	  if (ext && f.substr(-1 * ext.length) === ext) {
	    f = f.substr(0, f.length - ext.length);
	  }
	  return f;
	};


	exports.extname = function(path) {
	  return splitPath(path)[3];
	};

	function filter (xs, f) {
	    if (xs.filter) return xs.filter(f);
	    var res = [];
	    for (var i = 0; i < xs.length; i++) {
	        if (f(xs[i], i, xs)) res.push(xs[i]);
	    }
	    return res;
	}

	// String.prototype.substr - negative index don't work in IE8
	var substr = 'ab'.substr(-1) === 'b'
	    ? function (str, start, len) { return str.substr(start, len) }
	    : function (str, start, len) {
	        if (start < 0) start = str.length + start;
	        return str.substr(start, len);
	    }
	;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(295)))

/***/ },
/* 312 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, setImmediate, process) {(function (global, factory) {
	     true ? factory(exports) :
	    typeof define === 'function' && define.amd ? define(['exports'], factory) :
	    (factory((global.async = global.async || {})));
	}(this, function (exports) { 'use strict';

	    /**
	     * A faster alternative to `Function#apply`, this function invokes `func`
	     * with the `this` binding of `thisArg` and the arguments of `args`.
	     *
	     * @private
	     * @param {Function} func The function to invoke.
	     * @param {*} thisArg The `this` binding of `func`.
	     * @param {Array} args The arguments to invoke `func` with.
	     * @returns {*} Returns the result of `func`.
	     */
	    function apply(func, thisArg, args) {
	      var length = args.length;
	      switch (length) {
	        case 0: return func.call(thisArg);
	        case 1: return func.call(thisArg, args[0]);
	        case 2: return func.call(thisArg, args[0], args[1]);
	        case 3: return func.call(thisArg, args[0], args[1], args[2]);
	      }
	      return func.apply(thisArg, args);
	    }

	    /**
	     * Checks if `value` is the
	     * [language type](http://www.ecma-international.org/ecma-262/6.0/#sec-ecmascript-language-types)
	     * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	     * @example
	     *
	     * _.isObject({});
	     * // => true
	     *
	     * _.isObject([1, 2, 3]);
	     * // => true
	     *
	     * _.isObject(_.noop);
	     * // => true
	     *
	     * _.isObject(null);
	     * // => false
	     */
	    function isObject(value) {
	      var type = typeof value;
	      return !!value && (type == 'object' || type == 'function');
	    }

	    var funcTag = '[object Function]';
	    var genTag = '[object GeneratorFunction]';
	    /** Used for built-in method references. */
	    var objectProto = Object.prototype;

	    /**
	     * Used to resolve the
	     * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	     * of values.
	     */
	    var objectToString = objectProto.toString;

	    /**
	     * Checks if `value` is classified as a `Function` object.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is correctly classified,
	     *  else `false`.
	     * @example
	     *
	     * _.isFunction(_);
	     * // => true
	     *
	     * _.isFunction(/abc/);
	     * // => false
	     */
	    function isFunction(value) {
	      // The use of `Object#toString` avoids issues with the `typeof` operator
	      // in Safari 8 which returns 'object' for typed array and weak map constructors,
	      // and PhantomJS 1.9 which returns 'function' for `NodeList` instances.
	      var tag = isObject(value) ? objectToString.call(value) : '';
	      return tag == funcTag || tag == genTag;
	    }

	    /**
	     * Checks if `value` is object-like. A value is object-like if it's not `null`
	     * and has a `typeof` result of "object".
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	     * @example
	     *
	     * _.isObjectLike({});
	     * // => true
	     *
	     * _.isObjectLike([1, 2, 3]);
	     * // => true
	     *
	     * _.isObjectLike(_.noop);
	     * // => false
	     *
	     * _.isObjectLike(null);
	     * // => false
	     */
	    function isObjectLike(value) {
	      return !!value && typeof value == 'object';
	    }

	    /** `Object#toString` result references. */
	    var symbolTag = '[object Symbol]';

	    /** Used for built-in method references. */
	    var objectProto$1 = Object.prototype;

	    /**
	     * Used to resolve the
	     * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	     * of values.
	     */
	    var objectToString$1 = objectProto$1.toString;

	    /**
	     * Checks if `value` is classified as a `Symbol` primitive or object.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is correctly classified,
	     *  else `false`.
	     * @example
	     *
	     * _.isSymbol(Symbol.iterator);
	     * // => true
	     *
	     * _.isSymbol('abc');
	     * // => false
	     */
	    function isSymbol(value) {
	      return typeof value == 'symbol' ||
	        (isObjectLike(value) && objectToString$1.call(value) == symbolTag);
	    }

	    /** Used as references for various `Number` constants. */
	    var NAN = 0 / 0;

	    /** Used to match leading and trailing whitespace. */
	    var reTrim = /^\s+|\s+$/g;

	    /** Used to detect bad signed hexadecimal string values. */
	    var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

	    /** Used to detect binary string values. */
	    var reIsBinary = /^0b[01]+$/i;

	    /** Used to detect octal string values. */
	    var reIsOctal = /^0o[0-7]+$/i;

	    /** Built-in method references without a dependency on `root`. */
	    var freeParseInt = parseInt;

	    /**
	     * Converts `value` to a number.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Lang
	     * @param {*} value The value to process.
	     * @returns {number} Returns the number.
	     * @example
	     *
	     * _.toNumber(3.2);
	     * // => 3.2
	     *
	     * _.toNumber(Number.MIN_VALUE);
	     * // => 5e-324
	     *
	     * _.toNumber(Infinity);
	     * // => Infinity
	     *
	     * _.toNumber('3.2');
	     * // => 3.2
	     */
	    function toNumber(value) {
	      if (typeof value == 'number') {
	        return value;
	      }
	      if (isSymbol(value)) {
	        return NAN;
	      }
	      if (isObject(value)) {
	        var other = isFunction(value.valueOf) ? value.valueOf() : value;
	        value = isObject(other) ? (other + '') : other;
	      }
	      if (typeof value != 'string') {
	        return value === 0 ? value : +value;
	      }
	      value = value.replace(reTrim, '');
	      var isBinary = reIsBinary.test(value);
	      return (isBinary || reIsOctal.test(value))
	        ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
	        : (reIsBadHex.test(value) ? NAN : +value);
	    }

	    var INFINITY = 1 / 0;
	    var MAX_INTEGER = 1.7976931348623157e+308;
	    /**
	     * Converts `value` to a finite number.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.12.0
	     * @category Lang
	     * @param {*} value The value to convert.
	     * @returns {number} Returns the converted number.
	     * @example
	     *
	     * _.toFinite(3.2);
	     * // => 3.2
	     *
	     * _.toFinite(Number.MIN_VALUE);
	     * // => 5e-324
	     *
	     * _.toFinite(Infinity);
	     * // => 1.7976931348623157e+308
	     *
	     * _.toFinite('3.2');
	     * // => 3.2
	     */
	    function toFinite(value) {
	      if (!value) {
	        return value === 0 ? value : 0;
	      }
	      value = toNumber(value);
	      if (value === INFINITY || value === -INFINITY) {
	        var sign = (value < 0 ? -1 : 1);
	        return sign * MAX_INTEGER;
	      }
	      return value === value ? value : 0;
	    }

	    /**
	     * Converts `value` to an integer.
	     *
	     * **Note:** This method is loosely based on
	     * [`ToInteger`](http://www.ecma-international.org/ecma-262/6.0/#sec-tointeger).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Lang
	     * @param {*} value The value to convert.
	     * @returns {number} Returns the converted integer.
	     * @example
	     *
	     * _.toInteger(3.2);
	     * // => 3
	     *
	     * _.toInteger(Number.MIN_VALUE);
	     * // => 0
	     *
	     * _.toInteger(Infinity);
	     * // => 1.7976931348623157e+308
	     *
	     * _.toInteger('3.2');
	     * // => 3
	     */
	    function toInteger(value) {
	      var result = toFinite(value),
	          remainder = result % 1;

	      return result === result ? (remainder ? result - remainder : result) : 0;
	    }

	    /** Used as the `TypeError` message for "Functions" methods. */
	    var FUNC_ERROR_TEXT = 'Expected a function';

	    /* Built-in method references for those with the same name as other `lodash` methods. */
	    var nativeMax = Math.max;

	    /**
	     * Creates a function that invokes `func` with the `this` binding of the
	     * created function and arguments from `start` and beyond provided as
	     * an array.
	     *
	     * **Note:** This method is based on the
	     * [rest parameter](https://mdn.io/rest_parameters).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Function
	     * @param {Function} func The function to apply a rest parameter to.
	     * @param {number} [start=func.length-1] The start position of the rest parameter.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var say = _.rest(function(what, names) {
	     *   return what + ' ' + _.initial(names).join(', ') +
	     *     (_.size(names) > 1 ? ', & ' : '') + _.last(names);
	     * });
	     *
	     * say('hello', 'fred', 'barney', 'pebbles');
	     * // => 'hello fred, barney, & pebbles'
	     */
	    function rest(func, start) {
	      if (typeof func != 'function') {
	        throw new TypeError(FUNC_ERROR_TEXT);
	      }
	      start = nativeMax(start === undefined ? (func.length - 1) : toInteger(start), 0);
	      return function() {
	        var args = arguments,
	            index = -1,
	            length = nativeMax(args.length - start, 0),
	            array = Array(length);

	        while (++index < length) {
	          array[index] = args[start + index];
	        }
	        switch (start) {
	          case 0: return func.call(this, array);
	          case 1: return func.call(this, args[0], array);
	          case 2: return func.call(this, args[0], args[1], array);
	        }
	        var otherArgs = Array(start + 1);
	        index = -1;
	        while (++index < start) {
	          otherArgs[index] = args[index];
	        }
	        otherArgs[start] = array;
	        return apply(func, this, otherArgs);
	      };
	    }

	    function initialParams (fn) {
	        return rest(function (args /*..., callback*/) {
	            var callback = args.pop();
	            fn.call(this, args, callback);
	        });
	    }

	    function applyEach$1(eachfn) {
	        return rest(function (fns, args) {
	            var go = initialParams(function (args, callback) {
	                var that = this;
	                return eachfn(fns, function (fn, cb) {
	                    fn.apply(that, args.concat([cb]));
	                }, callback);
	            });
	            if (args.length) {
	                return go.apply(this, args);
	            } else {
	                return go;
	            }
	        });
	    }

	    /**
	     * The base implementation of `_.property` without support for deep paths.
	     *
	     * @private
	     * @param {string} key The key of the property to get.
	     * @returns {Function} Returns the new accessor function.
	     */
	    function baseProperty(key) {
	      return function(object) {
	        return object == null ? undefined : object[key];
	      };
	    }

	    /**
	     * Gets the "length" property value of `object`.
	     *
	     * **Note:** This function is used to avoid a
	     * [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792) that affects
	     * Safari on at least iOS 8.1-8.3 ARM64.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @returns {*} Returns the "length" value.
	     */
	    var getLength = baseProperty('length');

	    /** Used as references for various `Number` constants. */
	    var MAX_SAFE_INTEGER = 9007199254740991;

	    /**
	     * Checks if `value` is a valid array-like length.
	     *
	     * **Note:** This function is loosely based on
	     * [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a valid length,
	     *  else `false`.
	     * @example
	     *
	     * _.isLength(3);
	     * // => true
	     *
	     * _.isLength(Number.MIN_VALUE);
	     * // => false
	     *
	     * _.isLength(Infinity);
	     * // => false
	     *
	     * _.isLength('3');
	     * // => false
	     */
	    function isLength(value) {
	      return typeof value == 'number' &&
	        value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	    }

	    /**
	     * Checks if `value` is array-like. A value is considered array-like if it's
	     * not a function and has a `value.length` that's an integer greater than or
	     * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	     * @example
	     *
	     * _.isArrayLike([1, 2, 3]);
	     * // => true
	     *
	     * _.isArrayLike(document.body.children);
	     * // => true
	     *
	     * _.isArrayLike('abc');
	     * // => true
	     *
	     * _.isArrayLike(_.noop);
	     * // => false
	     */
	    function isArrayLike(value) {
	      return value != null && isLength(getLength(value)) && !isFunction(value);
	    }

	    /**
	     * A method that returns `undefined`.
	     *
	     * @static
	     * @memberOf _
	     * @since 2.3.0
	     * @category Util
	     * @example
	     *
	     * _.times(2, _.noop);
	     * // => [undefined, undefined]
	     */
	    function noop() {
	      // No operation performed.
	    }

	    function once(fn) {
	        return function () {
	            if (fn === null) return;
	            var callFn = fn;
	            fn = null;
	            callFn.apply(this, arguments);
	        };
	    }

	    var iteratorSymbol = typeof Symbol === 'function' && Symbol.iterator;

	    function getIterator (coll) {
	        return iteratorSymbol && coll[iteratorSymbol] && coll[iteratorSymbol]();
	    }

	    /* Built-in method references for those with the same name as other `lodash` methods. */
	    var nativeGetPrototype = Object.getPrototypeOf;

	    /**
	     * Gets the `[[Prototype]]` of `value`.
	     *
	     * @private
	     * @param {*} value The value to query.
	     * @returns {null|Object} Returns the `[[Prototype]]`.
	     */
	    function getPrototype(value) {
	      return nativeGetPrototype(Object(value));
	    }

	    /** Used for built-in method references. */
	    var objectProto$2 = Object.prototype;

	    /** Used to check objects for own properties. */
	    var hasOwnProperty = objectProto$2.hasOwnProperty;

	    /**
	     * The base implementation of `_.has` without support for deep paths.
	     *
	     * @private
	     * @param {Object} [object] The object to query.
	     * @param {Array|string} key The key to check.
	     * @returns {boolean} Returns `true` if `key` exists, else `false`.
	     */
	    function baseHas(object, key) {
	      // Avoid a bug in IE 10-11 where objects with a [[Prototype]] of `null`,
	      // that are composed entirely of index properties, return `false` for
	      // `hasOwnProperty` checks of them.
	      return object != null &&
	        (hasOwnProperty.call(object, key) ||
	          (typeof object == 'object' && key in object && getPrototype(object) === null));
	    }

	    /* Built-in method references for those with the same name as other `lodash` methods. */
	    var nativeKeys = Object.keys;

	    /**
	     * The base implementation of `_.keys` which doesn't skip the constructor
	     * property of prototypes or treat sparse arrays as dense.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the array of property names.
	     */
	    function baseKeys(object) {
	      return nativeKeys(Object(object));
	    }

	    /**
	     * The base implementation of `_.times` without support for iteratee shorthands
	     * or max array length checks.
	     *
	     * @private
	     * @param {number} n The number of times to invoke `iteratee`.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {Array} Returns the array of results.
	     */
	    function baseTimes(n, iteratee) {
	      var index = -1,
	          result = Array(n);

	      while (++index < n) {
	        result[index] = iteratee(index);
	      }
	      return result;
	    }

	    /**
	     * This method is like `_.isArrayLike` except that it also checks if `value`
	     * is an object.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is an array-like object,
	     *  else `false`.
	     * @example
	     *
	     * _.isArrayLikeObject([1, 2, 3]);
	     * // => true
	     *
	     * _.isArrayLikeObject(document.body.children);
	     * // => true
	     *
	     * _.isArrayLikeObject('abc');
	     * // => false
	     *
	     * _.isArrayLikeObject(_.noop);
	     * // => false
	     */
	    function isArrayLikeObject(value) {
	      return isObjectLike(value) && isArrayLike(value);
	    }

	    /** `Object#toString` result references. */
	    var argsTag = '[object Arguments]';

	    /** Used for built-in method references. */
	    var objectProto$3 = Object.prototype;

	    /** Used to check objects for own properties. */
	    var hasOwnProperty$1 = objectProto$3.hasOwnProperty;

	    /**
	     * Used to resolve the
	     * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	     * of values.
	     */
	    var objectToString$2 = objectProto$3.toString;

	    /** Built-in value references. */
	    var propertyIsEnumerable = objectProto$3.propertyIsEnumerable;

	    /**
	     * Checks if `value` is likely an `arguments` object.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is correctly classified,
	     *  else `false`.
	     * @example
	     *
	     * _.isArguments(function() { return arguments; }());
	     * // => true
	     *
	     * _.isArguments([1, 2, 3]);
	     * // => false
	     */
	    function isArguments(value) {
	      // Safari 8.1 incorrectly makes `arguments.callee` enumerable in strict mode.
	      return isArrayLikeObject(value) && hasOwnProperty$1.call(value, 'callee') &&
	        (!propertyIsEnumerable.call(value, 'callee') || objectToString$2.call(value) == argsTag);
	    }

	    /**
	     * Checks if `value` is classified as an `Array` object.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @type {Function}
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is correctly classified,
	     *  else `false`.
	     * @example
	     *
	     * _.isArray([1, 2, 3]);
	     * // => true
	     *
	     * _.isArray(document.body.children);
	     * // => false
	     *
	     * _.isArray('abc');
	     * // => false
	     *
	     * _.isArray(_.noop);
	     * // => false
	     */
	    var isArray = Array.isArray;

	    /** `Object#toString` result references. */
	    var stringTag = '[object String]';

	    /** Used for built-in method references. */
	    var objectProto$4 = Object.prototype;

	    /**
	     * Used to resolve the
	     * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	     * of values.
	     */
	    var objectToString$3 = objectProto$4.toString;

	    /**
	     * Checks if `value` is classified as a `String` primitive or object.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is correctly classified,
	     *  else `false`.
	     * @example
	     *
	     * _.isString('abc');
	     * // => true
	     *
	     * _.isString(1);
	     * // => false
	     */
	    function isString(value) {
	      return typeof value == 'string' ||
	        (!isArray(value) && isObjectLike(value) && objectToString$3.call(value) == stringTag);
	    }

	    /**
	     * Creates an array of index keys for `object` values of arrays,
	     * `arguments` objects, and strings, otherwise `null` is returned.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @returns {Array|null} Returns index keys, else `null`.
	     */
	    function indexKeys(object) {
	      var length = object ? object.length : undefined;
	      if (isLength(length) &&
	          (isArray(object) || isString(object) || isArguments(object))) {
	        return baseTimes(length, String);
	      }
	      return null;
	    }

	    /** Used as references for various `Number` constants. */
	    var MAX_SAFE_INTEGER$1 = 9007199254740991;

	    /** Used to detect unsigned integer values. */
	    var reIsUint = /^(?:0|[1-9]\d*)$/;

	    /**
	     * Checks if `value` is a valid array-like index.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	     * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	     */
	    function isIndex(value, length) {
	      length = length == null ? MAX_SAFE_INTEGER$1 : length;
	      return !!length &&
	        (typeof value == 'number' || reIsUint.test(value)) &&
	        (value > -1 && value % 1 == 0 && value < length);
	    }

	    /** Used for built-in method references. */
	    var objectProto$5 = Object.prototype;

	    /**
	     * Checks if `value` is likely a prototype object.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	     */
	    function isPrototype(value) {
	      var Ctor = value && value.constructor,
	          proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto$5;

	      return value === proto;
	    }

	    /**
	     * Creates an array of the own enumerable property names of `object`.
	     *
	     * **Note:** Non-object values are coerced to objects. See the
	     * [ES spec](http://ecma-international.org/ecma-262/6.0/#sec-object.keys)
	     * for more details.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the array of property names.
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.keys(new Foo);
	     * // => ['a', 'b'] (iteration order is not guaranteed)
	     *
	     * _.keys('hi');
	     * // => ['0', '1']
	     */
	    function keys(object) {
	      var isProto = isPrototype(object);
	      if (!(isProto || isArrayLike(object))) {
	        return baseKeys(object);
	      }
	      var indexes = indexKeys(object),
	          skipIndexes = !!indexes,
	          result = indexes || [],
	          length = result.length;

	      for (var key in object) {
	        if (baseHas(object, key) &&
	            !(skipIndexes && (key == 'length' || isIndex(key, length))) &&
	            !(isProto && key == 'constructor')) {
	          result.push(key);
	        }
	      }
	      return result;
	    }

	    function createArrayIterator(coll) {
	        var i = -1;
	        var len = coll.length;
	        return function next() {
	            return ++i < len ? { value: coll[i], key: i } : null;
	        };
	    }

	    function createES2015Iterator(iterator) {
	        var i = -1;
	        return function next() {
	            var item = iterator.next();
	            if (item.done) return null;
	            i++;
	            return { value: item.value, key: i };
	        };
	    }

	    function createObjectIterator(obj) {
	        var okeys = keys(obj);
	        var i = -1;
	        var len = okeys.length;
	        return function next() {
	            var key = okeys[++i];
	            return i < len ? { value: obj[key], key: key } : null;
	        };
	    }

	    function iterator(coll) {
	        if (isArrayLike(coll)) {
	            return createArrayIterator(coll);
	        }

	        var iterator = getIterator(coll);
	        return iterator ? createES2015Iterator(iterator) : createObjectIterator(coll);
	    }

	    function onlyOnce(fn) {
	        return function () {
	            if (fn === null) throw new Error("Callback was already called.");
	            var callFn = fn;
	            fn = null;
	            callFn.apply(this, arguments);
	        };
	    }

	    function _eachOfLimit(limit) {
	        return function (obj, iteratee, callback) {
	            callback = once(callback || noop);
	            if (limit <= 0 || !obj) {
	                return callback(null);
	            }
	            var nextElem = iterator(obj);
	            var done = false;
	            var running = 0;

	            function iterateeCallback(err) {
	                running -= 1;
	                if (err) {
	                    done = true;
	                    callback(err);
	                } else if (done && running <= 0) {
	                    return callback(null);
	                } else {
	                    replenish();
	                }
	            }

	            function replenish() {
	                while (running < limit && !done) {
	                    var elem = nextElem();
	                    if (elem === null) {
	                        done = true;
	                        if (running <= 0) {
	                            callback(null);
	                        }
	                        return;
	                    }
	                    running += 1;
	                    iteratee(elem.value, elem.key, onlyOnce(iterateeCallback));
	                }
	            }

	            replenish();
	        };
	    }

	    /**
	     * The same as [`eachOf`]{@link module:Collections.eachOf} but runs a maximum of `limit` async operations at a
	     * time.
	     *
	     * @name eachOfLimit
	     * @static
	     * @memberOf module:Collections
	     * @method
	     * @see [async.eachOf]{@link module:Collections.eachOf}
	     * @alias forEachOfLimit
	     * @category Collection
	     * @param {Array|Iterable|Object} coll - A collection to iterate over.
	     * @param {number} limit - The maximum number of async operations at a time.
	     * @param {Function} iteratee - A function to apply to each
	     * item in `coll`. The `key` is the item's key, or index in the case of an
	     * array. The iteratee is passed a `callback(err)` which must be called once it
	     * has completed. If no error has occurred, the callback should be run without
	     * arguments or with an explicit `null` argument. Invoked with
	     * (item, key, callback).
	     * @param {Function} [callback] - A callback which is called when all
	     * `iteratee` functions have finished, or an error occurs. Invoked with (err).
	     */
	    function eachOfLimit(coll, limit, iteratee, callback) {
	      _eachOfLimit(limit)(coll, iteratee, callback);
	    }

	    function doLimit(fn, limit) {
	        return function (iterable, iteratee, callback) {
	            return fn(iterable, limit, iteratee, callback);
	        };
	    }

	    /** Used as the `TypeError` message for "Functions" methods. */
	    var FUNC_ERROR_TEXT$1 = 'Expected a function';

	    /**
	     * Creates a function that invokes `func`, with the `this` binding and arguments
	     * of the created function, while it's called less than `n` times. Subsequent
	     * calls to the created function return the result of the last `func` invocation.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Function
	     * @param {number} n The number of calls at which `func` is no longer invoked.
	     * @param {Function} func The function to restrict.
	     * @returns {Function} Returns the new restricted function.
	     * @example
	     *
	     * jQuery(element).on('click', _.before(5, addContactToList));
	     * // => allows adding up to 4 contacts to the list
	     */
	    function before(n, func) {
	      var result;
	      if (typeof func != 'function') {
	        throw new TypeError(FUNC_ERROR_TEXT$1);
	      }
	      n = toInteger(n);
	      return function() {
	        if (--n > 0) {
	          result = func.apply(this, arguments);
	        }
	        if (n <= 1) {
	          func = undefined;
	        }
	        return result;
	      };
	    }

	    /**
	     * Creates a function that is restricted to invoking `func` once. Repeat calls
	     * to the function return the value of the first invocation. The `func` is
	     * invoked with the `this` binding and arguments of the created function.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Function
	     * @param {Function} func The function to restrict.
	     * @returns {Function} Returns the new restricted function.
	     * @example
	     *
	     * var initialize = _.once(createApplication);
	     * initialize();
	     * initialize();
	     * // `initialize` invokes `createApplication` once
	     */
	    function once$1(func) {
	      return before(2, func);
	    }

	    // eachOf implementation optimized for array-likes
	    function eachOfArrayLike(coll, iteratee, callback) {
	        callback = once$1(callback || noop);
	        var index = 0,
	            completed = 0,
	            length = coll.length;
	        if (length === 0) {
	            callback(null);
	        }

	        function iteratorCallback(err) {
	            if (err) {
	                callback(err);
	            } else if (++completed === length) {
	                callback(null);
	            }
	        }

	        for (; index < length; index++) {
	            iteratee(coll[index], index, onlyOnce(iteratorCallback));
	        }
	    }

	    // a generic version of eachOf which can handle array, object, and iterator cases.
	    var eachOfGeneric = doLimit(eachOfLimit, Infinity);

	    /**
	     * Like [`each`]{@link module:Collections.each}, except that it passes the key (or index) as the second argument
	     * to the iteratee.
	     *
	     * @name eachOf
	     * @static
	     * @memberOf module:Collections
	     * @method
	     * @alias forEachOf
	     * @category Collection
	     * @see [async.each]{@link module:Collections.each}
	     * @param {Array|Iterable|Object} coll - A collection to iterate over.
	     * @param {Function} iteratee - A function to apply to each
	     * item in `coll`. The `key` is the item's key, or index in the case of an
	     * array. The iteratee is passed a `callback(err)` which must be called once it
	     * has completed. If no error has occurred, the callback should be run without
	     * arguments or with an explicit `null` argument. Invoked with
	     * (item, key, callback).
	     * @param {Function} [callback] - A callback which is called when all
	     * `iteratee` functions have finished, or an error occurs. Invoked with (err).
	     * @example
	     *
	     * var obj = {dev: "/dev.json", test: "/test.json", prod: "/prod.json"};
	     * var configs = {};
	     *
	     * async.forEachOf(obj, function (value, key, callback) {
	     *     fs.readFile(__dirname + value, "utf8", function (err, data) {
	     *         if (err) return callback(err);
	     *         try {
	     *             configs[key] = JSON.parse(data);
	     *         } catch (e) {
	     *             return callback(e);
	     *         }
	     *         callback();
	     *     });
	     * }, function (err) {
	     *     if (err) console.error(err.message);
	     *     // configs is now a map of JSON data
	     *     doSomethingWith(configs);
	     * });
	     */
	    function eachOf (coll, iteratee, callback) {
	        var eachOfImplementation = isArrayLike(coll) ? eachOfArrayLike : eachOfGeneric;
	        eachOfImplementation(coll, iteratee, callback);
	    }

	    function doParallel(fn) {
	        return function (obj, iteratee, callback) {
	            return fn(eachOf, obj, iteratee, callback);
	        };
	    }

	    function _asyncMap(eachfn, arr, iteratee, callback) {
	        callback = once(callback || noop);
	        arr = arr || [];
	        var results = [];
	        var counter = 0;

	        eachfn(arr, function (value, _, callback) {
	            var index = counter++;
	            iteratee(value, function (err, v) {
	                results[index] = v;
	                callback(err);
	            });
	        }, function (err) {
	            callback(err, results);
	        });
	    }

	    /**
	     * Produces a new collection of values by mapping each value in `coll` through
	     * the `iteratee` function. The `iteratee` is called with an item from `coll`
	     * and a callback for when it has finished processing. Each of these callback
	     * takes 2 arguments: an `error`, and the transformed item from `coll`. If
	     * `iteratee` passes an error to its callback, the main `callback` (for the
	     * `map` function) is immediately called with the error.
	     *
	     * Note, that since this function applies the `iteratee` to each item in
	     * parallel, there is no guarantee that the `iteratee` functions will complete
	     * in order. However, the results array will be in the same order as the
	     * original `coll`.
	     *
	     * If `map` is passed an Object, the results will be an Array.  The results
	     * will roughly be in the order of the original Objects' keys (but this can
	     * vary across JavaScript engines)
	     *
	     * @name map
	     * @static
	     * @memberOf module:Collections
	     * @method
	     * @category Collection
	     * @param {Array|Iterable|Object} coll - A collection to iterate over.
	     * @param {Function} iteratee - A function to apply to each item in `coll`.
	     * The iteratee is passed a `callback(err, transformed)` which must be called
	     * once it has completed with an error (which can be `null`) and a
	     * transformed item. Invoked with (item, callback).
	     * @param {Function} [callback] - A callback which is called when all `iteratee`
	     * functions have finished, or an error occurs. Results is an Array of the
	     * transformed items from the `coll`. Invoked with (err, results).
	     * @example
	     *
	     * async.map(['file1','file2','file3'], fs.stat, function(err, results) {
	     *     // results is now an array of stats for each file
	     * });
	     */
	    var map = doParallel(_asyncMap);

	    /**
	     * Applies the provided arguments to each function in the array, calling
	     * `callback` after all functions have completed. If you only provide the first
	     * argument, then it will return a function which lets you pass in the
	     * arguments as if it were a single function call.
	     *
	     * @name applyEach
	     * @static
	     * @memberOf module:ControlFlow
	     * @method
	     * @category Control Flow
	     * @param {Array|Iterable|Object} fns - A collection of asynchronous functions to all
	     * call with the same arguments
	     * @param {...*} [args] - any number of separate arguments to pass to the
	     * function.
	     * @param {Function} [callback] - the final argument should be the callback,
	     * called when all functions have completed processing.
	     * @returns {Function} - If only the first argument is provided, it will return
	     * a function which lets you pass in the arguments as if it were a single
	     * function call.
	     * @example
	     *
	     * async.applyEach([enableSearch, updateSchema], 'bucket', callback);
	     *
	     * // partial application example:
	     * async.each(
	     *     buckets,
	     *     async.applyEach([enableSearch, updateSchema]),
	     *     callback
	     * );
	     */
	    var applyEach = applyEach$1(map);

	    function doParallelLimit(fn) {
	        return function (obj, limit, iteratee, callback) {
	            return fn(_eachOfLimit(limit), obj, iteratee, callback);
	        };
	    }

	    /**
	     * The same as [`map`]{@link module:Collections.map} but runs a maximum of `limit` async operations at a time.
	     *
	     * @name mapLimit
	     * @static
	     * @memberOf module:Collections
	     * @method
	     * @see [async.map]{@link module:Collections.map}
	     * @category Collection
	     * @param {Array|Iterable|Object} coll - A collection to iterate over.
	     * @param {number} limit - The maximum number of async operations at a time.
	     * @param {Function} iteratee - A function to apply to each item in `coll`.
	     * The iteratee is passed a `callback(err, transformed)` which must be called
	     * once it has completed with an error (which can be `null`) and a transformed
	     * item. Invoked with (item, callback).
	     * @param {Function} [callback] - A callback which is called when all `iteratee`
	     * functions have finished, or an error occurs. Results is an array of the
	     * transformed items from the `coll`. Invoked with (err, results).
	     */
	    var mapLimit = doParallelLimit(_asyncMap);

	    /**
	     * The same as [`map`]{@link module:Collections.map} but runs only a single async operation at a time.
	     *
	     * @name mapSeries
	     * @static
	     * @memberOf module:Collections
	     * @method
	     * @see [async.map]{@link module:Collections.map}
	     * @category Collection
	     * @param {Array|Iterable|Object} coll - A collection to iterate over.
	     * @param {Function} iteratee - A function to apply to each item in `coll`.
	     * The iteratee is passed a `callback(err, transformed)` which must be called
	     * once it has completed with an error (which can be `null`) and a
	     * transformed item. Invoked with (item, callback).
	     * @param {Function} [callback] - A callback which is called when all `iteratee`
	     * functions have finished, or an error occurs. Results is an array of the
	     * transformed items from the `coll`. Invoked with (err, results).
	     */
	    var mapSeries = doLimit(mapLimit, 1);

	    /**
	     * The same as [`applyEach`]{@link module:ControlFlow.applyEach} but runs only a single async operation at a time.
	     *
	     * @name applyEachSeries
	     * @static
	     * @memberOf module:ControlFlow
	     * @method
	     * @see [async.applyEach]{@link module:ControlFlow.applyEach}
	     * @category Control Flow
	     * @param {Array|Iterable|Object} fns - A collection of asynchronous functions to all
	     * call with the same arguments
	     * @param {...*} [args] - any number of separate arguments to pass to the
	     * function.
	     * @param {Function} [callback] - the final argument should be the callback,
	     * called when all functions have completed processing.
	     * @returns {Function} - If only the first argument is provided, it will return
	     * a function which lets you pass in the arguments as if it were a single
	     * function call.
	     */
	    var applyEachSeries = applyEach$1(mapSeries);

	    /**
	     * Creates a continuation function with some arguments already applied.
	     *
	     * Useful as a shorthand when combined with other control flow functions. Any
	     * arguments passed to the returned function are added to the arguments
	     * originally passed to apply.
	     *
	     * @name apply
	     * @static
	     * @memberOf module:Utils
	     * @method
	     * @category Util
	     * @param {Function} function - The function you want to eventually apply all
	     * arguments to. Invokes with (arguments...).
	     * @param {...*} arguments... - Any number of arguments to automatically apply
	     * when the continuation is called.
	     * @example
	     *
	     * // using apply
	     * async.parallel([
	     *     async.apply(fs.writeFile, 'testfile1', 'test1'),
	     *     async.apply(fs.writeFile, 'testfile2', 'test2')
	     * ]);
	     *
	     *
	     * // the same process without using apply
	     * async.parallel([
	     *     function(callback) {
	     *         fs.writeFile('testfile1', 'test1', callback);
	     *     },
	     *     function(callback) {
	     *         fs.writeFile('testfile2', 'test2', callback);
	     *     }
	     * ]);
	     *
	     * // It's possible to pass any number of additional arguments when calling the
	     * // continuation:
	     *
	     * node> var fn = async.apply(sys.puts, 'one');
	     * node> fn('two', 'three');
	     * one
	     * two
	     * three
	     */
	    var apply$1 = rest(function (fn, args) {
	        return rest(function (callArgs) {
	            return fn.apply(null, args.concat(callArgs));
	        });
	    });

	    /**
	     * Take a sync function and make it async, passing its return value to a
	     * callback. This is useful for plugging sync functions into a waterfall,
	     * series, or other async functions. Any arguments passed to the generated
	     * function will be passed to the wrapped function (except for the final
	     * callback argument). Errors thrown will be passed to the callback.
	     *
	     * If the function passed to `asyncify` returns a Promise, that promises's
	     * resolved/rejected state will be used to call the callback, rather than simply
	     * the synchronous return value.
	     *
	     * This also means you can asyncify ES2016 `async` functions.
	     *
	     * @name asyncify
	     * @static
	     * @memberOf module:Utils
	     * @method
	     * @alias wrapSync
	     * @category Util
	     * @param {Function} func - The synchronous function to convert to an
	     * asynchronous function.
	     * @returns {Function} An asynchronous wrapper of the `func`. To be invoked with
	     * (callback).
	     * @example
	     *
	     * // passing a regular synchronous function
	     * async.waterfall([
	     *     async.apply(fs.readFile, filename, "utf8"),
	     *     async.asyncify(JSON.parse),
	     *     function (data, next) {
	     *         // data is the result of parsing the text.
	     *         // If there was a parsing error, it would have been caught.
	     *     }
	     * ], callback);
	     *
	     * // passing a function returning a promise
	     * async.waterfall([
	     *     async.apply(fs.readFile, filename, "utf8"),
	     *     async.asyncify(function (contents) {
	     *         return db.model.create(contents);
	     *     }),
	     *     function (model, next) {
	     *         // `model` is the instantiated model object.
	     *         // If there was an error, this function would be skipped.
	     *     }
	     * ], callback);
	     *
	     * // es6 example
	     * var q = async.queue(async.asyncify(async function(file) {
	     *     var intermediateStep = await processFile(file);
	     *     return await somePromise(intermediateStep)
	     * }));
	     *
	     * q.push(files);
	     */
	    function asyncify(func) {
	        return initialParams(function (args, callback) {
	            var result;
	            try {
	                result = func.apply(this, args);
	            } catch (e) {
	                return callback(e);
	            }
	            // if result is Promise object
	            if (isObject(result) && typeof result.then === 'function') {
	                result.then(function (value) {
	                    callback(null, value);
	                }, function (err) {
	                    callback(err.message ? err : new Error(err));
	                });
	            } else {
	                callback(null, result);
	            }
	        });
	    }

	    /**
	     * A specialized version of `_.forEach` for arrays without support for
	     * iteratee shorthands.
	     *
	     * @private
	     * @param {Array} [array] The array to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {Array} Returns `array`.
	     */
	    function arrayEach(array, iteratee) {
	      var index = -1,
	          length = array ? array.length : 0;

	      while (++index < length) {
	        if (iteratee(array[index], index, array) === false) {
	          break;
	        }
	      }
	      return array;
	    }

	    /**
	     * Creates a base function for methods like `_.forIn` and `_.forOwn`.
	     *
	     * @private
	     * @param {boolean} [fromRight] Specify iterating from right to left.
	     * @returns {Function} Returns the new base function.
	     */
	    function createBaseFor(fromRight) {
	      return function(object, iteratee, keysFunc) {
	        var index = -1,
	            iterable = Object(object),
	            props = keysFunc(object),
	            length = props.length;

	        while (length--) {
	          var key = props[fromRight ? length : ++index];
	          if (iteratee(iterable[key], key, iterable) === false) {
	            break;
	          }
	        }
	        return object;
	      };
	    }

	    /**
	     * The base implementation of `baseForOwn` which iterates over `object`
	     * properties returned by `keysFunc` and invokes `iteratee` for each property.
	     * Iteratee functions may exit iteration early by explicitly returning `false`.
	     *
	     * @private
	     * @param {Object} object The object to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @param {Function} keysFunc The function to get the keys of `object`.
	     * @returns {Object} Returns `object`.
	     */
	    var baseFor = createBaseFor();

	    /**
	     * The base implementation of `_.forOwn` without support for iteratee shorthands.
	     *
	     * @private
	     * @param {Object} object The object to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {Object} Returns `object`.
	     */
	    function baseForOwn(object, iteratee) {
	      return object && baseFor(object, iteratee, keys);
	    }

	    /**
	     * Gets the index at which the first occurrence of `NaN` is found in `array`.
	     *
	     * @private
	     * @param {Array} array The array to search.
	     * @param {number} fromIndex The index to search from.
	     * @param {boolean} [fromRight] Specify iterating from right to left.
	     * @returns {number} Returns the index of the matched `NaN`, else `-1`.
	     */
	    function indexOfNaN(array, fromIndex, fromRight) {
	      var length = array.length,
	          index = fromIndex + (fromRight ? 1 : -1);

	      while ((fromRight ? index-- : ++index < length)) {
	        var other = array[index];
	        if (other !== other) {
	          return index;
	        }
	      }
	      return -1;
	    }

	    /**
	     * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
	     *
	     * @private
	     * @param {Array} array The array to search.
	     * @param {*} value The value to search for.
	     * @param {number} fromIndex The index to search from.
	     * @returns {number} Returns the index of the matched value, else `-1`.
	     */
	    function baseIndexOf(array, value, fromIndex) {
	      if (value !== value) {
	        return indexOfNaN(array, fromIndex);
	      }
	      var index = fromIndex - 1,
	          length = array.length;

	      while (++index < length) {
	        if (array[index] === value) {
	          return index;
	        }
	      }
	      return -1;
	    }

	    /**
	     * Determines the best order for running the functions in `tasks`, based on
	     * their requirements. Each function can optionally depend on other functions
	     * being completed first, and each function is run as soon as its requirements
	     * are satisfied.
	     *
	     * If any of the functions pass an error to their callback, the `auto` sequence
	     * will stop. Further tasks will not execute (so any other functions depending
	     * on it will not run), and the main `callback` is immediately called with the
	     * error.
	     *
	     * Functions also receive an object containing the results of functions which
	     * have completed so far as the first argument, if they have dependencies. If a
	     * task function has no dependencies, it will only be passed a callback.
	     *
	     * @name auto
	     * @static
	     * @memberOf module:ControlFlow
	     * @method
	     * @category Control Flow
	     * @param {Object} tasks - An object. Each of its properties is either a
	     * function or an array of requirements, with the function itself the last item
	     * in the array. The object's key of a property serves as the name of the task
	     * defined by that property, i.e. can be used when specifying requirements for
	     * other tasks. The function receives one or two arguments:
	     * * a `results` object, containing the results of the previously executed
	     *   functions, only passed if the task has any dependencies,
	     * * a `callback(err, result)` function, which must be called when finished,
	     *   passing an `error` (which can be `null`) and the result of the function's
	     *   execution.
	     * @param {number} [concurrency=Infinity] - An optional `integer` for
	     * determining the maximum number of tasks that can be run in parallel. By
	     * default, as many as possible.
	     * @param {Function} [callback] - An optional callback which is called when all
	     * the tasks have been completed. It receives the `err` argument if any `tasks`
	     * pass an error to their callback. Results are always returned; however, if an
	     * error occurs, no further `tasks` will be performed, and the results object
	     * will only contain partial results. Invoked with (err, results).
	     * @returns undefined
	     * @example
	     *
	     * async.auto({
	     *     // this function will just be passed a callback
	     *     readData: async.apply(fs.readFile, 'data.txt', 'utf-8'),
	     *     showData: ['readData', function(results, cb) {
	     *         // results.readData is the file's contents
	     *         // ...
	     *     }]
	     * }, callback);
	     *
	     * async.auto({
	     *     get_data: function(callback) {
	     *         console.log('in get_data');
	     *         // async code to get some data
	     *         callback(null, 'data', 'converted to array');
	     *     },
	     *     make_folder: function(callback) {
	     *         console.log('in make_folder');
	     *         // async code to create a directory to store a file in
	     *         // this is run at the same time as getting the data
	     *         callback(null, 'folder');
	     *     },
	     *     write_file: ['get_data', 'make_folder', function(results, callback) {
	     *         console.log('in write_file', JSON.stringify(results));
	     *         // once there is some data and the directory exists,
	     *         // write the data to a file in the directory
	     *         callback(null, 'filename');
	     *     }],
	     *     email_link: ['write_file', function(results, callback) {
	     *         console.log('in email_link', JSON.stringify(results));
	     *         // once the file is written let's email a link to it...
	     *         // results.write_file contains the filename returned by write_file.
	     *         callback(null, {'file':results.write_file, 'email':'user@example.com'});
	     *     }]
	     * }, function(err, results) {
	     *     console.log('err = ', err);
	     *     console.log('results = ', results);
	     * });
	     */
	    function auto (tasks, concurrency, callback) {
	        if (typeof concurrency === 'function') {
	            // concurrency is optional, shift the args.
	            callback = concurrency;
	            concurrency = null;
	        }
	        callback = once(callback || noop);
	        var keys$$ = keys(tasks);
	        var numTasks = keys$$.length;
	        if (!numTasks) {
	            return callback(null);
	        }
	        if (!concurrency) {
	            concurrency = numTasks;
	        }

	        var results = {};
	        var runningTasks = 0;
	        var hasError = false;

	        var listeners = {};

	        var readyTasks = [];

	        // for cycle detection:
	        var readyToCheck = []; // tasks that have been identified as reachable
	        // without the possibility of returning to an ancestor task
	        var uncheckedDependencies = {};

	        baseForOwn(tasks, function (task, key) {
	            if (!isArray(task)) {
	                // no dependencies
	                enqueueTask(key, [task]);
	                readyToCheck.push(key);
	                return;
	            }

	            var dependencies = task.slice(0, task.length - 1);
	            var remainingDependencies = dependencies.length;
	            if (remainingDependencies === 0) {
	                enqueueTask(key, task);
	                readyToCheck.push(key);
	                return;
	            }
	            uncheckedDependencies[key] = remainingDependencies;

	            arrayEach(dependencies, function (dependencyName) {
	                if (!tasks[dependencyName]) {
	                    throw new Error('async.auto task `' + key + '` has a non-existent dependency in ' + dependencies.join(', '));
	                }
	                addListener(dependencyName, function () {
	                    remainingDependencies--;
	                    if (remainingDependencies === 0) {
	                        enqueueTask(key, task);
	                    }
	                });
	            });
	        });

	        checkForDeadlocks();
	        processQueue();

	        function enqueueTask(key, task) {
	            readyTasks.push(function () {
	                runTask(key, task);
	            });
	        }

	        function processQueue() {
	            if (readyTasks.length === 0 && runningTasks === 0) {
	                return callback(null, results);
	            }
	            while (readyTasks.length && runningTasks < concurrency) {
	                var run = readyTasks.shift();
	                run();
	            }
	        }

	        function addListener(taskName, fn) {
	            var taskListeners = listeners[taskName];
	            if (!taskListeners) {
	                taskListeners = listeners[taskName] = [];
	            }

	            taskListeners.push(fn);
	        }

	        function taskComplete(taskName) {
	            var taskListeners = listeners[taskName] || [];
	            arrayEach(taskListeners, function (fn) {
	                fn();
	            });
	            processQueue();
	        }

	        function runTask(key, task) {
	            if (hasError) return;

	            var taskCallback = onlyOnce(rest(function (err, args) {
	                runningTasks--;
	                if (args.length <= 1) {
	                    args = args[0];
	                }
	                if (err) {
	                    var safeResults = {};
	                    baseForOwn(results, function (val, rkey) {
	                        safeResults[rkey] = val;
	                    });
	                    safeResults[key] = args;
	                    hasError = true;
	                    listeners = [];

	                    callback(err, safeResults);
	                } else {
	                    results[key] = args;
	                    taskComplete(key);
	                }
	            }));

	            runningTasks++;
	            var taskFn = task[task.length - 1];
	            if (task.length > 1) {
	                taskFn(results, taskCallback);
	            } else {
	                taskFn(taskCallback);
	            }
	        }

	        function checkForDeadlocks() {
	            // Kahn's algorithm
	            // https://en.wikipedia.org/wiki/Topological_sorting#Kahn.27s_algorithm
	            // http://connalle.blogspot.com/2013/10/topological-sortingkahn-algorithm.html
	            var currentTask;
	            var counter = 0;
	            while (readyToCheck.length) {
	                currentTask = readyToCheck.pop();
	                counter++;
	                arrayEach(getDependents(currentTask), function (dependent) {
	                    if (--uncheckedDependencies[dependent] === 0) {
	                        readyToCheck.push(dependent);
	                    }
	                });
	            }

	            if (counter !== numTasks) {
	                throw new Error('async.auto cannot execute tasks due to a recursive dependency');
	            }
	        }

	        function getDependents(taskName) {
	            var result = [];
	            baseForOwn(tasks, function (task, key) {
	                if (isArray(task) && baseIndexOf(task, taskName, 0) >= 0) {
	                    result.push(key);
	                }
	            });
	            return result;
	        }
	    }

	    /**
	     * A specialized version of `_.map` for arrays without support for iteratee
	     * shorthands.
	     *
	     * @private
	     * @param {Array} [array] The array to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {Array} Returns the new mapped array.
	     */
	    function arrayMap(array, iteratee) {
	      var index = -1,
	          length = array ? array.length : 0,
	          result = Array(length);

	      while (++index < length) {
	        result[index] = iteratee(array[index], index, array);
	      }
	      return result;
	    }

	    /**
	     * Copies the values of `source` to `array`.
	     *
	     * @private
	     * @param {Array} source The array to copy values from.
	     * @param {Array} [array=[]] The array to copy values to.
	     * @returns {Array} Returns `array`.
	     */
	    function copyArray(source, array) {
	      var index = -1,
	          length = source.length;

	      array || (array = Array(length));
	      while (++index < length) {
	        array[index] = source[index];
	      }
	      return array;
	    }

	    /**
	     * Checks if `value` is a global object.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @returns {null|Object} Returns `value` if it's a global object, else `null`.
	     */
	    function checkGlobal(value) {
	      return (value && value.Object === Object) ? value : null;
	    }

	    /** Detect free variable `global` from Node.js. */
	    var freeGlobal = checkGlobal(typeof global == 'object' && global);

	    /** Detect free variable `self`. */
	    var freeSelf = checkGlobal(typeof self == 'object' && self);

	    /** Detect `this` as the global object. */
	    var thisGlobal = checkGlobal(typeof this == 'object' && this);

	    /** Used as a reference to the global object. */
	    var root = freeGlobal || freeSelf || thisGlobal || Function('return this')();

	    /** Built-in value references. */
	    var Symbol$1 = root.Symbol;

	    /** Used as references for various `Number` constants. */
	    var INFINITY$1 = 1 / 0;

	    /** Used to convert symbols to primitives and strings. */
	    var symbolProto = Symbol$1 ? Symbol$1.prototype : undefined;
	    var symbolToString = symbolProto ? symbolProto.toString : undefined;
	    /**
	     * The base implementation of `_.toString` which doesn't convert nullish
	     * values to empty strings.
	     *
	     * @private
	     * @param {*} value The value to process.
	     * @returns {string} Returns the string.
	     */
	    function baseToString(value) {
	      // Exit early for strings to avoid a performance hit in some environments.
	      if (typeof value == 'string') {
	        return value;
	      }
	      if (isSymbol(value)) {
	        return symbolToString ? symbolToString.call(value) : '';
	      }
	      var result = (value + '');
	      return (result == '0' && (1 / value) == -INFINITY$1) ? '-0' : result;
	    }

	    /**
	     * The base implementation of `_.slice` without an iteratee call guard.
	     *
	     * @private
	     * @param {Array} array The array to slice.
	     * @param {number} [start=0] The start position.
	     * @param {number} [end=array.length] The end position.
	     * @returns {Array} Returns the slice of `array`.
	     */
	    function baseSlice(array, start, end) {
	      var index = -1,
	          length = array.length;

	      if (start < 0) {
	        start = -start > length ? 0 : (length + start);
	      }
	      end = end > length ? length : end;
	      if (end < 0) {
	        end += length;
	      }
	      length = start > end ? 0 : ((end - start) >>> 0);
	      start >>>= 0;

	      var result = Array(length);
	      while (++index < length) {
	        result[index] = array[index + start];
	      }
	      return result;
	    }

	    /**
	     * Casts `array` to a slice if it's needed.
	     *
	     * @private
	     * @param {Array} array The array to inspect.
	     * @param {number} start The start position.
	     * @param {number} [end=array.length] The end position.
	     * @returns {Array} Returns the cast slice.
	     */
	    function castSlice(array, start, end) {
	      var length = array.length;
	      end = end === undefined ? length : end;
	      return (!start && end >= length) ? array : baseSlice(array, start, end);
	    }

	    /**
	     * Used by `_.trim` and `_.trimEnd` to get the index of the last string symbol
	     * that is not found in the character symbols.
	     *
	     * @private
	     * @param {Array} strSymbols The string symbols to inspect.
	     * @param {Array} chrSymbols The character symbols to find.
	     * @returns {number} Returns the index of the last unmatched string symbol.
	     */
	    function charsEndIndex(strSymbols, chrSymbols) {
	      var index = strSymbols.length;

	      while (index-- && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}
	      return index;
	    }

	    /**
	     * Used by `_.trim` and `_.trimStart` to get the index of the first string symbol
	     * that is not found in the character symbols.
	     *
	     * @private
	     * @param {Array} strSymbols The string symbols to inspect.
	     * @param {Array} chrSymbols The character symbols to find.
	     * @returns {number} Returns the index of the first unmatched string symbol.
	     */
	    function charsStartIndex(strSymbols, chrSymbols) {
	      var index = -1,
	          length = strSymbols.length;

	      while (++index < length && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}
	      return index;
	    }

	    /** Used to compose unicode character classes. */
	    var rsAstralRange = '\\ud800-\\udfff';
	    var rsComboMarksRange = '\\u0300-\\u036f\\ufe20-\\ufe23';
	    var rsComboSymbolsRange = '\\u20d0-\\u20f0';
	    var rsVarRange = '\\ufe0e\\ufe0f';
	    var rsAstral = '[' + rsAstralRange + ']';
	    var rsCombo = '[' + rsComboMarksRange + rsComboSymbolsRange + ']';
	    var rsFitz = '\\ud83c[\\udffb-\\udfff]';
	    var rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')';
	    var rsNonAstral = '[^' + rsAstralRange + ']';
	    var rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}';
	    var rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]';
	    var rsZWJ = '\\u200d';
	    var reOptMod = rsModifier + '?';
	    var rsOptVar = '[' + rsVarRange + ']?';
	    var rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*';
	    var rsSeq = rsOptVar + reOptMod + rsOptJoin;
	    var rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';
	    /** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
	    var reComplexSymbol = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

	    /**
	     * Converts `string` to an array.
	     *
	     * @private
	     * @param {string} string The string to convert.
	     * @returns {Array} Returns the converted array.
	     */
	    function stringToArray(string) {
	      return string.match(reComplexSymbol);
	    }

	    /**
	     * Converts `value` to a string. An empty string is returned for `null`
	     * and `undefined` values. The sign of `-0` is preserved.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Lang
	     * @param {*} value The value to process.
	     * @returns {string} Returns the string.
	     * @example
	     *
	     * _.toString(null);
	     * // => ''
	     *
	     * _.toString(-0);
	     * // => '-0'
	     *
	     * _.toString([1, 2, 3]);
	     * // => '1,2,3'
	     */
	    function toString(value) {
	      return value == null ? '' : baseToString(value);
	    }

	    /** Used to match leading and trailing whitespace. */
	    var reTrim$1 = /^\s+|\s+$/g;

	    /**
	     * Removes leading and trailing whitespace or specified characters from `string`.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category String
	     * @param {string} [string=''] The string to trim.
	     * @param {string} [chars=whitespace] The characters to trim.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {string} Returns the trimmed string.
	     * @example
	     *
	     * _.trim('  abc  ');
	     * // => 'abc'
	     *
	     * _.trim('-_-abc-_-', '_-');
	     * // => 'abc'
	     *
	     * _.map(['  foo  ', '  bar  '], _.trim);
	     * // => ['foo', 'bar']
	     */
	    function trim(string, chars, guard) {
	      string = toString(string);
	      if (string && (guard || chars === undefined)) {
	        return string.replace(reTrim$1, '');
	      }
	      if (!string || !(chars = baseToString(chars))) {
	        return string;
	      }
	      var strSymbols = stringToArray(string),
	          chrSymbols = stringToArray(chars),
	          start = charsStartIndex(strSymbols, chrSymbols),
	          end = charsEndIndex(strSymbols, chrSymbols) + 1;

	      return castSlice(strSymbols, start, end).join('');
	    }

	    var FN_ARGS = /^(function)?\s*[^\(]*\(\s*([^\)]*)\)/m;
	    var FN_ARG_SPLIT = /,/;
	    var FN_ARG = /(=.+)?(\s*)$/;
	    var STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg;

	    function parseParams(func) {
	        func = func.toString().replace(STRIP_COMMENTS, '');
	        func = func.match(FN_ARGS)[2].replace(' ', '');
	        func = func ? func.split(FN_ARG_SPLIT) : [];
	        func = func.map(function (arg) {
	            return trim(arg.replace(FN_ARG, ''));
	        });
	        return func;
	    }

	    /**
	     * A dependency-injected version of the [async.auto]{@link module:ControlFlow.auto} function. Dependent
	     * tasks are specified as parameters to the function, after the usual callback
	     * parameter, with the parameter names matching the names of the tasks it
	     * depends on. This can provide even more readable task graphs which can be
	     * easier to maintain.
	     *
	     * If a final callback is specified, the task results are similarly injected,
	     * specified as named parameters after the initial error parameter.
	     *
	     * The autoInject function is purely syntactic sugar and its semantics are
	     * otherwise equivalent to [async.auto]{@link module:ControlFlow.auto}.
	     *
	     * @name autoInject
	     * @static
	     * @memberOf module:ControlFlow
	     * @method
	     * @see [async.auto]{@link module:ControlFlow.auto}
	     * @category Control Flow
	     * @param {Object} tasks - An object, each of whose properties is a function of
	     * the form 'func([dependencies...], callback). The object's key of a property
	     * serves as the name of the task defined by that property, i.e. can be used
	     * when specifying requirements for other tasks.
	     * * The `callback` parameter is a `callback(err, result)` which must be called
	     *   when finished, passing an `error` (which can be `null`) and the result of
	     *   the function's execution. The remaining parameters name other tasks on
	     *   which the task is dependent, and the results from those tasks are the
	     *   arguments of those parameters.
	     * @param {Function} [callback] - An optional callback which is called when all
	     * the tasks have been completed. It receives the `err` argument if any `tasks`
	     * pass an error to their callback, and a `results` object with any completed
	     * task results, similar to `auto`.
	     * @example
	     *
	     * //  The example from `auto` can be rewritten as follows:
	     * async.autoInject({
	     *     get_data: function(callback) {
	     *         // async code to get some data
	     *         callback(null, 'data', 'converted to array');
	     *     },
	     *     make_folder: function(callback) {
	     *         // async code to create a directory to store a file in
	     *         // this is run at the same time as getting the data
	     *         callback(null, 'folder');
	     *     },
	     *     write_file: function(get_data, make_folder, callback) {
	     *         // once there is some data and the directory exists,
	     *         // write the data to a file in the directory
	     *         callback(null, 'filename');
	     *     },
	     *     email_link: function(write_file, callback) {
	     *         // once the file is written let's email a link to it...
	     *         // write_file contains the filename returned by write_file.
	     *         callback(null, {'file':write_file, 'email':'user@example.com'});
	     *     }
	     * }, function(err, results) {
	     *     console.log('err = ', err);
	     *     console.log('email_link = ', results.email_link);
	     * });
	     *
	     * // If you are using a JS minifier that mangles parameter names, `autoInject`
	     * // will not work with plain functions, since the parameter names will be
	     * // collapsed to a single letter identifier.  To work around this, you can
	     * // explicitly specify the names of the parameters your task function needs
	     * // in an array, similar to Angular.js dependency injection.
	     *
	     * // This still has an advantage over plain `auto`, since the results a task
	     * // depends on are still spread into arguments.
	     * async.autoInject({
	     *     //...
	     *     write_file: ['get_data', 'make_folder', function(get_data, make_folder, callback) {
	     *         callback(null, 'filename');
	     *     }],
	     *     email_link: ['write_file', function(write_file, callback) {
	     *         callback(null, {'file':write_file, 'email':'user@example.com'});
	     *     }]
	     *     //...
	     * }, function(err, results) {
	     *     console.log('err = ', err);
	     *     console.log('email_link = ', results.email_link);
	     * });
	     */
	    function autoInject(tasks, callback) {
	        var newTasks = {};

	        baseForOwn(tasks, function (taskFn, key) {
	            var params;

	            if (isArray(taskFn)) {
	                params = copyArray(taskFn);
	                taskFn = params.pop();

	                newTasks[key] = params.concat(params.length > 0 ? newTask : taskFn);
	            } else if (taskFn.length === 1) {
	                // no dependencies, use the function as-is
	                newTasks[key] = taskFn;
	            } else {
	                params = parseParams(taskFn);
	                if (taskFn.length === 0 && params.length === 0) {
	                    throw new Error("autoInject task functions require explicit parameters.");
	                }

	                params.pop();

	                newTasks[key] = params.concat(newTask);
	            }

	            function newTask(results, taskCb) {
	                var newArgs = arrayMap(params, function (name) {
	                    return results[name];
	                });
	                newArgs.push(taskCb);
	                taskFn.apply(null, newArgs);
	            }
	        });

	        auto(newTasks, callback);
	    }

	    var hasSetImmediate = typeof setImmediate === 'function' && setImmediate;
	    var hasNextTick = typeof process === 'object' && typeof process.nextTick === 'function';

	    function fallback(fn) {
	        setTimeout(fn, 0);
	    }

	    function wrap(defer) {
	        return rest(function (fn, args) {
	            defer(function () {
	                fn.apply(null, args);
	            });
	        });
	    }

	    var _defer;

	    if (hasSetImmediate) {
	        _defer = setImmediate;
	    } else if (hasNextTick) {
	        _defer = process.nextTick;
	    } else {
	        _defer = fallback;
	    }

	    var setImmediate$1 = wrap(_defer);

	    // Simple doubly linked list (https://en.wikipedia.org/wiki/Doubly_linked_list) implementation
	    // used for queues. This implementation assumes that the node provided by the user can be modified
	    // to adjust the next and last properties. We implement only the minimal functionality
	    // for queue support.
	    function DLL() {
	        this.head = this.tail = null;
	        this.length = 0;
	    }

	    function setInitial(dll, node) {
	        dll.length = 1;
	        dll.head = dll.tail = node;
	    }

	    DLL.prototype.removeLink = function (node) {
	        if (node.prev) node.prev.next = node.next;else this.head = node.next;
	        if (node.next) node.next.prev = node.prev;else this.tail = node.prev;

	        node.prev = node.next = null;
	        this.length -= 1;
	        return node;
	    };

	    DLL.prototype.empty = DLL;

	    DLL.prototype.insertAfter = function (node, newNode) {
	        newNode.prev = node;
	        newNode.next = node.next;
	        if (node.next) node.next.prev = newNode;else this.tail = newNode;
	        node.next = newNode;
	        this.length += 1;
	    };

	    DLL.prototype.insertBefore = function (node, newNode) {
	        newNode.prev = node.prev;
	        newNode.next = node;
	        if (node.prev) node.prev.next = newNode;else this.head = newNode;
	        node.prev = newNode;
	        this.length += 1;
	    };

	    DLL.prototype.unshift = function (node) {
	        if (this.head) this.insertBefore(this.head, node);else setInitial(this, node);
	    };

	    DLL.prototype.push = function (node) {
	        if (this.tail) this.insertAfter(this.tail, node);else setInitial(this, node);
	    };

	    DLL.prototype.shift = function () {
	        return this.head && this.removeLink(this.head);
	    };

	    DLL.prototype.pop = function () {
	        return this.tail && this.removeLink(this.tail);
	    };

	    function queue(worker, concurrency, payload) {
	        if (concurrency == null) {
	            concurrency = 1;
	        } else if (concurrency === 0) {
	            throw new Error('Concurrency must not be zero');
	        }

	        function _insert(data, insertAtFront, callback) {
	            if (callback != null && typeof callback !== 'function') {
	                throw new Error('task callback must be a function');
	            }
	            q.started = true;
	            if (!isArray(data)) {
	                data = [data];
	            }
	            if (data.length === 0 && q.idle()) {
	                // call drain immediately if there are no tasks
	                return setImmediate$1(function () {
	                    q.drain();
	                });
	            }
	            arrayEach(data, function (task) {
	                var item = {
	                    data: task,
	                    callback: callback || noop
	                };

	                if (insertAtFront) {
	                    q._tasks.unshift(item);
	                } else {
	                    q._tasks.push(item);
	                }
	            });
	            setImmediate$1(q.process);
	        }

	        function _next(tasks) {
	            return rest(function (args) {
	                workers -= 1;

	                arrayEach(tasks, function (task) {
	                    arrayEach(workersList, function (worker, index) {
	                        if (worker === task) {
	                            workersList.splice(index, 1);
	                            return false;
	                        }
	                    });

	                    task.callback.apply(task, args);

	                    if (args[0] != null) {
	                        q.error(args[0], task.data);
	                    }
	                });

	                if (workers <= q.concurrency - q.buffer) {
	                    q.unsaturated();
	                }

	                if (q.idle()) {
	                    q.drain();
	                }
	                q.process();
	            });
	        }

	        var workers = 0;
	        var workersList = [];
	        var q = {
	            _tasks: new DLL(),
	            concurrency: concurrency,
	            payload: payload,
	            saturated: noop,
	            unsaturated: noop,
	            buffer: concurrency / 4,
	            empty: noop,
	            drain: noop,
	            error: noop,
	            started: false,
	            paused: false,
	            push: function (data, callback) {
	                _insert(data, false, callback);
	            },
	            kill: function () {
	                q.drain = noop;
	                q._tasks.empty();
	            },
	            unshift: function (data, callback) {
	                _insert(data, true, callback);
	            },
	            process: function () {
	                while (!q.paused && workers < q.concurrency && q._tasks.length) {
	                    var tasks = [],
	                        data = [];
	                    var l = q._tasks.length;
	                    if (q.payload) l = Math.min(l, q.payload);
	                    for (var i = 0; i < l; i++) {
	                        var node = q._tasks.shift();
	                        tasks.push(node);
	                        data.push(node.data);
	                    }

	                    if (q._tasks.length === 0) {
	                        q.empty();
	                    }
	                    workers += 1;
	                    workersList.push(tasks[0]);

	                    if (workers === q.concurrency) {
	                        q.saturated();
	                    }

	                    var cb = onlyOnce(_next(tasks));
	                    worker(data, cb);
	                }
	            },
	            length: function () {
	                return q._tasks.length;
	            },
	            running: function () {
	                return workers;
	            },
	            workersList: function () {
	                return workersList;
	            },
	            idle: function () {
	                return q._tasks.length + workers === 0;
	            },
	            pause: function () {
	                q.paused = true;
	            },
	            resume: function () {
	                if (q.paused === false) {
	                    return;
	                }
	                q.paused = false;
	                var resumeCount = Math.min(q.concurrency, q._tasks.length);
	                // Need to call q.process once per concurrent
	                // worker to preserve full concurrency after pause
	                for (var w = 1; w <= resumeCount; w++) {
	                    setImmediate$1(q.process);
	                }
	            }
	        };
	        return q;
	    }

	    /**
	     * A cargo of tasks for the worker function to complete. Cargo inherits all of
	     * the same methods and event callbacks as [`queue`]{@link module:ControlFlow.queue}.
	     * @typedef {Object} CargoObject
	     * @memberOf module:ControlFlow
	     * @property {Function} length - A function returning the number of items
	     * waiting to be processed. Invoke like `cargo.length()`.
	     * @property {number} payload - An `integer` for determining how many tasks
	     * should be process per round. This property can be changed after a `cargo` is
	     * created to alter the payload on-the-fly.
	     * @property {Function} push - Adds `task` to the `queue`. The callback is
	     * called once the `worker` has finished processing the task. Instead of a
	     * single task, an array of `tasks` can be submitted. The respective callback is
	     * used for every task in the list. Invoke like `cargo.push(task, [callback])`.
	     * @property {Function} saturated - A callback that is called when the
	     * `queue.length()` hits the concurrency and further tasks will be queued.
	     * @property {Function} empty - A callback that is called when the last item
	     * from the `queue` is given to a `worker`.
	     * @property {Function} drain - A callback that is called when the last item
	     * from the `queue` has returned from the `worker`.
	     * @property {Function} idle - a function returning false if there are items
	     * waiting or being processed, or true if not. Invoke like `cargo.idle()`.
	     * @property {Function} pause - a function that pauses the processing of tasks
	     * until `resume()` is called. Invoke like `cargo.pause()`.
	     * @property {Function} resume - a function that resumes the processing of
	     * queued tasks when the queue is paused. Invoke like `cargo.resume()`.
	     * @property {Function} kill - a function that removes the `drain` callback and
	     * empties remaining tasks from the queue forcing it to go idle. Invoke like `cargo.kill()`.
	     */

	    /**
	     * Creates a `cargo` object with the specified payload. Tasks added to the
	     * cargo will be processed altogether (up to the `payload` limit). If the
	     * `worker` is in progress, the task is queued until it becomes available. Once
	     * the `worker` has completed some tasks, each callback of those tasks is
	     * called. Check out [these](https://camo.githubusercontent.com/6bbd36f4cf5b35a0f11a96dcd2e97711ffc2fb37/68747470733a2f2f662e636c6f75642e6769746875622e636f6d2f6173736574732f313637363837312f36383130382f62626330636662302d356632392d313165322d393734662d3333393763363464633835382e676966) [animations](https://camo.githubusercontent.com/f4810e00e1c5f5f8addbe3e9f49064fd5d102699/68747470733a2f2f662e636c6f75642e6769746875622e636f6d2f6173736574732f313637363837312f36383130312f38346339323036362d356632392d313165322d383134662d3964336430323431336266642e676966)
	     * for how `cargo` and `queue` work.
	     *
	     * While [`queue`]{@link module:ControlFlow.queue} passes only one task to one of a group of workers
	     * at a time, cargo passes an array of tasks to a single worker, repeating
	     * when the worker is finished.
	     *
	     * @name cargo
	     * @static
	     * @memberOf module:ControlFlow
	     * @method
	     * @see [async.queue]{@link module:ControlFlow.queue}
	     * @category Control Flow
	     * @param {Function} worker - An asynchronous function for processing an array
	     * of queued tasks, which must call its `callback(err)` argument when finished,
	     * with an optional `err` argument. Invoked with `(tasks, callback)`.
	     * @param {number} [payload=Infinity] - An optional `integer` for determining
	     * how many tasks should be processed per round; if omitted, the default is
	     * unlimited.
	     * @returns {module:ControlFlow.CargoObject} A cargo object to manage the tasks. Callbacks can
	     * attached as certain properties to listen for specific events during the
	     * lifecycle of the cargo and inner queue.
	     * @example
	     *
	     * // create a cargo object with payload 2
	     * var cargo = async.cargo(function(tasks, callback) {
	     *     for (var i=0; i<tasks.length; i++) {
	     *         console.log('hello ' + tasks[i].name);
	     *     }
	     *     callback();
	     * }, 2);
	     *
	     * // add some items
	     * cargo.push({name: 'foo'}, function(err) {
	     *     console.log('finished processing foo');
	     * });
	     * cargo.push({name: 'bar'}, function(err) {
	     *     console.log('finished processing bar');
	     * });
	     * cargo.push({name: 'baz'}, function(err) {
	     *     console.log('finished processing baz');
	     * });
	     */
	    function cargo(worker, payload) {
	      return queue(worker, 1, payload);
	    }

	    /**
	     * The same as [`eachOf`]{@link module:Collections.eachOf} but runs only a single async operation at a time.
	     *
	     * @name eachOfSeries
	     * @static
	     * @memberOf module:Collections
	     * @method
	     * @see [async.eachOf]{@link module:Collections.eachOf}
	     * @alias forEachOfSeries
	     * @category Collection
	     * @param {Array|Iterable|Object} coll - A collection to iterate over.
	     * @param {Function} iteratee - A function to apply to each item in `coll`. The
	     * `key` is the item's key, or index in the case of an array. The iteratee is
	     * passed a `callback(err)` which must be called once it has completed. If no
	     * error has occurred, the callback should be run without arguments or with an
	     * explicit `null` argument. Invoked with (item, key, callback).
	     * @param {Function} [callback] - A callback which is called when all `iteratee`
	     * functions have finished, or an error occurs. Invoked with (err).
	     */
	    var eachOfSeries = doLimit(eachOfLimit, 1);

	    /**
	     * Reduces `coll` into a single value using an async `iteratee` to return each
	     * successive step. `memo` is the initial state of the reduction. This function
	     * only operates in series.
	     *
	     * For performance reasons, it may make sense to split a call to this function
	     * into a parallel map, and then use the normal `Array.prototype.reduce` on the
	     * results. This function is for situations where each step in the reduction
	     * needs to be async; if you can get the data before reducing it, then it's
	     * probably a good idea to do so.
	     *
	     * @name reduce
	     * @static
	     * @memberOf module:Collections
	     * @method
	     * @alias inject
	     * @alias foldl
	     * @category Collection
	     * @param {Array|Iterable|Object} coll - A collection to iterate over.
	     * @param {*} memo - The initial state of the reduction.
	     * @param {Function} iteratee - A function applied to each item in the
	     * array to produce the next step in the reduction. The `iteratee` is passed a
	     * `callback(err, reduction)` which accepts an optional error as its first
	     * argument, and the state of the reduction as the second. If an error is
	     * passed to the callback, the reduction is stopped and the main `callback` is
	     * immediately called with the error. Invoked with (memo, item, callback).
	     * @param {Function} [callback] - A callback which is called after all the
	     * `iteratee` functions have finished. Result is the reduced value. Invoked with
	     * (err, result).
	     * @example
	     *
	     * async.reduce([1,2,3], 0, function(memo, item, callback) {
	     *     // pointless async:
	     *     process.nextTick(function() {
	     *         callback(null, memo + item)
	     *     });
	     * }, function(err, result) {
	     *     // result is now equal to the last value of memo, which is 6
	     * });
	     */
	    function reduce(coll, memo, iteratee, callback) {
	        callback = once(callback || noop);
	        eachOfSeries(coll, function (x, i, callback) {
	            iteratee(memo, x, function (err, v) {
	                memo = v;
	                callback(err);
	            });
	        }, function (err) {
	            callback(err, memo);
	        });
	    }

	    /**
	     * Version of the compose function that is more natural to read. Each function
	     * consumes the return value of the previous function. It is the equivalent of
	     * [compose]{@link module:ControlFlow.compose} with the arguments reversed.
	     *
	     * Each function is executed with the `this` binding of the composed function.
	     *
	     * @name seq
	     * @static
	     * @memberOf module:ControlFlow
	     * @method
	     * @see [async.compose]{@link module:ControlFlow.compose}
	     * @category Control Flow
	     * @param {...Function} functions - the asynchronous functions to compose
	     * @returns {Function} a function that composes the `functions` in order
	     * @example
	     *
	     * // Requires lodash (or underscore), express3 and dresende's orm2.
	     * // Part of an app, that fetches cats of the logged user.
	     * // This example uses `seq` function to avoid overnesting and error
	     * // handling clutter.
	     * app.get('/cats', function(request, response) {
	     *     var User = request.models.User;
	     *     async.seq(
	     *         _.bind(User.get, User),  // 'User.get' has signature (id, callback(err, data))
	     *         function(user, fn) {
	     *             user.getCats(fn);      // 'getCats' has signature (callback(err, data))
	     *         }
	     *     )(req.session.user_id, function (err, cats) {
	     *         if (err) {
	     *             console.error(err);
	     *             response.json({ status: 'error', message: err.message });
	     *         } else {
	     *             response.json({ status: 'ok', message: 'Cats found', data: cats });
	     *         }
	     *     });
	     * });
	     */
	    var seq = rest(function seq(functions) {
	        return rest(function (args) {
	            var that = this;

	            var cb = args[args.length - 1];
	            if (typeof cb == 'function') {
	                args.pop();
	            } else {
	                cb = noop;
	            }

	            reduce(functions, args, function (newargs, fn, cb) {
	                fn.apply(that, newargs.concat([rest(function (err, nextargs) {
	                    cb(err, nextargs);
	                })]));
	            }, function (err, results) {
	                cb.apply(that, [err].concat(results));
	            });
	        });
	    });

	    /**
	     * Creates a function which is a composition of the passed asynchronous
	     * functions. Each function consumes the return value of the function that
	     * follows. Composing functions `f()`, `g()`, and `h()` would produce the result
	     * of `f(g(h()))`, only this version uses callbacks to obtain the return values.
	     *
	     * Each function is executed with the `this` binding of the composed function.
	     *
	     * @name compose
	     * @static
	     * @memberOf module:ControlFlow
	     * @method
	     * @category Control Flow
	     * @param {...Function} functions - the asynchronous functions to compose
	     * @returns {Function} an asynchronous function that is the composed
	     * asynchronous `functions`
	     * @example
	     *
	     * function add1(n, callback) {
	     *     setTimeout(function () {
	     *         callback(null, n + 1);
	     *     }, 10);
	     * }
	     *
	     * function mul3(n, callback) {
	     *     setTimeout(function () {
	     *         callback(null, n * 3);
	     *     }, 10);
	     * }
	     *
	     * var add1mul3 = async.compose(mul3, add1);
	     * add1mul3(4, function (err, result) {
	     *     // result now equals 15
	     * });
	     */
	    var compose = rest(function (args) {
	      return seq.apply(null, args.reverse());
	    });

	    function concat$1(eachfn, arr, fn, callback) {
	        var result = [];
	        eachfn(arr, function (x, index, cb) {
	            fn(x, function (err, y) {
	                result = result.concat(y || []);
	                cb(err);
	            });
	        }, function (err) {
	            callback(err, result);
	        });
	    }

	    /**
	     * Applies `iteratee` to each item in `coll`, concatenating the results. Returns
	     * the concatenated list. The `iteratee`s are called in parallel, and the
	     * results are concatenated as they return. There is no guarantee that the
	     * results array will be returned in the original order of `coll` passed to the
	     * `iteratee` function.
	     *
	     * @name concat
	     * @static
	     * @memberOf module:Collections
	     * @method
	     * @category Collection
	     * @param {Array|Iterable|Object} coll - A collection to iterate over.
	     * @param {Function} iteratee - A function to apply to each item in `coll`.
	     * The iteratee is passed a `callback(err, results)` which must be called once
	     * it has completed with an error (which can be `null`) and an array of results.
	     * Invoked with (item, callback).
	     * @param {Function} [callback(err)] - A callback which is called after all the
	     * `iteratee` functions have finished, or an error occurs. Results is an array
	     * containing the concatenated results of the `iteratee` function. Invoked with
	     * (err, results).
	     * @example
	     *
	     * async.concat(['dir1','dir2','dir3'], fs.readdir, function(err, files) {
	     *     // files is now a list of filenames that exist in the 3 directories
	     * });
	     */
	    var concat = doParallel(concat$1);

	    function doSeries(fn) {
	        return function (obj, iteratee, callback) {
	            return fn(eachOfSeries, obj, iteratee, callback);
	        };
	    }

	    /**
	     * The same as [`concat`]{@link module:Collections.concat} but runs only a single async operation at a time.
	     *
	     * @name concatSeries
	     * @static
	     * @memberOf module:Collections
	     * @method
	     * @see [async.concat]{@link module:Collections.concat}
	     * @category Collection
	     * @param {Array|Iterable|Object} coll - A collection to iterate over.
	     * @param {Function} iteratee - A function to apply to each item in `coll`.
	     * The iteratee is passed a `callback(err, results)` which must be called once
	     * it has completed with an error (which can be `null`) and an array of results.
	     * Invoked with (item, callback).
	     * @param {Function} [callback(err)] - A callback which is called after all the
	     * `iteratee` functions have finished, or an error occurs. Results is an array
	     * containing the concatenated results of the `iteratee` function. Invoked with
	     * (err, results).
	     */
	    var concatSeries = doSeries(concat$1);

	    /**
	     * Returns a function that when called, calls-back with the values provided.
	     * Useful as the first function in a [`waterfall`]{@link module:ControlFlow.waterfall}, or for plugging values in to
	     * [`auto`]{@link module:ControlFlow.auto}.
	     *
	     * @name constant
	     * @static
	     * @memberOf module:Utils
	     * @method
	     * @category Util
	     * @param {...*} arguments... - Any number of arguments to automatically invoke
	     * callback with.
	     * @returns {Function} Returns a function that when invoked, automatically
	     * invokes the callback with the previous given arguments.
	     * @example
	     *
	     * async.waterfall([
	     *     async.constant(42),
	     *     function (value, next) {
	     *         // value === 42
	     *     },
	     *     //...
	     * ], callback);
	     *
	     * async.waterfall([
	     *     async.constant(filename, "utf8"),
	     *     fs.readFile,
	     *     function (fileData, next) {
	     *         //...
	     *     }
	     *     //...
	     * ], callback);
	     *
	     * async.auto({
	     *     hostname: async.constant("https://server.net/"),
	     *     port: findFreePort,
	     *     launchServer: ["hostname", "port", function (options, cb) {
	     *         startServer(options, cb);
	     *     }],
	     *     //...
	     * }, callback);
	     */
	    var constant = rest(function (values) {
	        var args = [null].concat(values);
	        return initialParams(function (ignoredArgs, callback) {
	            return callback.apply(this, args);
	        });
	    });

	    /**
	     * This method returns the first argument given to it.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Util
	     * @param {*} value Any value.
	     * @returns {*} Returns `value`.
	     * @example
	     *
	     * var object = { 'user': 'fred' };
	     *
	     * console.log(_.identity(object) === object);
	     * // => true
	     */
	    function identity(value) {
	      return value;
	    }

	    function _createTester(eachfn, check, getResult) {
	        return function (arr, limit, iteratee, cb) {
	            function done(err) {
	                if (cb) {
	                    if (err) {
	                        cb(err);
	                    } else {
	                        cb(null, getResult(false));
	                    }
	                }
	            }
	            function wrappedIteratee(x, _, callback) {
	                if (!cb) return callback();
	                iteratee(x, function (err, v) {
	                    if (cb) {
	                        if (err) {
	                            cb(err);
	                            cb = iteratee = false;
	                        } else if (check(v)) {
	                            cb(null, getResult(true, x));
	                            cb = iteratee = false;
	                        }
	                    }
	                    callback();
	                });
	            }
	            if (arguments.length > 3) {
	                cb = cb || noop;
	                eachfn(arr, limit, wrappedIteratee, done);
	            } else {
	                cb = iteratee;
	                cb = cb || noop;
	                iteratee = limit;
	                eachfn(arr, wrappedIteratee, done);
	            }
	        };
	    }

	    function _findGetResult(v, x) {
	        return x;
	    }

	    /**
	     * Returns the first value in `coll` that passes an async truth test. The
	     * `iteratee` is applied in parallel, meaning the first iteratee to return
	     * `true` will fire the detect `callback` with that result. That means the
	     * result might not be the first item in the original `coll` (in terms of order)
	     * that passes the test.

	     * If order within the original `coll` is important, then look at
	     * [`detectSeries`]{@link module:Collections.detectSeries}.
	     *
	     * @name detect
	     * @static
	     * @memberOf module:Collections
	     * @method
	     * @alias find
	     * @category Collections
	     * @param {Array|Iterable|Object} coll - A collection to iterate over.
	     * @param {Function} iteratee - A truth test to apply to each item in `coll`.
	     * The iteratee is passed a `callback(err, truthValue)` which must be called
	     * with a boolean argument once it has completed. Invoked with (item, callback).
	     * @param {Function} [callback] - A callback which is called as soon as any
	     * iteratee returns `true`, or after all the `iteratee` functions have finished.
	     * Result will be the first item in the array that passes the truth test
	     * (iteratee) or the value `undefined` if none passed. Invoked with
	     * (err, result).
	     * @example
	     *
	     * async.detect(['file1','file2','file3'], function(filePath, callback) {
	     *     fs.access(filePath, function(err) {
	     *         callback(null, !err)
	     *     });
	     * }, function(err, result) {
	     *     // result now equals the first file in the list that exists
	     * });
	     */
	    var detect = _createTester(eachOf, identity, _findGetResult);

	    /**
	     * The same as [`detect`]{@link module:Collections.detect} but runs a maximum of `limit` async operations at a
	     * time.
	     *
	     * @name detectLimit
	     * @static
	     * @memberOf module:Collections
	     * @method
	     * @see [async.detect]{@link module:Collections.detect}
	     * @alias findLimit
	     * @category Collections
	     * @param {Array|Iterable|Object} coll - A collection to iterate over.
	     * @param {number} limit - The maximum number of async operations at a time.
	     * @param {Function} iteratee - A truth test to apply to each item in `coll`.
	     * The iteratee is passed a `callback(err, truthValue)` which must be called
	     * with a boolean argument once it has completed. Invoked with (item, callback).
	     * @param {Function} [callback] - A callback which is called as soon as any
	     * iteratee returns `true`, or after all the `iteratee` functions have finished.
	     * Result will be the first item in the array that passes the truth test
	     * (iteratee) or the value `undefined` if none passed. Invoked with
	     * (err, result).
	     */
	    var detectLimit = _createTester(eachOfLimit, identity, _findGetResult);

	    /**
	     * The same as [`detect`]{@link module:Collections.detect} but runs only a single async operation at a time.
	     *
	     * @name detectSeries
	     * @static
	     * @memberOf module:Collections
	     * @method
	     * @see [async.detect]{@link module:Collections.detect}
	     * @alias findSeries
	     * @category Collections
	     * @param {Array|Iterable|Object} coll - A collection to iterate over.
	     * @param {Function} iteratee - A truth test to apply to each item in `coll`.
	     * The iteratee is passed a `callback(err, truthValue)` which must be called
	     * with a boolean argument once it has completed. Invoked with (item, callback).
	     * @param {Function} [callback] - A callback which is called as soon as any
	     * iteratee returns `true`, or after all the `iteratee` functions have finished.
	     * Result will be the first item in the array that passes the truth test
	     * (iteratee) or the value `undefined` if none passed. Invoked with
	     * (err, result).
	     */
	    var detectSeries = _createTester(eachOfSeries, identity, _findGetResult);

	    function consoleFunc(name) {
	        return rest(function (fn, args) {
	            fn.apply(null, args.concat([rest(function (err, args) {
	                if (typeof console === 'object') {
	                    if (err) {
	                        if (console.error) {
	                            console.error(err);
	                        }
	                    } else if (console[name]) {
	                        arrayEach(args, function (x) {
	                            console[name](x);
	                        });
	                    }
	                }
	            })]));
	        });
	    }

	    /**
	     * Logs the result of an `async` function to the `console` using `console.dir`
	     * to display the properties of the resulting object. Only works in Node.js or
	     * in browsers that support `console.dir` and `console.error` (such as FF and
	     * Chrome). If multiple arguments are returned from the async function,
	     * `console.dir` is called on each argument in order.
	     *
	     * @name dir
	     * @static
	     * @memberOf module:Utils
	     * @method
	     * @category Util
	     * @param {Function} function - The function you want to eventually apply all
	     * arguments to.
	     * @param {...*} arguments... - Any number of arguments to apply to the function.
	     * @example
	     *
	     * // in a module
	     * var hello = function(name, callback) {
	     *     setTimeout(function() {
	     *         callback(null, {hello: name});
	     *     }, 1000);
	     * };
	     *
	     * // in the node repl
	     * node> async.dir(hello, 'world');
	     * {hello: 'world'}
	     */
	    var dir = consoleFunc('dir');

	    /**
	     * The post-check version of [`during`]{@link module:ControlFlow.during}. To reflect the difference in
	     * the order of operations, the arguments `test` and `fn` are switched.
	     *
	     * Also a version of [`doWhilst`]{@link module:ControlFlow.doWhilst} with asynchronous `test` function.
	     * @name doDuring
	     * @static
	     * @memberOf module:ControlFlow
	     * @method
	     * @see [async.during]{@link module:ControlFlow.during}
	     * @category Control Flow
	     * @param {Function} fn - A function which is called each time `test` passes.
	     * The function is passed a `callback(err)`, which must be called once it has
	     * completed with an optional `err` argument. Invoked with (callback).
	     * @param {Function} test - asynchronous truth test to perform before each
	     * execution of `fn`. Invoked with (...args, callback), where `...args` are the
	     * non-error args from the previous callback of `fn`.
	     * @param {Function} [callback] - A callback which is called after the test
	     * function has failed and repeated execution of `fn` has stopped. `callback`
	     * will be passed an error if one occured, otherwise `null`.
	     */
	    function doDuring(fn, test, callback) {
	        callback = onlyOnce(callback || noop);

	        var next = rest(function (err, args) {
	            if (err) return callback(err);
	            args.push(check);
	            test.apply(this, args);
	        });

	        function check(err, truth) {
	            if (err) return callback(err);
	            if (!truth) return callback(null);
	            fn(next);
	        }

	        check(null, true);
	    }

	    /**
	     * The post-check version of [`whilst`]{@link module:ControlFlow.whilst}. To reflect the difference in
	     * the order of operations, the arguments `test` and `iteratee` are switched.
	     *
	     * `doWhilst` is to `whilst` as `do while` is to `while` in plain JavaScript.
	     *
	     * @name doWhilst
	     * @static
	     * @memberOf module:ControlFlow
	     * @method
	     * @see [async.whilst]{@link module:ControlFlow.whilst}
	     * @category Control Flow
	     * @param {Function} iteratee - A function which is called each time `test`
	     * passes. The function is passed a `callback(err)`, which must be called once
	     * it has completed with an optional `err` argument. Invoked with (callback).
	     * @param {Function} test - synchronous truth test to perform after each
	     * execution of `iteratee`. Invoked with Invoked with the non-error callback
	     * results of `iteratee`.
	     * @param {Function} [callback] - A callback which is called after the test
	     * function has failed and repeated execution of `iteratee` has stopped.
	     * `callback` will be passed an error and any arguments passed to the final
	     * `iteratee`'s callback. Invoked with (err, [results]);
	     */
	    function doWhilst(iteratee, test, callback) {
	        callback = onlyOnce(callback || noop);
	        var next = rest(function (err, args) {
	            if (err) return callback(err);
	            if (test.apply(this, args)) return iteratee(next);
	            callback.apply(null, [null].concat(args));
	        });
	        iteratee(next);
	    }

	    /**
	     * Like ['doWhilst']{@link module:ControlFlow.doWhilst}, except the `test` is inverted. Note the
	     * argument ordering differs from `until`.
	     *
	     * @name doUntil
	     * @static
	     * @memberOf module:ControlFlow
	     * @method
	     * @see [async.doWhilst]{@link module:ControlFlow.doWhilst}
	     * @category Control Flow
	     * @param {Function} fn - A function which is called each time `test` fails.
	     * The function is passed a `callback(err)`, which must be called once it has
	     * completed with an optional `err` argument. Invoked with (callback).
	     * @param {Function} test - synchronous truth test to perform after each
	     * execution of `fn`. Invoked with the non-error callback results of `fn`.
	     * @param {Function} [callback] - A callback which is called after the test
	     * function has passed and repeated execution of `fn` has stopped. `callback`
	     * will be passed an error and any arguments passed to the final `fn`'s
	     * callback. Invoked with (err, [results]);
	     */
	    function doUntil(fn, test, callback) {
	        doWhilst(fn, function () {
	            return !test.apply(this, arguments);
	        }, callback);
	    }

	    /**
	     * Like [`whilst`]{@link module:ControlFlow.whilst}, except the `test` is an asynchronous function that
	     * is passed a callback in the form of `function (err, truth)`. If error is
	     * passed to `test` or `fn`, the main callback is immediately called with the
	     * value of the error.
	     *
	     * @name during
	     * @static
	     * @memberOf module:ControlFlow
	     * @method
	     * @see [async.whilst]{@link module:ControlFlow.whilst}
	     * @category Control Flow
	     * @param {Function} test - asynchronous truth test to perform before each
	     * execution of `fn`. Invoked with (callback).
	     * @param {Function} fn - A function which is called each time `test` passes.
	     * The function is passed a `callback(err)`, which must be called once it has
	     * completed with an optional `err` argument. Invoked with (callback).
	     * @param {Function} [callback] - A callback which is called after the test
	     * function has failed and repeated execution of `fn` has stopped. `callback`
	     * will be passed an error, if one occured, otherwise `null`.
	     * @example
	     *
	     * var count = 0;
	     *
	     * async.during(
	     *     function (callback) {
	     *         return callback(null, count < 5);
	     *     },
	     *     function (callback) {
	     *         count++;
	     *         setTimeout(callback, 1000);
	     *     },
	     *     function (err) {
	     *         // 5 seconds have passed
	     *     }
	     * );
	     */
	    function during(test, fn, callback) {
	        callback = onlyOnce(callback || noop);

	        function next(err) {
	            if (err) return callback(err);
	            test(check);
	        }

	        function check(err, truth) {
	            if (err) return callback(err);
	            if (!truth) return callback(null);
	            fn(next);
	        }

	        test(check);
	    }

	    function _withoutIndex(iteratee) {
	        return function (value, index, callback) {
	            return iteratee(value, callback);
	        };
	    }

	    /**
	     * Applies the function `iteratee` to each item in `coll`, in parallel.
	     * The `iteratee` is called with an item from the list, and a callback for when
	     * it has finished. If the `iteratee` passes an error to its `callback`, the
	     * main `callback` (for the `each` function) is immediately called with the
	     * error.
	     *
	     * Note, that since this function applies `iteratee` to each item in parallel,
	     * there is no guarantee that the iteratee functions will complete in order.
	     *
	     * @name each
	     * @static
	     * @memberOf module:Collections
	     * @method
	     * @alias forEach
	     * @category Collection
	     * @param {Array|Iterable|Object} coll - A collection to iterate over.
	     * @param {Function} iteratee - A function to apply to each item
	     * in `coll`. The iteratee is passed a `callback(err)` which must be called once
	     * it has completed. If no error has occurred, the `callback` should be run
	     * without arguments or with an explicit `null` argument. The array index is not
	     * passed to the iteratee. Invoked with (item, callback). If you need the index,
	     * use `eachOf`.
	     * @param {Function} [callback] - A callback which is called when all
	     * `iteratee` functions have finished, or an error occurs. Invoked with (err).
	     * @example
	     *
	     * // assuming openFiles is an array of file names and saveFile is a function
	     * // to save the modified contents of that file:
	     *
	     * async.each(openFiles, saveFile, function(err){
	     *   // if any of the saves produced an error, err would equal that error
	     * });
	     *
	     * // assuming openFiles is an array of file names
	     * async.each(openFiles, function(file, callback) {
	     *
	     *     // Perform operation on file here.
	     *     console.log('Processing file ' + file);
	     *
	     *     if( file.length > 32 ) {
	     *       console.log('This file name is too long');
	     *       callback('File name too long');
	     *     } else {
	     *       // Do work to process file here
	     *       console.log('File processed');
	     *       callback();
	     *     }
	     * }, function(err) {
	     *     // if any of the file processing produced an error, err would equal that error
	     *     if( err ) {
	     *       // One of the iterations produced an error.
	     *       // All processing will now stop.
	     *       console.log('A file failed to process');
	     *     } else {
	     *       console.log('All files have been processed successfully');
	     *     }
	     * });
	     */
	    function eachLimit(coll, iteratee, callback) {
	      eachOf(coll, _withoutIndex(iteratee), callback);
	    }

	    /**
	     * The same as [`each`]{@link module:Collections.each} but runs a maximum of `limit` async operations at a time.
	     *
	     * @name eachLimit
	     * @static
	     * @memberOf module:Collections
	     * @method
	     * @see [async.each]{@link module:Collections.each}
	     * @alias forEachLimit
	     * @category Collection
	     * @param {Array|Iterable|Object} coll - A colleciton to iterate over.
	     * @param {number} limit - The maximum number of async operations at a time.
	     * @param {Function} iteratee - A function to apply to each item in `coll`. The
	     * iteratee is passed a `callback(err)` which must be called once it has
	     * completed. If no error has occurred, the `callback` should be run without
	     * arguments or with an explicit `null` argument. The array index is not passed
	     * to the iteratee. Invoked with (item, callback). If you need the index, use
	     * `eachOfLimit`.
	     * @param {Function} [callback] - A callback which is called when all
	     * `iteratee` functions have finished, or an error occurs. Invoked with (err).
	     */
	    function eachLimit$1(coll, limit, iteratee, callback) {
	      _eachOfLimit(limit)(coll, _withoutIndex(iteratee), callback);
	    }

	    /**
	     * The same as [`each`]{@link module:Collections.each} but runs only a single async operation at a time.
	     *
	     * @name eachSeries
	     * @static
	     * @memberOf module:Collections
	     * @method
	     * @see [async.each]{@link module:Collections.each}
	     * @alias forEachSeries
	     * @category Collection
	     * @param {Array|Iterable|Object} coll - A collection to iterate over.
	     * @param {Function} iteratee - A function to apply to each
	     * item in `coll`. The iteratee is passed a `callback(err)` which must be called
	     * once it has completed. If no error has occurred, the `callback` should be run
	     * without arguments or with an explicit `null` argument. The array index is
	     * not passed to the iteratee. Invoked with (item, callback). If you need the
	     * index, use `eachOfSeries`.
	     * @param {Function} [callback] - A callback which is called when all
	     * `iteratee` functions have finished, or an error occurs. Invoked with (err).
	     */
	    var eachSeries = doLimit(eachLimit$1, 1);

	    /**
	     * Wrap an async function and ensure it calls its callback on a later tick of
	     * the event loop.  If the function already calls its callback on a next tick,
	     * no extra deferral is added. This is useful for preventing stack overflows
	     * (`RangeError: Maximum call stack size exceeded`) and generally keeping
	     * [Zalgo](http://blog.izs.me/post/59142742143/designing-apis-for-asynchrony)
	     * contained.
	     *
	     * @name ensureAsync
	     * @static
	     * @memberOf module:Utils
	     * @method
	     * @category Util
	     * @param {Function} fn - an async function, one that expects a node-style
	     * callback as its last argument.
	     * @returns {Function} Returns a wrapped function with the exact same call
	     * signature as the function passed in.
	     * @example
	     *
	     * function sometimesAsync(arg, callback) {
	     *     if (cache[arg]) {
	     *         return callback(null, cache[arg]); // this would be synchronous!!
	     *     } else {
	     *         doSomeIO(arg, callback); // this IO would be asynchronous
	     *     }
	     * }
	     *
	     * // this has a risk of stack overflows if many results are cached in a row
	     * async.mapSeries(args, sometimesAsync, done);
	     *
	     * // this will defer sometimesAsync's callback if necessary,
	     * // preventing stack overflows
	     * async.mapSeries(args, async.ensureAsync(sometimesAsync), done);
	     */
	    function ensureAsync(fn) {
	        return initialParams(function (args, callback) {
	            var sync = true;
	            args.push(function () {
	                var innerArgs = arguments;
	                if (sync) {
	                    setImmediate$1(function () {
	                        callback.apply(null, innerArgs);
	                    });
	                } else {
	                    callback.apply(null, innerArgs);
	                }
	            });
	            fn.apply(this, args);
	            sync = false;
	        });
	    }

	    function notId(v) {
	        return !v;
	    }

	    /**
	     * Returns `true` if every element in `coll` satisfies an async test. If any
	     * iteratee call returns `false`, the main `callback` is immediately called.
	     *
	     * @name every
	     * @static
	     * @memberOf module:Collections
	     * @method
	     * @alias all
	     * @category Collection
	     * @param {Array|Iterable|Object} coll - A collection to iterate over.
	     * @param {Function} iteratee - A truth test to apply to each item in the
	     * collection in parallel. The iteratee is passed a `callback(err, truthValue)`
	     * which must be called with a  boolean argument once it has completed. Invoked
	     * with (item, callback).
	     * @param {Function} [callback] - A callback which is called after all the
	     * `iteratee` functions have finished. Result will be either `true` or `false`
	     * depending on the values of the async tests. Invoked with (err, result).
	     * @example
	     *
	     * async.every(['file1','file2','file3'], function(filePath, callback) {
	     *     fs.access(filePath, function(err) {
	     *         callback(null, !err)
	     *     });
	     * }, function(err, result) {
	     *     // if result is true then every file exists
	     * });
	     */
	    var every = _createTester(eachOf, notId, notId);

	    /**
	     * The same as [`every`]{@link module:Collections.every} but runs a maximum of `limit` async operations at a time.
	     *
	     * @name everyLimit
	     * @static
	     * @memberOf module:Collections
	     * @method
	     * @see [async.every]{@link module:Collections.every}
	     * @alias allLimit
	     * @category Collection
	     * @param {Array|Iterable|Object} coll - A collection to iterate over.
	     * @param {number} limit - The maximum number of async operations at a time.
	     * @param {Function} iteratee - A truth test to apply to each item in the
	     * collection in parallel. The iteratee is passed a `callback(err, truthValue)`
	     * which must be called with a  boolean argument once it has completed. Invoked
	     * with (item, callback).
	     * @param {Function} [callback] - A callback which is called after all the
	     * `iteratee` functions have finished. Result will be either `true` or `false`
	     * depending on the values of the async tests. Invoked with (err, result).
	     */
	    var everyLimit = _createTester(eachOfLimit, notId, notId);

	    /**
	     * The same as [`every`]{@link module:Collections.every} but runs only a single async operation at a time.
	     *
	     * @name everySeries
	     * @static
	     * @memberOf module:Collections
	     * @method
	     * @see [async.every]{@link module:Collections.every}
	     * @alias allSeries
	     * @category Collection
	     * @param {Array|Iterable|Object} coll - A collection to iterate over.
	     * @param {Function} iteratee - A truth test to apply to each item in the
	     * collection in parallel. The iteratee is passed a `callback(err, truthValue)`
	     * which must be called with a  boolean argument once it has completed. Invoked
	     * with (item, callback).
	     * @param {Function} [callback] - A callback which is called after all the
	     * `iteratee` functions have finished. Result will be either `true` or `false`
	     * depending on the values of the async tests. Invoked with (err, result).
	     */
	    var everySeries = doLimit(everyLimit, 1);

	    function _filter(eachfn, arr, iteratee, callback) {
	        callback = once(callback || noop);
	        var results = [];
	        eachfn(arr, function (x, index, callback) {
	            iteratee(x, function (err, v) {
	                if (err) {
	                    callback(err);
	                } else {
	                    if (v) {
	                        results.push({ index: index, value: x });
	                    }
	                    callback();
	                }
	            });
	        }, function (err) {
	            if (err) {
	                callback(err);
	            } else {
	                callback(null, arrayMap(results.sort(function (a, b) {
	                    return a.index - b.index;
	                }), baseProperty('value')));
	            }
	        });
	    }

	    /**
	     * Returns a new array of all the values in `coll` which pass an async truth
	     * test. This operation is performed in parallel, but the results array will be
	     * in the same order as the original.
	     *
	     * @name filter
	     * @static
	     * @memberOf module:Collections
	     * @method
	     * @alias select
	     * @category Collection
	     * @param {Array|Iterable|Object} coll - A collection to iterate over.
	     * @param {Function} iteratee - A truth test to apply to each item in `coll`.
	     * The `iteratee` is passed a `callback(err, truthValue)`, which must be called
	     * with a boolean argument once it has completed. Invoked with (item, callback).
	     * @param {Function} [callback] - A callback which is called after all the
	     * `iteratee` functions have finished. Invoked with (err, results).
	     * @example
	     *
	     * async.filter(['file1','file2','file3'], function(filePath, callback) {
	     *     fs.access(filePath, function(err) {
	     *         callback(null, !err)
	     *     });
	     * }, function(err, results) {
	     *     // results now equals an array of the existing files
	     * });
	     */
	    var filter = doParallel(_filter);

	    /**
	     * The same as [`filter`]{@link module:Collections.filter} but runs a maximum of `limit` async operations at a
	     * time.
	     *
	     * @name filterLimit
	     * @static
	     * @memberOf module:Collections
	     * @method
	     * @see [async.filter]{@link module:Collections.filter}
	     * @alias selectLimit
	     * @category Collection
	     * @param {Array|Iterable|Object} coll - A collection to iterate over.
	     * @param {number} limit - The maximum number of async operations at a time.
	     * @param {Function} iteratee - A truth test to apply to each item in `coll`.
	     * The `iteratee` is passed a `callback(err, truthValue)`, which must be called
	     * with a boolean argument once it has completed. Invoked with (item, callback).
	     * @param {Function} [callback] - A callback which is called after all the
	     * `iteratee` functions have finished. Invoked with (err, results).
	     */
	    var filterLimit = doParallelLimit(_filter);

	    /**
	     * The same as [`filter`]{@link module:Collections.filter} but runs only a single async operation at a time.
	     *
	     * @name filterSeries
	     * @static
	     * @memberOf module:Collections
	     * @method
	     * @see [async.filter]{@link module:Collections.filter}
	     * @alias selectSeries
	     * @category Collection
	     * @param {Array|Iterable|Object} coll - A collection to iterate over.
	     * @param {Function} iteratee - A truth test to apply to each item in `coll`.
	     * The `iteratee` is passed a `callback(err, truthValue)`, which must be called
	     * with a boolean argument once it has completed. Invoked with (item, callback).
	     * @param {Function} [callback] - A callback which is called after all the
	     * `iteratee` functions have finished. Invoked with (err, results)
	     */
	    var filterSeries = doLimit(filterLimit, 1);

	    /**
	     * Calls the asynchronous function `fn` with a callback parameter that allows it
	     * to call itself again, in series, indefinitely.

	     * If an error is passed to the
	     * callback then `errback` is called with the error, and execution stops,
	     * otherwise it will never be called.
	     *
	     * @name forever
	     * @static
	     * @memberOf module:ControlFlow
	     * @method
	     * @category Control Flow
	     * @param {Function} fn - a function to call repeatedly. Invoked with (next).
	     * @param {Function} [errback] - when `fn` passes an error to it's callback,
	     * this function will be called, and execution stops. Invoked with (err).
	     * @example
	     *
	     * async.forever(
	     *     function(next) {
	     *         // next is suitable for passing to things that need a callback(err [, whatever]);
	     *         // it will result in this function being called again.
	     *     },
	     *     function(err) {
	     *         // if next is called with a value in its first parameter, it will appear
	     *         // in here as 'err', and execution will stop.
	     *     }
	     * );
	     */
	    function forever(fn, errback) {
	        var done = onlyOnce(errback || noop);
	        var task = ensureAsync(fn);

	        function next(err) {
	            if (err) return done(err);
	            task(next);
	        }
	        next();
	    }

	    /**
	     * Logs the result of an `async` function to the `console`. Only works in
	     * Node.js or in browsers that support `console.log` and `console.error` (such
	     * as FF and Chrome). If multiple arguments are returned from the async
	     * function, `console.log` is called on each argument in order.
	     *
	     * @name log
	     * @static
	     * @memberOf module:Utils
	     * @method
	     * @category Util
	     * @param {Function} function - The function you want to eventually apply all
	     * arguments to.
	     * @param {...*} arguments... - Any number of arguments to apply to the function.
	     * @example
	     *
	     * // in a module
	     * var hello = function(name, callback) {
	     *     setTimeout(function() {
	     *         callback(null, 'hello ' + name);
	     *     }, 1000);
	     * };
	     *
	     * // in the node repl
	     * node> async.log(hello, 'world');
	     * 'hello world'
	     */
	    var log = consoleFunc('log');

	    /**
	     * The same as [`mapValues`]{@link module:Collections.mapValues} but runs a maximum of `limit` async operations at a
	     * time.
	     *
	     * @name mapValuesLimit
	     * @static
	     * @memberOf module:Collections
	     * @method
	     * @see [async.mapValues]{@link module:Collections.mapValues}
	     * @category Collection
	     * @param {Object} obj - A collection to iterate over.
	     * @param {number} limit - The maximum number of async operations at a time.
	     * @param {Function} iteratee - A function to apply to each value in `obj`.
	     * The iteratee is passed a `callback(err, transformed)` which must be called
	     * once it has completed with an error (which can be `null`) and a
	     * transformed value. Invoked with (value, key, callback).
	     * @param {Function} [callback] - A callback which is called when all `iteratee`
	     * functions have finished, or an error occurs. Result is an object of the
	     * transformed values from the `obj`. Invoked with (err, result).
	     */
	    function mapValuesLimit(obj, limit, iteratee, callback) {
	        callback = once(callback || noop);
	        var newObj = {};
	        eachOfLimit(obj, limit, function (val, key, next) {
	            iteratee(val, key, function (err, result) {
	                if (err) return next(err);
	                newObj[key] = result;
	                next();
	            });
	        }, function (err) {
	            callback(err, newObj);
	        });
	    }

	    /**
	     * A relative of [`map`]{@link module:Collections.map}, designed for use with objects.
	     *
	     * Produces a new Object by mapping each value of `obj` through the `iteratee`
	     * function. The `iteratee` is called each `value` and `key` from `obj` and a
	     * callback for when it has finished processing. Each of these callbacks takes
	     * two arguments: an `error`, and the transformed item from `obj`. If `iteratee`
	     * passes an error to its callback, the main `callback` (for the `mapValues`
	     * function) is immediately called with the error.
	     *
	     * Note, the order of the keys in the result is not guaranteed.  The keys will
	     * be roughly in the order they complete, (but this is very engine-specific)
	     *
	     * @name mapValues
	     * @static
	     * @memberOf module:Collections
	     * @method
	     * @category Collection
	     * @param {Object} obj - A collection to iterate over.
	     * @param {Function} iteratee - A function to apply to each value and key in
	     * `coll`. The iteratee is passed a `callback(err, transformed)` which must be
	     * called once it has completed with an error (which can be `null`) and a
	     * transformed value. Invoked with (value, key, callback).
	     * @param {Function} [callback] - A callback which is called when all `iteratee`
	     * functions have finished, or an error occurs. Results is an array of the
	     * transformed items from the `obj`. Invoked with (err, result).
	     * @example
	     *
	     * async.mapValues({
	     *     f1: 'file1',
	     *     f2: 'file2',
	     *     f3: 'file3'
	     * }, function (file, key, callback) {
	     *   fs.stat(file, callback);
	     * }, function(err, result) {
	     *     // results is now a map of stats for each file, e.g.
	     *     // {
	     *     //     f1: [stats for file1],
	     *     //     f2: [stats for file2],
	     *     //     f3: [stats for file3]
	     *     // }
	     * });
	     */

	    var mapValues = doLimit(mapValuesLimit, Infinity);

	    /**
	     * The same as [`mapValues`]{@link module:Collections.mapValues} but runs only a single async operation at a time.
	     *
	     * @name mapValuesSeries
	     * @static
	     * @memberOf module:Collections
	     * @method
	     * @see [async.mapValues]{@link module:Collections.mapValues}
	     * @category Collection
	     * @param {Object} obj - A collection to iterate over.
	     * @param {Function} iteratee - A function to apply to each value in `obj`.
	     * The iteratee is passed a `callback(err, transformed)` which must be called
	     * once it has completed with an error (which can be `null`) and a
	     * transformed value. Invoked with (value, key, callback).
	     * @param {Function} [callback] - A callback which is called when all `iteratee`
	     * functions have finished, or an error occurs. Result is an object of the
	     * transformed values from the `obj`. Invoked with (err, result).
	     */
	    var mapValuesSeries = doLimit(mapValuesLimit, 1);

	    function has(obj, key) {
	        return key in obj;
	    }

	    /**
	     * Caches the results of an `async` function. When creating a hash to store
	     * function results against, the callback is omitted from the hash and an
	     * optional hash function can be used.
	     *
	     * If no hash function is specified, the first argument is used as a hash key,
	     * which may work reasonably if it is a string or a data type that converts to a
	     * distinct string. Note that objects and arrays will not behave reasonably.
	     * Neither will cases where the other arguments are significant. In such cases,
	     * specify your own hash function.
	     *
	     * The cache of results is exposed as the `memo` property of the function
	     * returned by `memoize`.
	     *
	     * @name memoize
	     * @static
	     * @memberOf module:Utils
	     * @method
	     * @category Util
	     * @param {Function} fn - The function to proxy and cache results from.
	     * @param {Function} hasher - An optional function for generating a custom hash
	     * for storing results. It has all the arguments applied to it apart from the
	     * callback, and must be synchronous.
	     * @returns {Function} a memoized version of `fn`
	     * @example
	     *
	     * var slow_fn = function(name, callback) {
	     *     // do something
	     *     callback(null, result);
	     * };
	     * var fn = async.memoize(slow_fn);
	     *
	     * // fn can now be used as if it were slow_fn
	     * fn('some name', function() {
	     *     // callback
	     * });
	     */
	    function memoize(fn, hasher) {
	        var memo = Object.create(null);
	        var queues = Object.create(null);
	        hasher = hasher || identity;
	        var memoized = initialParams(function memoized(args, callback) {
	            var key = hasher.apply(null, args);
	            if (has(memo, key)) {
	                setImmediate$1(function () {
	                    callback.apply(null, memo[key]);
	                });
	            } else if (has(queues, key)) {
	                queues[key].push(callback);
	            } else {
	                queues[key] = [callback];
	                fn.apply(null, args.concat([rest(function (args) {
	                    memo[key] = args;
	                    var q = queues[key];
	                    delete queues[key];
	                    for (var i = 0, l = q.length; i < l; i++) {
	                        q[i].apply(null, args);
	                    }
	                })]));
	            }
	        });
	        memoized.memo = memo;
	        memoized.unmemoized = fn;
	        return memoized;
	    }

	    /**
	     * Calls `callback` on a later loop around the event loop. In Node.js this just
	     * calls `setImmediate`.  In the browser it will use `setImmediate` if
	     * available, otherwise `setTimeout(callback, 0)`, which means other higher
	     * priority events may precede the execution of `callback`.
	     *
	     * This is used internally for browser-compatibility purposes.
	     *
	     * @name nextTick
	     * @static
	     * @memberOf module:Utils
	     * @method
	     * @alias setImmediate
	     * @category Util
	     * @param {Function} callback - The function to call on a later loop around
	     * the event loop. Invoked with (args...).
	     * @param {...*} args... - any number of additional arguments to pass to the
	     * callback on the next tick.
	     * @example
	     *
	     * var call_order = [];
	     * async.nextTick(function() {
	     *     call_order.push('two');
	     *     // call_order now equals ['one','two']
	     * });
	     * call_order.push('one');
	     *
	     * async.setImmediate(function (a, b, c) {
	     *     // a, b, and c equal 1, 2, and 3
	     * }, 1, 2, 3);
	     */
	    var _defer$1;

	    if (hasNextTick) {
	        _defer$1 = process.nextTick;
	    } else if (hasSetImmediate) {
	        _defer$1 = setImmediate;
	    } else {
	        _defer$1 = fallback;
	    }

	    var nextTick = wrap(_defer$1);

	    function _parallel(eachfn, tasks, callback) {
	        callback = callback || noop;
	        var results = isArrayLike(tasks) ? [] : {};

	        eachfn(tasks, function (task, key, callback) {
	            task(rest(function (err, args) {
	                if (args.length <= 1) {
	                    args = args[0];
	                }
	                results[key] = args;
	                callback(err);
	            }));
	        }, function (err) {
	            callback(err, results);
	        });
	    }

	    /**
	     * Run the `tasks` collection of functions in parallel, without waiting until
	     * the previous function has completed. If any of the functions pass an error to
	     * its callback, the main `callback` is immediately called with the value of the
	     * error. Once the `tasks` have completed, the results are passed to the final
	     * `callback` as an array.
	     *
	     * **Note:** `parallel` is about kicking-off I/O tasks in parallel, not about
	     * parallel execution of code.  If your tasks do not use any timers or perform
	     * any I/O, they will actually be executed in series.  Any synchronous setup
	     * sections for each task will happen one after the other.  JavaScript remains
	     * single-threaded.
	     *
	     * It is also possible to use an object instead of an array. Each property will
	     * be run as a function and the results will be passed to the final `callback`
	     * as an object instead of an array. This can be a more readable way of handling
	     * results from {@link async.parallel}.
	     *
	     * @name parallel
	     * @static
	     * @memberOf module:ControlFlow
	     * @method
	     * @category Control Flow
	     * @param {Array|Iterable|Object} tasks - A collection containing functions to run.
	     * Each function is passed a `callback(err, result)` which it must call on
	     * completion with an error `err` (which can be `null`) and an optional `result`
	     * value.
	     * @param {Function} [callback] - An optional callback to run once all the
	     * functions have completed successfully. This function gets a results array
	     * (or object) containing all the result arguments passed to the task callbacks.
	     * Invoked with (err, results).
	     * @example
	     * async.parallel([
	     *     function(callback) {
	     *         setTimeout(function() {
	     *             callback(null, 'one');
	     *         }, 200);
	     *     },
	     *     function(callback) {
	     *         setTimeout(function() {
	     *             callback(null, 'two');
	     *         }, 100);
	     *     }
	     * ],
	     * // optional callback
	     * function(err, results) {
	     *     // the results array will equal ['one','two'] even though
	     *     // the second function had a shorter timeout.
	     * });
	     *
	     * // an example using an object instead of an array
	     * async.parallel({
	     *     one: function(callback) {
	     *         setTimeout(function() {
	     *             callback(null, 1);
	     *         }, 200);
	     *     },
	     *     two: function(callback) {
	     *         setTimeout(function() {
	     *             callback(null, 2);
	     *         }, 100);
	     *     }
	     * }, function(err, results) {
	     *     // results is now equals to: {one: 1, two: 2}
	     * });
	     */
	    function parallelLimit(tasks, callback) {
	      _parallel(eachOf, tasks, callback);
	    }

	    /**
	     * The same as [`parallel`]{@link module:ControlFlow.parallel} but runs a maximum of `limit` async operations at a
	     * time.
	     *
	     * @name parallelLimit
	     * @static
	     * @memberOf module:ControlFlow
	     * @method
	     * @see [async.parallel]{@link module:ControlFlow.parallel}
	     * @category Control Flow
	     * @param {Array|Collection} tasks - A collection containing functions to run.
	     * Each function is passed a `callback(err, result)` which it must call on
	     * completion with an error `err` (which can be `null`) and an optional `result`
	     * value.
	     * @param {number} limit - The maximum number of async operations at a time.
	     * @param {Function} [callback] - An optional callback to run once all the
	     * functions have completed successfully. This function gets a results array
	     * (or object) containing all the result arguments passed to the task callbacks.
	     * Invoked with (err, results).
	     */
	    function parallelLimit$1(tasks, limit, callback) {
	      _parallel(_eachOfLimit(limit), tasks, callback);
	    }

	    /**
	     * A queue of tasks for the worker function to complete.
	     * @typedef {Object} QueueObject
	     * @memberOf module:ControlFlow
	     * @property {Function} length - a function returning the number of items
	     * waiting to be processed. Invoke with `queue.length()`.
	     * @property {boolean} started - a boolean indicating whether or not any
	     * items have been pushed and processed by the queue.
	     * @property {Function} running - a function returning the number of items
	     * currently being processed. Invoke with `queue.running()`.
	     * @property {Function} workersList - a function returning the array of items
	     * currently being processed. Invoke with `queue.workersList()`.
	     * @property {Function} idle - a function returning false if there are items
	     * waiting or being processed, or true if not. Invoke with `queue.idle()`.
	     * @property {number} concurrency - an integer for determining how many `worker`
	     * functions should be run in parallel. This property can be changed after a
	     * `queue` is created to alter the concurrency on-the-fly.
	     * @property {Function} push - add a new task to the `queue`. Calls `callback`
	     * once the `worker` has finished processing the task. Instead of a single task,
	     * a `tasks` array can be submitted. The respective callback is used for every
	     * task in the list. Invoke with `queue.push(task, [callback])`,
	     * @property {Function} unshift - add a new task to the front of the `queue`.
	     * Invoke with `queue.unshift(task, [callback])`.
	     * @property {Function} saturated - a callback that is called when the number of
	     * running workers hits the `concurrency` limit, and further tasks will be
	     * queued.
	     * @property {Function} unsaturated - a callback that is called when the number
	     * of running workers is less than the `concurrency` & `buffer` limits, and
	     * further tasks will not be queued.
	     * @property {number} buffer - A minimum threshold buffer in order to say that
	     * the `queue` is `unsaturated`.
	     * @property {Function} empty - a callback that is called when the last item
	     * from the `queue` is given to a `worker`.
	     * @property {Function} drain - a callback that is called when the last item
	     * from the `queue` has returned from the `worker`.
	     * @property {Function} error - a callback that is called when a task errors.
	     * Has the signature `function(error, task)`.
	     * @property {boolean} paused - a boolean for determining whether the queue is
	     * in a paused state.
	     * @property {Function} pause - a function that pauses the processing of tasks
	     * until `resume()` is called. Invoke with `queue.pause()`.
	     * @property {Function} resume - a function that resumes the processing of
	     * queued tasks when the queue is paused. Invoke with `queue.resume()`.
	     * @property {Function} kill - a function that removes the `drain` callback and
	     * empties remaining tasks from the queue forcing it to go idle. Invoke with `queue.kill()`.
	     */

	    /**
	     * Creates a `queue` object with the specified `concurrency`. Tasks added to the
	     * `queue` are processed in parallel (up to the `concurrency` limit). If all
	     * `worker`s are in progress, the task is queued until one becomes available.
	     * Once a `worker` completes a `task`, that `task`'s callback is called.
	     *
	     * @name queue
	     * @static
	     * @memberOf module:ControlFlow
	     * @method
	     * @category Control Flow
	     * @param {Function} worker - An asynchronous function for processing a queued
	     * task, which must call its `callback(err)` argument when finished, with an
	     * optional `error` as an argument.  If you want to handle errors from an
	     * individual task, pass a callback to `q.push()`. Invoked with
	     * (task, callback).
	     * @param {number} [concurrency=1] - An `integer` for determining how many
	     * `worker` functions should be run in parallel.  If omitted, the concurrency
	     * defaults to `1`.  If the concurrency is `0`, an error is thrown.
	     * @returns {module:ControlFlow.QueueObject} A queue object to manage the tasks. Callbacks can
	     * attached as certain properties to listen for specific events during the
	     * lifecycle of the queue.
	     * @example
	     *
	     * // create a queue object with concurrency 2
	     * var q = async.queue(function(task, callback) {
	     *     console.log('hello ' + task.name);
	     *     callback();
	     * }, 2);
	     *
	     * // assign a callback
	     * q.drain = function() {
	     *     console.log('all items have been processed');
	     * };
	     *
	     * // add some items to the queue
	     * q.push({name: 'foo'}, function(err) {
	     *     console.log('finished processing foo');
	     * });
	     * q.push({name: 'bar'}, function (err) {
	     *     console.log('finished processing bar');
	     * });
	     *
	     * // add some items to the queue (batch-wise)
	     * q.push([{name: 'baz'},{name: 'bay'},{name: 'bax'}], function(err) {
	     *     console.log('finished processing item');
	     * });
	     *
	     * // add some items to the front of the queue
	     * q.unshift({name: 'bar'}, function (err) {
	     *     console.log('finished processing bar');
	     * });
	     */
	    function queue$1 (worker, concurrency) {
	      return queue(function (items, cb) {
	        worker(items[0], cb);
	      }, concurrency, 1);
	    }

	    /**
	     * The same as [async.queue]{@link module:ControlFlow.queue} only tasks are assigned a priority and
	     * completed in ascending priority order.
	     *
	     * @name priorityQueue
	     * @static
	     * @memberOf module:ControlFlow
	     * @method
	     * @see [async.queue]{@link module:ControlFlow.queue}
	     * @category Control Flow
	     * @param {Function} worker - An asynchronous function for processing a queued
	     * task, which must call its `callback(err)` argument when finished, with an
	     * optional `error` as an argument.  If you want to handle errors from an
	     * individual task, pass a callback to `q.push()`. Invoked with
	     * (task, callback).
	     * @param {number} concurrency - An `integer` for determining how many `worker`
	     * functions should be run in parallel.  If omitted, the concurrency defaults to
	     * `1`.  If the concurrency is `0`, an error is thrown.
	     * @returns {module:ControlFlow.QueueObject} A priorityQueue object to manage the tasks. There are two
	     * differences between `queue` and `priorityQueue` objects:
	     * * `push(task, priority, [callback])` - `priority` should be a number. If an
	     *   array of `tasks` is given, all tasks will be assigned the same priority.
	     * * The `unshift` method was removed.
	     */
	    function priorityQueue (worker, concurrency) {
	        // Start with a normal queue
	        var q = queue$1(worker, concurrency);

	        // Override push to accept second parameter representing priority
	        q.push = function (data, priority, callback) {
	            if (callback == null) callback = noop;
	            if (typeof callback !== 'function') {
	                throw new Error('task callback must be a function');
	            }
	            q.started = true;
	            if (!isArray(data)) {
	                data = [data];
	            }
	            if (data.length === 0) {
	                // call drain immediately if there are no tasks
	                return setImmediate$1(function () {
	                    q.drain();
	                });
	            }

	            priority = priority || 0;
	            var nextNode = q._tasks.head;
	            while (nextNode && priority >= nextNode.priority) {
	                nextNode = nextNode.next;
	            }

	            arrayEach(data, function (task) {
	                var item = {
	                    data: task,
	                    priority: priority,
	                    callback: callback
	                };

	                if (nextNode) {
	                    q._tasks.insertBefore(nextNode, item);
	                } else {
	                    q._tasks.push(item);
	                }
	            });
	            setImmediate$1(q.process);
	        };

	        // Remove unshift function
	        delete q.unshift;

	        return q;
	    }

	    /**
	     * Runs the `tasks` array of functions in parallel, without waiting until the
	     * previous function has completed. Once any the `tasks` completed or pass an
	     * error to its callback, the main `callback` is immediately called. It's
	     * equivalent to `Promise.race()`.
	     *
	     * @name race
	     * @static
	     * @memberOf module:ControlFlow
	     * @method
	     * @category Control Flow
	     * @param {Array} tasks - An array containing functions to run. Each function
	     * is passed a `callback(err, result)` which it must call on completion with an
	     * error `err` (which can be `null`) and an optional `result` value.
	     * @param {Function} callback - A callback to run once any of the functions have
	     * completed. This function gets an error or result from the first function that
	     * completed. Invoked with (err, result).
	     * @returns undefined
	     * @example
	     *
	     * async.race([
	     *     function(callback) {
	     *         setTimeout(function() {
	     *             callback(null, 'one');
	     *         }, 200);
	     *     },
	     *     function(callback) {
	     *         setTimeout(function() {
	     *             callback(null, 'two');
	     *         }, 100);
	     *     }
	     * ],
	     * // main callback
	     * function(err, result) {
	     *     // the result will be equal to 'two' as it finishes earlier
	     * });
	     */
	    function race(tasks, callback) {
	        callback = once(callback || noop);
	        if (!isArray(tasks)) return callback(new TypeError('First argument to race must be an array of functions'));
	        if (!tasks.length) return callback();
	        arrayEach(tasks, function (task) {
	            task(callback);
	        });
	    }

	    var slice = Array.prototype.slice;

	    /**
	     * Same as [`reduce`]{@link module:Collections.reduce}, only operates on `array` in reverse order.
	     *
	     * @name reduceRight
	     * @static
	     * @memberOf module:Collections
	     * @method
	     * @see [async.reduce]{@link module:Collections.reduce}
	     * @alias foldr
	     * @category Collection
	     * @param {Array} array - A collection to iterate over.
	     * @param {*} memo - The initial state of the reduction.
	     * @param {Function} iteratee - A function applied to each item in the
	     * array to produce the next step in the reduction. The `iteratee` is passed a
	     * `callback(err, reduction)` which accepts an optional error as its first
	     * argument, and the state of the reduction as the second. If an error is
	     * passed to the callback, the reduction is stopped and the main `callback` is
	     * immediately called with the error. Invoked with (memo, item, callback).
	     * @param {Function} [callback] - A callback which is called after all the
	     * `iteratee` functions have finished. Result is the reduced value. Invoked with
	     * (err, result).
	     */
	    function reduceRight(array, memo, iteratee, callback) {
	      var reversed = slice.call(array).reverse();
	      reduce(reversed, memo, iteratee, callback);
	    }

	    /**
	     * Wraps the function in another function that always returns data even when it
	     * errors.
	     *
	     * The object returned has either the property `error` or `value`.
	     *
	     * @name reflect
	     * @static
	     * @memberOf module:Utils
	     * @method
	     * @category Util
	     * @param {Function} fn - The function you want to wrap
	     * @returns {Function} - A function that always passes null to it's callback as
	     * the error. The second argument to the callback will be an `object` with
	     * either an `error` or a `value` property.
	     * @example
	     *
	     * async.parallel([
	     *     async.reflect(function(callback) {
	     *         // do some stuff ...
	     *         callback(null, 'one');
	     *     }),
	     *     async.reflect(function(callback) {
	     *         // do some more stuff but error ...
	     *         callback('bad stuff happened');
	     *     }),
	     *     async.reflect(function(callback) {
	     *         // do some more stuff ...
	     *         callback(null, 'two');
	     *     })
	     * ],
	     * // optional callback
	     * function(err, results) {
	     *     // values
	     *     // results[0].value = 'one'
	     *     // results[1].error = 'bad stuff happened'
	     *     // results[2].value = 'two'
	     * });
	     */
	    function reflect(fn) {
	        return initialParams(function reflectOn(args, reflectCallback) {
	            args.push(rest(function callback(err, cbArgs) {
	                if (err) {
	                    reflectCallback(null, {
	                        error: err
	                    });
	                } else {
	                    var value = null;
	                    if (cbArgs.length === 1) {
	                        value = cbArgs[0];
	                    } else if (cbArgs.length > 1) {
	                        value = cbArgs;
	                    }
	                    reflectCallback(null, {
	                        value: value
	                    });
	                }
	            }));

	            return fn.apply(this, args);
	        });
	    }

	    function reject$1(eachfn, arr, iteratee, callback) {
	        _filter(eachfn, arr, function (value, cb) {
	            iteratee(value, function (err, v) {
	                if (err) {
	                    cb(err);
	                } else {
	                    cb(null, !v);
	                }
	            });
	        }, callback);
	    }

	    /**
	     * The opposite of [`filter`]{@link module:Collections.filter}. Removes values that pass an `async` truth test.
	     *
	     * @name reject
	     * @static
	     * @memberOf module:Collections
	     * @method
	     * @see [async.filter]{@link module:Collections.filter}
	     * @category Collection
	     * @param {Array|Iterable|Object} coll - A collection to iterate over.
	     * @param {Function} iteratee - A truth test to apply to each item in `coll`.
	     * The `iteratee` is passed a `callback(err, truthValue)`, which must be called
	     * with a boolean argument once it has completed. Invoked with (item, callback).
	     * @param {Function} [callback] - A callback which is called after all the
	     * `iteratee` functions have finished. Invoked with (err, results).
	     * @example
	     *
	     * async.reject(['file1','file2','file3'], function(filePath, callback) {
	     *     fs.access(filePath, function(err) {
	     *         callback(null, !err)
	     *     });
	     * }, function(err, results) {
	     *     // results now equals an array of missing files
	     *     createFiles(results);
	     * });
	     */
	    var reject = doParallel(reject$1);

	    /**
	     * A helper function that wraps an array or an object of functions with reflect.
	     *
	     * @name reflectAll
	     * @static
	     * @memberOf module:Utils
	     * @method
	     * @see [async.reflect]{@link module:Utils.reflect}
	     * @category Util
	     * @param {Array} tasks - The array of functions to wrap in `async.reflect`.
	     * @returns {Array} Returns an array of functions, each function wrapped in
	     * `async.reflect`
	     * @example
	     *
	     * let tasks = [
	     *     function(callback) {
	     *         setTimeout(function() {
	     *             callback(null, 'one');
	     *         }, 200);
	     *     },
	     *     function(callback) {
	     *         // do some more stuff but error ...
	     *         callback(new Error('bad stuff happened'));
	     *     },
	     *     function(callback) {
	     *         setTimeout(function() {
	     *             callback(null, 'two');
	     *         }, 100);
	     *     }
	     * ];
	     *
	     * async.parallel(async.reflectAll(tasks),
	     * // optional callback
	     * function(err, results) {
	     *     // values
	     *     // results[0].value = 'one'
	     *     // results[1].error = Error('bad stuff happened')
	     *     // results[2].value = 'two'
	     * });
	     *
	     * // an example using an object instead of an array
	     * let tasks = {
	     *     one: function(callback) {
	     *         setTimeout(function() {
	     *             callback(null, 'one');
	     *         }, 200);
	     *     },
	     *     two: function(callback) {
	     *         callback('two');
	     *     },
	     *     three: function(callback) {
	     *         setTimeout(function() {
	     *             callback(null, 'three');
	     *         }, 100);
	     *     }
	     * };
	     *
	     * async.parallel(async.reflectAll(tasks),
	     * // optional callback
	     * function(err, results) {
	     *     // values
	     *     // results.one.value = 'one'
	     *     // results.two.error = 'two'
	     *     // results.three.value = 'three'
	     * });
	     */
	    function reflectAll(tasks) {
	        var results;
	        if (isArray(tasks)) {
	            results = arrayMap(tasks, reflect);
	        } else {
	            results = {};
	            baseForOwn(tasks, function (task, key) {
	                results[key] = reflect.call(this, task);
	            });
	        }
	        return results;
	    }

	    /**
	     * The same as [`reject`]{@link module:Collections.reject} but runs a maximum of `limit` async operations at a
	     * time.
	     *
	     * @name rejectLimit
	     * @static
	     * @memberOf module:Collections
	     * @method
	     * @see [async.reject]{@link module:Collections.reject}
	     * @category Collection
	     * @param {Array|Iterable|Object} coll - A collection to iterate over.
	     * @param {number} limit - The maximum number of async operations at a time.
	     * @param {Function} iteratee - A truth test to apply to each item in `coll`.
	     * The `iteratee` is passed a `callback(err, truthValue)`, which must be called
	     * with a boolean argument once it has completed. Invoked with (item, callback).
	     * @param {Function} [callback] - A callback which is called after all the
	     * `iteratee` functions have finished. Invoked with (err, results).
	     */
	    var rejectLimit = doParallelLimit(reject$1);

	    /**
	     * The same as [`reject`]{@link module:Collections.reject} but runs only a single async operation at a time.
	     *
	     * @name rejectSeries
	     * @static
	     * @memberOf module:Collections
	     * @method
	     * @see [async.reject]{@link module:Collections.reject}
	     * @category Collection
	     * @param {Array|Iterable|Object} coll - A collection to iterate over.
	     * @param {Function} iteratee - A truth test to apply to each item in `coll`.
	     * The `iteratee` is passed a `callback(err, truthValue)`, which must be called
	     * with a boolean argument once it has completed. Invoked with (item, callback).
	     * @param {Function} [callback] - A callback which is called after all the
	     * `iteratee` functions have finished. Invoked with (err, results).
	     */
	    var rejectSeries = doLimit(rejectLimit, 1);

	    /**
	     * Creates a function that returns `value`.
	     *
	     * @static
	     * @memberOf _
	     * @since 2.4.0
	     * @category Util
	     * @param {*} value The value to return from the new function.
	     * @returns {Function} Returns the new constant function.
	     * @example
	     *
	     * var objects = _.times(2, _.constant({ 'a': 1 }));
	     *
	     * console.log(objects);
	     * // => [{ 'a': 1 }, { 'a': 1 }]
	     *
	     * console.log(objects[0] === objects[1]);
	     * // => true
	     */
	    function constant$1(value) {
	      return function() {
	        return value;
	      };
	    }

	    /**
	     * Attempts to get a successful response from `task` no more than `times` times
	     * before returning an error. If the task is successful, the `callback` will be
	     * passed the result of the successful task. If all attempts fail, the callback
	     * will be passed the error and result (if any) of the final attempt.
	     *
	     * @name retry
	     * @static
	     * @memberOf module:ControlFlow
	     * @method
	     * @category Control Flow
	     * @param {Object|number} [opts = {times: 5, interval: 0}| 5] - Can be either an
	     * object with `times` and `interval` or a number.
	     * * `times` - The number of attempts to make before giving up.  The default
	     *   is `5`.
	     * * `interval` - The time to wait between retries, in milliseconds.  The
	     *   default is `0`. The interval may also be specified as a function of the
	     *   retry count (see example).
	     * * If `opts` is a number, the number specifies the number of times to retry,
	     *   with the default interval of `0`.
	     * @param {Function} task - A function which receives two arguments: (1) a
	     * `callback(err, result)` which must be called when finished, passing `err`
	     * (which can be `null`) and the `result` of the function's execution, and (2)
	     * a `results` object, containing the results of the previously executed
	     * functions (if nested inside another control flow). Invoked with
	     * (callback, results).
	     * @param {Function} [callback] - An optional callback which is called when the
	     * task has succeeded, or after the final failed attempt. It receives the `err`
	     * and `result` arguments of the last attempt at completing the `task`. Invoked
	     * with (err, results).
	     * @example
	     *
	     * // The `retry` function can be used as a stand-alone control flow by passing
	     * // a callback, as shown below:
	     *
	     * // try calling apiMethod 3 times
	     * async.retry(3, apiMethod, function(err, result) {
	     *     // do something with the result
	     * });
	     *
	     * // try calling apiMethod 3 times, waiting 200 ms between each retry
	     * async.retry({times: 3, interval: 200}, apiMethod, function(err, result) {
	     *     // do something with the result
	     * });
	     *
	     * // try calling apiMethod 10 times with exponential backoff
	     * // (i.e. intervals of 100, 200, 400, 800, 1600, ... milliseconds)
	     * async.retry({
	     *   times: 10,
	     *   interval: function(retryCount) {
	     *     return 50 * Math.pow(2, retryCount);
	     *   }
	     * }, apiMethod, function(err, result) {
	     *     // do something with the result
	     * });
	     *
	     * // try calling apiMethod the default 5 times no delay between each retry
	     * async.retry(apiMethod, function(err, result) {
	     *     // do something with the result
	     * });
	     *
	     * // It can also be embedded within other control flow functions to retry
	     * // individual methods that are not as reliable, like this:
	     * async.auto({
	     *     users: api.getUsers.bind(api),
	     *     payments: async.retry(3, api.getPayments.bind(api))
	     * }, function(err, results) {
	     *     // do something with the results
	     * });
	     */
	    function retry(opts, task, callback) {
	        var DEFAULT_TIMES = 5;
	        var DEFAULT_INTERVAL = 0;

	        var options = {
	            times: DEFAULT_TIMES,
	            intervalFunc: constant$1(DEFAULT_INTERVAL)
	        };

	        function parseTimes(acc, t) {
	            if (typeof t === 'object') {
	                acc.times = +t.times || DEFAULT_TIMES;

	                acc.intervalFunc = typeof t.interval === 'function' ? t.interval : constant$1(+t.interval || DEFAULT_INTERVAL);
	            } else if (typeof t === 'number' || typeof t === 'string') {
	                acc.times = +t || DEFAULT_TIMES;
	            } else {
	                throw new Error("Invalid arguments for async.retry");
	            }
	        }

	        if (arguments.length < 3 && typeof opts === 'function') {
	            callback = task || noop;
	            task = opts;
	        } else {
	            parseTimes(options, opts);
	            callback = callback || noop;
	        }

	        if (typeof task !== 'function') {
	            throw new Error("Invalid arguments for async.retry");
	        }

	        var attempt = 1;
	        function retryAttempt() {
	            task(function (err) {
	                if (err && attempt++ < options.times) {
	                    setTimeout(retryAttempt, options.intervalFunc(attempt));
	                } else {
	                    callback.apply(null, arguments);
	                }
	            });
	        }

	        retryAttempt();
	    }

	    /**
	     * A close relative of [`retry`]{@link module:ControlFlow.retry}.  This method wraps a task and makes it
	     * retryable, rather than immediately calling it with retries.
	     *
	     * @name retryable
	     * @static
	     * @memberOf module:ControlFlow
	     * @method
	     * @see [async.retry]{@link module:ControlFlow.retry}
	     * @category Control Flow
	     * @param {Object|number} [opts = {times: 5, interval: 0}| 5] - optional
	     * options, exactly the same as from `retry`
	     * @param {Function} task - the asynchronous function to wrap
	     * @returns {Functions} The wrapped function, which when invoked, will retry on
	     * an error, based on the parameters specified in `opts`.
	     * @example
	     *
	     * async.auto({
	     *     dep1: async.retryable(3, getFromFlakyService),
	     *     process: ["dep1", async.retryable(3, function (results, cb) {
	     *         maybeProcessData(results.dep1, cb);
	     *     })]
	     * }, callback);
	     */
	    function retryable (opts, task) {
	        if (!task) {
	            task = opts;
	            opts = null;
	        }
	        return initialParams(function (args, callback) {
	            function taskFn(cb) {
	                task.apply(null, args.concat([cb]));
	            }

	            if (opts) retry(opts, taskFn, callback);else retry(taskFn, callback);
	        });
	    }

	    /**
	     * Run the functions in the `tasks` collection in series, each one running once
	     * the previous function has completed. If any functions in the series pass an
	     * error to its callback, no more functions are run, and `callback` is
	     * immediately called with the value of the error. Otherwise, `callback`
	     * receives an array of results when `tasks` have completed.
	     *
	     * It is also possible to use an object instead of an array. Each property will
	     * be run as a function, and the results will be passed to the final `callback`
	     * as an object instead of an array. This can be a more readable way of handling
	     *  results from {@link async.series}.
	     *
	     * **Note** that while many implementations preserve the order of object
	     * properties, the [ECMAScript Language Specification](http://www.ecma-international.org/ecma-262/5.1/#sec-8.6)
	     * explicitly states that
	     *
	     * > The mechanics and order of enumerating the properties is not specified.
	     *
	     * So if you rely on the order in which your series of functions are executed,
	     * and want this to work on all platforms, consider using an array.
	     *
	     * @name series
	     * @static
	     * @memberOf module:ControlFlow
	     * @method
	     * @category Control Flow
	     * @param {Array|Iterable|Object} tasks - A collection containing functions to run, each
	     * function is passed a `callback(err, result)` it must call on completion with
	     * an error `err` (which can be `null`) and an optional `result` value.
	     * @param {Function} [callback] - An optional callback to run once all the
	     * functions have completed. This function gets a results array (or object)
	     * containing all the result arguments passed to the `task` callbacks. Invoked
	     * with (err, result).
	     * @example
	     * async.series([
	     *     function(callback) {
	     *         // do some stuff ...
	     *         callback(null, 'one');
	     *     },
	     *     function(callback) {
	     *         // do some more stuff ...
	     *         callback(null, 'two');
	     *     }
	     * ],
	     * // optional callback
	     * function(err, results) {
	     *     // results is now equal to ['one', 'two']
	     * });
	     *
	     * async.series({
	     *     one: function(callback) {
	     *         setTimeout(function() {
	     *             callback(null, 1);
	     *         }, 200);
	     *     },
	     *     two: function(callback){
	     *         setTimeout(function() {
	     *             callback(null, 2);
	     *         }, 100);
	     *     }
	     * }, function(err, results) {
	     *     // results is now equal to: {one: 1, two: 2}
	     * });
	     */
	    function series(tasks, callback) {
	      _parallel(eachOfSeries, tasks, callback);
	    }

	    /**
	     * Returns `true` if at least one element in the `coll` satisfies an async test.
	     * If any iteratee call returns `true`, the main `callback` is immediately
	     * called.
	     *
	     * @name some
	     * @static
	     * @memberOf module:Collections
	     * @method
	     * @alias any
	     * @category Collection
	     * @param {Array|Iterable|Object} coll - A collection to iterate over.
	     * @param {Function} iteratee - A truth test to apply to each item in the array
	     * in parallel. The iteratee is passed a `callback(err, truthValue)` which must
	     * be called with a boolean argument once it has completed. Invoked with
	     * (item, callback).
	     * @param {Function} [callback] - A callback which is called as soon as any
	     * iteratee returns `true`, or after all the iteratee functions have finished.
	     * Result will be either `true` or `false` depending on the values of the async
	     * tests. Invoked with (err, result).
	     * @example
	     *
	     * async.some(['file1','file2','file3'], function(filePath, callback) {
	     *     fs.access(filePath, function(err) {
	     *         callback(null, !err)
	     *     });
	     * }, function(err, result) {
	     *     // if result is true then at least one of the files exists
	     * });
	     */
	    var some = _createTester(eachOf, Boolean, identity);

	    /**
	     * The same as [`some`]{@link module:Collections.some} but runs a maximum of `limit` async operations at a time.
	     *
	     * @name someLimit
	     * @static
	     * @memberOf module:Collections
	     * @method
	     * @see [async.some]{@link module:Collections.some}
	     * @alias anyLimit
	     * @category Collection
	     * @param {Array|Iterable|Object} coll - A collection to iterate over.
	     * @param {number} limit - The maximum number of async operations at a time.
	     * @param {Function} iteratee - A truth test to apply to each item in the array
	     * in parallel. The iteratee is passed a `callback(err, truthValue)` which must
	     * be called with a boolean argument once it has completed. Invoked with
	     * (item, callback).
	     * @param {Function} [callback] - A callback which is called as soon as any
	     * iteratee returns `true`, or after all the iteratee functions have finished.
	     * Result will be either `true` or `false` depending on the values of the async
	     * tests. Invoked with (err, result).
	     */
	    var someLimit = _createTester(eachOfLimit, Boolean, identity);

	    /**
	     * The same as [`some`]{@link module:Collections.some} but runs only a single async operation at a time.
	     *
	     * @name someSeries
	     * @static
	     * @memberOf module:Collections
	     * @method
	     * @see [async.some]{@link module:Collections.some}
	     * @alias anySeries
	     * @category Collection
	     * @param {Array|Iterable|Object} coll - A collection to iterate over.
	     * @param {Function} iteratee - A truth test to apply to each item in the array
	     * in parallel. The iteratee is passed a `callback(err, truthValue)` which must
	     * be called with a boolean argument once it has completed. Invoked with
	     * (item, callback).
	     * @param {Function} [callback] - A callback which is called as soon as any
	     * iteratee returns `true`, or after all the iteratee functions have finished.
	     * Result will be either `true` or `false` depending on the values of the async
	     * tests. Invoked with (err, result).
	     */
	    var someSeries = doLimit(someLimit, 1);

	    /**
	     * Sorts a list by the results of running each `coll` value through an async
	     * `iteratee`.
	     *
	     * @name sortBy
	     * @static
	     * @memberOf module:Collections
	     * @method
	     * @category Collection
	     * @param {Array|Iterable|Object} coll - A collection to iterate over.
	     * @param {Function} iteratee - A function to apply to each item in `coll`.
	     * The iteratee is passed a `callback(err, sortValue)` which must be called once
	     * it has completed with an error (which can be `null`) and a value to use as
	     * the sort criteria. Invoked with (item, callback).
	     * @param {Function} callback - A callback which is called after all the
	     * `iteratee` functions have finished, or an error occurs. Results is the items
	     * from the original `coll` sorted by the values returned by the `iteratee`
	     * calls. Invoked with (err, results).
	     * @example
	     *
	     * async.sortBy(['file1','file2','file3'], function(file, callback) {
	     *     fs.stat(file, function(err, stats) {
	     *         callback(err, stats.mtime);
	     *     });
	     * }, function(err, results) {
	     *     // results is now the original array of files sorted by
	     *     // modified date
	     * });
	     *
	     * // By modifying the callback parameter the
	     * // sorting order can be influenced:
	     *
	     * // ascending order
	     * async.sortBy([1,9,3,5], function(x, callback) {
	     *     callback(null, x);
	     * }, function(err,result) {
	     *     // result callback
	     * });
	     *
	     * // descending order
	     * async.sortBy([1,9,3,5], function(x, callback) {
	     *     callback(null, x*-1);    //<- x*-1 instead of x, turns the order around
	     * }, function(err,result) {
	     *     // result callback
	     * });
	     */
	    function sortBy(coll, iteratee, callback) {
	        map(coll, function (x, callback) {
	            iteratee(x, function (err, criteria) {
	                if (err) return callback(err);
	                callback(null, { value: x, criteria: criteria });
	            });
	        }, function (err, results) {
	            if (err) return callback(err);
	            callback(null, arrayMap(results.sort(comparator), baseProperty('value')));
	        });

	        function comparator(left, right) {
	            var a = left.criteria,
	                b = right.criteria;
	            return a < b ? -1 : a > b ? 1 : 0;
	        }
	    }

	    /**
	     * Sets a time limit on an asynchronous function. If the function does not call
	     * its callback within the specified milliseconds, it will be called with a
	     * timeout error. The code property for the error object will be `'ETIMEDOUT'`.
	     *
	     * @name timeout
	     * @static
	     * @memberOf module:Utils
	     * @method
	     * @category Util
	     * @param {Function} asyncFn - The asynchronous function you want to set the
	     * time limit.
	     * @param {number} milliseconds - The specified time limit.
	     * @param {*} [info] - Any variable you want attached (`string`, `object`, etc)
	     * to timeout Error for more information..
	     * @returns {Function} Returns a wrapped function that can be used with any of
	     * the control flow functions.
	     * @example
	     *
	     * async.timeout(function(callback) {
	     *     doAsyncTask(callback);
	     * }, 1000);
	     */
	    function timeout(asyncFn, milliseconds, info) {
	        var originalCallback, timer;
	        var timedOut = false;

	        function injectedCallback() {
	            if (!timedOut) {
	                originalCallback.apply(null, arguments);
	                clearTimeout(timer);
	            }
	        }

	        function timeoutCallback() {
	            var name = asyncFn.name || 'anonymous';
	            var error = new Error('Callback function "' + name + '" timed out.');
	            error.code = 'ETIMEDOUT';
	            if (info) {
	                error.info = info;
	            }
	            timedOut = true;
	            originalCallback(error);
	        }

	        return initialParams(function (args, origCallback) {
	            originalCallback = origCallback;
	            // setup timer and call original function
	            timer = setTimeout(timeoutCallback, milliseconds);
	            asyncFn.apply(null, args.concat(injectedCallback));
	        });
	    }

	    /* Built-in method references for those with the same name as other `lodash` methods. */
	    var nativeCeil = Math.ceil;
	    var nativeMax$1 = Math.max;
	    /**
	     * The base implementation of `_.range` and `_.rangeRight` which doesn't
	     * coerce arguments to numbers.
	     *
	     * @private
	     * @param {number} start The start of the range.
	     * @param {number} end The end of the range.
	     * @param {number} step The value to increment or decrement by.
	     * @param {boolean} [fromRight] Specify iterating from right to left.
	     * @returns {Array} Returns the range of numbers.
	     */
	    function baseRange(start, end, step, fromRight) {
	      var index = -1,
	          length = nativeMax$1(nativeCeil((end - start) / (step || 1)), 0),
	          result = Array(length);

	      while (length--) {
	        result[fromRight ? length : ++index] = start;
	        start += step;
	      }
	      return result;
	    }

	    /**
	     * The same as [times]{@link module:ControlFlow.times} but runs a maximum of `limit` async operations at a
	     * time.
	     *
	     * @name timesLimit
	     * @static
	     * @memberOf module:ControlFlow
	     * @method
	     * @see [async.times]{@link module:ControlFlow.times}
	     * @category Control Flow
	     * @param {number} count - The number of times to run the function.
	     * @param {number} limit - The maximum number of async operations at a time.
	     * @param {Function} iteratee - The function to call `n` times. Invoked with the
	     * iteration index and a callback (n, next).
	     * @param {Function} callback - see [async.map]{@link module:Collections.map}.
	     */
	    function timeLimit(count, limit, iteratee, callback) {
	      mapLimit(baseRange(0, count, 1), limit, iteratee, callback);
	    }

	    /**
	     * Calls the `iteratee` function `n` times, and accumulates results in the same
	     * manner you would use with [map]{@link module:Collections.map}.
	     *
	     * @name times
	     * @static
	     * @memberOf module:ControlFlow
	     * @method
	     * @see [async.map]{@link module:Collections.map}
	     * @category Control Flow
	     * @param {number} n - The number of times to run the function.
	     * @param {Function} iteratee - The function to call `n` times. Invoked with the
	     * iteration index and a callback (n, next).
	     * @param {Function} callback - see {@link module:Collections.map}.
	     * @example
	     *
	     * // Pretend this is some complicated async factory
	     * var createUser = function(id, callback) {
	     *     callback(null, {
	     *         id: 'user' + id
	     *     });
	     * };
	     *
	     * // generate 5 users
	     * async.times(5, function(n, next) {
	     *     createUser(n, function(err, user) {
	     *         next(err, user);
	     *     });
	     * }, function(err, users) {
	     *     // we should now have 5 users
	     * });
	     */
	    var times = doLimit(timeLimit, Infinity);

	    /**
	     * The same as [times]{@link module:ControlFlow.times} but runs only a single async operation at a time.
	     *
	     * @name timesSeries
	     * @static
	     * @memberOf module:ControlFlow
	     * @method
	     * @see [async.times]{@link module:ControlFlow.times}
	     * @category Control Flow
	     * @param {number} n - The number of times to run the function.
	     * @param {Function} iteratee - The function to call `n` times. Invoked with the
	     * iteration index and a callback (n, next).
	     * @param {Function} callback - see {@link module:Collections.map}.
	     */
	    var timesSeries = doLimit(timeLimit, 1);

	    /**
	     * A relative of `reduce`.  Takes an Object or Array, and iterates over each
	     * element in series, each step potentially mutating an `accumulator` value.
	     * The type of the accumulator defaults to the type of collection passed in.
	     *
	     * @name transform
	     * @static
	     * @memberOf module:Collections
	     * @method
	     * @category Collection
	     * @param {Array|Iterable|Object} coll - A collection to iterate over.
	     * @param {*} [accumulator] - The initial state of the transform.  If omitted,
	     * it will default to an empty Object or Array, depending on the type of `coll`
	     * @param {Function} iteratee - A function applied to each item in the
	     * collection that potentially modifies the accumulator. The `iteratee` is
	     * passed a `callback(err)` which accepts an optional error as its first
	     * argument. If an error is passed to the callback, the transform is stopped
	     * and the main `callback` is immediately called with the error.
	     * Invoked with (accumulator, item, key, callback).
	     * @param {Function} [callback] - A callback which is called after all the
	     * `iteratee` functions have finished. Result is the transformed accumulator.
	     * Invoked with (err, result).
	     * @example
	     *
	     * async.transform([1,2,3], function(acc, item, index, callback) {
	     *     // pointless async:
	     *     process.nextTick(function() {
	     *         acc.push(item * 2)
	     *         callback(null)
	     *     });
	     * }, function(err, result) {
	     *     // result is now equal to [2, 4, 6]
	     * });
	     *
	     * @example
	     *
	     * async.transform({a: 1, b: 2, c: 3}, function (obj, val, key, callback) {
	     *     setImmediate(function () {
	     *         obj[key] = val * 2;
	     *         callback();
	     *     })
	     * }, function (err, result) {
	     *     // result is equal to {a: 2, b: 4, c: 6}
	     * })
	     */
	    function transform(coll, accumulator, iteratee, callback) {
	        if (arguments.length === 3) {
	            callback = iteratee;
	            iteratee = accumulator;
	            accumulator = isArray(coll) ? [] : {};
	        }
	        callback = once(callback || noop);

	        eachOf(coll, function (v, k, cb) {
	            iteratee(accumulator, v, k, cb);
	        }, function (err) {
	            callback(err, accumulator);
	        });
	    }

	    /**
	     * Undoes a [memoize]{@link module:Utils.memoize}d function, reverting it to the original,
	     * unmemoized form. Handy for testing.
	     *
	     * @name unmemoize
	     * @static
	     * @memberOf module:Utils
	     * @method
	     * @see [async.memoize]{@link module:Utils.memoize}
	     * @category Util
	     * @param {Function} fn - the memoized function
	     * @returns {Function} a function that calls the original unmemoized function
	     */
	    function unmemoize(fn) {
	        return function () {
	            return (fn.unmemoized || fn).apply(null, arguments);
	        };
	    }

	    /**
	     * Repeatedly call `fn`, while `test` returns `true`. Calls `callback` when
	     * stopped, or an error occurs.
	     *
	     * @name whilst
	     * @static
	     * @memberOf module:ControlFlow
	     * @method
	     * @category Control Flow
	     * @param {Function} test - synchronous truth test to perform before each
	     * execution of `fn`. Invoked with ().
	     * @param {Function} iteratee - A function which is called each time `test` passes.
	     * The function is passed a `callback(err)`, which must be called once it has
	     * completed with an optional `err` argument. Invoked with (callback).
	     * @param {Function} [callback] - A callback which is called after the test
	     * function has failed and repeated execution of `fn` has stopped. `callback`
	     * will be passed an error and any arguments passed to the final `fn`'s
	     * callback. Invoked with (err, [results]);
	     * @returns undefined
	     * @example
	     *
	     * var count = 0;
	     * async.whilst(
	     *     function() { return count < 5; },
	     *     function(callback) {
	     *         count++;
	     *         setTimeout(function() {
	     *             callback(null, count);
	     *         }, 1000);
	     *     },
	     *     function (err, n) {
	     *         // 5 seconds have passed, n = 5
	     *     }
	     * );
	     */
	    function whilst(test, iteratee, callback) {
	        callback = onlyOnce(callback || noop);
	        if (!test()) return callback(null);
	        var next = rest(function (err, args) {
	            if (err) return callback(err);
	            if (test()) return iteratee(next);
	            callback.apply(null, [null].concat(args));
	        });
	        iteratee(next);
	    }

	    /**
	     * Repeatedly call `fn` until `test` returns `true`. Calls `callback` when
	     * stopped, or an error occurs. `callback` will be passed an error and any
	     * arguments passed to the final `fn`'s callback.
	     *
	     * The inverse of [whilst]{@link module:ControlFlow.whilst}.
	     *
	     * @name until
	     * @static
	     * @memberOf module:ControlFlow
	     * @method
	     * @see [async.whilst]{@link module:ControlFlow.whilst}
	     * @category Control Flow
	     * @param {Function} test - synchronous truth test to perform before each
	     * execution of `fn`. Invoked with ().
	     * @param {Function} fn - A function which is called each time `test` fails.
	     * The function is passed a `callback(err)`, which must be called once it has
	     * completed with an optional `err` argument. Invoked with (callback).
	     * @param {Function} [callback] - A callback which is called after the test
	     * function has passed and repeated execution of `fn` has stopped. `callback`
	     * will be passed an error and any arguments passed to the final `fn`'s
	     * callback. Invoked with (err, [results]);
	     */
	    function until(test, fn, callback) {
	        whilst(function () {
	            return !test.apply(this, arguments);
	        }, fn, callback);
	    }

	    /**
	     * Runs the `tasks` array of functions in series, each passing their results to
	     * the next in the array. However, if any of the `tasks` pass an error to their
	     * own callback, the next function is not executed, and the main `callback` is
	     * immediately called with the error.
	     *
	     * @name waterfall
	     * @static
	     * @memberOf module:ControlFlow
	     * @method
	     * @category Control Flow
	     * @param {Array} tasks - An array of functions to run, each function is passed
	     * a `callback(err, result1, result2, ...)` it must call on completion. The
	     * first argument is an error (which can be `null`) and any further arguments
	     * will be passed as arguments in order to the next task.
	     * @param {Function} [callback] - An optional callback to run once all the
	     * functions have completed. This will be passed the results of the last task's
	     * callback. Invoked with (err, [results]).
	     * @returns undefined
	     * @example
	     *
	     * async.waterfall([
	     *     function(callback) {
	     *         callback(null, 'one', 'two');
	     *     },
	     *     function(arg1, arg2, callback) {
	     *         // arg1 now equals 'one' and arg2 now equals 'two'
	     *         callback(null, 'three');
	     *     },
	     *     function(arg1, callback) {
	     *         // arg1 now equals 'three'
	     *         callback(null, 'done');
	     *     }
	     * ], function (err, result) {
	     *     // result now equals 'done'
	     * });
	     *
	     * // Or, with named functions:
	     * async.waterfall([
	     *     myFirstFunction,
	     *     mySecondFunction,
	     *     myLastFunction,
	     * ], function (err, result) {
	     *     // result now equals 'done'
	     * });
	     * function myFirstFunction(callback) {
	     *     callback(null, 'one', 'two');
	     * }
	     * function mySecondFunction(arg1, arg2, callback) {
	     *     // arg1 now equals 'one' and arg2 now equals 'two'
	     *     callback(null, 'three');
	     * }
	     * function myLastFunction(arg1, callback) {
	     *     // arg1 now equals 'three'
	     *     callback(null, 'done');
	     * }
	     */
	    function waterfall (tasks, callback) {
	        callback = once(callback || noop);
	        if (!isArray(tasks)) return callback(new Error('First argument to waterfall must be an array of functions'));
	        if (!tasks.length) return callback();
	        var taskIndex = 0;

	        function nextTask(args) {
	            if (taskIndex === tasks.length) {
	                return callback.apply(null, [null].concat(args));
	            }

	            var taskCallback = onlyOnce(rest(function (err, args) {
	                if (err) {
	                    return callback.apply(null, [err].concat(args));
	                }
	                nextTask(args);
	            }));

	            args.push(taskCallback);

	            var task = tasks[taskIndex++];
	            task.apply(null, args);
	        }

	        nextTask([]);
	    }

	    var index = {
	      applyEach: applyEach,
	      applyEachSeries: applyEachSeries,
	      apply: apply$1,
	      asyncify: asyncify,
	      auto: auto,
	      autoInject: autoInject,
	      cargo: cargo,
	      compose: compose,
	      concat: concat,
	      concatSeries: concatSeries,
	      constant: constant,
	      detect: detect,
	      detectLimit: detectLimit,
	      detectSeries: detectSeries,
	      dir: dir,
	      doDuring: doDuring,
	      doUntil: doUntil,
	      doWhilst: doWhilst,
	      during: during,
	      each: eachLimit,
	      eachLimit: eachLimit$1,
	      eachOf: eachOf,
	      eachOfLimit: eachOfLimit,
	      eachOfSeries: eachOfSeries,
	      eachSeries: eachSeries,
	      ensureAsync: ensureAsync,
	      every: every,
	      everyLimit: everyLimit,
	      everySeries: everySeries,
	      filter: filter,
	      filterLimit: filterLimit,
	      filterSeries: filterSeries,
	      forever: forever,
	      log: log,
	      map: map,
	      mapLimit: mapLimit,
	      mapSeries: mapSeries,
	      mapValues: mapValues,
	      mapValuesLimit: mapValuesLimit,
	      mapValuesSeries: mapValuesSeries,
	      memoize: memoize,
	      nextTick: nextTick,
	      parallel: parallelLimit,
	      parallelLimit: parallelLimit$1,
	      priorityQueue: priorityQueue,
	      queue: queue$1,
	      race: race,
	      reduce: reduce,
	      reduceRight: reduceRight,
	      reflect: reflect,
	      reflectAll: reflectAll,
	      reject: reject,
	      rejectLimit: rejectLimit,
	      rejectSeries: rejectSeries,
	      retry: retry,
	      retryable: retryable,
	      seq: seq,
	      series: series,
	      setImmediate: setImmediate$1,
	      some: some,
	      someLimit: someLimit,
	      someSeries: someSeries,
	      sortBy: sortBy,
	      timeout: timeout,
	      times: times,
	      timesLimit: timeLimit,
	      timesSeries: timesSeries,
	      transform: transform,
	      unmemoize: unmemoize,
	      until: until,
	      waterfall: waterfall,
	      whilst: whilst,

	      // aliases
	      all: every,
	      any: some,
	      forEach: eachLimit,
	      forEachSeries: eachSeries,
	      forEachLimit: eachLimit$1,
	      forEachOf: eachOf,
	      forEachOfSeries: eachOfSeries,
	      forEachOfLimit: eachOfLimit,
	      inject: reduce,
	      foldl: reduce,
	      foldr: reduceRight,
	      select: filter,
	      selectLimit: filterLimit,
	      selectSeries: filterSeries,
	      wrapSync: asyncify
	    };

	    exports['default'] = index;
	    exports.applyEach = applyEach;
	    exports.applyEachSeries = applyEachSeries;
	    exports.apply = apply$1;
	    exports.asyncify = asyncify;
	    exports.auto = auto;
	    exports.autoInject = autoInject;
	    exports.cargo = cargo;
	    exports.compose = compose;
	    exports.concat = concat;
	    exports.concatSeries = concatSeries;
	    exports.constant = constant;
	    exports.detect = detect;
	    exports.detectLimit = detectLimit;
	    exports.detectSeries = detectSeries;
	    exports.dir = dir;
	    exports.doDuring = doDuring;
	    exports.doUntil = doUntil;
	    exports.doWhilst = doWhilst;
	    exports.during = during;
	    exports.each = eachLimit;
	    exports.eachLimit = eachLimit$1;
	    exports.eachOf = eachOf;
	    exports.eachOfLimit = eachOfLimit;
	    exports.eachOfSeries = eachOfSeries;
	    exports.eachSeries = eachSeries;
	    exports.ensureAsync = ensureAsync;
	    exports.every = every;
	    exports.everyLimit = everyLimit;
	    exports.everySeries = everySeries;
	    exports.filter = filter;
	    exports.filterLimit = filterLimit;
	    exports.filterSeries = filterSeries;
	    exports.forever = forever;
	    exports.log = log;
	    exports.map = map;
	    exports.mapLimit = mapLimit;
	    exports.mapSeries = mapSeries;
	    exports.mapValues = mapValues;
	    exports.mapValuesLimit = mapValuesLimit;
	    exports.mapValuesSeries = mapValuesSeries;
	    exports.memoize = memoize;
	    exports.nextTick = nextTick;
	    exports.parallel = parallelLimit;
	    exports.parallelLimit = parallelLimit$1;
	    exports.priorityQueue = priorityQueue;
	    exports.queue = queue$1;
	    exports.race = race;
	    exports.reduce = reduce;
	    exports.reduceRight = reduceRight;
	    exports.reflect = reflect;
	    exports.reflectAll = reflectAll;
	    exports.reject = reject;
	    exports.rejectLimit = rejectLimit;
	    exports.rejectSeries = rejectSeries;
	    exports.retry = retry;
	    exports.retryable = retryable;
	    exports.seq = seq;
	    exports.series = series;
	    exports.setImmediate = setImmediate$1;
	    exports.some = some;
	    exports.someLimit = someLimit;
	    exports.someSeries = someSeries;
	    exports.sortBy = sortBy;
	    exports.timeout = timeout;
	    exports.times = times;
	    exports.timesLimit = timeLimit;
	    exports.timesSeries = timesSeries;
	    exports.transform = transform;
	    exports.unmemoize = unmemoize;
	    exports.until = until;
	    exports.waterfall = waterfall;
	    exports.whilst = whilst;
	    exports.all = every;
	    exports.allLimit = everyLimit;
	    exports.allSeries = everySeries;
	    exports.any = some;
	    exports.anyLimit = someLimit;
	    exports.anySeries = someSeries;
	    exports.find = detect;
	    exports.findLimit = detectLimit;
	    exports.findSeries = detectSeries;
	    exports.forEach = eachLimit;
	    exports.forEachSeries = eachSeries;
	    exports.forEachLimit = eachLimit$1;
	    exports.forEachOf = eachOf;
	    exports.forEachOfSeries = eachOfSeries;
	    exports.forEachOfLimit = eachOfLimit;
	    exports.inject = reduce;
	    exports.foldl = reduce;
	    exports.foldr = reduceRight;
	    exports.select = filter;
	    exports.selectLimit = filterLimit;
	    exports.selectSeries = filterSeries;
	    exports.wrapSync = asyncify;

	}));
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(313).setImmediate, __webpack_require__(295)))

/***/ },
/* 313 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(setImmediate, clearImmediate) {var nextTick = __webpack_require__(295).nextTick;
	var apply = Function.prototype.apply;
	var slice = Array.prototype.slice;
	var immediateIds = {};
	var nextImmediateId = 0;

	// DOM APIs, for completeness

	exports.setTimeout = function() {
	  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
	};
	exports.setInterval = function() {
	  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
	};
	exports.clearTimeout =
	exports.clearInterval = function(timeout) { timeout.close(); };

	function Timeout(id, clearFn) {
	  this._id = id;
	  this._clearFn = clearFn;
	}
	Timeout.prototype.unref = Timeout.prototype.ref = function() {};
	Timeout.prototype.close = function() {
	  this._clearFn.call(window, this._id);
	};

	// Does not start the time, just sets up the members needed.
	exports.enroll = function(item, msecs) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = msecs;
	};

	exports.unenroll = function(item) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = -1;
	};

	exports._unrefActive = exports.active = function(item) {
	  clearTimeout(item._idleTimeoutId);

	  var msecs = item._idleTimeout;
	  if (msecs >= 0) {
	    item._idleTimeoutId = setTimeout(function onTimeout() {
	      if (item._onTimeout)
	        item._onTimeout();
	    }, msecs);
	  }
	};

	// That's not how node.js implements it but the exposed api is the same.
	exports.setImmediate = typeof setImmediate === "function" ? setImmediate : function(fn) {
	  var id = nextImmediateId++;
	  var args = arguments.length < 2 ? false : slice.call(arguments, 1);

	  immediateIds[id] = true;

	  nextTick(function onNextTick() {
	    if (immediateIds[id]) {
	      // fn.call() is faster so we optimize for the common use-case
	      // @see http://jsperf.com/call-apply-segu
	      if (args) {
	        fn.apply(null, args);
	      } else {
	        fn.call(null);
	      }
	      // Prevent ids from leaking
	      exports.clearImmediate(id);
	    }
	  });

	  return id;
	};

	exports.clearImmediate = typeof clearImmediate === "function" ? clearImmediate : function(id) {
	  delete immediateIds[id];
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(313).setImmediate, __webpack_require__(313).clearImmediate))

/***/ },
/* 314 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * Copyright 2014 Takuya Asano
	 * Copyright 2010-2014 Atilika Inc. and contributors
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *     http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */

	"use strict";

	var doublearray = __webpack_require__(315);
	var TokenInfoDictionary = __webpack_require__(316);
	var ConnectionCosts = __webpack_require__(318);
	var UnknownDictionary = __webpack_require__(319);

	/**
	 * Dictionaries container for Tokenizer
	 * @param {DoubleArray} trie
	 * @param {TokenInfoDictionary} token_info_dictionary
	 * @param {ConnectionCosts} connection_costs
	 * @param {UnknownDictionary} unknown_dictionary
	 * @constructor
	 */
	function DynamicDictionaries(trie, token_info_dictionary, connection_costs, unknown_dictionary) {
	    if (trie != null) {
	        this.trie = trie;
	    } else {
	        this.trie = doublearray.builder(0).build([
	            {k: "", v: 1}
	        ]);
	    }
	    if (token_info_dictionary != null) {
	        this.token_info_dictionary = token_info_dictionary;
	    } else {
	        this.token_info_dictionary = new TokenInfoDictionary();
	    }
	    if (connection_costs != null) {
	        this.connection_costs = connection_costs;
	    } else {
	        // backward_size * backward_size
	        this.connection_costs = new ConnectionCosts(0, 0);
	    }
	    if (unknown_dictionary != null) {
	        this.unknown_dictionary = unknown_dictionary;
	    } else {
	        this.unknown_dictionary = new UnknownDictionary();
	    }
	}

	// from base.dat & check.dat
	DynamicDictionaries.prototype.loadTrie = function (base_buffer, check_buffer) {
	    this.trie = doublearray.load(base_buffer, check_buffer);
	    return this;
	};

	DynamicDictionaries.prototype.loadTokenInfoDictionaries = function (token_info_buffer, pos_buffer, target_map_buffer) {
	    this.token_info_dictionary.loadDictionary(token_info_buffer);
	    this.token_info_dictionary.loadPosVector(pos_buffer);
	    this.token_info_dictionary.loadTargetMap(target_map_buffer);
	    return this;
	};

	DynamicDictionaries.prototype.loadConnectionCosts = function (cc_buffer) {
	    this.connection_costs.loadConnectionCosts(cc_buffer);
	    return this;
	};

	DynamicDictionaries.prototype.loadUnknownDictionaries = function (unk_buffer, unk_pos_buffer, unk_map_buffer, cat_map_buffer, compat_cat_map_buffer, invoke_def_buffer) {
	    this.unknown_dictionary.loadUnknownDictionaries(unk_buffer, unk_pos_buffer, unk_map_buffer, cat_map_buffer, compat_cat_map_buffer, invoke_def_buffer);
	    return this;
	};

	module.exports = DynamicDictionaries;


/***/ },
/* 315 */
/***/ function(module, exports, __webpack_require__) {

	// Copyright (c) 2014 Takuya Asano All Rights Reserved.

	(function () {

	    "use strict";

	    var TERM_CHAR = "\u0000", // terminal character
	        TERM_CODE = 0,        // terminal character code
	        ROOT_ID = 0,          // index of root node
	        NOT_FOUND = -1,       // traverse() returns if no nodes found
	        BASE_SIGNED = true,
	        CHECK_SIGNED = true,
	        BASE_BYTES = 4,
	        CHECK_BYTES = 4,
	        MEMORY_EXPAND_RATIO = 2;


	    var newBC = function (initial_size) {

	        if (initial_size == null) {
	            initial_size = 1024;
	        }

	        var initBase = function (_base, start, end) {  // 'end' index does not include
	            for (var i = start; i < end; i++) {
	                _base[i] = - i + 1;  // inversed previous empty node index
	            }
	            if (0 < check.array[check.array.length - 1]) {
	                var last_used_id = check.array.length - 2;
	                while (0 < check.array[last_used_id]) {
	                    last_used_id--;
	                }
	                _base[start] = - last_used_id;
	            }
	        };

	        var initCheck = function (_check, start, end) {
	            for (var i = start; i < end; i++) {
	                _check[i] = - i - 1;  // inversed next empty node index
	            }
	        };

	        var realloc = function (min_size) {
	            // expand arrays size by given ratio
	            var new_size = min_size * MEMORY_EXPAND_RATIO;
	            // console.log('re-allocate memory to ' + new_size);

	            var base_new_array = newArrayBuffer(base.signed, base.bytes, new_size);
	            initBase(base_new_array, base.array.length, new_size);  // init BASE in new range
	            base_new_array.set(base.array);
	            base.array = null;  // explicit GC
	            base.array = base_new_array;

	            var check_new_array = newArrayBuffer(check.signed, check.bytes, new_size);
	            initCheck(check_new_array, check.array.length, new_size);  // init CHECK in new range
	            check_new_array.set(check.array);
	            check.array = null;  // explicit GC
	            check.array = check_new_array;
	        };

	        var first_unused_node = ROOT_ID + 1;

	        var base = {
	            signed: BASE_SIGNED,
	            bytes: BASE_BYTES,
	            array: newArrayBuffer(BASE_SIGNED, BASE_BYTES, initial_size)
	        };

	        var check = {
	            signed: CHECK_SIGNED,
	            bytes: CHECK_BYTES,
	            array: newArrayBuffer(CHECK_SIGNED, CHECK_BYTES, initial_size)
	        };

	        // init root node
	        base.array[ROOT_ID] = 1;
	        check.array[ROOT_ID] = ROOT_ID;

	        // init BASE
	        initBase(base.array, ROOT_ID + 1, base.array.length);

	        // init CHECK
	        initCheck(check.array, ROOT_ID + 1, check.array.length);

	        return {
	            getBaseBuffer: function () {
	                return base.array;
	            },
	            getCheckBuffer: function () {
	                return check.array;
	            },
	            loadBaseBuffer: function (base_buffer) {
	                base.array = base_buffer;
	                return this;
	            },
	            loadCheckBuffer: function (check_buffer) {
	                check.array = check_buffer;
	                return this;
	            },
	            size: function () {
	                return Math.max(base.array.length, check.array.length);
	            },
	            getBase: function (index) {
	                if (base.array.length - 1 < index) {
	                    return - index + 1;
	                    // realloc(index);
	                }
	                // if (!Number.isFinite(base.array[index])) {
	                //     console.log('getBase:' + index);
	                //     throw 'getBase' + index;
	                // }
	                return base.array[index];
	            },
	            getCheck: function (index) {
	                if (check.array.length - 1 < index) {
	                    return - index - 1;
	                    // realloc(index);
	                }
	                // if (!Number.isFinite(check.array[index])) {
	                //     console.log('getCheck:' + index);
	                //     throw 'getCheck' + index;
	                // }
	                return check.array[index];
	            },
	            setBase: function (index, base_value) {
	                if (base.array.length - 1 < index) {
	                    realloc(index);
	                }
	                base.array[index] = base_value;
	            },
	            setCheck: function (index, check_value) {
	                if (check.array.length - 1 < index) {
	                    realloc(index);
	                }
	                check.array[index] = check_value;
	            },
	            setFirstUnusedNode: function (index) {
	                // if (!Number.isFinite(index)) {
	                //     throw 'assertion error: setFirstUnusedNode ' + index + ' is not finite number';
	                // }
	                first_unused_node = index;
	            },
	            getFirstUnusedNode: function () {
	                // if (!Number.isFinite(first_unused_node)) {
	                //     throw 'assertion error: getFirstUnusedNode ' + first_unused_node + ' is not finite number';
	                // }
	                return first_unused_node;
	            },
	            shrink: function () {
	                var last_index = this.size() - 1;
	                while (true) {
	                    if (0 <= check.array[last_index]) {
	                        break;
	                    }
	                    last_index--;
	                }
	                base.array = base.array.subarray(0, last_index + 2);   // keep last unused node
	                check.array = check.array.subarray(0, last_index + 2); // keep last unused node
	            },
	            calc: function () {
	                var unused_count = 0;
	                var size = check.array.length;
	                for (var i = 0; i < size; i++) {
	                    if (check.array[i] < 0) {
	                        unused_count++;
	                    }
	                }
	                return {
	                    all: size,
	                    unused: unused_count,
	                    efficiency: (size - unused_count) / size
	                };
	            },
	            dump: function () {
	                // for debug
	                var dump_base = "";
	                var dump_check = "";

	                var i;
	                for (i = 0; i < base.array.length; i++) {
	                    dump_base = dump_base + " " + this.getBase(i);
	                }
	                for (i = 0; i < check.array.length; i++) {
	                    dump_check = dump_check + " " + this.getCheck(i);
	                }

	                console.log("base:" + dump_base);
	                console.log("chck:" + dump_check);

	                return "base:" + dump_base + " chck:" + dump_check;
	            }
	        };
	    };


	    /**
	     * Factory method of double array
	     */
	    function DoubleArrayBuilder(initial_size) {
	        this.bc = newBC(initial_size);  // BASE and CHECK
	        this.keys = [];
	    }


	    /**
	     * Append a key to initialize set
	     * (This method should be called by dictionary ordered key)
	     *
	     * @param {String} key
	     * @param {Number} value Integer value from 0 to max signed integer number - 1
	     */
	    DoubleArrayBuilder.prototype.append = function (key, record) {
	        this.keys.push({ k: key, v: record });
	        return this;
	    };

	    /**
	     * Build double array for given keys
	     *
	     * @param {Array} keys Array of keys. A key is a Object which has properties 'k', 'v'.
	     * 'k' is a key string, 'v' is a record assigned to that key.
	     * @return {DoubleArray} Compiled double array
	     */
	    DoubleArrayBuilder.prototype.build = function (keys, sorted) {

	        if (keys == null) {
	            keys = this.keys;
	        }

	        if (keys == null) {
	            return new DoubleArray(this.bc);
	        }

	        if (sorted == null) {
	            sorted = false;
	        }

	        // Convert key string to ArrayBuffer
	        var buff_keys =
	            keys.map(function (k) {
	                return {
	                    k: stringToUtf8Bytes(k.k + TERM_CHAR),
	                    v: k.v
	                };
	            });

	        // Sort keys by byte order
	        if (sorted) {
	            this.keys = buff_keys;
	        } else {
	            this.keys =
	                buff_keys.sort(function (k1, k2) {
	                    var b1 = k1.k;
	                    var b2 = k2.k;
	                    var min_length = Math.min(b1.length, b2.length);
	                    for (var pos = 0; pos < min_length; pos++) {
	                        if (b1[pos] === b2[pos]) {
	                            continue;
	                        }
	                        return b1[pos] - b2[pos];
	                    }
	                    return b1.length - b2.length;
	                });
	        }

	        buff_keys = null;  // explicit GC

	        this._build(ROOT_ID, 0, 0, this.keys.length);
	        return new DoubleArray(this.bc);
	    };

	    /**
	     * Append nodes to BASE and CHECK array recursively
	     */
	    DoubleArrayBuilder.prototype._build = function (parent_index, position, start, length) {

	        var children_info = this.getChildrenInfo(position, start, length);
	        var _base = this.findAllocatableBase(children_info);

	        this.setBC(parent_index, children_info, _base);

	        for (var i = 0; i < children_info.length; i = i + 3) {
	            var child_code = children_info[i];
	            if (child_code === TERM_CODE) {
	                continue;
	            }
	            var child_start = children_info[i + 1];
	            var child_len = children_info[i + 2];
	            var child_index = _base + child_code;
	            this._build(child_index, position + 1, child_start, child_len);
	        }
	    };

	    DoubleArrayBuilder.prototype.getChildrenInfo = function (position, start, length) {
	        var current_char = this.keys[start].k[position];
	        var i = 0;
	        var children_info = new Int32Array(length * 3);

	        children_info[i++] = current_char;  // char (current)
	        children_info[i++] = start;         // start index (current)

	        var next_pos = start;
	        var start_pos = start;
	        for (; next_pos < start + length; next_pos++) {
	            var next_char = this.keys[next_pos].k[position];
	            if (current_char !== next_char) {
	                children_info[i++] = next_pos - start_pos;  // length (current)

	                children_info[i++] = next_char;             // char (next)
	                children_info[i++] = next_pos;              // start index (next)
	                current_char = next_char;
	                start_pos = next_pos;
	            }
	        }
	        children_info[i++] = next_pos - start_pos;
	        children_info = children_info.subarray(0, i);

	        return children_info;
	    };

	    DoubleArrayBuilder.prototype.setBC = function (parent_id, children_info, _base) {

	        var bc = this.bc;

	        bc.setBase(parent_id, _base);  // Update BASE of parent node

	        var i;
	        for (i = 0; i < children_info.length; i = i + 3) {
	            var code = children_info[i];
	            var child_id = _base + code;

	            // Update linked list of unused nodes

	            // Assertion
	            // if (child_id < 0) {
	            //     throw 'assertion error: child_id is negative'
	            // }

	            var prev_unused_id = - bc.getBase(child_id);
	            var next_unused_id = - bc.getCheck(child_id);
	            // if (prev_unused_id < 0) {
	            //     throw 'assertion error: setBC'
	            // }
	            // if (next_unused_id < 0) {
	            //     throw 'assertion error: setBC'
	            // }
	            if (child_id !== bc.getFirstUnusedNode()) {
	                bc.setCheck(prev_unused_id, - next_unused_id);
	            } else {
	                // Update first_unused_node
	                bc.setFirstUnusedNode(next_unused_id);
	            }
	            bc.setBase(next_unused_id, - prev_unused_id);

	            var check = parent_id;         // CHECK is parent node index
	            bc.setCheck(child_id, check);  // Update CHECK of child node

	            // Update record
	            if (code === TERM_CODE) {
	                var start_pos = children_info[i + 1];
	                // var len = children_info[i + 2];
	                // if (len != 1) {
	                //     throw 'assertion error: there are multiple terminal nodes. len:' + len;
	                // }
	                var value = this.keys[start_pos].v;

	                if (value == null) {
	                    value = 0;
	                }

	                var base = - value - 1;       // BASE is inverted record value
	                bc.setBase(child_id, base);  // Update BASE of child(leaf) node
	            }
	        }
	    };


	    /**
	     * Find BASE value that all children are allocatable in double array's region
	     */
	    DoubleArrayBuilder.prototype.findAllocatableBase = function (children_info) {

	        var bc = this.bc;

	        // Assertion: keys are sorted by byte order
	        // var c = -1;
	        // for (var i = 0; i < children_info.length; i = i + 3) {
	        //     if (children_info[i] < c) {
	        //         throw 'assertion error: not sort key'
	        //     }
	        //     c = children_info[i];
	        // }

	        // iterate linked list of unused nodes
	        var _base;
	        var curr = bc.getFirstUnusedNode();  // current index
	        // if (curr < 0) {
	        //     throw 'assertion error: getFirstUnusedNode returns negative value'
	        // }

	        while (true) {
	            _base = curr - children_info[0];

	            if (_base < 0) {
	                curr = - bc.getCheck(curr);  // next

	                // if (curr < 0) {
	                //     throw 'assertion error: getCheck returns negative value'
	                // }

	                continue;
	            }

	            var empty_area_found = true;
	            for (var i = 0; i < children_info.length; i = i + 3) {
	                var code = children_info[i];
	                var candidate_id = _base + code;

	                if (!this.isUnusedNode(candidate_id)) {
	                    // candidate_id is used node
	                    // next
	                    curr = - bc.getCheck(curr);
	                    // if (curr < 0) {
	                    //     throw 'assertion error: getCheck returns negative value'
	                    // }

	                    empty_area_found = false;
	                    break;
	                }
	            }
	            if (empty_area_found) {
	                // Area is free
	                return _base;
	            }
	        }
	    };

	    /**
	     * Check this double array index is unused or not
	     */
	    DoubleArrayBuilder.prototype.isUnusedNode = function (index) {
	        var bc = this.bc;
	        var check = bc.getCheck(index);

	        // if (index < 0) {
	        //     throw 'assertion error: isUnusedNode index:' + index;
	        // }

	        if (index === ROOT_ID) {
	            // root node
	            return false;
	        }
	        if (check < 0) {
	            // unused
	            return true;
	        }

	        // used node (incl. leaf)
	        return false;
	    };


	    /**
	     * Factory method of double array
	     */
	    function DoubleArray(bc) {
	        this.bc = bc;       // BASE and CHECK
	        this.bc.shrink();
	    }


	    /**
	     * Look up a given key in this trie
	     *
	     * @param {String} key
	     * @return {Boolean} True if this trie contains a given key
	     */
	    DoubleArray.prototype.contain = function (key) {

	        var bc = this.bc;

	        key += TERM_CHAR;
	        var buffer = stringToUtf8Bytes(key);

	        var parent = ROOT_ID;
	        var child = NOT_FOUND;

	        for (var i = 0; i < buffer.length; i++) {
	            var code = buffer[i];

	            child = this.traverse(parent, code);
	            if (child === NOT_FOUND) {
	                return false;
	            }

	            if (bc.getBase(child) <= 0) {
	                // leaf node
	                return true;
	            } else {
	                // not leaf
	                parent = child;
	                continue;
	            }
	        }
	        return false;
	    };


	    /**
	     * Look up a given key in this trie
	     *
	     * @param {String} key
	     * @return {Number} Record value assgned to this key, -1 if this key does not contain
	     */
	    DoubleArray.prototype.lookup = function (key) {

	        key += TERM_CHAR;
	        var buffer = stringToUtf8Bytes(key);

	        var parent = ROOT_ID;
	        var child = NOT_FOUND;

	        for (var i = 0; i < buffer.length; i++) {
	            var code = buffer[i];
	            child = this.traverse(parent, code);
	            if (child === NOT_FOUND) {
	                return NOT_FOUND;
	            }
	            parent = child;
	        }

	        var base = this.bc.getBase(child);
	        if (base <= 0) {
	            // leaf node
	            return - base - 1;
	        } else {
	            // not leaf
	            return NOT_FOUND;
	        }
	    };


	    /**
	     * Common prefix search
	     *
	     * @param {String} key
	     * @return {Array} Each result object has 'k' and 'v' (key and record,
	     * respectively) properties assigned to matched string
	     */
	    DoubleArray.prototype.commonPrefixSearch = function (key) {

	        var buffer = stringToUtf8Bytes(key);

	        var parent = ROOT_ID;
	        var child = NOT_FOUND;

	        var result = [];

	        for (var i = 0; i < buffer.length; i++) {
	            var code = buffer[i];

	            child = this.traverse(parent, code);

	            if (child !== NOT_FOUND) {
	                parent = child;

	                // look forward by terminal character code to check this node is a leaf or not
	                var grand_child = this.traverse(child, TERM_CODE);

	                if (grand_child !== NOT_FOUND) {
	                    var base = this.bc.getBase(grand_child);

	                    var r = {};

	                    if (base <= 0) {
	                        // If child is a leaf node, add record to result
	                        r.v = - base - 1;
	                    }

	                    // If child is a leaf node, add word to result
	                    r.k = utf8BytesToString(arrayCopy(buffer, 0, i + 1));

	                    result.push(r);
	                }
	                continue;
	            } else {
	                break;
	            }
	        }

	        return result;
	    };

	    DoubleArray.prototype.traverse = function (parent, code) {
	        var child = this.bc.getBase(parent) + code;
	        if (this.bc.getCheck(child) === parent) {
	            return child;
	        } else {
	            return NOT_FOUND;
	        }
	    };

	    DoubleArray.prototype.size = function () {
	        return this.bc.size();
	    };

	    DoubleArray.prototype.calc = function () {
	        return this.bc.calc();
	    };

	    DoubleArray.prototype.dump = function () {
	        return this.bc.dump();
	    };


	    // Array utility functions

	    var newArrayBuffer = function (signed, bytes, size) {
	        if (signed) {
	            switch(bytes) {
	                case 1:
	                return new Int8Array(size);
	                case 2:
	                return new Int16Array(size);
	                case 4:
	                return new Int32Array(size);
	                default:
	                throw new RangeError("Invalid newArray parameter element_bytes:" + bytes);
	            }
	        } else {
	            switch(bytes) {
	                case 1:
	                return new Uint8Array(size);
	                case 2:
	                return new Uint16Array(size);
	                case 4:
	                return new Uint32Array(size);
	                default:
	                throw new RangeError("Invalid newArray parameter element_bytes:" + bytes);
	            }
	        }
	    };

	    var arrayCopy = function (src, src_offset, length) {
	        var buffer = new ArrayBuffer(length);
	        var dstU8 = new Uint8Array(buffer, 0, length);
	        var srcU8 = src.subarray(src_offset, length);
	        dstU8.set(srcU8);
	        return dstU8;
	    };


	    /**
	     * Convert String (UTF-16) to UTF-8 ArrayBuffer
	     *
	     * @param {String} str UTF-16 string to convert
	     * @return {Uint8Array} Byte sequence encoded by UTF-8
	     */
	    var stringToUtf8Bytes = function (str) {

	        // Max size of 1 character is 4 bytes
	        var bytes = new Uint8Array(new ArrayBuffer(str.length * 4));

	        var i = 0, j = 0;

	        while (i < str.length) {
	            var unicode_code;

	            var utf16_code = str.charCodeAt(i++);
	            if (utf16_code >= 0xD800 && utf16_code <= 0xDBFF) {
	                // surrogate pair
	                var upper = utf16_code;           // high surrogate
	                var lower = str.charCodeAt(i++);  // low surrogate

	                if (lower >= 0xDC00 && lower <= 0xDFFF) {
	                    unicode_code =
	                        (upper - 0xD800) * (1 << 10) + (1 << 16) +
	                        (lower - 0xDC00);
	                } else {
	                    // malformed surrogate pair
	                    return null;
	                }
	            } else {
	                // not surrogate code
	                unicode_code = utf16_code;
	            }

	            if (unicode_code < 0x80) {
	                // 1-byte
	                bytes[j++] = unicode_code;

	            } else if (unicode_code < (1 << 11)) {
	                // 2-byte
	                bytes[j++] = (unicode_code >>> 6) | 0xC0;
	                bytes[j++] = (unicode_code & 0x3F) | 0x80;

	            } else if (unicode_code < (1 << 16)) {
	                // 3-byte
	                bytes[j++] = (unicode_code >>> 12) | 0xE0;
	                bytes[j++] = ((unicode_code >> 6) & 0x3f) | 0x80;
	                bytes[j++] = (unicode_code & 0x3F) | 0x80;

	            } else if (unicode_code < (1 << 21)) {
	                // 4-byte
	                bytes[j++] = (unicode_code >>> 18) | 0xF0;
	                bytes[j++] = ((unicode_code >> 12) & 0x3F) | 0x80;
	                bytes[j++] = ((unicode_code >> 6) & 0x3F) | 0x80;
	                bytes[j++] = (unicode_code & 0x3F) | 0x80;

	            } else {
	                // malformed UCS4 code
	            }
	        }

	        return bytes.subarray(0, j);
	    };


	    /**
	     * Convert UTF-8 ArrayBuffer to String (UTF-16)
	     *
	     * @param {Uint8Array} bytes UTF-8 byte sequence to convert
	     * @return {String} String encoded by UTF-16
	     */
	    var utf8BytesToString = function (bytes) {

	        var str = "";
	        var code, b1, b2, b3, b4, upper, lower;
	        var i = 0;

	        while (i < bytes.length) {

	            b1 = bytes[i++];

	            if (b1 < 0x80) {
	                // 1 byte
	                code = b1;
	            } else if ((b1 >> 5) === 0x06) {
	                // 2 bytes
	                b2 = bytes[i++];
	                code = ((b1 & 0x1f) << 6) | (b2 & 0x3f);
	            } else if ((b1 >> 4) === 0x0e) {
	                // 3 bytes
	                b2 = bytes[i++];
	                b3 = bytes[i++];
	                code = ((b1 & 0x0f) << 12) | ((b2 & 0x3f) << 6) | (b3 & 0x3f);
	            } else {
	                // 4 bytes
	                b2 = bytes[i++];
	                b3 = bytes[i++];
	                b4 = bytes[i++];
	                code = ((b1 & 0x07) << 18) | ((b2 & 0x3f) << 12) | ((b3 & 0x3f) << 6) | (b4 & 0x3f);
	            }

	            if (code < 0x10000) {
		            str += String.fromCharCode(code);
	            } else {
		            // surrogate pair
		            code -= 0x10000;
		            upper = (0xD800 | (code >> 10));
		            lower = (0xDC00 | (code & 0x3FF));
		            str += String.fromCharCode(upper, lower);
	            }
	        }

	        return str;
	    };


	    // public methods
	    var doublearray = {
	        builder: function (initial_size) {
	            return new DoubleArrayBuilder(initial_size);
	        },
	        load: function (base_buffer, check_buffer) {
	            var bc = newBC(0);
	            bc.loadBaseBuffer(base_buffer);
	            bc.loadCheckBuffer(check_buffer);
	            return new DoubleArray(bc);
	        }
	    };

	    if (false) {
		    // In browser
	        window.doublearray = doublearray;
	    } else {
		    // In node
	        module.exports = doublearray;
	    }

	})();


/***/ },
/* 316 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * Copyright 2014 Takuya Asano
	 * Copyright 2010-2014 Atilika Inc. and contributors
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *     http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */

	"use strict";

	var ByteBuffer = __webpack_require__(317);

	/**
	 * TokenInfoDictionary
	 * @constructor
	 */
	function TokenInfoDictionary() {
	    this.dictionary = new ByteBuffer(10 * 1024 * 1024);
	    this.target_map = {};  // trie_id (of surface form) -> token_info_id (of token)
	    this.pos_buffer = new ByteBuffer(10 * 1024 * 1024);
	}

	// left_id right_id word_cost ...
	// ^ this position is token_info_id
	TokenInfoDictionary.prototype.buildDictionary = function (entries) {
	    var dictionary_entries = {};  // using as hashmap, string -> string (word_id -> surface_form) to build dictionary

	    for (var i = 0; i < entries.length; i++) {
	        var entry = entries[i];

	        if (entry.length < 4) {
	            continue;
	        }

	        var surface_form = entry[0];
	        var left_id = entry[1];
	        var right_id = entry[2];
	        var word_cost = entry[3];
	        var feature = entry.slice(4).join(",");  // TODO Optimize

	        // Assertion
	        if (!isFinite(left_id) || !isFinite(right_id) || !isFinite(word_cost)) {
	            console.log(entry);
	        }

	        var token_info_id = this.put(left_id, right_id, word_cost, surface_form, feature);
	        dictionary_entries[token_info_id] = surface_form;
	    }

	    // Remove last unused area
	    this.dictionary.shrink();
	    this.pos_buffer.shrink();

	    return dictionary_entries;
	};

	TokenInfoDictionary.prototype.put = function (left_id, right_id, word_cost, surface_form, feature) {
	    var token_info_id = this.dictionary.position;
	    var pos_id = this.pos_buffer.position;

	    this.dictionary.putShort(left_id);
	    this.dictionary.putShort(right_id);
	    this.dictionary.putShort(word_cost);
	    this.dictionary.putInt(pos_id);
	    this.pos_buffer.putString(surface_form + "," + feature);

	    return token_info_id;
	};

	TokenInfoDictionary.prototype.addMapping = function (source, target) {
	    var mapping = this.target_map[source];
	    if (mapping == null) {
	        mapping = [];
	    }
	    mapping.push(target);

	    this.target_map[source] = mapping;
	};

	TokenInfoDictionary.prototype.targetMapToBuffer = function () {
	    var buffer = new ByteBuffer();
	    var map_keys_size = Object.keys(this.target_map).length;
	    buffer.putInt(map_keys_size);
	    for (var key in this.target_map) {
	        var values = this.target_map[key];  // Array
	        var map_values_size = values.length;
	        buffer.putInt(parseInt(key));
	        buffer.putInt(map_values_size);
	        for (var i = 0; i < values.length; i++) {
	            buffer.putInt(values[i]);
	        }
	    }
	    return buffer.shrink();  // Shrink-ed Typed Array
	};

	// from tid.dat
	TokenInfoDictionary.prototype.loadDictionary = function (array_buffer) {
	    this.dictionary = new ByteBuffer(array_buffer);
	    return this;
	};

	// from tid_pos.dat
	TokenInfoDictionary.prototype.loadPosVector = function (array_buffer) {
	    this.pos_buffer = new ByteBuffer(array_buffer);
	    return this;
	};

	// from tid_map.dat
	TokenInfoDictionary.prototype.loadTargetMap = function (array_buffer) {
	    var buffer = new ByteBuffer(array_buffer);
	    buffer.position = 0;
	    this.target_map = {};
	    buffer.readInt();  // map_keys_size
	    while (true) {
	        if (buffer.buffer.length < buffer.position + 1) {
	            break;
	        }
	        var key = buffer.readInt();
	        var map_values_size = buffer.readInt();
	        for (var i = 0; i < map_values_size; i++) {
	            var value = buffer.readInt();
	            this.addMapping(key, value);
	        }
	    }
	    return this;
	};

	/**
	 * Look up features in the dictionary
	 * @param {string} token_info_id_str Word ID to look up
	 * @returns {string} Features string concatenated by ","
	 */
	TokenInfoDictionary.prototype.getFeatures = function (token_info_id_str) {
	    var token_info_id = parseInt(token_info_id_str);
	    if (isNaN(token_info_id)) {
	        // TODO throw error
	        return "";
	    }
	    var pos_id = this.dictionary.getInt(token_info_id + 6);
	    return this.pos_buffer.getString(pos_id);
	};

	module.exports = TokenInfoDictionary;


/***/ },
/* 317 */
/***/ function(module, exports) {

	/*
	 * Copyright 2014 Takuya Asano
	 * Copyright 2010-2014 Atilika Inc. and contributors
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *     http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */

	"use strict";

	/**
	 * Convert String (UTF-16) to UTF-8 ArrayBuffer
	 *
	 * @param {String} str UTF-16 string to convert
	 * @return {Uint8Array} Byte sequence encoded by UTF-8
	 */
	var stringToUtf8Bytes = function (str) {

	    // Max size of 1 character is 4 bytes
	    var bytes = new Uint8Array(str.length * 4);

	    var i = 0, j = 0;

	    while (i < str.length) {
	        var unicode_code;

	        var utf16_code = str.charCodeAt(i++);
	        if (utf16_code >= 0xD800 && utf16_code <= 0xDBFF) {
	            // surrogate pair
	            var upper = utf16_code;           // high surrogate
	            var lower = str.charCodeAt(i++);  // low surrogate

	            if (lower >= 0xDC00 && lower <= 0xDFFF) {
	                unicode_code =
	                    (upper - 0xD800) * (1 << 10) + (1 << 16) +
	                    (lower - 0xDC00);
	            } else {
	                // malformed surrogate pair
	                return null;
	            }
	        } else {
	            // not surrogate code
	            unicode_code = utf16_code;
	        }

	        if (unicode_code < 0x80) {
	            // 1-byte
	            bytes[j++] = unicode_code;

	        } else if (unicode_code < (1 << 11)) {
	            // 2-byte
	            bytes[j++] = (unicode_code >>> 6) | 0xC0;
	            bytes[j++] = (unicode_code & 0x3F) | 0x80;

	        } else if (unicode_code < (1 << 16)) {
	            // 3-byte
	            bytes[j++] = (unicode_code >>> 12) | 0xE0;
	            bytes[j++] = ((unicode_code >> 6) & 0x3f) | 0x80;
	            bytes[j++] = (unicode_code & 0x3F) | 0x80;

	        } else if (unicode_code < (1 << 21)) {
	            // 4-byte
	            bytes[j++] = (unicode_code >>> 18) | 0xF0;
	            bytes[j++] = ((unicode_code >> 12) & 0x3F) | 0x80;
	            bytes[j++] = ((unicode_code >> 6) & 0x3F) | 0x80;
	            bytes[j++] = (unicode_code & 0x3F) | 0x80;

	        } else {
	            // malformed UCS4 code
	        }
	    }

	    return bytes.subarray(0, j);
	};

	/**
	 * Convert UTF-8 ArrayBuffer to String (UTF-16)
	 *
	 * @param {Array} bytes UTF-8 byte sequence to convert
	 * @return {String} String encoded by UTF-16
	 */
	var utf8BytesToString = function (bytes) {

	    var str = "";
	    var code, b1, b2, b3, b4, upper, lower;
	    var i = 0;

	    while (i < bytes.length) {

	        b1 = bytes[i++];

	        if (b1 < 0x80) {
	            // 1 byte
	            code = b1;
	        } else if ((b1 >> 5) === 0x06) {
	            // 2 bytes
	            b2 = bytes[i++];
	            code = ((b1 & 0x1f) << 6) | (b2 & 0x3f);
	        } else if ((b1 >> 4) === 0x0e) {
	            // 3 bytes
	            b2 = bytes[i++];
	            b3 = bytes[i++];
	            code = ((b1 & 0x0f) << 12) | ((b2 & 0x3f) << 6) | (b3 & 0x3f);
	        } else {
	            // 4 bytes
	            b2 = bytes[i++];
	            b3 = bytes[i++];
	            b4 = bytes[i++];
	            code = ((b1 & 0x07) << 18) | ((b2 & 0x3f) << 12) | ((b3 & 0x3f) << 6) | (b4 & 0x3f);
	        }

	        if (code < 0x10000) {
	            str += String.fromCharCode(code);
	        } else {
	            // surrogate pair
	            code -= 0x10000;
	            upper = (0xD800 | (code >> 10));
	            lower = (0xDC00 | (code & 0x3FF));
	            str += String.fromCharCode(upper, lower);
	        }
	    }

	    return str;
	};

	/**
	 * Utilities to manipulate byte sequence
	 * @param {(number|Uint8Array)} arg Initial size of this buffer (number), or buffer to set (Uint8Array)
	 * @constructor
	 */
	function ByteBuffer(arg) {
	    var initial_size;
	    if (arg == null) {
	        initial_size = 1024 * 1024;
	    } else if (typeof arg === "number") {
	        initial_size = arg;
	    } else if (arg instanceof Uint8Array) {
	        this.buffer = arg;
	        this.position = 0;  // Overwrite
	        return;
	    } else {
	        // typeof arg -> String
	        throw typeof arg + " is invalid parameter type for ByteBuffer constructor";
	    }
	    // arg is null or number
	    this.buffer = new Uint8Array(initial_size);
	    this.position = 0;
	}

	ByteBuffer.prototype.size = function () {
	    return this.buffer.length;
	};

	ByteBuffer.prototype.reallocate = function () {
	    var new_array = new Uint8Array(this.buffer.length * 2);
	    new_array.set(this.buffer);
	    this.buffer = new_array;
	};

	ByteBuffer.prototype.shrink = function () {
	    this.buffer = this.buffer.subarray(0, this.position);
	    return this.buffer;
	};

	ByteBuffer.prototype.put = function (b) {
	    if (this.buffer.length < this.position + 1) {
	        this.reallocate();
	    }
	    this.buffer[this.position++] = b;
	};

	ByteBuffer.prototype.get = function (index) {
	    if (index == null) {
	        index = this.position;
	        this.position += 1;
	    }
	    if (this.buffer.length < index + 1) {
	        return 0;
	    }
	    return this.buffer[index];
	};

	// Write short to buffer by little endian
	ByteBuffer.prototype.putShort = function (num) {
	    if (0xFFFF < num) {
	        throw num + " is over short value";
	    }
	    var lower = (0x00FF & num);
	    var upper = (0xFF00 & num) >> 8;
	    this.put(lower);
	    this.put(upper);
	};

	// Read short from buffer by little endian
	ByteBuffer.prototype.getShort = function (index) {
	    if (index == null) {
	        index = this.position;
	        this.position += 2;
	    }
	    if (this.buffer.length < index + 2) {
	        return 0;
	    }
	    var lower = this.buffer[index];
	    var upper = this.buffer[index + 1];
	    return (upper << 8) + lower;
	};

	// Write integer to buffer by little endian
	ByteBuffer.prototype.putInt = function (num) {
	    if (0xFFFFFFFF < num) {
	        throw num + " is over integer value";
	    }
	    var b0 = (0x000000FF & num);
	    var b1 = (0x0000FF00 & num) >> 8;
	    var b2 = (0x00FF0000 & num) >> 16;
	    var b3 = (0xFF000000 & num) >> 24;
	    this.put(b0);
	    this.put(b1);
	    this.put(b2);
	    this.put(b3);
	};

	// Read integer from buffer by little endian
	ByteBuffer.prototype.getInt = function (index) {
	    if (index == null) {
	        index = this.position;
	        this.position += 4;
	    }
	    if (this.buffer.length < index + 4) {
	        return 0;
	    }
	    var b0 = this.buffer[index];
	    var b1 = this.buffer[index + 1];
	    var b2 = this.buffer[index + 2];
	    var b3 = this.buffer[index + 3];

	    return (b3 << 24) + (b2 << 16) + (b1 << 8) + b0;
	};

	ByteBuffer.prototype.readInt = function () {
	    var pos = this.position;
	    this.position += 4;
	    return this.getInt(pos);
	};

	ByteBuffer.prototype.putString = function (str) {
	    var bytes = stringToUtf8Bytes(str);
	    for (var i = 0; i < bytes.length; i++) {
	        this.put(bytes[i]);
	    }
	    // put null character as terminal character
	    this.put(0);
	};

	ByteBuffer.prototype.getString = function (index) {
	    var buf = [],
	        ch;
	    if (index == null) {
	        index = this.position;
	    }
	    while (true) {
	        if (this.buffer.length < index + 1) {
	            break;
	        }
	        ch = this.get(index++);
	        if (ch === 0) {
	            break;
	        } else {
	            buf.push(ch);
	        }
	    }
	    this.position = index;
	    return utf8BytesToString(buf);
	};

	module.exports = ByteBuffer;


/***/ },
/* 318 */
/***/ function(module, exports) {

	/*
	 * Copyright 2014 Takuya Asano
	 * Copyright 2010-2014 Atilika Inc. and contributors
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *     http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */

	"use strict";

	/**
	 * Connection costs matrix from cc.dat file.
	 * 2 dimension matrix [forward_id][backward_id] -> cost
	 * @constructor
	 * @param {number} forward_dimension
	 * @param {number} backward_dimension
	 */
	function ConnectionCosts(forward_dimension, backward_dimension) {
	    this.forward_dimension = forward_dimension;
	    this.backward_dimension = backward_dimension;

	    // leading 2 integers for forward_dimension, backward_dimension, respectively
	    this.buffer = new Int16Array(forward_dimension * backward_dimension + 2);
	    this.buffer[0] = forward_dimension;
	    this.buffer[1] = backward_dimension;
	}

	ConnectionCosts.prototype.put = function (forward_id, backward_id, cost) {
	    var index = forward_id * this.backward_dimension + backward_id + 2;
	    if (this.buffer.length < index + 1) {
	        throw "ConnectionCosts buffer overflow";
	    }
	    this.buffer[index] = cost;
	};

	ConnectionCosts.prototype.get = function (forward_id, backward_id) {
	    var index = forward_id * this.backward_dimension + backward_id + 2;
	    if (this.buffer.length < index + 1) {
	        throw "ConnectionCosts buffer overflow";
	    }
	    return this.buffer[index];
	};

	ConnectionCosts.prototype.loadConnectionCosts = function (connection_costs_buffer) {
	    this.forward_dimension = connection_costs_buffer[0];
	    this.backward_dimension = connection_costs_buffer[1];
	    this.buffer = connection_costs_buffer;
	};

	module.exports = ConnectionCosts;


/***/ },
/* 319 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * Copyright 2014 Takuya Asano
	 * Copyright 2010-2014 Atilika Inc. and contributors
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *     http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */

	"use strict";

	var TokenInfoDictionary = __webpack_require__(316);
	var CharacterDefinition = __webpack_require__(320);
	var ByteBuffer = __webpack_require__(317);

	/**
	 * UnknownDictionary
	 * @constructor
	 */
	function UnknownDictionary() {
	    this.dictionary = new ByteBuffer(10 * 1024 * 1024);
	    this.target_map = {};  // class_id (of CharacterClass) -> token_info_id (of unknown class)
	    this.pos_buffer = new ByteBuffer(10 * 1024 * 1024);
	    this.character_definition = null;
	}

	// Inherit from TokenInfoDictionary as a super class
	UnknownDictionary.prototype = Object.create(TokenInfoDictionary.prototype);

	UnknownDictionary.prototype.characterDefinition = function (character_definition) {
	    this.character_definition = character_definition;
	    return this;
	};

	UnknownDictionary.prototype.lookup = function (ch) {
	    return this.character_definition.lookup(ch);
	};

	UnknownDictionary.prototype.lookupCompatibleCategory = function (ch) {
	    return this.character_definition.lookupCompatibleCategory(ch);
	};

	UnknownDictionary.prototype.loadUnknownDictionaries = function (unk_buffer, unk_pos_buffer, unk_map_buffer, cat_map_buffer, compat_cat_map_buffer, invoke_def_buffer) {
	    this.loadDictionary(unk_buffer);
	    this.loadPosVector(unk_pos_buffer);
	    this.loadTargetMap(unk_map_buffer);
	    this.character_definition = CharacterDefinition.load(cat_map_buffer, compat_cat_map_buffer, invoke_def_buffer);
	};

	module.exports = UnknownDictionary;


/***/ },
/* 320 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * Copyright 2014 Takuya Asano
	 * Copyright 2010-2014 Atilika Inc. and contributors
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *     http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */

	"use strict";

	var InvokeDefinitionMap = __webpack_require__(321);
	var CharacterClass = __webpack_require__(322);
	var SurrogateAwareString = __webpack_require__(305);

	var DEFAULT_CATEGORY = "DEFAULT";

	/**
	 * CharacterDefinition represents char.def file and
	 * defines behavior of unknown word processing
	 * @constructor
	 */
	function CharacterDefinition() {
	    this.character_category_map = new Uint8Array(65536);  // for all UCS2 code points
	    this.compatible_category_map = new Uint32Array(65536);  // for all UCS2 code points
	    this.invoke_definition_map = null;
	}

	/**
	 * Load CharacterDefinition
	 * @param {Uint8Array} cat_map_buffer
	 * @param {Uint32Array} compat_cat_map_buffer
	 * @param {InvokeDefinitionMap} invoke_def_buffer
	 * @returns {CharacterDefinition}
	 */
	CharacterDefinition.load = function (cat_map_buffer, compat_cat_map_buffer, invoke_def_buffer) {
	    var char_def = new CharacterDefinition();
	    char_def.character_category_map = cat_map_buffer;
	    char_def.compatible_category_map = compat_cat_map_buffer;
	    char_def.invoke_definition_map = InvokeDefinitionMap.load(invoke_def_buffer);
	    return char_def;
	};

	CharacterDefinition.parseCharCategory = function (class_id, parsed_category_def) {
	    var category = parsed_category_def[1];
	    var invoke = parseInt(parsed_category_def[2]);
	    var grouping = parseInt(parsed_category_def[3]);
	    var max_length = parseInt(parsed_category_def[4]);
	    if (!isFinite(invoke) || (invoke !== 0 && invoke !== 1)) {
	        console.log("char.def parse error. INVOKE is 0 or 1 in:" + invoke);
	        return null;
	    }
	    if (!isFinite(grouping) || (grouping !== 0 && grouping !== 1)) {
	        console.log("char.def parse error. GROUP is 0 or 1 in:" + grouping);
	        return null;
	    }
	    if (!isFinite(max_length) || max_length < 0) {
	        console.log("char.def parse error. LENGTH is 1 to n:" + max_length);
	        return null;
	    }
	    var is_invoke = (invoke === 1);
	    var is_grouping = (grouping === 1);

	    return new CharacterClass(class_id, category, is_invoke, is_grouping, max_length);
	};

	CharacterDefinition.parseCategoryMapping = function (parsed_category_mapping) {
	    var start = parseInt(parsed_category_mapping[1]);
	    var default_category = parsed_category_mapping[2];
	    var compatible_category = (3 < parsed_category_mapping.length) ? parsed_category_mapping.slice(3) : [];
	    if (!isFinite(start) || start < 0 || start > 0xFFFF) {
	        console.log("char.def parse error. CODE is invalid:" + start);
	    }
	    return { start: start, default: default_category, compatible: compatible_category};
	};

	CharacterDefinition.parseRangeCategoryMapping = function (parsed_category_mapping) {
	    var start = parseInt(parsed_category_mapping[1]);
	    var end = parseInt(parsed_category_mapping[2]);
	    var default_category = parsed_category_mapping[3];
	    var compatible_category = (4 < parsed_category_mapping.length) ? parsed_category_mapping.slice(4) : [];
	    if (!isFinite(start) || start < 0 || start > 0xFFFF) {
	        console.log("char.def parse error. CODE is invalid:" + start);
	    }
	    if (!isFinite(end) || end < 0 || end > 0xFFFF) {
	        console.log("char.def parse error. CODE is invalid:" + end);
	    }
	    return { start: start, end: end, default: default_category, compatible: compatible_category};
	};

	/**
	 * Initializing method
	 * @param {Array} category_mapping Array of category mapping
	 */
	CharacterDefinition.prototype.initCategoryMappings = function (category_mapping) {
	    // Initialize map by DEFAULT class
	    var code_point;
	    if (category_mapping != null) {
	        for (var i = 0; i < category_mapping.length; i++) {
	            var mapping = category_mapping[i];
	            var end = mapping.end || mapping.start;
	            for (code_point = mapping.start; code_point <= end; code_point++) {

	                // Default Category class ID
	                this.character_category_map[code_point] = this.invoke_definition_map.lookup(mapping.default);

	                for (var j = 0; j < mapping.compatible.length; j++) {
	                    var bitset = this.compatible_category_map[code_point];
	                    var compatible_category = mapping.compatible[j];
	                    if (compatible_category == null) {
	                        continue;
	                    }
	                    var class_id = this.invoke_definition_map.lookup(compatible_category);  // Default Category
	                    if (class_id == null) {
	                        continue;
	                    }
	                    var class_id_bit = 1 << class_id;
	                    bitset = bitset | class_id_bit;  // Set a bit of class ID 例えば、class_idが3のとき、3ビット目に1を立てる
	                    this.compatible_category_map[code_point] = bitset;
	                }
	            }
	        }
	    }
	    var default_id = this.invoke_definition_map.lookup(DEFAULT_CATEGORY);
	    if (default_id == null) {
	        return;
	    }
	    for (code_point = 0; code_point < this.character_category_map.length; code_point++) {
	        // 他に何のクラスも定義されていなかったときだけ DEFAULT
	        if (this.character_category_map[code_point] === 0) {
	            // DEFAULT class ID に対応するビットだけ1を立てる
	            this.character_category_map[code_point] = 1 << default_id;
	        }
	    }
	};

	/**
	 * Lookup compatible categories for a character (not included 1st category)
	 * @param {string} ch UCS2 character (just 1st character is effective)
	 * @returns {Array.<CharacterClass>} character classes
	 */
	CharacterDefinition.prototype.lookupCompatibleCategory = function (ch) {
	    var classes = [];

	    /*
	     if (SurrogateAwareString.isSurrogatePair(ch)) {
	     // Surrogate pair character codes can not be defined by char.def
	     return classes;
	     }*/
	    var code = ch.charCodeAt(0);
	    var integer;
	    if (code < this.compatible_category_map.length) {
	        integer = this.compatible_category_map[code];  // Bitset
	    }

	    if (integer == null || integer === 0) {
	        return classes;
	    }

	    for (var bit = 0; bit < 32; bit++) {  // Treat "bit" as a class ID
	        if (((integer << (31 - bit)) >>> 31) === 1) {
	            var character_class = this.invoke_definition_map.getCharacterClass(bit);
	            if (character_class == null) {
	                continue;
	            }
	            classes.push(character_class);
	        }
	    }
	    return classes;
	};


	/**
	 * Lookup category for a character
	 * @param {string} ch UCS2 character (just 1st character is effective)
	 * @returns {CharacterClass} character class
	 */
	CharacterDefinition.prototype.lookup = function (ch) {

	    var class_id;

	    var code = ch.charCodeAt(0);
	    if (SurrogateAwareString.isSurrogatePair(ch)) {
	        // Surrogate pair character codes can not be defined by char.def, so set DEFAULT category
	        class_id = this.invoke_definition_map.lookup(DEFAULT_CATEGORY);
	    } else if (code < this.character_category_map.length) {
	        class_id = this.character_category_map[code];  // Read as integer value
	    }

	    if (class_id == null) {
	        class_id = this.invoke_definition_map.lookup(DEFAULT_CATEGORY);
	    }

	    return this.invoke_definition_map.getCharacterClass(class_id);
	};

	module.exports = CharacterDefinition;


/***/ },
/* 321 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * Copyright 2014 Takuya Asano
	 * Copyright 2010-2014 Atilika Inc. and contributors
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *     http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */

	"use strict";

	var ByteBuffer = __webpack_require__(317);
	var CharacterClass = __webpack_require__(322);

	/**
	 * InvokeDefinitionMap represents invoke definition a part of char.def
	 * @constructor
	 */
	function InvokeDefinitionMap() {
	    this.map = [];
	    this.lookup_table = {};  // Just for building dictionary
	}

	/**
	 * Load InvokeDefinitionMap from buffer
	 * @param {Uint8Array} invoke_def_buffer
	 * @returns {InvokeDefinitionMap}
	 */
	InvokeDefinitionMap.load = function (invoke_def_buffer) {
	    var invoke_def = new InvokeDefinitionMap();
	    var character_category_definition = [];

	    var buffer = new ByteBuffer(invoke_def_buffer);
	    while (buffer.position + 1 < buffer.size()) {
	        var class_id = character_category_definition.length;
	        var is_always_invoke = buffer.get();
	        var is_grouping = buffer.get();
	        var max_length = buffer.getInt();
	        var class_name = buffer.getString();
	        character_category_definition.push(new CharacterClass(class_id, class_name, is_always_invoke, is_grouping, max_length));
	    }

	    invoke_def.init(character_category_definition);

	    return invoke_def;
	};

	/**
	 * Initializing method
	 * @param {Array.<CharacterClass>} character_category_definition Array of CharacterClass
	 */
	InvokeDefinitionMap.prototype.init = function (character_category_definition) {
	    if (character_category_definition == null) {
	        return;
	    }
	    for (var i = 0; i < character_category_definition.length; i++) {
	        var character_class = character_category_definition[i];
	        this.map[i] = character_class;
	        this.lookup_table[character_class.class_name] = i;
	    }
	};

	/**
	 * Get class information by class ID
	 * @param {number} class_id
	 * @returns {CharacterClass}
	 */
	InvokeDefinitionMap.prototype.getCharacterClass = function (class_id) {
	    return this.map[class_id];
	};

	/**
	 * For building character definition dictionary
	 * @param {string} class_name character
	 * @returns {number} class_id
	 */
	InvokeDefinitionMap.prototype.lookup = function (class_name) {
	    var class_id = this.lookup_table[class_name];
	    if (class_id == null) {
	        return null;
	    }
	    return class_id;
	};

	/**
	 * Transform from map to binary buffer
	 * @returns {Uint8Array}
	 */
	InvokeDefinitionMap.prototype.toBuffer = function () {
	    var buffer = new ByteBuffer();
	    for (var i = 0; i < this.map.length; i++) {
	        var char_class = this.map[i];
	        buffer.put(char_class.is_always_invoke);
	        buffer.put(char_class.is_grouping);
	        buffer.putInt(char_class.max_length);
	        buffer.putString(char_class.class_name);
	    }
	    buffer.shrink();
	    return buffer.buffer;
	};

	module.exports = InvokeDefinitionMap;


/***/ },
/* 322 */
/***/ function(module, exports) {

	/*
	 * Copyright 2014 Takuya Asano
	 * Copyright 2010-2014 Atilika Inc. and contributors
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *     http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */

	"use strict";

	/**
	 * CharacterClass
	 * @param {number} class_id
	 * @param {string} class_name
	 * @param {boolean} is_always_invoke
	 * @param {boolean} is_grouping
	 * @param {number} max_length
	 * @constructor
	 */
	function CharacterClass(class_id, class_name, is_always_invoke, is_grouping, max_length) {
	    this.class_id = class_id;
	    this.class_name = class_name;
	    this.is_always_invoke = is_always_invoke;
	    this.is_grouping = is_grouping;
	    this.max_length = max_length;
	}

	module.exports = CharacterClass;


/***/ },
/* 323 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * Copyright 2014 Takuya Asano
	 * Copyright 2010-2014 Atilika Inc. and contributors
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *     http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */

	"use strict";

	var doublearray = __webpack_require__(315);
	var DynamicDictionaries = __webpack_require__(314);
	var TokenInfoDictionary = __webpack_require__(316);
	var ConnectionCostsBuilder = __webpack_require__(324);
	var CharacterDefinitionBuilder = __webpack_require__(325);
	var UnknownDictionary = __webpack_require__(319);

	/**
	 * Build dictionaries (token info, connection costs)
	 *
	 * Generates from matrix.def
	 * cc.dat: Connection costs
	 *
	 * Generates from *.csv
	 * dat.dat: Double array
	 * tid.dat: Token info dictionary
	 * tid_map.dat: targetMap
	 * tid_pos.dat: posList (part of speech)
	 */
	function DictionaryBuilder() {
	    // Array of entries, each entry in Mecab form
	    // (0: surface form, 1: left id, 2: right id, 3: word cost, 4: part of speech id, 5-: other features)
	    this.tid_entries = [];
	    this.unk_entries = [];
	    this.cc_builder = new ConnectionCostsBuilder();
	    this.cd_builder = new CharacterDefinitionBuilder();
	}

	DictionaryBuilder.prototype.addTokenInfoDictionary = function (line) {
	    var new_entry = line.split(",");
	    this.tid_entries.push(new_entry);
	    return this;
	};

	/**
	 * Put one line of "matrix.def" file for building ConnectionCosts object
	 * @param {string} line is a line of "matrix.def"
	 */
	DictionaryBuilder.prototype.putCostMatrixLine = function (line) {
	    this.cc_builder.putLine(line);
	    return this;
	};

	DictionaryBuilder.prototype.putCharDefLine = function (line) {
	    this.cd_builder.putLine(line);
	    return this;
	};

	/**
	 * Put one line of "unk.def" file for building UnknownDictionary object
	 * @param {string} line is a line of "unk.def"
	 */
	DictionaryBuilder.prototype.putUnkDefLine = function (line) {
	    this.unk_entries.push(line.split(","));
	    return this;
	};

	DictionaryBuilder.prototype.build = function () {
	    var dictionaries = this.buildTokenInfoDictionary();
	    var unknown_dictionary = this.buildUnknownDictionary();

	    return new DynamicDictionaries(dictionaries.trie, dictionaries.token_info_dictionary, this.cc_builder.build(), unknown_dictionary);
	};

	/**
	 * Build TokenInfoDictionary
	 *
	 * @returns {{trie: *, token_info_dictionary: *}}
	 */
	DictionaryBuilder.prototype.buildTokenInfoDictionary = function () {

	    var token_info_dictionary = new TokenInfoDictionary();

	    // using as hashmap, string -> string (word_id -> surface_form) to build dictionary
	    var dictionary_entries = token_info_dictionary.buildDictionary(this.tid_entries);

	    var trie = this.buildDoubleArray();

	    for (var token_info_id in dictionary_entries) {
	        var surface_form = dictionary_entries[token_info_id];
	        var trie_id = trie.lookup(surface_form);

	        // Assertion
	        // if (trie_id < 0) {
	        //     console.log("Not Found:" + surface_form);
	        // }

	        token_info_dictionary.addMapping(trie_id, token_info_id);
	    }

	    return {
	        trie: trie,
	        token_info_dictionary: token_info_dictionary
	    };
	};

	DictionaryBuilder.prototype.buildUnknownDictionary = function () {

	    var unk_dictionary = new UnknownDictionary();

	    // using as hashmap, string -> string (word_id -> surface_form) to build dictionary
	    var dictionary_entries = unk_dictionary.buildDictionary(this.unk_entries);

	    var char_def = this.cd_builder.build(); // Create CharacterDefinition

	    unk_dictionary.characterDefinition(char_def);

	    for (var token_info_id in dictionary_entries) {
	        var class_name = dictionary_entries[token_info_id];
	        var class_id = char_def.invoke_definition_map.lookup(class_name);

	        // Assertion
	        // if (trie_id < 0) {
	        //     console.log("Not Found:" + surface_form);
	        // }

	        unk_dictionary.addMapping(class_id, token_info_id);
	    }

	    return unk_dictionary;
	};

	/**
	 * Build double array trie
	 *
	 * @returns {DoubleArray} Double-Array trie
	 */
	DictionaryBuilder.prototype.buildDoubleArray = function () {
	    var trie_id = 0;
	    var words = this.tid_entries.map(function (entry) {
	        var surface_form = entry[0];
	        return { k: surface_form, v: trie_id++ };
	    });

	    var builder = doublearray.builder(1024 * 1024);
	    return builder.build(words);
	};

	module.exports = DictionaryBuilder;


/***/ },
/* 324 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * Copyright 2014 Takuya Asano
	 * Copyright 2010-2014 Atilika Inc. and contributors
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *     http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */

	"use strict";

	var ConnectionCosts = __webpack_require__(318);

	/**
	 * Builder class for constructing ConnectionCosts object
	 * @constructor
	 */
	function ConnectionCostsBuilder() {
	    this.lines = 0;
	    this.connection_cost = null;
	}

	ConnectionCostsBuilder.prototype.putLine = function (line) {
	    if (this.lines === 0) {
	        var dimensions = line.split(" ");
	        var forward_dimension = dimensions[0];
	        var backward_dimension = dimensions[1];

	        if (forward_dimension < 0 || backward_dimension < 0) {
	            throw "Parse error of matrix.def";
	        }

	        this.connection_cost = new ConnectionCosts(forward_dimension, backward_dimension);
	        this.lines++;
	        return this;
	    }

	    var costs = line.split(" ");

	    if (costs.length !== 3) {
	        return this;
	    }

	    var forward_id = parseInt(costs[0]);
	    var backward_id = parseInt(costs[1]);
	    var cost = parseInt(costs[2]);

	    if (forward_id < 0 || backward_id < 0 || !isFinite(forward_id) || !isFinite(backward_id) ||
	        this.connection_cost.forward_dimension <= forward_id || this.connection_cost.backward_dimension <= backward_id) {
	        throw "Parse error of matrix.def";
	    }

	    this.connection_cost.put(forward_id, backward_id, cost);
	    this.lines++;
	    return this;
	};

	ConnectionCostsBuilder.prototype.build = function () {
	    return this.connection_cost;
	};

	module.exports = ConnectionCostsBuilder;


/***/ },
/* 325 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * Copyright 2014 Takuya Asano
	 * Copyright 2010-2014 Atilika Inc. and contributors
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *     http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */

	"use strict";

	var CharacterDefinition = __webpack_require__(320);
	var InvokeDefinitionMap = __webpack_require__(321);

	var CATEGORY_DEF_PATTERN = /^(\w+)\s+(\d)\s+(\d)\s+(\d)/;
	var CATEGORY_MAPPING_PATTERN = /^(0x[0-9A-F]{4})(?:\s+([^#\s]+))(?:\s+([^#\s]+))*/;
	var RANGE_CATEGORY_MAPPING_PATTERN = /^(0x[0-9A-F]{4})\.\.(0x[0-9A-F]{4})(?:\s+([^#\s]+))(?:\s+([^#\s]+))*/;

	/**
	 * CharacterDefinitionBuilder
	 * @constructor
	 */
	function CharacterDefinitionBuilder() {
	    this.char_def = new CharacterDefinition();
	    this.char_def.invoke_definition_map = new InvokeDefinitionMap();
	    this.character_category_definition = [];
	    this.category_mapping = [];
	}

	CharacterDefinitionBuilder.prototype.putLine = function (line) {
	    var parsed_category_def = CATEGORY_DEF_PATTERN.exec(line);
	    if (parsed_category_def != null) {
	        var class_id = this.character_category_definition.length;
	        var char_class = CharacterDefinition.parseCharCategory(class_id, parsed_category_def);
	        if (char_class == null) {
	            return;
	        }
	        this.character_category_definition.push(char_class);
	        return;
	    }
	    var parsed_category_mapping = CATEGORY_MAPPING_PATTERN.exec(line);
	    if (parsed_category_mapping != null) {
	        var mapping = CharacterDefinition.parseCategoryMapping(parsed_category_mapping);
	        this.category_mapping.push(mapping);
	    }
	    var parsed_range_category_mapping = RANGE_CATEGORY_MAPPING_PATTERN.exec(line);
	    if (parsed_range_category_mapping != null) {
	        var range_mapping = CharacterDefinition.parseRangeCategoryMapping(parsed_range_category_mapping);
	        this.category_mapping.push(range_mapping);
	    }
	};

	CharacterDefinitionBuilder.prototype.build = function () {
	    // TODO If DEFAULT category does not exist, throw error
	    this.char_def.invoke_definition_map.init(this.character_category_definition);
	    this.char_def.initCategoryMappings(this.category_mapping);
	    return this.char_def;
	};

	module.exports = CharacterDefinitionBuilder;


/***/ }
/******/ ]);