from django.db import models
from django.contrib.auth.models import User


class Photo(models.Model):
    caption = models.TextField(default=None, blank=True, null=True)
    user = models.ForeignKey(
        User, on_delete=models.CASCADE,
        related_name='photos')
    url = models.URLField()

    def __str__(self):
        return f'{self.url}'


class Profile(models.Model):
    bio = models.TextField()
    user = models.OneToOneField( User, on_delete=models.CASCADE, primary_key=True)

    def __str__(self):
        return self.bio
