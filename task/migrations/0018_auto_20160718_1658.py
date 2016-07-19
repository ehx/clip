# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('task', '0017_auto_20160610_1732'),
    ]

    operations = [
        migrations.AlterField(
            model_name='tip',
            name='description',
            field=models.CharField(max_length=5000, verbose_name=b'Descripcion'),
        ),
    ]
