from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from .views import UserViewSet, PhotoViewSet #, #login_view, get_csrf_token, CheckAuth
#from django.contrib.auth.views import login

router = routers.DefaultRouter()
router.register(f'photo', PhotoViewSet)
router.register(f'user', UserViewSet)

urlpatterns = [
    path('', include(router.urls)),
  #  path('login/', login, name='login'),
    #path('get-csrf-token/', get_csrf_token)
]
