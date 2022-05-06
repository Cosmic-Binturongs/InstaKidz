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


@method_decorator(csrf_protect, name="dispatch")
class CheckAuthView(APIView):
    def get(self, request, format=None):
        try:
            isAuthenticated = User.is_authenticated

            if isAuthenticated:
                return JsonResponse({"isAuthenticated": "success"})
            else:
                return JsonResponse({"isAuthenticated": "error"})
        except:
            return JsonResponse(
                {"error": "something went wrong when checking authentication status"}
            )


@method_decorator(csrf_protect, name="dispatch")
class signup_view(APIView):
    permission_classes = (permissions.AllowAny,)

    def post(self, request, format=None):
        data = self.request.data

        username = data["username"]
        password = data["password"]
        re_password = data["re_password"]

        try:
            if password == re_password:
                if User.objects.filter(username=username).exists():
                    return JsonResponse(
                        {"error": "Sorry pal, that username is already taken"}
                    )
                else:
                    if len(password) < 6:
                        return JsonResponse(
                            {
                                "error": "that password is too short buddy. It needs to be longer than 6 characters"
                            }
                        )
                    else:
                        user = User.objects.create_user(
                            username=username, password=password
                        )

                        user.save()

                        user = User.objects.get(id=user.id)

                        user_profile = Profile(
                            user=user,
                            bio="",
                            pronouns="",
                            parents_email="",
                            birthday="",
                        )
                        user_profile.save()

                        return JsonResponse({"success": "user created successfully"})

            else:
                return JsonResponse({"error": "the passwords do not match"})
        except:
            return JsonResponse({"error": "something went wrong when signing up"})


@method_decorator(ensure_csrf_cookie, name="dispatch")
class GetCSRFToken(APIView):
    permission_classes = (permissions.AllowAny,)

    def get(self, request, format=None):
        return JsonResponse({"success": "CSRF cookie set"})


@method_decorator(csrf_protect, name="dispatch")
class login_view(APIView):
    permission_classes = (permissions.AllowAny,)

    def post(self, request, format=None):
        data = self.request.data
        username = data["username"]
        password = data["password"]

        try:
            user = authenticate(username=username, password=password)

            if user is not None:
                login(request, user)
                return JsonResponse(
                    {"success": "User authenticated", "username": username}
                )
            else:
                return JsonResponse({"error": "error authenticating"})
        except:
            return JsonResponse({"error": "something went wrong when logging in"})


class logout_view(APIView):
    def post(self, request, format=None):
        try:
            logout(request)
            return JsonResponse({"success": "logged out"})
        except:
            return JsonResponse({"error": "something went wrong when logging out"})
