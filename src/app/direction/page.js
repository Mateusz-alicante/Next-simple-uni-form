"use client";

import { useForm } from "react-hook-form";
import { useAtom } from "jotai";
import { dreamMayorAtom, dreamSchoolAtom } from "../../utils/atoms";
import { useRouter } from "next/navigation";

export default () => {
  const router = useRouter();

  const [dreamMayor, setDreamMayor] = useAtom(dreamMayorAtom);
  const [dreamSchool, setDreamSchool] = useAtom(dreamSchoolAtom);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setDreamMayor(data.dreamMayor);
    setDreamSchool(data.dreamSchool);
    console.log(data.dreamMayor);
    console.log(data.dreamSchool);
    router.push("/resume");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Tell us more about your search</label>
      <label>Whats your dream school?</label>
      <input {...register("dreamSchool")} />
      <label>Whats your dream mayor?</label>
      <input {...register("dreamMayor")} />
      <input type="submit" />
    </form>
  );
};
