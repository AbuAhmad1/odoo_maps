# -*- coding: utf-8 -*-

from odoo import models, fields, api

class MapsTestModel(models.Model):
    _name = 'maps.test.model'

    name = fields.Char()