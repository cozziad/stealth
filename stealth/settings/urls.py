from rest_framework import routers
from .api import ContactInfoViewset

router = routers.DefaultRouter()
router.register('api/contactInfo', ContactInfoViewset, 'contactInfo')

urlpatterns = router.urls
