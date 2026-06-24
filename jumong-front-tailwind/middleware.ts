import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";


export function middleware(request:NextRequest){

 const user = request.cookies.get("user");


 const pathname = request.nextUrl.pathname;


 if(pathname.startsWith("/admin")){

   if(!user){

     return NextResponse.redirect(
       new URL("/login",request.url)
     );

   }

 }


 if(
   pathname.startsWith("/checkout") ||
   pathname.startsWith("/payment")
 ){

   if(!user){

     return NextResponse.redirect(
       new URL("/login",request.url)
     );

   }

 }



 return NextResponse.next();

}



export const config = {
 matcher:[
  "/admin/:path*",
  "/checkout/:path*",
  "/payment/:path*"
 ]
}