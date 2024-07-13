from django.db import models
from django.templatetags.static import static

# Create your models here.

class Profile(models.Model):
    username = models.CharField(max_length=20, unique=True)
    email = models.EmailField
    image = models.ImageField(upload_to="avatars/", null=True, blank=True)
    created_on = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return str(self.username)
    
    @property
    def avatar(self):
        try:
            avatar = self.image.url
        except:
            avatar = static('images/avatar/avatar.svg')
        return avatar
    
