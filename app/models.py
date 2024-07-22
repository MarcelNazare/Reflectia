from django.db import models
from user.models import Profile

# Create your models here.

class Thought(models.Model):
    profile = models.ForeignKey(Profile, on_delete=models.CASCADE)
    thought = models.CharField(max_length=255,blank=False)
    summary = models.TextField(null=True, blank=True)
    response = models.TextField(null=True, blank=True)
    created_on = models.DateTimeField(auto_created=True)
    
    def __str__(self):
        return str(self.profile)