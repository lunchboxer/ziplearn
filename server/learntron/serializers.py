from django.contrib.auth.models import User, Group
from rest_framework import serializers
from learntron.models import Lesson, Slide


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('url', 'username', 'email', 'groups')


class GroupSerializer(serializers.HyperlinkedModelSerializer):
    users = UserSerializer(many=True)

    class Meta:
        model = Group
        fields = ('url', 'name', 'users')


class SlideSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Slide


class LessonSerializer(serializers.HyperlinkedModelSerializer):
    slides = SlideSerializer(many=True)

    class Meta:
        model = Lesson
        fields = ('title', 'created_by', 'created_time', 'last_edited',
                  'modified_by', 'slides')
