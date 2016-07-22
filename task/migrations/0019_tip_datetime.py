# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import datetime
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('task', '0018_auto_20160718_1658'),
    ]

    operations = [
        migrations.AddField(
            model_name='tip',
            name='datetime',
            field=models.DateTimeField(default=datetime.datetime(2016, 7, 19, 14, 32, 40, 432994, tzinfo=utc)),
            preserve_default=False,
        ),
    ]
