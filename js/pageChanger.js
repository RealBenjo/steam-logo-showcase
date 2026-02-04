// important elements
const purchasePageMain = document.getElementById('purchase_page_main');
const responsivePageTemplateContent = document.getElementById('responsive_page_template_content');
const responsiveStoreNavCtn = document.getElementById('responsive_store_nav_ctn');

function changePage(pageID) {
  // hide the important elements
  responsivePageTemplateContent.style.display = 'none';
  responsiveStoreNavCtn.style.display = 'none';

  purchasePageMain.style.display = 'block';
}

function GoToAppPage() {
  purchasePageMain.style.display = 'none';

  responsivePageTemplateContent.style.display = 'block';
  responsiveStoreNavCtn.style.display = 'block';
}