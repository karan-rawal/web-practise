from django.db import models
from django.contrib.auth.models import AbstractUser, User

# Create your models here.
class Account(AbstractUser):
    first_name = models.CharField(max_length = 100, null = False, blank = False)