# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('task', '0005_tips'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Tips',
            new_name='Tip',
        ),
    ]
