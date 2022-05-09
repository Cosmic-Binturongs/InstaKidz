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
    user = PhotoUserSerializer()

    class Meta:
        model = Photo
        fields = '__all__'

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user
