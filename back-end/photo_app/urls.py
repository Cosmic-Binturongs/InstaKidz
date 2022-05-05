from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from .views import UserViewSet, PhotoViewSet, login_view, logout_view, session_view, whoami_view
#from django.contrib.auth.views import login

router = routers.DefaultRouter()
router.register(f'photo', PhotoViewSet)
router.register(f'user', UserViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('login/', login_view, name='user-login'),
    path('logout/', logout_view, name='user-logout'),
    path('session/', session_view, name='user-session'),
    path('whoami/', whoami_view, name='user-whoami'),

]
