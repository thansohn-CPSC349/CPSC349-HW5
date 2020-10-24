(function (window) {
    'use strict';

    var App = window.App || {};

    class DataStore {
        constructor() {
            this.data = {};
        }
        async add(key, val) {
            this.data[key] = val;
        }

        async get(key) {
            return this.data[key];
        }

        async getAll() {
            return this.data;
        }

        async remove(key) {
            delete this.data[key];
        }
    }

    App.DataStore = DataStore;
    window.App = App;

})(window);