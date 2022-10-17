from django.db.models import fields
from .models import parkreservation
from rest_framework import serializers

class parkserializer(serializers.ModelSerializer):
    class Meta:
        model = parkreservation
        fields = ('parkname', 'address', 'pavillion')