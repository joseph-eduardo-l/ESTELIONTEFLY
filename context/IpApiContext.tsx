import { createContext, ReactNode } from "react"
import { useIpApi } from "../pages/api/ipapi"
import phoneObject from "../global/countryArr"
type Props = {
     children: ReactNode
}
/**
 * IpApiContext is the useContext than used in the components or files with the all code of the Web Site 
 */
export const IpApiContext = createContext({ country: "United States", link: "tel:+1(305)9653550", phone: '+1(305)9653550' })

/**
 * Context Provider with execute the api of geolocation once in all code of the Web Site
 */
export function IpApiContextProvider({children} : Props) : any{
     if (typeof window !== "undefined") {
          if ((("Venezuela" || "Panama" || "United States") == window.sessionStorage.getItem("country")) && (("tel:+584123172765" || "tel:+5078339384" || "tel:+1(305)9653550") == window.sessionStorage.getItem("link")) && (("+58(412)3172765" || "+507(833)9384" || "+1(305)9653550") == window.sessionStorage.getItem("phone"))) {
               
               const link: any = window.sessionStorage.getItem("link")
               const country: any = window.sessionStorage.getItem("country")
               const phone: any = window.sessionStorage.getItem("phone")
               let value = {
                    country :  country,
                    link : link,
                    phone : phone
               }
               return (
                    <IpApiContext.Provider value={value}>
                         {children}
                    </IpApiContext.Provider>
               )
          }
          else {
               const { ipApi } = useIpApi()
               let definitiveResult = phoneObject.filter(
                    (country) => country.country === ipApi?.country
               )
               if (definitiveResult.length === 0) definitiveResult.push({ country: "United States", link: "tel:+1(305)9653550", phone: "+1(305)9653550" })
               const resultToRender = definitiveResult[0]

               const link = resultToRender.link
               const country = resultToRender.country
               const phone = resultToRender.phone
               window.sessionStorage.setItem("link", resultToRender.link)
               window.sessionStorage.setItem("phone", resultToRender.phone)
               window.sessionStorage.setItem("country", resultToRender.country)

               let value = {
                    country,
                    link,
                    phone
               }
               return (
                    <IpApiContext.Provider value={value}>
                         {children}
                    </IpApiContext.Provider>
               )
          }
     }
}

