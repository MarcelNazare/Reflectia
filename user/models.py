from django.db import models
from django.templatetags.static import static
from django.contrib.auth.models import User

# Create your models here.

class Profile(models.Model):
    user = models.OneToOneField(User,on_delete=models.CASCADE,null=False)
    username = models.CharField(max_length=20, unique=True)
    image = models.ImageField(upload_to="avatars/", null=True, blank=True)
    created_on = models.DateTimeField(auto_now=True)

    
    def __str__(self):
        return str(self.username)
    
    
    @property
    def image(self):
        try:
            image = self.image.url
        except:
            image = static('avatar/avatar.png')
        return image
    
