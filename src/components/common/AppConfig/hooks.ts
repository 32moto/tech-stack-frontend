import { useEffect } from "react";
import { auth, convertToUser } from "@/libs/firebase/auth";
import { authRepository } from "@/repository/authRepository";

export const useListenAuthState = () => {
  const [ setCurrentUser ] = authRepository().useSetCurrentUser()
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if(user) {
        console.log(user);
        const convertedUser = convertToUser(user)
        console.log(convertedUser);
        // setCurrentUser({variables: convertToUser(user)})
      }else {
        console.log(user);
        // setCurrentUser({variables: null})
      }
    })
  }, [setCurrentUser])
}