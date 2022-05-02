from django.db import models

# Create your models here.


class User(models.Model):
    username = models.CharField(max_length=128)
    password = models.CharField(max_length=25)
    email = models.CharField(max_length=50)

    def __str__(self):
        return f'{self.username}-{self.email}'


class Photo(models.Model):
    name = models.CharField(max_length=128)
    user = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name='user')

    def __str__(self):
        return self.name


class Profile(models.Model):
    bio = models.TextField()
    user = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name='user')

    def __str__(self):
        return self.bio
