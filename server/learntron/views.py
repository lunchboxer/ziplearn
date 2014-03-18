from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from learntron.serializers import (UserSerializer, GroupSerializer,
                                   LessonSerializer, SlideSerializer)
from learntron.models import Lesson, Slide


class UserViewSet(viewsets.ModelViewSet):
    """
    View or edut users.
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer


class GroupViewSet(viewsets.ModelViewSet):
    """
    View or edit groups
    """
    queryset = Group.objects.all()
    serializer_class = GroupSerializer


class LessonViewSet(viewsets.ModelViewSet):
    """
    View or edit lessons
    """
    queryset = Lesson.objects.all()
    serializer_class = LessonSerializer


class SlideViewSet(viewsets.ModelViewSet):
    """
    View or edit slides
    """
    queryset = Slide.objects.all()
    serializer_class = SlideSerializer
