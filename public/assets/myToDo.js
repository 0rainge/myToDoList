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


        $('li').on('click', function() {
            var item = $(this).text().trim().replace(/ /g, "-");
            $.ajax({
                type: 'DELETE',
                url: '/todo/' + item,
                success: function(data) {
                    
                    location.reload();
                }
            });
        });



    }

);