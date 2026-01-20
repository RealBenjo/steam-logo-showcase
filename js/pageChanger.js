function changePage(pageID) {
  // get the pages we dont want to see
  const purchasePageMain = document.getElementById('purchase_page_main');
  const responsivePageTemplateContent = document.getElementById('responsive_page_template_content');
  const responsiveStoreNavCtn = document.getElementById('responsive_store_nav_ctn');

  // hide them
  purchasePageMain.style.display = 'none';
  responsivePageTemplateContent.style.display = 'none';
  responsiveStoreNavCtn.style.display = 'none';

  // get the page we want to show and show it :o
  const pageToShow = document.getElementById(pageID);
  pageToShow.style.display = 'block';

  console.log(pageToShow);
}

function GoToAppPage() {
  
}