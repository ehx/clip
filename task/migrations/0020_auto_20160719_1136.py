# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('task', '0019_tip_datetime'),
    ]

    operations = [
        migrations.RenameField(
            model_name='tip',
            old_name='datetime',
            new_name='dtime',
        ),
    ]
