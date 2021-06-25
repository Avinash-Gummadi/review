// terms and conditions
$(document).ready(function() {
	// terms and services
	var terms_service = $('#terms_service').offset().top;
		$("#terms_id").click(function(event) {
				event.preventDefault();
				$(".right-flex").animate({ scrollTop: terms_service }, "slow");
				return false;
		});
		$("#terms_id2").click(function(event) {
				event.preventDefault();
				$(".right-flex").animate({ scrollTop: terms_service }, "slow");
				return false;
		});
// privacy policy
		var privacy_policy = $('#privacy_policy').offset().top;
		$("#privacy_id").click(function(event) {
				event.preventDefault();
				$(".right-flex").animate({ scrollTop: privacy_policy }, "slow");
				return false;
		});
		$("#privacy_id2").click(function(event) {
				event.preventDefault();
				$(".right-flex").animate({ scrollTop: privacy_policy }, "slow");
				return false;
		});
// cookie policy
		var cookie_policy = $('#cookie_policy').offset().top;
		$("#cookie_id").click(function(event) {
				event.preventDefault();
				$(".right-flex").animate({ scrollTop: cookie_policy }, "slow");
				return false;
		});
		$("#cookie_id2").click(function(event) {
				event.preventDefault();
				$(".right-flex").animate({ scrollTop: cookie_policy }, "slow");
				return false;
		});
});
