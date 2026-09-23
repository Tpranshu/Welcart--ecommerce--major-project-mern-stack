
const TextValidators = (e) => {
    let { name, value } = e.target

    switch (name) {
        case "name":
        case "icon":
            if (!value || value.length === 0)
                return name + "Field is mendatory"
            else if (value.length < 3 || value.length > 100)
                return name + "Field length must be 3-100"
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
