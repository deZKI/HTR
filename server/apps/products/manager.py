from django.db import models


class AvailableProductManager(models.Manager):
    def get_queryset(self):
        return super().get_queryset().filter(is_available=True)
