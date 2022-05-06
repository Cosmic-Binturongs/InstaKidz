from rest_framework import serializers
from .models import Photo
from django.contrib.auth.models import User

<<<<<<< HEAD
=======


>>>>>>> abe9b36c3c7519a1134d19fb40c88434c0d7b131
class PhotoSerializer(serializers.ModelSerializer):
    user = PhotoUserSerializer()
    class Meta:
        model = Photo
        fields = '__all__'

class UserSerializer(serializers.ModelSerializer):
<<<<<<< HEAD
    class Meta:
=======
     class Meta:
>>>>>>> abe9b36c3c7519a1134d19fb40c88434c0d7b131
        model = User
        fields = ['id', 'username', 'password']
        extra_kwargs = {'password': {'write_only': True, 'required': True}}

    def create(self, validated_data):
      user = User.objects.create_user(**validated_data)
      return user
