# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('task', '0002_auto_20160210_1717'),
    ]

    operations = [
        migrations.RenameField(
            model_name='milestone',
            old_name='owner',
            new_name='user',
        ),
    ]
