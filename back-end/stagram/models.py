from django.db import models
from django.contrib.auth import User
# Create your models here.


class Profile(models.Model):
    bio = models.TextField()
    user = models.OneToOneField(User, on_delete=models.CASCADE,primary_key=True)

    def __str__(self):
        return self.bio
