from django.shortcuts import render
from .models import Product
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializer import ProductSerializer
# Create your views here.

class ProductListView(APIView):
    def get(self, request):
        Products=Product.objects.all()
        context={
            'request': request
        }
        serializer = ProductSerializer(Products, many=True, context=context)
        return Response(serializer.data)