from django.db import models
from stagram import models

# Create your models here.


class Photo(models.Model):
    caption = models.TextField()
    user = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name='photos')
    url = models.URLField()

    def __str__(self):
        return f'{self.caption}'
