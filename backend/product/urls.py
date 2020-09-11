from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from .views import ProductViewSet

router = routers.DefaultRouter()
router.register('', ProductViewSet)


urlpatterns = [
    path('', include(router.urls))
]