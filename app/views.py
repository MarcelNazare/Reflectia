from django.shortcuts import render

# Create your views here.

#This is for the landing page
def index(request):
    return render(request,'app/index.html')

# Contact Page Views
def contact(request):
    return render(request,'app/contact.html')

# Legal
def legal(request):
    return render(request,'app/legal/legal.html')

# Terms
def terms(request):
    return render(request,'app/legal/terms.html')

# Cookies
def cookies(request):
    return render(request,'app/legal/cookies.html')
