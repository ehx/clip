#!/usr/bin/python
# -*- coding: utf-8 -*-

from rest_framework import filters, generics, routers
from django.conf.urls import include, url
from django.contrib import admin
from viewsets import *
from rest_framework_jwt.views import obtain_jwt_token
from rest_framework_jwt.views import refresh_jwt_token
from rest_framework_jwt.views import verify_jwt_token

router = routers.DefaultRouter()
router.register(r'task', TaskViewSet)
router.register(r'organization', OrganizationViewSet)
router.register(r'taskComment', TaskCommentViewSet)
router.register(r'users', UserViewSet)
router.register(r'notification', NotificationViewSet)
router.register(r'todo', TodoViewSet)
router.register(r'module', ModuleViewSet)
router.register(r'status', StatusViewSet)
router.register(r'urgency', UrgencyViewSet)
router.register(r'userClient', UserClientViewSet)
router.register(r'message', MessageViewSet)
router.register(r'userProfile', UserProfileViewSet)
router.register(r'milestone', MilestoneViewSet)
router.register(r'tip', TipViewSet)

urlpatterns = [
    url(r'^', include(router.urls)),
    url(r'^admin/', include(admin.site.urls)),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    url(r'^auth/', include('djoser.urls.authtoken')),
    url(r'^api-token-auth/', obtain_jwt_token),
    url(r'^api-token-refresh/', refresh_jwt_token),
    url(r'^api-token-verify/', verify_jwt_token),
]