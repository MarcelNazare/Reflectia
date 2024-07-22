from django.shortcuts import render

# Create your views here.

#This is for the landing page
def index(request):
    return render(request,'app/index.html')


