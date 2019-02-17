from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse

from .models import Person

def index(request):
    return HttpResponse("testing first crud view")

def get_people(request):
    people = Person.objects.all()
    context = {
        'people': people,        
    }
    # takes request object, template name, context dict; returns HttpResponse object
    print(people)
    print("people")
    return render(request, 'crud/index.html', context)

def get_person(request,person_id):
    person = get_object_or_404(Person, pk=person_id)
    return HttpResponse("their name is " + person.name)

