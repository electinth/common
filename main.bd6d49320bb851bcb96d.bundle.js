(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1031:function(module,exports,__webpack_require__){"use strict";__webpack_require__(8),__webpack_require__(3),__webpack_require__(52),__webpack_require__(1032),__webpack_require__(42),__webpack_require__(43),__webpack_require__(1033),__webpack_require__(32),__webpack_require__(41);var _clientApi=__webpack_require__(50),_clientLogger=__webpack_require__(35),_configFilename=__webpack_require__(1034);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}(_configFilename.args||_configFilename.argTypes)&&_clientLogger.logger.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify({args:_configFilename.args,argTypes:_configFilename.argTypes})),_configFilename.decorators&&_configFilename.decorators.forEach((function(decorator){return(0,_clientApi.addDecorator)(decorator,!1)})),_configFilename.loaders&&_configFilename.loaders.forEach((function(loader){return(0,_clientApi.addLoader)(loader,!1)})),(_configFilename.parameters||_configFilename.globals||_configFilename.globalTypes)&&(0,_clientApi.addParameters)(_objectSpread(_objectSpread({},_configFilename.parameters),{},{globals:_configFilename.globals,globalTypes:_configFilename.globalTypes}),!1),_configFilename.argTypesEnhancers&&_configFilename.argTypesEnhancers.forEach((function(enhancer){return(0,_clientApi.addArgTypesEnhancer)(enhancer)}))},1034:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"parameters",(function(){return parameters}));var parameters={actions:{argTypesRegex:"^on[A-Z].*"}}},1035:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(337).configure)([__webpack_require__(1036)],module,!1)}).call(this,__webpack_require__(101)(module))},1036:function(module,exports,__webpack_require__){var map={"./social-sharer.stories.js":1041};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1036},1041:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default}));__webpack_require__(17),__webpack_require__(4),__webpack_require__(23);var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,template=__webpack_require__(1049),define=__webpack_require__(455);function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}var SocialSharer={url:"",light:!1,render:function render(_ref){var url=_ref.url,fillColor=_ref.light?"white":"black",encodedUrl=encodeURI(url),socialLinks=[{label:"Facebook",url:"http://www.facebook.com/sharer/sharer.php?u=".concat(encodedUrl),svgContent:Object(template.b)(_templateObject||(_templateObject=_taggedTemplateLiteral(['\n            <path\n              fill-rule="evenodd"\n              clip-rule="evenodd"\n              d="M20 0.968018C9 0.968018 0 9.96802 0 20.968C0 31.968 9 40.968 20 40.968C31 40.968 40 31.968 40 20.968C40 9.96802 31 0.968018 20 0.968018ZM25.3 13.168C24.6 13.168 24 13.168 23.3 13.168C22.4 13.168 21.9 13.668 21.8 14.468C21.8 15.168 21.8 15.868 21.8 16.568C21.8 16.868 21.9 16.768 22.1 16.768C23.1 16.768 24.1 16.768 25.1 16.768C25.4 16.768 25.5 16.868 25.5 17.168C25.4 18.368 25.3 19.468 25.2 20.668C25.2 20.968 25.1 20.968 24.8 20.968C24 20.968 23.2 20.968 22.4 20.968C21.8 20.968 21.9 20.868 21.9 21.468C21.9 25.168 21.9 28.768 21.9 32.468C21.9 32.868 21.8 32.968 21.4 32.968C20 32.968 18.7 32.968 17.3 32.968C16.9 32.968 16.9 32.868 16.9 32.468C16.9 30.668 16.9 28.768 16.9 26.968C16.9 25.068 16.9 23.268 16.9 21.368C16.9 21.068 16.8 20.968 16.5 20.968C15.9 20.968 15.3 20.968 14.7 20.968C14.5 20.968 14.4 20.868 14.4 20.668C14.4 19.468 14.4 18.368 14.4 17.168C14.4 16.968 14.5 16.868 14.7 16.868C15.3 16.868 15.9 16.868 16.5 16.868C16.8 16.868 16.9 16.768 16.9 16.468C16.9 15.568 16.9 14.668 16.9 13.768C16.9 12.668 17.2 11.668 17.9 10.768C18.7 9.66802 19.9 9.16802 21.2 9.06802C22.6 8.96802 24 9.06802 25.3 9.06802C25.5 9.06802 25.5 9.16802 25.5 9.36802C25.5 10.568 25.5 11.768 25.5 12.868C25.6 13.068 25.5 13.168 25.3 13.168Z"\n              fill="','"\n            />\n        '])),fillColor)},{label:"Twitter",url:"https://twitter.com/intent/tweet?url=".concat(encodedUrl),svgContent:Object(template.b)(_templateObject2||(_templateObject2=_taggedTemplateLiteral(['\n            <path\n              d="M20 0.968018C9 0.968018 0 9.96802 0 20.968C0 31.968 9 40.968 20 40.968C31 40.968 40 31.968 40 20.968C40 9.96802 31 0.968018 20 0.968018ZM29.6 16.068C29.6 16.268 29.6 16.468 29.6 16.668C29.6 23.168 24.6 30.768 15.5 30.768C12.7 30.768 10.1 29.968 7.9 28.568C8.3 28.568 8.7 28.668 9.1 28.668C11.4 28.668 13.5 27.868 15.2 26.568C13 26.568 11.2 25.068 10.6 23.168C10.9 23.268 11.2 23.268 11.5 23.268C12 23.268 12.4 23.168 12.8 23.068C10.5 22.568 8.8 20.568 8.8 18.268C8.8 18.268 8.8 18.268 8.8 18.168C9.5 18.568 10.2 18.768 11 18.768C9.8 17.768 9 16.268 9 14.568C9 13.668 9.2 12.768 9.7 12.068C12.1 15.068 15.8 17.068 19.9 17.268C19.8 16.868 19.8 16.568 19.8 16.168C19.8 13.468 22 11.268 24.7 11.268C26.1 11.268 27.4 11.868 28.3 12.868C29.4 12.668 30.5 12.268 31.4 11.668C31 12.868 30.2 13.768 29.2 14.368C30.2 14.268 31.2 13.968 32 13.568C31.4 14.468 30.5 15.368 29.6 16.068Z"\n              fill="','"\n            />\n        '])),fillColor)},{label:"Line",url:"https://social-plugins.line.me/lineit/share?url=".concat(encodedUrl),svgContent:Object(template.b)(_templateObject3||(_templateObject3=_taggedTemplateLiteral(['\n            <path\n              d="M17 16.2681C16.7 16.2681 16.4 16.5681 16.4 16.8681V21.3681C16.4 21.6681 16.7 21.9681 17 21.9681C17.3 21.9681 17.6 21.6681 17.6 21.3681V16.8681C17.6 16.5681 17.3 16.2681 17 16.2681Z"\n              fill="','"\n            />\n            <path\n              d="M22.3 16.2681C22 16.2681 21.7 16.5681 21.7 16.8681V19.5681L19.6 16.6681C19.5 16.4681 19.2 16.3681 18.9 16.4681C18.7 16.5681 18.5 16.7681 18.5 17.0681V21.4681C18.5 21.7681 18.8 22.0681 19.1 22.0681C19.4 22.0681 19.7 21.7681 19.7 21.4681V18.8681L21.8 21.7681C21.9 21.9681 22.1 21.9681 22.3 21.9681C22.4 21.9681 22.4 21.9681 22.5 21.9681C22.7 21.8681 22.9 21.6681 22.9 21.3681V16.8681C22.8 16.5681 22.6 16.2681 22.3 16.2681Z"\n              fill="','"\n            />\n            <path\n              d="M15.3 20.7681H13.7V16.8681C13.7 16.5681 13.4 16.2681 13.1 16.2681C12.8 16.2681 12.5 16.5681 12.5 16.8681V21.3681C12.5 21.6681 12.8 21.9681 13.1 21.9681H15.2C15.5 21.9681 15.8 21.6681 15.8 21.3681C15.8 21.0681 15.7 20.7681 15.3 20.7681Z"\n              fill="','"\n            />\n            <path\n              d="M27.1 20.6681H24.8V19.5681H26.6C26.9 19.5681 27.2 19.2681 27.2 18.9681C27.2 18.6681 26.9 18.3681 26.6 18.3681H24.8V17.2681H27C27.3 17.2681 27.6 16.9681 27.6 16.6681C27.6 16.3681 27.3 16.0681 27 16.0681H24.2C23.9 16.0681 23.6 16.3681 23.6 16.6681V18.8681V21.0681C23.6 21.3681 23.9 21.6681 24.2 21.6681H27.1C27.4 21.6681 27.7 21.3681 27.7 21.0681C27.7 20.7681 27.4 20.6681 27.1 20.6681Z"\n              fill="','"\n            />\n            <path\n              d="M20 0.968018C9 0.968018 0 9.96802 0 20.968C0 31.968 9 40.968 20 40.968C31 40.968 40 31.968 40 20.968C40 9.96802 31 0.968018 20 0.968018ZM30.3 25.268C28.7 27.268 21.7 31.968 20.1 32.968C19.4 33.368 18.6 32.868 18.6 32.068V29.668C14.7 29.468 7.7 26.068 7.7 19.268C7.7 12.268 14.7 8.86802 20.1 8.86802C25.9 8.86802 32.5 12.668 32.5 19.268C32.4 21.068 31.9 23.268 30.3 25.268Z"\n              fill="','"\n            />\n        '])),fillColor,fillColor,fillColor,fillColor,fillColor)}];return Object(template.a)(_templateObject4||(_templateObject4=_taggedTemplateLiteral(['\n      <div style="display: flex; flex-direction: row;">\n        ',"\n      </div>\n    "])),socialLinks.map((function(_ref2){var url=_ref2.url,svgContent=_ref2.svgContent;return Object(template.a)(_templateObject5||(_templateObject5=_taggedTemplateLiteral(['\n            <a\n              href="','"\n              target="_blank"\n              rel="noopener noreferrer"\n              style="margin: 0 4px;"\n            >\n              <svg\n                width="40"\n                height="41"\n                viewBox="0 0 40 41"\n                fill="none"\n                xmlns="http://www.w3.org/2000/svg"\n              >\n                ',"\n              </svg>\n            </a>\n          "])),url,svgContent)})))}};Object(define.a)("social-sharer",SocialSharer);__webpack_exports__.default={title:"Social Sharer",argTypes:{url:{control:"text"},light:{control:"boolean"}},args:{url:"https://elect.in.th",light:!1}};var Default=function Default(_ref){var url=_ref.url,light=_ref.light;return'<social-sharer url="'.concat(url,'" ').concat(light?"light":""," />")};Default.parameters=Object.assign({storySource:{source:"({ url, light }) => {\n  return `<social-sharer url=\"${url}\" ${light ? 'light' : ''} />`;\n}"}},Default.parameters)},458:function(module,exports,__webpack_require__){__webpack_require__(459),__webpack_require__(622),__webpack_require__(623),__webpack_require__(781),__webpack_require__(1003),__webpack_require__(1005),__webpack_require__(1010),__webpack_require__(1022),__webpack_require__(1024),__webpack_require__(1029),__webpack_require__(1031),module.exports=__webpack_require__(1035)},532:function(module,exports){},623:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(337)}},[[458,1,2]]]);
//# sourceMappingURL=main.bd6d49320bb851bcb96d.bundle.js.map