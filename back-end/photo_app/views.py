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

import json 
from django.contrib.auth import authenticate, login
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
def login_view(request):
  # json_data = json.loads(request.body)
  # username = json_data.get('username')
  # password = json_data.get('password')
  # user = authenticate(username=username, password=password)
  # if user is not None:
  #   login(request, user)
  #   return JsonResponse({'ok': True})
  # else: 
  #   return JsonResponse({'ok': False})

  return JsonResponse({'ok': True})