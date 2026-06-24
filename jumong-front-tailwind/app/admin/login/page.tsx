"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { useAppDispatch } from "@/store/hooks";
import { login } from "@/store/slices/authSlice";


const AdminLogin = () => {

  const router = useRouter();
  const dispatch = useAppDispatch();

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [loading,setLoading] = useState(false);



  const submit = async(
    e:React.FormEvent
  )=>{

    e.preventDefault();

    setLoading(true);

    try{

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
        {
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify({
            email,
            password
          })
        }
      );


      const data = await res.json();


      if(!res.ok){
        throw new Error(
          data.message || "Login failed"
        );
      }


      console.log("LOGIN RESPONSE", data);



      // Adapt backend response
      const authData = {

        user:{
          email,
          role:"ADMIN"
        },

        token:data.access_token,

        refreshToken:data.refresh_token
      };


      dispatch(login(authData));


      toast.success(
        "Login successful"
      );


      router.push("/admin");


    }catch(error){

      toast.error(
        error instanceof Error
        ? error.message
        : "Login failed"
      );

    }finally{
      setLoading(false);
    }

  };



return (

<form
onSubmit={submit}
className="
max-w-md mx-auto mt-20
bg-white p-6 rounded-xl shadow space-y-4
"
>


<h1 className="text-xl font-bold">
Admin Login
</h1>


<input
className="border p-2 w-full"
placeholder="Email"
value={email}
onChange={
e=>setEmail(e.target.value)
}
/>



<input
type="password"
className="border p-2 w-full"
placeholder="Password"
value={password}
onChange={
e=>setPassword(e.target.value)
}
/>



<button
disabled={loading}
className="
bg-yellow-400
w-full
p-2
rounded
"
>

{
loading
?
"Logging in..."
:
"Login"
}

</button>


</form>

)

}


export default AdminLogin;