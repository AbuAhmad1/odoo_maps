# -*- coding: utf-8 -*-
from odoo import http

# class WebGoogleMapsZoal(http.Controller):
#     @http.route('/web_google_maps_zoal/web_google_maps_zoal/', auth='public')
#     def index(self, **kw):
#         return "Hello, world"

#     @http.route('/web_google_maps_zoal/web_google_maps_zoal/objects/', auth='public')
#     def list(self, **kw):
#         return http.request.render('web_google_maps_zoal.listing', {
#             'root': '/web_google_maps_zoal/web_google_maps_zoal',
#             'objects': http.request.env['web_google_maps_zoal.web_google_maps_zoal'].search([]),
#         })

#     @http.route('/web_google_maps_zoal/web_google_maps_zoal/objects/<model("web_google_maps_zoal.web_google_maps_zoal"):obj>/', auth='public')
#     def object(self, obj, **kw):
#         return http.request.render('web_google_maps_zoal.object', {
#             'object': obj
#         })