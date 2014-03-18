from django.db import models
from django.contrib.auth.models import User


class Lesson(models.Model):
    title = models.CharField(max_length=40, unique=True)
    created_by = models.ForeignKey(User, related_name='lesson_createdby')
    modified_by = models.ForeignKey(User, related_name='lesson_modifiedby')
    created_time = models.DateTimeField(auto_now_add=True)
    last_edited = models.DateTimeField(auto_now=True)

    def __unicode__(self):
        return self.title

    class Meta:
        ordering = ['created_time']


class Note(models.Model):
    lesson = models.ForeignKey(Lesson)
    content = models.TextField()
    created_by = models.ForeignKey(User, related_name='note_createdby')
    modified_by = models.ForeignKey(User, related_name='note_modifiedby')
    created_time = models.DateTimeField(auto_now_add=True)
    last_edited = models.DateTimeField(auto_now=True)

    def __unicode__(self):
        content_trunc = self.content[:85] + (self.content[81:] and '...')
        return content_trunc


class Slide(models.Model):
    lesson = models.ForeignKey(Lesson, related_name='slides')
    content = models.TextField()

    def __unicode__(self):
        content_trunc = self.content[:65] + (self.content[61:] and '...')
        return content_trunc

    class Meta:
        order_with_respect_to = "lesson"


class Poll(models.Model):
    question = models.CharField(max_length=200)

    def __unicode__(self):
        return self.question


class Choice(models.Model):
    poll = models.ForeignKey(Poll)
    choice_text = models.CharField(max_length=200)

    def __unicode__(self):
        return self.choice_text


class Answer(models.Model):
    poll = models.ForeignKey(Poll)
    choice = models.ForeignKey(Choice)
    user = models.ForeignKey(User)
    timestamp = models.DateTimeField(auto_now=True)

    def __unicode__(self):
        return self.choice.choice_text
