from .models import Account
from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework_friendly_errors.mixins import FriendlyErrorMessagesMixin

class AccountSerializer(FriendlyErrorMessagesMixin, serializers.ModelSerializer):

    password = serializers.CharField(write_only = True)
    confirm_password = serializers.CharField(write_only = True)

    class Meta:
        model = Account
        fields = [
            'first_name',
            'last_name',
            'email',
            'username',
            'password',
            'phone',
            'confirm_password',
            'date_joined'
            ]
        read_only_fields = ['date_joined']

    def create(self, validated_data):
        acc = Account(**validated_data)
        acc.save();
        return acc
    
    def validate(self, attrs):
        password = attrs.get('password')
        confirm_password = attrs.pop('confirm_password')

        if(password != confirm_password):
            raise serializers.ValidationError('Passwords do not match')
        
        return attrs

    NON_FIELD_ERRORS = {'Passwords do not match': 5000}