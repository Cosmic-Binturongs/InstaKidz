# Generated by Django 4.0.4 on 2022-05-05 19:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('photo_app', '0003_remove_photo_url_photo_file_profile_birthday_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='photo',
            name='file',
        ),
        migrations.AddField(
            model_name='profile',
            name='pronouns',
            field=models.CharField(default='none', max_length=25),
            preserve_default=False,
        ),
    ]