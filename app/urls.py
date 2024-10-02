from django.urls import path
from . import views
from django.contrib import admin

app_name = "app"
urlpatterns =[
    path('',views.index,name='index'),
    path('contact',views.contact,name='contact'),
    path('legal',views.legal,name='legal'),
    path('terms',views.terms,name='terms'),
    path('cookies',views.cookies,name='cookies'),
        ]

admin.site.site_header = "Reflectia Admin"
admin.site.index_title = "Reflectia Admin Site"
admin.site.site_title = "Reflectia"
