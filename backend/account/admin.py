from django.contrib import admin
from .models import User,Batch_Section

# Register your models here.
@admin.register(Batch_Section)
class BatchSectionAdmin(admin.ModelAdmin):
    list_display=("name",)
    list_filter=("is_active",)
    search_fields=("name",)


admin.site.register(User)