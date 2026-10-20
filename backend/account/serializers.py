from rest_framework import serializers
from .models import User,Batch_Section

class RegistrationSerializer(serializers.ModelSerializer):
    password=serializers.CharField(write_only=True,min_length=8)

    batch_section=serializers.PrimaryKeyRelatedField(
        queryset=Batch_Section.objects.filter(is_active=True)
    )

    class Meta:
        model =User
        fields=[
            "id",
            "email",
            "password",
            "first_name",
            "last_name",
            "student_id",
            "role",
            "batch_section",

        ]
        read_only_fields=["id"]

        def create(self,**validated_data):
            password=validated_data.pop("password")
            user=User.objects.create_user(
                password=password,
                is_active=False,
                **validated_data
            )
            return user