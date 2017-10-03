from rest_framework import serializers
from .models import Account

class AccountSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only = True)
    confirm_password = serializers.CharField(write_only = True)

    class Meta:
        model = Account
        fields = ('first_name', 'last_name', 'email', 'username', 'password', 'confirm_password', 'date_joined')