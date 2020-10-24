(function (window) {
    'use strict';

    var App = window.App || {};
    var $ = window.jQuery;
    
    class RemoteDataStore {
        constructor(url) {
            firebase.initializeApp({
                apiKey: 'AIzaSyBdQUBOCHiUuSon6ZSvx1PXTj5AFnv2LuI',
                projectId: 'coffeerun-4c04a',
              });
            
            this.collection = firebase.firestore().collection('orders');
            
            console.log('running the DataStore Firebase function');

            if (!url) {
                throw new Error('No remote URL supplied.');
            }

            this.serverURL = url;
        }

        /* ajaxposthelper(type, url, val) {
            $.ajax({
                type: type,
                url: url,
                contentType: 'application/json',
                data: JSON.stringify(val),
                success: function (response) {
                    console.log('function returned: ' + JSON.stringify(response));
                }
            });
        }
        ajaxhelper(type, url, cb) {
            $.ajax({
                type: type,
                url: url,
                contentType: 'application/json',
                success: function (response) {
                    console.log('function returned: ' + JSON.stringify(response));
                    if (cb) {
                        cb(response);
                    }
                }
            });
        } */
        
        async add(key, val) {
            //this.ajaxposthelper('POST', this.serverURL, val);
            return await this.collection.doc(key).set(val);
        }
        async get(key, cb) {
            return await this.collection.doc(key).get();
            
            //this.ajaxhelper('GET', this.serverURL + '/' + key, cb);
        }
        async getAll(cb) {
            var snapshot = await this.collection.get();
            var data = []; 

            snapshot.forEach(function(doc) { 
                data.push(doc.data());
            });

            return data
            //this.ajaxhelper('GET', this.serverURL, cb);
        }
        async remove(key) {
            return await this.collection.doc(key).delete();
            //this.ajaxhelper('DELETE', this.serverURL + '/' + key);
        }
    }
    App.RemoteDataStore = RemoteDataStore;
    window.App = App;

})(window);