"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SL_NOT_INITIALIZED = 'Smartlook client is not initialized.';
exports.default = {
    init: function (key) {
        var w = window;
        if (w.smartlook) {
            console.warn('Smartlook client is already initialized.');
            return false;
        }
        w.smartlook = function () {
            w.smartlook.api.push(arguments);
        };
        w.smartlook.api = [];
        w.smartlook('init', key);
        var head = window.document.getElementsByTagName('head')[0];
        var script = window.document.createElement('script');
        script.async = true;
        script.type = 'text/javascript';
        script.crossOrigin = 'anonymous';
        script.src = 'https://rec.smartlook.com/recorder.js';
        head.appendChild(script);
        return true;
    },
    identify: function (userId, props) {
        var w = window;
        if (!w.smartlook) {
            console.warn(SL_NOT_INITIALIZED);
            return false;
        }
        if (!userId) {
            console.warn('Smartlook - User ID must be provided');
            return false;
        }
        w.smartlook('identify', userId, props);
        return true;
    },
    anonymize: function () {
        var w = window;
        if (!w.smartlook) {
            console.warn(SL_NOT_INITIALIZED);
            return false;
        }
        w.smartlook('anonymize');
        return true;
    },
    track: function (eventName, props) {
        var w = window;
        if (!w.smartlook) {
            console.warn(SL_NOT_INITIALIZED);
            return false;
        }
        w.smartlook('track', eventName, props);
        return true;
    },
    disable: function () {
        var w = window;
        if (!w.smartlook) {
            console.warn(SL_NOT_INITIALIZED);
            return false;
        }
        w.smartlook('disable');
        return true;
    },
    consentForms: function (consent) {
        var w = window;
        if (!w.smartlook) {
            console.warn(SL_NOT_INITIALIZED);
            return false;
        }
        w.smartlook('consentForms', consent);
        return true;
    },
    consentIP: function (consent) {
        var w = window;
        if (!w.smartlook) {
            console.warn(SL_NOT_INITIALIZED);
            return false;
        }
        w.smartlook('consentIP', consent);
        return true;
    },
    consentAPI: function (consent) {
        var w = window;
        if (!w.smartlook) {
            console.warn(SL_NOT_INITIALIZED);
            return false;
        }
        w.smartlook('consentAPI', consent);
        return true;
    },
    getData: function (callback) {
        var w = window;
        if (!w.smartlook) {
            console.warn(SL_NOT_INITIALIZED);
            return false;
        }
        w.smartlook(callback);
        return true;
    },
    restart: function () {
        var w = window;
        if (!w.smartlook) {
            console.warn(SL_NOT_INITIALIZED);
            return false;
        }
        w.smartlook('restart');
        return true;
    },
    pause: function () {
        var w = window;
        if (!w.smartlook) {
            console.warn(SL_NOT_INITIALIZED);
            return false;
        }
        w.smartlook('pause');
        return true;
    },
    resume: function () {
        var w = window;
        if (!w.smartlook) {
            console.warn(SL_NOT_INITIALIZED);
            return false;
        }
        w.smartlook('resume');
        return true;
    },
    error: function (error) {
        var w = window;
        if (!w.smartlook) {
            console.warn(SL_NOT_INITIALIZED);
            return false;
        }
        w.smartlook('error', error);
        return true;
    },
    navigation: function (locationOrPath) {
        var w = window;
        if (!w.smartlook) {
            console.warn(SL_NOT_INITIALIZED);
            return false;
        }
        w.smartlook('navigation', locationOrPath);
        return true;
    },
    properties: function (properties) {
        var w = window;
        if (!w.smartlook) {
            console.warn(SL_NOT_INITIALIZED);
            return false;
        }
        w.smartlook('properties', properties);
        return true;
    },
    initialized: function () {
        var w = window;
        return !!w.smartlook;
    },
};
//# sourceMappingURL=index.js.map