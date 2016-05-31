# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('task', '0009_milestone_done'),
    ]

    operations = [
        migrations.AlterField(
            model_name='task',
            name='identificator',
            field=models.CharField(max_length=30, verbose_name=b'Incidente', blank=True),
        ),
    ]
