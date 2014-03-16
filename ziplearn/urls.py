from django.conf.urls import patterns, include, url
from learntron import views
from rest_framework import routers

from django.contrib import admin

admin.autodiscover()

router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet)
router.register(r'groups', views.GroupViewSet)
router.register(r'lessons', views.LessonViewSet)
router.register(r'slides', views.SlideViewSet)


urlpatterns = patterns(
    '',
    url(r'^admin/', include(admin.site.urls)),
    url(r'^api/', include(router.urls)),
    url(r'^api-auth/', include('rest_framework.urls',
        namespace='rest_framework'))
)
