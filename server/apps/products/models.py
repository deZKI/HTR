from django.db import models

from .manager import AvailableProductManager


class Category(models.Model):
    name = models.CharField(max_length=255, unique=True, verbose_name="Название")

    class Meta:
        verbose_name = "Категория"
        verbose_name_plural = "Категории"

    def __str__(self):
        return self.name


class Subcategory(models.Model):
    name = models.CharField(max_length=255, verbose_name="Название")
    category = models.ForeignKey(Category, related_name='subcategories', on_delete=models.CASCADE,
                                 verbose_name="Категория")

    class Meta:
        verbose_name = "Подкатегория"
        verbose_name_plural = "Подкатегории"

    def __str__(self):
        return f"{self.category.name} - {self.name}"


class Brand(models.Model):
    name = models.CharField(max_length=255, unique=True, verbose_name="Название")

    class Meta:
        verbose_name = "Бренд"
        verbose_name_plural = "Бренды"

    def __str__(self):
        return self.name


class Color(models.Model):
    name = models.CharField(max_length=50, unique=True, verbose_name="Название")

    class Meta:
        verbose_name = "Цвет"
        verbose_name_plural = "Цвета"

    def __str__(self):
        return self.name


class ProductType(models.Model):
    name = models.CharField(max_length=50, unique=True, verbose_name="Название")

    class Meta:
        verbose_name = "Тип товара"
        verbose_name_plural = "Типы товаров"

    def __str__(self):
        return self.name


class Material(models.Model):
    name = models.CharField(max_length=255, unique=True, verbose_name="Название")

    class Meta:
        verbose_name = "Материал"
        verbose_name_plural = "Материалы"

    def __str__(self):
        return self.name


class Size(models.Model):
    name = models.CharField(max_length=50, unique=True, verbose_name="Название")

    class Meta:
        verbose_name = "Размер"
        verbose_name_plural = "Размеры"

    def __str__(self):
        return self.name


class Product(models.Model):
    """ Товары """
    objects = AvailableProductManager()
    full_objects = models.Manager()

    brand = models.ForeignKey(Brand, related_name='products', on_delete=models.CASCADE, verbose_name="Бренд")
    price = models.PositiveIntegerField(verbose_name='Цена', default=0)
    name = models.CharField(max_length=255, verbose_name="Название")
    sku = models.CharField(max_length=50, unique=True, verbose_name="Артикул")
    color = models.ManyToManyField(Color, related_name='products', blank=True, verbose_name="Цвет")
    product_type = models.ForeignKey(ProductType, related_name='products', on_delete=models.CASCADE, verbose_name="Тип")
    material = models.ManyToManyField(Material, related_name='products', blank=True, verbose_name="Материалы")
    sizes = models.ManyToManyField(Size, related_name='products', blank=True, verbose_name="Размеры")
    subcategories = models.ManyToManyField(Subcategory, related_name='products', verbose_name="Подкатегории")
    is_top_list = models.BooleanField(default=False, verbose_name="В топ листе")
    is_new_in = models.BooleanField(default=False, verbose_name="Новинка")
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="Дата добавления")
    is_available = models.BooleanField(default=False, verbose_name="Доступен")

    class Meta:
        verbose_name = "Товар"
        verbose_name_plural = "Товары"

    def __str__(self):
        return self.name


class ProductImage(models.Model):
    product = models.ForeignKey(Product, related_name='images', on_delete=models.CASCADE, verbose_name="Товар")
    image = models.ImageField(upload_to='products/images/', verbose_name="Изображение")
    alt_text = models.CharField(max_length=255, blank=True, null=True, verbose_name="Альтернативный текст")

    class Meta:
        verbose_name = "Изображение товара"
        verbose_name_plural = "Изображения товаров"

    def __str__(self):
        return f"{self.product.name} Image"
