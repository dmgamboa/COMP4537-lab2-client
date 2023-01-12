const SERVER_URL = 'https://comp4537-lab2-server.onrender.com';

$(document).ready(function() {
	$('#chatbot-form').submit(function(event) {
		event.preventDefault();
		const message = $('#chatbot-input').val();

		$.ajax({
			type: 'POST',
			url: `${SERVER_URL}/chatbot`,
			data: JSON.stringify({ message }),
			contentType: "application/json; charset=utf-8",
			success: function(response) {
				$('#chatbot-response').text(response.text);
                let newMessage = $('<div>', {
                    class: 'message'
                }).text(response.text);
                let removeButton = $('<button>', {
                    class: 'remove-button'
                }).text('Remove');
                newMessage.append(removeButton);
                $('#chat-history').append(newMessage);
			}
		});
	});
});

$(document).on('click', '.remove-button', function() {
	$(this).parent().remove();
});