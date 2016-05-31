# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('task', '0011_task_om'),
    ]

    operations = [
        migrations.AlterField(
            model_name='task',
            name='om',
            field=models.CharField(max_length=100, verbose_name=b'Responsable OyP', blank=True),
        ),
    ]
