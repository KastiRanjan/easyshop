from django.shortcuts import render
from rest_framework import generics, status
from rest_framework.response import Response
from .serializers import RegisterSerializer
from .models import User
from .utils import Util
from django.contrib.sites.shortcuts import get_current_site
from django.urls import reverse
from rest_framework.authtoken.models import Token

# Create your views here.


class RegisterView(generics.GenericAPIView):
    serializer_class = RegisterSerializer

    def post(self, request):
        data = {}
        user = request.data
        serializer = self.serializer_class(data=user)
        serializer.is_valid(raise_exception=True)
        account = serializer.save()
        data['response'] = "successfully created new user"
        data['username'] = account.username
        data['email'] = account.email
        token = Token.objects.get(user=account).key
        data['token'] = token

        return Response(data, status.HTTP_201_CREATED)
