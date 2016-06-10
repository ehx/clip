# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('task', '0013_auto_20160531_1107'),
    ]

    operations = [
        migrations.AddField(
            model_name='tip',
            name='color',
            field=models.CharField(default=b'#000', max_length=7, verbose_name=b'Color'),
        ),
    ]
