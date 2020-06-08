from django.db import models

# Create your models here.


class ContactInfo(models.Model):
    firstName = models.CharField("First Name", max_length=50)
    lastName = models.CharField("Last Name", max_length=50)
    restoreEmail = models.EmailField("Restore Email", max_length=100)
    mobilePhone = models.CharField("Mobile Phone", max_length=20)
    countryAbbreviation = models.CharField(
        "Country Abbreviation", max_length=2)
    created_at = models.DateField("Created At", auto_now_add=True)
    lastUpdate = models.DateField("Last Updated", auto_now=True)
