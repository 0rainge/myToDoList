$(function () {

        $('form').on('submit', function (event) {
            event.preventDefault();
            var item = $('form input');
            var flag = {
                item: item.val().trim()
            };

            $.ajax({
                type: 'POST',
                url: '/todo',
                data: flag,
                success: function (data) {
                    location.reload();
                }
            });

            return false;

        });
    }

);