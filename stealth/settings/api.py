from settings.models import ContactInfo
from rest_framework import viewsets, permissions
from .serializers import ContactInfoSerializer

# Contact Info Viewset


class ContactInfoViewset(viewsets.ModelViewSet):
    queryset = ContactInfo.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]

    serializer_class = ContactInfoSerializer
