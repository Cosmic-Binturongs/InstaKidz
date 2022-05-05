from rest_framework import viewsets, permissions
from rest_framework.views import APIView
from .serializers import UserSerializer, PhotoSerializer
from django.contrib.auth.models import User
from .models import Photo, Profile
from django.utils.decorators import method_decorator

class PhotoViewSet(viewsets.ModelViewSet):
    queryset = Photo.objects.all()
    serializer_class = PhotoSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

import json

from django.contrib.auth import authenticate, login, logout
from django.http import JsonResponse
from django.views.decorators.csrf import ensure_csrf_cookie, csrf_protect
from django.views.decorators.http import require_POST

@method_decorator(csrf_protect, name='dispatch')
class signup_view(APIView):
  permission_classes = (permissions.AllowAny, )

  def post(self, request, format=None):
    data = self.request.data

    username = data['username']
    password = data['password']
    re_password = data['re_password']

    if password == re_password:
      if User.objects.filter(username=username).exists():
        return JsonResponse({'error': 'Sorry pal, that username is already taken'})
      else: 
        if len(password) < 6:
          return JsonResponse({'error': 'that password is too short buddy. It needs to be longer than 6 characters'})
        else:
          user = User.objects.create_user(username=username, password=password)

          user.save()

          user = User.objects.get(username=username)

          user_profile = Profile(user, bio='', pronouns='', parents_email='', birthday='')
          user_profile.save()

          return JsonResponse({'success': 'user created successfully'})

    else: 
      return JsonResponse({'error': 'the passwords do not match'})


@method_decorator(ensure_csrf_cookie, name='dispatch')
class GetCSRFToken(APIView):
  permission_classes = (permissions.AllowAny, )

  def get(self, request, format=None):
    return JsonResponse({'success': 'CSRF cookie set'})

@require_POST
def login_view(request):
    data = json.loads(request.body)
    username = data.get('username')
    password = data.get('password')

    if username is None or password is None:
        return JsonResponse({'detail': 'Please provide username and password.'}, status=400)

    user = authenticate(username=username, password=password)

    if user is None:
        return JsonResponse({'detail': 'Invalid credentials.'}, status=400)

    login(request, user)
    return JsonResponse({'detail': 'Successfully logged in.'})


def logout_view(request):
    if not request.user.is_authenticated:
        return JsonResponse({'detail': 'You\'re not logged in.'}, status=400)

    logout(request)
    return JsonResponse({'detail': 'Successfully logged out.'})


#@ensure_csrf_cookie
def session_view(request):
    if not request.user.is_authenticated:
        return JsonResponse({'isAuthenticated': False})

    return JsonResponse({'isAuthenticated': True})


def whoami_view(request):
    if not request.user.is_authenticated:
        return JsonResponse({'isAuthenticated': False})

    return JsonResponse({'username': request.user.username})