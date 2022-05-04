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
from django.views.decorators.csrf import require_POST
from django.views.decorators.csrf import ensure_csrf_cookie
from django.middleware.csrf import get_token


@ensure_csrf_cookie
def get_csrf_token(request):
  json_response = JsonResponse({'ok': True})
  json_response['X-CSRFToken'] = get_token(request)
  return json_response

@require_POST
def login_view(request):
  json_data = json.loads(request.body)
  username = json_data.get('username')
  password = json_data.get('password')
  user = authenticate(username=username, password=password)
  if user is not None:
    login(request, user)
    return JsonResponse({'ok': True})
  else: 
    return JsonResponse({'ok': False})

