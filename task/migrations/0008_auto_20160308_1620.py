# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('task', '0007_auto_20160224_1502'),
    ]

    operations = [
        migrations.AddField(
            model_name='taskcomment',
            name='favourite',
            field=models.BooleanField(default=0, verbose_name=b'Favorito'),
        ),
        migrations.AlterField(
            model_name='tip',
            name='category',
            field=models.CharField(max_length=255, verbose_name=b'Categoria'),
        ),
    ]
