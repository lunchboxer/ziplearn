from django.contrib import admin
from learntron.models import Lesson, Slide, Poll, Choice, Answer, Note


class SlideInline(admin.StackedInline):
    model = Slide
    extra = 10


class LessonAdmin(admin.ModelAdmin):
    date_hierarchy = 'created_time'
    exclude = ('created_time', 'created_by', 'modified_by')
    list_display = ('title', 'created_time', 'created_by', 'last_edited',
                    'modified_by')
    inlines = [SlideInline]
    save_on_top = True

    def save_model(self, request, instance, form, change):
        user = request.user
        instance = form.save(commit=False)
        if not change or not instance.created_by:
            instance.created_by = user
        instance.modified_by = user
        instance.save()
        form.save_m2m()
        return instance


class SlideAdmin(admin.ModelAdmin):
    list_display = ('_order', 'lesson', '__unicode__')
    list_filter = ('lesson',)
    ordering = ['lesson', '_order']


class NoteAdmin(admin.ModelAdmin):
    exclude = ('created_time', 'created_by', 'modified_by')
    list_display = ('lesson', '__unicode__')

    def save_model(self, request, instance, form, change):
        user = request.user
        instance = form.save(commit=False)
        if not change or not instance.created_by:
            instance.created_by = user
        instance.modified_by = user
        instance.save()
        form.save_m2m()
        return instance


class ChoiceInline(admin.StackedInline):
    model = Choice
    extra = 4


class ChoiceAdmin(admin.ModelAdmin):
    list_display = ('choice_text', 'poll')
    list_filter = ('poll',)


class PollAdmin(admin.ModelAdmin):
    inlines = [ChoiceInline]


class AnswerAdmin(admin.ModelAdmin):
    list_display = ('choice', 'poll', 'user', 'timestamp')

admin.site.register(Lesson, LessonAdmin)
admin.site.register(Slide, SlideAdmin)
admin.site.register(Note, NoteAdmin)
admin.site.register(Poll, PollAdmin)
admin.site.register(Choice, ChoiceAdmin)
admin.site.register(Answer, AnswerAdmin)
