# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
from django.conf import settings


class Migration(migrations.Migration):

    dependencies = [
        ('task', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='milestone',
            name='owner',
            field=models.ForeignKey(related_name='milestone_owner', verbose_name=b'Usuario', to=settings.AUTH_USER_MODEL),
        ),
    ]
