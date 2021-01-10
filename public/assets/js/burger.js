/**
 *  server side javascript to handle events and html methods
 *  props to meech the dj for inspiration on this code
 */

$(function () {
    $(`.card-body`).on(`submit`, (event) => {

        event.preventDefault();

        let burgerToAdd = {
            burger_name: $(`#burger_name`).val().trim(),
            devoured: 0,
        };

        $.ajax(`/api/burgers`, {
            type: `POST`,
            data: burgerToAdd,
        }).then(() => location.reload());
    });

    $(`.eat`).on(`click`, function () {
        let id = $(this).data(`id`);
        let newlyDevoured = $(this).data(`newDevoured`);

        let newDevouredBurger = {
            devoured: newlyDevoured,
        };

        $.ajax(`/api/burgers/${id}`, {
            type: `PUT`,
            data: newDevouredBurger,
        }).then(() => location.reload());
    });

    $(`.trash`).on(`click`, function () {
        let id = $(this).data(`id`);
        $.ajax(`/api/burgers/${id}`, {
            type: `DELETE`,
        }).then(() => location.reload());
    });
});