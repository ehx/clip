# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('task', '0010_auto_20160517_1418'),
    ]

    operations = [
        migrations.AddField(
            model_name='task',
            name='om',
            field=models.CharField(max_length=100, null=True, verbose_name=b'Responsable OyP'),
        ),
    ]
