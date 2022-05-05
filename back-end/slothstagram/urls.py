from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from rest_framework import routers
from photo_app.views import PhotoViewSet, UserViewSet

router = routers.DefaultRouter()
router.register(f'photo', PhotoViewSet)
router.register(f'user', UserViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('photo_app/', include('photo_app.urls')),

]
