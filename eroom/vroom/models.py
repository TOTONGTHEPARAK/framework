from django.db import models

class Video(models.Model):
    title = models.CharField(max_length=255, blank=False)
    published_date = models.DateField()
    short_detail = models.CharField(max_length=300, blank=True)
    demo = models.BooleanField(default=False)

class Author(models.Model):
    id = models.CharField(max_length=13, primary_key=True)
    firstname = models.CharField(max_length=255, blank=False)
    lastname = models.CharField(max_length=255, blank=False)
    phone = models.CharField(max_length=10, blank=True)
    joined_date = models.DateField()
