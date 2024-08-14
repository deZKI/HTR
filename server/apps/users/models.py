from django.db import models
from django.contrib.auth.models import AbstractUser


class UserExtended(AbstractUser):
    """ Пользователь (расширенная модель) """
    phone_number = models.CharField(max_length=50, unique=True, verbose_name='Номер телефона', blank=True, null=True)
    birth_date = models.DateField(verbose_name='Дата рождения', blank=True, null=True)
    REQUIRED_FIELDS = []

    def __str__(self):
        return self.first_name + ' ' + self.last_name

    class Meta:
        verbose_name = "Пользователь"
        verbose_name_plural = "Пользователи"
        ordering = ["-id", ]
