const reports = `<ul class="ar__report_list">
					<li class="inline-block text-gray-900 border-b mb-5">
						<h3 class="ar__rp_title mb-1"><a class="text-blue-800 font-semibold text-lg" href="/report.html">Global Heat Meters Market Analysis & Trends - Industry Forecast to 2027</a></h3>
						<p class="font-sans inline">The Global Heat Meters Market is poised to grow strong during the forecast period 2017 to 2027. Some of the prominent trends that the market is witnessing include rising investments toward the development of sustainable heating technologies, increase...</p><a class="text-yellow-600" href="javascript:void(0)">Read more</a>
						<div class="ar__meta flex flex-wrap items-center mt-2 mb-5 text-sm">
							<a href="javascript:void(0)" class="bg-gray-100 border border-gray-400 px-2 rounded mr-1">SKU: <span class="font-semibold">ACR124916</span></a>
							<a href="javascript:void(0)" class="bg-gray-100 border border-gray-400 px-2 rounded mr-1">Price: <span class="font-semibold">$4200</span></a>
							<a href="javascript:void(0)" class="bg-gray-100 border border-gray-400 px-2 rounded mr-1">Published: <span class="font-semibold">Jan-2019</span></a>
						</div>
					</li>
				</ul>`;

function getReports(element){
	let el = document.getElementById(element);
	el.innerHTML = reports;
}

function onPageScroll() {
  var element = document.getElementById("ar__navigation");
  var view = document.getElementById("ar__view");
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    element.classList.add("active");
    // view.classList.add("active");
  } else {
    element.classList.remove("active");
    // view.classList.remove("active");
  }
}

// window.onload = function() { getReports('ar__reports') };
window.onscroll = function() {onPageScroll()};