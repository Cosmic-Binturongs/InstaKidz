from rest_framework import viewsets
from .serializers import UserSerializer
from django.contrib.auth.models import User
from .serializers import PhotoSerializer
from .models import Photo

class PhotoViewSet(viewsets.ModelViewSet):
    queryset = Photo.objects.all()
    serializer_class = PhotoSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
