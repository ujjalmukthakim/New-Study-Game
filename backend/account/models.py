from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.

class Batch_Section(models.Model):
    name=models.CharField(max_length=50)


    def __str__(self):
        return self.name
    


class User(AbstractUser):

    class Role(models.TextChoices):
        Teacher="Teacher","teacher"
        Student="Student","student"


    username=None
    email=models.EmailField(max_length=254)
    id=models.IntegerField(max_length=20)

    role=models.CharField(
        max_length=50,
        choices=Role.choices,
        default=Role.Student
        
        )
    
    batch_section=models.ForeignKey(Batch_Section, on_delete=models.PROTECT,related_name="user")

    USERNAME_FIELD='email'
    REQUIRED_FIELDS=["id"]