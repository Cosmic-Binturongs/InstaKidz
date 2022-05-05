from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from .views import UserViewSet, PhotoViewSet

router = routers.DefaultRouter()
router.register(r'photo', PhotoViewSet)
router.register(r'user', UserViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
