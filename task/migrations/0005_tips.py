# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
from django.conf import settings


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('task', '0004_userprofile_avatar'),
    ]

    operations = [
        migrations.CreateModel(
            name='Tips',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('category', models.CharField(max_length=255, verbose_name=b'Descripcion')),
                ('description', models.CharField(max_length=255, verbose_name=b'Descripcion')),
                ('user', models.ForeignKey(related_name='tips_owner', verbose_name=b'Usuario', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
