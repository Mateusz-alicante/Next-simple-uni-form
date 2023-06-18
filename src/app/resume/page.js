"use client";

import { useForm } from "react-hook-form";
import { useAtom } from "jotai";
import { linkedInAccountAtom } from "../../utils/atoms";
import { useRouter } from "next/navigation";

export default () => {
  const router = useRouter();
  const [linkedInAccount, setLinkedInAccount] = useAtom(linkedInAccountAtom);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setLinkedInAccount(data.linkedin);
    console.log(data.linkedin);
    router.push("/finish");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <p>...Let me know if the backend can handle file upload...</p>
      <label>Tell us more about your you</label>
      <label>Whats your Linkedin?</label>
      <input {...register("linkedin")} />
      <input type="submit" />
    </form>
  );
};
