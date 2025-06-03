import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import AuthContext from "../../context/AuthContext/AuthContext";

const SocialLogin = () => {
  const { signInWithGoogle } = useContext(AuthContext);

  const handleSignInWithGoogle = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="flex items-center justify-center text-2xl gap-5 mb-3">
      <p>
        <FaGithub></FaGithub>
      </p>
      <p className="text-blue-500">
        <FaFacebook></FaFacebook>
      </p>
      <p onClick={handleSignInWithGoogle} className="text-rose-500">
        <FaGoogle></FaGoogle>
      </p>
    </div>
  );
};

export default SocialLogin;
