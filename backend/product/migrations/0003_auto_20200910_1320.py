# Generated by Django 3.1 on 2020-09-10 13:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0002_auto_20200910_1307'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to='images/'),
        ),
        migrations.AlterField(
            model_name='product',
            name='category',
            field=models.CharField(choices=[('mn', 'men'), ('wn', 'women'), ('ch', 'child')], default='', max_length=2),
        ),
    ]