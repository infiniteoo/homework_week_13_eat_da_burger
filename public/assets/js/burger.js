$(() => {
    $(".card-body").on("submit", function (event) {

        event.preventDefault();

        let newBurger = {
            burger_name: $("#burger_name").val().trim(),
            devoured: 0,
        };


        $.ajax('/api/burgers', {
            type: "POST",
            data: newBurger,
        }).then(function () {

            location.reload();
        });
    });

    $(".eat").on('click', () => {
        let id = $(this).data("id");
        let newDevoured = $(this).data("newDevoured");

        let newDevouredBurger = {
            devoured: newDevoured,
        };

        $.ajax(`/api/burgers/${id}`, {
            type: "PUT",
            data: newDevouredBurger,
        }).then(() => {
            location.reload();
        });
    });

    $(".trash").on("click", () => {
        let id = $(this).data("id");
        $.ajax(`/api/burgers/${id}`, {
            type: "DELETE",
        }).then(() => {
            location.reload();
        });
    });
});