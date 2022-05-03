from rest_framework import serializers
from .models import Photo
from django.contrib.auth.models import User


class PhotoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Photo
        fields = '__all__'

class UserSerializer(serializers.ModelSerializer): 
    class Meta:
        model = User
        fields = '__all__'