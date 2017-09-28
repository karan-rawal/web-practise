from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class Account(AbstractUser):
    phone = models.CharField(max_length = 20, null = False, blank = False)
    REQUIRED_FIELDS = ['email', 'phone', 'first_name']

    def __str__(self):
        return "{} ({}) - {}".format(self.username, self.first_name, self.email)