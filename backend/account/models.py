from django.db import models
from django.contrib.auth.models import AbstractUser
from account.managers import CustomUserManager


# Create your models here.

class Batch_Section(models.Model):
    name=models.CharField(max_length=50)
    is_active=models.BooleanField(default=False)


    def __str__(self):
        return self.name
    


class User(AbstractUser):

    class Role(models.TextChoices):
        Teacher="Teacher","teacher"
        Student="Student","student"


    username=None
    email=models.EmailField(max_length=254,unique=True)
    student_id=models.CharField(max_length=20,unique=True)
    is_active=models.BooleanField(default=False)

    role=models.CharField(
        max_length=50,
        choices=Role.choices,
        default=Role.Student
        
        )
    
    batch_section=models.ForeignKey(Batch_Section, on_delete=models.PROTECT,related_name="user",null=True,blank=True)

    USERNAME_FIELD='email'
    REQUIRED_FIELDS=["student_id"]

    objects=CustomUserManager()

    def __str__(self):
        return f'{self.id} - {self.role}'
    