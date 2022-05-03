from rest_framework import viewsets, permissions

from .serializers import PhotoSerializer
from .models import Photo
import json

class PhotoViewSet(viewsets.ModelViewSet):
    queryset = Photo.objects.all()
    serializer_class = PhotoSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]





