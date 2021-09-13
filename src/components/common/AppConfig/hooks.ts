import { useEffect } from "react";
import { auth, convertToUser } from "@/libs/firebase/auth";
// import { useSetCurrentUser } from "@/application/auth/usecase";

export const useListenAuthState = () => {
  // const [ setCurrentUser ] = authRepository().useSetCurrentUser()
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if(user) {
        const convertedUser = convertToUser(user)
        // setCurrentUser({variables: convertToUser(user)})
      }else {
        console.log(user);
        // setCurrentUser({variables: null})
      }
    })
  // }, [setCurrentUser])
  }, [])
}