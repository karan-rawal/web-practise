from rest_framework import serializers
from rest_framework.exceptions import ValidationError
from .models import Account

class AccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = Account
        fields = ('first_name', 'last_name', 'email', 'username', 'date_joined')

class AccountRegistrationSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only = True)
    confirm_password = serializers.CharField(write_only = True, max_length = 128)

    class Meta:
        model = Account
        fields = ('first_name', 'last_name', 'email', 'username', 'password', 'confirm_password', 'date_joined')

    def create(self, validated_data):
        del validated_data['confirm_password']
        password = validated_data['password']
        del validated_data['password']

        account = Account(**validated_data)
        account.set_password(password)
        account.save()

        return account

    def validate(self, attrs):
        password = attrs['password']
        confirm_password = attrs['confirm_password']

        if(password != confirm_password):
            raise ValidationError("Passwords do not match")
            
        return attrs
