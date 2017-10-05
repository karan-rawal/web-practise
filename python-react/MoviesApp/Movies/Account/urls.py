from django.conf.urls import url
from .views import AccountView, AccountRegistrationView
from rest_framework_jwt.views import obtain_jwt_token, refresh_jwt_token, verify_jwt_token

urlpatterns = [
    url(r'^$', AccountView.as_view()),
    url(r'^auth/login', obtain_jwt_token),
    url(r'^auth/token-refresh/', refresh_jwt_token),
    url(r'^auth/token-verify/', verify_jwt_token),
    url(r'^auth/register', AccountRegistrationView.as_view())
]