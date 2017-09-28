from django.conf.urls import url
from .views import AccountView

urlpatterns = [
    url(r'^$', AccountView.as_view())
]