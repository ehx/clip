# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('task', '0012_auto_20160530_1520'),
    ]

    operations = [
        migrations.AlterField(
            model_name='task',
            name='module',
            field=models.ForeignKey(verbose_name=b'Modulo', to='task.Module'),
        ),
    ]
