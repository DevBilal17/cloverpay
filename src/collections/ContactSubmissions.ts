import { CollectionConfig } from "payload";

export const ContactSubmission : CollectionConfig = {
    slug : "contact-submission",
    admin : {
        group : "Admin"
    },
    fields : [
        {
            name : "firstName",
            label : "First Name",
            type : "text",
            required : true
        },
                {
            name : "lastName",
            label : "Last Name",
            type : "text",
            required : true
        },
                {
            name : "email",
            label : "Email",
            type : "email",
            required : true
        },
                {
            name : "phone",
            label : "Phone",
            type : "text",
        },
                {
            name : "message",
            label : "Message",
            type : "textarea",
            required : true
        },
    ]
}