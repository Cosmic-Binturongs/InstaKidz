from django.contrib import admin
from django.urls import path, include
from rest_framework import routers

from .views import CheckAuthView, UserViewSet, PhotoViewSet, login_view, logout_view, session_view, whoami_view, signup_view, GetCSRFToken

router = routers.DefaultRouter()
router.register(f'photo', PhotoViewSet)
router.register(f'user', UserViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('sign-up/', signup_view.as_view()),
    path('csrf-cookie/', GetCSRFToken.as_view()),
    path('login/', login_view.as_view()),
    path('logout/', logout_view.as_view()),
    path('test/', CheckAuthView.as_view())
    # path('session/', session_view, name='user-session'),
    # path('whoami/', whoami_view, name='user-whoami'),

]
