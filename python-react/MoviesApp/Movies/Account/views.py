from django.shortcuts import render
from rest_framework.views import APIView
from .models import Account
from .serializers import AccountSerializer, AccountRegistrationSerializer
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import AllowAny

# Create your views here.
class AccountView(APIView):
    def get(self, request):
        accounts = Account.objects.all()
        serializer = AccountSerializer(accounts, many = True)
        return Response(serializer.data, status.HTTP_200_OK)

class AccountRegistrationView(APIView):
    permission_classes = (AllowAny,)
    def post(self, request):
        serializer = AccountRegistrationSerializer(data = request.data)
        if(serializer.is_valid()):
            serializer.save()
            return Response(serializer.data, status.HTTP_200_OK)
        return Response(serializer.errors, status.HTTP_400_BAD_REQUEST)