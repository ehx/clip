# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import datetime
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('task', '0020_auto_20160719_1136'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='tip',
            name='dtime',
        ),
        migrations.AddField(
            model_name='todo',
            name='dtime',
            field=models.DateTimeField(default=datetime.datetime(2016, 7, 19, 14, 40, 9, 748971, tzinfo=utc)),
            preserve_default=False,
        ),
    ]
