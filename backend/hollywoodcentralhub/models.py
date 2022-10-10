from django.db import models

# Create your models here.

class parkreservation(models.Model):
    image = models.ImageField()
    parkname = models.CharField(max_length=100)
    address = models.CharField(max_length=100)
    pavillion = models.PositiveIntegerField()

    def __str__(self) -> str:
        return self.name