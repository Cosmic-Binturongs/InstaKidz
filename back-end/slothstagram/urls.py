from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from rest_framework import routers

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('photo_app.urls')),
]
