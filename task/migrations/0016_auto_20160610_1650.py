# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('task', '0015_auto_20160610_1634'),
    ]

    operations = [
        migrations.AlterField(
            model_name='tip',
            name='category',
            field=models.CharField(unique=True, max_length=255, verbose_name=b'Categoria'),
        ),
    ]
