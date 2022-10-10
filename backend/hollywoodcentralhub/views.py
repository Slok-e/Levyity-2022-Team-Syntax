# Create your views here.
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status, serializers
from .models import parkreservation
from .serializer import parkserializer

@api_view(['GET'])
def ApiOverview(request):
	api_urls = {
		'all_items': '/',
		'Search by Parkname': '/?parkname=park_name',
		'Search by Address': '/?address=address_name',
		'Search by Pavillion': '?pavillion=pavillion_number',
		'Add': '/create',
		'Update': '/update/pk',
		'Delete': '/item/pk/delete'
	}

	return Response(api_urls)

@api_view(['POST'])
def create_reservation(request):
    park_choice = parkserializer(data=request.data)
  
    # validating for already existing data
    if park_choice.objects.filter(**request.data).exists():
        raise serializers.ValidationError('This data already exists')
  
    if park_choice.is_valid():
        park_choice.save()
        return Response(park_choice.data)
    else:
        return Response(status=status.HTTP_404_NOT_FOUND)