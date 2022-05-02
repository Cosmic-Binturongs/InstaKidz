from django.db import models

# Create your models here.


class Photos(models.Model):
    caption = models.TextField()
    url = models.URLField()

    def __str__(self):
        return f'{self.caption}'
