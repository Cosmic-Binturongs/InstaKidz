from django.contrib import admin
from django.urls import path, include
from rest_framework import routers

from .views import CheckAuthView, UserViewSet, PhotoViewSet, login_view, logout_view, signup_view, GetCSRFToken

router = routers.DefaultRouter()
router.register(r'photo', PhotoViewSet)
router.register(r'user', UserViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('sign-up/', signup_view.as_view()),
    path('csrf-cookie/', GetCSRFToken.as_view()),
    path('login/', login_view.as_view()),
    path('logout/', logout_view.as_view()),
    path('test/', CheckAuthView.as_view())
]
