# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('task', '0016_auto_20160610_1650'),
    ]

    operations = [
        migrations.RenameField(
            model_name='tip',
            old_name='category',
            new_name='title',
        ),
        migrations.AlterField(
            model_name='tip',
            name='description',
            field=models.CharField(max_length=2000, verbose_name=b'Descripcion'),
        ),
    ]
