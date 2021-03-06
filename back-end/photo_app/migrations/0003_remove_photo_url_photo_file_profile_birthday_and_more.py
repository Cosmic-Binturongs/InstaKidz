# Generated by Django 4.0.4 on 2022-05-05 15:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('photo_app', '0002_profile'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='photo',
            name='url',
        ),
        migrations.AddField(
            model_name='photo',
            name='file',
            field=models.FileField(default=None, upload_to=''),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='profile',
            name='birthday',
            field=models.DateField(default=None),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='profile',
            name='parents_email',
            field=models.EmailField(default=None, max_length=254),
            preserve_default=False,
        ),
    ]
