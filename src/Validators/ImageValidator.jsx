
const ImageValidator = (e) => {
    if (e.target.files.length === 1) {
        let pic = e.target.files[0]
        if (!["image/jpeg", "image/jpg", "image/png", "image/gif", "image/webp"].includes(pic.type)) {
            return "Invalid pic format allow formats are .jpg,.jpeg,.png,.gif,.webp"
        }
        else if (pic.size > 1048576) {  // 1048576 bytes = 1mb
            return "Pic size is too heavy please upload an image upto 1 mb"

        }

        return ""
    }
    else {
        let errorMessage = []
        Array.from(e.target.files).forEach((pic, index) => {
            if (!["image/jpeg", "image/jpg", "image/png", "image/gif", "image/webp"].includes(pic.type)) {
                errorMessage.push(`Invalid Pics${index + 1} Format Allowed Formats are .jpg, .jpeg, .png, .gif`)
            }
            else if (pic.size > 1048576) {  // 1048576 bytes = 1mb
                errorMessage.push(`Pic${index + 1} size is too heavy please upload an image upto 1 mb`)

            }


        })
        return errorMessage.length===0?"": errorMessage.join("|")


    }
}

export default ImageValidator
