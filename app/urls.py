from django.urls import path, include
from . import views
from django.contrib import admin

app_name = "app"
urlpatterns =[
    path('',views.index,name='index'),
        ]

admin.site.site_header = "Reflectia Admin"
admin.site.index_title = "Reflectia Admin Site"
admin.site.site_title = "Reflectia"
