from django.shortcuts import render
from django.template import loader
from vroom.models import Video,Author
# Create your views here.

from django.http import HttpResponse

import datetime
def myname(request):
    html = "<html><body>Your name"
    return HttpResponse(html)

import datetime
def current_datetime(request):
    now = datetime.datetime.now()
    html = "<html><body>It is now %s.</body></html>" % now
    return HttpResponse(html)

def current_datetime_template(request):
    now = datetime.datetime.now()
    context = { "now": now}
    return render(request, 'daytemplate.html', context)

def get_video(request):
    if request.method == "GET":
        videoall = Video.objects.all()
        authorall = Author.objects.all()
        context = {"allvideo": videoall,"allauthor": authorall}
        return render(request, 'video_list.html', context)
    
def get_videoauther(request):
    if request.method == "GET":
        authorall = Author.objects.all()
        context = {"allauthor": authorall}
        return render(request, 'author_list.html', context)