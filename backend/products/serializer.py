from rest_framework import serializers
from .models import Product

class ProductSerializer(serializers.ModelSerializer):
    image = serializers.SerializerMethodField()
    def get_image(self,prod_object):
        request  = self.context.get('request')
        if  prod_object.image:
            return request.build_absolute_uri(prod_object.image.url)
        return None

    class Meta:
        model = Product
        fields = '__all__'

        
