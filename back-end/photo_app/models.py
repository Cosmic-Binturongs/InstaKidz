from django.contrib.postgres.fields import ArrayField
from django.db import models
from django.contrib.auth.models import User
from django.forms import CharField

# PROFILE_PICTURE = [('DOG', ''),
#                    ('CAT', ''),
#                    ('CHICK', '')
#                    ('HORSE', '')
#                    ('FISH', '')
#                    ('BEAR', '')
#                    ('BIRD', '')
#                    ('SHARK', '')
#                    ('LION', '')
#                    ('MONKEY', '')
#                    ('BINTURONG', '')]


class Photo(models.Model):
    caption = models.TextField(default=None, blank=True, null=True)
    user = models.ForeignKey(
        User, on_delete=models.CASCADE,
        related_name='photos')
    file = models.FileField()
    tags = ArrayField(models.CharField(max_length=25, blank=True))

    def __str__(self):
        return f'{self.url}'


class Profile(models.Model):
    bio = models.TextField()
    pronouns = CharField(max_length=25)
    parents_email = models.EmailField()
    birthday = models.DateField()
    user = models.OneToOneField(
        User, on_delete=models.CASCADE, primary_key=True)

    def __str__(self):
        return self.bio
