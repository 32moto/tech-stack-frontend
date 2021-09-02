import { useEffect } from "react";
import { auth } from "@/libs/firebase/auth";
import { authRepository } from "@/repository/authRepository";

export const useListenAuthState = () => {
  const [ mutateCurrentUser ] = authRepository().useMutateCurrentUser()
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if(user) {
        console.log(user);
        // mutateCurrentUser({variables: {
        //   id: user.uid,
        //   name: user.displayName || '',
        //   iconPath: user.photoURL
        // }})
      }else {
        console.log(user);
        // mutateCurrentUser({variables: null})
      }
    })
  }, [mutateCurrentUser])
}