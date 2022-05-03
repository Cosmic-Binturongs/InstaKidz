from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from .views import PhotoViewSet

router = routers.DefaultRouter()
router.register(r'user', PhotoViewSet)

urlpatterns = [
  path('', include(router.urls)),
  path('admin/', admin.site.urls)
]
