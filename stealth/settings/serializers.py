from rest_framework import serializers
from stealth.settings.models import ContactInfo


class ContactInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactInfo
        fields = '__all__'
