from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from django.utils.translation import gettext_lazy as _

from apps.users.models import UserExtended


@admin.register(UserExtended)
class UserExtendedAdmin(UserAdmin):
    """ Админка пользователя """

    list_display = ('id', 'first_name', 'last_name',)
    fieldsets = (
        (None, {'fields': ('username', 'password',)}),
        (_('Personal info'), {
            'fields': (
                'first_name', 'last_name', 'photo'
            )}
         ),
        (_("Permissions"), {
            "fields": (
                "is_active", "is_superuser",
            )},
         ),
        (_("Дополнительная информация"), {
            'fields': (
            )},
         ),
        (_("Important dates"), {"fields": ("last_login", "date_joined")}),
    )
