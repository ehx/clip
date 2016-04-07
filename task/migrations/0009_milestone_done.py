# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('task', '0008_auto_20160308_1620'),
    ]

    operations = [
        migrations.AddField(
            model_name='milestone',
            name='done',
            field=models.BooleanField(default=0, verbose_name=b'Completado'),
        ),
    ]
