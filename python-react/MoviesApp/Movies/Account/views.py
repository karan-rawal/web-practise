from django.shortcuts import render
from rest_framework.views import APIView
from .models import Account
from .serializers import AccountSerializer
from rest_framework.response import Response
from rest_framework import status

# Create your views here.
class AccountView(APIView):
    def get(self, request):
        accounts = Account.objects.all()
        serializer = AccountSerializer(accounts, many = True)
        return Response(serializer.data, status.HTTP_200_OK)
