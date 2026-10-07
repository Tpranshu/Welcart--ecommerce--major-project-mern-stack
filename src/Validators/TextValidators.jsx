import PasswordValidator from "password-validator"

const schema = new PasswordValidator();

schema
    .is().min(8)                                    // Minimum length 8
    .is().max(100)                                  // Maximum length 100
    .has().uppercase(1)                              // Must have uppercase letters
    .has().lowercase(1)                              // Must have lowercase letters
    .has().digits(1)                                // Must have at least 2 digits
    .has().symbols(1)                                // Must have at least 2 digits
    .has().not().spaces()                           // Should not have spaces
    .is().not().oneOf(['Passw0rd', 'Password123']); // Blacklist these values



const TextValidators = (e) => {
    let { name, value } = e.target

    switch (name) {
        case "name":
        case "username":
        case "icon":
            if (!value || value.length === 0)
                return name + "Field is mendatory"
            else if (value.length < 3 || value.length > 100)
                return name + "Field length must be 3-100"
            else
                return ""

        case "email":
            if (!value || value.length === 0)
                return name + "Field is mendatory"
            else if (value.length < 13 || value.length > 100)
                return name + "Field length must be 13-100"
            else
                return ""

        case "phone":
            if (!value || value.length === 0)
                return name + "Field is mendatory"
            else if (value.length < 10 || value.length > 10)
                return name + "Field length must be 10"
            else if (!["6", "7", "8", "9"].includes(value[0])) {
                return "Invalid Phone Number, Phone Number Must Start With 6,7,8 or 9"

            }
            else
                return ""


        case "password":
            if (!value || value.length === 0)
                return name + "Field is mendatory"
            else if (!schema.validate(value))
                return schema.validate(value, { details: true }).map(x => x.message.replaceAll("string", "password"))
            else
                return ""

        default: return ""

        case "shortDescription":
        case "answer":
        case "question":
            if (!value || value.length === 0)
                return name + "Field is mendatory"
            else if (value.length < 20 || value.length > 1000)
                return name + "Field length must be 20-1000"
            else
                return ""

        case "basePrice":
            if (!value || value.length === 0)
                return "Base Price field is mendatory"
            else if (parseInt(value) < 1)
                return "Base price must be greather than 1"
            else
                return ""


        case "discount":
            if (!value || value.length === 0)
                return "Discount field is mendatory"
            else if (parseInt(value) < 0 || parseInt(value) > 100)
                return "Discount must be 0-100"
            else
                return ""


        case "discount":
            if (!value || value.length === 0)
                return "Discount field is mendatory"
            else if (parseInt(value) < 0 || parseInt(value) > 100)
                return "Discount must be 0-100"
            else
                return ""

        case "stockQuantity":
            if (!value || value.length === 0)
                return "Stock Quantity field is mendatory"
            else if (parseInt(value) < 0)
                return "Stock Quantity must be 0 or greather than 0"
            else
                return ""



    }

}

export default TextValidators
