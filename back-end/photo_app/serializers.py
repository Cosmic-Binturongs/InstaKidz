from rest_framework import serializers
from .models import Photo
from django.contrib.auth.models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class PhotoUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username']


class PhotoSerializer(serializers.ModelSerializer):
    user = PhotoUserSerializer()
    class Meta:
        model = Photo
        fields = '__all__'
