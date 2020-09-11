from django.db import models

# Create your models here.


class Product(models.Model):
    PRODUCT_CATEGORY = (
        ('mn', 'men'),
        ('wn', 'women'),
        ('ch', 'child')
    )

    name = models.CharField(max_length=50, null=False, blank=False)
    price = models.IntegerField(null=False, blank=False)
    discount = models.IntegerField(null=False, blank=False)
    category = models.CharField(
        max_length=2, choices=PRODUCT_CATEGORY, default='')
    description = models.CharField(max_length=50, null=False, blank=False)
    image = models.ImageField(upload_to='images/', blank=True, null=True)

    def __str__(self):
        return self.name
