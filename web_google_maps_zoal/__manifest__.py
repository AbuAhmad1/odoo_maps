# -*- coding: utf-8 -*-
{
    'name': "Google Maps with Points",

    'summary': """
        This modules support google maps as a field in a form, and save points""",

    'description': """
    """,

    'author': "Ubay Abdelgadir",
    'website': "http://www.github.com/obayit",

    # Categories can be used to filter modules in modules listing
    # Check https://github.com/odoo/odoo/blob/12.0/odoo/addons/base/data/ir_module_category_data.xml
    # for the full list
    'category': 'Uncategorized',
    'version': '0.1',

    # any module necessary for this one to work correctly
    'depends': ['base'],

    # always loaded
    'data': [
        'security/ir.model.access.csv',
        'views/assets.xml',
        'views/test_views.xml',
    ],
    'qweb': ['static/src/xml/maps.xml'],
}