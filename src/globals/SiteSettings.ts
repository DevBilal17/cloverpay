import type { GlobalConfig } from "payload";


export const SiteSettings:GlobalConfig  = {
    slug  : "site-settings",
    admin : {
        group : "Settings"
    },    
    fields : [
        {
            type : "tabs",
            tabs : [
                {
                    label : "General",
                    fields : [
                        {
                            name : "siteName",
                            label : "Site Name",
                            required : true,
                            type : "text"
                        },
                        {
                            name : "logo",
                            label : "Logo",
                            type : "upload",
                            relationTo : "media"
                        },
                        {
                            name : "phoneNumber",
                            label : "Phone Number",
                            type : "text"
                        },
                        {
                            name : "emailAddress",
                            label : "Email Address",
                            type : "email"
                        }
                    ]
                },{
                    label : "Footer",
                    fields : [
                        {
                            name : "copyrightText",
                            label : "Copyright Text",
                            type : "text",
                        },
                        {
                            name : "legalText",
                            label : "Legal Text",
                            type : "textarea"
                        }
                    ]
                },
                {
                    label : "SEO",
                    fields : [
                        {
                            name : "defaultMetaTitle",
                            label : "Default Meta Title",
                            type : "text"
                        },
                        {
                            name : "defaultMetaDescription",
                            label : "Default Meta Description",
                            type : "textarea"
                        },
                        {
                            name : "openGraphImage",
                            label : "Open Graph Image",
                            type : "upload",
                            relationTo : 'media'
                        },
                        {
                             name : "favicon",
                            label : "Favicon",
                            type : "upload",
                            relationTo : 'media'
                        }
                    ]
                }
            ]
        }
    ]
}