$(function () {
	var Accordion = function (el, multiple) {
		this.el = el || {};
		this.multiple = multiple || false;

		var links = this.el.find(".article-title");
		links.on(
			"click",
			{
				el: this.el,
				multiple: this.multiple
			},
			this.dropdown
		);
	};

	Accordion.prototype.dropdown = function (e) {
		var $el = e.data.el;
		($this = $(this)), ($next = $this.next());

		$next.slideToggle();
		$this.parent().toggleClass("open");

		if (!e.data.multiple) {
			$el
				.find(".accordion-content")
				.not($next)
				.slideUp()
				.parent()
				.removeClass("open");
		}
	};
	var accordion = new Accordion($(".accordion-container"), false);
});

$(document).on("click", function (event) {
	if (!$(event.target).closest("#accordion").length) {
		$this.parent().toggleClass("open");
	}
});

// $(document).on('click', function (event) {
// if (!$(event.target).closest('#accordion').length) {
// $this.parent().toggleClass('open');
// }
// });
// var acc=document.getElementsByClassName("title");
// var i;
// for (i = 0; i < acc.length; i++) {
//     acc[i].addEventListener("click", function(){
//         this.classList.toggle("active");
//         var con = this.nextElementSibling;
//         if(con.style.display === "block"){
//             con.style.display = "none";
//         }else{
//             con.style.display = "block";
//         }
//     });
// }
$(document).reaady(function(){
    // 초기화
    $(".")
    $("h3.title").on('click', function(){
        $(this).next(".con").slideToggle(100);
    });
});
