$(function() {
  // Initialize form validation
  $("#register-form").validate({
    rules: {
      firstName: {
        required: true,
        minlength: 5
      },
      lastName: {
        required: true,
        minlength: 5
      },
      email: {
        required: true,
        email: true
      },
      password: {
        required: true,
        minlength: 6
      },
      passwordConfirm: {
        required: true,
        minlength: 6,
        equalTo: "#password"
      },
      agreement: {
        required: true
      }
    },
    messages: {
      firstName: {
        required: "Please enter your first name",
        minlength: $.validator.format("Please enter at least {0} characters") // Format validation message
      },
      lastName: {
        required: "Please enter your last name",
        minlength: $.validator.format("Please enter at least {0} characters") // Format validation message
      },
      email: {
        required: "Please enter your email",
        email: "Your email is not valid"
      },
      password: {
        required: "Please provide your password",
        minlength: $.validator.format("Please enter at least {0} characters") // Format validation message
      },
      passwordConfirm: {
        required: "Please repeat your password",
        minlength: $.validator.format("Please enter at least {0} characters"), // Format validation message
        equalTo: "Your password is not match"
      },
      agreement: {
        required: "Check to accept the agreement"
      }
    },
    highlight: (element, errorClass, validClass) => {
			$(element).addClass('is-invalid')
      $(element).removeClass('is-valid')
		},
		unhighlight: (element, errorClass, validClass) => {
			$(element).removeClass('is-invalid')
      $(element).addClass('is-valid')
		},
		errorPlacement: (error, element) => {
      error.addClass('invalid-feedback')
      element.closest('.validation-container').append(error)
    },
    submitHandler: form => {
      form.submit() // Submit form
    }
  })
})
