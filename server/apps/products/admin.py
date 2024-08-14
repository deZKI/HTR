from django.contrib import admin

from image_uploader_widget.admin import ImageUploaderInline

from .models import Brand, Color, ProductType, Material, Size, Category, Subcategory, Product, ProductImage


class ProductImageInline(ImageUploaderInline):
    model = ProductImage
    extra = 1  # Количество пустых полей для добавления новых изображений


class ProductAdmin(admin.ModelAdmin):
    inlines = [ProductImageInline]
    list_display = ('name', 'brand', 'sku', 'is_top_list', 'is_new_in')
    list_filter = ('is_top_list', 'is_new_in', 'subcategories', 'brand', 'color', 'product_type')
    search_fields = ('name', 'sku')


admin.site.register(Brand)
admin.site.register(Color)
admin.site.register(ProductType)
admin.site.register(Material)
admin.site.register(Size)
admin.site.register(Category)
admin.site.register(Subcategory)
admin.site.register(Product, ProductAdmin)
admin.site.register(ProductImage)
