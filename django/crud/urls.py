from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('api/people', views.get_people, name='get_people'),
    path('api/person/<int:person_id>', views.get_person, name='get_person'),
]
