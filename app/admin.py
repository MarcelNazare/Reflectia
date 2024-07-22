from django.contrib import admin

from .models import Thought

# Register your models here.
@admin.register(Thought)
class ThoughtAdmin(admin.ModelAdmin):
    list_display = ('thought','created_on', 'summary','response')

    #,'summary','response'