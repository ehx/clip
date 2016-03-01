# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import datetime
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('task', '0006_auto_20160224_1443'),
    ]

    operations = [
        migrations.AddField(
            model_name='tip',
            name='created_at',
            field=models.DateTimeField(default=datetime.datetime(2016, 2, 24, 18, 2, 1, 823147, tzinfo=utc), auto_now_add=True),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='tip',
            name='updated_at',
            field=models.DateTimeField(default=datetime.datetime(2016, 2, 24, 18, 2, 10, 831096, tzinfo=utc), auto_now=True),
            preserve_default=False,
        ),
    ]
