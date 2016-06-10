# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('task', '0014_tip_color'),
    ]

    operations = [
        migrations.AlterField(
            model_name='tip',
            name='color',
            field=models.CharField(default=b'#F5F5F5', max_length=7, verbose_name=b'Color'),
        ),
    ]
