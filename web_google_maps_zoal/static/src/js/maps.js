odoo.define('web_google_maps_zoal.MapWidget', function (require) {
'use strict';

var AbstractField = require('web.AbstractField');
var fieldRegistry = require('web.field_registry');

var MapChar = AbstractField.extend({
    template: 'map_widget_z_template',
    start: function () {
        this.initializeMap();
        return this._super.apply(this, arguments);
    },
    initializeMap(){
        console.log('we are in the beam');
        this.mode = 'google';
        if(this.mode == 'google'){
            this.initializeGoogle();
        }else{
            this.initializeLeaflet();
        }
        console.log(this.map);
    },
    initializeGoogle(){
        // implement some custom logic here
        var latlng = new google.maps.LatLng(15.5007, 32.5599);
        let mapOptions = {
            zoom: 13,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            center:latlng,
            mapTypeControl: false,
            streetViewControl: false,
            fullscreenControl: false
          }
          this.map = new google.maps.Map(this.el, mapOptions);
    },
    initializeLeaflet(){
        // let khartoum = [32.504161, 15.621031];
        let khartoum = [33.59231524593432, 6.769981384277345];
        this.map = L.map(this.el).setView(khartoum, 13);
        let width = this.$el.width()
        let height = this.$el.height()
        let tileSize = new L.point(width, height);
        console.log(width, height, tileSize);
        L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox/streets-v11',
            tileSize: tileSize,
            zoomOffset: -1,
            accessToken: 'pk.eyJ1IjoidWJheS1hYmRlbGdhZGlyIiwiYSI6ImNqeXZuZnVjcTBlc2ozaXJyaGw1NWt5cGkifQ.QN_JvTCCKwteXQCRY6ybvQ'
        }).addTo(this.map);
        var marker = L.marker(khartoum).addTo(this.map);
        function onMapClick(e) {
            console.log("You clicked the map at ", e.latlng);
        }
        this.map.on('click', onMapClick);

    }
});

fieldRegistry.add('map-char', MapChar);
});