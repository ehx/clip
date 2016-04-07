from rest_framework.permissions import BasePermission, SAFE_METHODS

class IsOwnerOrReadOnly(BasePermission):
	def has_object_permission(self, request, view, obj):
		delete = False;

		if request.method in SAFE_METHODS:
			return True

		if hasattr(obj, 'client'):
			if obj.client == request.user:
				delete = True

		return (obj.user == request.user) | delete