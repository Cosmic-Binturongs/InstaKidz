from rest_framework import serializers
from .models import Photo
from django.contrib.auth.models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'password']
        extra_kwargs = {'password': {'write_only': True, 'required': True}}


class PhotoUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username']


class PhotoSerializer(serializers.ModelSerializer):

    class Meta:
        user = PhotoUserSerializer({'read_only': True})
        model = Photo
        fields = '__all__'
