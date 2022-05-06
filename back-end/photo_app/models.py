from django.db import models
from django.contrib.auth.models import User


class Photo(models.Model):
    caption = models.TextField(default=None, blank=True, null=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='photos')
    photo = models.ImageField(max_length=128)

    def __str__(self):
        return f'{self.caption}'


class Profile(models.Model):
    bio = models.TextField()
    pronouns = models.CharField(max_length=25)
    parents_email = models.EmailField()
    birthday = models.DateField()
    user = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True)

    def __str__(self):
        return self.bio
