$(document).ready(function () {
    $("#myForm").validate({
        rules: {
            name: "required",
            email: {
                required: true,
                email: true
            },
            comments: {
                required: true,
                minlength: 6
            }
        },
        messages: {
            name: "Please enter your name",
            email: {
                required: "Please enter your email",
                email: "Please enter a valid email address"
            },
            comments: {
                required: "Please enter a comment.",
                minlength: "Comment must be at least 6 characters long"
            }
        }
    });
});